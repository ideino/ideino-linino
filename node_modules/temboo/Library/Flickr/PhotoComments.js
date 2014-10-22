
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    LeaveComment
    Add a comment to a specified photo on Flickr.
*/


var LeaveComment = function(session) {
    /*
        Create a new instance of the LeaveComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/PhotoComments/LeaveComment"
    LeaveComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LeaveCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LeaveCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LeaveComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LeaveCommentInputSet = function() {
    LeaveCommentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentText input for this Choreo. ((required, string) The text of the comment you are adding.)
        */
        this.set_CommentText = function(value) {
            this.setInput("CommentText", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to add a comment to)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LeaveComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LeaveCommentResultSet = function(resultStream) {
    LeaveCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LeaveComment, choreography.Choreography);
util.inherits(LeaveCommentInputSet, choreography.InputSet);
util.inherits(LeaveCommentResultSet, choreography.ResultSet);
exports.LeaveComment = LeaveComment;


/*
    ListComments
    Retrieves comments for a given photo on Flickr.
*/


var ListComments = function(session) {
    /*
        Create a new instance of the ListComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/PhotoComments/ListComments"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the MaxCommentDate input for this Choreo. ((optional, date) The maximum date that a a comment was created. Should be formatted as a unix timestamp.)
        */
        this.set_MaxCommentDate = function(value) {
            this.setInput("MaxCommentDate", value);
        }

        /*
        Set the value of the MinCommentDate input for this Choreo. ((optional, date) The minimum date that a a comment was created. Should be formatted as a unix timestamp.)
        */
        this.set_MinCommentDate = function(value) {
            this.setInput("MinCommentDate", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to retrieve comments for.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommentsResultSet = function(resultStream) {
    ListCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListComments, choreography.Choreography);
util.inherits(ListCommentsInputSet, choreography.InputSet);
util.inherits(ListCommentsResultSet, choreography.ResultSet);
exports.ListComments = ListComments;


/*
    RemoveComment
    Delete a specified comment from a photo on Flickr.
*/


var RemoveComment = function(session) {
    /*
        Create a new instance of the RemoveComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/PhotoComments/RemoveComment"
    RemoveComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveCommentInputSet = function() {
    RemoveCommentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The unique id of the comment that you want to delete)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveCommentResultSet = function(resultStream) {
    RemoveCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveComment, choreography.Choreography);
util.inherits(RemoveCommentInputSet, choreography.InputSet);
util.inherits(RemoveCommentResultSet, choreography.ResultSet);
exports.RemoveComment = RemoveComment;

