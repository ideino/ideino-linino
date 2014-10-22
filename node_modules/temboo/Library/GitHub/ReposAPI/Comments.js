
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateCommitComment
    Creates a comment on a specified commit.
*/


var CreateCommitComment = function(session) {
    /*
        Create a new instance of the CreateCommitComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Comments/CreateCommitComment"
    CreateCommitComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCommitCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCommitCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCommitComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCommitCommentInputSet = function() {
    CreateCommitCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Body input for this Choreo. ((required, string) The comment text.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the Line input for this Choreo. ((required, integer) The line number in the file to comment on.)
        */
        this.set_Line = function(value) {
            this.setInput("Line", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The relative path of the file to comment on.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Position input for this Choreo. ((required, integer) The line index in the diff to comment on.)
        */
        this.set_Position = function(value) {
            this.setInput("Position", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that the comment is associated with.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((required, string) The SHA or id of the commit.)
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
A ResultSet with methods tailored to the values returned by the CreateCommitComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCommitCommentResultSet = function(resultStream) {
    CreateCommitCommentResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateCommitComment, choreography.Choreography);
util.inherits(CreateCommitCommentInputSet, choreography.InputSet);
util.inherits(CreateCommitCommentResultSet, choreography.ResultSet);
exports.CreateCommitComment = CreateCommitComment;


/*
    DeleteCommitComment
    Deletes a specified commit comment.
*/


var DeleteCommitComment = function(session) {
    /*
        Create a new instance of the DeleteCommitComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Comments/DeleteCommitComment"
    DeleteCommitComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCommitCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCommitCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCommitComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCommitCommentInputSet = function() {
    DeleteCommitCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The comment id.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that the comment is associated with.)
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
A ResultSet with methods tailored to the values returned by the DeleteCommitComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCommitCommentResultSet = function(resultStream) {
    DeleteCommitCommentResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteCommitComment, choreography.Choreography);
util.inherits(DeleteCommitCommentInputSet, choreography.InputSet);
util.inherits(DeleteCommitCommentResultSet, choreography.ResultSet);
exports.DeleteCommitComment = DeleteCommitComment;


/*
    GetCommitComment
    Retrieves an individual commit comment.
*/


var GetCommitComment = function(session) {
    /*
        Create a new instance of the GetCommitComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Comments/GetCommitComment"
    GetCommitComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommitCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommitCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCommitComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommitCommentInputSet = function() {
    GetCommitCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The comment id.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that the comment is associated with.)
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
A ResultSet with methods tailored to the values returned by the GetCommitComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommitCommentResultSet = function(resultStream) {
    GetCommitCommentResultSet.super_.call(this, resultStream);    
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

util.inherits(GetCommitComment, choreography.Choreography);
util.inherits(GetCommitCommentInputSet, choreography.InputSet);
util.inherits(GetCommitCommentResultSet, choreography.ResultSet);
exports.GetCommitComment = GetCommitComment;


/*
    ListCommentsForRepo
    Retrieves a list of comments for the specified repository.
*/


var ListCommentsForRepo = function(session) {
    /*
        Create a new instance of the ListCommentsForRepo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Comments/ListCommentsForRepo"
    ListCommentsForRepo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCommentsForRepoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCommentsForRepoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCommentsForRepo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCommentsForRepoInputSet = function() {
    ListCommentsForRepoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to list comments for.)
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
A ResultSet with methods tailored to the values returned by the ListCommentsForRepo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommentsForRepoResultSet = function(resultStream) {
    ListCommentsForRepoResultSet.super_.call(this, resultStream);    
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

util.inherits(ListCommentsForRepo, choreography.Choreography);
util.inherits(ListCommentsForRepoInputSet, choreography.InputSet);
util.inherits(ListCommentsForRepoResultSet, choreography.ResultSet);
exports.ListCommentsForRepo = ListCommentsForRepo;


/*
    ListCommitComments
    Retrieves a list of comments for a single commit.
*/


var ListCommitComments = function(session) {
    /*
        Create a new instance of the ListCommitComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Comments/ListCommitComments"
    ListCommitComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCommitCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCommitCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCommitComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCommitCommentsInputSet = function() {
    ListCommitCommentsInputSet.super_.call(this);
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
        Set the value of the SHA input for this Choreo. ((required, string) The SHA of the commit.)
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
A ResultSet with methods tailored to the values returned by the ListCommitComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommitCommentsResultSet = function(resultStream) {
    ListCommitCommentsResultSet.super_.call(this, resultStream);    
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

util.inherits(ListCommitComments, choreography.Choreography);
util.inherits(ListCommitCommentsInputSet, choreography.InputSet);
util.inherits(ListCommitCommentsResultSet, choreography.ResultSet);
exports.ListCommitComments = ListCommitComments;

