from aiogram import F, Router
from aiogram.fsm.context import FSMContext
from aiogram.filters import StateFilter
from aiogram.types import (
    CallbackQuery,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    Message,
)
from datetime import datetime
from app.database.db import scheduled_broadcasts

router = Router()


@router.callback_query(F.data == "admin_broadcast_list")
async def broadcast_list_start(call: CallbackQuery, state: FSMContext):
    await show_scheduled_list(call.message, state)
    await call.answer()


async def show_scheduled_list(message: Message, state: FSMContext, page: int = 0):
    """Показ списка запланированных рассылок с пагинацией"""

    # Получаем все запланированные рассылки (включая зацикленные)
    broadcasts = []
    async for broadcast in scheduled_broadcasts.find(
        {"status": {"$in": ["scheduled"]}}
    ).sort("scheduled_datetime", 1):
        broadcasts.append(broadcast)

    total_broadcasts = len(broadcasts)

    if total_broadcasts == 0:
        text = (
            "📋 <b>Запланированные рассылки</b>\n\n"
            "📭 <b>Список пуст</b>\n"
            "Нет запланированных рассылок.\n\n"
            "💡 Создайте новую отложенную рассылку через главное меню."
        )
        keyboard = InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="⏰ Создать отложенную рассылку",
                        callback_data="admin_broadcast_delayed",
                    )
                ],
                [InlineKeyboardButton(text="🔙 Назад", callback_data="back:admin")],
            ]
        )
    else:
        # Пагинация: по 5 рассылок на страницу
        per_page = 5
        start_idx = page * per_page
        end_idx = min(start_idx + per_page, total_broadcasts)
        page_broadcasts = broadcasts[start_idx:end_idx]

        text = (
            f"📋 <b>Запланированные рассылки</b>\n\n"
            f"📊 <b>Всего:</b> {total_broadcasts}\n"
            f"📄 <b>Страница:</b> {page + 1}/{(total_broadcasts - 1) // per_page + 1}\n\n"
        )

        keyboard_rows = []

        for i, broadcast in enumerate(page_broadcasts):
            # Форматируем дату и время
            scheduled_dt = broadcast.get("scheduled_datetime", datetime.now())
            date_str = scheduled_dt.strftime("%d.%m.%Y")
            time_str = scheduled_dt.strftime("%H:%M")

            # Получаем название рассылки или создаем его из ID
            broadcast_name = broadcast.get(
                "name", f"Рассылка #{str(broadcast['_id'])[-6:]}"
            )

            # Определяем тип контента
            content_type = broadcast.get("content_type", "text")
            content_emoji = {
                "text": "📝",
                "photo": "🖼",
                "video": "🎥",
                "document": "📎",
                "audio": "🎵",
                "voice": "🎤",
            }.get(content_type, "📄")

            # Проверяем, зацикленная ли рассылка
            is_recurring = broadcast.get("is_recurring", False)
            recurring_emoji = "🔄" if is_recurring else content_emoji

            # Текст кнопки
            button_text = f"{recurring_emoji} {broadcast_name[:20]}{'...' if len(broadcast_name) > 20 else ''}"

            keyboard_rows.append(
                [
                    InlineKeyboardButton(
                        text=button_text,
                        callback_data=f"broadcast_info_{str(broadcast['_id'])}",
                    )
                ]
            )

            # Информация о зацикливании
            recurring_text = ""
            if is_recurring:
                recurring_text = f" (🔄 Каждый день)"

            text += (
                f"{recurring_emoji} <b>{broadcast_name}</b>\n"
                f"📅 {date_str} в {time_str}{recurring_text}\n"
                f"🆔 <code>{str(broadcast['_id'])[-8:]}</code>\n\n"
            )

        # Кнопки пагинации
        pagination_row = []
        if page > 0:
            pagination_row.append(
                InlineKeyboardButton(
                    text="◀️ Пред.", callback_data=f"list_page_{page-1}"
                )
            )
        if end_idx < total_broadcasts:
            pagination_row.append(
                InlineKeyboardButton(
                    text="След. ▶️", callback_data=f"list_page_{page+1}"
                )
            )

        if pagination_row:
            keyboard_rows.append(pagination_row)

        # Управляющие кнопки
        keyboard_rows.extend(
            [
                [
                    InlineKeyboardButton(
                        text="🔄 Обновить", callback_data="admin_broadcast_list"
                    ),
                    InlineKeyboardButton(
                        text="⏰ Создать новую", callback_data="admin_broadcast_delayed"
                    ),
                ],
                [InlineKeyboardButton(text="🔙 Назад", callback_data="back:admin")],
            ]
        )

        keyboard = InlineKeyboardMarkup(inline_keyboard=keyboard_rows)

    try:
        await message.edit_text(text, reply_markup=keyboard)
    except:
        await message.answer(text, reply_markup=keyboard)


@router.callback_query(F.data.startswith("list_page_"))
async def paginate_list(call: CallbackQuery, state: FSMContext):
    """Обработка пагинации списка"""
    page = int(call.data.split("_")[-1])
    await show_scheduled_list(call.message, state, page)
    await call.answer()


@router.callback_query(F.data.startswith("broadcast_info_"))
async def broadcast_info(call: CallbackQuery, state: FSMContext):
    """Показ информации о конкретной рассылке"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
    except:
        await call.answer("❌ Рассылка не найдена!", show_alert=True)
        return

    if not broadcast:
        await call.answer("❌ Рассылка не найдена!", show_alert=True)
        return

    # Форматируем информацию о рассылке
    scheduled_dt = broadcast.get("scheduled_datetime", datetime.now())
    date_str = scheduled_dt.strftime("%d.%m.%Y")
    time_str = scheduled_dt.strftime("%H:%M")
    created_dt = broadcast.get("created_at", datetime.now())
    created_str = created_dt.strftime("%d.%m.%Y в %H:%M")

    broadcast_name = broadcast.get("name", f"Рассылка #{str(broadcast['_id'])[-6:]}")
    content_type = broadcast.get("content_type", "text")
    buttons_count = len(broadcast.get("buttons", []))
    is_recurring = broadcast.get("is_recurring", False)

    content_emoji = {
        "text": "📝",
        "photo": "🖼",
        "video": "🎥",
        "document": "📎",
        "audio": "🎵",
        "voice": "🎤",
    }.get(content_type, "📄")

    # Получаем количество пользователей для примерной оценки
    from app.database.db import users

    users_count = await users.count_documents({})

    # Информация о зацикливании
    recurring_info = ""
    if is_recurring:
        recurring_time = broadcast.get("recurring_time", time_str)
        last_sent = broadcast.get("last_sent")
        last_sent_str = ""
        if last_sent:
            last_sent_str = f"\n📤 <b>Последняя отправка:</b> {last_sent.strftime('%d.%m.%Y в %H:%M')}"
        recurring_info = (
            f"\n🔄 <b>Повтор:</b> Каждый день в {recurring_time}{last_sent_str}"
        )

    text = (
        f"{content_emoji} <b>{broadcast_name}</b>\n\n"
        f"📅 <b>Дата:</b> {date_str}\n"
        f"🕐 <b>Время:</b> {time_str}\n"
        f"📄 <b>Тип:</b> {content_type}\n"
        f"🎛 <b>Ссылок:</b> {buttons_count}\n"
        f"👥 <b>Получателей:</b> ~{users_count}\n"
        f"📆 <b>Создано:</b> {created_str}{recurring_info}\n"
        f"🆔 <b>ID:</b> <code>{str(broadcast['_id'])}</code>\n\n"
        f"🔧 <b>Действия с рассылкой:</b>"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="✏️ Переименовать", callback_data=f"rename_{broadcast_id}"
                ),
                InlineKeyboardButton(
                    text="📋 Дублировать", callback_data=f"duplicate_{broadcast_id}"
                ),
            ],
            [
                InlineKeyboardButton(
                    text="👀 Предпросмотр", callback_data=f"preview_{broadcast_id}"
                ),
                InlineKeyboardButton(
                    text="🗑 Удалить", callback_data=f"delete_{broadcast_id}"
                ),
            ],
            [
                InlineKeyboardButton(
                    text="🔙 К списку", callback_data="admin_broadcast_list"
                )
            ],
        ]
    )

    await call.message.edit_text(text, reply_markup=keyboard)
    await call.answer()


@router.callback_query(F.data.startswith("rename_"))
async def rename_broadcast_start(call: CallbackQuery, state: FSMContext):
    """Начало переименования рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
        if not broadcast:
            await call.answer("❌ Рассылка не найдена!", show_alert=True)
            return
    except:
        await call.answer("❌ Ошибка загрузки рассылки!", show_alert=True)
        return

    current_name = broadcast.get("name", f"Рассылка #{str(broadcast['_id'])[-6:]}")

    await state.update_data(rename_broadcast_id=broadcast_id)
    await state.set_state("rename_broadcast")

    text = (
        f"✏️ <b>Переименование рассылки</b>\n\n"
        f"📝 <b>Текущее название:</b>\n<code>{current_name}</code>\n\n"
        f"Введите новое название для рассылки:"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="❌ Отмена", callback_data=f"broadcast_info_{broadcast_id}"
                )
            ]
        ]
    )

    await call.message.edit_text(text, reply_markup=keyboard)
    await call.answer()


@router.message(StateFilter("rename_broadcast"))
async def rename_broadcast_handler(message: Message, state: FSMContext):
    """Обработка нового названия рассылки"""
    data = await state.get_data()
    broadcast_id = data.get("rename_broadcast_id")
    new_name = message.text.strip()

    if len(new_name) > 100:
        await message.answer(
            "❌ <b>Название слишком длинное!</b>\n\n"
            "Максимальная длина: 100 символов\n"
            "Попробуйте еще раз:"
        )
        return

    if len(new_name) < 1:
        await message.answer(
            "❌ <b>Название не может быть пустым!</b>\n\n" "Введите название:"
        )
        return

    try:
        from bson import ObjectId

        result = await scheduled_broadcasts.update_one(
            {"_id": ObjectId(broadcast_id)},
            {"$set": {"name": new_name, "updated_at": datetime.now()}},
        )

        if result.modified_count > 0:
            await message.answer(
                f"✅ <b>Название изменено!</b>\n\n"
                f"📝 <b>Новое название:</b>\n<code>{new_name}</code>",
                reply_markup=InlineKeyboardMarkup(
                    inline_keyboard=[
                        [
                            InlineKeyboardButton(
                                text="📋 К рассылке",
                                callback_data=f"broadcast_info_{broadcast_id}",
                            )
                        ],
                        [
                            InlineKeyboardButton(
                                text="📋 К списку", callback_data="admin_broadcast_list"
                            )
                        ],
                    ]
                ),
            )
        else:
            await message.answer("❌ Ошибка при изменении названия!")

    except Exception as e:
        await message.answer(f"❌ Ошибка: {str(e)}")

    await state.clear()


@router.callback_query(F.data.startswith("duplicate_"))
async def duplicate_broadcast(call: CallbackQuery, state: FSMContext):
    """Дублирование рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
        if not broadcast:
            await call.answer("❌ Рассылка не найдена!", show_alert=True)
            return
    except:
        await call.answer("❌ Ошибка загрузки рассылки!", show_alert=True)
        return

    # Создаем копию рассылки
    original_name = broadcast.get("name", f"Рассылка #{str(broadcast['_id'])[-6:]}")
    new_broadcast = {
        "admin_id": broadcast["admin_id"],
        "message_id": broadcast["message_id"],
        "chat_id": broadcast["chat_id"],
        "content_type": broadcast["content_type"],
        "text": broadcast["text"],
        "buttons": broadcast.get("buttons", []),
        "name": f"Копия {original_name}",
        "status": "draft",  # Копия создается как черновик
        "created_at": datetime.now(),
        "copied_from": broadcast["_id"],
        "is_recurring": broadcast.get("is_recurring", False),
        "recurring_time": broadcast.get("recurring_time"),
    }

    try:
        result = await scheduled_broadcasts.insert_one(new_broadcast)

        text = (
            f"✅ <b>Рассылка дублирована!</b>\n\n"
            f"📝 <b>Оригинал:</b> {original_name}\n"
            f"📝 <b>Копия:</b> Копия {original_name}\n"
            f"🆔 <b>ID копии:</b> <code>{str(result.inserted_id)}</code>\n\n"
            f"⚠️ <b>Важно!</b> Копия создана как черновик.\n"
            f"Не забудьте установить дату и время для запланированной отправки."
        )

        keyboard = InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="📝 Настроить копию",
                        callback_data=f"setup_copy_{str(result.inserted_id)}",
                    )
                ],
                [
                    InlineKeyboardButton(
                        text="📋 К оригиналу",
                        callback_data=f"broadcast_info_{broadcast_id}",
                    ),
                    InlineKeyboardButton(
                        text="📋 К списку", callback_data="admin_broadcast_list"
                    ),
                ],
            ]
        )

        await call.message.edit_text(text, reply_markup=keyboard)
        await call.answer("✅ Рассылка дублирована!")

    except Exception as e:
        await call.answer(f"❌ Ошибка дублирования: {str(e)}", show_alert=True)


@router.callback_query(F.data.startswith("setup_copy_"))
async def setup_copy(call: CallbackQuery, state: FSMContext):
    """Настройка скопированной рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
        if not broadcast:
            await call.answer("❌ Копия не найдена!", show_alert=True)
            return
    except:
        await call.answer("❌ Ошибка загрузки копии!", show_alert=True)
        return

    # Подготавливаем данные для редактора отложенной рассылки
    message_data = {
        "message_id": broadcast["message_id"],
        "chat_id": broadcast["chat_id"],
        "content_type": broadcast["content_type"],
        "text": broadcast["text"],
        "buttons": broadcast.get("buttons", []),
        "editing_broadcast_id": broadcast_id,  # Сохраняем ID для обновления
        "is_recurring": broadcast.get("is_recurring", False),
        "scheduled_time": broadcast.get("recurring_time"),
    }

    await state.update_data(**message_data)

    # Импортируем и используем редактор из broadcast_delayed
    from app.handlers.admin.broadcast_delayed import show_delayed_editor

    await show_delayed_editor(call.message, state)
    await call.answer()


@router.callback_query(F.data.startswith("delete_"))
async def delete_broadcast_confirm(call: CallbackQuery, state: FSMContext):
    """Подтверждение удаления рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
        if not broadcast:
            await call.answer("❌ Рассылка не найдена!", show_alert=True)
            return
    except:
        await call.answer("❌ Ошибка загрузки рассылки!", show_alert=True)
        return

    broadcast_name = broadcast.get("name", f"Рассылка #{str(broadcast['_id'])[-6:]}")
    scheduled_dt = broadcast.get("scheduled_datetime", datetime.now())
    date_str = scheduled_dt.strftime("%d.%m.%Y в %H:%M")

    text = (
        f"🗑 <b>УДАЛЕНИЕ РАССЫЛКИ</b>\n\n"
        f"📝 <b>Название:</b> {broadcast_name}\n"
        f"📅 <b>Запланировано:</b> {date_str}\n"
        f"🆔 <b>ID:</b> <code>{str(broadcast['_id'])}</code>\n\n"
        f"⚠️ <b>ВНИМАНИЕ!</b>\n"
        f"Это действие нельзя отменить.\n"
        f"Рассылка будет удалена навсегда.\n\n"
        f"Подтвердить удаление?"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="🗑 ДА, УДАЛИТЬ!",
                    callback_data=f"confirm_delete_{broadcast_id}",
                )
            ],
            [
                InlineKeyboardButton(
                    text="❌ Отмена", callback_data=f"broadcast_info_{broadcast_id}"
                )
            ],
        ]
    )

    await call.message.edit_text(text, reply_markup=keyboard)
    await call.answer()


@router.callback_query(F.data.startswith("confirm_delete_"))
async def delete_broadcast_final(call: CallbackQuery, state: FSMContext):
    """Окончательное удаление рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        result = await scheduled_broadcasts.delete_one({"_id": ObjectId(broadcast_id)})

        if result.deleted_count > 0:
            text = (
                f"✅ <b>Рассылка удалена!</b>\n\n"
                f"🗑 Рассылка успешно удалена из системы.\n"
                f"🆔 ID: <code>{broadcast_id}</code>"
            )

            keyboard = InlineKeyboardMarkup(
                inline_keyboard=[
                    [
                        InlineKeyboardButton(
                            text="📋 К списку рассылок",
                            callback_data="admin_broadcast_list",
                        )
                    ]
                ]
            )

            await call.message.edit_text(text, reply_markup=keyboard)
            await call.answer("✅ Рассылка удалена!")
        else:
            await call.answer("❌ Рассылка не найдена!", show_alert=True)

    except Exception as e:
        await call.answer(f"❌ Ошибка удаления: {str(e)}", show_alert=True)


@router.callback_query(F.data.startswith("preview_"))
async def preview_broadcast(call: CallbackQuery, state: FSMContext):
    """Предпросмотр запланированной рассылки"""
    broadcast_id = call.data.split("_")[-1]

    try:
        from bson import ObjectId

        broadcast = await scheduled_broadcasts.find_one({"_id": ObjectId(broadcast_id)})
        if not broadcast:
            await call.answer("❌ Рассылка не найдена!", show_alert=True)
            return
    except:
        await call.answer("❌ Ошибка загрузки рассылки!", show_alert=True)
        return

    # Создаем клавиатуру для предпросмотра
    from app.handlers.admin.broadcast_delayed import create_delayed_buttons_keyboard

    preview_keyboard = create_delayed_buttons_keyboard(broadcast.get("buttons", []))

    # Отправляем предпросмотр
    try:
        await call.bot.copy_message(
            chat_id=call.from_user.id,
            from_chat_id=broadcast["chat_id"],
            message_id=broadcast["message_id"],
            reply_markup=preview_keyboard,
        )

        broadcast_name = broadcast.get(
            "name", f"Рассылка #{str(broadcast['_id'])[-6:]}"
        )
        scheduled_dt = broadcast.get("scheduled_datetime", datetime.now())
        date_str = scheduled_dt.strftime("%d.%m.%Y в %H:%M")

        await call.answer(f"👀 Предпросмотр: {broadcast_name}\n📅 {date_str}")

    except Exception as e:
        await call.answer(f"❌ Ошибка предпросмотра: {str(e)}", show_alert=True)
