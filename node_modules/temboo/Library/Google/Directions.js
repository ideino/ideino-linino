
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetBicyclingDirections
     Generate biking directions between two locations, denoted by address or latitude/longitude coordinates.
*/


var GetBicyclingDirections = function(session) {
    /*
        Create a new instance of the GetBicyclingDirections Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Directions/GetBicyclingDirections"
    GetBicyclingDirections.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBicyclingDirectionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBicyclingDirectionsInputSet();
    }
    
	/*
	Execute this Choreo with the specified inputs, calling the specified callback upon success,
	and the specified errorCallback upon error.
	*/
    this.execute = function(inputs, callback, errorCallback) {
        this._execute(inputs, newResultSet, callback, errorCallback);
    }
}


/*
An InputSet with methods appropriate for specifying the inputs to the GetBicyclingDirections
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBicyclingDirectionsInputSet = function() {
    GetBicyclingDirectionsInputSet.super_.call(this);
        /*
        Set the value of the Alternatives input for this Choreo. ((optional, string) If set to true, additional routes will be returned.)
        */
        this.set_Alternatives = function(value) {
            this.setInput("Alternatives", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be generated (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Origin input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be computed (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Origin = function(value) {
            this.setInput("Origin", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) Enter the region code for the directions, specified as a ccTLD two-character value.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) Specify the units to be used when displaying results.  Options include, metric, or imperial.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

        /*
        Set the value of the Waypoints input for this Choreo. ((optional, string) Specify route waypoints, either by address, or latitude/longitude coordinates.)
        */
        this.set_Waypoints = function(value) {
            this.setInput("Waypoints", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBicyclingDirections Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBicyclingDirectionsResultSet = function(resultStream) {
    GetBicyclingDirectionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBicyclingDirections, choreography.Choreography);
util.inherits(GetBicyclingDirectionsInputSet, choreography.InputSet);
util.inherits(GetBicyclingDirectionsResultSet, choreography.ResultSet);
exports.GetBicyclingDirections = GetBicyclingDirections;


/*
    GetDrivingDirections
     Generates directions between two locations, denoted by address, or latitude/longitude coordinates.
*/


var GetDrivingDirections = function(session) {
    /*
        Create a new instance of the GetDrivingDirections Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Directions/GetDrivingDirections"
    GetDrivingDirections.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDrivingDirectionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDrivingDirectionsInputSet();
    }
    
	/*
	Execute this Choreo with the specified inputs, calling the specified callback upon success,
	and the specified errorCallback upon error.
	*/
    this.execute = function(inputs, callback, errorCallback) {
        this._execute(inputs, newResultSet, callback, errorCallback);
    }
}


/*
An InputSet with methods appropriate for specifying the inputs to the GetDrivingDirections
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDrivingDirectionsInputSet = function() {
    GetDrivingDirectionsInputSet.super_.call(this);
        /*
        Set the value of the Alternatives input for this Choreo. ((optional, string) If set to true, additional routes will be returned.)
        */
        this.set_Alternatives = function(value) {
            this.setInput("Alternatives", value);
        }

        /*
        Set the value of the Avoid input for this Choreo. ((optional, string) Specify whether the calculated directions should avoid the following features: tolls, or highways.)
        */
        this.set_Avoid = function(value) {
            this.setInput("Avoid", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be generated (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Origin input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be computed (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Origin = function(value) {
            this.setInput("Origin", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) Enter the region code for the directions, specified as a ccTLD two-character value.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) Specify the units to be used when displaying results.  Options include, metric, or imperial.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

        /*
        Set the value of the Waypoints input for this Choreo. ((optional, string) Specify route waypoints, either by address, or latitude/longitude coordinates.)
        */
        this.set_Waypoints = function(value) {
            this.setInput("Waypoints", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDrivingDirections Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDrivingDirectionsResultSet = function(resultStream) {
    GetDrivingDirectionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDrivingDirections, choreography.Choreography);
util.inherits(GetDrivingDirectionsInputSet, choreography.InputSet);
util.inherits(GetDrivingDirectionsResultSet, choreography.ResultSet);
exports.GetDrivingDirections = GetDrivingDirections;


/*
    GetWalkingDirections
     Generate walking directions between two locations, denoted by address or latitude/longitude coordinates.
*/


var GetWalkingDirections = function(session) {
    /*
        Create a new instance of the GetWalkingDirections Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Directions/GetWalkingDirections"
    GetWalkingDirections.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWalkingDirectionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWalkingDirectionsInputSet();
    }
    
	/*
	Execute this Choreo with the specified inputs, calling the specified callback upon success,
	and the specified errorCallback upon error.
	*/
    this.execute = function(inputs, callback, errorCallback) {
        this._execute(inputs, newResultSet, callback, errorCallback);
    }
}


/*
An InputSet with methods appropriate for specifying the inputs to the GetWalkingDirections
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWalkingDirectionsInputSet = function() {
    GetWalkingDirectionsInputSet.super_.call(this);
        /*
        Set the value of the Alternatives input for this Choreo. ((optional, string) If set to true, additional routes will be returned.)
        */
        this.set_Alternatives = function(value) {
            this.setInput("Alternatives", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be generated (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Origin input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates from which directions will be computed (i.e."104 Franklin St, New York, NY" or "40.7160,-74.0037").)
        */
        this.set_Origin = function(value) {
            this.setInput("Origin", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) Enter the region code for the directions, specified as a ccTLD two-character value.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) Specify the units to be used when displaying results.  Options include, metric, or imperial.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

        /*
        Set the value of the Waypoints input for this Choreo. ((optional, string) Specify route waypoints, either by address, or latitude/longitude coordinates.)
        */
        this.set_Waypoints = function(value) {
            this.setInput("Waypoints", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWalkingDirections Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWalkingDirectionsResultSet = function(resultStream) {
    GetWalkingDirectionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWalkingDirections, choreography.Choreography);
util.inherits(GetWalkingDirectionsInputSet, choreography.InputSet);
util.inherits(GetWalkingDirectionsResultSet, choreography.ResultSet);
exports.GetWalkingDirections = GetWalkingDirections;

