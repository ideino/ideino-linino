
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveUserInfo
    Returns the available resources for a specific user and the URIs for accessing them. 
*/


var RetrieveUserInfo = function(session) {
    /*
        Create a new instance of the RetrieveUserInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Users/RetrieveUserInfo"
    RetrieveUserInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUserInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUserInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUserInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUserInfoInputSet = function() {
    RetrieveUserInfoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUserInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUserInfoResultSet = function(resultStream) {
    RetrieveUserInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUserInfo, choreography.Choreography);
util.inherits(RetrieveUserInfoInputSet, choreography.InputSet);
util.inherits(RetrieveUserInfoResultSet, choreography.ResultSet);
exports.RetrieveUserInfo = RetrieveUserInfo;

