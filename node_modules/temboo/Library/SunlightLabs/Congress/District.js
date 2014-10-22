
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetDistrictsByCoordinates
    Returns the district that a set of latitude/longitude coordinates falls within.
*/


var GetDistrictsByCoordinates = function(session) {
    /*
        Create a new instance of the GetDistrictsByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/District/GetDistrictsByCoordinates"
    GetDistrictsByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDistrictsByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDistrictsByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDistrictsByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDistrictsByCoordinatesInputSet = function() {
    GetDistrictsByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate of the area that a legislator represents.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate of the area that a legislator represents.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDistrictsByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDistrictsByCoordinatesResultSet = function(resultStream) {
    GetDistrictsByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDistrictsByCoordinates, choreography.Choreography);
util.inherits(GetDistrictsByCoordinatesInputSet, choreography.InputSet);
util.inherits(GetDistrictsByCoordinatesResultSet, choreography.ResultSet);
exports.GetDistrictsByCoordinates = GetDistrictsByCoordinates;


/*
    GetDistrictsByZip
    Returns all districts that overlap the area for a given zip code.
*/


var GetDistrictsByZip = function(session) {
    /*
        Create a new instance of the GetDistrictsByZip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/District/GetDistrictsByZip"
    GetDistrictsByZip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDistrictsByZipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDistrictsByZipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDistrictsByZip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDistrictsByZipInputSet = function() {
    GetDistrictsByZipInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, string) The zip code for the districts to return.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDistrictsByZip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDistrictsByZipResultSet = function(resultStream) {
    GetDistrictsByZipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDistrictsByZip, choreography.Choreography);
util.inherits(GetDistrictsByZipInputSet, choreography.InputSet);
util.inherits(GetDistrictsByZipResultSet, choreography.ResultSet);
exports.GetDistrictsByZip = GetDistrictsByZip;

