from aiogram import F, Router
from aiogram.fsm.context import FSMContext
from aiogram.types import CallbackQuery

from app.misc.back import back_function

router = Router()


@router.callback_query(F.data.contains("back:"))
async def back(call: CallbackQuery, state: FSMContext, function=None) -> None:

    await state.clear()

    if function is not None:
        function_name = function
    else:
        function_name = call.data.split("back:")[1]

    get_function = await back_function("app", function_name)
    if get_function is not None:
        if "state" in get_function["variables"]:
            return await get_function["function"](call, state)

        return await get_function["function"](call)

    await call.answer("❌", show_alert=True)
