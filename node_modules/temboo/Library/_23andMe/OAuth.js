
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FinalizeOAuth
    Completes the OAuth process by retrieving a 23andMe access token, refresh token, and expiration time for the access token, after they have visited the authorization URL returned by the InitializeOAuth choreo and clicked "allow."
*/


var FinalizeOAuth = function(session) {
    /*
        Create a new instance of the FinalizeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/OAuth/FinalizeOAuth"
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
        Set the value of the AccountName input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the AppKeyName input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AppKeyName = function(value) {
            this.setInput("AppKeyName", value);
        }

        /*
        Set the value of the AppKeyValue input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AppKeyValue = function(value) {
            this.setInput("AppKeyValue", value);
        }

        /*
        Set the value of the CallbackID input for this Choreo. ((required, string) The callback token returned by the InitializeOAuth Choreo. Used to retrieve the authorization code after the user authorizes.)
        */
        this.set_CallbackID = function(value) {
            this.setInput("CallbackID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by 23andMe.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by 23andMe.)
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
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((string) The Access Token for the user that has granted access to your application.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Expires" output from this Choreo execution. ((integer) The expiration time in seconds of the access token retrieved.)
        */
        this.get_Expires = function() {
            return this.getResult("Expires");
        }
        /*
        Retrieve the value for the "RefreshToken" output from this Choreo execution. ((string) A valid refresh token used to generate a new access token.)
        */
        this.get_RefreshToken = function() {
            return this.getResult("RefreshToken");
        }
}

util.inherits(FinalizeOAuth, choreography.Choreography);
util.inherits(FinalizeOAuthInputSet, choreography.InputSet);
util.inherits(FinalizeOAuthResultSet, choreography.ResultSet);
exports.FinalizeOAuth = FinalizeOAuth;


/*
    InitializeOAuth
    Generates an authorization URL that an application can use to complete the first step in the OAuth process.
*/


var InitializeOAuth = function(session) {
    /*
        Create a new instance of the InitializeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/OAuth/InitializeOAuth"
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
        Set the value of the AccountName input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the AppKeyName input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AppKeyName = function(value) {
            this.setInput("AppKeyName", value);
        }

        /*
        Set the value of the AppKeyValue input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_AppKeyValue = function(value) {
            this.setInput("AppKeyValue", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by 23andMe after registering your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the CustomCallbackID input for this Choreo. ((optional, string) A unique identifier that you can pass to eliminate the need to wait for a Temboo generated CallbackID. Callback identifiers may only contain numbers, letters, periods, and hyphens.)
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
        Set the value of the Scope input for this Choreo. ((required, string) A space-delimited list of scopes in your requests to access certain user data. Ex: "basic names ancestry". See note in Description below for full list and link to more documentation.)
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
        Retrieve the value for the "AuthorizationURL" output from this Choreo execution. ((string) The authorization URL that the user needs to go to in order to grant access to your application.)
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


/*
    RefreshToken
    Returns the latest access token with a given valid refresh token.
*/


var RefreshToken = function(session) {
    /*
        Create a new instance of the RefreshToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/OAuth/RefreshToken"
    RefreshToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RefreshTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RefreshTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RefreshToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RefreshTokenInputSet = function() {
    RefreshTokenInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by 23andMe.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by 23andMe.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) A valid refresh token used to generate a new access token.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RefreshToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RefreshTokenResultSet = function(resultStream) {
    RefreshTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewRefreshToken" output from this Choreo execution. ((string) The new refresh token which can be used the next time your app needs to get a new access token.)
        */
        this.get_NewRefreshToken = function() {
            return this.getResult("NewRefreshToken");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((string) The Access Token for the user that has granted access to your application.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Expires" output from this Choreo execution. ((integer) The expiration time in seconds of the Access Token.)
        */
        this.get_Expires = function() {
            return this.getResult("Expires");
        }
}

util.inherits(RefreshToken, choreography.Choreography);
util.inherits(RefreshTokenInputSet, choreography.InputSet);
util.inherits(RefreshTokenResultSet, choreography.ResultSet);
exports.RefreshToken = RefreshToken;

