#!/bin/bash

cd ~/Extract_Logo
for pid in `cat pids`
    do
        kill -9 $pid
        sed -i '1d' "pids"
    done

#fluentbit_pids=`pgrep td-agent`

#kill $fluentbit_pids

