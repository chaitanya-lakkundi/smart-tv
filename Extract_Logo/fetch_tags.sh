#!/bin/bash

function get_tags {
    channel_name=$1
    field=$2
    for line in `cat channel_tags`;
       	do
        name=`echo $line | cut -d";" -f1`;
        if [[ $name == $channel_name ]]; then
            sattva=`echo $line | cut -d";" -f2`
            rajas=`echo $line | cut -d";" -f3`
            tamas=`echo $line | cut -d";" -f4`
            genre=`echo $line | cut -d";" -f5`            
            case $field in
                sattva) echo $sattva;
                ;;
                rajas) echo $rajas;
                ;;
                tamas) echo $tamas;
                ;;
                genre) echo $genre;
                ;;
                *) echo "Not found";
                ;;
            esac

        fi
	done
}

get_tags $1 "sattva"
