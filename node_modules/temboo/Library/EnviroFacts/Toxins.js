
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ChemActivityByFacility
    Retrieves a list of the type of manufacturing activity of toxic chemicals at any EPA-regulated facility.
*/


var ChemActivityByFacility = function(session) {
    /*
        Create a new instance of the ChemActivityByFacility Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/Toxins/ChemActivityByFacility"
    ChemActivityByFacility.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChemActivityByFacilityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChemActivityByFacilityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ChemActivityByFacility
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChemActivityByFacilityInputSet = function() {
    ChemActivityByFacilityInputSet.super_.call(this);
        /*
        Set the value of the FacilityID input for this Choreo. ((required, string) FacilityID for which a toxin release report is to be generated. Found by first running the FacilitiesSearch Choreo.)
        */
        this.set_FacilityID = function(value) {
            this.setInput("FacilityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify the desired response format. Valid formats are: xml (the default) and csv.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ChemActivityByFacility Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChemActivityByFacilityResultSet = function(resultStream) {
    ChemActivityByFacilityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ChemActivityByFacility, choreography.Choreography);
util.inherits(ChemActivityByFacilityInputSet, choreography.InputSet);
util.inherits(ChemActivityByFacilityResultSet, choreography.ResultSet);
exports.ChemActivityByFacility = ChemActivityByFacility;


/*
    ChemicalSearch
    Retrieves information about specific chemicals released by EPA-regulated facilities.
*/


var ChemicalSearch = function(session) {
    /*
        Create a new instance of the ChemicalSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/Toxins/ChemicalSearch"
    ChemicalSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChemicalSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChemicalSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ChemicalSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChemicalSearchInputSet = function() {
    ChemicalSearchInputSet.super_.call(this);
        /*
        Set the value of the ChemicalID input for this Choreo. ((required, string) EPA ID number of a chemical. Chemical IDs from a given facility can be found by first running the ChemActivityByFacility or ToxinReleaseByFacility Choreos.)
        */
        this.set_ChemicalID = function(value) {
            this.setInput("ChemicalID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ChemicalSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChemicalSearchResultSet = function(resultStream) {
    ChemicalSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ChemicalSearch, choreography.Choreography);
util.inherits(ChemicalSearchInputSet, choreography.InputSet);
util.inherits(ChemicalSearchResultSet, choreography.ResultSet);
exports.ChemicalSearch = ChemicalSearch;


/*
    FacilitiesSearchByZip
    Retrieves a list of EPA-regulated facilities in the Toxics Release Inventory (TRI) database within a given area code.
*/


var FacilitiesSearchByZip = function(session) {
    /*
        Create a new instance of the FacilitiesSearchByZip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/Toxins/FacilitiesSearchByZip"
    FacilitiesSearchByZip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FacilitiesSearchByZipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FacilitiesSearchByZipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FacilitiesSearchByZip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FacilitiesSearchByZipInputSet = function() {
    FacilitiesSearchByZipInputSet.super_.call(this);
        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify the desired response format. Valid formats are: xml (the default) and csv.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, string) Zip code to be searched.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FacilitiesSearchByZip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FacilitiesSearchByZipResultSet = function(resultStream) {
    FacilitiesSearchByZipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FacilitiesSearchByZip, choreography.Choreography);
util.inherits(FacilitiesSearchByZipInputSet, choreography.InputSet);
util.inherits(FacilitiesSearchByZipResultSet, choreography.ResultSet);
exports.FacilitiesSearchByZip = FacilitiesSearchByZip;


/*
    ToxinReleaseByFacility
    Retrieves a list of the annual release quantities of toxic chemicals at EPA-regulated facilities into air, water, on-site land, and underground wells.
*/


var ToxinReleaseByFacility = function(session) {
    /*
        Create a new instance of the ToxinReleaseByFacility Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/Toxins/ToxinReleaseByFacility"
    ToxinReleaseByFacility.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ToxinReleaseByFacilityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ToxinReleaseByFacilityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ToxinReleaseByFacility
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ToxinReleaseByFacilityInputSet = function() {
    ToxinReleaseByFacilityInputSet.super_.call(this);
        /*
        Set the value of the FacilityID input for this Choreo. ((required, string) FacilityID for which a toxin release report is to be generated. Found by first running the FacilitiesSearch Choreo.)
        */
        this.set_FacilityID = function(value) {
            this.setInput("FacilityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify the desired response format. Valid formats are: xml (the default) and csv.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ToxinReleaseByFacility Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ToxinReleaseByFacilityResultSet = function(resultStream) {
    ToxinReleaseByFacilityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ToxinReleaseByFacility, choreography.Choreography);
util.inherits(ToxinReleaseByFacilityInputSet, choreography.InputSet);
util.inherits(ToxinReleaseByFacilityResultSet, choreography.ResultSet);
exports.ToxinReleaseByFacility = ToxinReleaseByFacility;

