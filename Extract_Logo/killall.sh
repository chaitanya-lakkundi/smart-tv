#!/bin/bash

for pid in `cat pids`
    do
        kill -9 $pid
        sed -i '1d' "pids"
    done
