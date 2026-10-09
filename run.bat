@echo off
chcp 65001 > nul
title Thiệp Cưới Long Phụng Đỏ - Offline
echo ========================================================
echo   Đang khởi chạy Thiệp Cưới Offline "Long Phụng Đỏ"...
echo ========================================================
start "" "http://localhost:3000"
node server.js
pause
