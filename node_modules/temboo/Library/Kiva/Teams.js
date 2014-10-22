
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetTeamByShortname
    Returns detailed information about one or more teams, using team shortnames.
*/


var GetTeamByShortname = function(session) {
    /*
        Create a new instance of the GetTeamByShortname Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Teams/GetTeamByShortname"
    GetTeamByShortname.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTeamByShortnameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTeamByShortnameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTeamByShortname
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTeamByShortnameInputSet = function() {
    GetTeamByShortnameInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the TeamShortname input for this Choreo. ((required, string) The Team shortname for which to return details.)
        */
        this.set_TeamShortname = function(value) {
            this.setInput("TeamShortname", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTeamByShortname Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTeamByShortnameResultSet = function(resultStream) {
    GetTeamByShortnameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTeamByShortname, choreography.Choreography);
util.inherits(GetTeamByShortnameInputSet, choreography.InputSet);
util.inherits(GetTeamByShortnameResultSet, choreography.ResultSet);
exports.GetTeamByShortname = GetTeamByShortname;


/*
    GetTeamLenders
    Returns a list of public lenders belonging to a specific team.
*/


var GetTeamLenders = function(session) {
    /*
        Create a new instance of the GetTeamLenders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Teams/GetTeamLenders"
    GetTeamLenders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTeamLendersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTeamLendersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTeamLenders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTeamLendersInputSet = function() {
    GetTeamLendersInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results: oldest  or newest. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the TeamID input for this Choreo. ((required, string) The TeamID for which to return lenders.)
        */
        this.set_TeamID = function(value) {
            this.setInput("TeamID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTeamLenders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTeamLendersResultSet = function(resultStream) {
    GetTeamLendersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTeamLenders, choreography.Choreography);
util.inherits(GetTeamLendersInputSet, choreography.InputSet);
util.inherits(GetTeamLendersResultSet, choreography.ResultSet);
exports.GetTeamLenders = GetTeamLenders;


/*
    GetTeamLoans
    Returns loans belonging to a particular team.
*/


var GetTeamLoans = function(session) {
    /*
        Create a new instance of the GetTeamLoans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Teams/GetTeamLoans"
    GetTeamLoans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTeamLoansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTeamLoansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTeamLoans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTeamLoansInputSet = function() {
    GetTeamLoansInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results: oldest  or newest. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the TeamID input for this Choreo. ((required, string) The TeamID for which to return lenders.)
        */
        this.set_TeamID = function(value) {
            this.setInput("TeamID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTeamLoans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTeamLoansResultSet = function(resultStream) {
    GetTeamLoansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTeamLoans, choreography.Choreography);
util.inherits(GetTeamLoansInputSet, choreography.InputSet);
util.inherits(GetTeamLoansResultSet, choreography.ResultSet);
exports.GetTeamLoans = GetTeamLoans;


/*
    GetTeams
    Returns detailed information about one or more lending teams.
*/


var GetTeams = function(session) {
    /*
        Create a new instance of the GetTeams Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Teams/GetTeams"
    GetTeams.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTeamsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTeamsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTeams
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTeamsInputSet = function() {
    GetTeamsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the TeamID input for this Choreo. ((required, string) A list of team IDs for which details are to be returned. Max list items: 20.)
        */
        this.set_TeamID = function(value) {
            this.setInput("TeamID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTeams Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTeamsResultSet = function(resultStream) {
    GetTeamsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTeams, choreography.Choreography);
util.inherits(GetTeamsInputSet, choreography.InputSet);
util.inherits(GetTeamsResultSet, choreography.ResultSet);
exports.GetTeams = GetTeams;


/*
    SearchTeams
    Returns a keyword search of all lending teams using multiple criteria.
*/


var SearchTeams = function(session) {
    /*
        Create a new instance of the SearchTeams Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Teams/SearchTeams"
    SearchTeams.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchTeamsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchTeamsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchTeams
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchTeamsInputSet = function() {
    SearchTeamsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the MembershipType input for this Choreo. ((optional, string) If supplied, only teams with the specified membership policy are returned: open or closed.)
        */
        this.set_MembershipType = function(value) {
            this.setInput("MembershipType", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A query string against which results should be returned.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results. Acceptable values: popularity, loan_amount, oldest, expiration, newest, amount_remaining, repayment_term. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchTeams Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchTeamsResultSet = function(resultStream) {
    SearchTeamsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchTeams, choreography.Choreography);
util.inherits(SearchTeamsInputSet, choreography.InputSet);
util.inherits(SearchTeamsResultSet, choreography.ResultSet);
exports.SearchTeams = SearchTeams;

