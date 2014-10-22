
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateInvoice
    Creates a new invoice for a customer.
*/


var CreateInvoice = function(session) {
    /*
        Create a new instance of the CreateInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/CreateInvoice"
    CreateInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateInvoiceInputSet = function() {
    CreateInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The id of the customer to create an invoice for.)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateInvoiceResultSet = function(resultStream) {
    CreateInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateInvoice, choreography.Choreography);
util.inherits(CreateInvoiceInputSet, choreography.InputSet);
util.inherits(CreateInvoiceResultSet, choreography.ResultSet);
exports.CreateInvoice = CreateInvoice;


/*
    ListAllInvoices
    Returns a list of all invoices or a list of invoices for a specified customer.
*/


var ListAllInvoices = function(session) {
    /*
        Create a new instance of the ListAllInvoices Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/ListAllInvoices"
    ListAllInvoices.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllInvoicesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInvoicesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllInvoices
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInvoicesInputSet = function() {
    ListAllInvoicesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The limit of invoices to be returned. Can range from 1 to 100. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((optional, string) The unique identifier of the customer whose invoice to return. If not specified, all invoices will be returned.)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Stripe will return a list of invoices starting at the specified offset. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllInvoices Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllInvoicesResultSet = function(resultStream) {
    ListAllInvoicesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllInvoices, choreography.Choreography);
util.inherits(ListAllInvoicesInputSet, choreography.InputSet);
util.inherits(ListAllInvoicesResultSet, choreography.ResultSet);
exports.ListAllInvoices = ListAllInvoices;


/*
    PayInvoice
    Allows your application to attempt to collect payment on an invoice outside of the normal recurring payment schedule.
*/


var PayInvoice = function(session) {
    /*
        Create a new instance of the PayInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/PayInvoice"
    PayInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PayInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PayInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PayInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PayInvoiceInputSet = function() {
    PayInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the InvoiceID input for this Choreo. ((required, string) The id of the invoice to pay.)
        */
        this.set_InvoiceID = function(value) {
            this.setInput("InvoiceID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PayInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PayInvoiceResultSet = function(resultStream) {
    PayInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PayInvoice, choreography.Choreography);
util.inherits(PayInvoiceInputSet, choreography.InputSet);
util.inherits(PayInvoiceResultSet, choreography.ResultSet);
exports.PayInvoice = PayInvoice;


/*
    RetrieveInvoice
    Retrieves invoice details using the invoice id.
*/


var RetrieveInvoice = function(session) {
    /*
        Create a new instance of the RetrieveInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/RetrieveInvoice"
    RetrieveInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveInvoiceInputSet = function() {
    RetrieveInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the InvoiceID input for this Choreo. ((required, string) The unique identifier of the invoice you want to retrieve)
        */
        this.set_InvoiceID = function(value) {
            this.setInput("InvoiceID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveInvoiceResultSet = function(resultStream) {
    RetrieveInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveInvoice, choreography.Choreography);
util.inherits(RetrieveInvoiceInputSet, choreography.InputSet);
util.inherits(RetrieveInvoiceResultSet, choreography.ResultSet);
exports.RetrieveInvoice = RetrieveInvoice;


/*
    RetrieveInvoiceLineItems
    Retrieves a full list of line items contained in an invoice.
*/


var RetrieveInvoiceLineItems = function(session) {
    /*
        Create a new instance of the RetrieveInvoiceLineItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/RetrieveInvoiceLineItems"
    RetrieveInvoiceLineItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveInvoiceLineItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveInvoiceLineItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveInvoiceLineItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveInvoiceLineItemsInputSet = function() {
    RetrieveInvoiceLineItemsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of line items to return)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((optional, string) In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the InvoiceID input for this Choreo. ((required, string) The id of the invoice containing the line items to return)
        */
        this.set_InvoiceID = function(value) {
            this.setInput("InvoiceID", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The offset into the list of line items to start returning from, with 0 being the most recent)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveInvoiceLineItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveInvoiceLineItemsResultSet = function(resultStream) {
    RetrieveInvoiceLineItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveInvoiceLineItems, choreography.Choreography);
util.inherits(RetrieveInvoiceLineItemsInputSet, choreography.InputSet);
util.inherits(RetrieveInvoiceLineItemsResultSet, choreography.ResultSet);
exports.RetrieveInvoiceLineItems = RetrieveInvoiceLineItems;


/*
    RetrieveUpcomingInvoice
    Retrieves a customer's upcoming invoice.
*/


var RetrieveUpcomingInvoice = function(session) {
    /*
        Create a new instance of the RetrieveUpcomingInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/RetrieveUpcomingInvoice"
    RetrieveUpcomingInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUpcomingInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUpcomingInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUpcomingInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUpcomingInvoiceInputSet = function() {
    RetrieveUpcomingInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer whose upcoming invoice to return)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUpcomingInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUpcomingInvoiceResultSet = function(resultStream) {
    RetrieveUpcomingInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUpcomingInvoice, choreography.Choreography);
util.inherits(RetrieveUpcomingInvoiceInputSet, choreography.InputSet);
util.inherits(RetrieveUpcomingInvoiceResultSet, choreography.ResultSet);
exports.RetrieveUpcomingInvoice = RetrieveUpcomingInvoice;


/*
    UpdateInvoice
    Updates an existing invoice.
*/


var UpdateInvoice = function(session) {
    /*
        Create a new instance of the UpdateInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Invoices/UpdateInvoice"
    UpdateInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateInvoiceInputSet = function() {
    UpdateInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Closed input for this Choreo. ((conditional, boolean) Whether or not the invoice should be closed or not. To close an invoice, set this to "true".)
        */
        this.set_Closed = function(value) {
            this.setInput("Closed", value);
        }

        /*
        Set the value of the InvoiceID input for this Choreo. ((required, string) The id of the invoice to update.)
        */
        this.set_InvoiceID = function(value) {
            this.setInput("InvoiceID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateInvoiceResultSet = function(resultStream) {
    UpdateInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateInvoice, choreography.Choreography);
util.inherits(UpdateInvoiceInputSet, choreography.InputSet);
util.inherits(UpdateInvoiceResultSet, choreography.ResultSet);
exports.UpdateInvoice = UpdateInvoice;

