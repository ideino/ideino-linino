
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddRecipientList
    Add one or more recipient lists to a newsletter.
*/


var AddRecipientList = function(session) {
    /*
        Create a new instance of the AddRecipientList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Recipients/AddRecipientList"
    AddRecipientList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddRecipientListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddRecipientListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddRecipientList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddRecipientListInputSet = function() {
    AddRecipientListInputSet.super_.call(this);
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
        Set the value of the List input for this Choreo. ((required, string) The recipient list to be added to the specified newsletter.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of an existing newsletter to which a recipient list is being added.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the AddRecipientList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddRecipientListResultSet = function(resultStream) {
    AddRecipientListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddRecipientList, choreography.Choreography);
util.inherits(AddRecipientListInputSet, choreography.InputSet);
util.inherits(AddRecipientListResultSet, choreography.ResultSet);
exports.AddRecipientList = AddRecipientList;


/*
    DeleteRecipientListFromNewsletter
    Delete Recipient Lists from a Newsletter.
*/


var DeleteRecipientListFromNewsletter = function(session) {
    /*
        Create a new instance of the DeleteRecipientListFromNewsletter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Recipients/DeleteRecipientListFromNewsletter"
    DeleteRecipientListFromNewsletter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRecipientListFromNewsletterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRecipientListFromNewsletterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRecipientListFromNewsletter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRecipientListFromNewsletterInputSet = function() {
    DeleteRecipientListFromNewsletterInputSet.super_.call(this);
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
        Set the value of the List input for this Choreo. ((required, string) The Recipient List to remove.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of an existing newsletter, to remove recipient lists from.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the DeleteRecipientListFromNewsletter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRecipientListFromNewsletterResultSet = function(resultStream) {
    DeleteRecipientListFromNewsletterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRecipientListFromNewsletter, choreography.Choreography);
util.inherits(DeleteRecipientListFromNewsletterInputSet, choreography.InputSet);
util.inherits(DeleteRecipientListFromNewsletterResultSet, choreography.ResultSet);
exports.DeleteRecipientListFromNewsletter = DeleteRecipientListFromNewsletter;


/*
    GetAttachedRecipientLists
    Retrieve Recipient Lists attached to a specified newsletter.
*/


var GetAttachedRecipientLists = function(session) {
    /*
        Create a new instance of the GetAttachedRecipientLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Recipients/GetAttachedRecipientLists"
    GetAttachedRecipientLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAttachedRecipientListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAttachedRecipientListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAttachedRecipientLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAttachedRecipientListsInputSet = function() {
    GetAttachedRecipientListsInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of an existing newsletter, whose recipient lists will be obtained.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the GetAttachedRecipientLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAttachedRecipientListsResultSet = function(resultStream) {
    GetAttachedRecipientListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAttachedRecipientLists, choreography.Choreography);
util.inherits(GetAttachedRecipientListsInputSet, choreography.InputSet);
util.inherits(GetAttachedRecipientListsResultSet, choreography.ResultSet);
exports.GetAttachedRecipientLists = GetAttachedRecipientLists;

