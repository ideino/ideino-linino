
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Dates
    Returns the popularity of a given phrase in the Congressional Record over time.
*/


var Dates = function(session) {
    /*
        Create a new instance of the Dates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/CapitolWords/Dates"
    Dates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Dates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DatesInputSet = function() {
    DatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BioguideID input for this Choreo. ((optional, string) Limit results to the member of Congress with the given Bioguide ID. The Bioguide ID of any current or past congressional member can be found at bioguide.congress.gov.)
        */
        this.set_BioguideID = function(value) {
            this.setInput("BioguideID", value);
        }

        /*
        Set the value of the Chamber input for this Choreo. ((optional, string) Limit results to a particular chamber. Valid values: house, senate, extensions.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Show results for only the given date. Format: YYYY-MM-DD)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Limit results to those on or before the given date. Format: YYYY-MM-DD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Granularity input for this Choreo. ((optional, string) The length of time covered by each result. Valid values: year, month, day. Defaults to day.)
        */
        this.set_Granularity = function(value) {
            this.setInput("Granularity", value);
        }

        /*
        Set the value of the MinCount input for this Choreo. ((optional, boolean) Only returns results where mentions are at or above the supplied threshold.)
        */
        this.set_MinCount = function(value) {
            this.setInput("MinCount", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Limit results to members of congress from a given party. Valid values: R, D, I.)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the Percentages input for this Choreo. ((optional, string) Include the percentage of mentions versus total words in the result objects. Valid values: true, false. Defaults to false.)
        */
        this.set_Percentages = function(value) {
            this.setInput("Percentages", value);
        }

        /*
        Set the value of the Phrase input for this Choreo. ((required, string) The phrase to search for.)
        */
        this.set_Phrase = function(value) {
            this.setInput("Phrase", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Output formats inlcude json and xml. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Limit results to those on or after the given date. Format: YYYY-MM-DD)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Limit results to members from a particular state. Format: 2-letter state abbreviation (e.g. MD, RI, NY))
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Dates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DatesResultSet = function(resultStream) {
    DatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CapitolWords.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Dates, choreography.Choreography);
util.inherits(DatesInputSet, choreography.InputSet);
util.inherits(DatesResultSet, choreography.ResultSet);
exports.Dates = Dates;


/*
    FullTextSearch
    Returns a list of Congressional Record documents in which the given phrase appears.
*/


var FullTextSearch = function(session) {
    /*
        Create a new instance of the FullTextSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/CapitolWords/FullTextSearch"
    FullTextSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FullTextSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FullTextSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FullTextSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FullTextSearchInputSet = function() {
    FullTextSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BioguideID input for this Choreo. ((optional, string) Limit results to the member of Congress with the given Bioguide ID. The Bioguide ID of any current or past congressonal member can be found at bioguide.congress.gov.)
        */
        this.set_BioguideID = function(value) {
            this.setInput("BioguideID", value);
        }

        /*
        Set the value of the CRPages input for this Choreo. ((optional, string) The pages in the Congressional Record to search.)
        */
        this.set_CRPages = function(value) {
            this.setInput("CRPages", value);
        }

        /*
        Set the value of the Chamber input for this Choreo. ((optional, string) Limit results to a particular chamber. Valid values: house, senate, extensions.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Show results for only the given date. Format: YYYY-MM-DD)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Limit results to those on or before the given date. Format: YYYY-MM-DD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to show. 100 shown at a time.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Limit results to members of congress from a given party. Valid values: R, D, I.)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the Phrase input for this Choreo. ((required, string) A phrase to search the body of each Congressional Record document for. Either Phrase or Title inputs are required.)
        */
        this.set_Phrase = function(value) {
            this.setInput("Phrase", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Output formats inlcude json and xml. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Limit results to those on or after the given date. Format: YYYY-MM-DD)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Limit results to members from a particular state. Format: 2-letter state abbreviation (e.g. MD, RI, NY))
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, integer) A phrase to search the title of each Congressional Record document for. Either Phrase or Title are required.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FullTextSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FullTextSearchResultSet = function(resultStream) {
    FullTextSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CapitolWords.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FullTextSearch, choreography.Choreography);
util.inherits(FullTextSearchInputSet, choreography.InputSet);
util.inherits(FullTextSearchResultSet, choreography.ResultSet);
exports.FullTextSearch = FullTextSearch;


/*
    Phrases
    Returns a list of the top phrases in the Congressional Record, which are searchable by day, month, state, or legislator.
*/


var Phrases = function(session) {
    /*
        Create a new instance of the Phrases Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/CapitolWords/Phrases"
    Phrases.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PhrasesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PhrasesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Phrases
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PhrasesInputSet = function() {
    PhrasesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Chamber input for this Choreo. ((optional, string) Limit results to a particular chamber. Valid values: house, senate, extensions.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Show results for only the given date. Format: YYYY-MM-DD)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Limit results to those on or before the given date. Format: YYYY-MM-DD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the EntityType input for this Choreo. ((required, string) The entity type to get top phrases for. Acceptable values: date, month, state, legislator.)
        */
        this.set_EntityType = function(value) {
            this.setInput("EntityType", value);
        }

        /*
        Set the value of the EntityValue input for this Choreo. ((required, string) The value of the entity to get top phrases for. Acceptable formats as follows for each EntityType: (date) 2011-11-09, (month) 201111, (state) NY. For the legislator EntityType, enter Bioguide ID here.)
        */
        this.set_EntityValue = function(value) {
            this.setInput("EntityValue", value);
        }

        /*
        Set the value of the Length input for this Choreo. ((optional, integer) The length of the phrase, in words, to search for (up to 5).)
        */
        this.set_Length = function(value) {
            this.setInput("Length", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to show. 100 results are shown at a time. To see more results use the page parameter.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Limit results to members of congress from a given party. Valid values: R, D, I.)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Output formats inlcude json and xml. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The metric and direction to sort by. Acceptable values: tfidf asc (default), tfidf desc, count asc, count desc.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Limit results to those on or after the given date. Format: YYYY-MM-DD)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Limit results to members from a particular state. Format: 2-letter state abbreviation (e.g. MD, RI, NY))
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Phrases Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PhrasesResultSet = function(resultStream) {
    PhrasesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CapitolWords.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Phrases, choreography.Choreography);
util.inherits(PhrasesInputSet, choreography.InputSet);
util.inherits(PhrasesResultSet, choreography.ResultSet);
exports.Phrases = Phrases;


/*
    TopPhraseSources
    Returns the top sources of a given phrase, which can be sorted either by legislator, state, party, bioguide ID, volume, or chambers.
*/


var TopPhraseSources = function(session) {
    /*
        Create a new instance of the TopPhraseSources Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/CapitolWords/TopPhraseSources"
    TopPhraseSources.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopPhraseSourcesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopPhraseSourcesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopPhraseSources
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopPhraseSourcesInputSet = function() {
    TopPhraseSourcesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Chamber input for this Choreo. ((optional, string) Limit results to a particular chamber. Valid values: house, senate, extensions.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Show results for only the given date. Format: YYYY-MM-DD)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Limit results to those on or before the given date. Format: YYYY-MM-DD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Entity input for this Choreo. ((required, string) The type of entity for which to return top results. Acceptable inputs: legislator, state, party, bioguide_id, volume, chamber. So 'legislator' returns the top legislators who say the given phrase.)
        */
        this.set_Entity = function(value) {
            this.setInput("Entity", value);
        }

        /*
        Set the value of the MinCount input for this Choreo. ((optional, integer) Only returns results where mentions are at or above the supplied threshold.)
        */
        this.set_MinCount = function(value) {
            this.setInput("MinCount", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to return.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Limit results to members of congress from a given party. Valid values: R, D, I.)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Phrase input for this Choreo. ((required, string) The phrase to search for.)
        */
        this.set_Phrase = function(value) {
            this.setInput("Phrase", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Output formats inlcude json and xml. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The metric on which to sort top results. Acceptable inputs: tfidf or count. Defaults to tfidf.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Limit results to those on or after the given date. Format: YYYY-MM-DD)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Limit results to members from a particular state. Format: 2-letter state abbreviation (e.g. MD, RI, NY))
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopPhraseSources Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopPhraseSourcesResultSet = function(resultStream) {
    TopPhraseSourcesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CapitolWords.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopPhraseSources, choreography.Choreography);
util.inherits(TopPhraseSourcesInputSet, choreography.InputSet);
util.inherits(TopPhraseSourcesResultSet, choreography.ResultSet);
exports.TopPhraseSources = TopPhraseSources;

