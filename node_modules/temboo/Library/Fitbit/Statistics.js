
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetActivityStats
    Gets user's activity statistics.
*/


var GetActivityStats = function(session) {
    /*
        Create a new instance of the GetActivityStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Statistics/GetActivityStats"
    GetActivityStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetActivityStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetActivityStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetActivityStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetActivityStatsInputSet = function() {
    GetActivityStatsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetActivityStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetActivityStatsResultSet = function(resultStream) {
    GetActivityStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetActivityStats, choreography.Choreography);
util.inherits(GetActivityStatsInputSet, choreography.InputSet);
util.inherits(GetActivityStatsResultSet, choreography.ResultSet);
exports.GetActivityStats = GetActivityStats;


/*
    GetTimeSeriesByDateRange
    Gets time series data for a given resource based on a date range you specify.
*/


var GetTimeSeriesByDateRange = function(session) {
    /*
        Create a new instance of the GetTimeSeriesByDateRange Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Statistics/GetTimeSeriesByDateRange"
    GetTimeSeriesByDateRange.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTimeSeriesByDateRangeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTimeSeriesByDateRangeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTimeSeriesByDateRange
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTimeSeriesByDateRangeInputSet = function() {
    GetTimeSeriesByDateRangeInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) The end date of the date range for the data you want to retrieve (in the format yyyy-MM-dd). You can also specify the value 'today'.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ResourcePath input for this Choreo. ((required, string) The resource path that you want to access (for example: activities/log/distance). See Choreo documentation for a full list of resource paths.)
        */
        this.set_ResourcePath = function(value) {
            this.setInput("ResourcePath", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) The start date of the date range for the data you want to retrieve (in the format yyyy-MM-dd). You can also specify the value 'today'.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTimeSeriesByDateRange Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTimeSeriesByDateRangeResultSet = function(resultStream) {
    GetTimeSeriesByDateRangeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTimeSeriesByDateRange, choreography.Choreography);
util.inherits(GetTimeSeriesByDateRangeInputSet, choreography.InputSet);
util.inherits(GetTimeSeriesByDateRangeResultSet, choreography.ResultSet);
exports.GetTimeSeriesByDateRange = GetTimeSeriesByDateRange;


/*
    GetTimeSeriesByPeriod
    Gets time series data for a given resource based on a date range period you specify.
*/


var GetTimeSeriesByPeriod = function(session) {
    /*
        Create a new instance of the GetTimeSeriesByPeriod Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Statistics/GetTimeSeriesByPeriod"
    GetTimeSeriesByPeriod.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTimeSeriesByPeriodResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTimeSeriesByPeriodInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTimeSeriesByPeriod
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTimeSeriesByPeriodInputSet = function() {
    GetTimeSeriesByPeriodInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) The end date of the period for the data you want to retrieve (in the format yyyy-MM-dd). You can also specify the value 'today'.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Period input for this Choreo. ((optional, string) The date range period. Valid values are: 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, max. Defaults to 'max'.)
        */
        this.set_Period = function(value) {
            this.setInput("Period", value);
        }

        /*
        Set the value of the ResourcePath input for this Choreo. ((required, string) The resource path that you want to access (for example: activities/log/distance). See Choreo documentation for a full list of resource paths.)
        */
        this.set_ResourcePath = function(value) {
            this.setInput("ResourcePath", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTimeSeriesByPeriod Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTimeSeriesByPeriodResultSet = function(resultStream) {
    GetTimeSeriesByPeriodResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTimeSeriesByPeriod, choreography.Choreography);
util.inherits(GetTimeSeriesByPeriodInputSet, choreography.InputSet);
util.inherits(GetTimeSeriesByPeriodResultSet, choreography.ResultSet);
exports.GetTimeSeriesByPeriod = GetTimeSeriesByPeriod;

