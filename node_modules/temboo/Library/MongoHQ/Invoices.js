
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetInvoice
    Retrieves a specific invoice by ID.
*/


var GetInvoice = function(session) {
    /*
        Create a new instance of the GetInvoice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Invoices/GetInvoice"
    GetInvoice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetInvoiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInvoiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetInvoice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInvoiceInputSet = function() {
    GetInvoiceInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the invoice to retrieve.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetInvoice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetInvoiceResultSet = function(resultStream) {
    GetInvoiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetInvoice, choreography.Choreography);
util.inherits(GetInvoiceInputSet, choreography.InputSet);
util.inherits(GetInvoiceResultSet, choreography.ResultSet);
exports.GetInvoice = GetInvoice;


/*
    ListInvoices
    Lists previous invoices for your MongoHQ account.
*/


var ListInvoices = function(session) {
    /*
        Create a new instance of the ListInvoices Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Invoices/ListInvoices"
    ListInvoices.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInvoicesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInvoicesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInvoices
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInvoicesInputSet = function() {
    ListInvoicesInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInvoices Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInvoicesResultSet = function(resultStream) {
    ListInvoicesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListInvoices, choreography.Choreography);
util.inherits(ListInvoicesInputSet, choreography.InputSet);
util.inherits(ListInvoicesResultSet, choreography.ResultSet);
exports.ListInvoices = ListInvoices;

