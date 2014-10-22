
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListCountryCodes
    Returns a complete list of ISO-3166 standard country and subdivision codes.
*/


var ListCountryCodes = function(session) {
    /*
        Create a new instance of the ListCountryCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Lists/ListCountryCodes"
    ListCountryCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCountryCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCountryCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCountryCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCountryCodesInputSet = function() {
    ListCountryCodesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCountryCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCountryCodesResultSet = function(resultStream) {
    ListCountryCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCountryCodes, choreography.Choreography);
util.inherits(ListCountryCodesInputSet, choreography.InputSet);
util.inherits(ListCountryCodesResultSet, choreography.ResultSet);
exports.ListCountryCodes = ListCountryCodes;


/*
    ListIndustryCodes
    Returns a complete list of all Standard Industrial Classification (SIC) codes and sectors.
*/


var ListIndustryCodes = function(session) {
    /*
        Create a new instance of the ListIndustryCodes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Lists/ListIndustryCodes"
    ListIndustryCodes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListIndustryCodesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListIndustryCodesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListIndustryCodes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListIndustryCodesInputSet = function() {
    ListIndustryCodesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListIndustryCodes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListIndustryCodesResultSet = function(resultStream) {
    ListIndustryCodesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListIndustryCodes, choreography.Choreography);
util.inherits(ListIndustryCodesInputSet, choreography.InputSet);
util.inherits(ListIndustryCodesResultSet, choreography.ResultSet);
exports.ListIndustryCodes = ListIndustryCodes;


/*
    ListLocations
    Returns a list of locations of companies matching the given query.
*/


var ListLocations = function(session) {
    /*
        Create a new instance of the ListLocations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Lists/ListLocations"
    ListLocations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListLocationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListLocationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListLocations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListLocationsInputSet = function() {
    ListLocationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((optional, string) Enter an address fragment to search for. This can be either a street address, city, or state/subregion.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) Enter an ISO-3166 formatted country code. )
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxYear input for this Choreo. ((optional, integer) Indicate desired year of the most recent appearance in SEC filing data (e.g. indicating 2007 will search for companies that ceased filing in 2007).)
        */
        this.set_MaxYear = function(value) {
            this.setInput("MaxYear", value);
        }

        /*
        Set the value of the MinYear input for this Choreo. ((optional, integer) Indicate desired year of the earliest appearance in SEC filing data (e.g. indicating 2004 will search for companies that started filing in 2004).)
        */
        this.set_MinYear = function(value) {
            this.setInput("MinYear", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((optional, integer) Enter a postal code to be searched.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Indicates the origin of the location information found. Acceptable values: relation_loc, business, mailing, state_of_incorp. See documentation for more info.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only records for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListLocations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListLocationsResultSet = function(resultStream) {
    ListLocationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListLocations, choreography.Choreography);
util.inherits(ListLocationsInputSet, choreography.InputSet);
util.inherits(ListLocationsResultSet, choreography.ResultSet);
exports.ListLocations = ListLocations;


/*
    ListNames
    Returns a list of names (companies or individuals) matching a given name query.
*/


var ListNames = function(session) {
    /*
        Create a new instance of the ListNames Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Lists/ListNames"
    ListNames.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListNamesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListNamesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListNames
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListNamesInputSet = function() {
    ListNamesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxYear input for this Choreo. ((optional, integer) Indicate desired year of the most recent appearance in SEC filing data (e.g. indicating 2007 will search for companies that ceased filing in 2007).)
        */
        this.set_MaxYear = function(value) {
            this.setInput("MaxYear", value);
        }

        /*
        Set the value of the MinYear input for this Choreo. ((optional, integer) Indicate desired year of the earliest appearance in SEC filing data (e.g. indicating 2004 will search for companies that started filing in 2004).)
        */
        this.set_MinYear = function(value) {
            this.setInput("MinYear", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) Name to be searched.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((optional, string) Indicates how the name was derived. See documentation for more information on this parameter.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only records for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListNames Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListNamesResultSet = function(resultStream) {
    ListNamesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListNames, choreography.Choreography);
util.inherits(ListNamesInputSet, choreography.InputSet);
util.inherits(ListNamesResultSet, choreography.ResultSet);
exports.ListNames = ListNames;

