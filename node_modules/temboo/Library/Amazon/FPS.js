
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetAccountActivity
    Returns account transactions from a specified start date.
*/


var GetAccountActivity = function(session) {
    /*
        Create a new instance of the GetAccountActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/FPS/GetAccountActivity"
    GetAccountActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountActivityInputSet = function() {
    GetAccountActivityInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) The endpoint should be fps.sandbox.amazonaws.com when accessing the sandbox. Defaults to production setting:  fps.amazonaws.com.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) The first date of transactions to return (epoch timestamp in milliseconds or formatted like 2009-10-07Z).)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountActivityResultSet = function(resultStream) {
    GetAccountActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountActivity, choreography.Choreography);
util.inherits(GetAccountActivityInputSet, choreography.InputSet);
util.inherits(GetAccountActivityResultSet, choreography.ResultSet);
exports.GetAccountActivity = GetAccountActivity;


/*
    GetAccountBalance
    Retrieves the current balance of your account.
*/


var GetAccountBalance = function(session) {
    /*
        Create a new instance of the GetAccountBalance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/FPS/GetAccountBalance"
    GetAccountBalance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountBalanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountBalanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountBalance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountBalanceInputSet = function() {
    GetAccountBalanceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) The endpoint should be fps.sandbox.amazonaws.com when accessing the sandbox. Defaults to production setting:  fps.amazonaws.com.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountBalance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountBalanceResultSet = function(resultStream) {
    GetAccountBalanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountBalance, choreography.Choreography);
util.inherits(GetAccountBalanceInputSet, choreography.InputSet);
util.inherits(GetAccountBalanceResultSet, choreography.ResultSet);
exports.GetAccountBalance = GetAccountBalance;


/*
    GetTransaction
    Returns transactions for a specified subscription id.
*/


var GetTransaction = function(session) {
    /*
        Create a new instance of the GetTransaction Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/FPS/GetTransaction"
    GetTransaction.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTransactionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTransactionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTransaction
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTransactionInputSet = function() {
    GetTransactionInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) The endpoint should be fps.sandbox.amazonaws.com when accessing the sandbox. Defaults to production setting:  fps.amazonaws.com.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the SubscriptionId input for this Choreo. ((required, string) The ID for the subscription to retrieve the transactions for.)
        */
        this.set_SubscriptionId = function(value) {
            this.setInput("SubscriptionId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTransaction Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTransactionResultSet = function(resultStream) {
    GetTransactionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTransaction, choreography.Choreography);
util.inherits(GetTransactionInputSet, choreography.InputSet);
util.inherits(GetTransactionResultSet, choreography.ResultSet);
exports.GetTransaction = GetTransaction;


/*
    GetTransactionStatus
    Retrieves the status of a specified transaction.
*/


var GetTransactionStatus = function(session) {
    /*
        Create a new instance of the GetTransactionStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/FPS/GetTransactionStatus"
    GetTransactionStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTransactionStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTransactionStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTransactionStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTransactionStatusInputSet = function() {
    GetTransactionStatusInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) The endpoint should be fps.sandbox.amazonaws.com when accessing the sandbox. Defaults to production setting:  fps.amazonaws.com.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TransactionId input for this Choreo. ((required, string) The ID for the transaction status you want to retrieve.)
        */
        this.set_TransactionId = function(value) {
            this.setInput("TransactionId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTransactionStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTransactionStatusResultSet = function(resultStream) {
    GetTransactionStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTransactionStatus, choreography.Choreography);
util.inherits(GetTransactionStatusInputSet, choreography.InputSet);
util.inherits(GetTransactionStatusResultSet, choreography.ResultSet);
exports.GetTransactionStatus = GetTransactionStatus;

