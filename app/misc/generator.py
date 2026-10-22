import aiohttp


async def random_data():
    try:
        async with aiohttp.ClientSession(trust_env=True, timeout=aiohttp.ClientTimeout(total=10)) as session:
            async with session.get("https://randomuser.me/api/") as response:
                if response.status == 200:
                    data = await response.json()
                    if data.get("results"):
                        user = data["results"][0]
                        return f"{user['name']['first']} {user['name']['last']}"
    except (aiohttp.ClientError, TimeoutError):
        pass
    return "Игрок"
