
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteComment
    Deletes a specified comment.
*/


var DeleteComment = function(session) {
    /*
        Create a new instance of the DeleteComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Deleting/DeleteComment"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The id of the comment to delete)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCommentResultSet = function(resultStream) {
    DeleteCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
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
    DeleteObject
    Deletes objects in the graph with a given id or path.
*/


var DeleteObject = function(session) {
    /*
        Create a new instance of the DeleteObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Deleting/DeleteObject"
    DeleteObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteObjectInputSet = function() {
    DeleteObjectInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The id or path to an object to delete.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteObjectResultSet = function(resultStream) {
    DeleteObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteObject, choreography.Choreography);
util.inherits(DeleteObjectInputSet, choreography.InputSet);
util.inherits(DeleteObjectResultSet, choreography.ResultSet);
exports.DeleteObject = DeleteObject;


/*
    DeleteStatus
    Deletes a specified status message from the authenticated user's feed.
*/


var DeleteStatus = function(session) {
    /*
        Create a new instance of the DeleteStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Deleting/DeleteStatus"
    DeleteStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteStatusInputSet = function() {
    DeleteStatusInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the StatusID input for this Choreo. ((required, string) The ID for the status message you want to delete.)
        */
        this.set_StatusID = function(value) {
            this.setInput("StatusID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteStatusResultSet = function(resultStream) {
    DeleteStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteStatus, choreography.Choreography);
util.inherits(DeleteStatusInputSet, choreography.InputSet);
util.inherits(DeleteStatusResultSet, choreography.ResultSet);
exports.DeleteStatus = DeleteStatus;


/*
    Unlike
    Allows a user to "unlike" a Graph API object.
*/


var Unlike = function(session) {
    /*
        Create a new instance of the Unlike Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Deleting/Unlike"
    Unlike.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnlikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnlikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Unlike
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnlikeInputSet = function() {
    UnlikeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The id of a graph api object to unlike.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Unlike Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnlikeResultSet = function(resultStream) {
    UnlikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Unlike, choreography.Choreography);
util.inherits(UnlikeInputSet, choreography.InputSet);
util.inherits(UnlikeResultSet, choreography.ResultSet);
exports.Unlike = Unlike;

