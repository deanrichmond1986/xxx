package funcs

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"project/db/operations"
	"project/global"
	"sort"
	"strconv"
)
type TopAdminUser struct {
	Place     int    `json:"place"`
	FirstName string `json:"first_name"`
	Balance   int32  `json:"balance"`
	AvatarURL string `json:"avatar_url"`
	TelegramID int    `json:"telegram_id"`
	Date       string `json:"date"`
}
type TopAdminResult struct {
	UserPosition TopAdminUser   `json:"user_position"`
	Top10        []TopAdminUser `json:"top_10"`
}
func HandleAdminTop(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		global.RespondWithError(w, http.StatusMethodNotAllowed, "Only POST method is allowed")
		return
	}
	var userInfo global.UserInfo
	if err := json.NewDecoder(r.Body).Decode(&userInfo); err != nil {
		global.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}
	users, err := operations.GetAllUsers(r.Context())
	if err != nil {
		global.RespondWithError(w, http.StatusInternalServerError, "Failed to get users")
		return
	}
	sortUsersByAdminBalance(users)
	result := processAdminUsers(users, userInfo.TelegramID)
	global.RespondWithJson(w, http.StatusOK, map[string]interface{}{
		"result": result,
	})
}
func sortUsersByAdminBalance(users []map[string]interface{}) {
	sort.Slice(users, func(i, j int) bool {
		balanceI, okI := users[i]["balance"].(int32)
		balanceJ, okJ := users[j]["balance"].(int32)
		return okI && okJ && balanceI > balanceJ
	})
}
func processAdminUsers(users []map[string]interface{}, targetUserID int) TopAdminResult {
	var result TopAdminResult
	
	result.Top10 = make([]TopAdminUser, 0, 10)
	for i, user := range users {
		firstName, _ := user["top_name"].(string)
		balance, _ := user["balance"].(int32)
		position := i + 1
		var avatarURL string
		if position > 11 {
			avatarURL = user["avatar_url"].(string)
		} else {
			avatarURL = fmt.Sprintf("https://khabyminero.com/get_avatar?telegram_id=%d", position)
		}

		if fmt.Sprint(user["user_id"]) == strconv.Itoa(targetUserID) {
			firstName = user["first_name"].(string)
			avatarURL = user["avatar_url"].(string)
		}

		topUser := TopAdminUser{
			Place:     position,
			FirstName: firstName,
			Balance:   balance,
			AvatarURL: avatarURL,
			TelegramID: targetUserID,
			Date: user["joined_at"].(string),
		}
		log.Println(user["user_id"], targetUserID)
		if fmt.Sprint(user["user_id"]) == strconv.Itoa(targetUserID) {
			log.Println(topUser)
			result.UserPosition = topUser
		}
		if position <= 10 {
			result.Top10 = append(result.Top10, topUser)
		}
	}
	return result
}