
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CandidateDetails
    Obtain finance details for a Presidential or Congressional candidate.
*/


var CandidateDetails = function(session) {
    /*
        Create a new instance of the CandidateDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Candidates/CandidateDetails"
    CandidateDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CandidateDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CandidateDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CandidateDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CandidateDetailsInputSet = function() {
    CandidateDetailsInputSet.super_.call(this);
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
        Set the value of the FECID input for this Choreo. ((required, string) Enter the FEC ID for the candidate.  ID can be obtained by first running the CandidateSearch Choreo.)
        */
        this.set_FECID = function(value) {
            this.setInput("FECID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CandidateDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CandidateDetailsResultSet = function(resultStream) {
    CandidateDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CandidateDetails, choreography.Choreography);
util.inherits(CandidateDetailsInputSet, choreography.InputSet);
util.inherits(CandidateDetailsResultSet, choreography.ResultSet);
exports.CandidateDetails = CandidateDetails;


/*
    CandidateLeadersByCategory
    Retrieve a list of the 20 top candidates in terms of contributions received.
*/


var CandidateLeadersByCategory = function(session) {
    /*
        Create a new instance of the CandidateLeadersByCategory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Candidates/CandidateLeadersByCategory"
    CandidateLeadersByCategory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CandidateLeadersByCategoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CandidateLeadersByCategoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CandidateLeadersByCategory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CandidateLeadersByCategoryInputSet = function() {
    CandidateLeadersByCategoryInputSet.super_.call(this);
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
        Set the value of the Category input for this Choreo. ((required, string) Specify thecategory to be retrieved. Example: contribution-total, returns the total amount of financial contributions received by this candidate's campaign.  See Description for more info.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter json or xml.  Default is json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CandidateLeadersByCategory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CandidateLeadersByCategoryResultSet = function(resultStream) {
    CandidateLeadersByCategoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CandidateLeadersByCategory, choreography.Choreography);
util.inherits(CandidateLeadersByCategoryInputSet, choreography.InputSet);
util.inherits(CandidateLeadersByCategoryResultSet, choreography.ResultSet);
exports.CandidateLeadersByCategory = CandidateLeadersByCategory;


/*
    CandidateSearch
    Search for a Presidential or Congressional candidate by last name and election cycle.
*/


var CandidateSearch = function(session) {
    /*
        Create a new instance of the CandidateSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Candidates/CandidateSearch"
    CandidateSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CandidateSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CandidateSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CandidateSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CandidateSearchInputSet = function() {
    CandidateSearchInputSet.super_.call(this);
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
        Set the value of the LastName input for this Choreo. ((required, string) Enter the last name (or partial last name) of a Congressional or Presidential office candidate.)
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
A ResultSet with methods tailored to the values returned by the CandidateSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CandidateSearchResultSet = function(resultStream) {
    CandidateSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CandidateSearch, choreography.Choreography);
util.inherits(CandidateSearchInputSet, choreography.InputSet);
util.inherits(CandidateSearchResultSet, choreography.ResultSet);
exports.CandidateSearch = CandidateSearch;


/*
    NewCandidates
    Retrieves 20 of the most recently added political office candidates.
*/


var NewCandidates = function(session) {
    /*
        Create a new instance of the NewCandidates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/Candidates/NewCandidates"
    NewCandidates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NewCandidatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NewCandidatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NewCandidates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NewCandidatesInputSet = function() {
    NewCandidatesInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the NewCandidates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NewCandidatesResultSet = function(resultStream) {
    NewCandidatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NewCandidates, choreography.Choreography);
util.inherits(NewCandidatesInputSet, choreography.InputSet);
util.inherits(NewCandidatesResultSet, choreography.ResultSet);
exports.NewCandidates = NewCandidates;

