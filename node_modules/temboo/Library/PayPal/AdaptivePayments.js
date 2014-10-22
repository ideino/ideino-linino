
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ConvertCurrency
    Converts a payment amount from one currency to another.
*/


var ConvertCurrency = function(session) {
    /*
        Create a new instance of the ConvertCurrency Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/AdaptivePayments/ConvertCurrency"
    ConvertCurrency.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ConvertCurrencyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ConvertCurrencyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ConvertCurrency
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ConvertCurrencyInputSet = function() {
    ConvertCurrencyInputSet.super_.call(this);
        /*
        Set the value of the Amount input for this Choreo. ((required, decimal) The amount that should be converted to a new currency.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) Your PayPal AppID (or the default AppID for the PayPal sandbox).)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ConvertToCurrency input for this Choreo. ((required, string) The currency code that you want to convert to (i.e. GBP).)
        */
        this.set_ConvertToCurrency = function(value) {
            this.setInput("ConvertToCurrency", value);
        }

        /*
        Set the value of the CurrencyCode input for this Choreo. ((required, string) The currency code that you want to convert. (i.e. USD).)
        */
        this.set_CurrencyCode = function(value) {
            this.setInput("CurrencyCode", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((required, string) The API Signature provided by PayPal.)
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
        Set the value of the Username input for this Choreo. ((required, string) The API Username provided by PayPal.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ConvertCurrency Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ConvertCurrencyResultSet = function(resultStream) {
    ConvertCurrencyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ConvertCurrency, choreography.Choreography);
util.inherits(ConvertCurrencyInputSet, choreography.InputSet);
util.inherits(ConvertCurrencyResultSet, choreography.ResultSet);
exports.ConvertCurrency = ConvertCurrency;


/*
    PaymentDetails
    Retrieves information about a specific payment.
*/


var PaymentDetails = function(session) {
    /*
        Create a new instance of the PaymentDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/AdaptivePayments/PaymentDetails"
    PaymentDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PaymentDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PaymentDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PaymentDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PaymentDetailsInputSet = function() {
    PaymentDetailsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) Your PayPal AppID (or the default AppID for the PayPal sandbox).)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PayKey input for this Choreo. ((conditional, string) The pay key that identifies the payment for which you want to retrieve details. This is the pay key returned in the response of the Pay method.)
        */
        this.set_PayKey = function(value) {
            this.setInput("PayKey", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((required, string) The API Signature provided by PayPal.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the TrackingID input for this Choreo. ((optional, string) The tracking ID that was specified for this payment in the PayRequest message.)
        */
        this.set_TrackingID = function(value) {
            this.setInput("TrackingID", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((optional, string) The PayPal transaction ID associated with the payment. The Instant Payment Notification message associated with the payment contains the transaction ID.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UseSandbox input for this Choreo. ((optional, boolean) Set to 1 to indicate that you're testing against the PayPal sandbox instead of production. Set to 0 (the default) when moving to production.)
        */
        this.set_UseSandbox = function(value) {
            this.setInput("UseSandbox", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The API Username provided by PayPal.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PaymentDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PaymentDetailsResultSet = function(resultStream) {
    PaymentDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Amount" output from this Choreo execution. ((decimal) The payment amount.)
        */
        this.get_Amount = function() {
            return this.getResult("Amount");
        }
        /*
        Retrieve the value for the "CurrencyCode" output from this Choreo execution. ((string) The currency code for the payment.)
        */
        this.get_CurrencyCode = function() {
            return this.getResult("CurrencyCode");
        }
        /*
        Retrieve the value for the "TransactionStatus" output from this Choreo execution. ((string) The transaction status of the payment.)
        */
        this.get_TransactionStatus = function() {
            return this.getResult("TransactionStatus");
        }
        /*
        Retrieve the value for the "AccountID" output from this Choreo execution. ((string) The account id of the payment reciever.)
        */
        this.get_AccountID = function() {
            return this.getResult("AccountID");
        }
        /*
        Retrieve the value for the "Email" output from this Choreo execution. ((string) The receiver email address.)
        */
        this.get_Email = function() {
            return this.getResult("Email");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from PayPal.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Status" output from this Choreo execution. ((string) The status of the payment.)
        */
        this.get_Status = function() {
            return this.getResult("Status");
        }
}

util.inherits(PaymentDetails, choreography.Choreography);
util.inherits(PaymentDetailsInputSet, choreography.InputSet);
util.inherits(PaymentDetailsResultSet, choreography.ResultSet);
exports.PaymentDetails = PaymentDetails;

