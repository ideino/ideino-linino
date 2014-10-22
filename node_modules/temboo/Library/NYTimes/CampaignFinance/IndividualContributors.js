
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ContributionsByCandidate
    Retrieve contributions made by individuals to a specific presidential candidate. 
*/


var ContributionsByCandidate = function(session) {
    /*
        Create a new instance of the ContributionsByCandidate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/IndividualContributors/ContributionsByCandidate"
    ContributionsByCandidate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ContributionsByCandidateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ContributionsByCandidateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ContributionsByCandidate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ContributionsByCandidateInputSet = function() {
    ContributionsByCandidateInputSet.super_.call(this);
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
        Set the value of the CandidateFECID input for this Choreo. ((required, string) Enter a cadidate's nine-digit FEC ID. IDs can be obtained by first running the CandidateSearch Choreo.)
        */
        this.set_CandidateFECID = function(value) {
            this.setInput("CandidateFECID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ContributionsByCandidate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ContributionsByCandidateResultSet = function(resultStream) {
    ContributionsByCandidateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ContributionsByCandidate, choreography.Choreography);
util.inherits(ContributionsByCandidateInputSet, choreography.InputSet);
util.inherits(ContributionsByCandidateResultSet, choreography.ResultSet);
exports.ContributionsByCandidate = ContributionsByCandidate;


/*
    ContributionsToPresidentialCandidates
    Retrieve contributions made by individuals to a specific presidential candidate. 
*/


var ContributionsToPresidentialCandidates = function(session) {
    /*
        Create a new instance of the ContributionsToPresidentialCandidates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/IndividualContributors/ContributionsToPresidentialCandidates"
    ContributionsToPresidentialCandidates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ContributionsToPresidentialCandidatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ContributionsToPresidentialCandidatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ContributionsToPresidentialCandidates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ContributionsToPresidentialCandidatesInputSet = function() {
    ContributionsToPresidentialCandidatesInputSet.super_.call(this);
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
        Set the value of the CandidateFECID input for this Choreo. ((conditional, string) Enter a candidate's nine-digit FEC ID. IDs can be obtained by first running the CandidateSearch Choreo. Required unless providing the LastName input.)
        */
        this.set_CandidateFECID = function(value) {
            this.setInput("CandidateFECID", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((conditional, string) Enter the name of a presidential candidate for whom contributions will be obtained. Required unless providing the CandidateFECID input.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ContributionsToPresidentialCandidates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ContributionsToPresidentialCandidatesResultSet = function(resultStream) {
    ContributionsToPresidentialCandidatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ContributionsToPresidentialCandidates, choreography.Choreography);
util.inherits(ContributionsToPresidentialCandidatesInputSet, choreography.InputSet);
util.inherits(ContributionsToPresidentialCandidatesResultSet, choreography.ResultSet);
exports.ContributionsToPresidentialCandidates = ContributionsToPresidentialCandidates;

