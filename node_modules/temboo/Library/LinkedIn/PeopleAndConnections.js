
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetConnectionsByMemberID
    Retrieve all connections linked to a  member ID.
*/


var GetConnectionsByMemberID = function(session) {
    /*
        Create a new instance of the GetConnectionsByMemberID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/PeopleAndConnections/GetConnectionsByMemberID"
    GetConnectionsByMemberID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetConnectionsByMemberIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetConnectionsByMemberIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetConnectionsByMemberID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetConnectionsByMemberIDInputSet = function() {
    GetConnectionsByMemberIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the MemberID input for this Choreo. ((required, integer) Enter a LinkedIn Member ID.)
        */
        this.set_MemberID = function(value) {
            this.setInput("MemberID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetConnectionsByMemberID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetConnectionsByMemberIDResultSet = function(resultStream) {
    GetConnectionsByMemberIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetConnectionsByMemberID, choreography.Choreography);
util.inherits(GetConnectionsByMemberIDInputSet, choreography.InputSet);
util.inherits(GetConnectionsByMemberIDResultSet, choreography.ResultSet);
exports.GetConnectionsByMemberID = GetConnectionsByMemberID;


/*
    GetMemberProfile
    Returns the standard default profile of the current user.
*/


var GetMemberProfile = function(session) {
    /*
        Create a new instance of the GetMemberProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/PeopleAndConnections/GetMemberProfile"
    GetMemberProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMemberProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMemberProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMemberProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMemberProfileInputSet = function() {
    GetMemberProfileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMemberProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMemberProfileResultSet = function(resultStream) {
    GetMemberProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMemberProfile, choreography.Choreography);
util.inherits(GetMemberProfileInputSet, choreography.InputSet);
util.inherits(GetMemberProfileResultSet, choreography.ResultSet);
exports.GetMemberProfile = GetMemberProfile;


/*
    GetUserConnections
    Returns a list of connections associated with the profile of the current user.
*/


var GetUserConnections = function(session) {
    /*
        Create a new instance of the GetUserConnections Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/PeopleAndConnections/GetUserConnections"
    GetUserConnections.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserConnectionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserConnectionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserConnections
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserConnectionsInputSet = function() {
    GetUserConnectionsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserConnections Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserConnectionsResultSet = function(resultStream) {
    GetUserConnectionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserConnections, choreography.Choreography);
util.inherits(GetUserConnectionsInputSet, choreography.InputSet);
util.inherits(GetUserConnectionsResultSet, choreography.ResultSet);
exports.GetUserConnections = GetUserConnections;


/*
    SendMessage
    Sends a message to a connected member given the member's personID.
*/


var SendMessage = function(session) {
    /*
        Create a new instance of the SendMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/PeopleAndConnections/SendMessage"
    SendMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendMessageInputSet = function() {
    SendMessageInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the Body input for this Choreo. ((required, multiline) Message body. Cannot contain any HTML.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the Recipients input for this Choreo. ((required, string) Comma-separated list of recipients by personID. For sending to 'self', put in a tilda (~). Ex.: "~",  "~,XtdrgWytGD".)
        */
        this.set_Recipients = function(value) {
            this.setInput("Recipients", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) Subject line of message.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendMessageResultSet = function(resultStream) {
    SendMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The Response Status Code from LinkedIn. For a successful message, the status code should be 201.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(SendMessage, choreography.Choreography);
util.inherits(SendMessageInputSet, choreography.InputSet);
util.inherits(SendMessageResultSet, choreography.ResultSet);
exports.SendMessage = SendMessage;

