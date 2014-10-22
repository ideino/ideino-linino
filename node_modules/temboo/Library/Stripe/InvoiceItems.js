
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateInvoiceItem
    Adds a charge or credit to the customer's next invoice.
*/


var CreateInvoiceItem = function(session) {
    /*
        Create a new instance of the CreateInvoiceItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/InvoiceItems/CreateInvoiceItem"
    CreateInvoiceItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateInvoiceItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateInvoiceItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateInvoiceItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateInvoiceItemInputSet = function() {
    CreateInvoiceItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key providied by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The amount in cents of the charge to be included in the customer's next invoice)
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
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer you want to create an invoice item for)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) An arbitrary string of text that will be included with the invoice item)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateInvoiceItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateInvoiceItemResultSet = function(resultStream) {
    CreateInvoiceItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateInvoiceItem, choreography.Choreography);
util.inherits(CreateInvoiceItemInputSet, choreography.InputSet);
util.inherits(CreateInvoiceItemResultSet, choreography.ResultSet);
exports.CreateInvoiceItem = CreateInvoiceItem;


/*
    DeleteInvoiceItem
    Deletes a specified invoice item.
*/


var DeleteInvoiceItem = function(session) {
    /*
        Create a new instance of the DeleteInvoiceItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/InvoiceItems/DeleteInvoiceItem"
    DeleteInvoiceItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInvoiceItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInvoiceItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInvoiceItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInvoiceItemInputSet = function() {
    DeleteInvoiceItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the InvoiceItemID input for this Choreo. ((required, string) The unique identifier of the invoice item you want to delete)
        */
        this.set_InvoiceItemID = function(value) {
            this.setInput("InvoiceItemID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInvoiceItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInvoiceItemResultSet = function(resultStream) {
    DeleteInvoiceItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInvoiceItem, choreography.Choreography);
util.inherits(DeleteInvoiceItemInputSet, choreography.InputSet);
util.inherits(DeleteInvoiceItemResultSet, choreography.ResultSet);
exports.DeleteInvoiceItem = DeleteInvoiceItem;


/*
    ListAllInvoiceItems
    Returns a list of all invoice items or a list of invoice items for a specified customer.
*/


var ListAllInvoiceItems = function(session) {
    /*
        Create a new instance of the ListAllInvoiceItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/InvoiceItems/ListAllInvoiceItems"
    ListAllInvoiceItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllInvoiceItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInvoiceItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllInvoiceItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInvoiceItemsInputSet = function() {
    ListAllInvoiceItemsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The limit of invoice items to be returned. Can range from 1 to 100. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((optional, string) The unique identifier of the customer whose invoice items to return. If not specified, all invoice items will be returned.)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Stripe will return a list of invoice items starting at the specified offset. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllInvoiceItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllInvoiceItemsResultSet = function(resultStream) {
    ListAllInvoiceItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllInvoiceItems, choreography.Choreography);
util.inherits(ListAllInvoiceItemsInputSet, choreography.InputSet);
util.inherits(ListAllInvoiceItemsResultSet, choreography.ResultSet);
exports.ListAllInvoiceItems = ListAllInvoiceItems;


/*
    RetrieveInvoiceItem
    Retrieves invoice items with a specified id.
*/


var RetrieveInvoiceItem = function(session) {
    /*
        Create a new instance of the RetrieveInvoiceItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/InvoiceItems/RetrieveInvoiceItem"
    RetrieveInvoiceItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveInvoiceItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveInvoiceItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveInvoiceItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveInvoiceItemInputSet = function() {
    RetrieveInvoiceItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The secret API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the InvoiceItemID input for this Choreo. ((required, string) The unique identifier of the invoice item you want to retrieve)
        */
        this.set_InvoiceItemID = function(value) {
            this.setInput("InvoiceItemID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveInvoiceItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveInvoiceItemResultSet = function(resultStream) {
    RetrieveInvoiceItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveInvoiceItem, choreography.Choreography);
util.inherits(RetrieveInvoiceItemInputSet, choreography.InputSet);
util.inherits(RetrieveInvoiceItemResultSet, choreography.ResultSet);
exports.RetrieveInvoiceItem = RetrieveInvoiceItem;


/*
    UpdateInvoiceItem
    Updates the amount or description of an existing invoice item.
*/


var UpdateInvoiceItem = function(session) {
    /*
        Create a new instance of the UpdateInvoiceItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/InvoiceItems/UpdateInvoiceItem"
    UpdateInvoiceItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateInvoiceItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateInvoiceItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateInvoiceItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateInvoiceItemInputSet = function() {
    UpdateInvoiceItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The amount in cents of the charge to be included in the customer's next invoice)
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
        Set the value of the Description input for this Choreo. ((optional, string) An arbitrary string of text that will be included with the invoice item)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the InvoiceItemID input for this Choreo. ((required, string) The unique identifier of the invoice item you want to update)
        */
        this.set_InvoiceItemID = function(value) {
            this.setInput("InvoiceItemID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateInvoiceItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateInvoiceItemResultSet = function(resultStream) {
    UpdateInvoiceItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateInvoiceItem, choreography.Choreography);
util.inherits(UpdateInvoiceItemInputSet, choreography.InputSet);
util.inherits(UpdateInvoiceItemResultSet, choreography.ResultSet);
exports.UpdateInvoiceItem = UpdateInvoiceItem;

