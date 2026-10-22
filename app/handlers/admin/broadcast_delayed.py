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
import calendar
from app.database.db import users, scheduled_broadcasts

router = Router()


@router.callback_query(F.data == "admin_broadcast_delayed")
async def broadcast_delayed_start(call: CallbackQuery, state: FSMContext):
    await call.message.edit_text(
        "⏰ <b>Отложенная рассылка</b>\n\n"
        "📝 Напишите сообщение для отложенной рассылки.\n"
        "Поддерживается: текст, фото, видео, документы и разметка HTML.",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin")]
            ]
        ),
    )
    await call.answer()
    await state.set_state("delayed_message")


@router.message(StateFilter("delayed_message"))
async def delayed_message_handler(message: Message, state: FSMContext):
    message_data = {
        "message_id": message.message_id,
        "chat_id": message.chat.id,
        "content_type": message.content_type,
        "text": message.text or message.caption,
        "buttons": [],
    }

    await state.update_data(**message_data)
    await show_delayed_editor(message, state)


async def show_delayed_editor(message: Message, state: FSMContext):
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

    schedule_info = ""
    if data.get("scheduled_date") and data.get("scheduled_time"):
        schedule_info = f"\n⏰ <b>Запланировано:</b> {data['scheduled_date']} в {data['scheduled_time']}"

    # Информация о зацикливании
    is_recurring = data.get("is_recurring", False)
    recurring_info = ""
    if is_recurring:
        recurring_info = f"\n🔄 <b>Повтор:</b> Каждый день в {data.get('scheduled_time', 'время не выбрано')}"

    text = (
        f"⏰ <b>Редактор отложенной рассылки</b>\n\n"
        f"{content_emoji} <b>Сообщение:</b> {content_type}\n"
        f"🎛 <b>Ссылок:</b> {buttons_count}/6{schedule_info}{recurring_info}\n\n"
        f"{'🚀 Готово к планированию!' if data.get('scheduled_date') and data.get('scheduled_time') else '📅 Выберите дату и время'}"
    )

    keyboard_rows = []

    if buttons_count < 6:
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text="🔗 Добавить ссылку", callback_data="add_delayed_url"
                )
            ]
        )

    if buttons_count > 0:
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text="📝 Управление ссылками",
                    callback_data="manage_delayed_buttons",
                ),
                InlineKeyboardButton(
                    text="🗑 Очистить все", callback_data="clear_delayed_buttons"
                ),
            ]
        )

    keyboard_rows.append(
        [
            InlineKeyboardButton(text="📅 Выбрать дату", callback_data="select_date"),
            InlineKeyboardButton(text="🕐 Выбрать время", callback_data="select_time"),
        ]
    )

    # Кнопка для включения/выключения зацикливания
    recurring_button_text = (
        "🔄 Отключить повтор" if is_recurring else "🔄 Включить повтор"
    )
    keyboard_rows.append(
        [
            InlineKeyboardButton(
                text=recurring_button_text, callback_data="toggle_recurring"
            )
        ]
    )

    if data.get("scheduled_date") and data.get("scheduled_time"):
        keyboard_rows.append(
            [
                InlineKeyboardButton(
                    text="👀 Предпросмотр", callback_data="preview_delayed"
                ),
                InlineKeyboardButton(
                    text="⏰ Запланировать", callback_data="schedule_broadcast"
                ),
            ]
        )

    keyboard_rows.extend(
        [
            [
                InlineKeyboardButton(
                    text="🔄 Новое сообщение", callback_data="admin_broadcast_delayed"
                ),
                InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin"),
            ]
        ]
    )

    keyboard = InlineKeyboardMarkup(inline_keyboard=keyboard_rows)

    try:
        await message.edit_text(text, reply_markup=keyboard)
    except:
        await message.answer(text, reply_markup=keyboard)


@router.callback_query(F.data == "select_date")
async def select_date(call: CallbackQuery, state: FSMContext):
    now = datetime.now()
    await show_calendar(call, state, now.year, now.month)


async def show_calendar(call: CallbackQuery, state: FSMContext, year: int, month: int):
    cal = calendar.monthcalendar(year, month)
    month_name = calendar.month_name[month]

    keyboard_rows = []

    keyboard_rows.append(
        [
            InlineKeyboardButton(text="◀️", callback_data=f"cal_prev_{year}_{month}"),
            InlineKeyboardButton(text=f"{month_name} {year}", callback_data="ignore"),
            InlineKeyboardButton(text="▶️", callback_data=f"cal_next_{year}_{month}"),
        ]
    )

    keyboard_rows.append(
        [
            InlineKeyboardButton(text="Пн", callback_data="ignore"),
            InlineKeyboardButton(text="Вт", callback_data="ignore"),
            InlineKeyboardButton(text="Ср", callback_data="ignore"),
            InlineKeyboardButton(text="Чт", callback_data="ignore"),
            InlineKeyboardButton(text="Пт", callback_data="ignore"),
            InlineKeyboardButton(text="Сб", callback_data="ignore"),
            InlineKeyboardButton(text="Вс", callback_data="ignore"),
        ]
    )

    today = datetime.now().date()

    for week in cal:
        week_buttons = []
        for day in week:
            if day == 0:
                week_buttons.append(
                    InlineKeyboardButton(text=" ", callback_data="ignore")
                )
            else:
                date_obj = datetime(year, month, day).date()
                if date_obj < today:
                    week_buttons.append(
                        InlineKeyboardButton(text=f"❌{day}", callback_data="ignore")
                    )
                else:
                    week_buttons.append(
                        InlineKeyboardButton(
                            text=str(day), callback_data=f"date_{year}_{month}_{day}"
                        )
                    )
        keyboard_rows.append(week_buttons)

    keyboard_rows.append(
        [InlineKeyboardButton(text="🔙 Назад", callback_data="back_to_delayed_editor")]
    )

    await call.message.edit_text(
        f"📅 <b>Выберите дату</b>\n\n"
        f"Сегодня: {today.strftime('%d.%m.%Y')}\n"
        f"❌ - прошедшие дни",
        reply_markup=InlineKeyboardMarkup(inline_keyboard=keyboard_rows),
    )
    await call.answer()


@router.callback_query(F.data.startswith("cal_prev_"))
async def calendar_prev(call: CallbackQuery, state: FSMContext):
    _, _, year, month = call.data.split("_")
    year, month = int(year), int(month)

    if month == 1:
        month = 12
        year -= 1
    else:
        month -= 1

    await show_calendar(call, state, year, month)


@router.callback_query(F.data.startswith("cal_next_"))
async def calendar_next(call: CallbackQuery, state: FSMContext):
    _, _, year, month = call.data.split("_")
    year, month = int(year), int(month)

    if month == 12:
        month = 1
        year += 1
    else:
        month += 1

    await show_calendar(call, state, year, month)


@router.callback_query(F.data.startswith("date_"))
async def date_selected(call: CallbackQuery, state: FSMContext):
    _, year, month, day = call.data.split("_")
    selected_date = datetime(int(year), int(month), int(day))

    await state.update_data(
        scheduled_date=selected_date.strftime("%d.%m.%Y"),
        scheduled_datetime=selected_date,
    )

    await call.answer(f"✅ Дата выбрана: {selected_date.strftime('%d.%m.%Y')}")
    await show_delayed_editor(call.message, state)


@router.callback_query(F.data == "select_time")
async def select_time(call: CallbackQuery, state: FSMContext):
    await call.message.edit_text(
        "🕐 <b>Введите время</b>\n\n"
        "Введите время в формате <b>ЧЧ:ММ</b>\n\n"
        "Примеры:\n"
        "• <code>09:30</code>\n"
        "• <code>14:15</code>\n"
        "• <code>23:45</code>\n\n"
        "⏰ Время указывается по МСК",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="🔙 Назад", callback_data="back_to_delayed_editor"
                    )
                ]
            ]
        ),
    )
    await call.answer()
    await state.set_state("custom_time_input")


@router.message(StateFilter("custom_time_input"))
async def custom_time_input_handler(message: Message, state: FSMContext):
    time_text = message.text.strip()

    if not time_text or ":" not in time_text:
        await message.answer(
            "❌ <b>Неверный формат времени!</b>\n\n"
            "Введите время в формате <b>ЧЧ:ММ</b>\n"
            "Например: <code>14:30</code>"
        )
        return

    try:
        time_parts = time_text.split(":")
        if len(time_parts) != 2:
            raise ValueError("Неверный формат")

        hour = int(time_parts[0])
        minute = int(time_parts[1])

        if not (0 <= hour <= 23):
            await message.answer(
                "❌ <b>Неверный час!</b>\n\n"
                "Час должен быть от 00 до 23\n"
                "Попробуйте еще раз:"
            )
            return

        if not (0 <= minute <= 59):
            await message.answer(
                "❌ <b>Неверные минуты!</b>\n\n"
                "Минуты должны быть от 00 до 59\n"
                "Попробуйте еще раз:"
            )
            return

        formatted_time = f"{hour:02d}:{minute:02d}"
        await state.update_data(scheduled_time=formatted_time)

        await message.answer(
            f"✅ <b>Время установлено!</b>\n\n"
            f"🕐 Выбранное время: <b>{formatted_time}</b>",
            reply_markup=InlineKeyboardMarkup(
                inline_keyboard=[
                    [
                        InlineKeyboardButton(
                            text="✅ Готово", callback_data="back_to_delayed_editor"
                        )
                    ]
                ]
            ),
        )

    except ValueError:
        await message.answer(
            "❌ <b>Неверный формат времени!</b>\n\n"
            "Введите время в формате <b>ЧЧ:ММ</b>\n"
            "Например: <code>14:30</code>"
        )


@router.callback_query(F.data == "add_delayed_url")
async def add_delayed_url(call: CallbackQuery, state: FSMContext):
    await call.message.edit_text(
        "✏️ <b>Название ссылки</b>\n\n" "Введите текст для кнопки:",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="🔙 Назад", callback_data="back_to_delayed_editor"
                    )
                ]
            ]
        ),
    )
    await call.answer()
    await state.set_state("delayed_button_name")


@router.message(StateFilter("delayed_button_name"))
async def delayed_button_name_handler(message: Message, state: FSMContext):
    await state.update_data(temp_button_name=message.text)

    await message.answer(
        "🔗 <b>URL ссылки</b>\n\n"
        "Введите ссылку:\n\n"
        "Пример: <code>https://example.com</code>",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="🔙 Назад", callback_data="add_delayed_url")]
            ]
        ),
    )
    await state.set_state("delayed_button_url")


@router.message(StateFilter("delayed_button_url"))
async def delayed_button_url_handler(message: Message, state: FSMContext):
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
                        text="➕ Еще ссылку", callback_data="add_delayed_url"
                    ),
                    InlineKeyboardButton(
                        text="✅ Готово", callback_data="back_to_delayed_editor"
                    ),
                ]
            ]
        ),
    )


@router.callback_query(F.data == "manage_delayed_buttons")
async def manage_delayed_buttons(call: CallbackQuery, state: FSMContext):
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
                    text=f"🔗 {button['text']}", callback_data=f"edit_delayed_btn_{i}"
                ),
                InlineKeyboardButton(text="🗑", callback_data=f"del_delayed_btn_{i}"),
            ]
        )

    keyboard_rows.append(
        [InlineKeyboardButton(text="🔙 Назад", callback_data="back_to_delayed_editor")]
    )

    await call.message.edit_text(
        f"🎛 <b>Управление ссылками</b>\n\n"
        f"📊 Ссылок: {len(buttons)}/6\n\n"
        f"Нажмите на ссылку для редактирования или 🗑 для удаления:",
        reply_markup=InlineKeyboardMarkup(inline_keyboard=keyboard_rows),
    )
    await call.answer()


@router.callback_query(F.data.startswith("del_delayed_btn_"))
async def delete_delayed_button(call: CallbackQuery, state: FSMContext):
    button_index = int(call.data.split("_")[-1])
    data = await state.get_data()
    buttons = data.get("buttons", [])

    if 0 <= button_index < len(buttons):
        deleted_button = buttons.pop(button_index)
        await state.update_data(buttons=buttons)

        await call.answer(f"✅ Ссылка '{deleted_button['text']}' удалена!")
        await manage_delayed_buttons(call, state)
    else:
        await call.answer("❌ Ссылка не найдена!", show_alert=True)


@router.callback_query(F.data == "clear_delayed_buttons")
async def clear_delayed_buttons(call: CallbackQuery, state: FSMContext):
    await state.update_data(buttons=[])
    await call.answer("✅ Все ссылки удалены!")
    await show_delayed_editor(call.message, state)


@router.callback_query(F.data == "back_to_delayed_editor")
async def back_to_delayed_editor(call: CallbackQuery, state: FSMContext):
    await show_delayed_editor(call.message, state)
    await call.answer()


@router.callback_query(F.data == "toggle_recurring")
async def toggle_recurring(call: CallbackQuery, state: FSMContext):
    """Переключение режима зацикливания рассылки"""
    data = await state.get_data()
    current_recurring = data.get("is_recurring", False)
    new_recurring = not current_recurring

    await state.update_data(is_recurring=new_recurring)

    if new_recurring:
        await call.answer(
            "🔄 Режим повтора включен! Рассылка будет отправляться каждый день в указанное время."
        )
    else:
        await call.answer(
            "⏹ Режим повтора отключен. Рассылка будет отправлена только один раз."
        )

    await show_delayed_editor(call.message, state)


@router.callback_query(F.data == "preview_delayed")
async def preview_delayed(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    original_message_id = data.get("message_id")
    original_chat_id = data.get("chat_id")
    buttons = data.get("buttons", [])

    if not original_message_id:
        await call.answer("❌ Нет сообщения для предпросмотра!", show_alert=True)
        return

    preview_keyboard = create_delayed_buttons_keyboard(buttons)

    control_buttons = [
        [
            InlineKeyboardButton(
                text="✏️ Редактировать", callback_data="back_to_delayed_editor"
            ),
            InlineKeyboardButton(
                text="⏰ Запланировать", callback_data="schedule_broadcast"
            ),
        ]
    ]

    if preview_keyboard:
        preview_keyboard.inline_keyboard.extend(control_buttons)
    else:
        preview_keyboard = InlineKeyboardMarkup(inline_keyboard=control_buttons)

    await call.message.edit_text(
        "👀 <b>ПРЕДПРОСМОТР ОТЛОЖЕННОЙ РАССЫЛКИ</b>\n\n"
        "⬇️ Ваше сообщение появится ниже",
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
                            text="🔙 Назад", callback_data="back_to_delayed_editor"
                        )
                    ]
                ]
            ),
        )

    await call.answer()


@router.callback_query(F.data == "schedule_broadcast")
async def schedule_broadcast(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()

    if not data.get("scheduled_date") or not data.get("scheduled_time"):
        await call.answer("❌ Выберите дату и время!", show_alert=True)
        return

    buttons_count = len(data.get("buttons", []))
    content_type = data.get("content_type", "text")
    users_count = await users.count_documents({})
    is_recurring = data.get("is_recurring", False)

    scheduled_datetime = data.get("scheduled_datetime")
    scheduled_time_parts = data.get("scheduled_time").split(":")
    scheduled_datetime = scheduled_datetime.replace(
        hour=int(scheduled_time_parts[0]), minute=int(scheduled_time_parts[1])
    )

    now = datetime.now()
    if scheduled_datetime <= now and not is_recurring:
        await call.answer("❌ Выберите время в будущем!", show_alert=True)
        return

    # Для зацикленных рассылок проверяем только время
    if is_recurring and scheduled_datetime.time() <= now.time():
        await call.answer(
            "❌ Для ежедневных рассылок выберите время позже текущего!", show_alert=True
        )
        return

    recurring_text = ""
    if is_recurring:
        recurring_text = f"\n🔄 <b>Повтор:</b> Каждый день в {data['scheduled_time']}\n⚠️ <b>Рассылка НЕ будет удаляться после отправки!</b>"

    text = (
        f"⏰ <b>ПОДТВЕРЖДЕНИЕ ОТЛОЖЕННОЙ РАССЫЛКИ</b>\n\n"
        f"📄 <b>Тип:</b> {content_type}\n"
        f"🎛 <b>Ссылок:</b> {buttons_count}\n"
        f"👥 <b>Получателей:</b> ~{users_count}\n"
        f"📅 <b>Дата:</b> {data['scheduled_date']}\n"
        f"🕐 <b>Время:</b> {data['scheduled_time']}{recurring_text}\n\n"
        f"⚠️ <b>Рассылка будет отправлена автоматически!</b>\n\n"
        f"Запланировать?"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="✅ ДА, ЗАПЛАНИРОВАТЬ!", callback_data="confirm_schedule"
                )
            ],
            [
                InlineKeyboardButton(
                    text="👀 Предпросмотр", callback_data="preview_delayed"
                ),
                InlineKeyboardButton(
                    text="✏️ Редактировать", callback_data="back_to_delayed_editor"
                ),
            ],
            [InlineKeyboardButton(text="❌ Отмена", callback_data="back:admin")],
        ]
    )

    await call.message.edit_text(text, reply_markup=keyboard)
    await call.answer()


@router.callback_query(F.data == "confirm_schedule")
async def confirm_schedule(call: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    is_recurring = data.get("is_recurring", False)

    scheduled_datetime = data.get("scheduled_datetime")
    scheduled_time_parts = data.get("scheduled_time").split(":")
    scheduled_datetime = scheduled_datetime.replace(
        hour=int(scheduled_time_parts[0]), minute=int(scheduled_time_parts[1])
    )

    broadcast_data = {
        "admin_id": call.from_user.id,
        "message_id": data.get("message_id"),
        "chat_id": data.get("chat_id"),
        "content_type": data.get("content_type"),
        "text": data.get("text"),
        "buttons": data.get("buttons", []),
        "scheduled_datetime": scheduled_datetime,
        "status": "scheduled",
        "created_at": datetime.now(),
        "is_recurring": is_recurring,
        "recurring_time": data.get("scheduled_time") if is_recurring else None,
    }

    result = await scheduled_broadcasts.insert_one(broadcast_data)

    recurring_info = ""
    if is_recurring:
        recurring_info = f"\n🔄 <b>Повтор:</b> Каждый день в {data['scheduled_time']}\n⚠️ <b>Рассылка НЕ будет удаляться!</b>"

    await call.message.edit_text(
        f"✅ <b>Рассылка запланирована!</b>\n\n"
        f"📅 <b>Дата:</b> {data['scheduled_date']}\n"
        f"🕐 <b>Время:</b> {data['scheduled_time']}{recurring_info}\n"
        f"🆔 <b>ID:</b> <code>{str(result.inserted_id)}</code>\n\n"
        f"📊 Рассылка будет отправлена автоматически в указанное время.",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="🏠 Админ меню", callback_data="back:admin")]
            ]
        ),
    )

    await call.answer("✅ Рассылка запланирована!")
    await state.clear()


def create_delayed_buttons_keyboard(buttons):
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
