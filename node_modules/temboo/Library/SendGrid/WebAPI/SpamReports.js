
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteEmailAddress
    Delete an email address from the spam reports list.

*/


var DeleteEmailAddress = function(session) {
    /*
        Create a new instance of the DeleteEmailAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/SpamReports/DeleteEmailAddress"
    DeleteEmailAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteEmailAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteEmailAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteEmailAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteEmailAddressInputSet = function() {
    DeleteEmailAddressInputSet.super_.call(this);
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
        Set the value of the Email input for this Choreo. ((optional, string) The specific email address to be deleted from the spam report list.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
A ResultSet with methods tailored to the values returned by the DeleteEmailAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteEmailAddressResultSet = function(resultStream) {
    DeleteEmailAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteEmailAddress, choreography.Choreography);
util.inherits(DeleteEmailAddressInputSet, choreography.InputSet);
util.inherits(DeleteEmailAddressResultSet, choreography.ResultSet);
exports.DeleteEmailAddress = DeleteEmailAddress;


/*
    GetSpamReports
    Obtain a list of spam reports, with email addresses, response codes, and dates.

*/


var GetSpamReports = function(session) {
    /*
        Create a new instance of the GetSpamReports Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/SpamReports/GetSpamReports"
    GetSpamReports.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSpamReportsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSpamReportsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSpamReports
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSpamReportsInputSet = function() {
    GetSpamReportsInputSet.super_.call(this);
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
        Set the value of the Email input for this Choreo. ((optional, string) A specific email address to search for.)
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
        Set the value of the Limit input for this Choreo. ((optional, integer) A number to limit the number of results returned.)
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
A ResultSet with methods tailored to the values returned by the GetSpamReports Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSpamReportsResultSet = function(resultStream) {
    GetSpamReportsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSpamReports, choreography.Choreography);
util.inherits(GetSpamReportsInputSet, choreography.InputSet);
util.inherits(GetSpamReportsResultSet, choreography.ResultSet);
exports.GetSpamReports = GetSpamReports;

