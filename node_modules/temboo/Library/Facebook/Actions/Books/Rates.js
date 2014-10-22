
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRating
    Creates an action that represents a user giving a book a rating.
*/


var CreateRating = function(session) {
    /*
        Create a new instance of the CreateRating Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Books/Rates/CreateRating"
    CreateRating.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRatingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRatingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRating
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRatingInputSet = function() {
    CreateRatingInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Book input for this Choreo. ((required, string) The URL or ID for an Open Graph object representing the book.)
        */
        this.set_Book = function(value) {
            this.setInput("Book", value);
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
        Set the value of the RatingNormalizedValue input for this Choreo. ((required, decimal) The rating expressed as a decimal value between 0 and 1.0.)
        */
        this.set_RatingNormalizedValue = function(value) {
            this.setInput("RatingNormalizedValue", value);
        }

        /*
        Set the value of the RatingScale input for this Choreo. ((required, integer) The highest possible value in the rating scale.)
        */
        this.set_RatingScale = function(value) {
            this.setInput("RatingScale", value);
        }

        /*
        Set the value of the RatingValue input for this Choreo. ((required, decimal) The value of the book rating.)
        */
        this.set_RatingValue = function(value) {
            this.setInput("RatingValue", value);
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
        Set the value of the ReviewText input for this Choreo. ((conditional, string) The text content of the book review.)
        */
        this.set_ReviewText = function(value) {
            this.setInput("ReviewText", value);
        }

        /*
        Set the value of the Review input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing a book review.)
        */
        this.set_Review = function(value) {
            this.setInput("Review", value);
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
A ResultSet with methods tailored to the values returned by the CreateRating Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRatingResultSet = function(resultStream) {
    CreateRatingResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateRating, choreography.Choreography);
util.inherits(CreateRatingInputSet, choreography.InputSet);
util.inherits(CreateRatingResultSet, choreography.ResultSet);
exports.CreateRating = CreateRating;


/*
    DeleteRating
    Deletes a given book rating action.
*/


var DeleteRating = function(session) {
    /*
        Create a new instance of the DeleteRating Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Books/Rates/DeleteRating"
    DeleteRating.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRatingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRatingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRating
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRatingInputSet = function() {
    DeleteRatingInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the DeleteRating Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRatingResultSet = function(resultStream) {
    DeleteRatingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Facebook. Returns "true" on success.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRating, choreography.Choreography);
util.inherits(DeleteRatingInputSet, choreography.InputSet);
util.inherits(DeleteRatingResultSet, choreography.ResultSet);
exports.DeleteRating = DeleteRating;


/*
    ReadRatings
    Retrieves one or more book rating actions.
*/


var ReadRatings = function(session) {
    /*
        Create a new instance of the ReadRatings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Books/Rates/ReadRatings"
    ReadRatings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadRatingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadRatingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadRatings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadRatingsInputSet = function() {
    ReadRatingsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActionID input for this Choreo. ((optional, string) The id of an action to retrieve. If an id is not provided, a list of all rate actions will be returned.)
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
A ResultSet with methods tailored to the values returned by the ReadRatings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadRatingsResultSet = function(resultStream) {
    ReadRatingsResultSet.super_.call(this, resultStream);    
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

util.inherits(ReadRatings, choreography.Choreography);
util.inherits(ReadRatingsInputSet, choreography.InputSet);
util.inherits(ReadRatingsResultSet, choreography.ResultSet);
exports.ReadRatings = ReadRatings;


/*
    UpdateRating
    Updates an existing book rating action.
*/


var UpdateRating = function(session) {
    /*
        Create a new instance of the UpdateRating Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Actions/Books/Rates/UpdateRating"
    UpdateRating.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateRatingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateRatingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateRating
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateRatingInputSet = function() {
    UpdateRatingInputSet.super_.call(this);
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
        Set the value of the Book input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing the book.)
        */
        this.set_Book = function(value) {
            this.setInput("Book", value);
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
        Set the value of the Message input for this Choreo. ((optional, string) The id of the user's profile. Defaults to "me" indicating the authenticated user.)
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
        Set the value of the RatingNormalizedValue input for this Choreo. ((optional, decimal) The rating expressed as a decimal value between 0 and 1.0.)
        */
        this.set_RatingNormalizedValue = function(value) {
            this.setInput("RatingNormalizedValue", value);
        }

        /*
        Set the value of the RatingScale input for this Choreo. ((optional, integer) The highest possible value in the rating scale.)
        */
        this.set_RatingScale = function(value) {
            this.setInput("RatingScale", value);
        }

        /*
        Set the value of the RatingValue input for this Choreo. ((optional, decimal) The value of the book rating.)
        */
        this.set_RatingValue = function(value) {
            this.setInput("RatingValue", value);
        }

        /*
        Set the value of the ReviewText input for this Choreo. ((optional, string) The text content of the book review.)
        */
        this.set_ReviewText = function(value) {
            this.setInput("ReviewText", value);
        }

        /*
        Set the value of the Review input for this Choreo. ((optional, string) The URL or ID for an Open Graph object representing a book review.)
        */
        this.set_Review = function(value) {
            this.setInput("Review", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma separated list of other profile IDs that also performed this action.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateRating Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateRatingResultSet = function(resultStream) {
    UpdateRatingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateRating, choreography.Choreography);
util.inherits(UpdateRatingInputSet, choreography.InputSet);
util.inherits(UpdateRatingResultSet, choreography.ResultSet);
exports.UpdateRating = UpdateRating;

