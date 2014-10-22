
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Checksum
    Returns a checksum of the specified text calculated using the specified algorithm. 
*/


var Checksum = function(session) {
    /*
        Create a new instance of the Checksum Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Hashing/Checksum"
    Checksum.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChecksumResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChecksumInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Checksum
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChecksumInputSet = function() {
    ChecksumInputSet.super_.call(this);
        /*
        Set the value of the Algorithm input for this Choreo. ((required, string) Algorithm used to calculate the checksum. Valid values are: FIX44,  MD5+BASE64, or MD5+HEX (the default). MD5+BASE64 and MD5+HEX return the result in Base64 and hexadecimal encoding, respectively.)
        */
        this.set_Algorithm = function(value) {
            this.setInput("Algorithm", value);
        }

        /*
        Set the value of the Base64DecodeValue input for this Choreo. ((optional, boolean) Setting this parameter to 1 indicates that the Text is Base64 encoded, and that the choreo should decode the value before calculating the checksum. Defaults to 0.)
        */
        this.set_Base64DecodeValue = function(value) {
            this.setInput("Base64DecodeValue", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text to return a checksum for.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Checksum Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChecksumResultSet = function(resultStream) {
    ChecksumResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Checksum" output from this Choreo execution. ((string) The checksum result.)
        */
        this.get_Checksum = function() {
            return this.getResult("Checksum");
        }
}

util.inherits(Checksum, choreography.Choreography);
util.inherits(ChecksumInputSet, choreography.InputSet);
util.inherits(ChecksumResultSet, choreography.ResultSet);
exports.Checksum = Checksum;


/*
    HmacSHA1
    Generates a SHA1-encrypted HMAC signature for the specified message text using the specified secret key.
*/


var HmacSHA1 = function(session) {
    /*
        Create a new instance of the HmacSHA1 Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Hashing/HmacSHA1"
    HmacSHA1.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HmacSHA1ResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HmacSHA1InputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HmacSHA1
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HmacSHA1InputSet = function() {
    HmacSHA1InputSet.super_.call(this);
        /*
        Set the value of the Key input for this Choreo. ((required, string) The secret key used to generate the SHA1-encrypted HMAC signature.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text that should be SHA1-encrypted.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HmacSHA1 Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HmacSHA1ResultSet = function(resultStream) {
    HmacSHA1ResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HmacSignature" output from this Choreo execution. ((string) The HMAC Signature for the specified string.)
        */
        this.get_HmacSignature = function() {
            return this.getResult("HmacSignature");
        }
}

util.inherits(HmacSHA1, choreography.Choreography);
util.inherits(HmacSHA1InputSet, choreography.InputSet);
util.inherits(HmacSHA1ResultSet, choreography.ResultSet);
exports.HmacSHA1 = HmacSHA1;

