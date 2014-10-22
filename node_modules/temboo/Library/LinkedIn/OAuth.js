
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FinalizeOAuth
    Completes the OAuth process by retrieving a LinkedIn access token and access token secret for a user, after they have visited the authorization URL returned by the InitializeOAuth choreo and clicked "allow."
*/


var FinalizeOAuth = function(session) {
    /*
        Create a new instance of the FinalizeOAuth Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/OAuth/FinalizeOAuth"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CallbackID input for this Choreo. ((required, string) The callback token returned by the InitializeOAuth Choreo. Used to retrieve the callback data after the user authorizes.)
        */
        this.set_CallbackID = function(value) {
            this.setInput("CallbackID", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuthTokenSecret returned by the InitializeOAuth Choreo.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
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
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((string) The Access Token retrieved during the OAuth process.)
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
        Retrieve the value for the "AccessTokenSecret" output from this Choreo execution. ((string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.get_AccessTokenSecret = function() {
            return this.getResult("AccessTokenSecret");
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
    var location = "/Library/LinkedIn/OAuth/InitializeOAuth"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ForwardingURL input for this Choreo. ((optional, string) The URL that Temboo will redirect your users to after they grant access to your application. This should include the "https://" or "http://" prefix and be a fully qualified URL.)
        */
        this.set_ForwardingURL = function(value) {
            this.setInput("ForwardingURL", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) Used to specify a list of member permissions that you need. If blank, defaults to r_basicprofile. Specify multiple scopes by adding a space between different parameters. Ex: "r_fullprofile r_network".)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
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
        Retrieve the value for the "OAuthTokenSecret" output from this Choreo execution. ((string) The temporary OAuth Token Secret that can be exchanged for a final token secret using the FinalizeOAuth Choreo.)
        */
        this.get_OAuthTokenSecret = function() {
            return this.getResult("OAuthTokenSecret");
        }
        /*
        Retrieve the value for the "AuthorizationURL" output from this Choreo execution. ((string) The authorization URL that the application's user needs to go to in order to grant access to your application.)
        */
        this.get_AuthorizationURL = function() {
            return this.getResult("AuthorizationURL");
        }
}

util.inherits(InitializeOAuth, choreography.Choreography);
util.inherits(InitializeOAuthInputSet, choreography.InputSet);
util.inherits(InitializeOAuthResultSet, choreography.ResultSet);
exports.InitializeOAuth = InitializeOAuth;

