
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    LocalList
    Returns a list of local available phone numbers that match the specified filters.
*/


var LocalList = function(session) {
    /*
        Create a new instance of the LocalList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/AvailablePhoneNumbers/LocalList"
    LocalList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LocalListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LocalListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LocalList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LocalListInputSet = function() {
    LocalListInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AreaCode input for this Choreo. ((optional, integer) Find phone numbers in the specified area code. (US and Canada only).)
        */
        this.set_AreaCode = function(value) {
            this.setInput("AreaCode", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the Contains input for this Choreo. ((optional, string) A pattern to match phone numbers on. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.)
        */
        this.set_Contains = function(value) {
            this.setInput("Contains", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, integer) Specifies the search radius for Latitude, Longitude, and NearNumber quires in miles. If not specified this defaults to 25 miles.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the InLata input for this Choreo. ((optional, string) Limit results to a specific Local access and transport area (LATA). Given a phone number, search within the same LATA as that number.)
        */
        this.set_InLata = function(value) {
            this.setInput("InLata", value);
        }

        /*
        Set the value of the InPostalCode input for this Choreo. ((optional, integer) Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. (US and Canada only).)
        */
        this.set_InPostalCode = function(value) {
            this.setInput("InPostalCode", value);
        }

        /*
        Set the value of the InRateCenter input for this Choreo. ((optional, string) Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires InLata to be set as well.)
        */
        this.set_InRateCenter = function(value) {
            this.setInput("InRateCenter", value);
        }

        /*
        Set the value of the InRegion input for this Choreo. ((optional, string) Limit results to a particular region (i.e. State/Province). Given a phone number, search within the same Region as that number. (US and Canada only).)
        */
        this.set_InRegion = function(value) {
            this.setInput("InRegion", value);
        }

        /*
        Set the value of the IsoCountryCode input for this Choreo. ((optional, string) The country code to search within. Defaults to US.)
        */
        this.set_IsoCountryCode = function(value) {
            this.setInput("IsoCountryCode", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) Finds numbers close to this Latitude coordinate. Longitude is also required when searching by coordinates.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, string) Finds numbers close this Longitude. Latitude is also required when searching by coordinates.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the NearNumber input for this Choreo. ((optional, string) Searches numbers near  this phone number.)
        */
        this.set_NearNumber = function(value) {
            this.setInput("NearNumber", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the LocalList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LocalListResultSet = function(resultStream) {
    LocalListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LocalList, choreography.Choreography);
util.inherits(LocalListInputSet, choreography.InputSet);
util.inherits(LocalListResultSet, choreography.ResultSet);
exports.LocalList = LocalList;


/*
    TollFreeList
    Returns a list of toll-free available phone numbers that match the specified filters.
*/


var TollFreeList = function(session) {
    /*
        Create a new instance of the TollFreeList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/AvailablePhoneNumbers/TollFreeList"
    TollFreeList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TollFreeListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TollFreeListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TollFreeList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TollFreeListInputSet = function() {
    TollFreeListInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AreaCode input for this Choreo. ((optional, integer) Find phone numbers in the specified area code. (US and Canada only).)
        */
        this.set_AreaCode = function(value) {
            this.setInput("AreaCode", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the Contains input for this Choreo. ((optional, string) A pattern to match phone numbers on. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.)
        */
        this.set_Contains = function(value) {
            this.setInput("Contains", value);
        }

        /*
        Set the value of the IsoCountryCode input for this Choreo. ((optional, string) The country code to search within. Defaults to US.)
        */
        this.set_IsoCountryCode = function(value) {
            this.setInput("IsoCountryCode", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the TollFreeList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TollFreeListResultSet = function(resultStream) {
    TollFreeListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TollFreeList, choreography.Choreography);
util.inherits(TollFreeListInputSet, choreography.InputSet);
util.inherits(TollFreeListResultSet, choreography.ResultSet);
exports.TollFreeList = TollFreeList;

