
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteSleepLog
    Delete user's sleep log entry with the given id.
*/


var DeleteSleepLog = function(session) {
    /*
        Create a new instance of the DeleteSleepLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Sleep/DeleteSleepLog"
    DeleteSleepLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteSleepLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteSleepLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteSleepLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteSleepLogInputSet = function() {
    DeleteSleepLogInputSet.super_.call(this);
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
        Set the value of the SleepLogID input for this Choreo. ((required, integer) The id of the sleep log you want to delete.)
        */
        this.set_SleepLogID = function(value) {
            this.setInput("SleepLogID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteSleepLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteSleepLogResultSet = function(resultStream) {
    DeleteSleepLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit. Note that for a successful execution, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteSleepLog, choreography.Choreography);
util.inherits(DeleteSleepLogInputSet, choreography.InputSet);
util.inherits(DeleteSleepLogResultSet, choreography.ResultSet);
exports.DeleteSleepLog = DeleteSleepLog;


/*
    GetSleep
    Gets a summary and list of a user's sleep log entries for a specified date.
*/


var GetSleep = function(session) {
    /*
        Create a new instance of the GetSleep Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Sleep/GetSleep"
    GetSleep.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSleepResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSleepInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSleep
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSleepInputSet = function() {
    GetSleepInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetSleep Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSleepResultSet = function(resultStream) {
    GetSleepResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSleep, choreography.Choreography);
util.inherits(GetSleepInputSet, choreography.InputSet);
util.inherits(GetSleepResultSet, choreography.ResultSet);
exports.GetSleep = GetSleep;


/*
    LogSleep
    Creates log entry for sleep.
*/


var LogSleep = function(session) {
    /*
        Create a new instance of the LogSleep Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Sleep/LogSleep"
    LogSleep.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LogSleepResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LogSleepInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LogSleep
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LogSleepInputSet = function() {
    LogSleepInputSet.super_.call(this);
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
        Set the value of the Date input for this Choreo. ((required, date) The date that corresponds with the log entry you want to create (in the format yyyy-MM-dd).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((required, string) The sleep duration in milliseconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((required, string) The sleep start time; hours and minutes in the format HH:mm.)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LogSleep Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LogSleepResultSet = function(resultStream) {
    LogSleepResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LogSleep, choreography.Choreography);
util.inherits(LogSleepInputSet, choreography.InputSet);
util.inherits(LogSleepResultSet, choreography.ResultSet);
exports.LogSleep = LogSleep;

