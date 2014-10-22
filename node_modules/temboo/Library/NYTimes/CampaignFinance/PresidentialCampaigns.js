
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    PresidentialCandidateTotals
    Retrieves the total receipts and disbursements for all presidential candidates for a particular campaign cycle.
*/


var PresidentialCandidateTotals = function(session) {
    /*
        Create a new instance of the PresidentialCandidateTotals Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/PresidentialCampaigns/PresidentialCandidateTotals"
    PresidentialCandidateTotals.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PresidentialCandidateTotalsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PresidentialCandidateTotalsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PresidentialCandidateTotals
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PresidentialCandidateTotalsInputSet = function() {
    PresidentialCandidateTotalsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CampaignCycle input for this Choreo. ((required, integer) Enter the campaign cycle year in YYYY format.  This must be an even year.)
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
A ResultSet with methods tailored to the values returned by the PresidentialCandidateTotals Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PresidentialCandidateTotalsResultSet = function(resultStream) {
    PresidentialCandidateTotalsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PresidentialCandidateTotals, choreography.Choreography);
util.inherits(PresidentialCandidateTotalsInputSet, choreography.InputSet);
util.inherits(PresidentialCandidateTotalsResultSet, choreography.ResultSet);
exports.PresidentialCandidateTotals = PresidentialCandidateTotals;


/*
    PresidentialDonorInformation
    Retrieve details about individual donors, or a summary of donors from a particular location to a presidential election campaign.
*/


var PresidentialDonorInformation = function(session) {
    /*
        Create a new instance of the PresidentialDonorInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/PresidentialCampaigns/PresidentialDonorInformation"
    PresidentialDonorInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PresidentialDonorInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PresidentialDonorInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PresidentialDonorInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PresidentialDonorInformationInputSet = function() {
    PresidentialDonorInformationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CampaignCycle input for this Choreo. ((required, integer) Enter the campaign cycle year in YYYY format.  This must be an even year.)
        */
        this.set_CampaignCycle = function(value) {
            this.setInput("CampaignCycle", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) Enter the first name of a donor.  This parameter can be used together with LastName and/or Zip)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) Enter the last name of an individual donor to be retrieved.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Specify the starting point of the retrieved results, in multiples of 20.  By default, the first 20 results are returned.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, integer) Enter a zipcode for which donor information wil be retrieved.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PresidentialDonorInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PresidentialDonorInformationResultSet = function(resultStream) {
    PresidentialDonorInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PresidentialDonorInformation, choreography.Choreography);
util.inherits(PresidentialDonorInformationInputSet, choreography.InputSet);
util.inherits(PresidentialDonorInformationResultSet, choreography.ResultSet);
exports.PresidentialDonorInformation = PresidentialDonorInformation;


/*
    PresidentialStateZipTotals
    Retrieve the total amount of donations aggregated by a specified location (by state and/or zipcode).
*/


var PresidentialStateZipTotals = function(session) {
    /*
        Create a new instance of the PresidentialStateZipTotals Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/PresidentialCampaigns/PresidentialStateZipTotals"
    PresidentialStateZipTotals.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PresidentialStateZipTotalsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PresidentialStateZipTotalsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PresidentialStateZipTotals
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PresidentialStateZipTotalsInputSet = function() {
    PresidentialStateZipTotalsInputSet.super_.call(this);
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
        Set the value of the Location input for this Choreo. ((required, string) Enter the location for which data will be retrieved. If ResourceType = states, use a two-letter state abbreviation (example: NY).  For zips, enter a five-digit zip code.)
        */
        this.set_Location = function(value) {
            this.setInput("Location", value);
        }

        /*
        Set the value of the ResourceType input for this Choreo. ((required, string) Specify the type of resource to use when retrieving donor data. Valid formats include: zips, or states.)
        */
        this.set_ResourceType = function(value) {
            this.setInput("ResourceType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PresidentialStateZipTotals Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PresidentialStateZipTotalsResultSet = function(resultStream) {
    PresidentialStateZipTotalsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PresidentialStateZipTotals, choreography.Choreography);
util.inherits(PresidentialStateZipTotalsInputSet, choreography.InputSet);
util.inherits(PresidentialStateZipTotalsResultSet, choreography.ResultSet);
exports.PresidentialStateZipTotals = PresidentialStateZipTotals;

