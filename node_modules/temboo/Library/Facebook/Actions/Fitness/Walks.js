
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateWalk
    Creates an action that represents a user walking a course.
*/


var CreateWalk = function(session) {
    /*
        Create a new instance of the CreateWalk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Fitness/Walks/CreateWalk"
    CreateWalk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateWalkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateWalkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateWalk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateWalkInputSet = function() {
    CreateWalkInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Course input for this Choreo. ((required, string) The URL or ID for an Open Graph object representing the course.)
        */
        this.set_Course = function(value) {
            this.setInput("Course", value);
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
        Set the value of the NoFeedStory input for this Choreo. ((optional, boolean) Whether or not this action should be posted to the users feed.)
        */
        this.set_NoFeedStory = function(value) {
            this.setInput("NoFeedStory", value);
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
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateWalk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateWalkResultSet = function(resultStream) {
    CreateWalkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ActivityURL" output from this Choreo execution. ((string) The URL for the newly created action.)
        */
        this.get_ActivityURL = function() {
            return this.getResult("ActivityURL");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateWalk, choreography.Choreography);
util.inherits(CreateWalkInputSet, choreography.InputSet);
util.inherits(CreateWalkResultSet, choreography.ResultSet);
exports.CreateWalk = CreateWalk;


/*
    DeleteWalk
    Deletes a given walk action.
*/


var DeleteWalk = function(session) {
    /*
        Create a new instance of the DeleteWalk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Fitness/Walks/DeleteWalk"
    DeleteWalk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteWalkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteWalkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteWalk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteWalkInputSet = function() {
    DeleteWalkInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the DeleteWalk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteWalkResultSet = function(resultStream) {
    DeleteWalkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteWalk, choreography.Choreography);
util.inherits(DeleteWalkInputSet, choreography.InputSet);
util.inherits(DeleteWalkResultSet, choreography.ResultSet);
exports.DeleteWalk = DeleteWalk;


/*
    ReadWalks
    Retrieves one or more walk actions.
*/


var ReadWalks = function(session) {
    /*
        Create a new instance of the ReadWalks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Fitness/Walks/ReadWalks"
    ReadWalks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadWalksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadWalksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadWalks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadWalksInputSet = function() {
    ReadWalksInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((optional, string) The id of an action to retrieve. If an id is not provided, a list of all walk actions will be returned.)
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
A ResultSet with methods tailored to the values returned by the ReadWalks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadWalksResultSet = function(resultStream) {
    ReadWalksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HasNext" output from this Choreo execution. ((boolean) A boolean flag indicating that a next page exists.)
        */
        this.get_HasNext = function() {
            return this.getResult("HasNext");
        }
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
}

util.inherits(ReadWalks, choreography.Choreography);
util.inherits(ReadWalksInputSet, choreography.InputSet);
util.inherits(ReadWalksResultSet, choreography.ResultSet);
exports.ReadWalks = ReadWalks;


/*
    UpdateWalk
    Updates an existing walk action.
*/


var UpdateWalk = function(session) {
    /*
        Create a new instance of the UpdateWalk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Fitness/Walks/UpdateWalk"
    UpdateWalk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateWalkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateWalkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateWalk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateWalkInputSet = function() {
    UpdateWalkInputSet.super_.call(this);
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
        Set the value of the Course input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the course.)
        */
        this.set_Course = function(value) {
            this.setInput("Course", value);
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
        Set the value of the Message input for this Choreo. ((optional, string) A message attached to this action. Setting this parameter requires enabling of message capabilities.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
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
A ResultSet with methods tailored to the values returned by the UpdateWalk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateWalkResultSet = function(resultStream) {
    UpdateWalkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateWalk, choreography.Choreography);
util.inherits(UpdateWalkInputSet, choreography.InputSet);
util.inherits(UpdateWalkResultSet, choreography.ResultSet);
exports.UpdateWalk = UpdateWalk;

