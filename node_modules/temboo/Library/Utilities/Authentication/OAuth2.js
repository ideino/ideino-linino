
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FinalizeOAuth
    Completes the OAuth process by retrieving an access token for a user, after they have visited the authorization URL returned by the InitializeOAuth Choreo and clicked "allow."
*/


var FinalizeOAuth = function(session) {
    /*
        Create a new instance of the FinalizeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Authentication/OAuth2/FinalizeOAuth"
    FinalizeOAuth.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FinalizeOAuthResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FinalizeOAuthInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FinalizeOAuth
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FinalizeOAuthInputSet = function() {
    FinalizeOAuthInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenEndpoint input for this Choreo. ((required, string) The URL for the authorization server that issues access tokens (e.g. https://accounts.google.com/o/oauth2/token).)
        */
        this.set_AccessTokenEndpoint = function(value) {
            this.setInput("AccessTokenEndpoint", value);
        }

        /*
        Set the value of the CallbackID input for this Choreo. ((required, string) The callback token returned by the InitializeOAuth Choreo. Used to retrieve the authorization code after the user authorizes.)
        */
        this.set_CallbackID = function(value) {
            this.setInput("CallbackID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by the service.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by the service.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Timeout input for this Choreo. ((optional, integer) The amount of time (in seconds) to poll your Temboo callback URL to see if your app's user has allowed or denied the request for access. Defaults to 20. Max is 60.)
        */
        this.set_Timeout = function(value) {
            this.setInput("Timeout", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FinalizeOAuth Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FinalizeOAuthResultSet = function(resultStream) {
    FinalizeOAuthResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the server.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FinalizeOAuth, choreography.Choreography);
util.inherits(FinalizeOAuthInputSet, choreography.InputSet);
util.inherits(FinalizeOAuthResultSet, choreography.ResultSet);
exports.FinalizeOAuth = FinalizeOAuth;


/*
    InitializeOAuth
    Generates an authorization URL that an application can use to complete the first step in the OAuth 2.0 process.
*/


var InitializeOAuth = function(session) {
    /*
        Create a new instance of the InitializeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Authentication/OAuth2/InitializeOAuth"
    InitializeOAuth.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InitializeOAuthResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InitializeOAuthInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InitializeOAuth
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InitializeOAuthInputSet = function() {
    InitializeOAuthInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by the service.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the CustomCallbackID input for this Choreo. ((optional, string) A unique identifier that you can pass to eliminate the need to wait for a Temboo-generated CallbackID. Callback identifiers may only contain numbers, letters, periods, and hyphens.)
        */
        this.set_CustomCallbackID = function(value) {
            this.setInput("CustomCallbackID", value);
        }

        /*
        Set the value of the ForwardingURL input for this Choreo. ((optional, string) The URL that Temboo will redirect your users to after they grant access to your application. This should include the "https://" or "http://" prefix and be a fully qualified URL.)
        */
        this.set_ForwardingURL = function(value) {
            this.setInput("ForwardingURL", value);
        }

        /*
        Set the value of the RequestTokenEndpoint input for this Choreo. ((required, string) The Authorization Server URL where the initial token request occurs (e.g. https://accounts.google.com/o/oauth2/auth).)
        */
        this.set_RequestTokenEndpoint = function(value) {
            this.setInput("RequestTokenEndpoint", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((conditional, string) The OAuth scope that should be associated with the access token being requested. This is not always required. Typically, you can specify multiple scopes separated by spaces, commas, or pipes.)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InitializeOAuth Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InitializeOAuthResultSet = function(resultStream) {
    InitializeOAuthResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AuthorizationURL" output from this Choreo execution. ((string) The authorization URL that the application's user needs to go to in order to grant access to your application.)
        */
        this.get_AuthorizationURL = function() {
            return this.getResult("AuthorizationURL");
        }
        /*
        Retrieve the value for the "CallbackID" output from this Choreo execution. ((string) An ID used to retrieve the callback data that Temboo stores once your application's user authorizes.)
        */
        this.get_CallbackID = function() {
            return this.getResult("CallbackID");
        }
}

util.inherits(InitializeOAuth, choreography.Choreography);
util.inherits(InitializeOAuthInputSet, choreography.InputSet);
util.inherits(InitializeOAuthResultSet, choreography.ResultSet);
exports.InitializeOAuth = InitializeOAuth;

