# import flask
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

# database setup
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# save reference to the table
Station = Base.classes.station
Measurement = Base.classes.measurement

session = Session(engine)

# create an app
app = Flask(__name__)

# list all available routes
@app.route("/")
def welcome():
    """List all available api routes."""
    return(
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/<start><br/>"
        f"/api/v1.0/<start>/<end>"
)

@app.route("/api/v1.0/precipitation")
def precipitation():
    """Convert the query results to a Dictionary using date as the key and prcp as the value."""
    """Return the JSON representation of your dictionary"""
    last_12 = session.query(Measurement.date, Measurement.prcp).\
    filter(Measurement.date >= "2016-08-23").\
    filter(Measurement.date <= "2017-08-23").all()

    precipitation_list = [last_12]

    return jsonify(precipitation_list)

@app.route("/api/v1.0/stations")
def stations():
    """Return a JSON list of stations from the dataset."""
    # station = session.query(Station.name).all()
    station = session.query(Measurement.station, Station.name, func.count(Measurement.station)).\
    filter(Measurement.station == Station.station).\
    group_by(Measurement.station).\
    order_by(func.count(Measurement.station).desc()).all()
    station_list = list(np.ravel(station))
    
    return jsonify(station_list)

@app.route("/api/v1.0/tobs")
def tobs():
    """query for the dates and temperature observations from a year from the last data point."""
    """Return a JSON list of Temperature Observations (tobs) for the previous year."""
    tobs = session.query(Measurement.date, Measurement.tobs).\
    filter(Measurement.date >= "2016-08-23").\
    filter(Measurement.date <= "2017-08-23").all()
    
    return jsonify(tobs)

@app.route("/api/v1.0/<start>")
def starts(start):
    """Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range."""
    """When given the start only, calculate TMIN, TAVG, and TMAX for all dates greater than and equal to the start date."""
    """When given the start and the end date, calculate the TMIN, TAVG, and TMAX for dates between the start and end date inclusive."""
    tmin = session.query(func.min(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").all()
    tavg = session.query(func.avg(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").all()
    tmax = session.query(func.max(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").all()
    result = tmin, tavg, tmax
    temp_list = list(np.ravel(result))
    temp_list_df = {'tmin':temp_list[0], 'tavg':temp_list[1], 'tmax':temp_list[2]}
    
    return jsonify(temp_list_df)

@app.route("/api/v1.0/<start>/<end>")
def start_end_temp(start, end):
    """Return a json list of the minimum temperature, the average temperature,
    and the max temperature for a given start-end range."""
    tmin = session.query(func.min(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").\
            filter(Measurement.date <= "2017-08-23").all()
    tavg = session.query(func.avg(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").\
            filter(Measurement.date <= "2017-08-23").all()
    tmax = session.query(func.max(Measurement.tobs)).\
            filter(Measurement.date >= "2016-08-23").\
            filter(Measurement.date <= "2017-08-23").all()
    result = tmin, tavg, tmax
    temp_list = list(np.ravel(result))
    temp_list_df = {'tmin':temp_list[0], 'tavg':temp_list[1], 'tmax':temp_list[2]}
    
    return jsonify(temp_list_df)


if __name__ == "__main__":
    app.run(debug=True)


