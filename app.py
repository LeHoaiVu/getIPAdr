#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
© MIT licensed, 2018-2023
"""

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

app_data = {
    "ip": ""
}

@app.route("/")
def index():
    ip = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
    app_data['ip'] = ip
    return render_template("index.html", app_data=app_data)

if __name__ == "__main__":
    app.run()
