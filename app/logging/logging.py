from loguru import logger

logger.add(
    "./app/logging/errors.log",
    format="{time:YYYY-MM-DD at HH:mm:ss} | {level} | {message}",
    level="ERROR",
    rotation="10MB"
)
