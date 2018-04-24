#!/bin/bash

echo $$ >> pids
while :
    do
        for line in `cat predict_output`;
        do
            #echo "Line = $line"
            abs_filename=`echo $line | cut -d":" -f1`
            predicted=`echo $line | cut -d":" -f2`
            
            #echo "ABS = $abs_filename"
            #echo "Predicted = $predicted"
            filename=`basename $abs_filename | cut -d"-" -f1`
            if [[ $filename == $predicted ]]; then
                echo "Logging $predicted"
                python log_data.py $predicted
            fi
            sed -i '1d' "predict_output"
        done
        sleep 5
    done
