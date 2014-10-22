
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchMessage
    Search for a previously sent message by Message ID.  Note that a sent message won't be immediately available for search.
*/


var SearchMessage = function(session) {
    /*
        Create a new instance of the SearchMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Search/SearchMessage"
    SearchMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchMessageInputSet = function() {
    SearchMessageInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the MessageID input for this Choreo. ((required, string) Your Message ID.)
        */
        this.set_MessageID = function(value) {
            this.setInput("MessageID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchMessageResultSet = function(resultStream) {
    SearchMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchMessage, choreography.Choreography);
util.inherits(SearchMessageInputSet, choreography.InputSet);
util.inherits(SearchMessageResultSet, choreography.ResultSet);
exports.SearchMessage = SearchMessage;


/*
    SearchMessages
    Search for previously sent messages by Message IDs.  Note that  sent messages won't be immediately available for search.
*/


var SearchMessages = function(session) {
    /*
        Create a new instance of the SearchMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Search/SearchMessages"
    SearchMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchMessagesInputSet = function() {
    SearchMessagesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the MessageIDs input for this Choreo. ((required, string) Comma-separated list of up to 10 MessageIDs)
        */
        this.set_MessageIDs = function(value) {
            this.setInput("MessageIDs", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchMessagesResultSet = function(resultStream) {
    SearchMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchMessages, choreography.Choreography);
util.inherits(SearchMessagesInputSet, choreography.InputSet);
util.inherits(SearchMessagesResultSet, choreography.ResultSet);
exports.SearchMessages = SearchMessages;


/*
    SearchMessagesByRecipientAndDate
    Searches sent messages by Date and Recipient. Note that a sent message won't be immediately available for searching.
*/


var SearchMessagesByRecipientAndDate = function(session) {
    /*
        Create a new instance of the SearchMessagesByRecipientAndDate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Search/SearchMessagesByRecipientAndDate"
    SearchMessagesByRecipientAndDate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchMessagesByRecipientAndDateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchMessagesByRecipientAndDateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchMessagesByRecipientAndDate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchMessagesByRecipientAndDateInputSet = function() {
    SearchMessagesByRecipientAndDateInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, string) Date message was sent in the form of YYYY-MM-DD (UTC). (e.g. 2013-07-01))
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) The recipient's phone number.  (e.g. 123456780))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchMessagesByRecipientAndDate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchMessagesByRecipientAndDateResultSet = function(resultStream) {
    SearchMessagesByRecipientAndDateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.  Note that if no matches are found for the specified Date and To, the Response will contain an error-code "-2".)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchMessagesByRecipientAndDate, choreography.Choreography);
util.inherits(SearchMessagesByRecipientAndDateInputSet, choreography.InputSet);
util.inherits(SearchMessagesByRecipientAndDateResultSet, choreography.ResultSet);
exports.SearchMessagesByRecipientAndDate = SearchMessagesByRecipientAndDate;


/*
    SearchNumbers
    Get available inbound numbers for a given country.
*/


var SearchNumbers = function(session) {
    /*
        Create a new instance of the SearchNumbers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Search/SearchNumbers"
    SearchNumbers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchNumbersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchNumbersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchNumbers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchNumbersInputSet = function() {
    SearchNumbersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) 2-digit country code. (e.g. CA))
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Page index)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Pattern input for this Choreo. ((optional, string) Pattern to match.)
        */
        this.set_Pattern = function(value) {
            this.setInput("Pattern", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Size input for this Choreo. ((optional, integer) Page size.)
        */
        this.set_Size = function(value) {
            this.setInput("Size", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchNumbers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchNumbersResultSet = function(resultStream) {
    SearchNumbersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchNumbers, choreography.Choreography);
util.inherits(SearchNumbersInputSet, choreography.InputSet);
util.inherits(SearchNumbersResultSet, choreography.ResultSet);
exports.SearchNumbers = SearchNumbers;


/*
    SearchRejectedMessages
    Search for a previously sent message by Message ID.  Note that a sent message won't be immediately available for search.
*/


var SearchRejectedMessages = function(session) {
    /*
        Create a new instance of the SearchRejectedMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Search/SearchRejectedMessages"
    SearchRejectedMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchRejectedMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchRejectedMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchRejectedMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchRejectedMessagesInputSet = function() {
    SearchRejectedMessagesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, string) Date message was sent in the form of YYYY-MM-DD. (e.g. 2013-07-01))
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the MessageID input for this Choreo. ((required, string) Your Message ID.)
        */
        this.set_MessageID = function(value) {
            this.setInput("MessageID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) The recipient's phone number.  (e.g. 123456780))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchRejectedMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchRejectedMessagesResultSet = function(resultStream) {
    SearchRejectedMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchRejectedMessages, choreography.Choreography);
util.inherits(SearchRejectedMessagesInputSet, choreography.InputSet);
util.inherits(SearchRejectedMessagesResultSet, choreography.ResultSet);
exports.SearchRejectedMessages = SearchRejectedMessages;

