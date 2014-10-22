
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetLenderDetails
    Returns details for lenders.
*/


var GetLenderDetails = function(session) {
    /*
        Create a new instance of the GetLenderDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Lenders/GetLenderDetails"
    GetLenderDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLenderDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLenderDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLenderDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLenderDetailsInputSet = function() {
    GetLenderDetailsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LenderName input for this Choreo. ((required, string) List of comma-delimited lender names for which to return details. Maximum list items: 50.)
        */
        this.set_LenderName = function(value) {
            this.setInput("LenderName", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLenderDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLenderDetailsResultSet = function(resultStream) {
    GetLenderDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLenderDetails, choreography.Choreography);
util.inherits(GetLenderDetailsInputSet, choreography.InputSet);
util.inherits(GetLenderDetailsResultSet, choreography.ResultSet);
exports.GetLenderDetails = GetLenderDetails;


/*
    GetLenderLoans
    Returns loans belonging to a particular lender.
*/


var GetLenderLoans = function(session) {
    /*
        Create a new instance of the GetLenderLoans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Lenders/GetLenderLoans"
    GetLenderLoans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLenderLoansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLenderLoansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLenderLoans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLenderLoansInputSet = function() {
    GetLenderLoansInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LenderName input for this Choreo. ((required, string) The lender name for which to return details.)
        */
        this.set_LenderName = function(value) {
            this.setInput("LenderName", value);
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
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results. Acceptable values: oldest, newest. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLenderLoans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLenderLoansResultSet = function(resultStream) {
    GetLenderLoansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLenderLoans, choreography.Choreography);
util.inherits(GetLenderLoansInputSet, choreography.InputSet);
util.inherits(GetLenderLoansResultSet, choreography.ResultSet);
exports.GetLenderLoans = GetLenderLoans;


/*
    GetLenderTeams
    Returns teams that a particular lender is part of.
*/


var GetLenderTeams = function(session) {
    /*
        Create a new instance of the GetLenderTeams Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Lenders/GetLenderTeams"
    GetLenderTeams.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLenderTeamsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLenderTeamsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLenderTeams
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLenderTeamsInputSet = function() {
    GetLenderTeamsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LenderName input for this Choreo. ((required, string) The lender name for which to return details.)
        */
        this.set_LenderName = function(value) {
            this.setInput("LenderName", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetLenderTeams Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLenderTeamsResultSet = function(resultStream) {
    GetLenderTeamsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLenderTeams, choreography.Choreography);
util.inherits(GetLenderTeamsInputSet, choreography.InputSet);
util.inherits(GetLenderTeamsResultSet, choreography.ResultSet);
exports.GetLenderTeams = GetLenderTeams;


/*
    GetNewestLenders
    Returns listings for the lenders who have most recently joined Kiva.
*/


var GetNewestLenders = function(session) {
    /*
        Create a new instance of the GetNewestLenders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Lenders/GetNewestLenders"
    GetNewestLenders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewestLendersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewestLendersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewestLenders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewestLendersInputSet = function() {
    GetNewestLendersInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetNewestLenders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewestLendersResultSet = function(resultStream) {
    GetNewestLendersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewestLenders, choreography.Choreography);
util.inherits(GetNewestLendersInputSet, choreography.InputSet);
util.inherits(GetNewestLendersResultSet, choreography.ResultSet);
exports.GetNewestLenders = GetNewestLenders;


/*
    SearchLenders
    Returns a keyword search for lenders based on multiple criteria.
*/


var SearchLenders = function(session) {
    /*
        Create a new instance of the SearchLenders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Lenders/SearchLenders"
    SearchLenders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchLendersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchLendersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchLenders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchLendersInputSet = function() {
    SearchLendersInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) An ISO country code by which to filter results.)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) A general search query parameter which matches against lenders’ names occupations, whereabouts, and reasons for lending.)
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
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results. Acceptable values: oldest, newest. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchLenders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchLendersResultSet = function(resultStream) {
    SearchLendersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchLenders, choreography.Choreography);
util.inherits(SearchLendersInputSet, choreography.InputSet);
util.inherits(SearchLendersResultSet, choreography.ResultSet);
exports.SearchLenders = SearchLenders;

