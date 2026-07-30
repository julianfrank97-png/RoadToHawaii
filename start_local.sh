#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if command -v node >/dev/null 2>&1; then
  exec node tools/dev-server.js
fi
if command -v python3 >/dev/null 2>&1; then
  printf 'Triathlon Karriere läuft auf http://127.0.0.1:8080\n'
  exec python3 -m http.server 8080 --bind 127.0.0.1
fi
printf 'Node.js oder Python 3 wird für den lokalen Start benötigt. Siehe INSTALLATION.md.\n' >&2
exit 1
