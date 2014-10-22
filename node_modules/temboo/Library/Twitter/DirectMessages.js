
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DestroyDirectMessage
    Deletes a specified Direct Message.
*/


var DestroyDirectMessage = function(session) {
    /*
        Create a new instance of the DestroyDirectMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/DirectMessages/DestroyDirectMessage"
    DestroyDirectMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DestroyDirectMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DestroyDirectMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DestroyDirectMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DestroyDirectMessageInputSet = function() {
    DestroyDirectMessageInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the direct message.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DestroyDirectMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DestroyDirectMessageResultSet = function(resultStream) {
    DestroyDirectMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DestroyDirectMessage, choreography.Choreography);
util.inherits(DestroyDirectMessageInputSet, choreography.InputSet);
util.inherits(DestroyDirectMessageResultSet, choreography.ResultSet);
exports.DestroyDirectMessage = DestroyDirectMessage;


/*
    DirectMessagesSent
    Retrieves the 20 most recent direct messages sent by the authenticating user.
*/


var DirectMessagesSent = function(session) {
    /*
        Create a new instance of the DirectMessagesSent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/DirectMessages/DirectMessagesSent"
    DirectMessagesSent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DirectMessagesSentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DirectMessagesSentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DirectMessagesSent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DirectMessagesSentInputSet = function() {
    DirectMessagesSentInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve up to a maximum of 200.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specifies the page of results to retrieve.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the SinceID input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DirectMessagesSent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DirectMessagesSentResultSet = function(resultStream) {
    DirectMessagesSentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(DirectMessagesSent, choreography.Choreography);
util.inherits(DirectMessagesSentInputSet, choreography.InputSet);
util.inherits(DirectMessagesSentResultSet, choreography.ResultSet);
exports.DirectMessagesSent = DirectMessagesSent;


/*
    GetDirectMessages
    Retrieves the 20 most recent direct messages sent to the authenticating user.
*/


var GetDirectMessages = function(session) {
    /*
        Create a new instance of the GetDirectMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/DirectMessages/GetDirectMessages"
    GetDirectMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDirectMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDirectMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDirectMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDirectMessagesInputSet = function() {
    GetDirectMessagesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve up to a maximum of 200.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the MaxID input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxID = function(value) {
            this.setInput("MaxID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specifies the page of results to retrieve.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the SinceID input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDirectMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDirectMessagesResultSet = function(resultStream) {
    GetDirectMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(GetDirectMessages, choreography.Choreography);
util.inherits(GetDirectMessagesInputSet, choreography.InputSet);
util.inherits(GetDirectMessagesResultSet, choreography.ResultSet);
exports.GetDirectMessages = GetDirectMessages;


/*
    GetMessageByID
    Retrieves a single direct message, specified by an id.
*/


var GetMessageByID = function(session) {
    /*
        Create a new instance of the GetMessageByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/DirectMessages/GetMessageByID"
    GetMessageByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMessageByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMessageByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMessageByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMessageByIDInputSet = function() {
    GetMessageByIDInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the direct message.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMessageByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMessageByIDResultSet = function(resultStream) {
    GetMessageByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(GetMessageByID, choreography.Choreography);
util.inherits(GetMessageByIDInputSet, choreography.InputSet);
util.inherits(GetMessageByIDResultSet, choreography.ResultSet);
exports.GetMessageByID = GetMessageByID;


/*
    SendDirectMessage
    Sends a new direct message to the specified user from the authenticating user.
*/


var SendDirectMessage = function(session) {
    /*
        Create a new instance of the SendDirectMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/DirectMessages/SendDirectMessage"
    SendDirectMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendDirectMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendDirectMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendDirectMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendDirectMessageInputSet = function() {
    SendDirectMessageInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user who should receive the direct message. Required unless specifying the UserId.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text for the direct message. Max characters is 140.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user who should receive the direct message. Required unless specifying the ScreenName.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendDirectMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendDirectMessageResultSet = function(resultStream) {
    SendDirectMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendDirectMessage, choreography.Choreography);
util.inherits(SendDirectMessageInputSet, choreography.InputSet);
util.inherits(SendDirectMessageResultSet, choreography.ResultSet);
exports.SendDirectMessage = SendDirectMessage;

