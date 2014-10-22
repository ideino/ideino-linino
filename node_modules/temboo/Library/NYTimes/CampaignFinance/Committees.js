
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CommitteeContributions
    Obtain contributions made by a Political Action Committee (PAC) in an election cycle.
*/


var CommitteeContributions = function(session) {
    /*
        Create a new instance of the CommitteeContributions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/CommitteeContributions"
    CommitteeContributions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeContributionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeContributionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeContributions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeContributionsInputSet = function() {
    CommitteeContributionsInputSet.super_.call(this);
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
        Set the value of the CommitteeFECID input for this Choreo. ((conditional, string) Enter a political action committee's FEC ID.  Either CommitteeFECID, OR Name must be provided.)
        */
        this.set_CommitteeFECID = function(value) {
            this.setInput("CommitteeFECID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) Enter the name of a political action committee (PAC) whose contributions will be obtained. Either Name or CommitteeFECID must be provided.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The first 20 results are shown by default. To page through the results, set Offset to the appropriate value (e.g., Offset=40 displays results 41–60).)
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

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeContributions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeContributionsResultSet = function(resultStream) {
    CommitteeContributionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeContributions, choreography.Choreography);
util.inherits(CommitteeContributionsInputSet, choreography.InputSet);
util.inherits(CommitteeContributionsResultSet, choreography.ResultSet);
exports.CommitteeContributions = CommitteeContributions;


/*
    CommitteeContributionsToCandidate
    Obtain contributions made by a Political Action Committee (PAC) to a candidate.
*/


var CommitteeContributionsToCandidate = function(session) {
    /*
        Create a new instance of the CommitteeContributionsToCandidate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/CommitteeContributionsToCandidate"
    CommitteeContributionsToCandidate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeContributionsToCandidateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeContributionsToCandidateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeContributionsToCandidate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeContributionsToCandidateInputSet = function() {
    CommitteeContributionsToCandidateInputSet.super_.call(this);
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
        Set the value of the CandidateFECID input for this Choreo. ((required, string) Enter a cadidate's FEC ID.)
        */
        this.set_CandidateFECID = function(value) {
            this.setInput("CandidateFECID", value);
        }

        /*
        Set the value of the CommitteeFECID input for this Choreo. ((required, string) Enter a committee's FEC ID.)
        */
        this.set_CommitteeFECID = function(value) {
            this.setInput("CommitteeFECID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeContributionsToCandidate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeContributionsToCandidateResultSet = function(resultStream) {
    CommitteeContributionsToCandidateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeContributionsToCandidate, choreography.Choreography);
util.inherits(CommitteeContributionsToCandidateInputSet, choreography.InputSet);
util.inherits(CommitteeContributionsToCandidateResultSet, choreography.ResultSet);
exports.CommitteeContributionsToCandidate = CommitteeContributionsToCandidate;


/*
    CommitteeDetails
    Obtain details about a specific Political Action Committee.
*/


var CommitteeDetails = function(session) {
    /*
        Create a new instance of the CommitteeDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/CommitteeDetails"
    CommitteeDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeDetailsInputSet = function() {
    CommitteeDetailsInputSet.super_.call(this);
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
        Set the value of the CommitteeFECID input for this Choreo. ((required, string) Enter a committee's FEC ID.)
        */
        this.set_CommitteeFECID = function(value) {
            this.setInput("CommitteeFECID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeDetailsResultSet = function(resultStream) {
    CommitteeDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeDetails, choreography.Choreography);
util.inherits(CommitteeDetailsInputSet, choreography.InputSet);
util.inherits(CommitteeDetailsResultSet, choreography.ResultSet);
exports.CommitteeDetails = CommitteeDetails;


/*
    CommitteeFilings
    Obtain a specific Political Action Committee's electronic filings.
*/


var CommitteeFilings = function(session) {
    /*
        Create a new instance of the CommitteeFilings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/CommitteeFilings"
    CommitteeFilings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeFilingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeFilingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeFilings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeFilingsInputSet = function() {
    CommitteeFilingsInputSet.super_.call(this);
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
        Set the value of the CommitteeFECID input for this Choreo. ((required, string) Enter a committee's FEC ID.)
        */
        this.set_CommitteeFECID = function(value) {
            this.setInput("CommitteeFECID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeFilings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeFilingsResultSet = function(resultStream) {
    CommitteeFilingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeFilings, choreography.Choreography);
util.inherits(CommitteeFilingsInputSet, choreography.InputSet);
util.inherits(CommitteeFilingsResultSet, choreography.ResultSet);
exports.CommitteeFilings = CommitteeFilings;


/*
    CommitteeSearch
    Search for a political action committee (PACs) by name, or partial name.
*/


var CommitteeSearch = function(session) {
    /*
        Create a new instance of the CommitteeSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/CommitteeSearch"
    CommitteeSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeSearchInputSet = function() {
    CommitteeSearchInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) Specify the name of the committee to be retireved. Partial names are also acceptable.  Examples: viacom.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeSearchResultSet = function(resultStream) {
    CommitteeSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeSearch, choreography.Choreography);
util.inherits(CommitteeSearchInputSet, choreography.InputSet);
util.inherits(CommitteeSearchResultSet, choreography.ResultSet);
exports.CommitteeSearch = CommitteeSearch;


/*
    LeadershipPACs
    Retrieve a list of PACs that have been designated by the FEC as "leadership PACs".
*/


var LeadershipPACs = function(session) {
    /*
        Create a new instance of the LeadershipPACs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/LeadershipPACs"
    LeadershipPACs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LeadershipPACsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LeadershipPACsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LeadershipPACs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LeadershipPACsInputSet = function() {
    LeadershipPACsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times)
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
A ResultSet with methods tailored to the values returned by the LeadershipPACs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LeadershipPACsResultSet = function(resultStream) {
    LeadershipPACsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LeadershipPACs, choreography.Choreography);
util.inherits(LeadershipPACsInputSet, choreography.InputSet);
util.inherits(LeadershipPACsResultSet, choreography.ResultSet);
exports.LeadershipPACs = LeadershipPACs;


/*
    NewCommittees
    Retrieves 20 of the most recently added committees.
*/


var NewCommittees = function(session) {
    /*
        Create a new instance of the NewCommittees Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Committees/NewCommittees"
    NewCommittees.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NewCommitteesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NewCommitteesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NewCommittees
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NewCommitteesInputSet = function() {
    NewCommitteesInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the NewCommittees Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NewCommitteesResultSet = function(resultStream) {
    NewCommitteesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NewCommittees, choreography.Choreography);
util.inherits(NewCommitteesInputSet, choreography.InputSet);
util.inherits(NewCommitteesResultSet, choreography.ResultSet);
exports.NewCommittees = NewCommittees;

