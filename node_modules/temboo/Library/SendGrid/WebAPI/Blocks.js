
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteBlockedAddress
    Delete an address from the blocked email list.
*/


var DeleteBlockedAddress = function(session) {
    /*
        Create a new instance of the DeleteBlockedAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Blocks/DeleteBlockedAddress"
    DeleteBlockedAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBlockedAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBlockedAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBlockedAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBlockedAddressInputSet = function() {
    DeleteBlockedAddressInputSet.super_.call(this);
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
        Set the value of the EmailAddress input for this Choreo. ((required, string) The valid email address to be deleted from your block list.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
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
A ResultSet with methods tailored to the values returned by the DeleteBlockedAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBlockedAddressResultSet = function(resultStream) {
    DeleteBlockedAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBlockedAddress, choreography.Choreography);
util.inherits(DeleteBlockedAddressInputSet, choreography.InputSet);
util.inherits(DeleteBlockedAddressResultSet, choreography.ResultSet);
exports.DeleteBlockedAddress = DeleteBlockedAddress;


/*
    GetBlockedAddresses
    Retrieve a list of blocked emails, with response codes, and optional dates.
*/


var GetBlockedAddresses = function(session) {
    /*
        Create a new instance of the GetBlockedAddresses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Blocks/GetBlockedAddresses"
    GetBlockedAddresses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBlockedAddressesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBlockedAddressesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBlockedAddresses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBlockedAddressesInputSet = function() {
    GetBlockedAddressesInputSet.super_.call(this);
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
        Set the value of the EndDate input for this Choreo. ((optional, string) Specify the end of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
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
A ResultSet with methods tailored to the values returned by the GetBlockedAddresses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBlockedAddressesResultSet = function(resultStream) {
    GetBlockedAddressesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBlockedAddresses, choreography.Choreography);
util.inherits(GetBlockedAddressesInputSet, choreography.InputSet);
util.inherits(GetBlockedAddressesResultSet, choreography.ResultSet);
exports.GetBlockedAddresses = GetBlockedAddresses;

