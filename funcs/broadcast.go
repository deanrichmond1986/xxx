package funcs

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"project/db/operations"
	"project/global"
	"time"
)

// BroadcastStats - статистика рассылки
type BroadcastStats struct {
	TotalUsers    int `json:"total_users"`
	SentCount     int `json:"sent_count"`
	FailedCount   int `json:"failed_count"`
	IsRunning     bool `json:"is_running"`
	StartTime     time.Time `json:"start_time"`
	EndTime       time.Time `json:"end_time"`
}

// BroadcastMessage - структура сообщения для рассылки
type BroadcastMessage struct {
	FromChatID int64  `json:"from_chat_id"`
	MessageID  int    `json:"message_id"`
	Text       string `json:"text,omitempty"`
}

var (
	currentBroadcast *BroadcastStats
	broadcastChannel = make(chan bool, 1)
)

// SendBroadcastMessage - отправка сообщения одному пользователю
func SendBroadcastMessage(botToken string, userID int, message BroadcastMessage) error {
	var botURL string
	var payload map[string]interface{}

	if message.FromChatID != 0 && message.MessageID != 0 {
		// Используем copyMessage
		botURL = fmt.Sprintf("https://api.telegram.org/bot%s/copyMessage", botToken)
		payload = map[string]interface{}{
			"chat_id":      userID,
			"from_chat_id": message.FromChatID,
			"message_id":   message.MessageID,
		}
	} else if message.Text != "" {
		// Отправляем текстовое сообщение
		botURL = fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", botToken)
		payload = map[string]interface{}{
			"chat_id": userID,
			"text":    message.Text,
		}
	} else {
		return fmt.Errorf("не указано сообщение для отправки")
	}

	jsonData, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("ошибка маршалинга: %v", err)
	}

	resp, err := http.Post(botURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return fmt.Errorf("ошибка отправки: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("ошибка API: %d", resp.StatusCode)
	}

	return nil
}

// StartBroadcast - запуск умной рассылки
func StartBroadcast(ctx context.Context, message BroadcastMessage, adminID int) (*BroadcastStats, error) {
	// Проверяем, не запущена ли уже рассылка
	if currentBroadcast != nil && currentBroadcast.IsRunning {
		return nil, fmt.Errorf("рассылка уже запущена")
	}

	// Получаем всех пользователей
	users, err := operations.GetAllUsers(ctx)
	if err != nil {
		return nil, fmt.Errorf("ошибка получения пользователей: %v", err)
	}

	// Загружаем конфиг
	config, err := global.LoadConfig()
	if err != nil {
		return nil, fmt.Errorf("ошибка загрузки конфига: %v", err)
	}

	// Инициализируем статистику
	stats := &BroadcastStats{
		TotalUsers:  len(users),
		SentCount:   0,
		FailedCount: 0,
		IsRunning:   true,
		StartTime:   time.Now(),
	}
	currentBroadcast = stats

	// Запускаем рассылку в горутине
	go func() {
		defer func() {
			currentBroadcast.IsRunning = false
			currentBroadcast.EndTime = time.Now()
			
			// Уведомляем админа о завершении
			notifyAdmin(config.Token, adminID, *currentBroadcast)
		}()

		for i, user := range users {
			// Получаем user_id
			userIDFloat, ok := user["user_id"].(float64)
			if !ok {
				userIDInt32, ok := user["user_id"].(int32)
				if !ok {
					userIDInt, ok := user["user_id"].(int)
					if !ok {
						log.Printf("Не удалось получить user_id для пользователя: %v", user)
						currentBroadcast.FailedCount++
						continue
					}
					userIDFloat = float64(userIDInt)
				} else {
					userIDFloat = float64(userIDInt32)
				}
			}
			
			userID := int(userIDFloat)

			// Отправляем сообщение
			err := SendBroadcastMessage(config.Token, userID, message)
			if err != nil {
				log.Printf("Ошибка отправки пользователю %d: %v", userID, err)
				currentBroadcast.FailedCount++
			} else {
				currentBroadcast.SentCount++
				log.Printf("Сообщение отправлено пользователю %d (%d/%d)", userID, i+1, len(users))
			}

			// Умная пауза для избежания лимитов
			// Telegram позволяет до 30 сообщений в секунду для ботов
			// Делаем паузу 50ms между сообщениями для безопастности
			time.Sleep(50 * time.Millisecond)

			// Каждые 20 сообщений делаем более длинную паузу
			if (i+1)%20 == 0 {
				time.Sleep(1 * time.Second)
				log.Printf("Пауза после %d сообщений", i+1)
			}
		}
	}()

	return stats, nil
}

// GetBroadcastStats - получение статистики текущей рассылки
func GetBroadcastStats() *BroadcastStats {
	return currentBroadcast
}

// StopBroadcast - остановка рассылки (пока не реализована)
func StopBroadcast() {
	if currentBroadcast != nil {
		currentBroadcast.IsRunning = false
	}
}

// notifyAdmin - уведомление админа о завершении рассылки
func notifyAdmin(botToken string, adminID int, stats BroadcastStats) {
	duration := stats.EndTime.Sub(stats.StartTime)
	
	text := fmt.Sprintf(
		"📊 *Рассылка завершена*\n\n"+
		"👥 Всего пользователей: %d\n"+
		"✅ Успешно отправлено: %d\n"+
		"❌ Ошибок: %d\n"+
		"⏱ Время выполнения: %v\n"+
		"📈 Успешность: %.1f%%",
		stats.TotalUsers,
		stats.SentCount,
		stats.FailedCount,
		duration.Round(time.Second),
		float64(stats.SentCount)/float64(stats.TotalUsers)*100,
	)

	botURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", botToken)
	payload := map[string]interface{}{
		"chat_id":    adminID,
		"text":       text,
		"parse_mode": "Markdown",
	}

	jsonData, _ := json.Marshal(payload)
	http.Post(botURL, "application/json", bytes.NewBuffer(jsonData))
}

// BroadcastHandler - HTTP обработчик для админки
func BroadcastHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	switch r.Method {
	case "GET":
		// Возвращаем статистику
		stats := GetBroadcastStats()
		if stats == nil {
			json.NewEncoder(w).Encode(map[string]interface{}{
				"status": "no_broadcast",
			})
			return
		}
		
		json.NewEncoder(w).Encode(stats)

	case "POST":
		// Стартуем новую рассылку
		var request struct {
			AdminID     int               `json:"admin_id"`
			Message     BroadcastMessage  `json:"message"`
		}

		if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		stats, err := StartBroadcast(r.Context(), request.Message, request.AdminID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		json.NewEncoder(w).Encode(map[string]interface{}{
			"status": "started",
			"stats":  stats,
		})
	}
} 