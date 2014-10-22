
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateComment
    Creates a comment for a specified gist.
*/


var CreateComment = function(session) {
    /*
        Create a new instance of the CreateComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Comments/CreateComment"
    CreateComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCommentInputSet = function() {
    CreateCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Body input for this Choreo. ((required, string) The text for the comment.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the gist to comment on.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCommentResultSet = function(resultStream) {
    CreateCommentResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateComment, choreography.Choreography);
util.inherits(CreateCommentInputSet, choreography.InputSet);
util.inherits(CreateCommentResultSet, choreography.ResultSet);
exports.CreateComment = CreateComment;


/*
    DeleteComment
    Deletes a specified comment.
*/


var DeleteComment = function(session) {
    /*
        Create a new instance of the DeleteComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Comments/DeleteComment"
    DeleteComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCommentInputSet = function() {
    DeleteCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the comment to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCommentResultSet = function(resultStream) {
    DeleteCommentResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteComment, choreography.Choreography);
util.inherits(DeleteCommentInputSet, choreography.InputSet);
util.inherits(DeleteCommentResultSet, choreography.ResultSet);
exports.DeleteComment = DeleteComment;


/*
    GetComment
    Retrieves a single comment.
*/


var GetComment = function(session) {
    /*
        Create a new instance of the GetComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Comments/GetComment"
    GetComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommentInputSet = function() {
    GetCommentInputSet.super_.call(this);
        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the comment to retrieve.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentResultSet = function(resultStream) {
    GetCommentResultSet.super_.call(this, resultStream);    
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

util.inherits(GetComment, choreography.Choreography);
util.inherits(GetCommentInputSet, choreography.InputSet);
util.inherits(GetCommentResultSet, choreography.ResultSet);
exports.GetComment = GetComment;


/*
    ListComments
    Retrieves comments for a specified gist.
*/


var ListComments = function(session) {
    /*
        Create a new instance of the ListComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Comments/ListComments"
    ListComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCommentsInputSet = function() {
    ListCommentsInputSet.super_.call(this);
        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the gist to fetch comments for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommentsResultSet = function(resultStream) {
    ListCommentsResultSet.super_.call(this, resultStream);    
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
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(ListComments, choreography.Choreography);
util.inherits(ListCommentsInputSet, choreography.InputSet);
util.inherits(ListCommentsResultSet, choreography.ResultSet);
exports.ListComments = ListComments;

