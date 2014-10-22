
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateTag
    Creates a tag object.
*/


var CreateTag = function(session) {
    /*
        Create a new instance of the CreateTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/Tags/CreateTag"
    CreateTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTagInputSet = function() {
    CreateTagInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The tag message.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Object input for this Choreo. ((required, string) The SHA of the git object that is being tagged.)
        */
        this.set_Object = function(value) {
            this.setInput("Object", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the tag being created.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) A string to use for the tag (i.e. v0.0.1).)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the TaggerDate input for this Choreo. ((required, date) A timestamp of when the object is tagged. Should be formatted like: 2011-06-17T14:53:35-07:00.)
        */
        this.set_TaggerDate = function(value) {
            this.setInput("TaggerDate", value);
        }

        /*
        Set the value of the TaggerEmail input for this Choreo. ((required, string) The email of the author of the tag.)
        */
        this.set_TaggerEmail = function(value) {
            this.setInput("TaggerEmail", value);
        }

        /*
        Set the value of the TaggerName input for this Choreo. ((required, string) The name of the author of the tag.)
        */
        this.set_TaggerName = function(value) {
            this.setInput("TaggerName", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of object that is being tagged. Valid values are: commit, tree, or blob.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTagResultSet = function(resultStream) {
    CreateTagResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateTag, choreography.Choreography);
util.inherits(CreateTagInputSet, choreography.InputSet);
util.inherits(CreateTagResultSet, choreography.ResultSet);
exports.CreateTag = CreateTag;


/*
    GetTag
    Retrieves a specified tag object.
*/


var GetTag = function(session) {
    /*
        Create a new instance of the GetTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/Tags/GetTag"
    GetTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTagInputSet = function() {
    GetTagInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the tag to retrieve.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((required, string) The SHA associated with the tag to retrieve.)
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
A ResultSet with methods tailored to the values returned by the GetTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTagResultSet = function(resultStream) {
    GetTagResultSet.super_.call(this, resultStream);    
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

util.inherits(GetTag, choreography.Choreography);
util.inherits(GetTagInputSet, choreography.InputSet);
util.inherits(GetTagResultSet, choreography.ResultSet);
exports.GetTag = GetTag;

