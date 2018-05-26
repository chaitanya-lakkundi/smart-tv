#!/usr/bin/env python3
import json

data = {
    "DD_News": {
        "name": "DD_News",
        "sattva": 20,
        "rajas": 60,
        "tamas": 20,
        "genre": "News"
    },
    "Rishtey": {
        "name": "Rishtey",
        "sattva": 0,
        "rajas": 70,
        "tamas": 30,
        "genre": "Entertainment"
    },
    "India_TV": {
        "name": "India_TV",        
        "sattva": 5,
        "rajas": 65,
        "tamas": 25,
        "genre": "News"
    },
    "Zee_News": {
        "name": "Zee_News",
        "sattva": 5,
        "rajas": 65,
        "tamas": 25,
        "genre": "News"
    },
    "Aastha": {
        "name": "Aastha",
        "sattva": 70,
        "rajas": 30,
        "tamas": 0,
        "genre": "Spiritual"
    }
}


def main(channel_name):
    log_file = open("smarttv.log", "a+")
    log_file.write(json.dumps(data[channel_name])+"\n")
    log_file.close()

if __name__ == "__main__":
    from sys import argv
    main(argv[1])
