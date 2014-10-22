
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CityStateLookup
    Lookup city and state using incomplete address information.
*/


var CityStateLookup = function(session) {
    /*
        Create a new instance of the CityStateLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/AddressInformationAPI/CityStateLookup"
    CityStateLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CityStateLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CityStateLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CityStateLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CityStateLookupInputSet = function() {
    CityStateLookupInputSet.super_.call(this);
        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) Maximum characters allowed: 5)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CityStateLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CityStateLookupResultSet = function(resultStream) {
    CityStateLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CityStateLookup, choreography.Choreography);
util.inherits(CityStateLookupInputSet, choreography.InputSet);
util.inherits(CityStateLookupResultSet, choreography.ResultSet);
exports.CityStateLookup = CityStateLookup;


/*
    ValidateAddress
    Validates and supplements incomplete address information.
*/


var ValidateAddress = function(session) {
    /*
        Create a new instance of the ValidateAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/AddressInformationAPI/ValidateAddress"
    ValidateAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ValidateAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ValidateAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ValidateAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ValidateAddressInputSet = function() {
    ValidateAddressInputSet.super_.call(this);
        /*
        Set the value of the AptOrSuite input for this Choreo. ((optional, string) Used to provide an apartment or suite number, if applicable. Maximum characters allowed: 38.)
        */
        this.set_AptOrSuite = function(value) {
            this.setInput("AptOrSuite", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) Maximum characters allowed: 15. Either City and State or Zip are required.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the FirmName input for this Choreo. ((optional, string) Maximum characters allowed: 38.)
        */
        this.set_FirmName = function(value) {
            this.setInput("FirmName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Maximum characters allowed: 2. Either City and State or Zip are required.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the StreetAddress input for this Choreo. ((required, string) Street address. Maximum characters allowed: 38.)
        */
        this.set_StreetAddress = function(value) {
            this.setInput("StreetAddress", value);
        }

        /*
        Set the value of the Urbanization input for this Choreo. ((optional, string) Maximum characters allowed: 28. For Puerto Rico addresses only.)
        */
        this.set_Urbanization = function(value) {
            this.setInput("Urbanization", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

        /*
        Set the value of the Zip4DigitCode input for this Choreo. ((optional, integer) Maximum characters allowed: 4)
        */
        this.set_Zip4DigitCode = function(value) {
            this.setInput("Zip4DigitCode", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, integer) Maximum characters allowed: 5. Either City and State or Zip are required.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ValidateAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ValidateAddressResultSet = function(resultStream) {
    ValidateAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ValidateAddress, choreography.Choreography);
util.inherits(ValidateAddressInputSet, choreography.InputSet);
util.inherits(ValidateAddressResultSet, choreography.ResultSet);
exports.ValidateAddress = ValidateAddress;


/*
    ZipCodeLookup
    Lookup zip codes using incomplete address information.
*/


var ZipCodeLookup = function(session) {
    /*
        Create a new instance of the ZipCodeLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/AddressInformationAPI/ZipCodeLookup"
    ZipCodeLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ZipCodeLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ZipCodeLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ZipCodeLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ZipCodeLookupInputSet = function() {
    ZipCodeLookupInputSet.super_.call(this);
        /*
        Set the value of the AptOrSuite input for this Choreo. ((optional, string) Used to provide an apartment or suite number, if applicable. Maximum characters allowed: 38.)
        */
        this.set_AptOrSuite = function(value) {
            this.setInput("AptOrSuite", value);
        }

        /*
        Set the value of the ApyOrSuite input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_ApyOrSuite = function(value) {
            this.setInput("ApyOrSuite", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) Maximum characters allowed: 15.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the FirmName input for this Choreo. ((optional, string) Maximum characters allowed: 38.)
        */
        this.set_FirmName = function(value) {
            this.setInput("FirmName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) Maximum characters allowed: 2.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the StreetAddress input for this Choreo. ((required, string) Street address.  Maximum characters allowed: 38.)
        */
        this.set_StreetAddress = function(value) {
            this.setInput("StreetAddress", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ZipCodeLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ZipCodeLookupResultSet = function(resultStream) {
    ZipCodeLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ZipCodeLookup, choreography.Choreography);
util.inherits(ZipCodeLookupInputSet, choreography.InputSet);
util.inherits(ZipCodeLookupResultSet, choreography.ResultSet);
exports.ZipCodeLookup = ZipCodeLookup;

