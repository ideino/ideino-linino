
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetComments
    Returns comments for a specified journal entry.
*/


var GetComments = function(session) {
    /*
        Create a new instance of the GetComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/JournalEntries/GetComments"
    GetComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommentsInputSet = function() {
    GetCommentsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the JournalID input for this Choreo. ((required, integer) The ID number of the journal entry for which you want comments.)
        */
        this.set_JournalID = function(value) {
            this.setInput("JournalID", value);
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
A ResultSet with methods tailored to the values returned by the GetComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentsResultSet = function(resultStream) {
    GetCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComments, choreography.Choreography);
util.inherits(GetCommentsInputSet, choreography.InputSet);
util.inherits(GetCommentsResultSet, choreography.ResultSet);
exports.GetComments = GetComments;


/*
    SearchJournalEntries
    Returns a keyword search of all journal entries.
*/


var SearchJournalEntries = function(session) {
    /*
        Create a new instance of the SearchJournalEntries Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/JournalEntries/SearchJournalEntries"
    SearchJournalEntries.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchJournalEntriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchJournalEntriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchJournalEntries
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchJournalEntriesInputSet = function() {
    SearchJournalEntriesInputSet.super_.call(this);
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
        Set the value of the Query input for this Choreo. ((optional, string) Word or phrase used to search for in the journals' content.)
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
        Set the value of the SortBy input for this Choreo. ((optional, string) The order by which to return the results. Acceptable values: newest, oldest, recommendation_count, comment_count. Defaults to newest.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchJournalEntries Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchJournalEntriesResultSet = function(resultStream) {
    SearchJournalEntriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchJournalEntries, choreography.Choreography);
util.inherits(SearchJournalEntriesInputSet, choreography.InputSet);
util.inherits(SearchJournalEntriesResultSet, choreography.ResultSet);
exports.SearchJournalEntries = SearchJournalEntries;

