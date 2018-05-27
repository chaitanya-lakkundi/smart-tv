#!/bin/sh

xfce4-terminal -e "/home/pi/UI/bootstrap.sh" &

cd ~/UI/website/build
xfce4-terminal -e "python2 -m SimpleHTTPServer 8000" &

cd ~/UI/2048-master/
xfce4-terminal -e "python2 -m SimpleHTTPServer 9000" &

cd ~/Extract_Logo

./rotate_log.sh
sleep 2
xfce4-terminal -e "/opt/td-agent-bit/bin/td-agent-bit -c /etc/td-agent-bit/td-agent-bit.conf -R /etc/td-agent-bit/parsers.conf" &
#./master.py start ~/my_video-1.mkv 10
