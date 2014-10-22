
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteHeartRateLog
    Deletes user's heart rate log entry with the given id.
*/


var DeleteHeartRateLog = function(session) {
    /*
        Create a new instance of the DeleteHeartRateLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Heart/DeleteHeartRateLog"
    DeleteHeartRateLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteHeartRateLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteHeartRateLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteHeartRateLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteHeartRateLogInputSet = function() {
    DeleteHeartRateLogInputSet.super_.call(this);
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
        Set the value of the HeartRateLogID input for this Choreo. ((required, integer) The id of the heart rate log you want to delete.)
        */
        this.set_HeartRateLogID = function(value) {
            this.setInput("HeartRateLogID", value);
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
A ResultSet with methods tailored to the values returned by the DeleteHeartRateLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteHeartRateLogResultSet = function(resultStream) {
    DeleteHeartRateLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteHeartRateLog, choreography.Choreography);
util.inherits(DeleteHeartRateLogInputSet, choreography.InputSet);
util.inherits(DeleteHeartRateLogResultSet, choreography.ResultSet);
exports.DeleteHeartRateLog = DeleteHeartRateLog;


/*
    GetHeartRate
    Gets average values and a list of user's heart rate log entries for a given day.
*/


var GetHeartRate = function(session) {
    /*
        Create a new instance of the GetHeartRate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Heart/GetHeartRate"
    GetHeartRate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetHeartRateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetHeartRateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetHeartRate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetHeartRateInputSet = function() {
    GetHeartRateInputSet.super_.call(this);
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
        Set the value of the Date input for this Choreo. ((required, date) The date that corresponds with the log entry you want to retrieve (in the format yyyy-MM-dd).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
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
A ResultSet with methods tailored to the values returned by the GetHeartRate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetHeartRateResultSet = function(resultStream) {
    GetHeartRateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetHeartRate, choreography.Choreography);
util.inherits(GetHeartRateInputSet, choreography.InputSet);
util.inherits(GetHeartRateResultSet, choreography.ResultSet);
exports.GetHeartRate = GetHeartRate;


/*
    LogHeartRate
    Creates log entry for a heart rate measurement.
*/


var LogHeartRate = function(session) {
    /*
        Create a new instance of the LogHeartRate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Heart/LogHeartRate"
    LogHeartRate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LogHeartRateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LogHeartRateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LogHeartRate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LogHeartRateInputSet = function() {
    LogHeartRateInputSet.super_.call(this);
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
        Set the value of the Date input for this Choreo. ((required, date) The date that corresponds with the log entry (in the format yyyy-MM-dd).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the HeartRate input for this Choreo. ((required, integer) Heart rate measurement.)
        */
        this.set_HeartRate = function(value) {
            this.setInput("HeartRate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Time input for this Choreo. ((optional, string) Time of the measurement; hours and minutes in the format HH:mm.)
        */
        this.set_Time = function(value) {
            this.setInput("Time", value);
        }

        /*
        Set the value of the Tracker input for this Choreo. ((required, string) Heart rate tracker name; predefined or custom tracker name (matches tracker name on the website).)
        */
        this.set_Tracker = function(value) {
            this.setInput("Tracker", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LogHeartRate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LogHeartRateResultSet = function(resultStream) {
    LogHeartRateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LogHeartRate, choreography.Choreography);
util.inherits(LogHeartRateInputSet, choreography.InputSet);
util.inherits(LogHeartRateResultSet, choreography.ResultSet);
exports.LogHeartRate = LogHeartRate;

