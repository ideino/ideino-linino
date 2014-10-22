
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetLastMessageFromNumber
    Retrieves the latest message received from a specified number.
*/


var GetLastMessageFromNumber = function(session) {
    /*
        Create a new instance of the GetLastMessageFromNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/GetLastMessageFromNumber"
    GetLastMessageFromNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLastMessageFromNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLastMessageFromNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLastMessageFromNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLastMessageFromNumberInputSet = function() {
    GetLastMessageFromNumberInputSet.super_.call(this);
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
        Set the value of the From input for this Choreo. ((required, string) The phone number to retrieve messages from.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml. This parameter is only valid when setting ResponseMode to "verbose".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the ReturnLegacyFormat input for this Choreo. ((optional, boolean) If set to true, a verbose XML response will be formatted using the deprecated /SMS/Messages resource schema. This should only be used if you have existing code that relies on the older schema.)
        */
        this.set_ReturnLegacyFormat = function(value) {
            this.setInput("ReturnLegacyFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLastMessageFromNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLastMessageFromNumberResultSet = function(resultStream) {
    GetLastMessageFromNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLastMessageFromNumber, choreography.Choreography);
util.inherits(GetLastMessageFromNumberInputSet, choreography.InputSet);
util.inherits(GetLastMessageFromNumberResultSet, choreography.ResultSet);
exports.GetLastMessageFromNumber = GetLastMessageFromNumber;


/*
    GetLastMessageThatContains
    Retrieves the latest received message that contains the specified search string.
*/


var GetLastMessageThatContains = function(session) {
    /*
        Create a new instance of the GetLastMessageThatContains Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/GetLastMessageThatContains"
    GetLastMessageThatContains.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLastMessageThatContainsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLastMessageThatContainsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLastMessageThatContains
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLastMessageThatContainsInputSet = function() {
    GetLastMessageThatContainsInputSet.super_.call(this);
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
        Set the value of the Filter input for this Choreo. ((required, string) A search string to apply to the message body field.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results per page to search through. Defaults to 50.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml. This parameter is only valid when setting ResponseMode to "verbose".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the ReturnLegacyFormat input for this Choreo. ((optional, boolean) If set to true, XML responses will be formatted using the deprecated /SMS/Messages resource schema. This should only be used if you have existing code that relies on the older schema.)
        */
        this.set_ReturnLegacyFormat = function(value) {
            this.setInput("ReturnLegacyFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLastMessageThatContains Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLastMessageThatContainsResultSet = function(resultStream) {
    GetLastMessageThatContainsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TotalPages" output from this Choreo execution. ((integer) The total number of result pages that are available to search. If your search returns no results, you can increment the Page input to search further into the list of messages.)
        */
        this.get_TotalPages = function() {
            return this.getResult("TotalPages");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLastMessageThatContains, choreography.Choreography);
util.inherits(GetLastMessageThatContainsInputSet, choreography.InputSet);
util.inherits(GetLastMessageThatContainsResultSet, choreography.ResultSet);
exports.GetLastMessageThatContains = GetLastMessageThatContains;


/*
    GetMessage
    Retrieves a specific SMS from Twilio by allowing you to specify a message ID.
*/


var GetMessage = function(session) {
    /*
        Create a new instance of the GetMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/GetMessage"
    GetMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMessageInputSet = function() {
    GetMessageInputSet.super_.call(this);
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
        Set the value of the SMSMessageSID input for this Choreo. ((required, string) The unique ID for the Twilio message you want to retrieve.)
        */
        this.set_SMSMessageSID = function(value) {
            this.setInput("SMSMessageSID", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to retrieve messages for. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMessageResultSet = function(resultStream) {
    GetMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMessage, choreography.Choreography);
util.inherits(GetMessageInputSet, choreography.InputSet);
util.inherits(GetMessageResultSet, choreography.ResultSet);
exports.GetMessage = GetMessage;


/*
    GetMessagesThatContain
    Retrieves messages that contain the specified search string.
*/


var GetMessagesThatContain = function(session) {
    /*
        Create a new instance of the GetMessagesThatContain Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/GetMessagesThatContain"
    GetMessagesThatContain.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMessagesThatContainResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMessagesThatContainInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMessagesThatContain
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMessagesThatContainInputSet = function() {
    GetMessagesThatContainInputSet.super_.call(this);
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
        Set the value of the Filter input for this Choreo. ((required, string) A search string to apply to the message body field.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results per page to search through. Defaults to 50.)
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
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, an array of message strings is returned. Verbose mode returns an array of full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the ReturnLegacyFormat input for this Choreo. ((optional, boolean) If set to true, XML responses will be formatted using the deprecated /SMS/Messages resource schema. This should only be used if you have existing code that relies on the older schema.)
        */
        this.set_ReturnLegacyFormat = function(value) {
            this.setInput("ReturnLegacyFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMessagesThatContain Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMessagesThatContainResultSet = function(resultStream) {
    GetMessagesThatContainResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "TotalPages" output from this Choreo execution. ((integer) The total number of result pages that are available to search. If your search returns no results, you can increment the Page input to search further into the list of messages.)
        */
        this.get_TotalPages = function() {
            return this.getResult("TotalPages");
        }
}

util.inherits(GetMessagesThatContain, choreography.Choreography);
util.inherits(GetMessagesThatContainInputSet, choreography.InputSet);
util.inherits(GetMessagesThatContainResultSet, choreography.ResultSet);
exports.GetMessagesThatContain = GetMessagesThatContain;


/*
    ListMessages
    Retrieves a list of SMS messages from your Twilio account.
*/


var ListMessages = function(session) {
    /*
        Create a new instance of the ListMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/ListMessages"
    ListMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMessagesInputSet = function() {
    ListMessagesInputSet.super_.call(this);
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
        Set the value of the DateSent input for this Choreo. ((optional, date) A date in YYYY-MM-DD format. If you use this input, the Choreo will retrieve only messages sent on this date.)
        */
        this.set_DateSent = function(value) {
            this.setInput("DateSent", value);
        }

        /*
        Set the value of the From input for this Choreo. ((optional, string) If used, the Choreo will only retrieve messages sent from this phone number.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ReturnLegacyFormat input for this Choreo. ((optional, boolean) If set to true, the response will be formatted using the deprecated /SMS/Messages resource schema. This should only be used if you have existing code that relies on the older schema.)
        */
        this.set_ReturnLegacyFormat = function(value) {
            this.setInput("ReturnLegacyFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to retrieve the message from. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the To input for this Choreo. ((optional, string) If used, the Choreo will only retrieve messages sent to this phone number.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMessagesResultSet = function(resultStream) {
    ListMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMessages, choreography.Choreography);
util.inherits(ListMessagesInputSet, choreography.InputSet);
util.inherits(ListMessagesResultSet, choreography.ResultSet);
exports.ListMessages = ListMessages;


/*
    SendSMS
    Sends an SMS to a specified phone number using the Twilio API.
*/


var SendSMS = function(session) {
    /*
        Create a new instance of the SendSMS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/SMSMessages/SendSMS"
    SendSMS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendSMSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendSMSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendSMS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendSMSInputSet = function() {
    SendSMSInputSet.super_.call(this);
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
        Set the value of the Body input for this Choreo. ((required, string) The text of your SMS message.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the From input for this Choreo. ((required, string) The purchased Twilio phone number (or Twilio Sandbox number) to send the message from.)
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

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to send the message from. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) The destination phone number for the SMS message.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendSMS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendSMSResultSet = function(resultStream) {
    SendSMSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The Twilio response.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendSMS, choreography.Choreography);
util.inherits(SendSMSInputSet, choreography.InputSet);
util.inherits(SendSMSResultSet, choreography.ResultSet);
exports.SendSMS = SendSMS;

