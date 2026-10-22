package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"os/signal"
	"strconv"
	"strings"
	"syscall"
	"time"

	"project/db"
	"project/db/operations"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"

	"project/funcs"
	"project/funcs/modifies"
	"project/funcs/recovery"

	"github.com/rs/cors"
)

type Config struct {
	Token string `json:"token"`
}


var config Config
var botStatus = true

func main() {
	if err := loadConfig(); err != nil {
		log.Fatalf("Error loading config: %v", err)
	}

	if os.Getenv("MONITOR_BOT") == "1" {
        go monitorBotStatus()
    }

	if err := run(); err != nil {
		log.Fatalf("Error running server: %v", err)
	}
}

func loadConfig() error {
	file, err := ioutil.ReadFile("config.json")
	if err != nil {
		return err
	}

	err = json.Unmarshal(file, &config)
	if err != nil {
		return err
	}

	return nil
}

func sendTelegramNotification(message string) {
	token := config.Token
	chatID := "6230782808"

	urlStr := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", token)
	data := url.Values{}
	data.Set("chat_id", chatID)
	data.Set("text", message)

	resp, err := http.PostForm(urlStr, data)
	if err != nil {
		log.Printf("Error sending Telegram message: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("Failed to send message: %v", resp.Status)
	}
}


// TgMailing
func broadcastMessage(w http.ResponseWriter, r *http.Request) {
    ctx := context.Background()

    var reqBody struct {
        Message string `json:"message"`
    }
    err := json.NewDecoder(r.Body).Decode(&reqBody)
    if err != nil || reqBody.Message == "" {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    message := reqBody.Message

    appURL := "https://alybit.com/"

    users, err := operations.GetAllUsers(ctx)
    if err != nil {
        http.Error(w, "Failed to get users", http.StatusInternalServerError)
        return
    }

    for _, user := range users {
        userIDInterface := user["user_id"]

        var userID int64
        switch v := userIDInterface.(type) {
        case string:
            id, err := strconv.ParseInt(v, 10, 64)
            if err != nil {
                log.Printf("Error converting user_id to int64: %v", err)
                continue
            }
            userID = id
        case float64:
            userID = int64(v)
        case int64:
            userID = v
        default:
            log.Printf("Invalid type for user_id: %T", v)
            continue
        }

        log.Printf("Sending message to user ID: %d", userID)

        success := sendTelegramMessageWithButton(int(userID), message, appURL)
        if success {
            recordMessageStatus(ctx, int(userID), true)
        } else {
            recordMessageStatus(ctx, int(userID), false)
        }
    }

    w.Write([]byte("Message sent to all users"))
}

//TG message with btn
func sendTelegramMessageWithButton(chatID int, message string, webAppURL string) bool {
    token := config.Token

    urlStr := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", token)
    data := url.Values{}
    data.Set("chat_id", fmt.Sprintf("%d", chatID))
    data.Set("text", message)
    replyMarkup := fmt.Sprintf(`{
        "inline_keyboard": [[{"text": "Открыть игру", "web_app": {"url": "%s"}}]]
    }`, webAppURL)
    data.Set("reply_markup", replyMarkup)

    resp, err := http.PostForm(urlStr, data)
    if err != nil {
        log.Printf("Error sending message to %d: %v", chatID, err)
        return false
    }
    defer resp.Body.Close()

    if resp.StatusCode == http.StatusOK {
        return true
    }

    log.Printf("Failed to send message to %d: %v", chatID, resp.Status)
    return false
}





// set MongoDB status
func recordMessageStatus(ctx context.Context, telegramID int, success bool) error {
	client := db.GetClient()
	collection := client.Database("db").Collection("message_statuses")

	filter := bson.M{"user_id": telegramID}
	update := bson.M{
		"$set": bson.M{
			"user_id": telegramID,
			"last_message_status": success,
			"timestamp":           time.Now(),
		},
	}

	opts := options.Update().SetUpsert(true)
	_, err := collection.UpdateOne(ctx, filter, update, opts)
	return err
}

// Get Mailing
func getMailingStatistics(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	client := db.GetClient() 
	collection := client.Database("db").Collection("message_statuses")

	cursor, err := collection.Find(ctx, bson.M{}, options.Find().SetSort(bson.M{"timestamp": -1}))
	if err != nil {
		http.Error(w, "Failed to get mailing statistics", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var results []bson.M
	if err := cursor.All(ctx, &results); err != nil {
		http.Error(w, "Failed to decode mailing statistics", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(results); err != nil {
		http.Error(w, "Failed to encode mailing statistics", http.StatusInternalServerError)
		return
	}
}



func monitorBotStatus() {
	for {
		time.Sleep(1 * time.Minute) // 5 
		status, err := checkBotStatus()
		if err != nil {
			log.Printf("Error checking bot status: %v", err)
			continue
		}
		if status == "offline" {
			sendTelegramNotification("Bot is down")
		}
	}
}


func run() error {
	log.Println("Connected to MongoDB")

	mux := http.NewServeMux()
	mux.HandleFunc("/", funcs.ServeFrontend)
	mux.HandleFunc("/get_info", funcs.HandleInfo)
	mux.HandleFunc("/check_subscription", funcs.CheckSubscription)
	mux.HandleFunc("/clicker", funcs.HandleClicker)
	mux.HandleFunc("/buy_toques", modifies.HandleBuyToques)
	mux.HandleFunc("/top", funcs.HandleTop)
	mux.HandleFunc("/get_avatar", func(res http.ResponseWriter, req *http.Request) {
        funcs.GetAvatar(res, req)
    })
	mux.HandleFunc("/set_toques", modifies.HandleSetToques)
	mux.HandleFunc("/set_balance", modifies.HandleSetBalance)
	mux.HandleFunc("/set_energy", modifies.HandleSetEnergy)
	mux.HandleFunc("/users", funcs.HandleGetAllUsers)
	mux.HandleFunc("/set_timer", modifies.HandleSetTimer)
	mux.HandleFunc("/get_timer", funcs.HandleGetTimer)

	mux.HandleFunc("/broadcast", broadcastMessage)
	mux.HandleFunc("/getMailing", getMailingStatistics)
	
	// Новые роуты для умной рассылки
	mux.HandleFunc("/api/broadcast", funcs.BroadcastHandler)
	mux.HandleFunc("/admin/broadcast", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "admin/broadcast.html")
	})
	
	mux.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
		status, err := checkBotStatus()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(fmt.Sprintf(`{"status": false, "error": "%v"}`, err)))
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(fmt.Sprintf(`{"status": "%s"}`, status)))
	})

	// Create a new CORS handler
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"}, // Allow all origins
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
		MaxAge:         300, // Maximum age for the preflight request
	})

	// Wrap our existing mux with the CORS handler
	handler := c.Handler(mux)

	addr := os.Getenv("LISTEN_ADDR")
    if addr == "" { addr = "127.0.0.1:8080" }
    server := &http.Server{
		Addr:    addr,
		Handler: handler,
	}

	go recovery.StartEnergyRecovery()

	done := make(chan os.Signal, 1)
	signal.Notify(done, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		log.Printf("Сервер запущен: %s", addr)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Error starting server: %v", err)
		}
	}()

	<-done
	log.Println("Server stopping...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		return err
	}

	log.Println("Server stopped gracefully")
	return nil
}

func checkBotStatus() (string, error) {
    cmd := exec.Command("pm2", "status")
    output, err := cmd.Output()
    if err != nil {
        return "offline", err
    }

    lines := strings.Split(string(output), "\n")
    for _, line := range lines {
        if strings.Contains(line, "bot") { 
            if strings.Contains(line, "online") {
                return "online", nil
            }
            if strings.Contains(line, "stopped") {
                return "offline", nil
            }
        }
    }
    return "offline", nil
}



func contains(s, substr string) bool {
	return strings.Contains(s, substr)
}
