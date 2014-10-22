
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ByAddress
    Retrieves weather and UV index data for a given Geo point using the Yahoo Weather and EnviroFacts APIs.
*/


var ByAddress = function(session) {
    /*
        Create a new instance of the ByAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GetWeather/ByAddress"
    ByAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByAddressInputSet = function() {
    ByAddressInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((optional, json) A JSON dictionary containing a Yahoo App ID. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((required, string) The street address of the location to get weather for.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByAddressResultSet = function(resultStream) {
    ByAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) Contains combined weather data from Yahoo Weather and EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByAddress, choreography.Choreography);
util.inherits(ByAddressInputSet, choreography.InputSet);
util.inherits(ByAddressResultSet, choreography.ResultSet);
exports.ByAddress = ByAddress;


/*
    ByCoordinates
    Retrieves weather and UV index data for a given Geo point using the Yahoo Weather and EnviroFacts APIs.
*/


var ByCoordinates = function(session) {
    /*
        Create a new instance of the ByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GetWeather/ByCoordinates"
    ByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByCoordinatesInputSet = function() {
    ByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((optional, json) A JSON dictionary containing a Yahoo App ID. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate to use when looking up weather information.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate to use when looking up weather information.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByCoordinatesResultSet = function(resultStream) {
    ByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) Contains combined weather data from Yahoo Weather and EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByCoordinates, choreography.Choreography);
util.inherits(ByCoordinatesInputSet, choreography.InputSet);
util.inherits(ByCoordinatesResultSet, choreography.ResultSet);
exports.ByCoordinates = ByCoordinates;


/*
    ByFoursquare
    Retrieves weather and UV index data based on coordinates returned from a Foursquare recent check-in.
*/


var ByFoursquare = function(session) {
    /*
        Create a new instance of the ByFoursquare Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GetWeather/ByFoursquare"
    ByFoursquare.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByFoursquareResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByFoursquareInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByFoursquare
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByFoursquareInputSet = function() {
    ByFoursquareInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((required, json) A JSON dictionary containing your Foursquare and Yahoo credentials. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Shout input for this Choreo. ((optional, string) A message about your check-in. The maximum length of this field is 140 characters.)
        */
        this.set_Shout = function(value) {
            this.setInput("Shout", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((optional, string) The venue where the user is checking in. Required if creating a Foursquare checkin.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByFoursquare Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByFoursquareResultSet = function(resultStream) {
    ByFoursquareResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) Contains weather information based on the coordinates returned from the Foursquare checkin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByFoursquare, choreography.Choreography);
util.inherits(ByFoursquareInputSet, choreography.InputSet);
util.inherits(ByFoursquareResultSet, choreography.ResultSet);
exports.ByFoursquare = ByFoursquare;

