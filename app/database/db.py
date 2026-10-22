import motor.motor_asyncio
from app.logging.logging import logger


MONGODB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4"


try:
    client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URI)
    logger.info("Database connected.")
except Exception as e:
    logger.error(f"Failed to connect to database: {e}")
    raise

users = client.db.users
broadcasts = client.db.broadcasts
scheduled_broadcasts = client.db.scheduled_broadcasts
all_broadcasts = client.db.all_broadcasts
