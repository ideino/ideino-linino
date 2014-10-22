
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    BookmarkAJob
    Bookmark a job listed on LinkedIn.
*/


var BookmarkAJob = function(session) {
    /*
        Create a new instance of the BookmarkAJob Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/BookmarkAJob"
    BookmarkAJob.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BookmarkAJobResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BookmarkAJobInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BookmarkAJob
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BookmarkAJobInputSet = function() {
    BookmarkAJobInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the JobID input for this Choreo. ((required, integer) Enter a LinkedIn job ID.)
        */
        this.set_JobID = function(value) {
            this.setInput("JobID", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BookmarkAJob Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BookmarkAJobResultSet = function(resultStream) {
    BookmarkAJobResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn. Note that for a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BookmarkAJob, choreography.Choreography);
util.inherits(BookmarkAJobInputSet, choreography.InputSet);
util.inherits(BookmarkAJobResultSet, choreography.ResultSet);
exports.BookmarkAJob = BookmarkAJob;


/*
    DeleteJobBookmark
    Delete a job bookmark by specifying a job ID.
*/


var DeleteJobBookmark = function(session) {
    /*
        Create a new instance of the DeleteJobBookmark Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/DeleteJobBookmark"
    DeleteJobBookmark.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteJobBookmarkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteJobBookmarkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteJobBookmark
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteJobBookmarkInputSet = function() {
    DeleteJobBookmarkInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the JobID input for this Choreo. ((required, integer) Enter a LinkedIn job ID.)
        */
        this.set_JobID = function(value) {
            this.setInput("JobID", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteJobBookmark Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteJobBookmarkResultSet = function(resultStream) {
    DeleteJobBookmarkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn. Note that for a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteJobBookmark, choreography.Choreography);
util.inherits(DeleteJobBookmarkInputSet, choreography.InputSet);
util.inherits(DeleteJobBookmarkResultSet, choreography.ResultSet);
exports.DeleteJobBookmark = DeleteJobBookmark;


/*
    GetBookmarkedJobs
    Retrieve a list of bookmarked jobs for the current user.
*/


var GetBookmarkedJobs = function(session) {
    /*
        Create a new instance of the GetBookmarkedJobs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/GetBookmarkedJobs"
    GetBookmarkedJobs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBookmarkedJobsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBookmarkedJobsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBookmarkedJobs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBookmarkedJobsInputSet = function() {
    GetBookmarkedJobsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBookmarkedJobs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBookmarkedJobsResultSet = function(resultStream) {
    GetBookmarkedJobsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBookmarkedJobs, choreography.Choreography);
util.inherits(GetBookmarkedJobsInputSet, choreography.InputSet);
util.inherits(GetBookmarkedJobsResultSet, choreography.ResultSet);
exports.GetBookmarkedJobs = GetBookmarkedJobs;


/*
    GetJobs
    Retrieve a listed LinkedIn job.
*/


var GetJobs = function(session) {
    /*
        Create a new instance of the GetJobs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/GetJobs"
    GetJobs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetJobsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetJobsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetJobs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetJobsInputSet = function() {
    GetJobsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the JobID input for this Choreo. ((required, integer) A LinkedIn assigned job ID.)
        */
        this.set_JobID = function(value) {
            this.setInput("JobID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetJobs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetJobsResultSet = function(resultStream) {
    GetJobsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetJobs, choreography.Choreography);
util.inherits(GetJobsInputSet, choreography.InputSet);
util.inherits(GetJobsResultSet, choreography.ResultSet);
exports.GetJobs = GetJobs;


/*
    GetSuggestedJobs
    Get a list of job suggestions for the current user.
*/


var GetSuggestedJobs = function(session) {
    /*
        Create a new instance of the GetSuggestedJobs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/GetSuggestedJobs"
    GetSuggestedJobs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSuggestedJobsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSuggestedJobsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSuggestedJobs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSuggestedJobsInputSet = function() {
    GetSuggestedJobsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSuggestedJobs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSuggestedJobsResultSet = function(resultStream) {
    GetSuggestedJobsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSuggestedJobs, choreography.Choreography);
util.inherits(GetSuggestedJobsInputSet, choreography.InputSet);
util.inherits(GetSuggestedJobsResultSet, choreography.ResultSet);
exports.GetSuggestedJobs = GetSuggestedJobs;


/*
    SearchJobsByJobTitle
    Retrieve jobs matching specified job title.
*/


var SearchJobsByJobTitle = function(session) {
    /*
        Create a new instance of the SearchJobsByJobTitle Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/SearchJobsByJobTitle"
    SearchJobsByJobTitle.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchJobsByJobTitleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchJobsByJobTitleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchJobsByJobTitle
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchJobsByJobTitleInputSet = function() {
    SearchJobsByJobTitleInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specify the number of jobs to be returned.  Default is 10.  The maximum is 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the JobTitle input for this Choreo. ((required, integer) Search by job title.)
        */
        this.set_JobTitle = function(value) {
            this.setInput("JobTitle", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Specify the ordering of results. Enter R (for relationship from job to member); DA (dated posted in ascending order); DO (job posted in descending order).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchJobsByJobTitle Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchJobsByJobTitleResultSet = function(resultStream) {
    SearchJobsByJobTitleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchJobsByJobTitle, choreography.Choreography);
util.inherits(SearchJobsByJobTitleInputSet, choreography.InputSet);
util.inherits(SearchJobsByJobTitleResultSet, choreography.ResultSet);
exports.SearchJobsByJobTitle = SearchJobsByJobTitle;


/*
    SearchJobsByKeywords
    Retrieve jobs matching the specified keyword(s).
*/


var SearchJobsByKeywords = function(session) {
    /*
        Create a new instance of the SearchJobsByKeywords Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/SearchJobsByKeywords"
    SearchJobsByKeywords.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchJobsByKeywordsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchJobsByKeywordsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchJobsByKeywords
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchJobsByKeywordsInputSet = function() {
    SearchJobsByKeywordsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specify the number of jobs to be returned.  Default is 10.  The maximum is 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Keywords input for this Choreo. ((required, string) Limit search by specified keyword(s).)
        */
        this.set_Keywords = function(value) {
            this.setInput("Keywords", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Specify the ordering of results. Enter R (for relationship from job to member); DA (dated posted in ascending order); DO (job posted in descending order).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchJobsByKeywords Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchJobsByKeywordsResultSet = function(resultStream) {
    SearchJobsByKeywordsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchJobsByKeywords, choreography.Choreography);
util.inherits(SearchJobsByKeywordsInputSet, choreography.InputSet);
util.inherits(SearchJobsByKeywordsResultSet, choreography.ResultSet);
exports.SearchJobsByKeywords = SearchJobsByKeywords;


/*
    SearchJobsByZipcodeAndCountryCode
    Retrieve jobs filtered by zipcode (postal code) and country code.
*/


var SearchJobsByZipcodeAndCountryCode = function(session) {
    /*
        Create a new instance of the SearchJobsByZipcodeAndCountryCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Jobs/SearchJobsByZipcodeAndCountryCode"
    SearchJobsByZipcodeAndCountryCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchJobsByZipcodeAndCountryCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchJobsByZipcodeAndCountryCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchJobsByZipcodeAndCountryCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchJobsByZipcodeAndCountryCodeInputSet = function() {
    SearchJobsByZipcodeAndCountryCodeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specify the number of jobs to be returned.  Default is 10.  The maximum is 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) Enter an ISO 3166 country code.  Default is set to U.S. (US).)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((required, integer) Enter a postal (zip) code.  Don't forget to also set the CountryCode variable.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Specify the ordering of results. Enter R (for relationship from job to member); DA (dated posted in ascending order); DO (job posted in descending order).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchJobsByZipcodeAndCountryCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchJobsByZipcodeAndCountryCodeResultSet = function(resultStream) {
    SearchJobsByZipcodeAndCountryCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchJobsByZipcodeAndCountryCode, choreography.Choreography);
util.inherits(SearchJobsByZipcodeAndCountryCodeInputSet, choreography.InputSet);
util.inherits(SearchJobsByZipcodeAndCountryCodeResultSet, choreography.ResultSet);
exports.SearchJobsByZipcodeAndCountryCode = SearchJobsByZipcodeAndCountryCode;

