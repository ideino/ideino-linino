
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Base64Decode
    Returns the specified Base64 encoded string as decoded text.
*/


var Base64Decode = function(session) {
    /*
        Create a new instance of the Base64Decode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/Base64Decode"
    Base64Decode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new Base64DecodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new Base64DecodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Base64Decode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var Base64DecodeInputSet = function() {
    Base64DecodeInputSet.super_.call(this);
        /*
        Set the value of the Base64EncodedText input for this Choreo. ((required, string) The Base64 encoded text to decode. Note that Base64 encoded binary data is not allowed.)
        */
        this.set_Base64EncodedText = function(value) {
            this.setInput("Base64EncodedText", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Base64Decode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var Base64DecodeResultSet = function(resultStream) {
    Base64DecodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Text" output from this Choreo execution. ((string) The decoded text.)
        */
        this.get_Text = function() {
            return this.getResult("Text");
        }
}

util.inherits(Base64Decode, choreography.Choreography);
util.inherits(Base64DecodeInputSet, choreography.InputSet);
util.inherits(Base64DecodeResultSet, choreography.ResultSet);
exports.Base64Decode = Base64Decode;


/*
    Base64Encode
    Returns the specified text or file as a Base64 encoded string.
*/


var Base64Encode = function(session) {
    /*
        Create a new instance of the Base64Encode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/Base64Encode"
    Base64Encode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new Base64EncodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new Base64EncodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Base64Encode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var Base64EncodeInputSet = function() {
    Base64EncodeInputSet.super_.call(this);
        /*
        Set the value of the Text input for this Choreo. ((conditional, string) The text that should be Base64 encoded. Required unless providing a value for the URL input.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((conditional, string) A URL to a hosted file that should be Base64 encoded. Required unless providing a value for the Text input.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Base64Encode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var Base64EncodeResultSet = function(resultStream) {
    Base64EncodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Base64EncodedText" output from this Choreo execution. ((string) The Base64 encoded text.)
        */
        this.get_Base64EncodedText = function() {
            return this.getResult("Base64EncodedText");
        }
}

util.inherits(Base64Encode, choreography.Choreography);
util.inherits(Base64EncodeInputSet, choreography.InputSet);
util.inherits(Base64EncodeResultSet, choreography.ResultSet);
exports.Base64Encode = Base64Encode;


/*
    HTMLEscape
    Replaces HTML markup characters in the specified text with equivalent character entity names. 
*/


var HTMLEscape = function(session) {
    /*
        Create a new instance of the HTMLEscape Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/HTMLEscape"
    HTMLEscape.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HTMLEscapeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HTMLEscapeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HTMLEscape
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HTMLEscapeInputSet = function() {
    HTMLEscapeInputSet.super_.call(this);
        /*
        Set the value of the UnescapedHTML input for this Choreo. ((required, string) The HTML that needs to be escaped.)
        */
        this.set_UnescapedHTML = function(value) {
            this.setInput("UnescapedHTML", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HTMLEscape Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HTMLEscapeResultSet = function(resultStream) {
    HTMLEscapeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "EscapedHTML" output from this Choreo execution. ((string) The escaped HTML.)
        */
        this.get_EscapedHTML = function() {
            return this.getResult("EscapedHTML");
        }
}

util.inherits(HTMLEscape, choreography.Choreography);
util.inherits(HTMLEscapeInputSet, choreography.InputSet);
util.inherits(HTMLEscapeResultSet, choreography.ResultSet);
exports.HTMLEscape = HTMLEscape;


/*
    HTMLUnescape
    Replaces character entity names in the specified text with equivalent HTML markup characters.
*/


var HTMLUnescape = function(session) {
    /*
        Create a new instance of the HTMLUnescape Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/HTMLUnescape"
    HTMLUnescape.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HTMLUnescapeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HTMLUnescapeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HTMLUnescape
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HTMLUnescapeInputSet = function() {
    HTMLUnescapeInputSet.super_.call(this);
        /*
        Set the value of the EscapedHTML input for this Choreo. ((required, string) The escaped HTML that should be unescaped.)
        */
        this.set_EscapedHTML = function(value) {
            this.setInput("EscapedHTML", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HTMLUnescape Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HTMLUnescapeResultSet = function(resultStream) {
    HTMLUnescapeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "UnescapedHTML" output from this Choreo execution. ((string) The unescaped HTML.)
        */
        this.get_UnescapedHTML = function() {
            return this.getResult("UnescapedHTML");
        }
}

util.inherits(HTMLUnescape, choreography.Choreography);
util.inherits(HTMLUnescapeInputSet, choreography.InputSet);
util.inherits(HTMLUnescapeResultSet, choreography.ResultSet);
exports.HTMLUnescape = HTMLUnescape;


/*
    URLDecode
    Removes URL encoding from the specified text string.
*/


var URLDecode = function(session) {
    /*
        Create a new instance of the URLDecode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/URLDecode"
    URLDecode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new URLDecodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new URLDecodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the URLDecode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var URLDecodeInputSet = function() {
    URLDecodeInputSet.super_.call(this);
        /*
        Set the value of the Text input for this Choreo. ((required, string) The text that should be URL decoded.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the URLDecode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var URLDecodeResultSet = function(resultStream) {
    URLDecodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URLDecodedText" output from this Choreo execution. ((string) The URL decoded text.)
        */
        this.get_URLDecodedText = function() {
            return this.getResult("URLDecodedText");
        }
}

util.inherits(URLDecode, choreography.Choreography);
util.inherits(URLDecodeInputSet, choreography.InputSet);
util.inherits(URLDecodeResultSet, choreography.ResultSet);
exports.URLDecode = URLDecode;


/*
    URLEncode
    Returns the specified text string in the application/x-www-form-urlencoded format.
*/


var URLEncode = function(session) {
    /*
        Create a new instance of the URLEncode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Encoding/URLEncode"
    URLEncode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new URLEncodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new URLEncodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the URLEncode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var URLEncodeInputSet = function() {
    URLEncodeInputSet.super_.call(this);
        /*
        Set the value of the Text input for this Choreo. ((required, string) The text that should be URL encoded.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the URLEncode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var URLEncodeResultSet = function(resultStream) {
    URLEncodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URLEncodedText" output from this Choreo execution. ((string) The URL encoded text.)
        */
        this.get_URLEncodedText = function() {
            return this.getResult("URLEncodedText");
        }
}

util.inherits(URLEncode, choreography.Choreography);
util.inherits(URLEncodeInputSet, choreography.InputSet);
util.inherits(URLEncodeResultSet, choreography.ResultSet);
exports.URLEncode = URLEncode;

