#!/usr/bin/env python3

from subprocess import Popen
from sys import argv

def extract_logo(video_input, loop_times):
    interval = "5"
    proc = Popen("./extract_logo.sh --stream "+video_input+" "+interval+" loop "+loop_times, shell=True)
    return proc

def predict_channel():
    proc = Popen("./predict_master.sh", shell=True)
    return proc

def log_data():
    proc = Popen("./log_data_master.sh", shell=True)
    return proc

def fluentbit():
    proc = Popen("./rotate_log.sh", shell=True)
    from time import sleep
    sleep(2)
    proc = Popen("/opt/td-agent-bit/bin/td-agent-bit -c /etc/td-agent-bit/td-agent-bit.conf -R /etc/td-agent-bit/parsers.conf", shell=True)
    return proc

def main(cmd, video_input, loop_times):  
    if cmd == "start":
        pid_file = open("pids", "a+")

        pid_el = extract_logo(video_input, loop_times)
        
        #pid_flb = fluentbit()
        #print("Fluentbit = ",pid_flb.pid)
        #print(pid_flb.pid, file=pid_file)
        
        print("Extract Logo = ",pid_el.pid)
        print(pid_el.pid, file=pid_file)

        pid_predict = predict_channel()
        print("Predict Channel = ",pid_predict.pid)
        print(pid_predict.pid, file=pid_file)
        
        pid_log = log_data()
        print("Log data = ",pid_log.pid)
        print(pid_log.pid, file=pid_file)

    elif cmd == "stop":
        pass

if __name__ == "__main__":
    try:
        main(argv[1], argv[2], argv[3])
    except IndexError:
        print("Usage: ./master.py start video_input loop_times")
