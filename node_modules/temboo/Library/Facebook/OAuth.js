
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FinalizeOAuth
    Completes the OAuth process by retrieving a Facebook access token for a user, after they have visited the authorization URL returned by the InitializeOAuth Choreo and clicked "allow."
*/


var FinalizeOAuth = function(session) {
    /*
        Create a new instance of the FinalizeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/OAuth/FinalizeOAuth"
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
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Facebook (AKA the Client ID).)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
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
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Facebook (AKA the Client Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the CallbackID input for this Choreo. ((required, string) The callback token returned by the InitializeOAuth Choreo. Used to retrieve the authorization code after the user authorizes.)
        */
        this.set_CallbackID = function(value) {
            this.setInput("CallbackID", value);
        }

        /*
        Set the value of the LongLivedToken input for this Choreo. ((optional, boolean) Set to 1 to automatically exchange the short-lived access token for a long-lived access token. Defaults to 0 (false).)
        */
        this.set_LongLivedToken = function(value) {
            this.setInput("LongLivedToken", value);
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
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((string) The access token for the user that has granted access to your application.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Expires" output from this Choreo execution. ((integer) The expiration time of the access_token retrieved.)
        */
        this.get_Expires = function() {
            return this.getResult("Expires");
        }
        /*
        Retrieve the value for the "ErrorMessage" output from this Choreo execution. ((string) If an error occurs during the redirect process, this output variable will contain the error message generated by Facebook.)
        */
        this.get_ErrorMessage = function() {
            return this.getResult("ErrorMessage");
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
    var location = "/Library/Facebook/OAuth/InitializeOAuth"
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
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Facebook (AKA the Client ID).)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
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
        Set the value of the Scope input for this Choreo. ((optional, string) A comma-separated list of permissions to request access for (i.e. user_birthday,read_stream). For more information see documentation.)
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
        Retrieve the value for the "CallbackID" output from this Choreo execution. ((string) An ID used to retrieve the callback data that Temboo stores once your application's user authorizes.)
        */
        this.get_CallbackID = function() {
            return this.getResult("CallbackID");
        }
        /*
        Retrieve the value for the "AuthorizationURL" output from this Choreo execution. ((string) The authorization URL to send your user to in order for them to grant access to your application.)
        */
        this.get_AuthorizationURL = function() {
            return this.getResult("AuthorizationURL");
        }
}

util.inherits(InitializeOAuth, choreography.Choreography);
util.inherits(InitializeOAuthInputSet, choreography.InputSet);
util.inherits(InitializeOAuthResultSet, choreography.ResultSet);
exports.InitializeOAuth = InitializeOAuth;

