from aiogram import Router
from config import web_app_url
from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram.filters import CommandObject
from app.database.db import users
from app.misc.generator import random_data

from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
import random
import string
from main import download_and_save_avatar

router = Router()


@router.message(CommandStart())
async def cmd_start(message: Message, command: CommandObject):
    user_id = message.from_user.id
    referral_code = "".join(random.choices(string.ascii_letters + string.digits, k=6))

    args = command.args if command.args else ""

    referrer = (
        await users.find_one({"referral_code": referral_code})
        if referral_code
        else None
    )

    user_data = {
        "user_id": user_id,
        "first_name": message.from_user.first_name,
        "joined_at": message.date,
        "balance": 0,
        "referrals": [],
        "referral_code": referral_code,
        "energy": 500,
        "energy_max": 500,
        "referred_by": referrer["user_id"] if referrer else None,
        "modifies": {
            "toques_lvl": 1,
            "subscribe_bonus": False,
        },
        "top_name": (await random_data()),
        "avatar_url": "",
    }

    if not await users.count_documents({"user_id": user_id}):
        user_profile_photos = await message.bot.get_user_profile_photos(
            user_id, limit=1
        )

        if user_profile_photos.photos:
            file_id = user_profile_photos.photos[0][0].file_id
            file_info = await message.bot.get_file(file_id)
            user_data["avatar_url"] = await download_and_save_avatar(
                message, user_id, file_info
            )
        else:
            user_data["avatar_url"] = "https://alybit.com/get_avatar?telegram_id=11"

        await users.insert_one(user_data)
        if referrer:
            await users.update_one(
                {"user_id": referrer["user_id"]},
                {"$push": {"referrals": user_id}, "$inc": {"energy_max": 100}},
            )

    welcome_message = "Добро пожаловать ❤️"

    if not web_app_url:
        await message.answer(welcome_message + "\nИгра запускается. Ссылка появится после настройки публичного HTTPS-адреса.")
        return

    await message.answer(
        welcome_message,
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="Начать игру 💶",
                        web_app=WebAppInfo(url=web_app_url),
                    )
                ]
            ]
        ),
    )
