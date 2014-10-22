
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateAction
    Creates an Open Graph action that represents a user performing the specified action while using your app.
*/


var CreateAction = function(session) {
    /*
        Create a new instance of the CreateAction Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Custom/CreateAction"
    CreateAction.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateActionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateActionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAction
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateActionInputSet = function() {
    CreateActionInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionType input for this Choreo. ((required, string) The type of action that a user is performing in your app (e.g. runs, walks, bikes).)
        */
        this.set_ActionType = function(value) {
            this.setInput("ActionType", value);
        }

        /*
        Set the value of the AppNamespace input for this Choreo. ((required, string) The namespace that you chose for you app. This can be found in the Settings section of your App page.)
        */
        this.set_AppNamespace = function(value) {
            this.setInput("AppNamespace", value);
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
        Set the value of the PropertyName input for this Choreo. ((required, string) The name of a property that you've defined for this Open Graph story. This will be an object type (e.g. album, song, book). Multiple property names can be separated by commas.)
        */
        this.set_PropertyName = function(value) {
            this.setInput("PropertyName", value);
        }

        /*
        Set the value of the PropertyValue input for this Choreo. ((required, string) The URL or ID for an Open Graph object representing the object specified as the PropertyName. Multiple property values can be separated by commas.)
        */
        this.set_PropertyValue = function(value) {
            this.setInput("PropertyValue", value);
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
A ResultSet with methods tailored to the values returned by the CreateAction Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateActionResultSet = function(resultStream) {
    CreateActionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ActivityURL" output from this Choreo execution. ((string) The URL for the newly created action.)
        */
        this.get_ActivityURL = function() {
            return this.getResult("ActivityURL");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAction, choreography.Choreography);
util.inherits(CreateActionInputSet, choreography.InputSet);
util.inherits(CreateActionResultSet, choreography.ResultSet);
exports.CreateAction = CreateAction;


/*
    DeleteAction
    Deletes a given custom action.
*/


var DeleteAction = function(session) {
    /*
        Create a new instance of the DeleteAction Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Custom/DeleteAction"
    DeleteAction.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteActionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteActionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAction
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteActionInputSet = function() {
    DeleteActionInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the DeleteAction Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteActionResultSet = function(resultStream) {
    DeleteActionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteAction, choreography.Choreography);
util.inherits(DeleteActionInputSet, choreography.InputSet);
util.inherits(DeleteActionResultSet, choreography.ResultSet);
exports.DeleteAction = DeleteAction;


/*
    ReadActions
    Retrieves one or more custom actions.
*/


var ReadActions = function(session) {
    /*
        Create a new instance of the ReadActions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Custom/ReadActions"
    ReadActions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadActionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadActionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadActions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadActionsInputSet = function() {
    ReadActionsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((conditional, string) The id of an action to retrieve. If an id is not provided, a list of all custom actions will be returned. Required unless you provide the AppNamespace and ActionType to return all custom actions.)
        */
        this.set_ActionID = function(value) {
            this.setInput("ActionID", value);
        }

        /*
        Set the value of the ActionType input for this Choreo. ((conditional, string) The type of action that a user is performing in your app (e.g. runs, walks, bikes). Required unless you provide the ActionID.)
        */
        this.set_ActionType = function(value) {
            this.setInput("ActionType", value);
        }

        /*
        Set the value of the AppNamespace input for this Choreo. ((conditional, string) The namespace that you chose for you app. This can be found in the Settings section of your App page. Required unless you provide the ActionID.)
        */
        this.set_AppNamespace = function(value) {
            this.setInput("AppNamespace", value);
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
A ResultSet with methods tailored to the values returned by the ReadActions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadActionsResultSet = function(resultStream) {
    ReadActionsResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "HasNext" output from this Choreo execution. ((boolean) A boolean flag indicating that a next page exists.)
        */
        this.get_HasNext = function() {
            return this.getResult("HasNext");
        }
}

util.inherits(ReadActions, choreography.Choreography);
util.inherits(ReadActionsInputSet, choreography.InputSet);
util.inherits(ReadActionsResultSet, choreography.ResultSet);
exports.ReadActions = ReadActions;


/*
    UpdateAction
    Updates an existing custom action.
*/


var UpdateAction = function(session) {
    /*
        Create a new instance of the UpdateAction Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Custom/UpdateAction"
    UpdateAction.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateActionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateActionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAction
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateActionInputSet = function() {
    UpdateActionInputSet.super_.call(this);
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
        Set the value of the PropertyName input for this Choreo. ((optional, string) The name of a property that you've defined for this Open Graph story. This will be an object type (e.g. album, song, book). Multiple property names can be separated by commas.)
        */
        this.set_PropertyName = function(value) {
            this.setInput("PropertyName", value);
        }

        /*
        Set the value of the PropertyValue input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the object specified as the PropertyName. Multiple property values can be separated by commas.)
        */
        this.set_PropertyValue = function(value) {
            this.setInput("PropertyValue", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAction Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateActionResultSet = function(resultStream) {
    UpdateActionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAction, choreography.Choreography);
util.inherits(UpdateActionInputSet, choreography.InputSet);
util.inherits(UpdateActionResultSet, choreography.ResultSet);
exports.UpdateAction = UpdateAction;

