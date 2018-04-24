#!/bin/bash

echo $$ >> pids

while :
    do
        sleep 20
        sed -i '1,5d' smarttv.log
    done
