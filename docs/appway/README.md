# AppWay archive preview

This launcher connects the uploaded stylesheet and scripts to their expected DOM. The original HTML and backend were not included. Existing catalog data, rendering, search, filters, detail screens, themes and language switching run unchanged. Original script contents are copied byte for byte under URL-safe filenames. The explicit preview adapter replaces only installation/account/video actions with truthful unavailable messages; no accounts or backend are fabricated.

Open `preview.html?preview=1` via a static web server. Python: `python3 -m http.server 8092 --bind 127.0.0.1 --directory /workspace/appway-preview`. Public deployment is under the existing Pages site `/appway/preview.html?preview=1`, separate from Money Tap.

Some screenshot filenames referenced by the scripts are absent from the archive. The preview adapter uses only supplied local screenshots and retains the application's own fallback rendering for the rest. Remote icons keep the application's built-in fallback.
