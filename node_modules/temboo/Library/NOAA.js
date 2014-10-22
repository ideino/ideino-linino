
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListCityCoordinatesUnsummarized
    Retrieve unsummarized latitude and longitude data for a specified list of cities.
*/


var ListCityCoordinatesUnsummarized = function(session) {
    /*
        Create a new instance of the ListCityCoordinatesUnsummarized Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/ListCityCoordinatesUnsummarized"
    ListCityCoordinatesUnsummarized.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCityCoordinatesUnsummarizedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCityCoordinatesUnsummarizedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCityCoordinatesUnsummarized
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCityCoordinatesUnsummarizedInputSet = function() {
    ListCityCoordinatesUnsummarizedInputSet.super_.call(this);
        /*
        Set the value of the CitiesLevel input for this Choreo. ((integer) Enter a city grouping number to retrieve its latitude and longitude coordinates. For example: enter 1, to obtain information for primary U.S. cities.)
        */
        this.set_CitiesLevel = function(value) {
            this.setInput("CitiesLevel", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCityCoordinatesUnsummarized Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCityCoordinatesUnsummarizedResultSet = function(resultStream) {
    ListCityCoordinatesUnsummarizedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCityCoordinatesUnsummarized, choreography.Choreography);
util.inherits(ListCityCoordinatesUnsummarizedInputSet, choreography.InputSet);
util.inherits(ListCityCoordinatesUnsummarizedResultSet, choreography.ResultSet);
exports.ListCityCoordinatesUnsummarized = ListCityCoordinatesUnsummarized;


/*
    ListCoordinatesForZipcode
    Retrieve latitude and longitude data for a specified zipcode (in 50 U.S. States and Puerto Rico).
*/


var ListCoordinatesForZipcode = function(session) {
    /*
        Create a new instance of the ListCoordinatesForZipcode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/ListCoordinatesForZipcode"
    ListCoordinatesForZipcode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCoordinatesForZipcodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCoordinatesForZipcodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCoordinatesForZipcode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCoordinatesForZipcodeInputSet = function() {
    ListCoordinatesForZipcodeInputSet.super_.call(this);
        /*
        Set the value of the ListZipCodeList input for this Choreo. ((integer) Enter the zipcode for which latitude and longitude coordinates will be retrieved.)
        */
        this.set_ListZipCodeList = function(value) {
            this.setInput("ListZipCodeList", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCoordinatesForZipcode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCoordinatesForZipcodeResultSet = function(resultStream) {
    ListCoordinatesForZipcodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCoordinatesForZipcode, choreography.Choreography);
util.inherits(ListCoordinatesForZipcodeInputSet, choreography.InputSet);
util.inherits(ListCoordinatesForZipcodeResultSet, choreography.ResultSet);
exports.ListCoordinatesForZipcode = ListCoordinatesForZipcode;


/*
    WeatherByCenterPointSubgridSummarized
    Retrieve weather information for a rectangle defined by a center point and distances in the latitudinal and longitudinal directions.
*/


var WeatherByCenterPointSubgridSummarized = function(session) {
    /*
        Create a new instance of the WeatherByCenterPointSubgridSummarized Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/WeatherByCenterPointSubgridSummarized"
    WeatherByCenterPointSubgridSummarized.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WeatherByCenterPointSubgridSummarizedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WeatherByCenterPointSubgridSummarizedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WeatherByCenterPointSubgridSummarized
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WeatherByCenterPointSubgridSummarizedInputSet = function() {
    WeatherByCenterPointSubgridSummarizedInputSet.super_.call(this);
        /*
        Set the value of the CenterPointLatitude input for this Choreo. ((required, decimal) Enter the latitude specifying the rectangle or the grid center that defines the area being queried. North latitude is positive.)
        */
        this.set_CenterPointLatitude = function(value) {
            this.setInput("CenterPointLatitude", value);
        }

        /*
        Set the value of the CenterPointLongitude input for this Choreo. ((required, decimal) Enter the longitute specifying the rectangle or the grid center that defines the area being queried. West longitude is negative.)
        */
        this.set_CenterPointLongitude = function(value) {
            this.setInput("CenterPointLongitude", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((required, string) Specify a timespan for which NDFD data will be summarized. Enter: 24 hourly, for a 24 hour summary, or: 12 hourly, for a 12 hour weather summary.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the LatitudeDistance input for this Choreo. ((required, decimal) Specify the distance from the center point in the latitudinal direction to the rectangle's East/West oriented sides.)
        */
        this.set_LatitudeDistance = function(value) {
            this.setInput("LatitudeDistance", value);
        }

        /*
        Set the value of the LongitudeDistance input for this Choreo. ((required, decimal) Specify the distance from the center point in the longitudinal direction to the rectangle's North/South oriented side.)
        */
        this.set_LongitudeDistance = function(value) {
            this.setInput("LongitudeDistance", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((optional, integer) Specify the number of days to retieve data for. If null, data from the earliest date in the dabase is returned.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the SquareResolution input for this Choreo. ((optional, decimal) Enter desired data resolution in kilometers.  Default is 5km.)
        */
        this.set_SquareResolution = function(value) {
            this.setInput("SquareResolution", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) Enter the start time for retrieval of NDWD data in following format: 2004-04-27 If null, the earliest date in the database is returned.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Unit input for this Choreo. ((optional, string) Enter the unit format the data will be displayed in. Default is: e, for Standard English (U.S. Standard).  Or: m, for Metric (SI Units).)
        */
        this.set_Unit = function(value) {
            this.setInput("Unit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WeatherByCenterPointSubgridSummarized Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WeatherByCenterPointSubgridSummarizedResultSet = function(resultStream) {
    WeatherByCenterPointSubgridSummarizedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WeatherByCenterPointSubgridSummarized, choreography.Choreography);
util.inherits(WeatherByCenterPointSubgridSummarizedInputSet, choreography.InputSet);
util.inherits(WeatherByCenterPointSubgridSummarizedResultSet, choreography.ResultSet);
exports.WeatherByCenterPointSubgridSummarized = WeatherByCenterPointSubgridSummarized;


/*
    WeatherByZipcode
    Retrieve DWML-encoded NDFD data for a specified zipcode (in 50 U.S. States and Puerto Rico).
*/


var WeatherByZipcode = function(session) {
    /*
        Create a new instance of the WeatherByZipcode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/WeatherByZipcode"
    WeatherByZipcode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WeatherByZipcodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WeatherByZipcodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WeatherByZipcode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WeatherByZipcodeInputSet = function() {
    WeatherByZipcodeInputSet.super_.call(this);
        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Enter today's date, or some future date in UTC format. Format: 2004-04-27T12:00. Defaults to NOW if not provided.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the NDFDParameterName input for this Choreo. ((optional, string) Enter an additional weather parameter in the following format: phail=phail. Use only if Product is set to: glance.)
        */
        this.set_NDFDParameterName = function(value) {
            this.setInput("NDFDParameterName", value);
        }

        /*
        Set the value of the Product input for this Choreo. ((required, string) Enter one of two parameters: time-series (to return all data between the Begin and End time parameters); glance for a subset of 5 often used parameters)
        */
        this.set_Product = function(value) {
            this.setInput("Product", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Enter the start time for retrieval of NDWD information in UTC format. If null, the earliest date in the database is returned.  Format: 2004-04-27T12:00.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Unit input for this Choreo. ((optional, string) Enter the unit format the data will be displayed in. Default is: e, for Standard English (U.S. Standard).  Or: m, for Metric (SI Units).)
        */
        this.set_Unit = function(value) {
            this.setInput("Unit", value);
        }

        /*
        Set the value of the ZipCodeList input for this Choreo. ((required, integer) Enter the zipcode for which NDFD weather information will be retrieved.)
        */
        this.set_ZipCodeList = function(value) {
            this.setInput("ZipCodeList", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WeatherByZipcode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WeatherByZipcodeResultSet = function(resultStream) {
    WeatherByZipcodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WeatherByZipcode, choreography.Choreography);
util.inherits(WeatherByZipcodeInputSet, choreography.InputSet);
util.inherits(WeatherByZipcodeResultSet, choreography.ResultSet);
exports.WeatherByZipcode = WeatherByZipcode;


/*
    WeatherForPointsOnLineSummarized
    Retrieve weather information for all points on a line defined by a set of latitude and longitude coordinates.
*/


var WeatherForPointsOnLineSummarized = function(session) {
    /*
        Create a new instance of the WeatherForPointsOnLineSummarized Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/WeatherForPointsOnLineSummarized"
    WeatherForPointsOnLineSummarized.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WeatherForPointsOnLineSummarizedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WeatherForPointsOnLineSummarizedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WeatherForPointsOnLineSummarized
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WeatherForPointsOnLineSummarizedInputSet = function() {
    WeatherForPointsOnLineSummarizedInputSet.super_.call(this);
        /*
        Set the value of the Endpoint1Latitude input for this Choreo. ((required, integer) Enter the latitude of the first endpoint of the line for which weather data is requested. North latitude is positive.)
        */
        this.set_Endpoint1Latitude = function(value) {
            this.setInput("Endpoint1Latitude", value);
        }

        /*
        Set the value of the Endpoint1Longitude input for this Choreo. ((required, integer) Enter the longitude of the first endpoint of the line for which weather data is requested. West longitude is negative.)
        */
        this.set_Endpoint1Longitude = function(value) {
            this.setInput("Endpoint1Longitude", value);
        }

        /*
        Set the value of the Endpoint2Latitude input for this Choreo. ((required, integer) Enter the latitude of the second endpoint of the line for which weather data is requested. North latitude is positive.)
        */
        this.set_Endpoint2Latitude = function(value) {
            this.setInput("Endpoint2Latitude", value);
        }

        /*
        Set the value of the Endpoint2Longitude input for this Choreo. ((required, integer) Enter the longitude of the second endpoint of the line for which weather data is requested. West longitude is negative.)
        */
        this.set_Endpoint2Longitude = function(value) {
            this.setInput("Endpoint2Longitude", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((required, string) Specify a timespan for which NDFD data will be summarized. Enter: 24 hourly, for a 24 hour summary, or: 12 hourly, for a 12 hour weather summary.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((optional, integer) Specify the number of days to retieve data for. If null, data from the earliest date in the dabase is returned.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Enter the start time for retrieval of NDWD information in UTC format. If null, the earliest date in the database is returned. Format: 2004-04-27T12:00.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Unit input for this Choreo. ((optional, string) Enter the unit format the data will be displayed in. Default is: e, for Standard English (U.S. Standard).  Or: m, for Metric (SI Units).)
        */
        this.set_Unit = function(value) {
            this.setInput("Unit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WeatherForPointsOnLineSummarized Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WeatherForPointsOnLineSummarizedResultSet = function(resultStream) {
    WeatherForPointsOnLineSummarizedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WeatherForPointsOnLineSummarized, choreography.Choreography);
util.inherits(WeatherForPointsOnLineSummarizedInputSet, choreography.InputSet);
util.inherits(WeatherForPointsOnLineSummarizedResultSet, choreography.ResultSet);
exports.WeatherForPointsOnLineSummarized = WeatherForPointsOnLineSummarized;


/*
    WeatherForSinglePointSummarized
    Retrieve weather information for a single point defined by latitude and longitude coordinates.
*/


var WeatherForSinglePointSummarized = function(session) {
    /*
        Create a new instance of the WeatherForSinglePointSummarized Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/WeatherForSinglePointSummarized"
    WeatherForSinglePointSummarized.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WeatherForSinglePointSummarizedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WeatherForSinglePointSummarizedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WeatherForSinglePointSummarized
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WeatherForSinglePointSummarizedInputSet = function() {
    WeatherForSinglePointSummarizedInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((required, string) Specify a timespan for which NDFD data will be summarized. Enter: 24 hourly, for a 24 hour summary, or: 12 hourly, for a 12 hour weather summary.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Enter the latitude coordinates of the point for which weather data is requested. North latitude is positive.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Enter the longitude coordinate of the point for which weather data is requested. West longitude is negative.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((optional, integer) Specify the number of days to retieve data for. If null, data from the earliest date in the dabase is returned.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Enter the start time for retrieval of NDWD information in UTC format. If null, the earliest date in the database is returned. Format: 2004-04-27T12:00.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Unit input for this Choreo. ((optional, string) Enter the unit format the data will be displayed in. Default is: e, for Standard English (U.S. Standard).  Or: m, for Metric (SI Units).)
        */
        this.set_Unit = function(value) {
            this.setInput("Unit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WeatherForSinglePointSummarized Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WeatherForSinglePointSummarizedResultSet = function(resultStream) {
    WeatherForSinglePointSummarizedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WeatherForSinglePointSummarized, choreography.Choreography);
util.inherits(WeatherForSinglePointSummarizedInputSet, choreography.InputSet);
util.inherits(WeatherForSinglePointSummarizedResultSet, choreography.ResultSet);
exports.WeatherForSinglePointSummarized = WeatherForSinglePointSummarized;


/*
    WeatherForSinglePointUnsummarized
    Retrieve unsummarized weather information for a single point defined by latitude and longitude coordinates.
*/


var WeatherForSinglePointUnsummarized = function(session) {
    /*
        Create a new instance of the WeatherForSinglePointUnsummarized Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NOAA/WeatherForSinglePointUnsummarized"
    WeatherForSinglePointUnsummarized.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WeatherForSinglePointUnsummarizedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WeatherForSinglePointUnsummarizedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WeatherForSinglePointUnsummarized
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WeatherForSinglePointUnsummarizedInputSet = function() {
    WeatherForSinglePointUnsummarizedInputSet.super_.call(this);
        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Enter the end time for retrieval of NDWD information in UTC format. If null, the last available time in the database is returned. Format: 2004-04-27T12:00.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Enter the latitude coordinate of the point for which weather data is requested. North latitude is positive.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Enter the longitude coordinate of the point for which weather data is requested. West longitude is negative.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Product input for this Choreo. ((required, string) Enter one of two parameters: time-series (to return all data between the Begin and End time parameters); glance for a subset of 5 often used parameters)
        */
        this.set_Product = function(value) {
            this.setInput("Product", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Enter the start time for retrieval of NDWD information in UTC format. If null, the earliest time in the database is returned. Format: 2004-04-27T12:00.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Unit input for this Choreo. ((optional, string) Enter the unit format the data will be displayed in. Default is: e, for Standard English (U.S. Standard).  Or: m, for Metric (SI Units).)
        */
        this.set_Unit = function(value) {
            this.setInput("Unit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WeatherForSinglePointUnsummarized Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WeatherForSinglePointUnsummarizedResultSet = function(resultStream) {
    WeatherForSinglePointUnsummarizedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Response from NDFD servers.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(WeatherForSinglePointUnsummarized, choreography.Choreography);
util.inherits(WeatherForSinglePointUnsummarizedInputSet, choreography.InputSet);
util.inherits(WeatherForSinglePointUnsummarizedResultSet, choreography.ResultSet);
exports.WeatherForSinglePointUnsummarized = WeatherForSinglePointUnsummarized;

