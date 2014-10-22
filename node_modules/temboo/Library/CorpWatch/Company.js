
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCompanyByCIK
    Returns a company record for a given SEC CIK identification number.
*/


var GetCompanyByCIK = function(session) {
    /*
        Create a new instance of the GetCompanyByCIK Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyByCIK"
    GetCompanyByCIK.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyByCIKResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyByCIKInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyByCIK
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyByCIKInputSet = function() {
    GetCompanyByCIKInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CIK input for this Choreo. ((required, string) The SEC's CIK identification number.)
        */
        this.set_CIK = function(value) {
            this.setInput("CIK", value);
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

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only records for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyByCIK Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyByCIKResultSet = function(resultStream) {
    GetCompanyByCIKResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyByCIK, choreography.Choreography);
util.inherits(GetCompanyByCIKInputSet, choreography.InputSet);
util.inherits(GetCompanyByCIKResultSet, choreography.ResultSet);
exports.GetCompanyByCIK = GetCompanyByCIK;


/*
    GetCompanyByCWID
    Returns basic information for a specifiied company.
*/


var GetCompanyByCWID = function(session) {
    /*
        Create a new instance of the GetCompanyByCWID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyByCWID"
    GetCompanyByCWID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyByCWIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyByCWIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyByCWID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyByCWIDInputSet = function() {
    GetCompanyByCWIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) Specify the year for which you want company information. When none is specified, returns the most recent record available for that company.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyByCWID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyByCWIDResultSet = function(resultStream) {
    GetCompanyByCWIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyByCWID, choreography.Choreography);
util.inherits(GetCompanyByCWIDInputSet, choreography.InputSet);
util.inherits(GetCompanyByCWIDResultSet, choreography.ResultSet);
exports.GetCompanyByCWID = GetCompanyByCWID;


/*
    GetCompanyByEIN
    Returns a company record for a given IRS Employer Identification Number (tax ID).
*/


var GetCompanyByEIN = function(session) {
    /*
        Create a new instance of the GetCompanyByEIN Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyByEIN"
    GetCompanyByEIN.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyByEINResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyByEINInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyByEIN
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyByEINInputSet = function() {
    GetCompanyByEINInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EIN input for this Choreo. ((required, string) The IRS Employer Identification Number (tax ID) of a company.)
        */
        this.set_EIN = function(value) {
            this.setInput("EIN", value);
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

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only records for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyByEIN Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyByEINResultSet = function(resultStream) {
    GetCompanyByEINResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyByEIN, choreography.Choreography);
util.inherits(GetCompanyByEINInputSet, choreography.InputSet);
util.inherits(GetCompanyByEINResultSet, choreography.ResultSet);
exports.GetCompanyByEIN = GetCompanyByEIN;


/*
    GetCompanyFilings
    Returns the official SEC documents from which a company's information was extracted in order to check the accuracy of data.
*/


var GetCompanyFilings = function(session) {
    /*
        Create a new instance of the GetCompanyFilings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyFilings"
    GetCompanyFilings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyFilingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyFilingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyFilings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyFilingsInputSet = function() {
    GetCompanyFilingsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
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
A ResultSet with methods tailored to the values returned by the GetCompanyFilings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyFilingsResultSet = function(resultStream) {
    GetCompanyFilingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyFilings, choreography.Choreography);
util.inherits(GetCompanyFilingsInputSet, choreography.InputSet);
util.inherits(GetCompanyFilingsResultSet, choreography.ResultSet);
exports.GetCompanyFilings = GetCompanyFilings;


/*
    GetCompanyHistory
    Returns a complete set of basic records for a given company, covering all the years for which information is available.
*/


var GetCompanyHistory = function(session) {
    /*
        Create a new instance of the GetCompanyHistory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyHistory"
    GetCompanyHistory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyHistoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyHistoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyHistory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyHistoryInputSet = function() {
    GetCompanyHistoryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyHistory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyHistoryResultSet = function(resultStream) {
    GetCompanyHistoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyHistory, choreography.Choreography);
util.inherits(GetCompanyHistoryInputSet, choreography.InputSet);
util.inherits(GetCompanyHistoryResultSet, choreography.ResultSet);
exports.GetCompanyHistory = GetCompanyHistory;


/*
    GetCompanyLocations
    Returns a list of mailing addresses, business addresses, and jurisdiction of incorporation associated with a given company.
*/


var GetCompanyLocations = function(session) {
    /*
        Create a new instance of the GetCompanyLocations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyLocations"
    GetCompanyLocations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyLocationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyLocationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyLocations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyLocationsInputSet = function() {
    GetCompanyLocationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
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
A ResultSet with methods tailored to the values returned by the GetCompanyLocations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyLocationsResultSet = function(resultStream) {
    GetCompanyLocationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyLocations, choreography.Choreography);
util.inherits(GetCompanyLocationsInputSet, choreography.InputSet);
util.inherits(GetCompanyLocationsResultSet, choreography.ResultSet);
exports.GetCompanyLocations = GetCompanyLocations;


/*
    GetCompanyNames
    Returns a complete list of company names associated with a given company record, including its aliases, former names, and normalized forms.
*/


var GetCompanyNames = function(session) {
    /*
        Create a new instance of the GetCompanyNames Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Company/GetCompanyNames"
    GetCompanyNames.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyNamesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyNamesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyNames
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyNamesInputSet = function() {
    GetCompanyNamesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
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
A ResultSet with methods tailored to the values returned by the GetCompanyNames Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyNamesResultSet = function(resultStream) {
    GetCompanyNamesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyNames, choreography.Choreography);
util.inherits(GetCompanyNamesInputSet, choreography.InputSet);
util.inherits(GetCompanyNamesResultSet, choreography.ResultSet);
exports.GetCompanyNames = GetCompanyNames;

