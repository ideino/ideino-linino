
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GeocodeByAddress
    Converts a human-readable address into geographic coordinates.
*/


var GeocodeByAddress = function(session) {
    /*
        Create a new instance of the GeocodeByAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Geocoding/GeocodeByAddress"
    GeocodeByAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GeocodeByAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GeocodeByAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GeocodeByAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GeocodeByAddressInputSet = function() {
    GeocodeByAddressInputSet.super_.call(this);
        /*
        Set the value of the Address input for this Choreo. ((required, string) The address that you want to geocode.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the Bounds input for this Choreo. ((optional, string) The bounding box of the viewport within which to bias geocode results more prominently.)
        */
        this.set_Bounds = function(value) {
            this.setInput("Bounds", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language in which to return results. Defaults to 'en' (English).)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) The region code, specified as a ccTLD ("top-level domain") two-character value. Defaults to 'us' (United States).)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the geocoding request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GeocodeByAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GeocodeByAddressResultSet = function(resultStream) {
    GeocodeByAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Longitude" output from this Choreo execution. ((decimal) The longitude coordinate associated with the address provided.)
        */
        this.get_Longitude = function() {
            return this.getResult("Longitude");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Latitude" output from this Choreo execution. ((decimal) The latitude coordinate associated with the address provided.)
        */
        this.get_Latitude = function() {
            return this.getResult("Latitude");
        }
}

util.inherits(GeocodeByAddress, choreography.Choreography);
util.inherits(GeocodeByAddressInputSet, choreography.InputSet);
util.inherits(GeocodeByAddressResultSet, choreography.ResultSet);
exports.GeocodeByAddress = GeocodeByAddress;


/*
    GeocodeByCoordinates
    Converts latitude and longitude coordinates into a human-readable address.
*/


var GeocodeByCoordinates = function(session) {
    /*
        Create a new instance of the GeocodeByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Geocoding/GeocodeByCoordinates"
    GeocodeByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GeocodeByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GeocodeByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GeocodeByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GeocodeByCoordinatesInputSet = function() {
    GeocodeByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the Bounds input for this Choreo. ((optional, string) The bounding box of the viewport within which to bias geocode results more prominently.)
        */
        this.set_Bounds = function(value) {
            this.setInput("Bounds", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language in which to return results. Defaults to 'en' (English).)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude value for which you wish to obtain the closest, human-readable address.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude value for which you wish to obtain the closest, human-readable address.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) The region code, specified as a ccTLD ("top-level domain") two-character value. Defaults to 'us' (United States).)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the geocoding request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GeocodeByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GeocodeByCoordinatesResultSet = function(resultStream) {
    GeocodeByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GeocodeByCoordinates, choreography.Choreography);
util.inherits(GeocodeByCoordinatesInputSet, choreography.InputSet);
util.inherits(GeocodeByCoordinatesResultSet, choreography.ResultSet);
exports.GeocodeByCoordinates = GeocodeByCoordinates;

