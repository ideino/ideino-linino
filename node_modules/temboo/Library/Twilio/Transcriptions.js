
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetTranscription
    Returns a an individual transcription of a recorded call.
*/


var GetTranscription = function(session) {
    /*
        Create a new instance of the GetTranscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Transcriptions/GetTranscription"
    GetTranscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTranscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTranscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTranscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTranscriptionInputSet = function() {
    GetTranscriptionInputSet.super_.call(this);
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
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the transcription. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

        /*
        Set the value of the TranscriptionSID input for this Choreo. ((required, string) The id of the transcription to retrieve.)
        */
        this.set_TranscriptionSID = function(value) {
            this.setInput("TranscriptionSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTranscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTranscriptionResultSet = function(resultStream) {
    GetTranscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTranscription, choreography.Choreography);
util.inherits(GetTranscriptionInputSet, choreography.InputSet);
util.inherits(GetTranscriptionResultSet, choreography.ResultSet);
exports.GetTranscription = GetTranscription;


/*
    ListTranscriptions
    Returns a list of transcriptions for the specified account.
*/


var ListTranscriptions = function(session) {
    /*
        Create a new instance of the ListTranscriptions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Transcriptions/ListTranscriptions"
    ListTranscriptions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTranscriptionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTranscriptionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTranscriptions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTranscriptionsInputSet = function() {
    ListTranscriptionsInputSet.super_.call(this);
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
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the transcription. If not specified, the main AccountSID used to authenticate is used in request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListTranscriptions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTranscriptionsResultSet = function(resultStream) {
    ListTranscriptionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListTranscriptions, choreography.Choreography);
util.inherits(ListTranscriptionsInputSet, choreography.InputSet);
util.inherits(ListTranscriptionsResultSet, choreography.ResultSet);
exports.ListTranscriptions = ListTranscriptions;

