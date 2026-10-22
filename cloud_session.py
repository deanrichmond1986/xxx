"""Сессия Telegram с поддержкой HTTPS-прокси облачной среды."""
import ssl
from aiohttp import ClientSession, TCPConnector
from aiogram.client.session.aiohttp import AiohttpSession


class CloudSession(AiohttpSession):
    async def create_session(self):
        if self._session is None or self._session.closed:
            self._session = ClientSession(
                trust_env=True,
                connector=TCPConnector(ssl=ssl.create_default_context()),
            )
        return self._session
