import glob
import os
import importlib.util


async def back_function(path: str, function_name: str):
    files = glob.glob(os.path.join(path, "**/*.py"), recursive=True)

    for file in files:
        try:
            module_path = file.replace("\\", "/")
            module_dir, module_name = os.path.split(module_path)
            module_name = module_name[:-3]

            if "handlers" in module_dir or "commands" in module_dir:

                spec = importlib.util.spec_from_file_location(module_name, module_path)
                if spec is None:
                    continue
                module = importlib.util.module_from_spec(spec)
                spec.loader.exec_module(module)

                for variable in dir(module):
                    if not variable.startswith("_") and callable(
                        getattr(module, variable)
                    ):
                        if variable == function_name:
                            func = getattr(module, variable)
                            return {
                                "function": func,
                                "variables": list(
                                    func.__code__.co_varnames[
                                        : func.__code__.co_argcount
                                    ]
                                ),
                            }
        except Exception as e:
            return None
