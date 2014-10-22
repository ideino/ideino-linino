
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetWeather
    Retrieves the Yahoo! Weather RSS Feed for any specified location.
*/


var GetWeather = function(session) {
    /*
        Create a new instance of the GetWeather Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/Weather/GetWeather"
    GetWeather.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeatherResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeatherInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeather
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeatherInputSet = function() {
    GetWeatherInputSet.super_.call(this);
        /*
        Set the value of the Units input for this Choreo. ((optional, string) The unit of temperature in the response. Acceptable inputs: f for Fahrenheit or c for Celsius. Defaults to f. When c is specified, all units measurements returned are changed to metric.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

        /*
        Set the value of the WOEID input for this Choreo. ((required, integer) Where On Earth ID for the desired location. This unique integer can be found by first running the GetWeatherByCoordinates Choreo.)
        */
        this.set_WOEID = function(value) {
            this.setInput("WOEID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeather Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeatherResultSet = function(resultStream) {
    GetWeatherResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Yahoo! Weather.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeather, choreography.Choreography);
util.inherits(GetWeatherInputSet, choreography.InputSet);
util.inherits(GetWeatherResultSet, choreography.ResultSet);
exports.GetWeather = GetWeather;


/*
    GetWeatherByAddress
    Retrieves the Yahoo Weather RSS Feed for any specified location by address.
*/


var GetWeatherByAddress = function(session) {
    /*
        Create a new instance of the GetWeatherByAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/Weather/GetWeatherByAddress"
    GetWeatherByAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeatherByAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeatherByAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeatherByAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeatherByAddressInputSet = function() {
    GetWeatherByAddressInputSet.super_.call(this);
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
        Set the value of the Units input for this Choreo. ((optional, string) The unit of temperature in the response. Acceptable inputs: f for Fahrenheit or c for Celsius. Defaults to f. When c is specified, all units measurements returned are changed to metric.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeatherByAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeatherByAddressResultSet = function(resultStream) {
    GetWeatherByAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "WOEID" output from this Choreo execution. ((integer) The unique Where On Earth ID of the location.)
        */
        this.get_WOEID = function() {
            return this.getResult("WOEID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Yahoo Weather.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeatherByAddress, choreography.Choreography);
util.inherits(GetWeatherByAddressInputSet, choreography.InputSet);
util.inherits(GetWeatherByAddressResultSet, choreography.ResultSet);
exports.GetWeatherByAddress = GetWeatherByAddress;


/*
    GetWeatherByCoordinates
    Retrieves the Yahoo Weather RSS Feed for any specified location by geo-coordinates.
*/


var GetWeatherByCoordinates = function(session) {
    /*
        Create a new instance of the GetWeatherByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/Weather/GetWeatherByCoordinates"
    GetWeatherByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeatherByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeatherByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeatherByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeatherByCoordinatesInputSet = function() {
    GetWeatherByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) The App ID provided by Yahoo!)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate of the location you want to search.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate of the location you want to search.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) The unit of temperature in the response. Acceptable inputs: f for Fahrenheit or c for Celsius. Defaults to f. When c is specified, all units measurements returned are changed to metric.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeatherByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeatherByCoordinatesResultSet = function(resultStream) {
    GetWeatherByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "WOEID" output from this Choreo execution. ((integer) The unique Where On Earth ID of the location.)
        */
        this.get_WOEID = function() {
            return this.getResult("WOEID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Yahoo Weather.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeatherByCoordinates, choreography.Choreography);
util.inherits(GetWeatherByCoordinatesInputSet, choreography.InputSet);
util.inherits(GetWeatherByCoordinatesResultSet, choreography.ResultSet);
exports.GetWeatherByCoordinates = GetWeatherByCoordinates;

