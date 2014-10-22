
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    LookupRefund
    Retrieves details about a specific refund.
*/


var LookupRefund = function(session) {
    /*
        Create a new instance of the LookupRefund Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Refunds/LookupRefund"
    LookupRefund.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupRefundResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupRefundInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupRefund
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupRefundInputSet = function() {
    LookupRefundInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved from PayPal. Required unless providing the ClientID and ClientSecret which can be used to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by PayPal. Required unless a valid Access Token is provided.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by PayPal. Required unless a valid Access Token is provided.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefundID input for this Choreo. ((required, string) The id of the refund to retrieve.)
        */
        this.set_RefundID = function(value) {
            this.setInput("RefundID", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) A space delimited list of resource URL endpoints that the token should have access for. This is only used when providing the ClientID and Client Secret in order to generate a new access token.)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LookupRefund Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupRefundResultSet = function(resultStream) {
    LookupRefundResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LookupRefund, choreography.Choreography);
util.inherits(LookupRefundInputSet, choreography.InputSet);
util.inherits(LookupRefundResultSet, choreography.ResultSet);
exports.LookupRefund = LookupRefund;

