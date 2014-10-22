
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateLike
    Creates an action representing someone liking an object.
*/


var CreateLike = function(session) {
    /*
        Create a new instance of the CreateLike Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/General/Likes/CreateLike"
    CreateLike.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateLikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateLikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateLike
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateLikeInputSet = function() {
    CreateLikeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CreatedTime input for this Choreo. ((optional, date) The time that the action was created (e.g. 2013-06-24T18:53:35+0000).)
        */
        this.set_CreatedTime = function(value) {
            this.setInput("CreatedTime", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, date) The time that the user ended the action (e.g. 2013-06-24T18:53:35+0000).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the ExpiresIn input for this Choreo. ((optional, integer) The amount of time (in milleseconds) from the publish_time that the action will expire.)
        */
        this.set_ExpiresIn = function(value) {
            this.setInput("ExpiresIn", value);
        }

        /*
        Set the value of the ExplicitlyShared input for this Choreo. ((optional, boolean) Indicates that the user is explicitly sharing this action. Requires the explicitly_shared capability to be enabled.)
        */
        this.set_ExplicitlyShared = function(value) {
            this.setInput("ExplicitlyShared", value);
        }

        /*
        Set the value of the ExplicityShared input for this Choreo. ((optional, boolean) Deprecated (retained for backward compatibility only).)
        */
        this.set_ExplicityShared = function(value) {
            this.setInput("ExplicityShared", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message attached to this fitness action. Setting this parameter requires enabling of message capabilities.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the NoFeedStory input for this Choreo. ((optional, boolean) Whether or not this action should be posted to the users feed.)
        */
        this.set_NoFeedStory = function(value) {
            this.setInput("NoFeedStory", value);
        }

        /*
        Set the value of the Object input for this Choreo. ((required, string) The URL or ID for an Open Graph object to be liked.)
        */
        this.set_Object = function(value) {
            this.setInput("Object", value);
        }

        /*
        Set the value of the Place input for this Choreo. ((optional, string) The Facebook Page ID of the location associated with this action.)
        */
        this.set_Place = function(value) {
            this.setInput("Place", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the profile to retrieve fitness actions for. Defaults to "me" indicating the authenticated user.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the Reference input for this Choreo. ((optional, string) A string identifier up to 50 characters used for tracking and insights.)
        */
        this.set_Reference = function(value) {
            this.setInput("Reference", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, date) The time that the user started the action (e.g. 2013-06-24T18:53:35+0000).)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateLike Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateLikeResultSet = function(resultStream) {
    CreateLikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ActivityURL" output from this Choreo execution. ((string) The URL for the newly created action.)
        */
        this.get_ActivityURL = function() {
            return this.getResult("ActivityURL");
        }
}

util.inherits(CreateLike, choreography.Choreography);
util.inherits(CreateLikeInputSet, choreography.InputSet);
util.inherits(CreateLikeResultSet, choreography.ResultSet);
exports.CreateLike = CreateLike;


/*
    DeleteLike
    Deletes a given like action.
*/


var DeleteLike = function(session) {
    /*
        Create a new instance of the DeleteLike Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/General/Likes/DeleteLike"
    DeleteLike.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteLikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteLikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteLike
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteLikeInputSet = function() {
    DeleteLikeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((required, string) The id of an action to delete.)
        */
        this.set_ActionID = function(value) {
            this.setInput("ActionID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteLike Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteLikeResultSet = function(resultStream) {
    DeleteLikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteLike, choreography.Choreography);
util.inherits(DeleteLikeInputSet, choreography.InputSet);
util.inherits(DeleteLikeResultSet, choreography.ResultSet);
exports.DeleteLike = DeleteLike;


/*
    ReadLikes
    Retrieves one or more like actions.
*/


var ReadLikes = function(session) {
    /*
        Create a new instance of the ReadLikes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/General/Likes/ReadLikes"
    ReadLikes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadLikesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadLikesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadLikes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadLikesInputSet = function() {
    ReadLikesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((optional, string) The id of an action to retrieve. If an id is not provided, a list of all like actions will be returned.)
        */
        this.set_ActionID = function(value) {
            this.setInput("ActionID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return (i.e. id,name).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Used to page through results. Limits the number of records returned in the response.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through results. Returns results starting from the specified number.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the user's profile. Defaults to "me" indicating the authenticated user.)
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
A ResultSet with methods tailored to the values returned by the ReadLikes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadLikesResultSet = function(resultStream) {
    ReadLikesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HasNext" output from this Choreo execution. ((boolean) A boolean flag indicating that a next page exists.)
        */
        this.get_HasNext = function() {
            return this.getResult("HasNext");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "HasPrevious" output from this Choreo execution. ((boolean) A boolean flag indicating that a previous page exists.)
        */
        this.get_HasPrevious = function() {
            return this.getResult("HasPrevious");
        }
}

util.inherits(ReadLikes, choreography.Choreography);
util.inherits(ReadLikesInputSet, choreography.InputSet);
util.inherits(ReadLikesResultSet, choreography.ResultSet);
exports.ReadLikes = ReadLikes;


/*
    UpdateLike
    Creates an action that represents a user liking an object.
*/


var UpdateLike = function(session) {
    /*
        Create a new instance of the UpdateLike Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/General/Likes/UpdateLike"
    UpdateLike.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateLikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateLikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateLike
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateLikeInputSet = function() {
    UpdateLikeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((required, string) The id of the action to update.)
        */
        this.set_ActionID = function(value) {
            this.setInput("ActionID", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, date) The time that the user ended the action (e.g. 2013-06-24T18:53:35+0000).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the ExpiresIn input for this Choreo. ((optional, integer) The amount of time (in milliseconds) from the publish_time that the action will expire.)
        */
        this.set_ExpiresIn = function(value) {
            this.setInput("ExpiresIn", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message attached to this fitness action. Setting this parameter requires enabling of message capabilities.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Object input for this Choreo. ((optional, string) The URL or ID for an Open Graph object  that was liked.)
        */
        this.set_Object = function(value) {
            this.setInput("Object", value);
        }

        /*
        Set the value of the Place input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the location associated with this action.)
        */
        this.set_Place = function(value) {
            this.setInput("Place", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateLike Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateLikeResultSet = function(resultStream) {
    UpdateLikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateLike, choreography.Choreography);
util.inherits(UpdateLikeInputSet, choreography.InputSet);
util.inherits(UpdateLikeResultSet, choreography.ResultSet);
exports.UpdateLike = UpdateLike;

