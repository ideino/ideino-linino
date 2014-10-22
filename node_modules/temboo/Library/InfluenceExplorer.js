
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CampaignContribution
    Retrieve detailed information on political campaign contributions, filtered by date, contributor, state, employer, campaign, etc.
*/


var CampaignContribution = function(session) {
    /*
        Create a new instance of the CampaignContribution Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/CampaignContribution"
    CampaignContribution.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CampaignContributionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CampaignContributionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CampaignContribution
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CampaignContributionInputSet = function() {
    CampaignContributionInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((conditional, string) Enter the amount of dollars spent on lobbying.  Valid formats include: 500 (exactly $500); >|500 (greater than, or equal to 500); <|500 (less than or equal to 500).)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the ContributorName input for this Choreo. ((conditional, string) Specfiy the name of an individual, PAC, organization, or employer for which a full-text search will be performed.)
        */
        this.set_ContributorName = function(value) {
            this.setInput("ContributorName", value);
        }

        /*
        Set the value of the ContributorsByState input for this Choreo. ((conditional, string) Enter a two-letter state designation from which the contribution is made.)
        */
        this.set_ContributorsByState = function(value) {
            this.setInput("ContributorsByState", value);
        }

        /*
        Set the value of the Cycle input for this Choreo. ((conditional, string) Specify a yyyy-formatted election cycle. Example: 2012, or 2008|2012 to limit results between 2008 and 2012.)
        */
        this.set_Cycle = function(value) {
            this.setInput("Cycle", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((conditional, string) Specify a date of the contribution in ISO date format.  For example: 2006-08-06.  Or, ><|2006-08-06|2006-09-12 to limit results between specific dates.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the OrganizationName input for this Choreo. ((conditional, string) Specify a full-text search on employer, organization, and parent organization.)
        */
        this.set_OrganizationName = function(value) {
            this.setInput("OrganizationName", value);
        }

        /*
        Set the value of the RecipientName input for this Choreo. ((conditional, string) Enter the full-text search on name of PAC or candidate receiving the contribution.)
        */
        this.set_RecipientName = function(value) {
            this.setInput("RecipientName", value);
        }

        /*
        Set the value of the RecipientState input for this Choreo. ((conditional, string) Specify a two-letter state abbreviation for the state in which the recipient of contributions is running a campaign.)
        */
        this.set_RecipientState = function(value) {
            this.setInput("RecipientState", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are: json (the default), csv, and xls. Note when specifying xls, restults are returned as Base64 encoded data.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Seat input for this Choreo. ((conditional, string) Specify the type of political office being sought.  Examples: federal:senate (US Senate), federal:president (US President), state:governor.  For more info see documentation.)
        */
        this.set_Seat = function(value) {
            this.setInput("Seat", value);
        }

        /*
        Set the value of the TransactionNamespace input for this Choreo. ((optional, string) Filters on federal or state contributions. Valid namespaces are: urn:fec:transaction (for federal) or urn:nimsp:transaction (for state).)
        */
        this.set_TransactionNamespace = function(value) {
            this.setInput("TransactionNamespace", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CampaignContribution Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CampaignContributionResultSet = function(resultStream) {
    CampaignContributionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Influence Explorer. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CampaignContribution, choreography.Choreography);
util.inherits(CampaignContributionInputSet, choreography.InputSet);
util.inherits(CampaignContributionResultSet, choreography.ResultSet);
exports.CampaignContribution = CampaignContribution;


/*
    ContributorTypeBreakdown
    Returns a breakdown, for a given candidate, of how much of the money raised came from individuals versus organizations (PACs).
*/


var ContributorTypeBreakdown = function(session) {
    /*
        Create a new instance of the ContributorTypeBreakdown Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/ContributorTypeBreakdown"
    ContributorTypeBreakdown.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ContributorTypeBreakdownResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ContributorTypeBreakdownInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ContributorTypeBreakdown
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ContributorTypeBreakdownInputSet = function() {
    ContributorTypeBreakdownInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ContributorTypeBreakdown Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ContributorTypeBreakdownResultSet = function(resultStream) {
    ContributorTypeBreakdownResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ContributorTypeBreakdown, choreography.Choreography);
util.inherits(ContributorTypeBreakdownInputSet, choreography.InputSet);
util.inherits(ContributorTypeBreakdownResultSet, choreography.ResultSet);
exports.ContributorTypeBreakdown = ContributorTypeBreakdown;


/*
    EntityOverview
    Returns general information about a particular politician, individual, or organization with a given entity id.
*/


var EntityOverview = function(session) {
    /*
        Create a new instance of the EntityOverview Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/EntityOverview"
    EntityOverview.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EntityOverviewResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EntityOverviewInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EntityOverview
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EntityOverviewInputSet = function() {
    EntityOverviewInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cycle input for this Choreo. ((optional, date) Specify a yyyy-formatted election cycle. Example: 2012, or 2008|2012 to limit results between 2008 and 2012.)
        */
        this.set_Cycle = function(value) {
            this.setInput("Cycle", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EntityOverview Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EntityOverviewResultSet = function(resultStream) {
    EntityOverviewResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EntityOverview, choreography.Choreography);
util.inherits(EntityOverviewInputSet, choreography.InputSet);
util.inherits(EntityOverviewResultSet, choreography.ResultSet);
exports.EntityOverview = EntityOverview;


/*
    FederalGrants
    Returns information about federal grants awarded.
*/


var FederalGrants = function(session) {
    /*
        Create a new instance of the FederalGrants Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/FederalGrants"
    FederalGrants.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FederalGrantsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FederalGrantsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FederalGrants
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FederalGrantsInputSet = function() {
    FederalGrantsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AgencyName input for this Choreo. ((optional, string) Full-text search on the reported name of the federal agency awarding the grant.)
        */
        this.set_AgencyName = function(value) {
            this.setInput("AgencyName", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((optional, string) The grant amount. Valid formats include: 500 (exactly $500); >|500 (greater than, or equal to 500); <|500 (less than or equal to 500).)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the AssistanceType input for this Choreo. ((optional, integer) A numeric code for the type of grant awarded. See documentation for more details for this parameter.)
        */
        this.set_AssistanceType = function(value) {
            this.setInput("AssistanceType", value);
        }

        /*
        Set the value of the FiscalYear input for this Choreo. ((optional, date) The year in which the grant was awarded. A YYYY formatted year. You can also specify a range by separating years with a pipe (i.e. 2008|2012).)
        */
        this.set_FiscalYear = function(value) {
            this.setInput("FiscalYear", value);
        }

        /*
        Set the value of the RecipientName input for this Choreo. ((optional, string) Full-text search on the reported name of the grant recipient.)
        */
        this.set_RecipientName = function(value) {
            this.setInput("RecipientName", value);
        }

        /*
        Set the value of the RecipientState input for this Choreo. ((optional, string) Two-letter abbreviation of the state in which the grant was awarded.)
        */
        this.set_RecipientState = function(value) {
            this.setInput("RecipientState", value);
        }

        /*
        Set the value of the RecipientType input for this Choreo. ((optional, integer) The numeric code representing the type of entity that received the grant. See documentation for more details about this parameter.)
        */
        this.set_RecipientType = function(value) {
            this.setInput("RecipientType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are: json (the default), csv, and xls. Note when specifying xls, restults are returned as Base64 encoded data.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FederalGrants Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FederalGrantsResultSet = function(resultStream) {
    FederalGrantsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Influence Explorer. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FederalGrants, choreography.Choreography);
util.inherits(FederalGrantsInputSet, choreography.InputSet);
util.inherits(FederalGrantsResultSet, choreography.ResultSet);
exports.FederalGrants = FederalGrants;


/*
    FederalLobbying
    Obtain detailed lobbying information.
*/


var FederalLobbying = function(session) {
    /*
        Create a new instance of the FederalLobbying Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/FederalLobbying"
    FederalLobbying.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FederalLobbyingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FederalLobbyingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FederalLobbying
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FederalLobbyingInputSet = function() {
    FederalLobbyingInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((optional, string) Enter the amount of dollars spent on lobbying.  Valid formats include: 500 (exactly $500); >|500 (greater than, or equal to 500); <|500 (less than or equal to 500).)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the ClientParentOrganization input for this Choreo. ((optional, string) Specify a full-text search of a client's parent organizationfor.)
        */
        this.set_ClientParentOrganization = function(value) {
            this.setInput("ClientParentOrganization", value);
        }

        /*
        Set the value of the ClientSearch input for this Choreo. ((optional, string) Enter the name of the client for whom this lobbyist is working. This parameter executes a full-text search.)
        */
        this.set_ClientSearch = function(value) {
            this.setInput("ClientSearch", value);
        }

        /*
        Set the value of the FilingType input for this Choreo. ((optional, string) Specify the type of filing as identified by CRP.  Example: n, for non-self filer parent.  For more info, go here: http://data.influenceexplorer.com/api/lobbying/)
        */
        this.set_FilingType = function(value) {
            this.setInput("FilingType", value);
        }

        /*
        Set the value of the LobbyistSearch input for this Choreo. ((optional, string) Specify a full-text search of a lobbyist's name.)
        */
        this.set_LobbyistSearch = function(value) {
            this.setInput("LobbyistSearch", value);
        }

        /*
        Set the value of the RegistrantSearch input for this Choreo. ((optional, string) Specify a full-text search of an organization or a person, who is fling the lobbyist registration.)
        */
        this.set_RegistrantSearch = function(value) {
            this.setInput("RegistrantSearch", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are: json (the default), csv, and xls. Note when specifying xls, restults are returned as Base64 encoded data.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((optional, string) Enter the report ID given by the Senate Office of Public Records.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the TransactionType input for this Choreo. ((optional, string) Enter the type of filing as reported by the Senate Office of Public Records. See here for additional info: http://assets.transparencydata.org.s3.amazonaws.com/docs/transaction_types-20100402.csv)
        */
        this.set_TransactionType = function(value) {
            this.setInput("TransactionType", value);
        }

        /*
        Set the value of the YearFiled input for this Choreo. ((optional, string) Specify the year in which a registration was filed. Use the following format: yyyy. Example: 2011. Logical OR is also possible by using the | (pipe) symbol.  Example: 2008|2012.)
        */
        this.set_YearFiled = function(value) {
            this.setInput("YearFiled", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FederalLobbying Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FederalLobbyingResultSet = function(resultStream) {
    FederalLobbyingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Influence Explorer. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FederalLobbying, choreography.Choreography);
util.inherits(FederalLobbyingInputSet, choreography.InputSet);
util.inherits(FederalLobbyingResultSet, choreography.ResultSet);
exports.FederalLobbying = FederalLobbying;


/*
    IDLookup
    Looks up the entity ID based on an ID from a different data set. Currently Influence Explorer provides a mapping from the ID schemes used by Center for Reponsive Politics (CRP) and the National Institute for Money in State Politics (NIMSP).
*/


var IDLookup = function(session) {
    /*
        Create a new instance of the IDLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/IDLookup"
    IDLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new IDLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new IDLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the IDLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var IDLookupInputSet = function() {
    IDLookupInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the Entity in the given namespace.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Namespace input for this Choreo. ((required, string) The dataset and data type of the ID. Accepted values are: urn:crp:individual, urn:crp:organization, urn:crp:recipient, urn:nimsp:organization, urn:nimsp:recipient. See documentation for more details.)
        */
        this.set_Namespace = function(value) {
            this.setInput("Namespace", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the IDLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var IDLookupResultSet = function(resultStream) {
    IDLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(IDLookup, choreography.Choreography);
util.inherits(IDLookupInputSet, choreography.InputSet);
util.inherits(IDLookupResultSet, choreography.ResultSet);
exports.IDLookup = IDLookup;


/*
    LocalBreakdown
    Returns a breakdown of how much of the money raised was from contributors in the politician's state versus outside the politician's state.
*/


var LocalBreakdown = function(session) {
    /*
        Create a new instance of the LocalBreakdown Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/LocalBreakdown"
    LocalBreakdown.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LocalBreakdownResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LocalBreakdownInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LocalBreakdown
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LocalBreakdownInputSet = function() {
    LocalBreakdownInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LocalBreakdown Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LocalBreakdownResultSet = function(resultStream) {
    LocalBreakdownResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LocalBreakdown, choreography.Choreography);
util.inherits(LocalBreakdownInputSet, choreography.InputSet);
util.inherits(LocalBreakdownResultSet, choreography.ResultSet);
exports.LocalBreakdown = LocalBreakdown;


/*
    PartyBreakdown
    Returns how much an individual or organization gave to each party.
*/


var PartyBreakdown = function(session) {
    /*
        Create a new instance of the PartyBreakdown Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/PartyBreakdown"
    PartyBreakdown.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PartyBreakdownResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PartyBreakdownInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PartyBreakdown
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PartyBreakdownInputSet = function() {
    PartyBreakdownInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ContributorType input for this Choreo. ((required, string) This indicates whether the contributor is an individual or orgnaization. Accepted values are: "indiv" or "org". Defaults to "org".)
        */
        this.set_ContributorType = function(value) {
            this.setInput("ContributorType", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PartyBreakdown Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PartyBreakdownResultSet = function(resultStream) {
    PartyBreakdownResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PartyBreakdown, choreography.Choreography);
util.inherits(PartyBreakdownInputSet, choreography.InputSet);
util.inherits(PartyBreakdownResultSet, choreography.ResultSet);
exports.PartyBreakdown = PartyBreakdown;


/*
    SearchByName
    Searches for politicians, individuals, or organizations with the given name. Returns basic information about the the contributions to and from the entity that is specified.
*/


var SearchByName = function(session) {
    /*
        Create a new instance of the SearchByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/SearchByName"
    SearchByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByNameInputSet = function() {
    SearchByNameInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((required, string) The query string.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByNameResultSet = function(resultStream) {
    SearchByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByName, choreography.Choreography);
util.inherits(SearchByNameInputSet, choreography.InputSet);
util.inherits(SearchByNameResultSet, choreography.ResultSet);
exports.SearchByName = SearchByName;


/*
    StateFederalBreakdown
    Returns the portion of contribution given by an individual or organization that went to state versus federal candidates.
*/


var StateFederalBreakdown = function(session) {
    /*
        Create a new instance of the StateFederalBreakdown Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/StateFederalBreakdown"
    StateFederalBreakdown.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StateFederalBreakdownResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StateFederalBreakdownInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StateFederalBreakdown
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StateFederalBreakdownInputSet = function() {
    StateFederalBreakdownInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StateFederalBreakdown Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StateFederalBreakdownResultSet = function(resultStream) {
    StateFederalBreakdownResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StateFederalBreakdown, choreography.Choreography);
util.inherits(StateFederalBreakdownInputSet, choreography.InputSet);
util.inherits(StateFederalBreakdownResultSet, choreography.ResultSet);
exports.StateFederalBreakdown = StateFederalBreakdown;


/*
    TopContributors
    Returns the top contributing organizations for a particular politician, ranked by total dollars given.
*/


var TopContributors = function(session) {
    /*
        Create a new instance of the TopContributors Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/TopContributors"
    TopContributors.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopContributorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopContributorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopContributors
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopContributorsInputSet = function() {
    TopContributorsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopContributors Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopContributorsResultSet = function(resultStream) {
    TopContributorsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopContributors, choreography.Choreography);
util.inherits(TopContributorsInputSet, choreography.InputSet);
util.inherits(TopContributorsResultSet, choreography.ResultSet);
exports.TopContributors = TopContributors;


/*
    TopRecipientOrganizations
    Returns the top organizations to which the specified individual has given money.
*/


var TopRecipientOrganizations = function(session) {
    /*
        Create a new instance of the TopRecipientOrganizations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/TopRecipientOrganizations"
    TopRecipientOrganizations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopRecipientOrganizationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopRecipientOrganizationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopRecipientOrganizations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopRecipientOrganizationsInputSet = function() {
    TopRecipientOrganizationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of resutls to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopRecipientOrganizations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopRecipientOrganizationsResultSet = function(resultStream) {
    TopRecipientOrganizationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopRecipientOrganizations, choreography.Choreography);
util.inherits(TopRecipientOrganizationsInputSet, choreography.InputSet);
util.inherits(TopRecipientOrganizationsResultSet, choreography.ResultSet);
exports.TopRecipientOrganizations = TopRecipientOrganizations;


/*
    TopRecipientPoliticians
    Returns the top politicians to which this individual has given money.
*/


var TopRecipientPoliticians = function(session) {
    /*
        Create a new instance of the TopRecipientPoliticians Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/TopRecipientPoliticians"
    TopRecipientPoliticians.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopRecipientPoliticiansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopRecipientPoliticiansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopRecipientPoliticians
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopRecipientPoliticiansInputSet = function() {
    TopRecipientPoliticiansInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of resutls to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopRecipientPoliticians Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopRecipientPoliticiansResultSet = function(resultStream) {
    TopRecipientPoliticiansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopRecipientPoliticians, choreography.Choreography);
util.inherits(TopRecipientPoliticiansInputSet, choreography.InputSet);
util.inherits(TopRecipientPoliticiansResultSet, choreography.ResultSet);
exports.TopRecipientPoliticians = TopRecipientPoliticians;


/*
    TopRecipients
    Returns the top recipients of money from a specified organization.
*/


var TopRecipients = function(session) {
    /*
        Create a new instance of the TopRecipients Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/TopRecipients"
    TopRecipients.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopRecipientsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopRecipientsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopRecipients
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopRecipientsInputSet = function() {
    TopRecipientsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of resutls to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopRecipients Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopRecipientsResultSet = function(resultStream) {
    TopRecipientsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopRecipients, choreography.Choreography);
util.inherits(TopRecipientsInputSet, choreography.InputSet);
util.inherits(TopRecipientsResultSet, choreography.ResultSet);
exports.TopRecipients = TopRecipients;


/*
    TopSectors
    Returns the contribution amounts that each sector gave to the politician.
*/


var TopSectors = function(session) {
    /*
        Create a new instance of the TopSectors Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/InfluenceExplorer/TopSectors"
    TopSectors.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopSectorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopSectorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopSectors
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopSectorsInputSet = function() {
    TopSectorsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API key provided by Sunlight Data Services.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, string) The ID for the Entity that you want to return information for. This ID can be retrieved by running the SearchByName Choreo.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopSectors Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopSectorsResultSet = function(resultStream) {
    TopSectorsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Influence Explorer.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopSectors, choreography.Choreography);
util.inherits(TopSectorsInputSet, choreography.InputSet);
util.inherits(TopSectorsResultSet, choreography.ResultSet);
exports.TopSectors = TopSectors;

