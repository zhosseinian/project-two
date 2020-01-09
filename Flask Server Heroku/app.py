# import flask
import pandas as pd
import numpy as np
import sqlite3

from flask import Flask, jsonify

from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)


# database setup
con = sqlite3.connect("larcs.sqlite")

# create an app


# list all available routes
@app.route("/")
def welcome():
    """List all available api routes."""
    return(
        f"Available Routes:<br/>"
        f"/api/v1.0/LARCs<br/>"
)

@app.route("/api/v1.0/LARCs")
def precipitation():
    """Convert the query results to a Dictionary using date as the key and prcp as the value."""
    """Return the JSON representation of your dictionary"""
    con = sqlite3.connect("larcs.sqlite")
    larcs_df = pd.read_sql_query("SELECT * FROM table_larcs", con)

    return jsonify(larcs_df.to_json(orient='table'))

@app.route("/mean")
def means():

    con = sqlite3.connect("larcs.sqlite")
    larcs_df = pd.read_sql_query("SELECT * FROM table_larcs", con)
    data_dict = {
         "mean_iplarc_percentages" : larcs_df.groupby('hospitalid')['percent_trained_iplarc'].mean(),
    "mean_iud_percentages" : larcs_df.groupby('hospitalid')['percent_iplarc_iudplace'].mean(),
    "mean_implant_percentages" : larcs_df.groupby('hospitalid')['percent_iplarc_implant'].mean()
    }
   

    return jsonify(data_dict)


if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=5000)


