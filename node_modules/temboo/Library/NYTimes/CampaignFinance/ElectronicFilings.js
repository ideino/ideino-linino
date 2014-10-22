
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetElectronicFilingFormTypes
    Obtain a list of available form types used in FEC filings.
*/


var GetElectronicFilingFormTypes = function(session) {
    /*
        Create a new instance of the GetElectronicFilingFormTypes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/ElectronicFilings/GetElectronicFilingFormTypes"
    GetElectronicFilingFormTypes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetElectronicFilingFormTypesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetElectronicFilingFormTypesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetElectronicFilingFormTypes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetElectronicFilingFormTypesInputSet = function() {
    GetElectronicFilingFormTypesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CampaignCycle input for this Choreo. ((required, integer) Enter the campaign cycle year in YYYY format.  This must be an even year. )
        */
        this.set_CampaignCycle = function(value) {
            this.setInput("CampaignCycle", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetElectronicFilingFormTypes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetElectronicFilingFormTypesResultSet = function(resultStream) {
    GetElectronicFilingFormTypesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetElectronicFilingFormTypes, choreography.Choreography);
util.inherits(GetElectronicFilingFormTypesInputSet, choreography.InputSet);
util.inherits(GetElectronicFilingFormTypesResultSet, choreography.ResultSet);
exports.GetElectronicFilingFormTypes = GetElectronicFilingFormTypes;

