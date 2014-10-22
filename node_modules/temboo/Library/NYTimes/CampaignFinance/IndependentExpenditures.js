
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CommitteeIndependentExpenditures
    Retrieve the 20 most recent independent expenditures by a given committee, also known as "Super PACs."
*/


var CommitteeIndependentExpenditures = function(session) {
    /*
        Create a new instance of the CommitteeIndependentExpenditures Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/IndependentExpenditures/CommitteeIndependentExpenditures"
    CommitteeIndependentExpenditures.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeIndependentExpendituresResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeIndependentExpendituresInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeIndependentExpenditures
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeIndependentExpendituresInputSet = function() {
    CommitteeIndependentExpendituresInputSet.super_.call(this);
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
        Set the value of the FECID input for this Choreo. ((required, string) Enter the FEC ID for the committee.  ID can be obtained by first running the CommitteeSearch Choreo.)
        */
        this.set_FECID = function(value) {
            this.setInput("FECID", value);
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
A ResultSet with methods tailored to the values returned by the CommitteeIndependentExpenditures Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeIndependentExpendituresResultSet = function(resultStream) {
    CommitteeIndependentExpendituresResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeIndependentExpenditures, choreography.Choreography);
util.inherits(CommitteeIndependentExpendituresInputSet, choreography.InputSet);
util.inherits(CommitteeIndependentExpendituresResultSet, choreography.ResultSet);
exports.CommitteeIndependentExpenditures = CommitteeIndependentExpenditures;


/*
    IndependentExpenditureOnlyCommittees
    Retrieves 20 of the most recent committees that have registered as independent expenditure-only (commonly known as "Super PACs").
*/


var IndependentExpenditureOnlyCommittees = function(session) {
    /*
        Create a new instance of the IndependentExpenditureOnlyCommittees Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/IndependentExpenditures/IndependentExpenditureOnlyCommittees"
    IndependentExpenditureOnlyCommittees.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new IndependentExpenditureOnlyCommitteesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new IndependentExpenditureOnlyCommitteesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the IndependentExpenditureOnlyCommittees
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var IndependentExpenditureOnlyCommitteesInputSet = function() {
    IndependentExpenditureOnlyCommitteesInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the IndependentExpenditureOnlyCommittees Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var IndependentExpenditureOnlyCommitteesResultSet = function(resultStream) {
    IndependentExpenditureOnlyCommitteesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(IndependentExpenditureOnlyCommittees, choreography.Choreography);
util.inherits(IndependentExpenditureOnlyCommitteesInputSet, choreography.InputSet);
util.inherits(IndependentExpenditureOnlyCommitteesResultSet, choreography.ResultSet);
exports.IndependentExpenditureOnlyCommittees = IndependentExpenditureOnlyCommittees;


/*
    PresidentialIndependentExpenditures
    Retrieves 20 of the most recent independent expenditures in support of or opposition to presidential candidates.
*/


var PresidentialIndependentExpenditures = function(session) {
    /*
        Create a new instance of the PresidentialIndependentExpenditures Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/CampaignFinance/IndependentExpenditures/PresidentialIndependentExpenditures"
    PresidentialIndependentExpenditures.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PresidentialIndependentExpendituresResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PresidentialIndependentExpendituresInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PresidentialIndependentExpenditures
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PresidentialIndependentExpendituresInputSet = function() {
    PresidentialIndependentExpendituresInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the PresidentialIndependentExpenditures Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PresidentialIndependentExpendituresResultSet = function(resultStream) {
    PresidentialIndependentExpendituresResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API corresponds to the setting (json, or xml) entered in the ResponseFormat variable.  Default is set to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PresidentialIndependentExpenditures, choreography.Choreography);
util.inherits(PresidentialIndependentExpendituresInputSet, choreography.InputSet);
util.inherits(PresidentialIndependentExpendituresResultSet, choreography.ResultSet);
exports.PresidentialIndependentExpenditures = PresidentialIndependentExpenditures;

