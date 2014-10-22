
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddressVerify
    Confirms whether a postal address and postal code match those of the specified PayPal account holder.
*/


var AddressVerify = function(session) {
    /*
        Create a new instance of the AddressVerify Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/AddressVerify"
    AddressVerify.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddressVerifyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddressVerifyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddressVerify
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddressVerifyInputSet = function() {
    AddressVerifyInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address of a PayPal member to verify.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((required, string) The postal code to verify.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((required, string) The API Signature provided by PayPal.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the Street input for this Choreo. ((required, string) The first line of the billing or shipping address to verify.)
        */
        this.set_Street = function(value) {
            this.setInput("Street", value);
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
A ResultSet with methods tailored to the values returned by the AddressVerify Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddressVerifyResultSet = function(resultStream) {
    AddressVerifyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddressVerify, choreography.Choreography);
util.inherits(AddressVerifyInputSet, choreography.InputSet);
util.inherits(AddressVerifyResultSet, choreography.ResultSet);
exports.AddressVerify = AddressVerify;


/*
    GetBalance
    Retrieves the available balance for a PayPal account.
*/


var GetBalance = function(session) {
    /*
        Create a new instance of the GetBalance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/GetBalance"
    GetBalance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBalanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBalanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBalance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBalanceInputSet = function() {
    GetBalanceInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetBalance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBalanceResultSet = function(resultStream) {
    GetBalanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBalance, choreography.Choreography);
util.inherits(GetBalanceInputSet, choreography.InputSet);
util.inherits(GetBalanceResultSet, choreography.ResultSet);
exports.GetBalance = GetBalance;


/*
    GetTransactionDetails
    Retrieves information about a specific transaction.
*/


var GetTransactionDetails = function(session) {
    /*
        Create a new instance of the GetTransactionDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/GetTransactionDetails"
    GetTransactionDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTransactionDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTransactionDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTransactionDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTransactionDetailsInputSet = function() {
    GetTransactionDetailsInputSet.super_.call(this);
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
        Set the value of the TransactionID input for this Choreo. ((required, string) The ID for the transaction you want to retrieve data for.)
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
A ResultSet with methods tailored to the values returned by the GetTransactionDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTransactionDetailsResultSet = function(resultStream) {
    GetTransactionDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTransactionDetails, choreography.Choreography);
util.inherits(GetTransactionDetailsInputSet, choreography.InputSet);
util.inherits(GetTransactionDetailsResultSet, choreography.ResultSet);
exports.GetTransactionDetails = GetTransactionDetails;


/*
    MakeIndividualPayment
    Retrieves the available balance for a PayPal account.
*/


var MakeIndividualPayment = function(session) {
    /*
        Create a new instance of the MakeIndividualPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/MakeIndividualPayment"
    MakeIndividualPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MakeIndividualPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MakeIndividualPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MakeIndividualPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MakeIndividualPaymentInputSet = function() {
    MakeIndividualPaymentInputSet.super_.call(this);
        /*
        Set the value of the CurrencyCode input for this Choreo. ((optional, string) The currency code associated with the PaymentAmount. Defaults to "USD".)
        */
        this.set_CurrencyCode = function(value) {
            this.setInput("CurrencyCode", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address used to identify the recipient of the payment.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the EmailSubject input for this Choreo. ((optional, string) The subject line of the email that PayPal sends when the transaction is completed. Character length and limitations: 255 single-byte alphanumeric characters.)
        */
        this.set_EmailSubject = function(value) {
            this.setInput("EmailSubject", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PaymentAmount input for this Choreo. ((required, decimal) The amount to be paid.)
        */
        this.set_PaymentAmount = function(value) {
            this.setInput("PaymentAmount", value);
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
A ResultSet with methods tailored to the values returned by the MakeIndividualPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MakeIndividualPaymentResultSet = function(resultStream) {
    MakeIndividualPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CorrelationId" output from this Choreo execution. ((string) A unique id returned by PayPal for this payment.)
        */
        this.get_CorrelationId = function() {
            return this.getResult("CorrelationId");
        }
        /*
        Retrieve the value for the "Timestamp" output from this Choreo execution. ((date) The timestamp associated with the payment request.)
        */
        this.get_Timestamp = function() {
            return this.getResult("Timestamp");
        }
        /*
        Retrieve the value for the "ErrorMessage" output from this Choreo execution. ((string) This will contain any error message returned by PayPal during this operation.)
        */
        this.get_ErrorMessage = function() {
            return this.getResult("ErrorMessage");
        }
        /*
        Retrieve the value for the "Acknowledged" output from this Choreo execution. ((string) Indicates the status of the request. Should contain "Sucess" or "Failure".)
        */
        this.get_Acknowledged = function() {
            return this.getResult("Acknowledged");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The full response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MakeIndividualPayment, choreography.Choreography);
util.inherits(MakeIndividualPaymentInputSet, choreography.InputSet);
util.inherits(MakeIndividualPaymentResultSet, choreography.ResultSet);
exports.MakeIndividualPayment = MakeIndividualPayment;


/*
    MassPayments
    Generates multiple payments from your PayPal Premier account or Business account to existing PayPal account holders.
*/


var MassPayments = function(session) {
    /*
        Create a new instance of the MassPayments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/MassPayments"
    MassPayments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MassPaymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MassPaymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MassPayments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MassPaymentsInputSet = function() {
    MassPaymentsInputSet.super_.call(this);
        /*
        Set the value of the InputFile input for this Choreo. ((required, any) An input file containing the payments to process. This data can either be in CSV or XML format. The format should be indicated using the InputFormat input. See Choreo documentation for schema details.)
        */
        this.set_InputFile = function(value) {
            this.setInput("InputFile", value);
        }

        /*
        Set the value of the EmailSubject input for this Choreo. ((optional, string) The subject line of the email that PayPal sends when the transaction is completed. This is the same for all recipients. Character length and limitations: 255 single-byte alphanumeric characters.)
        */
        this.set_EmailSubject = function(value) {
            this.setInput("EmailSubject", value);
        }

        /*
        Set the value of the InputFormat input for this Choreo. ((required, string) The type of input you are providing for this mass payment. Accepted values are "csv" or "xml". See Choreo documentation for expected schema details.)
        */
        this.set_InputFormat = function(value) {
            this.setInput("InputFormat", value);
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

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the vault file containing your payments in CSV or XML format. This can be used as an alternative to the InputFile input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the MassPayments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MassPaymentsResultSet = function(resultStream) {
    MassPaymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. (The MassPayment result from PayPal returned in the same format you've submitted.)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
}

util.inherits(MassPayments, choreography.Choreography);
util.inherits(MassPaymentsInputSet, choreography.InputSet);
util.inherits(MassPaymentsResultSet, choreography.ResultSet);
exports.MassPayments = MassPayments;


/*
    RefundTransaction
    Issue a refund to a PayPal buyer by specifying a transaction ID.
*/


var RefundTransaction = function(session) {
    /*
        Create a new instance of the RefundTransaction Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/RefundTransaction"
    RefundTransaction.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RefundTransactionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RefundTransactionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RefundTransaction
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RefundTransactionInputSet = function() {
    RefundTransactionInputSet.super_.call(this);
        /*
        Set the value of the Amount input for this Choreo. ((optional, decimal) Refund amount. Amount is required if RefundType is set to Partial. If RefundType is set to Full, leave input blank.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the CurrencyCode input for this Choreo. ((optional, string) A three-character currency code (i.e. USD). Required for partial refunds. Leave this field blank for full refunds. Defaults to USD.)
        */
        this.set_CurrencyCode = function(value) {
            this.setInput("CurrencyCode", value);
        }

        /*
        Set the value of the InvoiceID input for this Choreo. ((optional, string) Your own invoice or tracking number. Character length limitation is 127 alphanumeric characters.)
        */
        this.set_InvoiceID = function(value) {
            this.setInput("InvoiceID", value);
        }

        /*
        Set the value of the Note input for this Choreo. ((optional, string) Custom note about the refund. Character length limitation is 255 alphanumeric characters.)
        */
        this.set_Note = function(value) {
            this.setInput("Note", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RefundType input for this Choreo. ((required, string) The refund type must be set to Full or Partial.  This flag effects what values some other input variables should have. Defaults to Full.)
        */
        this.set_RefundType = function(value) {
            this.setInput("RefundType", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((required, string) The API Signature provided by PayPal.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((required, string) The ID for the transaction you want to retrieve data for.)
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
A ResultSet with methods tailored to the values returned by the RefundTransaction Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RefundTransactionResultSet = function(resultStream) {
    RefundTransactionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RefundTransaction, choreography.Choreography);
util.inherits(RefundTransactionInputSet, choreography.InputSet);
util.inherits(RefundTransactionResultSet, choreography.ResultSet);
exports.RefundTransaction = RefundTransaction;


/*
    TransactionSearch
    Retrieves transaction history for transactions that meet a specified criteria.
*/


var TransactionSearch = function(session) {
    /*
        Create a new instance of the TransactionSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PayPal/Merchant/TransactionSearch"
    TransactionSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TransactionSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TransactionSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TransactionSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TransactionSearchInputSet = function() {
    TransactionSearchInputSet.super_.call(this);
        /*
        Set the value of the Account input for this Choreo. ((optional, string) Search by credit card number.)
        */
        this.set_Account = function(value) {
            this.setInput("Account", value);
        }

        /*
        Set the value of the AuctionItemNumber input for this Choreo. ((optional, string) Search by auction item number of the purchased item.)
        */
        this.set_AuctionItemNumber = function(value) {
            this.setInput("AuctionItemNumber", value);
        }

        /*
        Set the value of the CurrencyCode input for this Choreo. ((optional, string) Search by currency code (i.e. USD).)
        */
        this.set_CurrencyCode = function(value) {
            this.setInput("CurrencyCode", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) Search by email.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) The latest transaction date to return. Must be an epoch timestamp in milliseconds or formatted in UTC like: 2011-05-19T00:00:00Z.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the InvoiceNumber input for this Choreo. ((optional, string) Search by invoice number.)
        */
        this.set_InvoiceNumber = function(value) {
            this.setInput("InvoiceNumber", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The API Password provided by PayPal.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ReceiptId input for this Choreo. ((optional, string) Search by the PayPal receipt ID.)
        */
        this.set_ReceiptId = function(value) {
            this.setInput("ReceiptId", value);
        }

        /*
        Set the value of the Receiver input for this Choreo. ((optional, string) Search by the email address of the receiver.)
        */
        this.set_Receiver = function(value) {
            this.setInput("Receiver", value);
        }

        /*
        Set the value of the Signature input for this Choreo. ((required, string) The API Signature provided by PayPal.)
        */
        this.set_Signature = function(value) {
            this.setInput("Signature", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) The earliest transaction date to return. Must be an epoch timestamp in milliseconds or formatted in UTC like: 2011-05-19T00:00:00Z.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TransactionAmount input for this Choreo. ((optional, decimal) Search by transaction amount.)
        */
        this.set_TransactionAmount = function(value) {
            this.setInput("TransactionAmount", value);
        }

        /*
        Set the value of the TransactionClass input for this Choreo. ((optional, string) Search by classification of transaction (i.e. All, Sent, Recieved, etc).)
        */
        this.set_TransactionClass = function(value) {
            this.setInput("TransactionClass", value);
        }

        /*
        Set the value of the TransactionId input for this Choreo. ((optional, string) Search by the transaction ID)
        */
        this.set_TransactionId = function(value) {
            this.setInput("TransactionId", value);
        }

        /*
        Set the value of the TransactionStatus input for this Choreo. ((optional, string) Search by transaction status (i.e. Pending, Processing, Success, Denied, Reversed).)
        */
        this.set_TransactionStatus = function(value) {
            this.setInput("TransactionStatus", value);
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
A ResultSet with methods tailored to the values returned by the TransactionSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TransactionSearchResultSet = function(resultStream) {
    TransactionSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Response from PayPal formatted in name/value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TransactionSearch, choreography.Choreography);
util.inherits(TransactionSearchInputSet, choreography.InputSet);
util.inherits(TransactionSearchResultSet, choreography.ResultSet);
exports.TransactionSearch = TransactionSearch;

