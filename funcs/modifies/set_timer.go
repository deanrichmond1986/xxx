package modifies

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/mongo"

	"project/db/operations"
	"project/global"
)

func HandleSetTimer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		global.RespondWithError(w, http.StatusMethodNotAllowed, "Only POST method is allowed")
		return
	}

	var timerInfo struct {
		TelegramID int `json:"telegram_id"`
		Days       int `json:"days,omitempty"` // Опциональное поле, по умолчанию 30 дней
	}

	if err := json.NewDecoder(r.Body).Decode(&timerInfo); err != nil {
		global.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	if timerInfo.TelegramID == 0 {
		global.RespondWithError(w, http.StatusBadRequest, "telegram_id is required")
		return
	}

	// Если дни не указаны, устанавливаем 30 дней по умолчанию
	if timerInfo.Days <= 0 {
		timerInfo.Days = 30
	}

	endTime := time.Now().AddDate(0, 0, timerInfo.Days)

	err := operations.SetUserTimer(r.Context(), timerInfo.TelegramID, endTime)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			global.RespondWithError(w, http.StatusNotFound, "User not found")
		} else {
			log.Printf("Error updating user timer: %v", err)
			global.RespondWithError(w, http.StatusInternalServerError, "Internal server error")
		}
		return
	}

	global.RespondWithJson(w, http.StatusOK, map[string]interface{}{
		"message": "Timer set successfully",
		"end_time": endTime,
		"days": timerInfo.Days,
	})
	log.Printf("Successfully set %d days timer for user %d", timerInfo.Days, timerInfo.TelegramID)
}
