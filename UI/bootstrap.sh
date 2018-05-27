#!/bin/bash
export FLASK_APP=/home/pi/UI/keystroke_server/index.py
export PATH="/home/pi/berryconda3/bin:$PATH"
#source venv/bin/activate
flask run -h 0.0.0.0 -p 7000
