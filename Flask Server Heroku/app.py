# import flask
import pandas as pd
import numpy as np
import sqlite3

from flask import Flask, jsonify

# database setup
con = sqlite3.connect("larc.sqlite")

# create an app
app = Flask(__name__)

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
    con = sqlite3.connect("larc.sqlite")
    larcs_df = pd.read_sql_query("SELECT * FROM table_tesrt", con)

    return jsonify(larcs_df.to_json(orient='table'))


if __name__ == "__main__":
    app.run(debug=True)


