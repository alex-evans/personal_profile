
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
	sorted_career = sorted(career_data, key=lambda x: x["rank"], reverse=True)
	return render_template('career.html', careers=sorted_career)


@app.route('/side-projects')
def side_projects():
	with open('data/side_projects.json', 'r') as json_file:
		side_projects_data = json.load(json_file)
	sorted_side_projects = sorted(side_projects_data, key=lambda x: x["rank"], reverse=True)
	return render_template('side_projects.html', projects=sorted_side_projects)


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port=8050)
