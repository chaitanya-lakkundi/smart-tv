#!/bin/bash

pgrep kodi_v7.bin
if [ $? -ne 0 ];then
    echo "Starting kodi"
    kodi &
else
    echo "Kodi already running"
fi
