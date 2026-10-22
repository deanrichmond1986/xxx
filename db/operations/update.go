package operations

import (
	"context"
	"project/db"
	"time"

	"go.mongodb.org/mongo-driver/bson"
)

func UpdateUserField(ctx context.Context, telegramID int, field string, value interface{}) error {
	client := db.GetClient()
	collection := client.Database("db").Collection("users")
	filter := bson.M{"user_id": telegramID}
	update := bson.M{"$set": bson.M{field: value}}

	_, err := collection.UpdateOne(ctx, filter, update)
	return err
}

func UpdateUserTimer(ctx context.Context, endTime time.Time) error {
	client := db.GetClient()
	collection := client.Database("db").Collection("users")
	if count, err := collection.CountDocuments(ctx, bson.M{"timer": true}); err != nil || count == 0 {
		collection.InsertOne(ctx, bson.M{"timer": true, "timer_end": endTime})
	} else {
		filter := bson.M{"timer": true}
		update := bson.M{"$set": bson.M{"timer_end": endTime}}

		_, err := collection.UpdateOne(ctx, filter, update)
		return err
	}
	
	return nil
}

func IncrementUserField(ctx context.Context, telegramID int, field string, increment interface{}) error {
	client := db.GetClient()
	collection := client.Database("db").Collection("users")
	filter := bson.M{"user_id": telegramID}
	update := bson.M{"$inc": bson.M{field: increment}}

	_, err := collection.UpdateOne(ctx, filter, update)
	return err
}

func SetUserTimer(ctx context.Context, telegramID int, endTime time.Time) error {
	client := db.GetClient()
	collection := client.Database("db").Collection("users")
	
	filter := bson.M{"user_id": telegramID}
	update := bson.M{"$set": bson.M{"timer_end": endTime}}
	
	_, err := collection.UpdateOne(ctx, filter, update)
	return err
}
