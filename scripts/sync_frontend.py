#!/usr/bin/env python3
"""Sync the original Telegram frontend with its static Pages demo variant."""
from pathlib import Path
import argparse
root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--check', action='store_true')
args = parser.parse_args()
source, dest = root / 'front', root / 'docs'
html = (source / 'index.html').read_text().replace(
    'https://telegram.org/js/telegram-web-app.js', 'demo-runtime.js').replace(
    '<script src="public/vendor/jquery-3.7.1.min.js"></script>',
    '<script src="public/vendor/jquery-3.7.1.min.js"></script>\n<script src="demo-api.js"></script>')
expected = {'index.html': html.encode(), 'public/img/friends-premium.svg': (source / 'public/img/friends-premium.svg').read_bytes()}
for folder in ['css', 'js', 'fonts', 'vendor']:
    for path in (source / 'public' / folder).rglob('*'):
        if not path.is_file():
            continue
        name = path.relative_to(source).as_posix()
        data = path.read_bytes()
        if name.endswith('/modal.js'):
            data = data.decode().replace(
                'window.location.href = "https://t.me/+hgxLxs1MBRlmOTA1";',
                'showNotification("Это демоверсия. Для тестовой награды нажми «Проверить подписку».", "done");').replace(
                'тройной запас энергии', 'двойной запас энергии').encode()
        if name.endswith('/login.js'):
            data = data.decode().replace(
                '"https://t.me/taptesttap_bot?start=" + manager.info.referral_code',
                'window.location.href.split("?")[0]').encode()
        expected[name] = data
for name, data in expected.items():
    path = dest / name
    if args.check:
        if not path.exists() or path.read_bytes() != data:
            raise SystemExit(f'Generated frontend drift: {name}')
    else:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
print('Frontend sync: OK' if args.check else f'Generated {len(expected)} Pages frontend files')
