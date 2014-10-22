
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CanadianPostalCodes
    Verifies that a given zip code matches the format expected for Canadian addresses.
*/


var CanadianPostalCodes = function(session) {
    /*
        Create a new instance of the CanadianPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/CanadianPostalCodes"
    CanadianPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CanadianPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CanadianPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CanadianPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CanadianPostalCodesInputSet = function() {
    CanadianPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CanadianPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CanadianPostalCodesResultSet = function(resultStream) {
    CanadianPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(CanadianPostalCodes, choreography.Choreography);
util.inherits(CanadianPostalCodesInputSet, choreography.InputSet);
util.inherits(CanadianPostalCodesResultSet, choreography.ResultSet);
exports.CanadianPostalCodes = CanadianPostalCodes;


/*
    DutchPostalCodes
    Verifies that a given zip code matches the format expected for Dutch addresses.
*/


var DutchPostalCodes = function(session) {
    /*
        Create a new instance of the DutchPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/DutchPostalCodes"
    DutchPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DutchPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DutchPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DutchPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DutchPostalCodesInputSet = function() {
    DutchPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DutchPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DutchPostalCodesResultSet = function(resultStream) {
    DutchPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(DutchPostalCodes, choreography.Choreography);
util.inherits(DutchPostalCodesInputSet, choreography.InputSet);
util.inherits(DutchPostalCodesResultSet, choreography.ResultSet);
exports.DutchPostalCodes = DutchPostalCodes;


/*
    EmailAddress
    Verifies that a given email address matches an expected standard pattern.
*/


var EmailAddress = function(session) {
    /*
        Create a new instance of the EmailAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/EmailAddress"
    EmailAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EmailAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EmailAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EmailAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EmailAddressInputSet = function() {
    EmailAddressInputSet.super_.call(this);
        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address to validate.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EmailAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EmailAddressResultSet = function(resultStream) {
    EmailAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(EmailAddress, choreography.Choreography);
util.inherits(EmailAddressInputSet, choreography.InputSet);
util.inherits(EmailAddressResultSet, choreography.ResultSet);
exports.EmailAddress = EmailAddress;


/*
    GermanPostalCodes
    Verifies that a given zip code matches the format expected for German addresses.
*/


var GermanPostalCodes = function(session) {
    /*
        Create a new instance of the GermanPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/GermanPostalCodes"
    GermanPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GermanPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GermanPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GermanPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GermanPostalCodesInputSet = function() {
    GermanPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GermanPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GermanPostalCodesResultSet = function(resultStream) {
    GermanPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(GermanPostalCodes, choreography.Choreography);
util.inherits(GermanPostalCodesInputSet, choreography.InputSet);
util.inherits(GermanPostalCodesResultSet, choreography.ResultSet);
exports.GermanPostalCodes = GermanPostalCodes;


/*
    JSON
    Determines if a specified JSON string is well-formed.
*/


var JSON = function(session) {
    /*
        Create a new instance of the JSON Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/JSON"
    JSON.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new JSONResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new JSONInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the JSON
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var JSONInputSet = function() {
    JSONInputSet.super_.call(this);
        /*
        Set the value of the JSON input for this Choreo. ((required, multiline) The JSON string to validate.)
        */
        this.set_JSON = function(value) {
            this.setInput("JSON", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the JSON Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var JSONResultSet = function(resultStream) {
    JSONResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. ((string) The result of the JSON validation. This will return "valid" or "invalid".)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
}

util.inherits(JSON, choreography.Choreography);
util.inherits(JSONInputSet, choreography.InputSet);
util.inherits(JSONResultSet, choreography.ResultSet);
exports.JSON = JSON;


/*
    PasswordCriteria
    Verifies that a given password matches a standard pattern for passwords.
*/


var PasswordCriteria = function(session) {
    /*
        Create a new instance of the PasswordCriteria Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/PasswordCriteria"
    PasswordCriteria.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PasswordCriteriaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PasswordCriteriaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PasswordCriteria
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PasswordCriteriaInputSet = function() {
    PasswordCriteriaInputSet.super_.call(this);
        /*
        Set the value of the MaxLength input for this Choreo. ((optional, integer) The max length you want to allow for the password. Defaults to 14.)
        */
        this.set_MaxLength = function(value) {
            this.setInput("MaxLength", value);
        }

        /*
        Set the value of the MinLength input for this Choreo. ((optional, integer) The minimum length you want to allow for the password. Defaults to 6.)
        */
        this.set_MinLength = function(value) {
            this.setInput("MinLength", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The password to validate.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PasswordCriteria Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PasswordCriteriaResultSet = function(resultStream) {
    PasswordCriteriaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(PasswordCriteria, choreography.Choreography);
util.inherits(PasswordCriteriaInputSet, choreography.InputSet);
util.inherits(PasswordCriteriaResultSet, choreography.ResultSet);
exports.PasswordCriteria = PasswordCriteria;


/*
    RussianPostalCodes
    Verifies that a given zip code matches the format expected for Russian addresses.
*/


var RussianPostalCodes = function(session) {
    /*
        Create a new instance of the RussianPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/RussianPostalCodes"
    RussianPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RussianPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RussianPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RussianPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RussianPostalCodesInputSet = function() {
    RussianPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RussianPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RussianPostalCodesResultSet = function(resultStream) {
    RussianPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(RussianPostalCodes, choreography.Choreography);
util.inherits(RussianPostalCodesInputSet, choreography.InputSet);
util.inherits(RussianPostalCodesResultSet, choreography.ResultSet);
exports.RussianPostalCodes = RussianPostalCodes;


/*
    UKPostalCodes
    Verifies that a given zip code matches the format expected for UK addresses.
*/


var UKPostalCodes = function(session) {
    /*
        Create a new instance of the UKPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/UKPostalCodes"
    UKPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UKPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UKPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UKPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UKPostalCodesInputSet = function() {
    UKPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate. Letters must be in uppercase to be valid.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UKPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UKPostalCodesResultSet = function(resultStream) {
    UKPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match -- "valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(UKPostalCodes, choreography.Choreography);
util.inherits(UKPostalCodesInputSet, choreography.InputSet);
util.inherits(UKPostalCodesResultSet, choreography.ResultSet);
exports.UKPostalCodes = UKPostalCodes;


/*
    USPostalCodes
    Verifies that a given zip code matches the format expected for US addresses.
*/


var USPostalCodes = function(session) {
    /*
        Create a new instance of the USPostalCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/USPostalCodes"
    USPostalCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new USPostalCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new USPostalCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the USPostalCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var USPostalCodesInputSet = function() {
    USPostalCodesInputSet.super_.call(this);
        /*
        Set the value of the ZipCode input for this Choreo. ((required, string) The zip code to validate.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the USPostalCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var USPostalCodesResultSet = function(resultStream) {
    USPostalCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Match" output from this Choreo execution. ((string) Contains a string indicating the result of the match --"valid" or "invalid".)
        */
        this.get_Match = function() {
            return this.getResult("Match");
        }
}

util.inherits(USPostalCodes, choreography.Choreography);
util.inherits(USPostalCodesInputSet, choreography.InputSet);
util.inherits(USPostalCodesResultSet, choreography.ResultSet);
exports.USPostalCodes = USPostalCodes;


/*
    XML
    Validates XML for basic well-formedness and allows you to check XML against a specified XSD schema file.
*/


var XML = function(session) {
    /*
        Create a new instance of the XML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Validation/XML"
    XML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLInputSet = function() {
    XMLInputSet.super_.call(this);
        /*
        Set the value of the XMLFile input for this Choreo. ((required, xml) The XML file you want to validate.)
        */
        this.set_XMLFile = function(value) {
            this.setInput("XMLFile", value);
        }

        /*
        Set the value of the XSDFile input for this Choreo. ((optional, xml) The XSD file to validate an XML file against.)
        */
        this.set_XSDFile = function(value) {
            this.setInput("XSDFile", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLResultSet = function(resultStream) {
    XMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. ((string) The result of the validation. Returns the string "valid" or "invalid".)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
        /*
        Retrieve the value for the "Error" output from this Choreo execution. ((string) The error description that is generated if a validation error occurs.)
        */
        this.get_Error = function() {
            return this.getResult("Error");
        }
}

util.inherits(XML, choreography.Choreography);
util.inherits(XMLInputSet, choreography.InputSet);
util.inherits(XMLResultSet, choreography.ResultSet);
exports.XML = XML;

