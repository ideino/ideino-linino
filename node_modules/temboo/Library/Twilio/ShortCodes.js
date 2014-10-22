
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetShortCode
    Retrieves an individual short code resource.
*/


var GetShortCode = function(session) {
    /*
        Create a new instance of the GetShortCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ShortCodes/GetShortCode"
    GetShortCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetShortCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetShortCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetShortCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetShortCodeInputSet = function() {
    GetShortCodeInputSet.super_.call(this);
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
        Set the value of the ShortCodeSID input for this Choreo. ((required, string) The id of the short code to retrieve.)
        */
        this.set_ShortCodeSID = function(value) {
            this.setInput("ShortCodeSID", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with short code. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShortCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShortCodeResultSet = function(resultStream) {
    GetShortCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetShortCode, choreography.Choreography);
util.inherits(GetShortCodeInputSet, choreography.InputSet);
util.inherits(GetShortCodeResultSet, choreography.ResultSet);
exports.GetShortCode = GetShortCode;


/*
    ListShortCodes
    Returns a list of Twilio short codes which can send and receive SMS messages with mobile phones.
*/


var ListShortCodes = function(session) {
    /*
        Create a new instance of the ListShortCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ShortCodes/ListShortCodes"
    ListShortCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListShortCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListShortCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListShortCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListShortCodesInputSet = function() {
    ListShortCodesInputSet.super_.call(this);
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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) Only return the short code resources with friendly names that exactly match this name.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShortCode input for this Choreo. ((optional, string) Only return the short code resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.)
        */
        this.set_ShortCode = function(value) {
            this.setInput("ShortCode", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the list of short codes. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListShortCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListShortCodesResultSet = function(resultStream) {
    ListShortCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListShortCodes, choreography.Choreography);
util.inherits(ListShortCodesInputSet, choreography.InputSet);
util.inherits(ListShortCodesResultSet, choreography.ResultSet);
exports.ListShortCodes = ListShortCodes;


/*
    UpdateShortCode
    Attempts to update an existing short code resource.
*/


var UpdateShortCode = function(session) {
    /*
        Create a new instance of the UpdateShortCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ShortCodes/UpdateShortCode"
    UpdateShortCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateShortCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateShortCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateShortCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateShortCodeInputSet = function() {
    UpdateShortCodeInputSet.super_.call(this);
        /*
        Set the value of the APIVersion input for this Choreo. ((optional, string) SMSs to this short code will start a new TwiML session with this API version. Either 2010-04-01 or 2008-08-01.)
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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) A human readable description of the short code, with maximum length 64 characters.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShortCodeSID input for this Choreo. ((required, string) The id of the short code to update.)
        */
        this.set_ShortCodeSID = function(value) {
            this.setInput("ShortCodeSID", value);
        }

        /*
        Set the value of the SmsFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsFallbackUrl. Either GET or POST.)
        */
        this.set_SmsFallbackMethod = function(value) {
            this.setInput("SmsFallbackMethod", value);
        }

        /*
        Set the value of the SmsFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML at the SmsUrl.)
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
        Set the value of the SmsURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody sends an SMS to the short code.)
        */
        this.set_SmsURL = function(value) {
            this.setInput("SmsURL", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with short code. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateShortCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateShortCodeResultSet = function(resultStream) {
    UpdateShortCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateShortCode, choreography.Choreography);
util.inherits(UpdateShortCodeInputSet, choreography.InputSet);
util.inherits(UpdateShortCodeResultSet, choreography.ResultSet);
exports.UpdateShortCode = UpdateShortCode;

