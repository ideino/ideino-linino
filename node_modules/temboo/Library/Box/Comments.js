
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddComment
    Adds a comment to a specific file.
*/


var AddComment = function(session) {
    /*
        Create a new instance of the AddComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Comments/AddComment"
    AddComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCommentInputSet = function() {
    AddCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file that you want to view comments for.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The text of the comment to be posted.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCommentResultSet = function(resultStream) {
    AddCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddComment, choreography.Choreography);
util.inherits(AddCommentInputSet, choreography.InputSet);
util.inherits(AddCommentResultSet, choreography.ResultSet);
exports.AddComment = AddComment;


/*
    DeleteComment
    Deletes a specific comment.
*/


var DeleteComment = function(session) {
    /*
        Create a new instance of the DeleteComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Comments/DeleteComment"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The id of the comment to update.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCommentResultSet = function(resultStream) {
    DeleteCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteComment, choreography.Choreography);
util.inherits(DeleteCommentInputSet, choreography.InputSet);
util.inherits(DeleteCommentResultSet, choreography.ResultSet);
exports.DeleteComment = DeleteComment;


/*
    GetComment
    Retrieves the message and metadata for a specific comment.
*/


var GetComment = function(session) {
    /*
        Create a new instance of the GetComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Comments/GetComment"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The id of the comment to retrieve.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentResultSet = function(resultStream) {
    GetCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComment, choreography.Choreography);
util.inherits(GetCommentInputSet, choreography.InputSet);
util.inherits(GetCommentResultSet, choreography.ResultSet);
exports.GetComment = GetComment;


/*
    UpdateComment
    Updates an existing comment.
*/


var UpdateComment = function(session) {
    /*
        Create a new instance of the UpdateComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Comments/UpdateComment"
    UpdateComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCommentInputSet = function() {
    UpdateCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The id of the comment to update.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The text of the comment to be posted.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCommentResultSet = function(resultStream) {
    UpdateCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateComment, choreography.Choreography);
util.inherits(UpdateCommentInputSet, choreography.InputSet);
util.inherits(UpdateCommentResultSet, choreography.ResultSet);
exports.UpdateComment = UpdateComment;

