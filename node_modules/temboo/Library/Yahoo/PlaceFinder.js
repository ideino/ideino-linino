
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FindByAddress
    Retrieves complete geocoding information for a location by specifying an address or partial address.
*/


var FindByAddress = function(session) {
    /*
        Create a new instance of the FindByAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/PlaceFinder/FindByAddress"
    FindByAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByAddressInputSet = function() {
    FindByAddressInputSet.super_.call(this);
        /*
        Set the value of the Address input for this Choreo. ((required, string) The address to be searched.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((optional, string) The App ID provided by Yahoo!)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the GeocodeFlags input for this Choreo. ((optional, string) Affects how geocoding is performed for the request. Valid value are: A, C, L, Q, or R. See documentation for more details on this parameter.)
        */
        this.set_GeocodeFlags = function(value) {
            this.setInput("GeocodeFlags", value);
        }

        /*
        Set the value of the ResponseFlags input for this Choreo. ((optional, string) Determines which data elements are returned in the response. Valid values are: B, C, D, E, G, I, J, Q, R, T, U, W, X. See documentation for details on this parameter.)
        */
        this.set_ResponseFlags = function(value) {
            this.setInput("ResponseFlags", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) You can specify json to get this output format in JSON. Otherwise, the default output will be in XML.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByAddressResultSet = function(resultStream) {
    FindByAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yahoo! PlaceFinder.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByAddress, choreography.Choreography);
util.inherits(FindByAddressInputSet, choreography.InputSet);
util.inherits(FindByAddressResultSet, choreography.ResultSet);
exports.FindByAddress = FindByAddress;


/*
    FindByCoordinates
    Retrieves complete location information from a specified pair of latitude and longitude coordinates.
*/


var FindByCoordinates = function(session) {
    /*
        Create a new instance of the FindByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/PlaceFinder/FindByCoordinates"
    FindByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByCoordinatesInputSet = function() {
    FindByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) The App ID provided by Yahoo!)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the GeocodeFlags input for this Choreo. ((optional, string) Affects how geocoding is performed for the request. Valid value are: A, C, L, Q, or R. See documentation for more details on this parameter.)
        */
        this.set_GeocodeFlags = function(value) {
            this.setInput("GeocodeFlags", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, string) The latitude coordinate of the location you want to find.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, string) The longitude coordinate of the location you want to find.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFlags input for this Choreo. ((optional, string) Determines which data elements are returned in the response. Valid values are: B, C, D, E, G, I, J, Q, R, T, U, W, X. See documentation for details on this parameter.)
        */
        this.set_ResponseFlags = function(value) {
            this.setInput("ResponseFlags", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) You can specify json to get this output format in JSON. Otherwise, the default output will be in XML.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByCoordinatesResultSet = function(resultStream) {
    FindByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yahoo! PlaceFinder.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByCoordinates, choreography.Choreography);
util.inherits(FindByCoordinatesInputSet, choreography.InputSet);
util.inherits(FindByCoordinatesResultSet, choreography.ResultSet);
exports.FindByCoordinates = FindByCoordinates;

