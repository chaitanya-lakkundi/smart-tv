#!/bin/bash
trap user_interrupt SIGINT

ABS="/home/pi/Extract_Logo"

cd "$ABS"
echo $$ >> pids

mkdir -p "$ABS/dump"

touch "$ABS/counter"
touch "$ABS/predict_source"

count=$(cat "$ABS/counter")
FRAME=""

function user_interrupt {
    #python "$ABS/threshold.py" "$ABS/dump/"
    exit
}

function crop_video_frame {
    LOGO="$ABS/dump/channel_logo.jpg"

    FILE="$ABS/list_of_dimensions"
    while read -r line
        do
            if ! [ $line ];then break; fi
            if [[ $line == ~* ]]; then continue; fi
            echo "$line"

            channel_name=$(echo "$line" | cut -d";" -f1)
            channel_name=$channel_name-$count
            
            channel_dimen=$(echo "$line" | cut -d";" -f2)

            convert "$FRAME" -crop $channel_dimen "$LOGO"

            #echo "mv $LOGO ${channel_name}.jpg"
            mv "$LOGO" "$ABS/dump/${channel_name}.jpg"           
            python "$ABS/threshold.py" "$ABS/dump/${channel_name}.jpg"
            echo "$ABS/dump/${channel_name}.jpg.bw.png" >> predict_source
        done < "$FILE"
}

function process_video {
    INPUT_VIDEO="$1"
    TIME="$2"

    echo "Processing video frame"
    
    count=$((count + 1))
    #FRAME="video_frame-"$count".jpg"
    FRAME="$ABS/dump/video_frame.jpg"
    echo -e "Get video frame\n" && echo "y" | ffmpeg -i "$INPUT_VIDEO" -s 640x480 -ss 00:00:$TIME -vframes 1 "$FRAME"
    
    crop_video_frame "$FRAME"
    
    echo $count > counter
    sleep 30
    
}

function main {
    OPT="$1"
    INPUT="$2"
    TIME="$3"
    LOOP_OPT="$4"
    LOOP_TIMES="$5"
    
    if [[ $OPT == "--stream" ]];then
        echo "Stream"
        if ! [ $LOOP_TIMES ];then
            LOOP_TIMES=-1
        fi
        
        if [[ $LOOP_OPT == "loop" ]];then
            until [ $LOOP_TIMES -eq 0 ];do
                echo "Loop $LOOP_TIMES"
                process_video "$INPUT" $TIME
                LOOP_TIMES=$((LOOP_TIMES - 1))
            done
        else
            process_video "$INPUT" $TIME
        fi
    else
        echo "Arg error"
    fi
}

main $1 $2 $3 $4 $5
#python "$ABS/threshold.py" "$ABS/dump/"
