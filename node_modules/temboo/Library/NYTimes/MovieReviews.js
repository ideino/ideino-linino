
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetPicks
    Retrieves lists of reviews and NYT Critics' Picks.
*/


var GetPicks = function(session) {
    /*
        Create a new instance of the GetPicks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MovieReviews/GetPicks"
    GetPicks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPicksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPicksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPicks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPicksInputSet = function() {
    GetPicksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Sets the sort order of the results. Accepted values are: by-title, by-publication-date, by-opening-date, by-dvd-release-date.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the ResourceType input for this Choreo. ((optional, string) Specify "picks" to get NYT Critics' Picks in theaters or "dvd-picks" to get NYT Critics' Picks on DVD. Specify "all" to retrieve all reviews.)
        */
        this.set_ResourceType = function(value) {
            this.setInput("ResourceType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPicks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPicksResultSet = function(resultStream) {
    GetPicksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPicks, choreography.Choreography);
util.inherits(GetPicksInputSet, choreography.InputSet);
util.inherits(GetPicksResultSet, choreography.ResultSet);
exports.GetPicks = GetPicks;


/*
    GetReviewer
    Retrieves biographical information about reviewers.
*/


var GetReviewer = function(session) {
    /*
        Create a new instance of the GetReviewer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MovieReviews/GetReviewer"
    GetReviewer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReviewerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReviewerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReviewer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReviewerInputSet = function() {
    GetReviewerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResourceType input for this Choreo. ((optional, string) Specify "all", "full-time", or "part-time" for that subset. Specify a reviewer's name to get details about a reviewer. Names should be separated by hyphens or dots (i.e. manohla-dargis).)
        */
        this.set_ResourceType = function(value) {
            this.setInput("ResourceType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReviewer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReviewerResultSet = function(resultStream) {
    GetReviewerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReviewer, choreography.Choreography);
util.inherits(GetReviewerInputSet, choreography.InputSet);
util.inherits(GetReviewerResultSet, choreography.ResultSet);
exports.GetReviewer = GetReviewer;


/*
    SearchByKeyword
    Searches movie reviews by keyword and various filter parameters.
*/


var SearchByKeyword = function(session) {
    /*
        Create a new instance of the SearchByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MovieReviews/SearchByKeyword"
    SearchByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByKeywordInputSet = function() {
    SearchByKeywordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CriticsPick input for this Choreo. ((optional, string) Set this parameter to Y to limt the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify N.)
        */
        this.set_CriticsPick = function(value) {
            this.setInput("CriticsPick", value);
        }

        /*
        Set the value of the DVD input for this Choreo. ((optional, string) Set this parameter to Y to limit the results to movies that have been released on DVD. To get only those movies that have not been released on DVD, specify N.)
        */
        this.set_DVD = function(value) {
            this.setInput("DVD", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. This can be used in combination with the Limit input to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the OpeningDate input for this Choreo. ((optional, date) Limits by date or range of dates. The opening-date is the date the movie's opening date in the New York region. Format YYYY-MM-DD. Separate ranges with semicolons.)
        */
        this.set_OpeningDate = function(value) {
            this.setInput("OpeningDate", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Sets the sort order of the results. Accepted values are: by-title, by-publication-date, by-opening-date, by-dvd-release-date.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PublicationDate input for this Choreo. ((optional, date) Limits by date or range of dates. The publication-date is the date the review was first publish.ed in The Times. Format YYYY-MM-DD. Separate ranges with semicolons.)
        */
        this.set_PublicationDate = function(value) {
            this.setInput("PublicationDate", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) A string of search keywords. Matches movie titles and indexed terms.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Reviewer input for this Choreo. ((optional, string) Limits results to reviews by a specific critic. Reviewer names should be hyphenated or concatenated with dots (i.e manohla.dargis).)
        */
        this.set_Reviewer = function(value) {
            this.setInput("Reviewer", value);
        }

        /*
        Set the value of the ThousandBest input for this Choreo. ((optional, string) Set this parameter to Y to limit the results to movies on the Times list of The Best 1,000 Movies Ever Made. To get only those movies that are not on the list, specify N.)
        */
        this.set_ThousandBest = function(value) {
            this.setInput("ThousandBest", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByKeywordResultSet = function(resultStream) {
    SearchByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByKeyword, choreography.Choreography);
util.inherits(SearchByKeywordInputSet, choreography.InputSet);
util.inherits(SearchByKeywordResultSet, choreography.ResultSet);
exports.SearchByKeyword = SearchByKeyword;


/*
    SearchByReviewer
    Retrieves reviews by a specific Times reviewer.
*/


var SearchByReviewer = function(session) {
    /*
        Create a new instance of the SearchByReviewer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MovieReviews/SearchByReviewer"
    SearchByReviewer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByReviewerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByReviewerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByReviewer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByReviewerInputSet = function() {
    SearchByReviewerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CriticsPick input for this Choreo. ((optional, string) Set this parameter to Y to limt the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify N.)
        */
        this.set_CriticsPick = function(value) {
            this.setInput("CriticsPick", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Sets the sort order of the results. Accepted values are: by-title, by-publication-date, by-opening-date, by-dvd-release-date.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ReviewerName input for this Choreo. ((required, string) The name of the Times reviewer. Reviewer names should be separated by hyphens or dots (i.e. manohla-dargis or manohla.dargis).)
        */
        this.set_ReviewerName = function(value) {
            this.setInput("ReviewerName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByReviewer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByReviewerResultSet = function(resultStream) {
    SearchByReviewerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByReviewer, choreography.Choreography);
util.inherits(SearchByReviewerInputSet, choreography.InputSet);
util.inherits(SearchByReviewerResultSet, choreography.ResultSet);
exports.SearchByReviewer = SearchByReviewer;

