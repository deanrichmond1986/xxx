package funcs

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"project/db/operations"
	"project/global"
	"sort"
	"strconv"
)

type TopUser struct {
	Place     int    `json:"place"`
	FirstName string `json:"first_name"`
	Balance   int32  `json:"balance"`
	AvatarURL string `json:"avatar_url"`
}

type TopResult struct {
	UserPosition TopUser   `json:"user_position"`
	Top10        []TopUser `json:"top_10"`
}

func HandleTop(w http.ResponseWriter, r *http.Request) {
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

	// Генерируем 6000 фейковых пользователей
	fakeUsers := generateFakeUsers(6000)
	
	// Добавляем фейковых пользователей к настоящим
	users = append(users, fakeUsers...)

	sortUsersByBalance(users)
	result := processUsers(users, userInfo.TelegramID)

	global.RespondWithJson(w, http.StatusOK, map[string]interface{}{
		"result": result,
	})
}

func sortUsersByBalance(users []map[string]interface{}) {
	sort.Slice(users, func(i, j int) bool {
		balanceI, okI := users[i]["balance"].(int32)
		balanceJ, okJ := users[j]["balance"].(int32)
		return okI && okJ && balanceI > balanceJ
	})
}

func processUsers(users []map[string]interface{}, targetUserID int) TopResult {
	var result TopResult
	
	result.Top10 = make([]TopUser, 0, 10)
	for i, user := range users {
		firstName, _ := user["top_name"].(string)
		balance, _ := user["balance"].(int32)
		position := i + 1
		var avatarURL string
		if position > 11 {
			avatarURL, _ = user["avatar_url"].(string)
		} else {
			avatarURL = fmt.Sprintf("https://khabyminero.com/get_avatar?telegram_id=%d", position)
		}

		if fmt.Sprint(user["user_id"]) == strconv.Itoa(targetUserID) {
			firstName, _ = user["first_name"].(string)
			avatarURL, _ = user["avatar_url"].(string)
		}

		topUser := TopUser{
			Place:     position,
			FirstName: firstName,
			Balance:   balance,
			AvatarURL: avatarURL,
		}

		if fmt.Sprint(user["user_id"]) == strconv.Itoa(targetUserID) {
			result.UserPosition = topUser
		}

		if position <= 10 {
			result.Top10 = append(result.Top10, topUser)
		}
	}
	return result
}

func generateFakeUsers(count int) []map[string]interface{} {
	firstNames := []string{
		"Alex", "Blake", "Casey", "Drew", "Ethan", "Felix", "Grace", "Harper", "Ivan", "Jade",
		"Knox", "Luna", "Mason", "Nova", "Oscar", "Phoenix", "Quinn", "River", "Sage", "Theo",
		"Uma", "Victor", "Willow", "Xander", "Zara", "Adrian", "Bella", "Cole", "Diana", "Eli",
		"Fiona", "Gabriel", "Hazel", "Isaac", "Jasmine", "Kai", "Lily", "Max", "Nora", "Owen",
		"Piper", "Quincy", "Ruby", "Sam", "Tara", "Uri", "Vera", "Wade", "Ximena", "Yara",
		"Zoe", "Austin", "Brooke", "Carter", "Demi", "Evan", "Faith", "Gage", "Hope", "Ian",
		"Joy", "Kane", "Leah", "Miles", "Nina", "Oliver", "Paige", "Quest", "Rose", "Seth",
		"Tess", "Ulric", "Vale", "West", "Xara", "York", "Zane", "Aria", "Beck", "Cora",
		"Dean", "Elle", "Fox", "Gwen", "Heath", "Iris", "Jace", "Kira", "Lane", "Maya",
		"Nash", "Opal", "Penn", "Rue", "Shay", "Tate", "Vega", "Wren", "Zola", "Ace",
	}
	
	lastNames := []string{
		"Sterling", "Blackwood", "Ashford", "Nightingale", "Hawthorne", "Whitmore", "Goldstein", "Ramsey",
		"Sinclair", "Sterling", "Cross", "Vale", "Stone", "Rivers", "Woods", "Fields", "Brooks", "Hayes",
		"Wells", "Price", "Kane", "Reed", "Gray", "Hunt", "Fox", "Lane", "West", "North", "East", "South",
		"Winter", "Summer", "Spring", "Frost", "Snow", "Rain", "Storm", "Cloud", "Moon", "Star",
		"Sun", "Sky", "Ocean", "Lake", "Hill", "Valley", "Peak", "Ridge", "Grove", "Park",
		"Garden", "Rose", "Lily", "Sage", "Reed", "Pine", "Oak", "Ash", "Elm", "Birch",
		"Wilde", "Sharp", "Swift", "Strong", "Noble", "Bright", "Light", "Dark", "Grey", "Blue",
		"Green", "Gold", "Silver", "Diamond", "Ruby", "Pearl", "Jade", "Amber", "Crystal", "Steel",
		"Iron", "Stone", "Rock", "Sand", "Clay", "Earth", "Fire", "Water", "Air", "Wind",
		"Thunder", "Lightning", "Flash", "Bolt", "Arrow", "Blade", "Shield", "Crown", "King", "Queen",
	}

	fakeUsers := make([]map[string]interface{}, count)
	
	for i := 0; i < count; i++ {
		userID := 99990000 + i
		
		// Детерминированная генерация на основе userID
		seed := int64(userID)
		r := rand.New(rand.NewSource(seed))
		
		firstName := firstNames[r.Intn(len(firstNames))]
		lastName := lastNames[r.Intn(len(lastNames))]
		fullName := firstName + " " + lastName
		
		// Генерируем баланс от 100 до 99999 (неровные числа)
		balance := r.Intn(99900) + 100 // от 100 до 99999
		// Делаем баланс неровным
		balance = balance + r.Intn(99) // добавляем рандомные единицы
		
		// Большинство пользователей имеют небольшие балансы
		if r.Float32() < 0.8 { // 80% пользователей
			balance = r.Intn(10000) + 100 // от 100 до 10099
		} else if r.Float32() < 0.95 { // 15% пользователей
			balance = r.Intn(50000) + 10000 // от 10000 до 59999
		}
		// остальные 5% остаются с большими балансами
		
		avatarPos := (i % 100) + 1 // циклим аватары от 1 до 100
		
		fakeUsers[i] = map[string]interface{}{
			"user_id":    userID,
			"first_name": fullName,
			"top_name":   fullName,
			"balance":    int32(balance),
			"avatar_url": fmt.Sprintf("https://khabyminero.com/get_avatar?telegram_id=%d", avatarPos),
		}
	}
	
	return fakeUsers
}