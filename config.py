import json
import os
from pathlib import Path

_settings = json.loads(Path(__file__).with_name("config.json").read_text())
token = os.environ.get("TELEGRAM_BOT_TOKEN") or _settings.get("token", "")
chat_id = _settings.get("chat_id", "")
channel_id = chat_id
admins = [7417852003, 5914478936]

web_app_url = os.environ.get("APP_URL", "").rstrip("/")
