#!/bin/bash

echo $$ >> pids

function predict {
    while :
    do
        batch_count=`wc -l predict_source | cut -d" " -f1`
        while [ $batch_count -lt 50 ];do
            batch_count=`wc -l predict_source | cut -d" " -f1`
            echo "Sleep predict"
            sleep 1
        done

        #FILES=`cat predict_source | sed -i s/\n/ /g`
        echo "Running predict_channel"
        python predict_channel.py
        
    done
}

case $1 in 

    kill)
        pid=`pgrep -f "python predict_channel.py"`
        kill -9 $pid
        echo "Killed $pid"

        pid=`pgrep -f "predict_master.sh"`
        kill -9 $pid
        echo "Killed $pid"
        ;;
    *)
        predict
        ;;

esac
