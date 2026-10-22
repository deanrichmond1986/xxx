#!/usr/bin/env python3
"""Generate the Pages theme/UI from the canonical Telegram frontend."""
from pathlib import Path
import argparse

root = Path(__file__).resolve().parents[1]
check = argparse.ArgumentParser()
check.add_argument('--check', action='store_true')
args = check.parse_args()
source = root / 'front'
dest = root / 'docs'
html = (source / 'index.html').read_text().replace('data-mode="live"', 'data-mode="demo"').replace(
    '<script src="https://telegram.org/js/telegram-web-app.js"></script>',
    '<script src="demo-runtime.js"></script>\n  <script defer src="demo-api.js?v=premium-1"></script>',
)
expected = {'index.html': html.encode()}
for folder in ['css', 'js', 'fonts']:
    for path in (source / 'public' / folder).rglob('*'):
        if path.is_file():
            expected[path.relative_to(source).as_posix()] = path.read_bytes()
for name, data in expected.items():
    path = dest / name
    if args.check:
        if not path.exists() or path.read_bytes() != data:
            raise SystemExit(f'Generated frontend drift: {name}')
    else:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
print('Frontend sync: OK' if args.check else f'Generated {len(expected)} Pages frontend files')
