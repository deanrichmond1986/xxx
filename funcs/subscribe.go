package funcs

import (
	"context"
	"encoding/json"
	"net/http"
	"project/db/operations"
	"project/global"

	"go.mongodb.org/mongo-driver/bson"
)


func CheckSubscription(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		global.RespondWithError(w, http.StatusMethodNotAllowed, "Only POST method is allowed")
		return
	}

	var userInfo global.UserInfo
	if err := json.NewDecoder(r.Body).Decode(&userInfo); err != nil {
		global.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	if userInfo.TelegramID == 0 {
		global.RespondWithError(w, http.StatusBadRequest, "telegram_id is required")
		return
	}

	user, err := operations.Get(context.Background(), userInfo.TelegramID, bson.M{"user_id": userInfo.TelegramID})
	if err != nil {
		global.RespondWithError(w, http.StatusInternalServerError, "Failed to get user info")
		return
	}


	userModifies, ok := user["modifies"].(map[string]interface{})
	if !ok {
		global.RespondWithError(w, http.StatusInternalServerError, "Failed to get user modifies")
		return
	}


	global.RespondWithJson(w, http.StatusOK, map[string]interface{}{
		"subscribed": userModifies["subscribe_bonus"],
	})
}
