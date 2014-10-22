
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddComment
    Adds a comment to a specific discussion.
*/


var AddComment = function(session) {
    /*
        Create a new instance of the AddComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Discussions/AddComment"
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
        Set the value of the DiscussionID input for this Choreo. ((required, string) The id of the file that you want to view comments for.)
        */
        this.set_DiscussionID = function(value) {
            this.setInput("DiscussionID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The text of the comment to added to the discussion.)
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
    CreateDiscussion
    Creates a new discussion for a particular folder.
*/


var CreateDiscussion = function(session) {
    /*
        Create a new instance of the CreateDiscussion Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Discussions/CreateDiscussion"
    CreateDiscussion.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDiscussionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDiscussionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDiscussion
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDiscussionInputSet = function() {
    CreateDiscussionInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the discussion.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder to create a discussion for.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the discussion.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateDiscussion Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDiscussionResultSet = function(resultStream) {
    CreateDiscussionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDiscussion, choreography.Choreography);
util.inherits(CreateDiscussionInputSet, choreography.InputSet);
util.inherits(CreateDiscussionResultSet, choreography.ResultSet);
exports.CreateDiscussion = CreateDiscussion;


/*
    GetComments
    Retrieves comments for a specific discussion.
*/


var GetComments = function(session) {
    /*
        Create a new instance of the GetComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Discussions/GetComments"
    GetComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommentsInputSet = function() {
    GetCommentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the DiscussionID input for this Choreo. ((required, string) The id of the discussion to retrieve.)
        */
        this.set_DiscussionID = function(value) {
            this.setInput("DiscussionID", value);
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
A ResultSet with methods tailored to the values returned by the GetComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentsResultSet = function(resultStream) {
    GetCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComments, choreography.Choreography);
util.inherits(GetCommentsInputSet, choreography.InputSet);
util.inherits(GetCommentsResultSet, choreography.ResultSet);
exports.GetComments = GetComments;


/*
    GetDiscussion
    Retrieves the metadata for a specific discussion.
*/


var GetDiscussion = function(session) {
    /*
        Create a new instance of the GetDiscussion Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Discussions/GetDiscussion"
    GetDiscussion.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDiscussionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDiscussionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDiscussion
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDiscussionInputSet = function() {
    GetDiscussionInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the DiscussionID input for this Choreo. ((required, string) The id of the discussion to retrieve.)
        */
        this.set_DiscussionID = function(value) {
            this.setInput("DiscussionID", value);
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
A ResultSet with methods tailored to the values returned by the GetDiscussion Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDiscussionResultSet = function(resultStream) {
    GetDiscussionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDiscussion, choreography.Choreography);
util.inherits(GetDiscussionInputSet, choreography.InputSet);
util.inherits(GetDiscussionResultSet, choreography.ResultSet);
exports.GetDiscussion = GetDiscussion;

