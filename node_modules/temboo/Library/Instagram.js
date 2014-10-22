
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateMediaComment
    Creates a comment on a specified media object. 
*/


var CreateMediaComment = function(session) {
    /*
        Create a new instance of the CreateMediaComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/CreateMediaComment"
    CreateMediaComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateMediaCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateMediaCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateMediaComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateMediaCommentInputSet = function() {
    CreateMediaCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media object to leave a comment on.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text to post as a comment on the media.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateMediaComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateMediaCommentResultSet = function(resultStream) {
    CreateMediaCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateMediaComment, choreography.Choreography);
util.inherits(CreateMediaCommentInputSet, choreography.InputSet);
util.inherits(CreateMediaCommentResultSet, choreography.ResultSet);
exports.CreateMediaComment = CreateMediaComment;


/*
    DeleteMediaComment
    Removes a specified comment from a user's media.
*/


var DeleteMediaComment = function(session) {
    /*
        Create a new instance of the DeleteMediaComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/DeleteMediaComment"
    DeleteMediaComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteMediaCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteMediaCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteMediaComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteMediaCommentInputSet = function() {
    DeleteMediaCommentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The ID of the comment to delete.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media object that you want to delete comments from.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteMediaComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteMediaCommentResultSet = function(resultStream) {
    DeleteMediaCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteMediaComment, choreography.Choreography);
util.inherits(DeleteMediaCommentInputSet, choreography.InputSet);
util.inherits(DeleteMediaCommentResultSet, choreography.ResultSet);
exports.DeleteMediaComment = DeleteMediaComment;


/*
    GetFollowerRequests
    Retrieves a list of users who have requested permission to follow a given user.
*/


var GetFollowerRequests = function(session) {
    /*
        Create a new instance of the GetFollowerRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetFollowerRequests"
    GetFollowerRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFollowerRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFollowerRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFollowerRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFollowerRequestsInputSet = function() {
    GetFollowerRequestsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFollowerRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFollowerRequestsResultSet = function(resultStream) {
    GetFollowerRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFollowerRequests, choreography.Choreography);
util.inherits(GetFollowerRequestsInputSet, choreography.InputSet);
util.inherits(GetFollowerRequestsResultSet, choreography.ResultSet);
exports.GetFollowerRequests = GetFollowerRequests;


/*
    GetLikedMediaForUser
    Retrieves the authenticated user's list of media they've liked.
*/


var GetLikedMediaForUser = function(session) {
    /*
        Create a new instance of the GetLikedMediaForUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetLikedMediaForUser"
    GetLikedMediaForUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLikedMediaForUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLikedMediaForUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLikedMediaForUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLikedMediaForUserInputSet = function() {
    GetLikedMediaForUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Returns media liked before this id.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user to retrieve media for. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLikedMediaForUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLikedMediaForUserResultSet = function(resultStream) {
    GetLikedMediaForUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLikedMediaForUser, choreography.Choreography);
util.inherits(GetLikedMediaForUserInputSet, choreography.InputSet);
util.inherits(GetLikedMediaForUserResultSet, choreography.ResultSet);
exports.GetLikedMediaForUser = GetLikedMediaForUser;


/*
    GetLocationInformation
    Retrieves information about a location.
*/


var GetLocationInformation = function(session) {
    /*
        Create a new instance of the GetLocationInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetLocationInformation"
    GetLocationInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLocationInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLocationInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLocationInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLocationInformationInputSet = function() {
    GetLocationInformationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the LocationID input for this Choreo. ((required, integer) The ID for the location that you want to retrieve information for.)
        */
        this.set_LocationID = function(value) {
            this.setInput("LocationID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLocationInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLocationInformationResultSet = function(resultStream) {
    GetLocationInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLocationInformation, choreography.Choreography);
util.inherits(GetLocationInformationInputSet, choreography.InputSet);
util.inherits(GetLocationInformationResultSet, choreography.ResultSet);
exports.GetLocationInformation = GetLocationInformation;


/*
    GetMediaByID
    Retrieves information about a specified media object.
*/


var GetMediaByID = function(session) {
    /*
        Create a new instance of the GetMediaByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetMediaByID"
    GetMediaByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMediaByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMediaByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMediaByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMediaByIDInputSet = function() {
    GetMediaByIDInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media object you want to retrieve.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMediaByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMediaByIDResultSet = function(resultStream) {
    GetMediaByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMediaByID, choreography.Choreography);
util.inherits(GetMediaByIDInputSet, choreography.InputSet);
util.inherits(GetMediaByIDResultSet, choreography.ResultSet);
exports.GetMediaByID = GetMediaByID;


/*
    GetMediaByLikes
    Retrieves a list of users who like the specified media.
*/


var GetMediaByLikes = function(session) {
    /*
        Create a new instance of the GetMediaByLikes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetMediaByLikes"
    GetMediaByLikes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMediaByLikesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMediaByLikesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMediaByLikes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMediaByLikesInputSet = function() {
    GetMediaByLikesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media object you want to retrieve.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMediaByLikes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMediaByLikesResultSet = function(resultStream) {
    GetMediaByLikesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMediaByLikes, choreography.Choreography);
util.inherits(GetMediaByLikesInputSet, choreography.InputSet);
util.inherits(GetMediaByLikesResultSet, choreography.ResultSet);
exports.GetMediaByLikes = GetMediaByLikes;


/*
    GetMediaComments
    Retrieves a full list of comments for a specified media object.
*/


var GetMediaComments = function(session) {
    /*
        Create a new instance of the GetMediaComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetMediaComments"
    GetMediaComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMediaCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMediaCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMediaComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMediaCommentsInputSet = function() {
    GetMediaCommentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media object that you want to get comments for.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMediaComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMediaCommentsResultSet = function(resultStream) {
    GetMediaCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMediaComments, choreography.Choreography);
util.inherits(GetMediaCommentsInputSet, choreography.InputSet);
util.inherits(GetMediaCommentsResultSet, choreography.ResultSet);
exports.GetMediaComments = GetMediaComments;


/*
    GetPopularMedia
    Retrieves a list of what media is most popular at the moment.
*/


var GetPopularMedia = function(session) {
    /*
        Create a new instance of the GetPopularMedia Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetPopularMedia"
    GetPopularMedia.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPopularMediaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPopularMediaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPopularMedia
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPopularMediaInputSet = function() {
    GetPopularMediaInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPopularMedia Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPopularMediaResultSet = function(resultStream) {
    GetPopularMediaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPopularMedia, choreography.Choreography);
util.inherits(GetPopularMediaInputSet, choreography.InputSet);
util.inherits(GetPopularMediaResultSet, choreography.ResultSet);
exports.GetPopularMedia = GetPopularMedia;


/*
    GetRecentMediaForLocation
    Retrieves a list of recent media objects from a given location.
*/


var GetRecentMediaForLocation = function(session) {
    /*
        Create a new instance of the GetRecentMediaForLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetRecentMediaForLocation"
    GetRecentMediaForLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentMediaForLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentMediaForLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentMediaForLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentMediaForLocationInputSet = function() {
    GetRecentMediaForLocationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the LocationID input for this Choreo. ((required, integer) The ID for the location that you want to retrieve information for.)
        */
        this.set_LocationID = function(value) {
            this.setInput("LocationID", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Returns media after this max_id.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the MaxTimestamp input for this Choreo. ((optional, date) Returns media before this UNIX timestamp.)
        */
        this.set_MaxTimestamp = function(value) {
            this.setInput("MaxTimestamp", value);
        }

        /*
        Set the value of the MinID input for this Choreo. ((optional, string) Returns media before this min_id.)
        */
        this.set_MinID = function(value) {
            this.setInput("MinID", value);
        }

        /*
        Set the value of the MinTimestamp input for this Choreo. ((optional, date) Returns media after this UNIX timestamp.)
        */
        this.set_MinTimestamp = function(value) {
            this.setInput("MinTimestamp", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentMediaForLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentMediaForLocationResultSet = function(resultStream) {
    GetRecentMediaForLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentMediaForLocation, choreography.Choreography);
util.inherits(GetRecentMediaForLocationInputSet, choreography.InputSet);
util.inherits(GetRecentMediaForLocationResultSet, choreography.ResultSet);
exports.GetRecentMediaForLocation = GetRecentMediaForLocation;


/*
    GetRecentMediaForUser
    Retrieves the most recent media published by a user.
*/


var GetRecentMediaForUser = function(session) {
    /*
        Create a new instance of the GetRecentMediaForUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetRecentMediaForUser"
    GetRecentMediaForUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentMediaForUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentMediaForUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentMediaForUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentMediaForUserInputSet = function() {
    GetRecentMediaForUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Return media liked before this id.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the MinID input for this Choreo. ((optional, string) Returns media later than this min_id.)
        */
        this.set_MinID = function(value) {
            this.setInput("MinID", value);
        }

        /*
        Set the value of the MinTimestamp input for this Choreo. ((optional, date) Returns media after this UNIX timestamp.)
        */
        this.set_MinTimestamp = function(value) {
            this.setInput("MinTimestamp", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user whose media to return. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentMediaForUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentMediaForUserResultSet = function(resultStream) {
    GetRecentMediaForUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentMediaForUser, choreography.Choreography);
util.inherits(GetRecentMediaForUserInputSet, choreography.InputSet);
util.inherits(GetRecentMediaForUserResultSet, choreography.ResultSet);
exports.GetRecentMediaForUser = GetRecentMediaForUser;


/*
    GetRelationship
    Retrieves information about the relationship between the authenticating user and the specified user.
*/


var GetRelationship = function(session) {
    /*
        Create a new instance of the GetRelationship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetRelationship"
    GetRelationship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRelationshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRelationshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRelationship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRelationshipInputSet = function() {
    GetRelationshipInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the target user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRelationship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRelationshipResultSet = function(resultStream) {
    GetRelationshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRelationship, choreography.Choreography);
util.inherits(GetRelationshipInputSet, choreography.InputSet);
util.inherits(GetRelationshipResultSet, choreography.ResultSet);
exports.GetRelationship = GetRelationship;


/*
    GetUserFeed
    Retrieves the authenticated user's feed.
*/


var GetUserFeed = function(session) {
    /*
        Create a new instance of the GetUserFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetUserFeed"
    GetUserFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserFeedInputSet = function() {
    GetUserFeedInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Returns media earlier than this max_id.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the MinID input for this Choreo. ((optional, string) Returns media later than this min_id.)
        */
        this.set_MinID = function(value) {
            this.setInput("MinID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user whose feed to retrieve. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserFeedResultSet = function(resultStream) {
    GetUserFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserFeed, choreography.Choreography);
util.inherits(GetUserFeedInputSet, choreography.InputSet);
util.inherits(GetUserFeedResultSet, choreography.ResultSet);
exports.GetUserFeed = GetUserFeed;


/*
    GetUserInformation
    Retrieves basic information about a user.
*/


var GetUserInformation = function(session) {
    /*
        Create a new instance of the GetUserInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/GetUserInformation"
    GetUserInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInformationInputSet = function() {
    GetUserInformationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user that you want to retrieve. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserInformationResultSet = function(resultStream) {
    GetUserInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserInformation, choreography.Choreography);
util.inherits(GetUserInformationInputSet, choreography.InputSet);
util.inherits(GetUserInformationResultSet, choreography.ResultSet);
exports.GetUserInformation = GetUserInformation;


/*
    LikeMedia
    Sets the specified media as being liked by the authenticating user.
*/


var LikeMedia = function(session) {
    /*
        Create a new instance of the LikeMedia Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/LikeMedia"
    LikeMedia.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikeMediaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikeMediaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LikeMedia
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikeMediaInputSet = function() {
    LikeMediaInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media to like.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LikeMedia Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikeMediaResultSet = function(resultStream) {
    LikeMediaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LikeMedia, choreography.Choreography);
util.inherits(LikeMediaInputSet, choreography.InputSet);
util.inherits(LikeMediaResultSet, choreography.ResultSet);
exports.LikeMedia = LikeMedia;


/*
    ModifyRelationship
    Modifies the relationship between the authenticating user and the target user.
*/


var ModifyRelationship = function(session) {
    /*
        Create a new instance of the ModifyRelationship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/ModifyRelationship"
    ModifyRelationship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ModifyRelationshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ModifyRelationshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ModifyRelationship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ModifyRelationshipInputSet = function() {
    ModifyRelationshipInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Action input for this Choreo. ((required, string) The type of relationship modification to perform. Valid values are: follow, unfollow, block, unblock, approve, or deny.)
        */
        this.set_Action = function(value) {
            this.setInput("Action", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the target user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ModifyRelationship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ModifyRelationshipResultSet = function(resultStream) {
    ModifyRelationshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ModifyRelationship, choreography.Choreography);
util.inherits(ModifyRelationshipInputSet, choreography.InputSet);
util.inherits(ModifyRelationshipResultSet, choreography.ResultSet);
exports.ModifyRelationship = ModifyRelationship;


/*
    RecentlyTaggedMedia
    Retrieves a list of recently tagged media.
*/


var RecentlyTaggedMedia = function(session) {
    /*
        Create a new instance of the RecentlyTaggedMedia Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/RecentlyTaggedMedia"
    RecentlyTaggedMedia.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RecentlyTaggedMediaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RecentlyTaggedMediaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RecentlyTaggedMedia
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RecentlyTaggedMediaInputSet = function() {
    RecentlyTaggedMediaInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide the AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, integer) Returns media earlier than this max_id.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the MinID input for this Choreo. ((optional, integer) Returns media later than this min_id.)
        */
        this.set_MinID = function(value) {
            this.setInput("MinID", value);
        }

        /*
        Set the value of the TagName input for this Choreo. ((required, string) Enter a valid tag identifier, such as: nofliter)
        */
        this.set_TagName = function(value) {
            this.setInput("TagName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RecentlyTaggedMedia Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RecentlyTaggedMediaResultSet = function(resultStream) {
    RecentlyTaggedMediaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RecentlyTaggedMedia, choreography.Choreography);
util.inherits(RecentlyTaggedMediaInputSet, choreography.InputSet);
util.inherits(RecentlyTaggedMediaResultSet, choreography.ResultSet);
exports.RecentlyTaggedMedia = RecentlyTaggedMedia;


/*
    SearchLocations
    Searches for locations by geographic coordinates. 
*/


var SearchLocations = function(session) {
    /*
        Create a new instance of the SearchLocations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/SearchLocations"
    SearchLocations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchLocationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchLocationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchLocations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchLocationsInputSet = function() {
    SearchLocationsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide the AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, integer) The distance to search. Default is 1000m (distance=1000), max distance is 5000.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the FoursquareID input for this Choreo. ((conditional, string) Returns a location mapped off of a foursquare v2 api location id. If used, you are not required to provide values for Latitude or Longitude.)
        */
        this.set_FoursquareID = function(value) {
            this.setInput("FoursquareID", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) Latitude of the center search coordinate. If used, Longitude is required.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) Longitude of the center search coordinate. If used, Latitude is required.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchLocations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchLocationsResultSet = function(resultStream) {
    SearchLocationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchLocations, choreography.Choreography);
util.inherits(SearchLocationsInputSet, choreography.InputSet);
util.inherits(SearchLocationsResultSet, choreography.ResultSet);
exports.SearchLocations = SearchLocations;


/*
    SearchMedia
    Allows you to search for media in a given area.
*/


var SearchMedia = function(session) {
    /*
        Create a new instance of the SearchMedia Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/SearchMedia"
    SearchMedia.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchMediaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchMediaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchMedia
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchMediaInputSet = function() {
    SearchMediaInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide the AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, integer) The distance in meters. Defaults to 1000. Max is 5000.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Latitude of the center search coordinate.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Longitude of the center search coordinate.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MaxTimestamp input for this Choreo. ((optional, date) A unix timestamp. All media returned will be taken earlier than this timestamp.)
        */
        this.set_MaxTimestamp = function(value) {
            this.setInput("MaxTimestamp", value);
        }

        /*
        Set the value of the MinTimestamp input for this Choreo. ((optional, date) A unix timestamp. All media returned will be taken later than this timestamp.)
        */
        this.set_MinTimestamp = function(value) {
            this.setInput("MinTimestamp", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchMedia Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchMediaResultSet = function(resultStream) {
    SearchMediaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchMedia, choreography.Choreography);
util.inherits(SearchMediaInputSet, choreography.InputSet);
util.inherits(SearchMediaResultSet, choreography.ResultSet);
exports.SearchMedia = SearchMedia;


/*
    SearchTags
    Searches for tags by name.
*/


var SearchTags = function(session) {
    /*
        Create a new instance of the SearchTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/SearchTags"
    SearchTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchTagsInputSet = function() {
    SearchTagsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A tag name to search for (e.g., snow, beach). Do not include a leading hash symbol in your query.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchTagsResultSet = function(resultStream) {
    SearchTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchTags, choreography.Choreography);
util.inherits(SearchTagsInputSet, choreography.InputSet);
util.inherits(SearchTagsResultSet, choreography.ResultSet);
exports.SearchTags = SearchTags;


/*
    SearchUsers
    Allows you to search for users by name.
*/


var SearchUsers = function(session) {
    /*
        Create a new instance of the SearchUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/SearchUsers"
    SearchUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchUsersInputSet = function() {
    SearchUsersInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The query string to use for the user search.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchUsersResultSet = function(resultStream) {
    SearchUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchUsers, choreography.Choreography);
util.inherits(SearchUsersInputSet, choreography.InputSet);
util.inherits(SearchUsersResultSet, choreography.ResultSet);
exports.SearchUsers = SearchUsers;


/*
    TagName
    Retrieves information about a tag object.
*/


var TagName = function(session) {
    /*
        Create a new instance of the TagName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/TagName"
    TagName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TagNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TagNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TagName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TagNameInputSet = function() {
    TagNameInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide an AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the TagName input for this Choreo. ((required, string) Enter a valid tag identifier, such as: nofliter)
        */
        this.set_TagName = function(value) {
            this.setInput("TagName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TagName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TagNameResultSet = function(resultStream) {
    TagNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TagName, choreography.Choreography);
util.inherits(TagNameInputSet, choreography.InputSet);
util.inherits(TagNameResultSet, choreography.ResultSet);
exports.TagName = TagName;


/*
    UnlikeMedia
    Allows a user to unlike a specified media object.
*/


var UnlikeMedia = function(session) {
    /*
        Create a new instance of the UnlikeMedia Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/UnlikeMedia"
    UnlikeMedia.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnlikeMediaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnlikeMediaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnlikeMedia
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnlikeMediaInputSet = function() {
    UnlikeMediaInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth 2.0 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the MediaID input for this Choreo. ((required, string) The ID of the media to unlike.)
        */
        this.set_MediaID = function(value) {
            this.setInput("MediaID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnlikeMedia Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnlikeMediaResultSet = function(resultStream) {
    UnlikeMediaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnlikeMedia, choreography.Choreography);
util.inherits(UnlikeMediaInputSet, choreography.InputSet);
util.inherits(UnlikeMediaResultSet, choreography.ResultSet);
exports.UnlikeMedia = UnlikeMedia;


/*
    UserFollows
    Retrieve the list of users that the authenticating user is following.
*/


var UserFollows = function(session) {
    /*
        Create a new instance of the UserFollows Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/UserFollows"
    UserFollows.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserFollowsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserFollowsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserFollows
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserFollowsInputSet = function() {
    UserFollowsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide the AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user associated with the list to return. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserFollows Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserFollowsResultSet = function(resultStream) {
    UserFollowsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UserFollows, choreography.Choreography);
util.inherits(UserFollowsInputSet, choreography.InputSet);
util.inherits(UserFollowsResultSet, choreography.ResultSet);
exports.UserFollows = UserFollows;


/*
    UserIsFollowedBy
    Retrieve the list of users following the authenticating user.
*/


var UserIsFollowedBy = function(session) {
    /*
        Create a new instance of the UserIsFollowedBy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instagram/UserIsFollowedBy"
    UserIsFollowedBy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserIsFollowedByResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserIsFollowedByInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserIsFollowedBy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserIsFollowedByInputSet = function() {
    UserIsFollowedByInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved during the OAuth 2.0 process. Required unless you provide the ClientID.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Instagram after registering your application. Required unless you provide the AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user associated with the list to return. Defaults to 'self' indicating that the authenticating user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserIsFollowedBy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserIsFollowedByResultSet = function(resultStream) {
    UserIsFollowedByResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Instagram.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UserIsFollowedBy, choreography.Choreography);
util.inherits(UserIsFollowedByInputSet, choreography.InputSet);
util.inherits(UserIsFollowedByResultSet, choreography.ResultSet);
exports.UserIsFollowedBy = UserIsFollowedBy;

