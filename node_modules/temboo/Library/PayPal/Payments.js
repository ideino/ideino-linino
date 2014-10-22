
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AcceptPayPalPayment
    Creates a new PayPal payment which can then be approved and executed.
*/


var AcceptPayPalPayment = function(session) {
    /*
        Create a new instance of the AcceptPayPalPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/AcceptPayPalPayment"
    AcceptPayPalPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AcceptPayPalPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AcceptPayPalPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AcceptPayPalPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AcceptPayPalPaymentInputSet = function() {
    AcceptPayPalPaymentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved from PayPal. Required unless providing the ClientID and ClientSecret which can be used to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CancelURL input for this Choreo. ((required, string) URL to which the customer is returned if they do not approve the use of PayPal to pay you.)
        */
        this.set_CancelURL = function(value) {
            this.setInput("CancelURL", value);
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
        Set the value of the Currency input for this Choreo. ((required, string) The currency for the payment (i.e.  USD).)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description for this payment.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ReturnURL input for this Choreo. ((required, string) The URL to which the customer's browser is returned after choosing to pay with PayPal.)
        */
        this.set_ReturnURL = function(value) {
            this.setInput("ReturnURL", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) A space delimited list of resource URL endpoints that the token should have access for. This is only used when providing the ClientID and Client Secret in order to generate a new access token.)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the Total input for this Choreo. ((required, decimal) The total of the payment.)
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
A ResultSet with methods tailored to the values returned by the AcceptPayPalPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AcceptPayPalPaymentResultSet = function(resultStream) {
    AcceptPayPalPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PaymentID" output from this Choreo execution. ((string) The id of the payment that was created. This is used to execute the payment after the buyer has approved.)
        */
        this.get_PaymentID = function() {
            return this.getResult("PaymentID");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "ApprovalURL" output from this Choreo execution. ((string) The approval url that the application should redirect the user to in order to approve the payment.)
        */
        this.get_ApprovalURL = function() {
            return this.getResult("ApprovalURL");
        }
}

util.inherits(AcceptPayPalPayment, choreography.Choreography);
util.inherits(AcceptPayPalPaymentInputSet, choreography.InputSet);
util.inherits(AcceptPayPalPaymentResultSet, choreography.ResultSet);
exports.AcceptPayPalPayment = AcceptPayPalPayment;


/*
    ExecutePayment
    Executes a PayPal payment that has been accepted and approved.
*/


var ExecutePayment = function(session) {
    /*
        Create a new instance of the ExecutePayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/ExecutePayment"
    ExecutePayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ExecutePaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ExecutePaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ExecutePayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ExecutePaymentInputSet = function() {
    ExecutePaymentInputSet.super_.call(this);
        /*
        Set the value of the PayerID input for this Choreo. ((required, string) The id of the user who is making a payment.)
        */
        this.set_PayerID = function(value) {
            this.setInput("PayerID", value);
        }

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
        Set the value of the PaymentID input for this Choreo. ((required, string) The id of the payment to execute.)
        */
        this.set_PaymentID = function(value) {
            this.setInput("PaymentID", value);
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
A ResultSet with methods tailored to the values returned by the ExecutePayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ExecutePaymentResultSet = function(resultStream) {
    ExecutePaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SaleID" output from this Choreo execution. ((string) The id of the sale that was just executed. This can be used to Lookup the sales transaction if needed.)
        */
        this.get_SaleID = function() {
            return this.getResult("SaleID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(ExecutePayment, choreography.Choreography);
util.inherits(ExecutePaymentInputSet, choreography.InputSet);
util.inherits(ExecutePaymentResultSet, choreography.ResultSet);
exports.ExecutePayment = ExecutePayment;


/*
    ListPayments
    Retrieves a list of payments.
*/


var ListPayments = function(session) {
    /*
        Create a new instance of the ListPayments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/ListPayments"
    ListPayments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPaymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPaymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPayments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPaymentsInputSet = function() {
    ListPaymentsInputSet.super_.call(this);
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
        Set the value of the Count input for this Choreo. ((optional, integer) Number of items to return. Default is 10 with a maximum value of 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Scope input for this Choreo. ((optional, string) A space delimited list of resource URL endpoints that the token should have access for. This is only used when providing the ClientID and Client Secret in order to generate a new access token.)
        */
        this.set_Scope = function(value) {
            this.setInput("Scope", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The field to sort results by. Valid values are: create_time and update_time.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) The sort order of the results. Valid values are asc and desc (the default).)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartID input for this Choreo. ((optional, string) The resource ID that indicates the starting resource to return. When results are paged, you can use the next_id response value as the StartID to continue with the next set of results.)
        */
        this.set_StartID = function(value) {
            this.setInput("StartID", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The start index of the resources to be returned. Used to jump to a specific position in the results.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPayments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPaymentsResultSet = function(resultStream) {
    ListPaymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(ListPayments, choreography.Choreography);
util.inherits(ListPaymentsInputSet, choreography.InputSet);
util.inherits(ListPaymentsResultSet, choreography.ResultSet);
exports.ListPayments = ListPayments;


/*
    LookupPayment
    Retrieves a specific payment resource by ID.
*/


var LookupPayment = function(session) {
    /*
        Create a new instance of the LookupPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/LookupPayment"
    LookupPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupPaymentInputSet = function() {
    LookupPaymentInputSet.super_.call(this);
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
        Set the value of the PaymentID input for this Choreo. ((required, string) The id of the payment to retrieve.)
        */
        this.set_PaymentID = function(value) {
            this.setInput("PaymentID", value);
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
A ResultSet with methods tailored to the values returned by the LookupPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupPaymentResultSet = function(resultStream) {
    LookupPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "PaymentState" output from this Choreo execution. ((string) The state of the payment.)
        */
        this.get_PaymentState = function() {
            return this.getResult("PaymentState");
        }
        /*
        Retrieve the value for the "SaleState" output from this Choreo execution. ((string) The state of the sale.)
        */
        this.get_SaleState = function() {
            return this.getResult("SaleState");
        }
        /*
        Retrieve the value for the "Currency" output from this Choreo execution. ((string) The payment currency.)
        */
        this.get_Currency = function() {
            return this.getResult("Currency");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) The new access token retrieved from PayPal when providing the Client ID and Client Secret.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Total" output from this Choreo execution. ((decimal) The total amount of the payment.)
        */
        this.get_Total = function() {
            return this.getResult("Total");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LookupPayment, choreography.Choreography);
util.inherits(LookupPaymentInputSet, choreography.InputSet);
util.inherits(LookupPaymentResultSet, choreography.ResultSet);
exports.LookupPayment = LookupPayment;


/*
    VerifyAllPayments
    Verifies that a payment has been successfully completed.
*/


var VerifyAllPayments = function(session) {
    /*
        Create a new instance of the VerifyAllPayments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/VerifyAllPayments"
    VerifyAllPayments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VerifyAllPaymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VerifyAllPaymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VerifyAllPayments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VerifyAllPaymentsInputSet = function() {
    VerifyAllPaymentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved from PayPal. Required unless providing the ClientID and ClientSecret which can be used to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) Your PayPal AppID (or the default AppID for the PayPal sandbox: APP-80W284485P519543T). This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by PayPal. This is used to authenticate PayPal's REST API.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by PayPal. This is used to authenticate PayPal's REST API.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, string) The API Password provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProofOfPayment input for this Choreo. ((required, json) The proof of payment received from the client SDK. This can be a proof of payment received from the Adaptive Payment API or the REST API.)
        */
        this.set_ProofOfPayment = function(value) {
            this.setInput("ProofOfPayment", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((conditional, string) The API Signature provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) The API Username provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VerifyAllPayments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VerifyAllPaymentsResultSet = function(resultStream) {
    VerifyAllPaymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "VerificationStatus" output from this Choreo execution. ((string) The status of the payment verification. This will set to either "verified" or "unverified" depending on the status of the payment details.)
        */
        this.get_VerificationStatus = function() {
            return this.getResult("VerificationStatus");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal. This includes the full response from retrieving payment details from either the AdaptivePayments API or the Rest API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "FailureDescription" output from this Choreo execution. ((json) When the payment details indicate that the payment status is not complete, this will contain a JSON dictionary of payment status descriptions.)
        */
        this.get_FailureDescription = function() {
            return this.getResult("FailureDescription");
        }
}

util.inherits(VerifyAllPayments, choreography.Choreography);
util.inherits(VerifyAllPaymentsInputSet, choreography.InputSet);
util.inherits(VerifyAllPaymentsResultSet, choreography.ResultSet);
exports.VerifyAllPayments = VerifyAllPayments;


/*
    VerifyCreditCardPayment
    Verifies that a credit card payment from the PayPal REST API has been completed successfully.
*/


var VerifyCreditCardPayment = function(session) {
    /*
        Create a new instance of the VerifyCreditCardPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/VerifyCreditCardPayment"
    VerifyCreditCardPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VerifyCreditCardPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VerifyCreditCardPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VerifyCreditCardPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VerifyCreditCardPaymentInputSet = function() {
    VerifyCreditCardPaymentInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved from PayPal. Required unless providing the ClientID and ClientSecret which can be used to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by PayPal. This is used to authenticate PayPal's REST API.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by PayPal. This is used to authenticate PayPal's REST API.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the ProofOfPayment input for this Choreo. ((conditional, json) The proof of payment received from the client SDK. This can be a proof of payment received from the Adaptive Payment API or the REST API.)
        */
        this.set_ProofOfPayment = function(value) {
            this.setInput("ProofOfPayment", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VerifyCreditCardPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VerifyCreditCardPaymentResultSet = function(resultStream) {
    VerifyCreditCardPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FailureDescription" output from this Choreo execution. ((json) When the payment details indicate that the payment status is not complete, this will contain a JSON dictionary of payment status descriptions.)
        */
        this.get_FailureDescription = function() {
            return this.getResult("FailureDescription");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal. This includes the full response from retrieving payment details from the Rest API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "VerificationStatus" output from this Choreo execution. ((string) The status of the payment verification. This will set to either "verified" or "unverified" depending on the status of the payment details.)
        */
        this.get_VerificationStatus = function() {
            return this.getResult("VerificationStatus");
        }
}

util.inherits(VerifyCreditCardPayment, choreography.Choreography);
util.inherits(VerifyCreditCardPaymentInputSet, choreography.InputSet);
util.inherits(VerifyCreditCardPaymentResultSet, choreography.ResultSet);
exports.VerifyCreditCardPayment = VerifyCreditCardPayment;


/*
    VerifyPayPalPayment
    Verifies that a PayPal payment from the Adaptive Payments API has been successfully completed.
*/


var VerifyPayPalPayment = function(session) {
    /*
        Create a new instance of the VerifyPayPalPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Payments/VerifyPayPalPayment"
    VerifyPayPalPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VerifyPayPalPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VerifyPayPalPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VerifyPayPalPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VerifyPayPalPaymentInputSet = function() {
    VerifyPayPalPaymentInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) Your PayPal AppID (or the default AppID for the PayPal sandbox: APP-80W284485P519543T). This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, string) The API Password provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProofOfPayment input for this Choreo. ((required, json) The proof of payment received from the client SDK. This can be a proof of payment received from the Adaptive Payment API or the REST API.)
        */
        this.set_ProofOfPayment = function(value) {
            this.setInput("ProofOfPayment", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((conditional, string) The API Signature provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) The API Username provided by PayPal. This is used to authenticate PayPal's Adaptive Payments API.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VerifyPayPalPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VerifyPayPalPaymentResultSet = function(resultStream) {
    VerifyPayPalPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FailureDescription" output from this Choreo execution. ((json) When the payment details indicate that the payment status is not complete, this will contain a JSON dictionary of payment status descriptions.)
        */
        this.get_FailureDescription = function() {
            return this.getResult("FailureDescription");
        }
        /*
        Retrieve the value for the "VerificationStatus" output from this Choreo execution. ((string) The status of the payment verification. This will set to either "verified" or "unverified" depending on the status of the payment details.)
        */
        this.get_VerificationStatus = function() {
            return this.getResult("VerificationStatus");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal. This includes the full response from retrieving payment details from the AdaptivePayments API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VerifyPayPalPayment, choreography.Choreography);
util.inherits(VerifyPayPalPaymentInputSet, choreography.InputSet);
util.inherits(VerifyPayPalPaymentResultSet, choreography.ResultSet);
exports.VerifyPayPalPayment = VerifyPayPalPayment;

