from __future__ import print_function
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, request, render_template
import jinja2
from subprocess import call, Popen, PIPE

app = Flask(__name__)
CORS(app)

"""
@app.route('/events')
def get_event():
  return jsonify(incomes)
"""

@app.route('/events', methods=['POST'])
def exec_event():
  #incomes.append(request.get_json())
  vars = request.get_json()
  #call("/usr/bin/notify-send "+vars["name"], shell=True)
  if vars["code"] == "33":
    kodi_obj = Popen("~/UI/kodi_master.sh", shell=True)
  elif vars["code"] == "99":
    call("kodi-send --action='Quit'",shell=True)
    #kodi_pids = Popen("pgrep kodi", shell=True, stdout=PIPE)
    #kodi_pids = kodi_pids.stdout.read().split()
    #for pid in kodi_pids:
    #    call("kill "+pid, shell=True)
  elif vars["code"] == "66":
    call("~/UI/start_smarttv.sh", shell=True)
  elif vars["code"] == "77":
    call("~/Extract_Logo/killall.sh", shell=True)
  else:
    call("xdotool key "+vars["name"], shell=True)
  return '', 200

@app.route("/arrow_keyboard")
def arrow_keyboard():
    #loader=jinja2.FileSystemLoader('templates')
    return render_template("arrow_keyboard.html")

@app.route("/kodi")
def kodi_button():
    return render_template("kodi_button.html")

@app.route("/smart_switch")
def smart_switch():
    return render_template("smart_switch.html")

@app.route("/chrome_game", methods=['POST'])
def chrome_game():
    Popen("~/UI/chrome_game.sh", shell=True)
    return "Chrome started"

@app.route("/chrome_end", methods=['POST'])
def chrome_end():
    Popen("~/UI/chrome_end.sh", shell=True)
    return "Chrome ended"

@app.route("/chrome_dashboard", methods=['POST'])
def chrome_dashboard():
    Popen("~/UI/chrome_dashboard.sh", shell=True)
    return "Chrome started dashboard"

@app.route("/chrome_analytics", methods=['POST'])
def chrome_analytics():
    Popen("~/UI/chrome_analytics.sh", shell=True)
    return "Chrome started analytics"
