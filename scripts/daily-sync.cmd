@echo off
rem ============================================================
rem  Daily local sync + translate + push for free-for-dev-zh.
rem
rem  Why local: the LLM relay endpoint blocks datacenter IPs, so
rem  a scheduled task on this machine replaces GitHub Actions.
rem  Git sync itself has no IP restriction, but keeping one entry
rem  point is simpler (same pattern as prompts-chat-zh).
rem
rem  Flow: fetch upstream snapshot -> translate delta (hash-keyed
rem  cache, only the delta costs tokens) -> build README.zh.md and
rem  docs page -> commit -> push. Push to main rebuilds GitHub
rem  Pages (docs/ folder) automatically.
rem
rem  Translate failure is NOT fatal: build passes English through
rem  for missing items and the next run picks them up.
rem
rem  Requires: TRANSLATE_API_KEY filled in .env at repo root.
rem  Log: %TEMP%\free-for-dev-zh-sync.log
rem ============================================================
setlocal
set LOG=%TEMP%\free-for-dev-zh-sync.log
echo ===== %DATE% %TIME% ===== >> "%LOG%"
cd /d D:\Github-Star\free-for-dev-zh >> "%LOG%" 2>&1
if errorlevel 1 (echo [ERR] repo dir not found >> "%LOG%" & exit /b 1)

echo [1/4] fetch upstream snapshot >> "%LOG%"
call node scripts/sync.mjs >> "%LOG%" 2>&1
if errorlevel 1 (echo [ERR] upstream fetch failed >> "%LOG%" & exit /b 1)

echo [2/4] translate delta >> "%LOG%"
rem  Single-item mode: relay batches can hang under congestion; singles
rem  always get through and nightly deltas are only a few items anyway.
call node scripts/translate.mjs --concurrency=4 --entryBatch=1 --textBatch=1 >> "%LOG%" 2>&1
if errorlevel 1 echo [WARN] translate had failures, build continues with English passthrough >> "%LOG%"

echo [3/4] build outputs >> "%LOG%"
call node scripts/build.mjs >> "%LOG%" 2>&1
if errorlevel 1 (echo [ERR] build failed >> "%LOG%" & exit /b 1)

echo [4/4] commit and push >> "%LOG%"
git add -A >> "%LOG%" 2>&1
git diff --staged --quiet >> "%LOG%" 2>&1
if %errorlevel%==0 (
  echo [OK] nothing new, cache unchanged >> "%LOG%"
  exit /b 0
)
git commit -m "sync: upstream update + translation refresh" >> "%LOG%" 2>&1
if errorlevel 1 (echo [ERR] commit failed >> "%LOG%" & exit /b 1)
git push origin main >> "%LOG%" 2>&1
if errorlevel 1 (echo [ERR] push failed >> "%LOG%" & exit /b 1)

echo [OK] pushed, GitHub Pages will rebuild >> "%LOG%"
endlocal
