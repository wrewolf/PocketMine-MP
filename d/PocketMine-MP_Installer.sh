#!/bin/bash
echo "[INFO] PocketMine-MP downloader for Linux - by @shoghicp v0.3"
echo "[0/2] Cleaning..."
rm -r -f src/
rm -f PocketMine-MP.php
rm -f README.md
rm -f LICENSE
rm -f compile_php.sh
rm -f start.sh
rm -f start.bat
echo "[1/2] Installing PocketMine-MP..."
wget https://github.com/shoghicp/PocketMine-MP/archive/master.zip -O latest.zip
unzip -o -q latest.zip
mv -f PocketMine-MP-master/* ./
rm -f -r PocketMine-MP-master/
rm -f latest.zip
chmod 0755 ./start.sh
chmod 0755 ./compile_php.sh
echo "[2/2] Installing PHP5"
./compile_php.sh
echo "[INFO] Done"