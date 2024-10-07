from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('templates/index.html')

@app.route('/project')
def about():
    return render_template('project.html')