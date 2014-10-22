
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteInvalidAddress
    Delete an address from the Invalid Email list.
*/


var DeleteInvalidAddress = function(session) {
    /*
        Create a new instance of the DeleteInvalidAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/InvalidEmails/DeleteInvalidAddress"
    DeleteInvalidAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInvalidAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInvalidAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInvalidAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInvalidAddressInputSet = function() {
    DeleteInvalidAddressInputSet.super_.call(this);
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
        Set the value of the EmailAddressToDelete input for this Choreo. ((required, string) The email address that is to be deleted.)
        */
        this.set_EmailAddressToDelete = function(value) {
            this.setInput("EmailAddressToDelete", value);
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
A ResultSet with methods tailored to the values returned by the DeleteInvalidAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInvalidAddressResultSet = function(resultStream) {
    DeleteInvalidAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInvalidAddress, choreography.Choreography);
util.inherits(DeleteInvalidAddressInputSet, choreography.InputSet);
util.inherits(DeleteInvalidAddressResultSet, choreography.ResultSet);
exports.DeleteInvalidAddress = DeleteInvalidAddress;


/*
    RetrieveInvalidEmails
    Retrieve a list of invalid emails with addresses, response codes, and dates.
*/


var RetrieveInvalidEmails = function(session) {
    /*
        Create a new instance of the RetrieveInvalidEmails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/InvalidEmails/RetrieveInvalidEmails"
    RetrieveInvalidEmails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveInvalidEmailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveInvalidEmailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveInvalidEmails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveInvalidEmailsInputSet = function() {
    RetrieveInvalidEmailsInputSet.super_.call(this);
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
        Set the value of the Date input for this Choreo. ((optional, string) The timestamp of the Block records. Enter 1 to return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Days input for this Choreo. ((optional, integer) The number of days (greater than 0) for which block data will be retrieved.)
        */
        this.set_Days = function(value) {
            this.setInput("Days", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email to search for.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) The end of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number to limit the number of results returned.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The beginning point in the list to retrieve bounces from.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The start of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format, and must be earlier than the EndDate variable value.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveInvalidEmails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveInvalidEmailsResultSet = function(resultStream) {
    RetrieveInvalidEmailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveInvalidEmails, choreography.Choreography);
util.inherits(RetrieveInvalidEmailsInputSet, choreography.InputSet);
util.inherits(RetrieveInvalidEmailsResultSet, choreography.ResultSet);
exports.RetrieveInvalidEmails = RetrieveInvalidEmails;

