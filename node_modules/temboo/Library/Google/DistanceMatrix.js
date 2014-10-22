
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    BicyclingDistanceMatrix
    Obtain bicycling distances and times for a matrix of addresses and/or latitude/longitude coordinates.
*/


var BicyclingDistanceMatrix = function(session) {
    /*
        Create a new instance of the BicyclingDistanceMatrix Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/DistanceMatrix/BicyclingDistanceMatrix"
    BicyclingDistanceMatrix.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BicyclingDistanceMatrixResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BicyclingDistanceMatrixInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BicyclingDistanceMatrix
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BicyclingDistanceMatrixInputSet = function() {
    BicyclingDistanceMatrixInputSet.super_.call(this);
        /*
        Set the value of the Alternatives input for this Choreo. ((optional, string) If set to true, additional routes will be returned.)
        */
        this.set_Alternatives = function(value) {
            this.setInput("Alternatives", value);
        }

        /*
        Set the value of the Destinations input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates to which directions will be generated. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Destinations = function(value) {
            this.setInput("Destinations", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Set the language in which to return restults.  A list of supported languages is available here: https://spreadsheets.google.com/pub?key=p9pdwsai2hDMsLkXsoM05KQ&gid=1)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Origins input for this Choreo. ((required, string) Enter the address(es) or geo-coordinates from which distance and time will be computed. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Origins = function(value) {
            this.setInput("Origins", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the BicyclingDistanceMatrix Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BicyclingDistanceMatrixResultSet = function(resultStream) {
    BicyclingDistanceMatrixResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BicyclingDistanceMatrix, choreography.Choreography);
util.inherits(BicyclingDistanceMatrixInputSet, choreography.InputSet);
util.inherits(BicyclingDistanceMatrixResultSet, choreography.ResultSet);
exports.BicyclingDistanceMatrix = BicyclingDistanceMatrix;


/*
    DrivingDistanceMatrix
    Obtain travel distances and times for a matrix of addresses and/or latitude/longitude coordinates.
*/


var DrivingDistanceMatrix = function(session) {
    /*
        Create a new instance of the DrivingDistanceMatrix Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/DistanceMatrix/DrivingDistanceMatrix"
    DrivingDistanceMatrix.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DrivingDistanceMatrixResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DrivingDistanceMatrixInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DrivingDistanceMatrix
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DrivingDistanceMatrixInputSet = function() {
    DrivingDistanceMatrixInputSet.super_.call(this);
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
        Set the value of the Destinations input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates to which directions will be generated. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Destinations = function(value) {
            this.setInput("Destinations", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Set the language in which to return restults.  A list of supported languages is available here: https://spreadsheets.google.com/pub?key=p9pdwsai2hDMsLkXsoM05KQ&gid=1)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Origins input for this Choreo. ((required, string) Enter the address(es) or geo-coordinates from which distance and time will be computed. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Origins = function(value) {
            this.setInput("Origins", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the DrivingDistanceMatrix Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DrivingDistanceMatrixResultSet = function(resultStream) {
    DrivingDistanceMatrixResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DrivingDistanceMatrix, choreography.Choreography);
util.inherits(DrivingDistanceMatrixInputSet, choreography.InputSet);
util.inherits(DrivingDistanceMatrixResultSet, choreography.ResultSet);
exports.DrivingDistanceMatrix = DrivingDistanceMatrix;


/*
    WalkingDistanceMatrix
    Obtain walking distances and times for a matrix of addresses and/or latitude/longitude coordinates.
*/


var WalkingDistanceMatrix = function(session) {
    /*
        Create a new instance of the WalkingDistanceMatrix Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/DistanceMatrix/WalkingDistanceMatrix"
    WalkingDistanceMatrix.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WalkingDistanceMatrixResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WalkingDistanceMatrixInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WalkingDistanceMatrix
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WalkingDistanceMatrixInputSet = function() {
    WalkingDistanceMatrixInputSet.super_.call(this);
        /*
        Set the value of the Alternatives input for this Choreo. ((optional, string) If set to true, additional routes will be returned.)
        */
        this.set_Alternatives = function(value) {
            this.setInput("Alternatives", value);
        }

        /*
        Set the value of the Destinations input for this Choreo. ((required, string) Enter the address or latitude/longitude coordinates to which directions will be generated. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Destinations = function(value) {
            this.setInput("Destinations", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Set the language in which to return restults.  A list of supported languages is available here: https://spreadsheets.google.com/pub?key=p9pdwsai2hDMsLkXsoM05KQ&gid=1)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Origins input for this Choreo. ((required, string) Enter the address(es) or geo-coordinates from which distance and time will be computed. Multiple destinations can be separated by pipes (|).  For example: Boston, MA|New Haven|40.7160,-74.0037.)
        */
        this.set_Origins = function(value) {
            this.setInput("Origins", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the WalkingDistanceMatrix Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WalkingDistanceMatrixResultSet = function(resultStream) {
    WalkingDistanceMatrixResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WalkingDistanceMatrix, choreography.Choreography);
util.inherits(WalkingDistanceMatrixInputSet, choreography.InputSet);
util.inherits(WalkingDistanceMatrixResultSet, choreography.ResultSet);
exports.WalkingDistanceMatrix = WalkingDistanceMatrix;

