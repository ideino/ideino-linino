
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetLinkHistory
    Returns entries from a user's link history in reverse chronological order.
*/


var GetLinkHistory = function(session) {
    /*
        Create a new instance of the GetLinkHistory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/UserInfo/GetLinkHistory"
    GetLinkHistory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLinkHistoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLinkHistoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLinkHistory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLinkHistoryInputSet = function() {
    GetLinkHistoryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Archived input for this Choreo. ((optional, string) Accepted values are: on|off|both.  Whether to include or exclude archived history entries. (on = return only archived history entries). Defaults to "off".)
        */
        this.set_Archived = function(value) {
            this.setInput("Archived", value);
        }

        /*
        Set the value of the CreatedAfter input for this Choreo. ((optional, date) An epoch timestamp representing a date to filter with.)
        */
        this.set_CreatedAfter = function(value) {
            this.setInput("CreatedAfter", value);
        }

        /*
        Set the value of the CreatedBefore input for this Choreo. ((optional, date) An epoch timestamp representing a date to filter with.)
        */
        this.set_CreatedBefore = function(value) {
            this.setInput("CreatedBefore", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) An integer in the range of 1 to 100, specifying the max number of results to return. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The bitly link to return metadata for (when spcified, overrides all other options).)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ModifiedAfter input for this Choreo. ((optional, date) An epoch timestamp representing a date to filter with.)
        */
        this.set_ModifiedAfter = function(value) {
            this.setInput("ModifiedAfter", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, string) An integer specifying the numbered result at which to start (used for pagination).)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Private input for this Choreo. ((optional, string) Accepted values are: on|off|both.  Whether to include or exclude archived history entries. (on = return only archived history entries). Defaults to "both".)
        */
        this.set_Private = function(value) {
            this.setInput("Private", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the User input for this Choreo. ((optional, string) The user for whom to retrieve history entries (if different from authenticated user).)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLinkHistory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLinkHistoryResultSet = function(resultStream) {
    GetLinkHistoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLinkHistory, choreography.Choreography);
util.inherits(GetLinkHistoryInputSet, choreography.InputSet);
util.inherits(GetLinkHistoryResultSet, choreography.ResultSet);
exports.GetLinkHistory = GetLinkHistory;


/*
    GetUserInfo
    Returns information about a specified user.
*/


var GetUserInfo = function(session) {
    /*
        Create a new instance of the GetUserInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/UserInfo/GetUserInfo"
    GetUserInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInfoInputSet = function() {
    GetUserInfoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FullName input for this Choreo. ((optional, string) The users full name value (only available for the authenticated user).)
        */
        this.set_FullName = function(value) {
            this.setInput("FullName", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((optional, string) The bitly login of the user whose info to look up. If not given, the authenticated user will be used.)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserInfoResultSet = function(resultStream) {
    GetUserInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserInfo, choreography.Choreography);
util.inherits(GetUserInfoInputSet, choreography.InputSet);
util.inherits(GetUserInfoResultSet, choreography.ResultSet);
exports.GetUserInfo = GetUserInfo;

