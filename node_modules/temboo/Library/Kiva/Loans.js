
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetLenders
    Returns a list of public lenders to a loan.
*/


var GetLenders = function(session) {
    /*
        Create a new instance of the GetLenders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Loans/GetLenders"
    GetLenders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLendersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLendersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLenders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLendersInputSet = function() {
    GetLendersInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LoanID input for this Choreo. ((required, string) The ID of the loan for which to get details.)
        */
        this.set_LoanID = function(value) {
            this.setInput("LoanID", value);
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
A ResultSet with methods tailored to the values returned by the GetLenders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLendersResultSet = function(resultStream) {
    GetLendersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLenders, choreography.Choreography);
util.inherits(GetLendersInputSet, choreography.InputSet);
util.inherits(GetLendersResultSet, choreography.ResultSet);
exports.GetLenders = GetLenders;


/*
    GetLoanDetails
    Returns detailed information for multiple loans.
*/


var GetLoanDetails = function(session) {
    /*
        Create a new instance of the GetLoanDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Loans/GetLoanDetails"
    GetLoanDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLoanDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLoanDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLoanDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLoanDetailsInputSet = function() {
    GetLoanDetailsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LoanID input for this Choreo. ((required, string) A comma-delimited list of the loan IDs for which to get details. Maximum list items: 10.)
        */
        this.set_LoanID = function(value) {
            this.setInput("LoanID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLoanDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLoanDetailsResultSet = function(resultStream) {
    GetLoanDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLoanDetails, choreography.Choreography);
util.inherits(GetLoanDetailsInputSet, choreography.InputSet);
util.inherits(GetLoanDetailsResultSet, choreography.ResultSet);
exports.GetLoanDetails = GetLoanDetails;


/*
    GetLoanUpdates
    Returns all status updates for a loan, newest first.
*/


var GetLoanUpdates = function(session) {
    /*
        Create a new instance of the GetLoanUpdates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Loans/GetLoanUpdates"
    GetLoanUpdates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLoanUpdatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLoanUpdatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLoanUpdates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLoanUpdatesInputSet = function() {
    GetLoanUpdatesInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the LoanID input for this Choreo. ((required, string) The ID of the loan for which to get details.)
        */
        this.set_LoanID = function(value) {
            this.setInput("LoanID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLoanUpdates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLoanUpdatesResultSet = function(resultStream) {
    GetLoanUpdatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLoanUpdates, choreography.Choreography);
util.inherits(GetLoanUpdatesInputSet, choreography.InputSet);
util.inherits(GetLoanUpdatesResultSet, choreography.ResultSet);
exports.GetLoanUpdates = GetLoanUpdates;


/*
    GetNewestLoans
    Returns a list of the most recent fundraising loans.
*/


var GetNewestLoans = function(session) {
    /*
        Create a new instance of the GetNewestLoans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Loans/GetNewestLoans"
    GetNewestLoans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewestLoansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewestLoansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewestLoans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewestLoansInputSet = function() {
    GetNewestLoansInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetNewestLoans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewestLoansResultSet = function(resultStream) {
    GetNewestLoansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewestLoans, choreography.Choreography);
util.inherits(GetNewestLoansInputSet, choreography.InputSet);
util.inherits(GetNewestLoansResultSet, choreography.ResultSet);
exports.GetNewestLoans = GetNewestLoans;


/*
    SearchLoans
    Returns a keyword search for loan listings by multiple criteria.
*/


var SearchLoans = function(session) {
    /*
        Create a new instance of the SearchLoans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Loans/SearchLoans"
    SearchLoans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchLoansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchLoansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchLoans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchLoansInputSet = function() {
    SearchLoansInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) A list of two-character ISO codes of countries by which to filter results.)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) If supplied, results are filtered to loans with entrepreneurs of the specified gender. In the case of group loans, this matches against the predominate gender in the group: male or female.)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Partner input for this Choreo. ((optional, string) A list of partner IDs for which to filter results.)
        */
        this.set_Partner = function(value) {
            this.setInput("Partner", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A query string against which results should be returned.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Region input for this Choreo. ((optional, string) List of two-letter codes corresponding to regions in which Kiva operates. If supplied, results are filtered to loans only from the specified regions: na, ca, sa, af, as, me, ee.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Sector input for this Choreo. ((optional, string) A list of business sectors for which to filter results.)
        */
        this.set_Sector = function(value) {
            this.setInput("Sector", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to sort results. Acceptable values: popularity, loan_amount, oldest, expiration, newest, amount_remaining, repayment_term. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) The status of loans to return: fundraising, funded, in_repayment, paid, ended_with_loss.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchLoans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchLoansResultSet = function(resultStream) {
    SearchLoansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchLoans, choreography.Choreography);
util.inherits(SearchLoansInputSet, choreography.InputSet);
util.inherits(SearchLoansResultSet, choreography.ResultSet);
exports.SearchLoans = SearchLoans;

