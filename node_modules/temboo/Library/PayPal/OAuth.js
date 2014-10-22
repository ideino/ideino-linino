
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetAccessToken
    Retrieves an Access Token from PayPal.
*/


var GetAccessToken = function(session) {
    /*
        Create a new instance of the GetAccessToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/OAuth/GetAccessToken"
    GetAccessToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccessTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccessTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccessToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccessTokenInputSet = function() {
    GetAccessTokenInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by PayPal.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by PayPal.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) A space delimited list of resource URL endpoints that the token should have access for (i.e. https://api.paypal.com/v1/payments/.*).)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Defaults to 0.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccessToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccessTokenResultSet = function(resultStream) {
    GetAccessTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((string) The access token retrieved from PayPal.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Expires" output from this Choreo execution. ((integer) The expiration time of the access token retrieved.)
        */
        this.get_Expires = function() {
            return this.getResult("Expires");
        }
}

util.inherits(GetAccessToken, choreography.Choreography);
util.inherits(GetAccessTokenInputSet, choreography.InputSet);
util.inherits(GetAccessTokenResultSet, choreography.ResultSet);
exports.GetAccessToken = GetAccessToken;

