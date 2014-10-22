
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    LookupSale
    Retrieves details about a sale transaction.
*/


var LookupSale = function(session) {
    /*
        Create a new instance of the LookupSale Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/SaleTransactions/LookupSale"
    LookupSale.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupSaleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupSaleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupSale
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupSaleInputSet = function() {
    LookupSaleInputSet.super_.call(this);
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
        Set the value of the SaleID input for this Choreo. ((required, string) The id of the sale to retrieve.)
        */
        this.set_SaleID = function(value) {
            this.setInput("SaleID", value);
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
A ResultSet with methods tailored to the values returned by the LookupSale Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupSaleResultSet = function(resultStream) {
    LookupSaleResultSet.super_.call(this, resultStream);    
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

util.inherits(LookupSale, choreography.Choreography);
util.inherits(LookupSaleInputSet, choreography.InputSet);
util.inherits(LookupSaleResultSet, choreography.ResultSet);
exports.LookupSale = LookupSale;


/*
    RefundSale
    Allows your application to refund a completed payment.
*/


var RefundSale = function(session) {
    /*
        Create a new instance of the RefundSale Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/SaleTransactions/RefundSale"
    RefundSale.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RefundSaleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RefundSaleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RefundSale
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RefundSaleInputSet = function() {
    RefundSaleInputSet.super_.call(this);
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
        Set the value of the Currency input for this Choreo. ((required, string) The currency associated with the sale (i.e. USD).)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the SaleID input for this Choreo. ((required, string) The id of the sale to retrieve.)
        */
        this.set_SaleID = function(value) {
            this.setInput("SaleID", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) A space delimited list of resource URL endpoints that the token should have access for. This is only used when providing the ClientID and Client Secret in order to generate a new access token.)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the Total input for this Choreo. ((required, decimal) The total amount to refund.)
        */
        this.set_Total = function(value) {
            this.setInput("Total", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RefundSale Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RefundSaleResultSet = function(resultStream) {
    RefundSaleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "RefundID" output from this Choreo execution. ((string) The id of the refund. This can be used to lookup the refund later if needed.)
        */
        this.get_RefundID = function() {
            return this.getResult("RefundID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RefundSale, choreography.Choreography);
util.inherits(RefundSaleInputSet, choreography.InputSet);
util.inherits(RefundSaleResultSet, choreography.ResultSet);
exports.RefundSale = RefundSale;

