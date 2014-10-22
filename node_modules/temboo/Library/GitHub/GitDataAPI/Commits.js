
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCommit
    Retrieves a specified commit from a repo.
*/


var GetCommit = function(session) {
    /*
        Create a new instance of the GetCommit Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/Commits/GetCommit"
    GetCommit.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommitResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommitInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCommit
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommitInputSet = function() {
    GetCommitInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The repo associated with the commit.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((required, string) The unique commit SHA associated with the commit to retrieve.)
        */
        this.set_SHA = function(value) {
            this.setInput("SHA", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCommit Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommitResultSet = function(resultStream) {
    GetCommitResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(GetCommit, choreography.Choreography);
util.inherits(GetCommitInputSet, choreography.InputSet);
util.inherits(GetCommitResultSet, choreography.ResultSet);
exports.GetCommit = GetCommit;

