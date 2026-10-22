from app.database.db import users
from app.logging.logging import logger
from aiogram.filters import ChatMemberUpdatedFilter
from aiogram.types import ChatMemberUpdated
from aiogram import Router
from aiogram.filters import IS_NOT_MEMBER, IS_MEMBER

from config import channel_id

router = Router()


@router.chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def user_joined_channel(event: ChatMemberUpdated):
    if (
        str(event.chat.id) == str(channel_id)
        and event.new_chat_member.status == "member"
    ):
        user_id = event.new_chat_member.user.id
        try:
            user = await users.find_one({"user_id": user_id})
            if user and not user["modifies"]["subscribe_bonus"]:
                await users.update_one(
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
            user = await users.find_one({"user_id": user_id})
            if user and user["modifies"]["subscribe_bonus"]:
                new_energy_max = user["energy_max"] - 1000

                if user["energy"] > new_energy_max:
                    await users.update_one(
                        {"user_id": user_id},
                        {"$set": {"energy": new_energy_max}},
                    )

                await users.update_one(
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
