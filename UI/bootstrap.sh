#!/bin/sh
export FLASK_APP=./keystroke_server/index.py
#source venv/bin/activate
flask run -h 0.0.0.0 -p 3000
