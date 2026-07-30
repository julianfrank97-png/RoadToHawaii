@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:8080
  node tools\dev-server.js
  exit /b
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:8080
  py -m http.server 8080 --bind 127.0.0.1
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:8080
  python -m http.server 8080 --bind 127.0.0.1
  exit /b
)
echo Weder Node.js noch Python wurde gefunden.
echo Installiere Node.js LTS oder lies INSTALLATION.md.
pause
