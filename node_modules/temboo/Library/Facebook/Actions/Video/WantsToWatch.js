
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateWantsToWatch
    Creates an action that represents a user wanting to watch video content.
*/


var CreateWantsToWatch = function(session) {
    /*
        Create a new instance of the CreateWantsToWatch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Video/WantsToWatch/CreateWantsToWatch"
    CreateWantsToWatch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateWantsToWatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateWantsToWatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateWantsToWatch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateWantsToWatchInputSet = function() {
    CreateWantsToWatchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AiringEndTime input for this Choreo. ((optional, date) The time that the airing ends.)
        */
        this.set_AiringEndTime = function(value) {
            this.setInput("AiringEndTime", value);
        }

        /*
        Set the value of the AiringID input for this Choreo. ((optional, string) The id of the video airing.)
        */
        this.set_AiringID = function(value) {
            this.setInput("AiringID", value);
        }

        /*
        Set the value of the AiringStartTime input for this Choreo. ((optional, date) The time that the airing begins.)
        */
        this.set_AiringStartTime = function(value) {
            this.setInput("AiringStartTime", value);
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
        Set the value of the Episode input for this Choreo. ((conditional, string) The URL or ID for an Open Graph object representing an episode of a show.)
        */
        this.set_Episode = function(value) {
            this.setInput("Episode", value);
        }

        /*
        Set the value of the ExpiresIn input for this Choreo. ((optional, integer) The amount of time (in milliseconds) from the publish_time that the action will expire.)
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
        Set the value of the Message input for this Choreo. ((optional, string) A message attached to this action. Setting this parameter requires enabling of message capabilities.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Movie input for this Choreo. ((conditional, string) The URL or ID for an Open Graph object representing a movie.)
        */
        this.set_Movie = function(value) {
            this.setInput("Movie", value);
        }

        /*
        Set the value of the NoFeedStory input for this Choreo. ((optional, boolean) Whether or not this action should be posted to the users feed.)
        */
        this.set_NoFeedStory = function(value) {
            this.setInput("NoFeedStory", value);
        }

        /*
        Set the value of the Other input for this Choreo. ((conditional, string) The URL or ID for an Open Graph object representing any general video content.)
        */
        this.set_Other = function(value) {
            this.setInput("Other", value);
        }

        /*
        Set the value of the Place input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the location associated with this action.)
        */
        this.set_Place = function(value) {
            this.setInput("Place", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The id of the user's profile. Defaults to "me" indicating the authenticated user.)
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
        Set the value of the TVShow input for this Choreo. ((conditional, string) The URL or ID for an Open Graph object representing a TV show.)
        */
        this.set_TVShow = function(value) {
            this.setInput("TVShow", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateWantsToWatch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateWantsToWatchResultSet = function(resultStream) {
    CreateWantsToWatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook.)
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

util.inherits(CreateWantsToWatch, choreography.Choreography);
util.inherits(CreateWantsToWatchInputSet, choreography.InputSet);
util.inherits(CreateWantsToWatchResultSet, choreography.ResultSet);
exports.CreateWantsToWatch = CreateWantsToWatch;


/*
    DeleteWantsToWatch
    Deletes a given wants_to_watch action.
*/


var DeleteWantsToWatch = function(session) {
    /*
        Create a new instance of the DeleteWantsToWatch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Video/WantsToWatch/DeleteWantsToWatch"
    DeleteWantsToWatch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteWantsToWatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteWantsToWatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteWantsToWatch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteWantsToWatchInputSet = function() {
    DeleteWantsToWatchInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the DeleteWantsToWatch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteWantsToWatchResultSet = function(resultStream) {
    DeleteWantsToWatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteWantsToWatch, choreography.Choreography);
util.inherits(DeleteWantsToWatchInputSet, choreography.InputSet);
util.inherits(DeleteWantsToWatchResultSet, choreography.ResultSet);
exports.DeleteWantsToWatch = DeleteWantsToWatch;


/*
    ReadWantsToWatch
    Retrieves one or more video wants_to_watch actions.
*/


var ReadWantsToWatch = function(session) {
    /*
        Create a new instance of the ReadWantsToWatch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Video/WantsToWatch/ReadWantsToWatch"
    ReadWantsToWatch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadWantsToWatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadWantsToWatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadWantsToWatch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadWantsToWatchInputSet = function() {
    ReadWantsToWatchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((optional, string) The id of an action to retrieve. If an id is not provided, a list of all video wants_to_watch actions will be returned.)
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
A ResultSet with methods tailored to the values returned by the ReadWantsToWatch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadWantsToWatchResultSet = function(resultStream) {
    ReadWantsToWatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HasPrevious" output from this Choreo execution. ((boolean) A boolean flag indicating that a previous page exists.)
        */
        this.get_HasPrevious = function() {
            return this.getResult("HasPrevious");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "HasNext" output from this Choreo execution. ((boolean) A boolean flag indicating that a next page exists.)
        */
        this.get_HasNext = function() {
            return this.getResult("HasNext");
        }
}

util.inherits(ReadWantsToWatch, choreography.Choreography);
util.inherits(ReadWantsToWatchInputSet, choreography.InputSet);
util.inherits(ReadWantsToWatchResultSet, choreography.ResultSet);
exports.ReadWantsToWatch = ReadWantsToWatch;


/*
    UpdateWantsToWatch
    Updates an existing wants_to_watch action.
*/


var UpdateWantsToWatch = function(session) {
    /*
        Create a new instance of the UpdateWantsToWatch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Video/WantsToWatch/UpdateWantsToWatch"
    UpdateWantsToWatch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateWantsToWatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateWantsToWatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateWantsToWatch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateWantsToWatchInputSet = function() {
    UpdateWantsToWatchInputSet.super_.call(this);
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
        Set the value of the AiringEndTime input for this Choreo. ((optional, date) The time that the airing ends.)
        */
        this.set_AiringEndTime = function(value) {
            this.setInput("AiringEndTime", value);
        }

        /*
        Set the value of the AiringID input for this Choreo. ((optional, string) The id of the video airing.)
        */
        this.set_AiringID = function(value) {
            this.setInput("AiringID", value);
        }

        /*
        Set the value of the AiringStartTime input for this Choreo. ((optional, date) The time that the airing begins.)
        */
        this.set_AiringStartTime = function(value) {
            this.setInput("AiringStartTime", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, date) The time that the user ended the action (e.g. 2013-06-24T18:53:35+0000).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the Episode input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing an episode of a show.)
        */
        this.set_Episode = function(value) {
            this.setInput("Episode", value);
        }

        /*
        Set the value of the ExpiresIn input for this Choreo. ((optional, integer) The amount of time (in milliseconds) from the publish_time that the action will expire.)
        */
        this.set_ExpiresIn = function(value) {
            this.setInput("ExpiresIn", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message attached to this action. Setting this parameter requires enabling of message capabilities.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Movie input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing a movie.)
        */
        this.set_Movie = function(value) {
            this.setInput("Movie", value);
        }

        /*
        Set the value of the Other input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing any general video content.)
        */
        this.set_Other = function(value) {
            this.setInput("Other", value);
        }

        /*
        Set the value of the Place input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the location associated with this action.)
        */
        this.set_Place = function(value) {
            this.setInput("Place", value);
        }

        /*
        Set the value of the TVShow input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing a TV show.)
        */
        this.set_TVShow = function(value) {
            this.setInput("TVShow", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateWantsToWatch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateWantsToWatchResultSet = function(resultStream) {
    UpdateWantsToWatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateWantsToWatch, choreography.Choreography);
util.inherits(UpdateWantsToWatchInputSet, choreography.InputSet);
util.inherits(UpdateWantsToWatchResultSet, choreography.ResultSet);
exports.UpdateWantsToWatch = UpdateWantsToWatch;

