
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateApplication
    Creates a new application within your account.
*/


var CreateApplication = function(session) {
    /*
        Create a new instance of the CreateApplication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Applications/CreateApplication"
    CreateApplication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateApplicationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateApplicationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateApplication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateApplicationInputSet = function() {
    CreateApplicationInputSet.super_.call(this);
        /*
        Set the value of the APIVersion input for this Choreo. ((optional, string) Requests to this application's URLs will start a new TwiML session with this API version. Either 2010-04-01 or 2008-08-01. Defaults to your account's default API version.)
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
        Set the value of the FriendlyName input for this Choreo. ((required, string) A human readable description of the new application. Maximum 64 characters.)
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
        Set the value of the SmsFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsFallbackUrl. Must be either GET or POST. Defaults to POST.)
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
        Set the value of the SmsMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsUrl. Must be either GET or POST. Defaults to POST.)
        */
        this.set_SmsMethod = function(value) {
            this.setInput("SmsMethod", value);
        }

        /*
        Set the value of the SmsStatusCallback input for this Choreo. ((optional, string) Twilio will make a POST request to this URL to pass status parameters (such as sent or failed) to your application.)
        */
        this.set_SmsStatusCallback = function(value) {
            this.setInput("SmsStatusCallback", value);
        }

        /*
        Set the value of the SmsURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody sends an SMS to a phone number assigned to this application.)
        */
        this.set_SmsURL = function(value) {
            this.setInput("SmsURL", value);
        }

        /*
        Set the value of the StatusCallbackMethod input for this Choreo. ((optional, string) The HTTP method Twilio will use to make requests to the StatusCallback URL. Either GET or POST. Defaults to POST.)
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
        Set the value of the VoiceApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle phone calls to this number.)
        */
        this.set_VoiceApplicationSID = function(value) {
            this.setInput("VoiceApplicationSID", value);
        }

        /*
        Set the value of the VoiceCallerIDLookup input for this Choreo. ((optional, string) Do a lookup of a caller's name from the CNAM database and post it to your app. Either true or false. Defaults to false.)
        */
        this.set_VoiceCallerIDLookup = function(value) {
            this.setInput("VoiceCallerIDLookup", value);
        }

        /*
        Set the value of the VoiceFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceFallbackUrl. Either GET or POST. Defaults to POST.)
        */
        this.set_VoiceFallbackMethod = function(value) {
            this.setInput("VoiceFallbackMethod", value);
        }

        /*
        Set the value of the VoiceFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML at Url.)
        */
        this.set_VoiceFallbackURL = function(value) {
            this.setInput("VoiceFallbackURL", value);
        }

        /*
        Set the value of the VoiceMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceUrl. Must be either GET or POST. Defaults to POST.)
        */
        this.set_VoiceMethod = function(value) {
            this.setInput("VoiceMethod", value);
        }

        /*
        Set the value of the VoiceURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody dials a phone number assigned to this application.)
        */
        this.set_VoiceURL = function(value) {
            this.setInput("VoiceURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateApplication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateApplicationResultSet = function(resultStream) {
    CreateApplicationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateApplication, choreography.Choreography);
util.inherits(CreateApplicationInputSet, choreography.InputSet);
util.inherits(CreateApplicationResultSet, choreography.ResultSet);
exports.CreateApplication = CreateApplication;


/*
    DeleteApplication
    Deletes an application from your Twilio account.
*/


var DeleteApplication = function(session) {
    /*
        Create a new instance of the DeleteApplication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Applications/DeleteApplication"
    DeleteApplication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteApplicationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteApplicationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteApplication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteApplicationInputSet = function() {
    DeleteApplicationInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the ApplicationSID input for this Choreo. ((required, string) The id of the application to retrieve.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteApplication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteApplicationResultSet = function(resultStream) {
    DeleteApplicationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteApplication, choreography.Choreography);
util.inherits(DeleteApplicationInputSet, choreography.InputSet);
util.inherits(DeleteApplicationResultSet, choreography.ResultSet);
exports.DeleteApplication = DeleteApplication;


/*
    GetApplication
    Returns the details for an individual application associated with your Twilio account.
*/


var GetApplication = function(session) {
    /*
        Create a new instance of the GetApplication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Applications/GetApplication"
    GetApplication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetApplicationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetApplicationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetApplication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetApplicationInputSet = function() {
    GetApplicationInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the ApplicationSID input for this Choreo. ((required, string) The id of the application to retrieve.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetApplication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetApplicationResultSet = function(resultStream) {
    GetApplicationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetApplication, choreography.Choreography);
util.inherits(GetApplicationInputSet, choreography.InputSet);
util.inherits(GetApplicationResultSet, choreography.ResultSet);
exports.GetApplication = GetApplication;


/*
    ListApplications
    Returns a list of Twilio applications associated with your account.
*/


var ListApplications = function(session) {
    /*
        Create a new instance of the ListApplications Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Applications/ListApplications"
    ListApplications.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListApplicationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListApplicationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListApplications
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListApplicationsInputSet = function() {
    ListApplicationsInputSet.super_.call(this);
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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) Only return applications with friendly names that exactly match this name.)
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

}

/*
A ResultSet with methods tailored to the values returned by the ListApplications Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListApplicationsResultSet = function(resultStream) {
    ListApplicationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListApplications, choreography.Choreography);
util.inherits(ListApplicationsInputSet, choreography.InputSet);
util.inherits(ListApplicationsResultSet, choreography.ResultSet);
exports.ListApplications = ListApplications;


/*
    UpdateApplication
    Updates an existing application within your account.
*/


var UpdateApplication = function(session) {
    /*
        Create a new instance of the UpdateApplication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Applications/UpdateApplication"
    UpdateApplication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateApplicationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateApplicationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateApplication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateApplicationInputSet = function() {
    UpdateApplicationInputSet.super_.call(this);
        /*
        Set the value of the APIVersion input for this Choreo. ((optional, string) Requests to this application's URLs will start a new TwiML session with this API version. Either 2010-04-01 or 2008-08-01. Defaults to your account's default API version.)
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
        Set the value of the ApplicationSID input for this Choreo. ((required, string) The id of the application to update.)
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
        Set the value of the FriendlyName input for this Choreo. ((optional, string) A human readable description of the new application. Maximum 64 characters.)
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
        Set the value of the SmsFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsFallbackUrl. Must be either GET or POST. Defaults to POST.)
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
        Set the value of the SmsMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the SmsUrl. Must be either GET or POST. Defaults to POST.)
        */
        this.set_SmsMethod = function(value) {
            this.setInput("SmsMethod", value);
        }

        /*
        Set the value of the SmsStatusCallback input for this Choreo. ((optional, string) Twilio will make a POST request to this URL to pass status parameters (such as sent or failed) to your application.)
        */
        this.set_SmsStatusCallback = function(value) {
            this.setInput("SmsStatusCallback", value);
        }

        /*
        Set the value of the SmsURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody sends an SMS to a phone number assigned to this application.)
        */
        this.set_SmsURL = function(value) {
            this.setInput("SmsURL", value);
        }

        /*
        Set the value of the StatusCallbackMethod input for this Choreo. ((optional, string) The HTTP method Twilio will use to make requests to the StatusCallback URL. Either GET or POST. Defaults to POST.)
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
        Set the value of the VoiceApplicationSID input for this Choreo. ((optional, string) The 34 character sid of the application Twilio should use to handle phone calls to this number.)
        */
        this.set_VoiceApplicationSID = function(value) {
            this.setInput("VoiceApplicationSID", value);
        }

        /*
        Set the value of the VoiceCallerIDLookup input for this Choreo. ((optional, string) Do a lookup of a caller's name from the CNAM database and post it to your app. Either true or false. Defaults to false.)
        */
        this.set_VoiceCallerIDLookup = function(value) {
            this.setInput("VoiceCallerIDLookup", value);
        }

        /*
        Set the value of the VoiceFallbackMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceFallbackUrl. Either GET or POST. Defaults to POST.)
        */
        this.set_VoiceFallbackMethod = function(value) {
            this.setInput("VoiceFallbackMethod", value);
        }

        /*
        Set the value of the VoiceFallbackURL input for this Choreo. ((optional, string) A URL that Twilio will request if an error occurs requesting or executing the TwiML at Url.)
        */
        this.set_VoiceFallbackURL = function(value) {
            this.setInput("VoiceFallbackURL", value);
        }

        /*
        Set the value of the VoiceMethod input for this Choreo. ((optional, string) The HTTP method that should be used to request the VoiceUrl. Must be either GET or POST. Defaults to POST.)
        */
        this.set_VoiceMethod = function(value) {
            this.setInput("VoiceMethod", value);
        }

        /*
        Set the value of the VoiceURL input for this Choreo. ((optional, string) The URL that Twilio should request when somebody dials a phone number assigned to this application.)
        */
        this.set_VoiceURL = function(value) {
            this.setInput("VoiceURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateApplication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateApplicationResultSet = function(resultStream) {
    UpdateApplicationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateApplication, choreography.Choreography);
util.inherits(UpdateApplicationInputSet, choreography.InputSet);
util.inherits(UpdateApplicationResultSet, choreography.ResultSet);
exports.UpdateApplication = UpdateApplication;

