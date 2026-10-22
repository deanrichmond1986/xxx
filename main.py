import asyncio
import logging
logging.basicConfig(level=logging.INFO)
from datetime import datetime, timedelta

from aiogram.fsm.storage.memory import MemoryStorage

from config import token
from aiogram.fsm.strategy import FSMStrategy
from aiogram import Bot, Dispatcher
from cloud_session import CloudSession
from load import load_routers
from app.logging.logging import logger
import random
from app.misc.generator import random_data
from app.database.db import users, scheduled_broadcasts
from aiogram.client.default import DefaultBotProperties
from app.handlers.admin.broadcast_delayed import create_delayed_buttons_keyboard
from aiogram.types import Message

bot = Bot(token=token, session=CloudSession(), default=DefaultBotProperties(parse_mode="HTML"))
dp = Dispatcher()


async def download_and_save_avatar(message: Message, user_id: int, file) -> str:
    avatar_path = f"./avatar/{user_id}.png"
    try:
        file_content = await message.bot.download_file(file.file_path)
        with open(avatar_path, "wb") as avatar_file:
            avatar_file.write(file_content.read())
        return f"https://alybit.com/get_avatar?telegram_id={user_id}"
    except Exception as e:
        logger.error(f"Error downloading avatar for user {user_id}: {e}")
        return f"https://alybit.com/get_avatar?telegram_id=11"


async def send_scheduled_broadcast(broadcast_data):

    try:
        keyboard = create_delayed_buttons_keyboard(broadcast_data.get("buttons", []))

        success_count = 0
        failed_count = 0
        total_users = 0

        async for user in users.find({}):
            total_users += 1
            user_id = user.get("user_id")

            if not user_id:
                failed_count += 1
                continue

            try:
                await bot.copy_message(
                    chat_id=user_id,
                    from_chat_id=broadcast_data["chat_id"],
                    message_id=broadcast_data["message_id"],
                    reply_markup=keyboard,
                )
                success_count += 1
                await asyncio.sleep(0.04)

            except Exception as e:
                failed_count += 1
                continue

        success_rate = (success_count / total_users * 100) if total_users > 0 else 0

        # Информация о зацикливании для уведомления
        is_recurring = broadcast_data.get("is_recurring", False)
        recurring_info = ""
        if is_recurring:
            recurring_info = f"\n🔄 <b>Повтор:</b> Каждый день в {broadcast_data.get('recurring_time', 'время не указано')}\n⚠️ <b>Рассылка НЕ удалена (зацикленная)</b>"

        await bot.send_message(
            chat_id=broadcast_data["admin_id"],
            text=f"📊 <b>Отложенная рассылка выполнена!</b>\n\n"
            f"👥 <b>Всего пользователей:</b> {total_users}\n"
            f"✅ <b>Успешно:</b> {success_count}\n"
            f"❌ <b>Ошибок:</b> {failed_count}\n"
            f"📈 <b>Успешность:</b> {success_rate:.1f}%{recurring_info}",
        )

        # Для зацикленных рассылок не меняем статус на completed, а планируем следующую отправку
        if is_recurring:
            # Планируем следующую отправку на завтра в то же время
            next_datetime = broadcast_data["scheduled_datetime"] + timedelta(days=1)
            await scheduled_broadcasts.update_one(
                {"_id": broadcast_data["_id"]},
                {
                    "$set": {
                        "scheduled_datetime": next_datetime,
                        "status": "scheduled",
                        "last_sent": datetime.now(),
                    }
                },
            )
        else:
            # Обычная рассылка - помечаем как завершенную
            await scheduled_broadcasts.update_one(
                {"_id": broadcast_data["_id"]},
                {"$set": {"status": "completed", "completed_at": datetime.now()}},
            )

    except Exception as e:
        await scheduled_broadcasts.update_one(
            {"_id": broadcast_data["_id"]},
            {"$set": {"status": "failed", "error": str(e)}},
        )


async def check_scheduled_broadcasts():
    while True:
        try:
            now = datetime.now()

            async for broadcast in scheduled_broadcasts.find(
                {"status": "scheduled", "scheduled_datetime": {"$lte": now}}
            ):
                await scheduled_broadcasts.update_one(
                    {"_id": broadcast["_id"]}, {"$set": {"status": "sending"}}
                )

                asyncio.create_task(send_scheduled_broadcast(broadcast))

            await asyncio.sleep(30)

        except Exception as e:
            print(f"Ошибка проверки отложенных рассылок: {e}")
            await asyncio.sleep(60)


async def check_and_update_avatars():
    while True:
        try:
            async for user in users.find({}):
                try:
                    if "top_name" not in str(user):
                        await users.update_one(
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
                            await users.update_one(
                                {"user_id": user_id},
                                {"$set": {"avatar_url": new_avatar_url}},
                            )
                            logger.info(f"Updated avatar for user {user_id}")

                    else:
                        await users.update_one(
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


async def on_startup():
    logger.info("Bot started. Running scheduler.")


async def main():
    router = load_routers("app")

    dp.startup.register(on_startup)
    dp.include_routers(router)

    asyncio.create_task(check_and_update_avatars())
    asyncio.create_task(check_scheduled_broadcasts())

    await dp.start_polling(bot, storage=MemoryStorage(), fsm_strategy=FSMStrategy.CHAT)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Exit")
