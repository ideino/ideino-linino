
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateNewChargeForExistingCustomer
    Creates a new charge object in order to charge a credit card for an existing customer.
*/


var CreateNewChargeForExistingCustomer = function(session) {
    /*
        Create a new instance of the CreateNewChargeForExistingCustomer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Charges/CreateNewChargeForExistingCustomer"
    CreateNewChargeForExistingCustomer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateNewChargeForExistingCustomerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateNewChargeForExistingCustomerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateNewChargeForExistingCustomer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateNewChargeForExistingCustomerInputSet = function() {
    CreateNewChargeForExistingCustomerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The amount to charge a customer in cents)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((optional, string) 3-letter ISO code for currency. Defaults to 'usd' which is currently the only supported currency.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The id for the customer to charge)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) An arbitrary string of text that will be associated with the charge as a description)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateNewChargeForExistingCustomer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateNewChargeForExistingCustomerResultSet = function(resultStream) {
    CreateNewChargeForExistingCustomerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateNewChargeForExistingCustomer, choreography.Choreography);
util.inherits(CreateNewChargeForExistingCustomerInputSet, choreography.InputSet);
util.inherits(CreateNewChargeForExistingCustomerResultSet, choreography.ResultSet);
exports.CreateNewChargeForExistingCustomer = CreateNewChargeForExistingCustomer;


/*
    CreateNewChargeWithToken
    Charges a credit card by creating a new charge object using a card token that is associated with the credit card details.
*/


var CreateNewChargeWithToken = function(session) {
    /*
        Create a new instance of the CreateNewChargeWithToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Charges/CreateNewChargeWithToken"
    CreateNewChargeWithToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateNewChargeWithTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateNewChargeWithTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateNewChargeWithToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateNewChargeWithTokenInputSet = function() {
    CreateNewChargeWithTokenInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The amount to charge a customer in cents)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((optional, string) 3-letter ISO code for currency. Defaults to 'usd' which is currently the only supported currency.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) An arbitrary string of text that will be associated with the charge as a description)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The token associated with a set of credit card details.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateNewChargeWithToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateNewChargeWithTokenResultSet = function(resultStream) {
    CreateNewChargeWithTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateNewChargeWithToken, choreography.Choreography);
util.inherits(CreateNewChargeWithTokenInputSet, choreography.InputSet);
util.inherits(CreateNewChargeWithTokenResultSet, choreography.ResultSet);
exports.CreateNewChargeWithToken = CreateNewChargeWithToken;


/*
    ListAllCharges
    Returns a list of all charges or a list of charges for a specified customer.
*/


var ListAllCharges = function(session) {
    /*
        Create a new instance of the ListAllCharges Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Charges/ListAllCharges"
    ListAllCharges.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllChargesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllChargesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllCharges
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllChargesInputSet = function() {
    ListAllChargesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The limit of charges to be returned. Can range from 1 to 100. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((optional, string) The unique identifier of the customer whose charges to return. If not specified, all charges will be returned.)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Stripe will return a list of charges starting at the specified offset. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllCharges Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllChargesResultSet = function(resultStream) {
    ListAllChargesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllCharges, choreography.Choreography);
util.inherits(ListAllChargesInputSet, choreography.InputSet);
util.inherits(ListAllChargesResultSet, choreography.ResultSet);
exports.ListAllCharges = ListAllCharges;


/*
    RefundCharge
    Issues a refund of an existing credit card charge.
*/


var RefundCharge = function(session) {
    /*
        Create a new instance of the RefundCharge Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Charges/RefundCharge"
    RefundCharge.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RefundChargeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RefundChargeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RefundCharge
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RefundChargeInputSet = function() {
    RefundChargeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((optional, integer) The amount to refund to the customer in cents. When left empty, the entire charge is refunded.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the ChargeID input for this Choreo. ((required, string) The unique identifier of the charge to be refunded)
        */
        this.set_ChargeID = function(value) {
            this.setInput("ChargeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RefundCharge Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RefundChargeResultSet = function(resultStream) {
    RefundChargeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RefundCharge, choreography.Choreography);
util.inherits(RefundChargeInputSet, choreography.InputSet);
util.inherits(RefundChargeResultSet, choreography.ResultSet);
exports.RefundCharge = RefundCharge;


/*
    RetrieveCharge
    Retrieves the details of an existing charge.
*/


var RetrieveCharge = function(session) {
    /*
        Create a new instance of the RetrieveCharge Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Charges/RetrieveCharge"
    RetrieveCharge.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveChargeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveChargeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCharge
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveChargeInputSet = function() {
    RetrieveChargeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ChargeID input for this Choreo. ((required, string) The unique identifier of the charge you want to retrieve)
        */
        this.set_ChargeID = function(value) {
            this.setInput("ChargeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCharge Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveChargeResultSet = function(resultStream) {
    RetrieveChargeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveCharge, choreography.Choreography);
util.inherits(RetrieveChargeInputSet, choreography.InputSet);
util.inherits(RetrieveChargeResultSet, choreography.ResultSet);
exports.RetrieveCharge = RetrieveCharge;

