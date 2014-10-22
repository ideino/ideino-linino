
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddComment
    Adds a comment to a specified check-in.
*/


var AddComment = function(session) {
    /*
        Create a new instance of the AddComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/AddComment"
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
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in that you want to create a comment for.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text of the comment, up to 200 characters.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCommentResultSet = function(resultStream) {
    AddCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
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
    AddPost
    Posts user-generated content from an external app to a Foursquare check-in.
*/


var AddPost = function(session) {
    /*
        Create a new instance of the AddPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/AddPost"
    AddPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddPostInputSet = function() {
    AddPostInputSet.super_.call(this);
        /*
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in to add a post to.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the ContentID input for this Choreo. ((optional, string) An ID for the post to be used in a native link. Can be up to 50 characters. The URL input must also be specified when using this parameter.)
        */
        this.set_ContentID = function(value) {
            this.setInput("ContentID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text of the post. Max length is 200 characters.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) A URL linking to more details. The following URL schemes are supported: http, https, foursquare, mailto, tel, and sms.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddPostResultSet = function(resultStream) {
    AddPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddPost, choreography.Choreography);
util.inherits(AddPostInputSet, choreography.InputSet);
util.inherits(AddPostResultSet, choreography.ResultSet);
exports.AddPost = AddPost;


/*
    CheckinDetails
    Returns details of a check-in.
*/


var CheckinDetails = function(session) {
    /*
        Create a new instance of the CheckinDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/CheckinDetails"
    CheckinDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CheckinDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CheckinDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CheckinDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CheckinDetailsInputSet = function() {
    CheckinDetailsInputSet.super_.call(this);
        /*
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in to retrieve additional information for.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((optional, string) When check-ins are sent to public feeds such as Twitter, foursquare appends a signature to them (s=XXXXXX). The same value can be used here.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CheckinDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CheckinDetailsResultSet = function(resultStream) {
    CheckinDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CheckinDetails, choreography.Choreography);
util.inherits(CheckinDetailsInputSet, choreography.InputSet);
util.inherits(CheckinDetailsResultSet, choreography.ResultSet);
exports.CheckinDetails = CheckinDetails;


/*
    CreateCheckin
    Allows you to create a check-in with Foursquare.
*/


var CreateCheckin = function(session) {
    /*
        Create a new instance of the CreateCheckin Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/CreateCheckin"
    CreateCheckin.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCheckinResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCheckinInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCheckin
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCheckinInputSet = function() {
    CreateCheckinInputSet.super_.call(this);
        /*
        Set the value of the AccuracyOfCoordinates input for this Choreo. ((optional, integer) Accuracy of the user's latitude and longitude, in meters.)
        */
        this.set_AccuracyOfCoordinates = function(value) {
            this.setInput("AccuracyOfCoordinates", value);
        }

        /*
        Set the value of the AltitudeAccuracy input for this Choreo. ((optional, integer) Vertical accuracy of the user's location, in meters.)
        */
        this.set_AltitudeAccuracy = function(value) {
            this.setInput("AltitudeAccuracy", value);
        }

        /*
        Set the value of the Altitude input for this Choreo. ((optional, integer) Altitude of the user's location, in meters.)
        */
        this.set_Altitude = function(value) {
            this.setInput("Altitude", value);
        }

        /*
        Set the value of the Broadcast input for this Choreo. ((optional, string) Who to broadcast this check-in to. Can be a comma-delimited list: private, public, facebook, twitter, or followers. Defaults to 'public'.)
        */
        this.set_Broadcast = function(value) {
            this.setInput("Broadcast", value);
        }

        /*
        Set the value of the EventID input for this Choreo. ((optional, string) The event the user is checking in to. A venueId for a venue with this eventId must also be specified in the request.)
        */
        this.set_EventID = function(value) {
            this.setInput("EventID", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The FourSquare API Oauth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Shout input for this Choreo. ((optional, string) A message about your check-in. The maximum length of this field is 140 characters.)
        */
        this.set_Shout = function(value) {
            this.setInput("Shout", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((required, string) The venue where the user is checking in. No venueid is needed if shouting or just providing a venue name.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

        /*
        Set the value of the Venue input for this Choreo. ((optional, string) If you are not shouting, but you don't have a venue ID or prefer a 'venueless' checkin, pass the venue name as a string using this parameter.)
        */
        this.set_Venue = function(value) {
            this.setInput("Venue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCheckin Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCheckinResultSet = function(resultStream) {
    CreateCheckinResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateCheckin, choreography.Choreography);
util.inherits(CreateCheckinInputSet, choreography.InputSet);
util.inherits(CreateCheckinResultSet, choreography.ResultSet);
exports.CreateCheckin = CreateCheckin;


/*
    DeleteComment
    Removes a comment to a specified check-in.
*/


var DeleteComment = function(session) {
    /*
        Create a new instance of the DeleteComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/DeleteComment"
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
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in associated with the comment you want to remove.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The id of the comment to remove.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCommentResultSet = function(resultStream) {
    DeleteCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
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
    GetNearbyFriends
    Returns a list of recent friends' check-ins that are nearby the specified location.
*/


var GetNearbyFriends = function(session) {
    /*
        Create a new instance of the GetNearbyFriends Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/GetNearbyFriends"
    GetNearbyFriends.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNearbyFriendsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNearbyFriendsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNearbyFriends
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNearbyFriendsInputSet = function() {
    GetNearbyFriendsInputSet.super_.call(this);
        /*
        Set the value of the Distance input for this Choreo. ((optional, integer) The distance (in meters) between the supplied coordinates and the checkin location. This returns friends' checkins where the distance is less than or equal to this value. Default is 500.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 100.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, an array of user objects are returned. Verbose mode returns an array of checkin objects. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNearbyFriends Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNearbyFriendsResultSet = function(resultStream) {
    GetNearbyFriendsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNearbyFriends, choreography.Choreography);
util.inherits(GetNearbyFriendsInputSet, choreography.InputSet);
util.inherits(GetNearbyFriendsResultSet, choreography.ResultSet);
exports.GetNearbyFriends = GetNearbyFriends;


/*
    Like
    Allows the authenticated user to like or unlike a check-in.
*/


var Like = function(session) {
    /*
        Create a new instance of the Like Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/Like"
    Like.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Like
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikeInputSet = function() {
    LikeInputSet.super_.call(this);
        /*
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in to like or unlike.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Set input for this Choreo. ((optional, boolean) Set to 1 (the default) to like this check-in. Set to 0 to undo a previous like.)
        */
        this.set_Set = function(value) {
            this.setInput("Set", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Like Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikeResultSet = function(resultStream) {
    LikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Like, choreography.Choreography);
util.inherits(LikeInputSet, choreography.InputSet);
util.inherits(LikeResultSet, choreography.ResultSet);
exports.Like = Like;


/*
    Likes
    Returns friends and a total count of users who have liked a check-in.
*/


var Likes = function(session) {
    /*
        Create a new instance of the Likes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/Likes"
    Likes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Likes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikesInputSet = function() {
    LikesInputSet.super_.call(this);
        /*
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in to retrieve likes for.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API Oauth token string. Required unless specifying the ClientID and ClientSecret.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Likes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikesResultSet = function(resultStream) {
    LikesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Likes, choreography.Choreography);
util.inherits(LikesInputSet, choreography.InputSet);
util.inherits(LikesResultSet, choreography.ResultSet);
exports.Likes = Likes;


/*
    RecentCheckins
    Returns a list of recent friends' check-ins.
*/


var RecentCheckins = function(session) {
    /*
        Create a new instance of the RecentCheckins Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/RecentCheckins"
    RecentCheckins.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RecentCheckinsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RecentCheckinsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RecentCheckins
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RecentCheckinsInputSet = function() {
    RecentCheckinsInputSet.super_.call(this);
        /*
        Set the value of the AfterTimeStamp input for this Choreo. ((optional, integer) Seconds after which to look for check-ins, e.g. for looking for new check-ins since the last fetch.)
        */
        this.set_AfterTimeStamp = function(value) {
            this.setInput("AfterTimeStamp", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 100.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The FourSquare API Oauth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RecentCheckins Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RecentCheckinsResultSet = function(resultStream) {
    RecentCheckinsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RecentCheckins, choreography.Choreography);
util.inherits(RecentCheckinsInputSet, choreography.InputSet);
util.inherits(RecentCheckinsResultSet, choreography.ResultSet);
exports.RecentCheckins = RecentCheckins;


/*
    Reply
    Replies to a user about their check-in.
*/


var Reply = function(session) {
    /*
        Create a new instance of the Reply Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Checkins/Reply"
    Reply.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReplyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReplyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Reply
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReplyInputSet = function() {
    ReplyInputSet.super_.call(this);
        /*
        Set the value of the CheckinID input for this Choreo. ((required, string) The ID of the check-in to add a post to.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the ContentID input for this Choreo. ((optional, string) An ID for the reply to be used in a native link. Can be up to 50 characters. The URL input must also be specified when using this parameter.)
        */
        this.set_ContentID = function(value) {
            this.setInput("ContentID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text of the post. Max length is 200 characters.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) A URL linking to more details. The following URL schemes are supported: http, https, foursquare, mailto, tel, and sms.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Reply Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReplyResultSet = function(resultStream) {
    ReplyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Reply, choreography.Choreography);
util.inherits(ReplyInputSet, choreography.InputSet);
util.inherits(ReplyResultSet, choreography.ResultSet);
exports.Reply = Reply;

