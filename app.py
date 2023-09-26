
from flask import Flask, render_template
import json


app = Flask(__name__)


@app.route("/")
@app.route("/home")
def index():
	return render_template("home.html")

@app.route('/career')
def career():
	with open('data/career.json', 'r') as json_file:
		career_data = json.load(json_file)
	sorted_career = sorted(career_data, key=lambda x: x["rank"])
	return render_template('career.html', careers=sorted_career)

@app.route('/side-projects')
def side_projects():
    return render_template('side_projects.html')


if __name__ == '__main__':
	app.run(debug=True, port=5002)
