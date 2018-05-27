#!/bin/sh

cd ~/Extract_Logo
pgrep extract_logo

if [ $? -ne 0 ];then
    notify-send -t 5000 "Smart TV mode started"
    ./master.py start ~/my_video-1.mkv 10
else
    echo "Master.py already running"
fi
