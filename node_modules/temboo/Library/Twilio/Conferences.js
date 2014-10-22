
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteParticipant
    Removes an individual partipant from a conference.
*/


var DeleteParticipant = function(session) {
    /*
        Create a new instance of the DeleteParticipant Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Conferences/DeleteParticipant"
    DeleteParticipant.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteParticipantResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteParticipantInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteParticipant
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteParticipantInputSet = function() {
    DeleteParticipantInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The call id associated with the participant to delete.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
        }

        /*
        Set the value of the ConferenceSID input for this Choreo. ((required, string) The id of the conference that the participant is in.)
        */
        this.set_ConferenceSID = function(value) {
            this.setInput("ConferenceSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the conference. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteParticipant Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteParticipantResultSet = function(resultStream) {
    DeleteParticipantResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteParticipant, choreography.Choreography);
util.inherits(DeleteParticipantInputSet, choreography.InputSet);
util.inherits(DeleteParticipantResultSet, choreography.ResultSet);
exports.DeleteParticipant = DeleteParticipant;


/*
    GetConference
    Returns an individual conference.
*/


var GetConference = function(session) {
    /*
        Create a new instance of the GetConference Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Conferences/GetConference"
    GetConference.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetConferenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetConferenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetConference
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetConferenceInputSet = function() {
    GetConferenceInputSet.super_.call(this);
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
        Set the value of the ConferenceSID input for this Choreo. ((required, string) The id of the conference to retrieve.)
        */
        this.set_ConferenceSID = function(value) {
            this.setInput("ConferenceSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the conference. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetConference Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetConferenceResultSet = function(resultStream) {
    GetConferenceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetConference, choreography.Choreography);
util.inherits(GetConferenceInputSet, choreography.InputSet);
util.inherits(GetConferenceResultSet, choreography.ResultSet);
exports.GetConference = GetConference;


/*
    GetParticipant
    Retrieves details for an individual participant of a conference.
*/


var GetParticipant = function(session) {
    /*
        Create a new instance of the GetParticipant Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Conferences/GetParticipant"
    GetParticipant.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetParticipantResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetParticipantInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetParticipant
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetParticipantInputSet = function() {
    GetParticipantInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The call id associated with the participant to retrieve.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
        }

        /*
        Set the value of the ConferencesSID input for this Choreo. ((required, string) The id of the conference that the participant is in.)
        */
        this.set_ConferencesSID = function(value) {
            this.setInput("ConferencesSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the conference. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetParticipant Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetParticipantResultSet = function(resultStream) {
    GetParticipantResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetParticipant, choreography.Choreography);
util.inherits(GetParticipantInputSet, choreography.InputSet);
util.inherits(GetParticipantResultSet, choreography.ResultSet);
exports.GetParticipant = GetParticipant;


/*
    ListConferences
    Returns a list of conferences within an account.
*/


var ListConferences = function(session) {
    /*
        Create a new instance of the ListConferences Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Conferences/ListConferences"
    ListConferences.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListConferencesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListConferencesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListConferences
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListConferencesInputSet = function() {
    ListConferencesInputSet.super_.call(this);
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
        Set the value of the DateCreated input for this Choreo. ((optional, string) Only show conferences that started on this date, given as YYYY-MM-DD. You can also specify operators such as <=YYYY-MM-DD.)
        */
        this.set_DateCreated = function(value) {
            this.setInput("DateCreated", value);
        }

        /*
        Set the value of the DateUpdated input for this Choreo. ((optional, string) Only returns conferences that were last updated on this date, given as YYYY-MM-DD. You can also specify operators such as <=YYYY-MM-DD.)
        */
        this.set_DateUpdated = function(value) {
            this.setInput("DateUpdated", value);
        }

        /*
        Set the value of the FriendlyName input for this Choreo. ((optional, string) Returns conferences who's FriendlyName is the exact match of this string.)
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
        Set the value of the Status input for this Choreo. ((optional, string) Only returns conferences currently in with this status. May be init, in-progress, or completed.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the list of conferences. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListConferences Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListConferencesResultSet = function(resultStream) {
    ListConferencesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListConferences, choreography.Choreography);
util.inherits(ListConferencesInputSet, choreography.InputSet);
util.inherits(ListConferencesResultSet, choreography.ResultSet);
exports.ListConferences = ListConferences;


/*
    UpdateParticipant
    Updates the status of a conference participant.
*/


var UpdateParticipant = function(session) {
    /*
        Create a new instance of the UpdateParticipant Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Conferences/UpdateParticipant"
    UpdateParticipant.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateParticipantResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateParticipantInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateParticipant
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateParticipantInputSet = function() {
    UpdateParticipantInputSet.super_.call(this);
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
        Set the value of the CallSID input for this Choreo. ((required, string) The call id associated with the participant to update.)
        */
        this.set_CallSID = function(value) {
            this.setInput("CallSID", value);
        }

        /*
        Set the value of the ConferenceSID input for this Choreo. ((required, string) The id of the conference that the participant is in.)
        */
        this.set_ConferenceSID = function(value) {
            this.setInput("ConferenceSID", value);
        }

        /*
        Set the value of the Muted input for this Choreo. ((required, string) Specifying true will mute the participant, while false will un-mute. Anything other than true or false is interpreted as false.)
        */
        this.set_Muted = function(value) {
            this.setInput("Muted", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the conference. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateParticipant Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateParticipantResultSet = function(resultStream) {
    UpdateParticipantResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateParticipant, choreography.Choreography);
util.inherits(UpdateParticipantInputSet, choreography.InputSet);
util.inherits(UpdateParticipantResultSet, choreography.ResultSet);
exports.UpdateParticipant = UpdateParticipant;

