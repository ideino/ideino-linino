
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CaptureTextToSpeechPrompt
    Sends a Text-to-Speech message to the specifed Number and captures keypad entries from the receiver.
*/


var CaptureTextToSpeechPrompt = function(session) {
    /*
        Create a new instance of the CaptureTextToSpeechPrompt Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Voice/CaptureTextToSpeechPrompt"
    CaptureTextToSpeechPrompt.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CaptureTextToSpeechPromptResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CaptureTextToSpeechPromptInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CaptureTextToSpeechPrompt
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CaptureTextToSpeechPromptInputSet = function() {
    CaptureTextToSpeechPromptInputSet.super_.call(this);
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
        Set the value of the ByeText input for this Choreo. ((required, string) Body of the text message played after digits are entered.  (with a maximum length of 500 characters).)
        */
        this.set_ByeText = function(value) {
            this.setInput("ByeText", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((conditional, string) A CallbackURL that Nexmo will request when the call ends to notify your application.  If left empty, the Choreo will handle the callback for you and return the results in CallbackData.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the DropIfMachine input for this Choreo. ((optional, integer) Set to 1 to drop the call if a machine is detected.)
        */
        this.set_DropIfMachine = function(value) {
            this.setInput("DropIfMachine", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language used to play back your message.  The default is "en-us" which corresponds to United States english.)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the MaxDigits input for this Choreo. ((required, integer) Number of digits entered by the end user.  (Valid values are 1-9).)
        */
        this.set_MaxDigits = function(value) {
            this.setInput("MaxDigits", value);
        }

        /*
        Set the value of the Repeat input for this Choreo. ((optional, integer) Define how many times you want to repeat the text message (default is 1 , maximum is 10).)
        */
        this.set_Repeat = function(value) {
            this.setInput("Repeat", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Body of the text message. (with a maximum length of 1000 characters).)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Phone number in international format and one recipient per request. (e.g. 447525856424 when sending to UK))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the Voice input for this Choreo. ((optional, string) The voice to be used female (default) or male)
        */
        this.set_Voice = function(value) {
            this.setInput("Voice", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CaptureTextToSpeechPrompt Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CaptureTextToSpeechPromptResultSet = function(resultStream) {
    CaptureTextToSpeechPromptResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "CallbackData" output from this Choreo execution. (The Nexmo callback data retrieved after a user has entered a pin code. Note that this will only be returned when the CallbackURL input  is not provided.)
        */
        this.get_CallbackData = function() {
            return this.getResult("CallbackData");
        }
}

util.inherits(CaptureTextToSpeechPrompt, choreography.Choreography);
util.inherits(CaptureTextToSpeechPromptInputSet, choreography.InputSet);
util.inherits(CaptureTextToSpeechPromptResultSet, choreography.ResultSet);
exports.CaptureTextToSpeechPrompt = CaptureTextToSpeechPrompt;


/*
    ConfirmTextToSpeechPrompt
    Sends a Text-to-Speech message to the specifed Number and confirms the specifed pin-code.
*/


var ConfirmTextToSpeechPrompt = function(session) {
    /*
        Create a new instance of the ConfirmTextToSpeechPrompt Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Voice/ConfirmTextToSpeechPrompt"
    ConfirmTextToSpeechPrompt.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ConfirmTextToSpeechPromptResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ConfirmTextToSpeechPromptInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ConfirmTextToSpeechPrompt
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ConfirmTextToSpeechPromptInputSet = function() {
    ConfirmTextToSpeechPromptInputSet.super_.call(this);
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
        Set the value of the ByeText input for this Choreo. ((required, string) Body of the text message played after digits are entered. (with a maximum length of 500 characters),)
        */
        this.set_ByeText = function(value) {
            this.setInput("ByeText", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((required, string) A URL that Nexmo will request when the call ends to notify your application.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the DropIfMachine input for this Choreo. ((optional, integer) Set to 1 to drop the call if a machine is detected.)
        */
        this.set_DropIfMachine = function(value) {
            this.setInput("DropIfMachine", value);
        }

        /*
        Set the value of the FailedText input for this Choreo. ((required, string) Body of the text message played after 3 failed attempts. (with a maximum length of 500 characters),)
        */
        this.set_FailedText = function(value) {
            this.setInput("FailedText", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language used to play back your message.  The default is "en-us" which corresponds to United States english.)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the MaxDigits input for this Choreo. ((required, integer) Number of digits entered by the end user.)
        */
        this.set_MaxDigits = function(value) {
            this.setInput("MaxDigits", value);
        }

        /*
        Set the value of the PinCode input for this Choreo. ((required, string) Pin-code to be entered by end user (Pin-code length should be equals to MaxDigits).)
        */
        this.set_PinCode = function(value) {
            this.setInput("PinCode", value);
        }

        /*
        Set the value of the Repeat input for this Choreo. ((optional, integer) Define how many times you want to repeat the text message (default is 1 , maximum is 10).)
        */
        this.set_Repeat = function(value) {
            this.setInput("Repeat", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Body of the text message (with a maximum length of 1000 characters).)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Phone number in international format and one recipient per request. (e.g. 447525856424 when sending to UK))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the Voice input for this Choreo. ((optional, string) The voice to be used female (default) or male.)
        */
        this.set_Voice = function(value) {
            this.setInput("Voice", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ConfirmTextToSpeechPrompt Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ConfirmTextToSpeechPromptResultSet = function(resultStream) {
    ConfirmTextToSpeechPromptResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ConfirmTextToSpeechPrompt, choreography.Choreography);
util.inherits(ConfirmTextToSpeechPromptInputSet, choreography.InputSet);
util.inherits(ConfirmTextToSpeechPromptResultSet, choreography.ResultSet);
exports.ConfirmTextToSpeechPrompt = ConfirmTextToSpeechPrompt;


/*
    TextToSpeech
    Sends a Text-to-Speech message to the specified number.
*/


var TextToSpeech = function(session) {
    /*
        Create a new instance of the TextToSpeech Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Voice/TextToSpeech"
    TextToSpeech.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TextToSpeechResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TextToSpeechInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TextToSpeech
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TextToSpeechInputSet = function() {
    TextToSpeechInputSet.super_.call(this);
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
        Set the value of the CallbackMethod input for this Choreo. ((optional, string) The HTTP method for your callback. Must be GET (default) or POST.)
        */
        this.set_CallbackMethod = function(value) {
            this.setInput("CallbackMethod", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((optional, string) A URL that Nexmo will request when the call ends to notify your application.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the DropIfMachine input for this Choreo. ((optional, integer) Set to 1 to drop the call if a machine is detected.)
        */
        this.set_DropIfMachine = function(value) {
            this.setInput("DropIfMachine", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language used to play back your message.  The default is "en-us" which corresponds to United States english.)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Repeat input for this Choreo. ((optional, integer) Define how many times you want to repeat the text message (default is 1 , maximum is 10).)
        */
        this.set_Repeat = function(value) {
            this.setInput("Repeat", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) Body of the text message (with a maximum length of 1000 characters).)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) Phone number in international format and one recipient per request. (e.g.: 447525856424 when sending to UK))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the Voice input for this Choreo. ((optional, string) The voice to be used female (default) or male)
        */
        this.set_Voice = function(value) {
            this.setInput("Voice", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TextToSpeech Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TextToSpeechResultSet = function(resultStream) {
    TextToSpeechResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TextToSpeech, choreography.Choreography);
util.inherits(TextToSpeechInputSet, choreography.InputSet);
util.inherits(TextToSpeechResultSet, choreography.ResultSet);
exports.TextToSpeech = TextToSpeech;

