import asyncio
import random
import string
from aiogram import Bot, Dispatcher, types, Router
from aiogram.filters.command import Command
from aiogram.filters import (
    CommandObject,
    IS_MEMBER,
    IS_NOT_MEMBER,
    ChatMemberUpdatedFilter,
)
from aiogram.types import ChatMemberUpdated
from aiogram.fsm.state import State, StatesGroup
import aiohttp
from motor.motor_asyncio import AsyncIOMotorClient
import json
import logging
from typing import Dict, Any, Optional
from aiogram.fsm.context import FSMContext
from aiogram.filters import StateFilter

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

ADMIN_IDS = [7417852003, 5914478936]


class BroadcastStates(StatesGroup):
    waiting_for_text = State()
    waiting_for_confirmation = State()


def load_config() -> Optional[Dict[str, Any]]:
    try:
        with open("config.json", "r") as config_file:
            return json.load(config_file)
    except FileNotFoundError:
        logger.error("config.json file not found.")
    except json.JSONDecodeError:
        logger.error("Invalid JSON in config.json file.")
    return None


config = load_config()
channel_id = config.get("chat_id")
BOT_TOKEN = config.get("token") if config else "YOUR_BOT_TOKEN"

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()
router = Router()

mongo_client = AsyncIOMotorClient("mongodb://localhost:27017")
db = mongo_client.db
users_collection = db.users


async def random_data():
    async with aiohttp.ClientSession() as session:
        async with session.get("https://randomuser.me/api/") as response:
            if response.status == 200:
                data = await response.json()
                if "results" in data and len(data["results"]) > 0:
                    user = data["results"][0]
                    return f"{user['name']['first']} {user['name']['last']}"
    return None


async def download_and_save_avatar(user_id: int, file) -> str:
    avatar_path = f"./avatar/{user_id}.png"
    try:
        file_content = await bot.download_file(file.file_path)
        with open(avatar_path, "wb") as avatar_file:
            avatar_file.write(file_content.read())
        return f"https://alybit.com/get_avatar?telegram_id={user_id}"
    except Exception as e:
        logger.error(f"Error downloading avatar for user {user_id}: {e}")
        return f"https://alybit.com/get_avatar?telegram_id=11"


async def check_and_update_avatars():
    print("start")
    while True:
        try:
            async for user in users_collection.find({}):
                try:
                    if "top_name" not in str(user):
                        await users_collection.update_one(
                            {"user_id": user["user_id"]},
                            {"$set": {"top_name": (await random_data())}},
                        )

                    user_id = user["user_id"]
                    user_profile_photos = await bot.get_user_profile_photos(
                        user_id, limit=1
                    )

                    if user_profile_photos.photos:
                        file_id = user_profile_photos.photos[0][-1].file_id
                        print(file_id)
                        file_info = await bot.get_file(file_id)
                        new_avatar_url = await download_and_save_avatar(
                            user_id, file_info
                        )

                        if new_avatar_url and user.get("avatar_url") != new_avatar_url:
                            await users_collection.update_one(
                                {"user_id": user_id},
                                {"$set": {"avatar_url": new_avatar_url}},
                            )
                            logger.info(f"Updated avatar for user {user_id}")

                    else:
                        await users_collection.update_one(
                            {"user_id": user_id},
                            {
                                "$set": {
                                    "avatar_url": "https://alybit.com/get_avatar?telegram_id=11"
                                }
                            },
                        )
                except Exception as e:
                    logger.error(f"Error in check_and_update_avatars: {e}")

            await asyncio.sleep(random.randint(3600, 7200))
        except Exception as e:
            logger.error(f"Error in check_and_update_avatars: {e}")
            await asyncio.sleep(300)


@dp.message(Command("start"))
async def cmd_start(message: types.Message, command: CommandObject):
    user_id = message.from_user.id
    referral_code = "".join(random.choices(string.ascii_letters + string.digits, k=6))

    args = command.args if command.args else ""

    referrer = (
        await users_collection.find_one({"referral_code": referral_code})
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

    if not await users_collection.count_documents({"user_id": user_id}):
        user_profile_photos = await bot.get_user_profile_photos(user_id, limit=1)

        if user_profile_photos.photos:
            file_id = user_profile_photos.photos[0][0].file_id
            file_info = await bot.get_file(file_id)
            user_data["avatar_url"] = await download_and_save_avatar(user_id, file_info)
        else:
            user_data["avatar_url"] = "https://alybit.com/get_avatar?telegram_id=11"

        await users_collection.insert_one(user_data)
        if referrer:
            await users_collection.update_one(
                {"user_id": referrer["user_id"]},
                {"$push": {"referrals": user_id}, "$inc": {"energy_max": 100}},
            )

    welcome_message = "Добро пожаловать ❤️"

    await message.answer(
        welcome_message,
        reply_markup=types.InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    types.InlineKeyboardButton(
                        text="Начать игру 💶",
                        web_app=types.WebAppInfo(url="https://alybit.com/"),
                    )
                ]
            ]
        ),
    )


@router.chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def user_joined_channel(event: ChatMemberUpdated):
    if (
        str(event.chat.id) == str(channel_id)
        and event.new_chat_member.status == "member"
    ):
        user_id = event.new_chat_member.user.id
        try:
            user = await users_collection.find_one({"user_id": user_id})
            if user and not user["modifies"]["subscribe_bonus"]:
                await users_collection.update_one(
                    {"user_id": user_id},
                    {
                        "$set": {"modifies.subscribe_bonus": True},
                        "$inc": {"energy_max": 1000},
                    },
                )
        except Exception as e:
            logger.error(f"Error awarding points to user {user_id}: {e}")


@router.chat_member(ChatMemberUpdatedFilter(IS_MEMBER >> IS_NOT_MEMBER))
async def user_left_channel(event: ChatMemberUpdated):
    if str(event.chat.id) == str(channel_id) and event.new_chat_member.status == "left":
        user_id = event.new_chat_member.user.id
        try:
            user = await users_collection.find_one({"user_id": user_id})
            if user and user["modifies"]["subscribe_bonus"]:
                new_energy_max = user["energy_max"] - 1000

                if user["energy"] > new_energy_max:
                    await users_collection.update_one(
                        {"user_id": user_id},
                        {"$set": {"energy": new_energy_max}},
                    )

                await users_collection.update_one(
                    {"user_id": user_id},
                    {
                        "$set": {
                            "modifies.subscribe_bonus": False,
                            "energy_max": new_energy_max,
                        },
                    },
                )

        except Exception as e:
            logger.error(f"Error deducting points from user {user_id}: {e}")


@dp.message(Command("rassylka"))
async def cmd_rassylka(message: types.Message, state: FSMContext):
    if message.from_user.id not in ADMIN_IDS:
        await message.answer("Вы не имеете доступа к этой команде.")
        return

    await message.answer("Введите текст для рассылки:")
    await state.set_state(BroadcastStates.waiting_for_text)


@dp.message(StateFilter(BroadcastStates.waiting_for_text))
async def process_broadcast_text(message: types.Message, state: FSMContext):
    broadcast_text = message.text
    await state.update_data(
        broadcast_text=broadcast_text,
        message_id=message.message_id,
        chat_id=message.chat.id,
    )

    keyboard = types.InlineKeyboardMarkup(
        inline_keyboard=[
            [
                types.InlineKeyboardButton(
                    text="✅ Да, отправить", callback_data="confirm_broadcast"
                ),
                types.InlineKeyboardButton(
                    text="❌ Отмена", callback_data="cancel_broadcast"
                ),
            ]
        ]
    )

    await bot.copy_message(
        chat_id=message.chat.id,
        from_chat_id=message.chat.id,
        message_id=message.message_id,
    )

    await message.answer(
        f"Точно ли вы хотите отправить эту рассылку всем пользователям?",
        reply_markup=keyboard,
    )
    await state.set_state(BroadcastStates.waiting_for_confirmation)


@router.callback_query(StateFilter(BroadcastStates.waiting_for_confirmation))
async def process_broadcast_confirmation(
    callback: types.CallbackQuery, state: FSMContext
):
    if callback.data == "confirm_broadcast":
        data = await state.get_data()
        message_id = data.get("message_id")
        chat_id = data.get("chat_id")

        await callback.message.edit_text("Начинаю рассылку...")

        # Получаем всех пользователей из базы данных
        sent_count = 0
        failed_count = 0

        async for user in users_collection.find({}):
            try:
                await bot.copy_message(
                    chat_id=user["user_id"], from_chat_id=chat_id, message_id=message_id
                )
                sent_count += 1
                await asyncio.sleep(0.05)
            except Exception as e:
                failed_count += 1
                logger.error(f"Failed to send message to user {user}: {e}")

        await callback.message.edit_text(
            f"Рассылка завершена!\n"
            f"✅ Отправлено: {sent_count}\n"
            f"❌ Не удалось отправить: {failed_count}"
        )

    elif callback.data == "cancel_broadcast":
        await callback.message.edit_text("Рассылка отменена.")

    await state.clear()
    await callback.answer()


async def main():
    asyncio.create_task(check_and_update_avatars())
    dp.include_router(router)

    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
