
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteBloodPressureLog
    Deletes user's blood pressure log entry with the given id.
*/


var DeleteBloodPressureLog = function(session) {
    /*
        Create a new instance of the DeleteBloodPressureLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/BloodPressure/DeleteBloodPressureLog"
    DeleteBloodPressureLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBloodPressureLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBloodPressureLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBloodPressureLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBloodPressureLogInputSet = function() {
    DeleteBloodPressureLogInputSet.super_.call(this);
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
        Set the value of the BloodPressureLogID input for this Choreo. ((required, integer) The id of the blood pressure log you want to delete.)
        */
        this.set_BloodPressureLogID = function(value) {
            this.setInput("BloodPressureLogID", value);
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
A ResultSet with methods tailored to the values returned by the DeleteBloodPressureLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBloodPressureLogResultSet = function(resultStream) {
    DeleteBloodPressureLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBloodPressureLog, choreography.Choreography);
util.inherits(DeleteBloodPressureLogInputSet, choreography.InputSet);
util.inherits(DeleteBloodPressureLogResultSet, choreography.ResultSet);
exports.DeleteBloodPressureLog = DeleteBloodPressureLog;


/*
    GetBloodPressure
    Get an average value and a list of user's blood pressure log entries for a given day.
*/


var GetBloodPressure = function(session) {
    /*
        Create a new instance of the GetBloodPressure Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/BloodPressure/GetBloodPressure"
    GetBloodPressure.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBloodPressureResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBloodPressureInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBloodPressure
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBloodPressureInputSet = function() {
    GetBloodPressureInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetBloodPressure Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBloodPressureResultSet = function(resultStream) {
    GetBloodPressureResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBloodPressure, choreography.Choreography);
util.inherits(GetBloodPressureInputSet, choreography.InputSet);
util.inherits(GetBloodPressureResultSet, choreography.ResultSet);
exports.GetBloodPressure = GetBloodPressure;


/*
    LogBloodPressure
    Creates log entry for a blood pressure measurement.
*/


var LogBloodPressure = function(session) {
    /*
        Create a new instance of the LogBloodPressure Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/BloodPressure/LogBloodPressure"
    LogBloodPressure.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LogBloodPressureResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LogBloodPressureInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LogBloodPressure
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LogBloodPressureInputSet = function() {
    LogBloodPressureInputSet.super_.call(this);
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
        Set the value of the Diastolic input for this Choreo. ((required, integer) The diastolic measurement.)
        */
        this.set_Diastolic = function(value) {
            this.setInput("Diastolic", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Systolic input for this Choreo. ((required, integer) The systolic measurement.)
        */
        this.set_Systolic = function(value) {
            this.setInput("Systolic", value);
        }

        /*
        Set the value of the Time input for this Choreo. ((optional, string) Time of the measurement; hours and minutes in the format HH:mm.)
        */
        this.set_Time = function(value) {
            this.setInput("Time", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LogBloodPressure Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LogBloodPressureResultSet = function(resultStream) {
    LogBloodPressureResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LogBloodPressure, choreography.Choreography);
util.inherits(LogBloodPressureInputSet, choreography.InputSet);
util.inherits(LogBloodPressureResultSet, choreography.ResultSet);
exports.LogBloodPressure = LogBloodPressure;

