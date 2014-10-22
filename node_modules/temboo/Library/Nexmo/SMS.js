
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SendMessage
    Send a text message to any global number.
*/


var SendMessage = function(session) {
    /*
        Create a new instance of the SendMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/SMS/SendMessage"
    SendMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendMessageInputSet = function() {
    SendMessageInputSet.super_.call(this);
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
        Set the value of the Body input for this Choreo. ((optional, string) Hex encoded binary data. (e.g. 0011223344556677).  Required when Type is binary.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the CallbackID input for this Choreo. ((conditional, string) A unique identifier that is part of your Temboo callback URL registered at Nexmo. Required in order to listen for a reply. See Choreo description for details.)
        */
        this.set_CallbackID = function(value) {
            this.setInput("CallbackID", value);
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
        Set the value of the From input for this Choreo. ((required, string) Sender address may be alphanumeric (e.g. MyCompany20). Restrictions may apply, depending on the destination.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the MessageClass input for this Choreo. ((optional, integer) Set to 0 for Flash SMS.)
        */
        this.set_MessageClass = function(value) {
            this.setInput("MessageClass", value);
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
        Set the value of the TTL input for this Choreo. ((optional, integer) Message life span (Time to  live) in milliseconds.)
        */
        this.set_TTL = function(value) {
            this.setInput("TTL", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Required when Type is "text".  Body of the text message (with a maximum length of 3200 characters).)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the Timeout input for this Choreo. ((conditional, integer) The amount of time (in minutes) to wait for a reply when a CallbackID is provided. Defaults to 10. See Choreo description for details.)
        */
        this.set_Timeout = function(value) {
            this.setInput("Timeout", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Mobile number in international format, and one recipient per request. (e.g. 447525856424 or 00447525856424 when sending to UK).)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) This can be omitted for text (default), but is required when sending a Binary (binary), WAP Push (wappush), Unicode message (unicode), VCal (vcal) or VCard (vcard).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the UDH input for this Choreo. ((optional, string) Hex encoded User data header. (e.g. 06050415811581) (Required when Type is binary).)
        */
        this.set_UDH = function(value) {
            this.setInput("UDH", value);
        }

        /*
        Set the value of the VCal input for this Choreo. ((optional, string) Correctly formatted VCal text body.)
        */
        this.set_VCal = function(value) {
            this.setInput("VCal", value);
        }

        /*
        Set the value of the VCard input for this Choreo. ((optional, string) Correctly formatted VCard text body.)
        */
        this.set_VCard = function(value) {
            this.setInput("VCard", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendMessageResultSet = function(resultStream) {
    SendMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "CallbackData" output from this Choreo execution. (The Nexmo callback data retrieved after a user has replied to the SMS message. This is only returned if you've setup your Temboo callback URL at Nexmo, and  have provided the CallbackID input.)
        */
        this.get_CallbackData = function() {
            return this.getResult("CallbackData");
        }
}

util.inherits(SendMessage, choreography.Choreography);
util.inherits(SendMessageInputSet, choreography.InputSet);
util.inherits(SendMessageResultSet, choreography.ResultSet);
exports.SendMessage = SendMessage;

