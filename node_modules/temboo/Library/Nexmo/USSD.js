
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Prompt
    Sends a text message to the specified number using USSD protocol.  You can then listen to inbound messages.
*/


var Prompt = function(session) {
    /*
        Create a new instance of the Prompt Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/USSD/Prompt"
    Prompt.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PromptResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PromptInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Prompt
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PromptInputSet = function() {
    PromptInputSet.super_.call(this);
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
        Set the value of the ClientReference input for this Choreo. ((optional, string) Include a note for your reference. (40 characters max).)
        */
        this.set_ClientReference = function(value) {
            this.setInput("ClientReference", value);
        }

        /*
        Set the value of the DeliveryReceipt input for this Choreo. ((optional, integer) Set to 1 to receive a Delivery Receipt for this message. Make sure to configure your "Callback URL" in your "API Settings".)
        */
        this.set_DeliveryReceipt = function(value) {
            this.setInput("DeliveryReceipt", value);
        }

        /*
        Set the value of the From input for this Choreo. ((required, string) Sender address could be alphanumeric (e.g. MyCompany20). Restrictions may apply depending on the destination.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the NetworkCode input for this Choreo. ((optional, string) Sends this message to the specifed network operator (MCCMNC).)
        */
        this.set_NetworkCode = function(value) {
            this.setInput("NetworkCode", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Required when Type is "text".  Body of the text message (with a maximum length of 3200 characters))
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Mobile number in international format, and one recipient per request. (e.g. 447525856424 or 00447525856424 when sending to UK))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Prompt Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PromptResultSet = function(resultStream) {
    PromptResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Prompt, choreography.Choreography);
util.inherits(PromptInputSet, choreography.InputSet);
util.inherits(PromptResultSet, choreography.ResultSet);
exports.Prompt = Prompt;


/*
    Push
    Sends a text message to the specified number using USSD protocol. 
*/


var Push = function(session) {
    /*
        Create a new instance of the Push Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/USSD/Push"
    Push.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PushResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PushInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Push
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PushInputSet = function() {
    PushInputSet.super_.call(this);
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
        Set the value of the ClientReference input for this Choreo. ((optional, string) Include a note for your reference. (40 characters max).)
        */
        this.set_ClientReference = function(value) {
            this.setInput("ClientReference", value);
        }

        /*
        Set the value of the DeliveryReceipt input for this Choreo. ((optional, integer) Set to 1 to receive a Delivery Receipt for this message. Make sure to configure your "Callback URL" in your "API Settings".)
        */
        this.set_DeliveryReceipt = function(value) {
            this.setInput("DeliveryReceipt", value);
        }

        /*
        Set the value of the From input for this Choreo. ((required, string) Sender address could be alphanumeric (e.g. MyCompany20). Restrictions may apply depending on the destination.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the NetworkCode input for this Choreo. ((optional, string) Sends this message to the specifed network operator (MCCMNC).)
        */
        this.set_NetworkCode = function(value) {
            this.setInput("NetworkCode", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Required when Type is "text".  Body of the text message. (with a maximum length of 3200 characters).)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Mobile number in international format, and one recipient per request. (e.g. 447525856424 or 00447525856424 when sending to UK.))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Push Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PushResultSet = function(resultStream) {
    PushResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Push, choreography.Choreography);
util.inherits(PushInputSet, choreography.InputSet);
util.inherits(PushResultSet, choreography.ResultSet);
exports.Push = Push;

