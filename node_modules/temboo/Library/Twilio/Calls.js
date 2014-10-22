
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCall
    Returns the single Call with a given id.
*/


var GetCall = function(session) {
    /*
        Create a new instance of the GetCall Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/GetCall"
    GetCall.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCallResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCallInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCall
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCallInputSet = function() {
    GetCallInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The unique id of the call to retrieve.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the call. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCall Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCallResultSet = function(resultStream) {
    GetCallResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCall, choreography.Choreography);
util.inherits(GetCallInputSet, choreography.InputSet);
util.inherits(GetCallResultSet, choreography.ResultSet);
exports.GetCall = GetCall;


/*
    GetLastCall
    Retrieves the latest phone call made to or from the specified account.
*/


var GetLastCall = function(session) {
    /*
        Create a new instance of the GetLastCall Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/GetLastCall"
    GetLastCall.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLastCallResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLastCallInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLastCall
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLastCallInputSet = function() {
    GetLastCallInputSet.super_.call(this);
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLastCall Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLastCallResultSet = function(resultStream) {
    GetLastCallResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLastCall, choreography.Choreography);
util.inherits(GetLastCallInputSet, choreography.InputSet);
util.inherits(GetLastCallResultSet, choreography.ResultSet);
exports.GetLastCall = GetLastCall;


/*
    GetLastCallFrom
    Retrieves the latest phone call made from the specified number.
*/


var GetLastCallFrom = function(session) {
    /*
        Create a new instance of the GetLastCallFrom Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/GetLastCallFrom"
    GetLastCallFrom.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLastCallFromResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLastCallFromInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLastCallFrom
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLastCallFromInputSet = function() {
    GetLastCallFromInputSet.super_.call(this);
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
        Set the value of the From input for this Choreo. ((required, string) Filters results for calls from this phone number or Client identifier.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLastCallFrom Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLastCallFromResultSet = function(resultStream) {
    GetLastCallFromResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLastCallFrom, choreography.Choreography);
util.inherits(GetLastCallFromInputSet, choreography.InputSet);
util.inherits(GetLastCallFromResultSet, choreography.ResultSet);
exports.GetLastCallFrom = GetLastCallFrom;


/*
    GetLastCallTo
    Retrieves the latest phone call made to a specified number.
*/


var GetLastCallTo = function(session) {
    /*
        Create a new instance of the GetLastCallTo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/GetLastCallTo"
    GetLastCallTo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLastCallToResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLastCallToInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLastCallTo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLastCallToInputSet = function() {
    GetLastCallToInputSet.super_.call(this);
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Filters results for calls to this phone number or Client identifier.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLastCallTo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLastCallToResultSet = function(resultStream) {
    GetLastCallToResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLastCallTo, choreography.Choreography);
util.inherits(GetLastCallToInputSet, choreography.InputSet);
util.inherits(GetLastCallToResultSet, choreography.ResultSet);
exports.GetLastCallTo = GetLastCallTo;


/*
    ListCalls
    Retrieves a list of phone calls made to and from the specified account.
*/


var ListCalls = function(session) {
    /*
        Create a new instance of the ListCalls Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/ListCalls"
    ListCalls.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCallsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCallsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCalls
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCallsInputSet = function() {
    ListCallsInputSet.super_.call(this);
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
        Set the value of the From input for this Choreo. ((optional, string) Filters results for calls from this phone number or Client identifier.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
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
        Set the value of the ParentCallSID input for this Choreo. ((optional, string) Filters results for calls spawned by the call with this Sid.)
        */
        this.set_ParentCallSID = function(value) {
            this.setInput("ParentCallSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, string) Filters results for calls that started on this date, given as YYYY-MM-DD. Also supports operators such as >= or <=.)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Fillters results for calls currently in this status. Valid values are: queued, ringing, in-progress, completed, failed, busy, or no-answer.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to retrieve calls for. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the To input for this Choreo. ((optional, string) Filters results for calls to this phone number or Client identifier.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCalls Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCallsResultSet = function(resultStream) {
    ListCallsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCalls, choreography.Choreography);
util.inherits(ListCallsInputSet, choreography.InputSet);
util.inherits(ListCallsResultSet, choreography.ResultSet);
exports.ListCalls = ListCalls;


/*
    ListNotifications
    Returns a list of notifications generated during a call.
*/


var ListNotifications = function(session) {
    /*
        Create a new instance of the ListNotifications Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/ListNotifications"
    ListNotifications.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListNotificationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListNotificationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListNotifications
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListNotificationsInputSet = function() {
    ListNotificationsInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The unique id of the call to retrieve a list of notifications for.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the call. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListNotifications Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListNotificationsResultSet = function(resultStream) {
    ListNotificationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListNotifications, choreography.Choreography);
util.inherits(ListNotificationsInputSet, choreography.InputSet);
util.inherits(ListNotificationsResultSet, choreography.ResultSet);
exports.ListNotifications = ListNotifications;


/*
    ListRecordings
    Returns a list of recordings generated during a call.
*/


var ListRecordings = function(session) {
    /*
        Create a new instance of the ListRecordings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/ListRecordings"
    ListRecordings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRecordingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRecordingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRecordings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRecordingsInputSet = function() {
    ListRecordingsInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The unique id of the call to retrieve a list of recordings for.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the call. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListRecordings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRecordingsResultSet = function(resultStream) {
    ListRecordingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListRecordings, choreography.Choreography);
util.inherits(ListRecordingsInputSet, choreography.InputSet);
util.inherits(ListRecordingsResultSet, choreography.ResultSet);
exports.ListRecordings = ListRecordings;


/*
    MakeCall
    Initiates a call from the specified Twilio account.
*/


var MakeCall = function(session) {
    /*
        Create a new instance of the MakeCall Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Calls/MakeCall"
    MakeCall.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MakeCallResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MakeCallInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MakeCall
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MakeCallInputSet = function() {
    MakeCallInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the ApplicationSID input for this Choreo. ((conditional, string) The 34 character sid of the application Twilio should use to handle this phone call. Required unless providing the URL parameter.)
        */
        this.set_ApplicationSID = function(value) {
            this.setInput("ApplicationSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the FallbackMethod input for this Choreo. ((optional, string) The HTTP method that Twilio should use to request the FallbackUrl. Valid values are: GET and POST.)
        */
        this.set_FallbackMethod = function(value) {
            this.setInput("FallbackMethod", value);
        }

        /*
        Set the value of the FallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs making a request to the URL provided. This is ignored when ApplicationSID is provided.)
        */
        this.set_FallbackURL = function(value) {
            this.setInput("FallbackURL", value);
        }

        /*
        Set the value of the From input for this Choreo. ((required, string) The Twilio phone number or client identifier to use as the caller id.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the IfMachine input for this Choreo. ((optional, string) Indicates if Twilio should to try and determine if a machine (like voicemail) or a human has answered the call. Possible values are "Continue" and "Hangup".)
        */
        this.set_IfMachine = function(value) {
            this.setInput("IfMachine", value);
        }

        /*
        Set the value of the Method input for this Choreo. ((optional, string) This the HTTP method Twilio will use when making its request to the URL (when the URL input is provided). Defaults to POST. This is ignored when ApplicationSID is provided.)
        */
        this.set_Method = function(value) {
            this.setInput("Method", value);
        }

        /*
        Set the value of the Record input for this Choreo. ((optional, boolean) Set this parameter to 'true' to record the entirety of a phone call.)
        */
        this.set_Record = function(value) {
            this.setInput("Record", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SendDigits input for this Choreo. ((optional, string) A string of keys to dial after connecting to the number. Valid digits in the string include: any digit (0-9), '#', '*' and 'w' (to insert a half second pause).)
        */
        this.set_SendDigits = function(value) {
            this.setInput("SendDigits", value);
        }

        /*
        Set the value of the StatusCallbackMethod input for this Choreo. ((optional, string) The HTTP method Twilio should use when requesting the StatusCallback URL. Defaults to POST. If an ApplicationSid parameter is present, this parameter is ignored.)
        */
        this.set_StatusCallbackMethod = function(value) {
            this.setInput("StatusCallbackMethod", value);
        }

        /*
        Set the value of the StatusCallback input for this Choreo. ((optional, string) A URL that Twilio will request when the call ends to notify your app. This is ignored when ApplicationSID is provided.)
        */
        this.set_StatusCallback = function(value) {
            this.setInput("StatusCallback", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with this call. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the Timeout input for this Choreo. ((optional, integer) The integer number of seconds that Twilio should allow the phone to ring before assuming there is no answer. Default is 60 seconds, the maximum is 999 seconds.)
        */
        this.set_Timeout = function(value) {
            this.setInput("Timeout", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) The phone number or client identifier to call.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((conditional, string) The fully qualified URL that should be consulted when the call connects. Required unless providing the ApplicationSID parameter.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MakeCall Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MakeCallResultSet = function(resultStream) {
    MakeCallResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MakeCall, choreography.Choreography);
util.inherits(MakeCallInputSet, choreography.InputSet);
util.inherits(MakeCallResultSet, choreography.ResultSet);
exports.MakeCall = MakeCall;

