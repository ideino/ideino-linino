
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddPhoneNumber
    Purchases a new phone number for your Twilio account.
*/


var AddPhoneNumber = function(session) {
    /*
        Create a new instance of the AddPhoneNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/IncomingPhoneNumbers/AddPhoneNumber"
    AddPhoneNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddPhoneNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddPhoneNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddPhoneNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddPhoneNumberInputSet = function() {
    AddPhoneNumberInputSet.super_.call(this);
        /*
        Set the value of the APIVersion input for this Choreo. ((optional, string) Calls to this phone number will start a new TwiML session with this API version. Either 2010-04-01 or 2008-08-01.)
        */
        this.set_APIVersion = function(value) {
            this.setInput("APIVersion", value);
        }

        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AreaCode input for this Choreo. ((conditional, integer) The desired area code for your new incoming phone number. Required unless specifying the complete PhoneNumber.)
        */
        this.set_AreaCode = function(value) {
            this.setInput("AreaCode", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the FriendlyName input for this Choreo. ((optional, string) A human readable description of the new incoming phone number resource, with maximum length 64 characters.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the PhoneNumber input for this Choreo. ((conditional, string) The phone number you want to purchase. Required unless provided the AreaCode.)
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
        Set the value of the SmsApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle SMSs sent to this number.)
        */
        this.set_SmsApplicationSID = function(value) {
            this.setInput("SmsApplicationSID", value);
        }

        /*
        Set the value of the SmsFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsFallbackUrl. Either GET or POST.)
        */
        this.set_SmsFallbackMethod = function(value) {
            this.setInput("SmsFallbackMethod", value);
        }

        /*
        Set the value of the SmsFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl.)
        */
        this.set_SmsFallbackURL = function(value) {
            this.setInput("SmsFallbackURL", value);
        }

        /*
        Set the value of the SmsMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsUrl. Either GET or POST.)
        */
        this.set_SmsMethod = function(value) {
            this.setInput("SmsMethod", value);
        }

        /*
        Set the value of the SmsURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody sends an SMS to the new phone number.)
        */
        this.set_SmsURL = function(value) {
            this.setInput("SmsURL", value);
        }

        /*
        Set the value of the StatusCallbackMethod input for this Choreo. ((optional, string) The HTTP method Twilio will use to make requests to the StatusCallback URL. Either GET or POST.)
        */
        this.set_StatusCallbackMethod = function(value) {
            this.setInput("StatusCallbackMethod", value);
        }

        /*
        Set the value of the StatusCallback input for this Choreo. ((optional, string) The URL that Twilio will request to pass status parameters (such as call ended) to your application.)
        */
        this.set_StatusCallback = function(value) {
            this.setInput("StatusCallback", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the phone number. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the VoiceApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle phone calls to this number.)
        */
        this.set_VoiceApplicationSID = function(value) {
            this.setInput("VoiceApplicationSID", value);
        }

        /*
        Set the value of the VoiceCallerIDLookup input for this Choreo. ((optional, string) Do a lookup of a caller's name from the CNAM database and post it to your app. Either true or false.)
        */
        this.set_VoiceCallerIDLookup = function(value) {
            this.setInput("VoiceCallerIDLookup", value);
        }

        /*
        Set the value of the VoiceFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceFallbackURL. Either GET or POST.)
        */
        this.set_VoiceFallbackMethod = function(value) {
            this.setInput("VoiceFallbackMethod", value);
        }

        /*
        Set the value of the VoiceFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by VoiceURL.)
        */
        this.set_VoiceFallbackURL = function(value) {
            this.setInput("VoiceFallbackURL", value);
        }

        /*
        Set the value of the VoiceMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceURL. Either GET or POST.)
        */
        this.set_VoiceMethod = function(value) {
            this.setInput("VoiceMethod", value);
        }

        /*
        Set the value of the VoiceURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody dials the phone number.)
        */
        this.set_VoiceURL = function(value) {
            this.setInput("VoiceURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddPhoneNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddPhoneNumberResultSet = function(resultStream) {
    AddPhoneNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddPhoneNumber, choreography.Choreography);
util.inherits(AddPhoneNumberInputSet, choreography.InputSet);
util.inherits(AddPhoneNumberResultSet, choreography.ResultSet);
exports.AddPhoneNumber = AddPhoneNumber;


/*
    DeletePhoneNumber
    Deletes an individual phone from Twilio.
*/


var DeletePhoneNumber = function(session) {
    /*
        Create a new instance of the DeletePhoneNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/IncomingPhoneNumbers/DeletePhoneNumber"
    DeletePhoneNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePhoneNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePhoneNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePhoneNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePhoneNumberInputSet = function() {
    DeletePhoneNumberInputSet.super_.call(this);
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
        Set the value of the IncomingPhoneNumberSID input for this Choreo. ((required, string) The id of the incoming phone number to retrieve.)
        */
        this.set_IncomingPhoneNumberSID = function(value) {
            this.setInput("IncomingPhoneNumberSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the phone number. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePhoneNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePhoneNumberResultSet = function(resultStream) {
    DeletePhoneNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePhoneNumber, choreography.Choreography);
util.inherits(DeletePhoneNumberInputSet, choreography.InputSet);
util.inherits(DeletePhoneNumberResultSet, choreography.ResultSet);
exports.DeletePhoneNumber = DeletePhoneNumber;


/*
    GetPhoneNumber
    Returns an individual phone number purchased from Twilio or ported to Twilio.
*/


var GetPhoneNumber = function(session) {
    /*
        Create a new instance of the GetPhoneNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/IncomingPhoneNumbers/GetPhoneNumber"
    GetPhoneNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPhoneNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPhoneNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPhoneNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPhoneNumberInputSet = function() {
    GetPhoneNumberInputSet.super_.call(this);
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
        Set the value of the IncomingPhoneNumberSID input for this Choreo. ((required, string) The id of the incoming phone number to retrieve.)
        */
        this.set_IncomingPhoneNumberSID = function(value) {
            this.setInput("IncomingPhoneNumberSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the phone number. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPhoneNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPhoneNumberResultSet = function(resultStream) {
    GetPhoneNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPhoneNumber, choreography.Choreography);
util.inherits(GetPhoneNumberInputSet, choreography.InputSet);
util.inherits(GetPhoneNumberResultSet, choreography.ResultSet);
exports.GetPhoneNumber = GetPhoneNumber;


/*
    ListPhoneNumbers
    Returns a list of Twilio phone numbers purchased from Twilio or ported to Twilio.
*/


var ListPhoneNumbers = function(session) {
    /*
        Create a new instance of the ListPhoneNumbers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/IncomingPhoneNumbers/ListPhoneNumbers"
    ListPhoneNumbers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPhoneNumbersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPhoneNumbersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPhoneNumbers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPhoneNumbersInputSet = function() {
    ListPhoneNumbersInputSet.super_.call(this);
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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) Only return the incoming phone number resources with friendly names that exactly match this name.)
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
        Set the value of the PhoneNumber input for this Choreo. ((optional, string) Only return the incoming phone number resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.)
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
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the list of phone numbers. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPhoneNumbers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPhoneNumbersResultSet = function(resultStream) {
    ListPhoneNumbersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPhoneNumbers, choreography.Choreography);
util.inherits(ListPhoneNumbersInputSet, choreography.InputSet);
util.inherits(ListPhoneNumbersResultSet, choreography.ResultSet);
exports.ListPhoneNumbers = ListPhoneNumbers;


/*
    UpdatePhoneNumber
    Updates an existing Twilio phone number.
*/


var UpdatePhoneNumber = function(session) {
    /*
        Create a new instance of the UpdatePhoneNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/IncomingPhoneNumbers/UpdatePhoneNumber"
    UpdatePhoneNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdatePhoneNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdatePhoneNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdatePhoneNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdatePhoneNumberInputSet = function() {
    UpdatePhoneNumberInputSet.super_.call(this);
        /*
        Set the value of the APIVersion input for this Choreo. ((optional, string) Calls to this phone number will start a new TwiML session with this API version. Either 2010-04-01 or 2008-08-01.)
        */
        this.set_APIVersion = function(value) {
            this.setInput("APIVersion", value);
        }

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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) A human readable description of the new incoming phone number resource, with maximum length 64 characters.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the IncomingPhoneNumberSID input for this Choreo. ((required, string) The id of the incoming phone number to update.)
        */
        this.set_IncomingPhoneNumberSID = function(value) {
            this.setInput("IncomingPhoneNumberSID", value);
        }

        /*
        Set the value of the NewAccountSID input for this Choreo. ((optional, string) The unique 34 character id of the account to which you wish to transfer this phone number.)
        */
        this.set_NewAccountSID = function(value) {
            this.setInput("NewAccountSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SmsApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle SMSs sent to this number.)
        */
        this.set_SmsApplicationSID = function(value) {
            this.setInput("SmsApplicationSID", value);
        }

        /*
        Set the value of the SmsFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsFallbackUrl. Either GET or POST.)
        */
        this.set_SmsFallbackMethod = function(value) {
            this.setInput("SmsFallbackMethod", value);
        }

        /*
        Set the value of the SmsFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl.)
        */
        this.set_SmsFallbackURL = function(value) {
            this.setInput("SmsFallbackURL", value);
        }

        /*
        Set the value of the SmsMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsUrl. Either GET or POST.)
        */
        this.set_SmsMethod = function(value) {
            this.setInput("SmsMethod", value);
        }

        /*
        Set the value of the SmsURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody sends an SMS to the new phone number.)
        */
        this.set_SmsURL = function(value) {
            this.setInput("SmsURL", value);
        }

        /*
        Set the value of the StatusCallbackMethod input for this Choreo. ((optional, string) The HTTP method Twilio will use to make requests to the StatusCallback URL. Either GET or POST.)
        */
        this.set_StatusCallbackMethod = function(value) {
            this.setInput("StatusCallbackMethod", value);
        }

        /*
        Set the value of the StatusCallback input for this Choreo. ((optional, string) The URL that Twilio will request to pass status parameters (such as call ended) to your application.)
        */
        this.set_StatusCallback = function(value) {
            this.setInput("StatusCallback", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the phone number. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the VoiceApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle phone calls to this number.)
        */
        this.set_VoiceApplicationSID = function(value) {
            this.setInput("VoiceApplicationSID", value);
        }

        /*
        Set the value of the VoiceCallerIDLookup input for this Choreo. ((optional, string) Do a lookup of a caller's name from the CNAM database and post it to your app. Either true or false.)
        */
        this.set_VoiceCallerIDLookup = function(value) {
            this.setInput("VoiceCallerIDLookup", value);
        }

        /*
        Set the value of the VoiceFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceFallbackURL. Either GET or POST.)
        */
        this.set_VoiceFallbackMethod = function(value) {
            this.setInput("VoiceFallbackMethod", value);
        }

        /*
        Set the value of the VoiceFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by VoiceURL.)
        */
        this.set_VoiceFallbackURL = function(value) {
            this.setInput("VoiceFallbackURL", value);
        }

        /*
        Set the value of the VoiceMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceURL. Either GET or POST.)
        */
        this.set_VoiceMethod = function(value) {
            this.setInput("VoiceMethod", value);
        }

        /*
        Set the value of the VoiceURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody dials the phone number.)
        */
        this.set_VoiceURL = function(value) {
            this.setInput("VoiceURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdatePhoneNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdatePhoneNumberResultSet = function(resultStream) {
    UpdatePhoneNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdatePhoneNumber, choreography.Choreography);
util.inherits(UpdatePhoneNumberInputSet, choreography.InputSet);
util.inherits(UpdatePhoneNumberResultSet, choreography.ResultSet);
exports.UpdatePhoneNumber = UpdatePhoneNumber;

