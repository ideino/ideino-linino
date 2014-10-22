
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetActivityMetrics
    Retrieves activity metrics for the specified user.
*/


var GetActivityMetrics = function(session) {
    /*
        Create a new instance of the GetActivityMetrics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Measure/GetActivityMetrics"
    GetActivityMetrics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetActivityMetricsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetActivityMetricsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetActivityMetrics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetActivityMetricsInputSet = function() {
    GetActivityMetricsInputSet.super_.call(this);
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
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, date) The date for the log in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to retrieve activity metrics for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetActivityMetrics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetActivityMetricsResultSet = function(resultStream) {
    GetActivityMetricsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetActivityMetrics, choreography.Choreography);
util.inherits(GetActivityMetricsInputSet, choreography.InputSet);
util.inherits(GetActivityMetricsResultSet, choreography.ResultSet);
exports.GetActivityMetrics = GetActivityMetrics;


/*
    GetBodyMetrics
    Retrieves body metrics for the specified user.
*/


var GetBodyMetrics = function(session) {
    /*
        Create a new instance of the GetBodyMetrics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Measure/GetBodyMetrics"
    GetBodyMetrics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBodyMetricsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBodyMetricsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBodyMetrics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBodyMetricsInputSet = function() {
    GetBodyMetricsInputSet.super_.call(this);
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
        Set the value of the Category input for this Choreo. ((optional, integer) Set to 2 to retrieve objectives or to 1 to retrieve actual measurements.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the DeviceType input for this Choreo. ((optional, integer) Retrieves data for a particular device type. Specifying 1 will retrieve all body scale related measures and 0 will retrieve all user personal data entered at user creation time.)
        */
        this.set_DeviceType = function(value) {
            this.setInput("DeviceType", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Retrieves results dated before the specified EPOCH formatted date.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the LastUpdated input for this Choreo. ((optional, date) Retrieves results added or modified since the specified EPOCH formatted date.)
        */
        this.set_LastUpdated = function(value) {
            this.setInput("LastUpdated", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Limits the number of measure groups returned in the result.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MeasurementType input for this Choreo. ((optional, integer) Filters by the measurement type. Set to 1 to filter by weight or 4 to filter by height.)
        */
        this.set_MeasurementType = function(value) {
            this.setInput("MeasurementType", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used in combination with the Limit parameter to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Retrieves results dated after the specified EPOCH formatted date.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to retrieve body metrics for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBodyMetrics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBodyMetricsResultSet = function(resultStream) {
    GetBodyMetricsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBodyMetrics, choreography.Choreography);
util.inherits(GetBodyMetricsInputSet, choreography.InputSet);
util.inherits(GetBodyMetricsResultSet, choreography.ResultSet);
exports.GetBodyMetrics = GetBodyMetrics;

