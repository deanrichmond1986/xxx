package funcs

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"project/db/operations"
	"project/global"

	"go.mongodb.org/mongo-driver/mongo"
)

func HandleGetTimer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		global.RespondWithError(w, http.StatusMethodNotAllowed, "Only POST method is allowed")
		return
	}

	var userInfo global.UserTimerInfo
	if err := json.NewDecoder(r.Body).Decode(&userInfo); err != nil {
		global.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	if userInfo.TelegramID == 0 {
		global.RespondWithError(w, http.StatusBadRequest, "telegram_id is required")
		return
	}

	timer, err := operations.GetUserTimer(r.Context(), userInfo.TelegramID)
	if err != nil {
		// Если таймер не найден для пользователя, создаем новый на 30 дней
		if err == mongo.ErrNoDocuments {
			newTimer := time.Now().AddDate(0, 0, 30) // 30 дней от текущего времени
			err = operations.SetUserTimer(r.Context(), userInfo.TelegramID, newTimer)
			if err != nil {
				fmt.Println("Error creating timer:", err)
				global.RespondWithError(w, http.StatusInternalServerError, "Failed to create timer")
				return
			}
			timer = newTimer
		} else {
			fmt.Println("Error getting timer:", err)
			global.RespondWithError(w, http.StatusInternalServerError, "Internal server error")
			return
		}
	}

	// Проверяем, не истек ли таймер
	now := time.Now()
	if timer.Before(now) {
		// Если таймер истек, создаем новый зацикленный таймер на 30 дней
		newTimer := now.AddDate(0, 0, 30)
		err = operations.SetUserTimer(r.Context(), userInfo.TelegramID, newTimer)
		if err != nil {
			fmt.Println("Error resetting timer:", err)
			global.RespondWithError(w, http.StatusInternalServerError, "Failed to reset timer")
			return
		}
		timer = newTimer
	}

	daysLeft := int(timer.Sub(now).Hours() / 24)
	if daysLeft < 0 {
		daysLeft = 0
	}

	global.RespondWithJson(w, http.StatusOK, map[string]interface{}{
		"days_left": daysLeft,
		"timer_end": timer,
	})
}
