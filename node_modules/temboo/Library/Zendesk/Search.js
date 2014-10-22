
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchAll
    Returns search results across all ticket fields.
*/


var SearchAll = function(session) {
    /*
        Create a new instance of the SearchAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Search/SearchAll"
    SearchAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchAllInputSet = function() {
    SearchAllInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The search text to be matched.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Acceptable values: updated_at, created_at, priority, status, ticket_type.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Indicate either: relevance, asc (for ascending), desc (for descending). Defaults to relevance.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchAllResultSet = function(resultStream) {
    SearchAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(SearchAll, choreography.Choreography);
util.inherits(SearchAllInputSet, choreography.InputSet);
util.inherits(SearchAllResultSet, choreography.ResultSet);
exports.SearchAll = SearchAll;


/*
    SearchAnonymous
    Allows anonymous users to search public forums.
*/


var SearchAnonymous = function(session) {
    /*
        Create a new instance of the SearchAnonymous Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Search/SearchAnonymous"
    SearchAnonymous.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchAnonymousResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchAnonymousInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchAnonymous
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchAnonymousInputSet = function() {
    SearchAnonymousInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The search text to be matched.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Acceptable values: updated_at, created_at, priority, status, ticket_type.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Indicate either: relevance, asc (for ascending), desc (for descending). Defaults to relevance.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchAnonymous Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchAnonymousResultSet = function(resultStream) {
    SearchAnonymousResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(SearchAnonymous, choreography.Choreography);
util.inherits(SearchAnonymousInputSet, choreography.InputSet);
util.inherits(SearchAnonymousResultSet, choreography.ResultSet);
exports.SearchAnonymous = SearchAnonymous;

