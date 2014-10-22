
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateAlbum
    Creates an album.
*/


var CreateAlbum = function(session) {
    /*
        Create a new instance of the CreateAlbum Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/CreateAlbum"
    CreateAlbum.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAlbumResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAlbumInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAlbum
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAlbumInputSet = function() {
    CreateAlbumInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message to attach to the album.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the album.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id for the profile that the album will be published to. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAlbum Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAlbumResultSet = function(resultStream) {
    CreateAlbumResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAlbum, choreography.Choreography);
util.inherits(CreateAlbumInputSet, choreography.InputSet);
util.inherits(CreateAlbumResultSet, choreography.ResultSet);
exports.CreateAlbum = CreateAlbum;


/*
    CreateCheckin
    Creates a checkin at a location represented by a Page.
*/


var CreateCheckin = function(session) {
    /*
        Create a new instance of the CreateCheckin Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/CreateCheckin"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) Deprecated (retained for backward compatibility only).)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) Deprecated (retained for backward compatibility only).)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message to include with the Checkin.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the PlaceID input for this Choreo. ((conditional, string) The ID of the place associated with your Checkin.)
        */
        this.set_PlaceID = function(value) {
            this.setInput("PlaceID", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile to create a checkin for. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCheckin Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCheckinResultSet = function(resultStream) {
    CreateCheckinResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
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
    CreateEvent
    Creates an event.
*/


var CreateEvent = function(session) {
    /*
        Create a new instance of the CreateEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/CreateEvent"
    CreateEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateEventInputSet = function() {
    CreateEventInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, date) The end time of the event formatted as a ISO-8601 string (i.e 2012-07-04 or 2012-07-04T19:00:00-0700).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the event.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile that the event will be created for. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((required, date) The start time of the event formatted as a ISO-8601 string (i.e 2012-07-04 or 2012-07-04T19:00:00-0700).)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEventResultSet = function(resultStream) {
    CreateEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateEvent, choreography.Choreography);
util.inherits(CreateEventInputSet, choreography.InputSet);
util.inherits(CreateEventResultSet, choreography.ResultSet);
exports.CreateEvent = CreateEvent;


/*
    LeaveComment
    Allows a user to leave a comment on a specified Graph API object.
*/


var LeaveComment = function(session) {
    /*
        Create a new instance of the LeaveComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/LeaveComment"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The comment text.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The id of a graph api object to comment on.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
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
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
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
    Like
    Allows a user to "like" a Graph API object.
*/


var Like = function(session) {
    /*
        Create a new instance of the Like Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/Like"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The id of a graph api object to like.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Like Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikeResultSet = function(resultStream) {
    LikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
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
    Post
    Adds an entry to a user's profile feed.
*/


var Post = function(session) {
    /*
        Create a new instance of the Post Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/Post"
    Post.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Post
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostInputSet = function() {
    PostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) Caption of the post.   (can only be used if link is specified))
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) Description of the post.   (can only be used if link is specified))
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((conditional, string) Link to Post.  Supply either a message or a link)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The message to Post.  Supply either a message or a link.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) Name of the post.  (can only be used if link is specified))
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Picture input for this Choreo. ((optional, string) Post thumbnail image (can only be used if link is specified))
        */
        this.set_Picture = function(value) {
            this.setInput("Picture", value);
        }

        /*
        Set the value of the PlaceID input for this Choreo. ((optional, string) Facebook Page ID of the location associated with this Post.)
        */
        this.set_PlaceID = function(value) {
            this.setInput("PlaceID", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile that is being updated. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated list of Facebook IDs of people tagged in this Post. NOTE: You cannot specify this field without also specifying a place.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Post Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostResultSet = function(resultStream) {
    PostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Post, choreography.Choreography);
util.inherits(PostInputSet, choreography.InputSet);
util.inherits(PostResultSet, choreography.ResultSet);
exports.Post = Post;


/*
    PublishLink
    Publishes a link on a given profile.
*/


var PublishLink = function(session) {
    /*
        Create a new instance of the PublishLink Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/PublishLink"
    PublishLink.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PublishLinkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PublishLinkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PublishLink
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PublishLinkInputSet = function() {
    PublishLinkInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) The link to publish.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message about the link.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Picture input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Picture = function(value) {
            this.setInput("Picture", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile that the link will be published to. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PublishLink Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PublishLinkResultSet = function(resultStream) {
    PublishLinkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PublishLink, choreography.Choreography);
util.inherits(PublishLinkInputSet, choreography.InputSet);
util.inherits(PublishLinkResultSet, choreography.ResultSet);
exports.PublishLink = PublishLink;


/*
    PublishNote
    Publishes a note on a given profile.
*/


var PublishNote = function(session) {
    /*
        Create a new instance of the PublishNote Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/PublishNote"
    PublishNote.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PublishNoteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PublishNoteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PublishNote
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PublishNoteInputSet = function() {
    PublishNoteInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The contents of the note.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile that the note will be published to. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) A subject line for the note being created.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PublishNote Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PublishNoteResultSet = function(resultStream) {
    PublishNoteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PublishNote, choreography.Choreography);
util.inherits(PublishNoteInputSet, choreography.InputSet);
util.inherits(PublishNoteResultSet, choreography.ResultSet);
exports.PublishNote = PublishNote;


/*
    RSVPEvent
    RSVP to an event as "attending", "maybe", or "declined".
*/


var RSVPEvent = function(session) {
    /*
        Create a new instance of the RSVPEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/RSVPEvent"
    RSVPEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RSVPEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RSVPEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RSVPEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RSVPEventInputSet = function() {
    RSVPEventInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EventID input for this Choreo. ((required, string) The id for the event  to rsvp for.)
        */
        this.set_EventID = function(value) {
            this.setInput("EventID", value);
        }

        /*
        Set the value of the RSVP input for this Choreo. ((required, string) The RSVP for the event. Valid values are: attending, maybe, or declined.)
        */
        this.set_RSVP = function(value) {
            this.setInput("RSVP", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RSVPEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RSVPEventResultSet = function(resultStream) {
    RSVPEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RSVPEvent, choreography.Choreography);
util.inherits(RSVPEventInputSet, choreography.InputSet);
util.inherits(RSVPEventResultSet, choreography.ResultSet);
exports.RSVPEvent = RSVPEvent;


/*
    SetStatus
    Updates a user's Facebook status.
*/


var SetStatus = function(session) {
    /*
        Create a new instance of the SetStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/SetStatus"
    SetStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetStatusInputSet = function() {
    SetStatusInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The status message to set.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile that is being updated. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetStatusResultSet = function(resultStream) {
    SetStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetStatus, choreography.Choreography);
util.inherits(SetStatusInputSet, choreography.InputSet);
util.inherits(SetStatusResultSet, choreography.ResultSet);
exports.SetStatus = SetStatus;


/*
    UploadPhoto
    Uploads a photo to a given album.
*/


var UploadPhoto = function(session) {
    /*
        Create a new instance of the UploadPhoto Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Publishing/UploadPhoto"
    UploadPhoto.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadPhotoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadPhotoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadPhoto
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadPhotoInputSet = function() {
    UploadPhotoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((required, string) The id of the album to upload the photo to.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message to attach to the photo.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Photo input for this Choreo. ((conditional, string) The Base64 encoded image to upload. This is required unless using the URL input to publish the photo.)
        */
        this.set_Photo = function(value) {
            this.setInput("Photo", value);
        }

        /*
        Set the value of the Place input for this Choreo. ((optional, string) The ID of a location where the photo was taken.)
        */
        this.set_Place = function(value) {
            this.setInput("Place", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) A URL to a hosted photo that should be uploaded. This is required unless providing a Base64 encoded image for the Photo input.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to image in the vault. This can be used as an alternative to the Photo input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadPhoto Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadPhotoResultSet = function(resultStream) {
    UploadPhotoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadPhoto, choreography.Choreography);
util.inherits(UploadPhotoInputSet, choreography.InputSet);
util.inherits(UploadPhotoResultSet, choreography.ResultSet);
exports.UploadPhoto = UploadPhoto;

