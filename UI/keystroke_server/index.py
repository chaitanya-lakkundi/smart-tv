from flask import Flask, jsonify, request, render_template
import jinja2
from subprocess import call

app = Flask(__name__)

"""
@app.route('/events')
def get_event():
  return jsonify(incomes)
"""

@app.route('/events', methods=['POST'])
def exec_event():
  #incomes.append(request.get_json())
  vars = request.get_json()
  call("/usr/bin/notify-send "+vars["name"], shell=True)
  call("./fire_event.out "+vars["dir_code"], shell=True)
  return '', 200

@app.route("/")
def main():
    #loader=jinja2.FileSystemLoader('templates')
    return render_template("index.html")
