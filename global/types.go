package global

type UserInfo struct {
	TelegramID int `json:"telegram_id"`
}

type ClickInfo struct {
	TelegramID int `json:"telegram_id"`
	ClickCount int `json:"click_count"`
}

type BuyToquesInfo struct {
	TelegramID int `json:"telegram_id"`
}

type SetToques struct {
	TelegramID int `json:"telegram_id"`
	NewToques  int `json:"new_toques"`
}

type SetBalance struct {
	TelegramID int `json:"telegram_id"`
	NewBalance int `json:"new_balance"`
}

type SetEnergy struct {
	TelegramID int `json:"telegram_id"`
	NewEnergy  int `json:"new_energy"`
}

type UserTimerInfo struct {
	TelegramID int `json:"telegram_id"`
}
