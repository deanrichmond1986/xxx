from aiogram import F, Router
from aiogram.fsm.context import FSMContext
from aiogram.filters import StateFilter
from aiogram.types import (
    CallbackQuery,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    Message,
)
import asyncio
from app.database.db import users

router = Router()


@router.callback_query(F.data == "admin_broadcast_now")
async def broadcast_now(call: CallbackQuery, state: FSMContext):
    await call.message.edit_text(
        "🎬 <b>Создание рассылки</b>\n\n"
        "📝 Напишите сообщение для рассылки.\n"
        "Поддерживается: текст, фото, видео, документы и разметка HTML.",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin")]
            ]
        ),
    )
    await call.answer()
    await state.set_state("broadcast_message")


@router.message(StateFilter("broadcast_message"))
async def broadcast_message_handler(message: Message, state: FSMContext):
    message_data = {
        "message_id": message.message_id,
        "chat_id": message.chat.id,
        "content_type": message.content_type,
        "text": message.text or message.caption,
        "buttons": [],
    }

    await state.update_data(**message_data)
    await show_broadcast_editor(message, state)


async def show_broadcast_editor(message: Message, state: FSMContext):
    data = await state.get_data()
    buttons_count = len(data.get("buttons", []))

    content_type = data.get("content_type", "text")
    content_emoji = {
        "text": "📝",
        "photo": "🖼",
        "video": "🎥",
        "document": "📎",
        "audio": "🎵",
        "voice": "🎤",
    }.get(content_type, "📄")

    text = (
        f"✨ <b>Редактор рассылки</b>\n\n"
        f"{content_emoji} <b>Сообщение:</b> {content_type}\n"
        f"🎛 <b>Кнопок:</b> {buttons_count}/6\n\n"
        f"🚀 Готово к отправке!"
    )

    keyboard_rows = []

    if buttons_count < 6:
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text="🔗 Добавить ссылку", callback_data="add_url_button"
                )
            ]
        )

    if buttons_count > 0:
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text="📝 Управление ссылками", callback_data="manage_buttons"
                ),
                InlineKeyboardButton(
                    text="🗑 Очистить все", callback_data="clear_buttons"
                ),
            ]
        )

    keyboard_rows.extend(
        [
            [
                InlineKeyboardButton(
                    text="👀 Предпросмотр", callback_data="preview_smart"
                ),
                InlineKeyboardButton(text="🚀 Отправить", callback_data="send_confirm"),
            ],
            [
                InlineKeyboardButton(
                    text="🔄 Новое сообщение", callback_data="admin_broadcast_now"
                ),
                InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin"),
            ],
        ]
    )

    keyboard = InlineKeyboardMarkup(inline_keyboard=keyboard_rows)

    try:
        await message.edit_text(text, reply_markup=keyboard)
    except:
        await message.answer(text, reply_markup=keyboard)


@router.callback_query(F.data == "add_url_button")
async def add_url_button(call: CallbackQuery, state: FSMContext):
    await call.message.edit_text(
        "✏️ <b>Название ссылки</b>\n\n" "Введите текст для кнопки:",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="🔙 Назад", callback_data="back_to_editor")]
            ]
        ),
    )
    await call.answer()
    await state.set_state("button_name")


@router.message(StateFilter("button_name"))
async def button_name_handler(message: Message, state: FSMContext):
    await state.update_data(temp_button_name=message.text)

    await message.answer(
        "🔗 <b>URL ссылки</b>\n\n"
        "Введите ссылку:\n\n"
        "Пример: <code>https://example.com</code>",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="🔙 Назад", callback_data="add_url_button")]
            ]
        ),
    )
    await state.set_state("button_url")


@router.message(StateFilter("button_url"))
async def button_url_handler(message: Message, state: FSMContext):
    data = await state.get_data()
    button_name = data.get("temp_button_name")
    button_url = message.text

    if not (button_url.startswith("http://") or button_url.startswith("https://")):
        await message.answer(
            "❌ <b>Неверный формат!</b>\n\n"
            "URL должен начинаться с http:// или https://\n"
            "Попробуйте еще раз:"
        )
        return

    buttons = data.get("buttons", [])
    button = {"text": button_name, "url": button_url}
    buttons.append(button)

    await state.update_data(buttons=buttons, temp_button_name=None)

    await message.answer(
        f"✅ <b>Ссылка добавлена!</b>\n\n"
        f"🔗 <b>{button_name}</b>\n"
        f"📊 Всего ссылок: {len(buttons)}/6",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="➕ Еще ссылку", callback_data="add_url_button"
                    ),
                    InlineKeyboardButton(
                        text="✅ Готово", callback_data="back_to_editor"
                    ),
                ]
            ]
        ),
    )


@router.callback_query(F.data == "manage_buttons")
async def manage_buttons(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    buttons = data.get("buttons", [])

    if not buttons:
        await call.answer("❌ Нет ссылок для управления!", show_alert=True)
        return

    keyboard_rows = []

    for i, button in enumerate(buttons):
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text=f"🔗 {button['text']}", callback_data=f"edit_btn_{i}"
                ),
                InlineKeyboardButton(text="🗑", callback_data=f"del_btn_{i}"),
            ]
        )

    keyboard_rows.append(
        [InlineKeyboardButton(text="🔙 Назад", callback_data="back_to_editor")]
    )

    await call.message.edit_text(
        f"🎛 <b>Управление ссылками</b>\n\n"
        f"📊 Ссылок: {len(buttons)}/6\n\n"
        f"Нажмите на ссылку для редактирования или 🗑 для удаления:",
        reply_markup=InlineKeyboardMarkup(inline_keyboard=keyboard_rows),
    )
    await call.answer()


@router.callback_query(F.data.startswith("del_btn_"))
async def delete_button(call: CallbackQuery, state: FSMContext):
    button_index = int(call.data.split("_")[-1])
    data = await state.get_data()
    buttons = data.get("buttons", [])

    if 0 <= button_index < len(buttons):
        deleted_button = buttons.pop(button_index)
        await state.update_data(buttons=buttons)

        await call.answer(f"✅ Ссылка '{deleted_button['text']}' удалена!")
        await manage_buttons(call, state)
    else:
        await call.answer("❌ Ссылка не найдена!", show_alert=True)


@router.callback_query(F.data == "clear_buttons")
async def clear_buttons(call: CallbackQuery, state: FSMContext):
    await state.update_data(buttons=[])
    await call.answer("✅ Все ссылки удалены!")
    await show_broadcast_editor(call.message, state)


@router.callback_query(F.data == "back_to_editor")
async def back_to_editor(call: CallbackQuery, state: FSMContext):
    await show_broadcast_editor(call.message, state)
    await call.answer()


@router.callback_query(F.data == "preview_smart")
async def preview_smart(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    original_message_id = data.get("message_id")
    original_chat_id = data.get("chat_id")
    buttons = data.get("buttons", [])

    if not original_message_id:
        await call.answer("❌ Нет сообщения для предпросмотра!", show_alert=True)
        return

    preview_keyboard = create_buttons_keyboard(buttons)

    control_buttons = [
        [
            InlineKeyboardButton(
                text="✏️ Редактировать", callback_data="back_to_editor"
            ),
            InlineKeyboardButton(text="🚀 Отправить", callback_data="send_confirm"),
        ]
    ]

    if preview_keyboard:
        preview_keyboard.inline_keyboard.extend(control_buttons)
    else:
        preview_keyboard = InlineKeyboardMarkup(inline_keyboard=control_buttons)

    await call.message.edit_text(
        "👀 <b>ПРЕДПРОСМОТР РАССЫЛКИ</b>\n\n" "⬇️ Ваше сообщение появится ниже",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="⏳ Загружается...", callback_data="loading"
                    )
                ]
            ]
        ),
    )

    try:
        await call.bot.copy_message(
            chat_id=call.message.chat.id,
            from_chat_id=original_chat_id,
            message_id=original_message_id,
            reply_markup=preview_keyboard,
        )
    except Exception as e:
        await call.message.edit_text(
            f"❌ <b>Ошибка предпросмотра</b>\n\n"
            f"Не удалось загрузить сообщение.\n"
            f"Возможно, оно было удалено.",
            reply_markup=InlineKeyboardMarkup(
                inline_keyboard=[
                    [
                        InlineKeyboardButton(
                            text="🔙 Назад", callback_data="back_to_editor"
                        )
                    ]
                ]
            ),
        )

    await call.answer()


@router.callback_query(F.data == "send_confirm")
async def send_confirm(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    buttons_count = len(data.get("buttons", []))
    content_type = data.get("content_type", "text")

    users_count = await users.count_documents({})

    text = (
        f"🚀 <b>ПОДТВЕРЖДЕНИЕ РАССЫЛКИ</b>\n\n"
        f"📄 <b>Тип:</b> {content_type}\n"
        f"🎛 <b>Ссылок:</b> {buttons_count}\n"
        f"👥 <b>Получателей:</b> ~{users_count}\n\n"
        f"⚠️ <b>Сообщение будет отправлено всем пользователям!</b>\n\n"
        f"Продолжить?"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="✅ ДА, ОТПРАВИТЬ!", callback_data="send_broadcast_final"
                )
            ],
            [
                InlineKeyboardButton(
                    text="👀 Предпросмотр", callback_data="preview_smart"
                ),
                InlineKeyboardButton(
                    text="✏️ Редактировать", callback_data="back_to_editor"
                ),
            ],
            [InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin")],
        ]
    )

    await call.message.edit_text(text, reply_markup=keyboard)
    await call.answer()


def create_buttons_keyboard(buttons):
    if not buttons:
        return None

    keyboard_rows = []
    current_row = []

    for button in buttons:
        if len(current_row) >= 2:
            keyboard_rows.append(current_row)
            current_row = []

        current_row.append(InlineKeyboardButton(text=button["text"], url=button["url"]))

    if current_row:
        keyboard_rows.append(current_row)

    return InlineKeyboardMarkup(inline_keyboard=keyboard_rows)


async def send_broadcast_to_users(
    bot, original_message_id, original_chat_id, keyboard, admin_id
):
    success_count = 0
    failed_count = 0
    total_users = 0

    progress_message = await bot.send_message(
        chat_id=admin_id,
        text="🚀 <b>Рассылка запущена!</b>\n\n⏳ Подсчитываем пользователей...",
    )

    try:
        async for user in users.find({}):
            total_users += 1
            user_id = user.get("user_id")

            if not user_id:
                failed_count += 1
                continue

            try:
                await bot.copy_message(
                    chat_id=user_id,
                    from_chat_id=original_chat_id,
                    message_id=original_message_id,
                    reply_markup=keyboard,
                )
                success_count += 1

                if success_count % 50 == 0:
                    try:
                        await bot.edit_message_text(
                            chat_id=admin_id,
                            message_id=progress_message.message_id,
                            text=f"📤 <b>Отправка...</b>\n\n"
                            f"✅ Отправлено: {success_count}\n"
                            f"❌ Ошибок: {failed_count}\n"
                            f"⏳ Осталось: ~{total_users - success_count - failed_count}",
                        )
                    except:
                        pass

                await asyncio.sleep(0.04)

            except Exception as e:
                failed_count += 1
                continue

    except Exception as e:
        await bot.edit_message_text(
            chat_id=admin_id,
            message_id=progress_message.message_id,
            text=f"❌ <b>Ошибка рассылки!</b>\n\n{str(e)}",
        )
        return

    success_rate = (success_count / total_users * 100) if total_users > 0 else 0

    final_text = (
        f"🎉 <b>Рассылка завершена!</b>\n\n"
        f"👥 <b>Всего пользователей:</b> {total_users}\n"
        f"✅ <b>Успешно:</b> {success_count}\n"
        f"❌ <b>Ошибок:</b> {failed_count}\n"
        f"📊 <b>Успешность:</b> {success_rate:.1f}%\n\n"
        f"{'🔥 Отличный результат!' if success_rate >= 90 else '✅ Рассылка выполнена!'}"
    )

    await bot.edit_message_text(
        chat_id=admin_id,
        message_id=progress_message.message_id,
        text=final_text,
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="🏠 Админ меню", callback_data="back:admin"
                    )
                ],
                [
                    InlineKeyboardButton(
                        text="📊 Новая рассылка", callback_data="admin_broadcast_now"
                    )
                ],
            ]
        ),
    )


@router.callback_query(F.data == "send_broadcast_final")
async def send_broadcast_final(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    original_message_id = data.get("message_id")
    original_chat_id = data.get("chat_id")
    buttons = data.get("buttons", [])

    final_keyboard = create_buttons_keyboard(buttons)

    await call.message.edit_text(
        "🚀 <b>Запуск рассылки...</b>\n\n"
        "⏳ Сообщения отправляются пользователям\n"
        "📊 Прогресс будет показан отдельным сообщением",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="⏳ Отправка...", callback_data="loading")]
            ]
        ),
    )

    await call.answer("🚀 Рассылка запущена!")

    asyncio.create_task(
        send_broadcast_to_users(
            bot=call.bot,
            original_message_id=original_message_id,
            original_chat_id=original_chat_id,
            keyboard=final_keyboard,
            admin_id=call.from_user.id,
        )
    )

    await state.clear()
