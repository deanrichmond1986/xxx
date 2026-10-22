from aiogram import Router
from aiogram.filters import Command
from aiogram.types import (
    Message,
    CallbackQuery,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
)

import config
from app.logging.logging import logger

router = Router()


@router.message(Command("admin"))
async def admin(message: Message | CallbackQuery):
    if message.from_user.id in config.admins:
        logger.info(f"Admin {message.from_user.id} started bot")

        keyboard = InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="Рассылка сразу", callback_data="admin_broadcast_now"
                    )
                ],
                [
                    InlineKeyboardButton(
                        text="Рассылка с задержкой",
                        callback_data="admin_broadcast_delayed",
                    )
                ],
                [
                    InlineKeyboardButton(
                        text="Запланированные рассылки",
                        callback_data="admin_broadcast_list",
                    )
                ],
            ]
        )
        if type(message) is CallbackQuery:
            return await message.message.edit_text("Админ-Меню", reply_markup=keyboard)

        await message.answer("Админ-Меню", reply_markup=keyboard)
