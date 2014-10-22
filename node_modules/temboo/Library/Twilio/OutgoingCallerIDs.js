
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddCallerID
    Adds a new caller id to a Twilio account.
*/


var AddCallerID = function(session) {
    /*
        Create a new instance of the AddCallerID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/OutgoingCallerIDs/AddCallerID"
    AddCallerID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCallerIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCallerIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddCallerID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCallerIDInputSet = function() {
    AddCallerIDInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the PhoneNumber input for this Choreo. ((required, string) The phone number to verify. Should be formatted with a '+' and country code e.g., +16175551212. US formatted numbers are also accepted e.g., (415) 555-1212, 415-555-1212.)
        */
        this.set_PhoneNumber = function(value) {
            this.setInput("PhoneNumber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the outgoing caller id. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddCallerID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCallerIDResultSet = function(resultStream) {
    AddCallerIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddCallerID, choreography.Choreography);
util.inherits(AddCallerIDInputSet, choreography.InputSet);
util.inherits(AddCallerIDResultSet, choreography.ResultSet);
exports.AddCallerID = AddCallerID;


/*
    DeleteCallerID
    Deletes an existing caller id.
*/


var DeleteCallerID = function(session) {
    /*
        Create a new instance of the DeleteCallerID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/OutgoingCallerIDs/DeleteCallerID"
    DeleteCallerID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCallerIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCallerIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCallerID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCallerIDInputSet = function() {
    DeleteCallerIDInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the OutgoingCallerSID input for this Choreo. ((required, string) The id of the outgoing caller to retrieve.)
        */
        this.set_OutgoingCallerSID = function(value) {
            this.setInput("OutgoingCallerSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the outgoing caller id. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteCallerID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCallerIDResultSet = function(resultStream) {
    DeleteCallerIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteCallerID, choreography.Choreography);
util.inherits(DeleteCallerIDInputSet, choreography.InputSet);
util.inherits(DeleteCallerIDResultSet, choreography.ResultSet);
exports.DeleteCallerID = DeleteCallerID;


/*
    GetCallerID
    Retrieves an individual outgoing caller id resource.
*/


var GetCallerID = function(session) {
    /*
        Create a new instance of the GetCallerID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/OutgoingCallerIDs/GetCallerID"
    GetCallerID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCallerIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCallerIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCallerID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCallerIDInputSet = function() {
    GetCallerIDInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the OutgoingCallerSID input for this Choreo. ((required, string) The id of the outgoing caller to retrieve.)
        */
        this.set_OutgoingCallerSID = function(value) {
            this.setInput("OutgoingCallerSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the outgoing caller id. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCallerID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCallerIDResultSet = function(resultStream) {
    GetCallerIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCallerID, choreography.Choreography);
util.inherits(GetCallerIDInputSet, choreography.InputSet);
util.inherits(GetCallerIDResultSet, choreography.ResultSet);
exports.GetCallerID = GetCallerID;


/*
    ListCallerIDs
    Returns a list of Outgoing Caller IDs for a Twilio account.
*/


var ListCallerIDs = function(session) {
    /*
        Create a new instance of the ListCallerIDs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/OutgoingCallerIDs/ListCallerIDs"
    ListCallerIDs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCallerIDsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCallerIDsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCallerIDs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCallerIDsInputSet = function() {
    ListCallerIDsInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the FriendlyName input for this Choreo. ((optional, string) Only show the caller id resource that exactly matches this name.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results per page.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to retrieve. Defaults to 0.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PhoneNumber input for this Choreo. ((optional, string) Only return the caller id resource that exactly matches this phone number.)
        */
        this.set_PhoneNumber = function(value) {
            this.setInput("PhoneNumber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the outgoing caller id. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCallerIDs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCallerIDsResultSet = function(resultStream) {
    ListCallerIDsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCallerIDs, choreography.Choreography);
util.inherits(ListCallerIDsInputSet, choreography.InputSet);
util.inherits(ListCallerIDsResultSet, choreography.ResultSet);
exports.ListCallerIDs = ListCallerIDs;


/*
    UpdateCallerID
    Updates an existing caller id.
*/


var UpdateCallerID = function(session) {
    /*
        Create a new instance of the UpdateCallerID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/OutgoingCallerIDs/UpdateCallerID"
    UpdateCallerID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCallerIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCallerIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCallerID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCallerIDInputSet = function() {
    UpdateCallerIDInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the FriendlyName input for this Choreo. ((conditional, string) A human readable description of a Caller ID, with maximum length of 64 characters. Defaults to a nicely formatted version of the phone number.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the OutgoingCallerSID input for this Choreo. ((required, string) The id of the outgoing caller to retrieve.)
        */
        this.set_OutgoingCallerSID = function(value) {
            this.setInput("OutgoingCallerSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the outgoing caller id. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCallerID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCallerIDResultSet = function(resultStream) {
    UpdateCallerIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateCallerID, choreography.Choreography);
util.inherits(UpdateCallerIDInputSet, choreography.InputSet);
util.inherits(UpdateCallerIDResultSet, choreography.ResultSet);
exports.UpdateCallerID = UpdateCallerID;

