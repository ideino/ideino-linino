
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateFork
    Creates a fork for the authenticated user.
*/


var CreateFork = function(session) {
    /*
        Create a new instance of the CreateFork Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Forks/CreateFork"
    CreateFork.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateForkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateForkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateFork
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateForkInputSet = function() {
    CreateForkInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Org input for this Choreo. ((optional, string) The organization login. The repository will be forked into this organization.)
        */
        this.set_Org = function(value) {
            this.setInput("Org", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repository.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateFork Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateForkResultSet = function(resultStream) {
    CreateForkResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(CreateFork, choreography.Choreography);
util.inherits(CreateForkInputSet, choreography.InputSet);
util.inherits(CreateForkResultSet, choreography.ResultSet);
exports.CreateFork = CreateFork;


/*
    GetForks
    Retrieves forks for a specified repository.
*/


var GetForks = function(session) {
    /*
        Create a new instance of the GetForks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Forks/GetForks"
    GetForks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetForksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetForksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetForks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetForksInputSet = function() {
    GetForksInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repository.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Valid values are: newest, oldest, or watchers. Default is "newest".)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetForks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetForksResultSet = function(resultStream) {
    GetForksResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(GetForks, choreography.Choreography);
util.inherits(GetForksInputSet, choreography.InputSet);
util.inherits(GetForksResultSet, choreography.ResultSet);
exports.GetForks = GetForks;

