
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetArchive
    Returns the contents of any file or directory in a repository.
*/


var GetArchive = function(session) {
    /*
        Create a new instance of the GetArchive Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Contents/GetArchive"
    GetArchive.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetArchiveResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetArchiveInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetArchive
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetArchiveInputSet = function() {
    GetArchiveInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The content path.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((optional, string) The name of the commit, branch, or tag. Defaults to "master".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
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
A ResultSet with methods tailored to the values returned by the GetArchive Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetArchiveResultSet = function(resultStream) {
    GetArchiveResultSet.super_.call(this, resultStream);    
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

util.inherits(GetArchive, choreography.Choreography);
util.inherits(GetArchiveInputSet, choreography.InputSet);
util.inherits(GetArchiveResultSet, choreography.ResultSet);
exports.GetArchive = GetArchive;


/*
    GetContents
    Returns a tarball or zipball archive for a repository. 
*/


var GetContents = function(session) {
    /*
        Create a new instance of the GetContents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Contents/GetContents"
    GetContents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetContentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetContentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetContents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetContentsInputSet = function() {
    GetContentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ArchiveFormat input for this Choreo. ((required, string) Either tarball or zipball. Defaults to "tarball".)
        */
        this.set_ArchiveFormat = function(value) {
            this.setInput("ArchiveFormat", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((optional, string) A valid Git reference. Defaults to "master".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
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
A ResultSet with methods tailored to the values returned by the GetContents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetContentsResultSet = function(resultStream) {
    GetContentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetContents, choreography.Choreography);
util.inherits(GetContentsInputSet, choreography.InputSet);
util.inherits(GetContentsResultSet, choreography.ResultSet);
exports.GetContents = GetContents;


/*
    GetReadMe
    Retrieves the README file for a repository.
*/


var GetReadMe = function(session) {
    /*
        Create a new instance of the GetReadMe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Contents/GetReadMe"
    GetReadMe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReadMeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReadMeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReadMe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReadMeInputSet = function() {
    GetReadMeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((optional, string) The name of the commit, branch, or tag. Defaults to "master".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
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
A ResultSet with methods tailored to the values returned by the GetReadMe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReadMeResultSet = function(resultStream) {
    GetReadMeResultSet.super_.call(this, resultStream);    
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

util.inherits(GetReadMe, choreography.Choreography);
util.inherits(GetReadMeInputSet, choreography.InputSet);
util.inherits(GetReadMeResultSet, choreography.ResultSet);
exports.GetReadMe = GetReadMe;

