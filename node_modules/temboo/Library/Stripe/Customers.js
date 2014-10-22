
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateCustomerWithToken
    Creates a new customer record using a Stripe generated token that represents the customer's credit card information.
*/


var CreateCustomerWithToken = function(session) {
    /*
        Create a new instance of the CreateCustomerWithToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Customers/CreateCustomerWithToken"
    CreateCustomerWithToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCustomerWithTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCustomerWithTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCustomerWithToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCustomerWithTokenInputSet = function() {
    CreateCustomerWithTokenInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccountBalance input for this Choreo. ((optional, integer) The amount in cents for the starting account balance. A negative amount represents a credit that will be used before charging the customer's card; a positive amount will be added to the next invoice.)
        */
        this.set_AccountBalance = function(value) {
            this.setInput("AccountBalance", value);
        }

        /*
        Set the value of the Coupon input for this Choreo. ((optional, string) If you provide a coupon code, it can be specified here)
        */
        this.set_Coupon = function(value) {
            this.setInput("Coupon", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) An arbitrary string of text that will be associated with the customer object)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The customer's email address)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Plan input for this Choreo. ((optional, string) The unique identifier of the plan to subscribe the customer to)
        */
        this.set_Plan = function(value) {
            this.setInput("Plan", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((optional, integer) The quantity you'd like to apply to the subscription you're creating. This parameter applies to the plan amount associated with the customer.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) The token associated with a set of credit card details)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the TrialEnd input for this Choreo. ((optional, date) Epoch timestamp in seconds for the end of the trial period. The customer won't be charged during the trial period. Timestamp should be in UTC.)
        */
        this.set_TrialEnd = function(value) {
            this.setInput("TrialEnd", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCustomerWithToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCustomerWithTokenResultSet = function(resultStream) {
    CreateCustomerWithTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateCustomerWithToken, choreography.Choreography);
util.inherits(CreateCustomerWithTokenInputSet, choreography.InputSet);
util.inherits(CreateCustomerWithTokenResultSet, choreography.ResultSet);
exports.CreateCustomerWithToken = CreateCustomerWithToken;


/*
    DeleteCustomer
    Deletes a specified customer record.
*/


var DeleteCustomer = function(session) {
    /*
        Create a new instance of the DeleteCustomer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Customers/DeleteCustomer"
    DeleteCustomer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCustomerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCustomerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCustomer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCustomerInputSet = function() {
    DeleteCustomerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer you want to delete)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteCustomer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCustomerResultSet = function(resultStream) {
    DeleteCustomerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteCustomer, choreography.Choreography);
util.inherits(DeleteCustomerInputSet, choreography.InputSet);
util.inherits(DeleteCustomerResultSet, choreography.ResultSet);
exports.DeleteCustomer = DeleteCustomer;


/*
    ListAllCustomers
    Returns a list of all customers. 
*/


var ListAllCustomers = function(session) {
    /*
        Create a new instance of the ListAllCustomers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Customers/ListAllCustomers"
    ListAllCustomers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllCustomersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllCustomersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllCustomers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllCustomersInputSet = function() {
    ListAllCustomersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The limit of customers to be returned. Can range from 1 to 100. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Stripe will return a list of customers starting at the specified offset. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllCustomers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllCustomersResultSet = function(resultStream) {
    ListAllCustomersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllCustomers, choreography.Choreography);
util.inherits(ListAllCustomersInputSet, choreography.InputSet);
util.inherits(ListAllCustomersResultSet, choreography.ResultSet);
exports.ListAllCustomers = ListAllCustomers;


/*
    RetrieveCustomer
    Retrieves the details of an existing customer record.
*/


var RetrieveCustomer = function(session) {
    /*
        Create a new instance of the RetrieveCustomer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Customers/RetrieveCustomer"
    RetrieveCustomer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCustomerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCustomerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCustomer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCustomerInputSet = function() {
    RetrieveCustomerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer you want to retrieve)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCustomer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCustomerResultSet = function(resultStream) {
    RetrieveCustomerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveCustomer, choreography.Choreography);
util.inherits(RetrieveCustomerInputSet, choreography.InputSet);
util.inherits(RetrieveCustomerResultSet, choreography.ResultSet);
exports.RetrieveCustomer = RetrieveCustomer;


/*
    UpdateCustomer
    Updates a specified customer record.
*/


var UpdateCustomer = function(session) {
    /*
        Create a new instance of the UpdateCustomer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Customers/UpdateCustomer"
    UpdateCustomer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCustomerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCustomerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCustomer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCustomerInputSet = function() {
    UpdateCustomerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccountBalance input for this Choreo. ((optional, integer) The amount in cents for the starting account balance. A negative amount represents a credit that will be used before charging the customer's card; a positive amount will be added to the next invoice.)
        */
        this.set_AccountBalance = function(value) {
            this.setInput("AccountBalance", value);
        }

        /*
        Set the value of the Coupon input for this Choreo. ((optional, string) If you provide a coupon code, it can be specified here)
        */
        this.set_Coupon = function(value) {
            this.setInput("Coupon", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer you want to update)
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

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The customer's email address)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((optional, string) The token associated with a set of credit card details.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCustomer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCustomerResultSet = function(resultStream) {
    UpdateCustomerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateCustomer, choreography.Choreography);
util.inherits(UpdateCustomerInputSet, choreography.InputSet);
util.inherits(UpdateCustomerResultSet, choreography.ResultSet);
exports.UpdateCustomer = UpdateCustomer;

