
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompareCommits
    Retrieves a comparison between two commits.
*/


var CompareCommits = function(session) {
    /*
        Create a new instance of the CompareCommits Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Commits/CompareCommits"
    CompareCommits.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompareCommitsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompareCommitsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompareCommits
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompareCommitsInputSet = function() {
    CompareCommitsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Base input for this Choreo. ((required, string) The base commit (i.e. "master").)
        */
        this.set_Base = function(value) {
            this.setInput("Base", value);
        }

        /*
        Set the value of the Head input for this Choreo. ((required, string) The head commit.)
        */
        this.set_Head = function(value) {
            this.setInput("Head", value);
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
A ResultSet with methods tailored to the values returned by the CompareCommits Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompareCommitsResultSet = function(resultStream) {
    CompareCommitsResultSet.super_.call(this, resultStream);    
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

util.inherits(CompareCommits, choreography.Choreography);
util.inherits(CompareCommitsInputSet, choreography.InputSet);
util.inherits(CompareCommitsResultSet, choreography.ResultSet);
exports.CompareCommits = CompareCommits;


/*
    GetCommit
    Retrieves an individual commit.
*/


var GetCommit = function(session) {
    /*
        Create a new instance of the GetCommit Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Commits/GetCommit"
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
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repository.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((required, string) The SHA of the commit to return.)
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
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(GetCommit, choreography.Choreography);
util.inherits(GetCommitInputSet, choreography.InputSet);
util.inherits(GetCommitResultSet, choreography.ResultSet);
exports.GetCommit = GetCommit;


/*
    ListCommits
    Lists commits for a specified repository.
*/


var ListCommits = function(session) {
    /*
        Create a new instance of the ListCommits Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Commits/ListCommits"
    ListCommits.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCommitsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCommitsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCommits
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCommitsInputSet = function() {
    ListCommitsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) Returns only commits containing this file path.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repository.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((optional, string) The SHA or branch to start listing commits from.)
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
A ResultSet with methods tailored to the values returned by the ListCommits Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommitsResultSet = function(resultStream) {
    ListCommitsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(ListCommits, choreography.Choreography);
util.inherits(ListCommitsInputSet, choreography.InputSet);
util.inherits(ListCommitsResultSet, choreography.ResultSet);
exports.ListCommits = ListCommits;

