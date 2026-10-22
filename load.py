import glob
import os
import sys
import importlib.util
from aiogram import Router


def load_routers(path: str):
    router = Router()

    files = glob.glob(os.path.join(path, '**/*.py'), recursive=True)

    for file in files:
        file_path = file.replace('\\', '/')
        module_name = file_path.replace('/', '.').replace('.py', '')

        if 'commands' in file_path or 'handlers' in file_path:
            spec = importlib.util.spec_from_file_location(module_name, file_path)
            module = importlib.util.module_from_spec(spec)
            sys.modules[module_name] = module
            spec.loader.exec_module(module)

            if hasattr(module, 'router'):
                router.include_router(module.router)

    return router
