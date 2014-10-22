
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddEmailToList
    Add an email to an existing Recipient List.
*/


var AddEmailToList = function(session) {
    /*
        Create a new instance of the AddEmailToList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/ListsEmail/AddEmailToList"
    AddEmailToList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddEmailToListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddEmailToListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddEmailToList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddEmailToListInputSet = function() {
    AddEmailToListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Data input for this Choreo. ((required, string) The JSON string containing the name, email and additional fields to be added to the specified recipient lists.  Example: {"email":"address@example.com","name":"name","other_field":"value"})
        */
        this.set_Data = function(value) {
            this.setInput("Data", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The recipient list to which emaill addresses are being added. The list must be already existing.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddEmailToList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddEmailToListResultSet = function(resultStream) {
    AddEmailToListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddEmailToList, choreography.Choreography);
util.inherits(AddEmailToListInputSet, choreography.InputSet);
util.inherits(AddEmailToListResultSet, choreography.ResultSet);
exports.AddEmailToList = AddEmailToList;


/*
    DeleteEmailFromList
    Delete an email address from a specified Recipient List.
*/


var DeleteEmailFromList = function(session) {
    /*
        Create a new instance of the DeleteEmailFromList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/ListsEmail/DeleteEmailFromList"
    DeleteEmailFromList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteEmailFromListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteEmailFromListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteEmailFromList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteEmailFromListInputSet = function() {
    DeleteEmailFromListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address to be removed from the recipient list.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The recipient list from which email addresses will be removed.  Must be an existing recipient list.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteEmailFromList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteEmailFromListResultSet = function(resultStream) {
    DeleteEmailFromListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteEmailFromList, choreography.Choreography);
util.inherits(DeleteEmailFromListInputSet, choreography.InputSet);
util.inherits(DeleteEmailFromListResultSet, choreography.ResultSet);
exports.DeleteEmailFromList = DeleteEmailFromList;


/*
    GetListEmailAddresses
    Retrieve email addresses associated with a specified Recipient List.
*/


var GetListEmailAddresses = function(session) {
    /*
        Create a new instance of the GetListEmailAddresses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/ListsEmail/GetListEmailAddresses"
    GetListEmailAddresses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListEmailAddressesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListEmailAddressesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListEmailAddresses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListEmailAddressesInputSet = function() {
    GetListEmailAddressesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address to search for in a recipient list.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The recipient list from which email addresses will be retrieved.  Must be an existing recipient list.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetListEmailAddresses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListEmailAddressesResultSet = function(resultStream) {
    GetListEmailAddressesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListEmailAddresses, choreography.Choreography);
util.inherits(GetListEmailAddressesInputSet, choreography.InputSet);
util.inherits(GetListEmailAddressesResultSet, choreography.ResultSet);
exports.GetListEmailAddresses = GetListEmailAddresses;

