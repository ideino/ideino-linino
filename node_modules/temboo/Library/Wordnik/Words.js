
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetWordOfTheDay
    Retrieves the word of the day for specified dates.
*/


var GetWordOfTheDay = function(session) {
    /*
        Create a new instance of the GetWordOfTheDay Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Words/GetWordOfTheDay"
    GetWordOfTheDay.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWordOfTheDayResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWordOfTheDayInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWordOfTheDay
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWordOfTheDayInputSet = function() {
    GetWordOfTheDayInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, string) The date of the Word of the Day to retrieve, in yyyy-MM-dd format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWordOfTheDay Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWordOfTheDayResultSet = function(resultStream) {
    GetWordOfTheDayResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWordOfTheDay, choreography.Choreography);
util.inherits(GetWordOfTheDayInputSet, choreography.InputSet);
util.inherits(GetWordOfTheDayResultSet, choreography.ResultSet);
exports.GetWordOfTheDay = GetWordOfTheDay;


/*
    RandomWord
    Retrieves a random word.
*/


var RandomWord = function(session) {
    /*
        Create a new instance of the RandomWord Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Words/RandomWord"
    RandomWord.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RandomWordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RandomWordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RandomWord
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RandomWordInputSet = function() {
    RandomWordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ExcludePartOfSpeech input for this Choreo. ((optional, string) Excludes the specified comma-delimited parts of speech from the results returned. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_ExcludePartOfSpeech = function(value) {
            this.setInput("ExcludePartOfSpeech", value);
        }

        /*
        Set the value of the HasDefinition input for this Choreo. ((optional, string) Only returns words that have dictionary definitions when true. Otherwise false. Defaults to true.)
        */
        this.set_HasDefinition = function(value) {
            this.setInput("HasDefinition", value);
        }

        /*
        Set the value of the IncludePartOfSpeech input for this Choreo. ((optional, string) Only includes the specified comma-delimited parts of speech. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_IncludePartOfSpeech = function(value) {
            this.setInput("IncludePartOfSpeech", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count below the given number.)
        */
        this.set_MaxCorpus = function(value) {
            this.setInput("MaxCorpus", value);
        }

        /*
        Set the value of the MaxDictionaries input for this Choreo. ((optional, integer) Maximum number of dictionaries in which the words appear.)
        */
        this.set_MaxDictionaries = function(value) {
            this.setInput("MaxDictionaries", value);
        }

        /*
        Set the value of the MaxLength input for this Choreo. ((optional, integer) Maximum word length.)
        */
        this.set_MaxLength = function(value) {
            this.setInput("MaxLength", value);
        }

        /*
        Set the value of the MinCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count above the given number.)
        */
        this.set_MinCorpus = function(value) {
            this.setInput("MinCorpus", value);
        }

        /*
        Set the value of the MinDictionaries input for this Choreo. ((optional, integer) Minimum number of dictionaries in which the words appear.)
        */
        this.set_MinDictionaries = function(value) {
            this.setInput("MinDictionaries", value);
        }

        /*
        Set the value of the MinLength input for this Choreo. ((optional, integer) ‪Minimum word length.)
        */
        this.set_MinLength = function(value) {
            this.setInput("MinLength", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RandomWord Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RandomWordResultSet = function(resultStream) {
    RandomWordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RandomWord, choreography.Choreography);
util.inherits(RandomWordInputSet, choreography.InputSet);
util.inherits(RandomWordResultSet, choreography.ResultSet);
exports.RandomWord = RandomWord;


/*
    RandomWords
    Retrieves a list of random words.
*/


var RandomWords = function(session) {
    /*
        Create a new instance of the RandomWords Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Words/RandomWords"
    RandomWords.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RandomWordsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RandomWordsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RandomWords
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RandomWordsInputSet = function() {
    RandomWordsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ExcludePartOfSpeech input for this Choreo. ((optional, string) Excludes the specified comma-delimited parts of speech from the results returned. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_ExcludePartOfSpeech = function(value) {
            this.setInput("ExcludePartOfSpeech", value);
        }

        /*
        Set the value of the HasDefinition input for this Choreo. ((optional, string) Only returns words that have dictionary definitions when true. Otherwise false. Defaults to true.)
        */
        this.set_HasDefinition = function(value) {
            this.setInput("HasDefinition", value);
        }

        /*
        Set the value of the IncludePartOfSpeech input for this Choreo. ((optional, string) Only includes the specified comma-delimited parts of speech. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_IncludePartOfSpeech = function(value) {
            this.setInput("IncludePartOfSpeech", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count below the given number.)
        */
        this.set_MaxCorpus = function(value) {
            this.setInput("MaxCorpus", value);
        }

        /*
        Set the value of the MaxDictionaries input for this Choreo. ((optional, integer) Maximum number of dictionaries in which the words appear.)
        */
        this.set_MaxDictionaries = function(value) {
            this.setInput("MaxDictionaries", value);
        }

        /*
        Set the value of the MaxLength input for this Choreo. ((optional, integer) Maximum word length.)
        */
        this.set_MaxLength = function(value) {
            this.setInput("MaxLength", value);
        }

        /*
        Set the value of the MinCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count above the given number.)
        */
        this.set_MinCorpus = function(value) {
            this.setInput("MinCorpus", value);
        }

        /*
        Set the value of the MinDictionaries input for this Choreo. ((optional, integer) Minimum number of dictionaries in which the words appear.)
        */
        this.set_MinDictionaries = function(value) {
            this.setInput("MinDictionaries", value);
        }

        /*
        Set the value of the MinLength input for this Choreo. ((optional, integer) ‪Minimum word length.)
        */
        this.set_MinLength = function(value) {
            this.setInput("MinLength", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Results can be sorted by: alpha, count, or length.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Indicate the order to sort, either asc (ascending) or desc (descending).)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RandomWords Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RandomWordsResultSet = function(resultStream) {
    RandomWordsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RandomWords, choreography.Choreography);
util.inherits(RandomWordsInputSet, choreography.InputSet);
util.inherits(RandomWordsResultSet, choreography.ResultSet);
exports.RandomWords = RandomWords;


/*
    ReverseDictionary
    Retrieves a reverse dictionary search for a given word.
*/


var ReverseDictionary = function(session) {
    /*
        Create a new instance of the ReverseDictionary Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Words/ReverseDictionary"
    ReverseDictionary.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReverseDictionaryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReverseDictionaryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReverseDictionary
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReverseDictionaryInputSet = function() {
    ReverseDictionaryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ExcludePartOfSpeech input for this Choreo. ((optional, string) Excludes the specified comma-delimited parts of speech from the results returned. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_ExcludePartOfSpeech = function(value) {
            this.setInput("ExcludePartOfSpeech", value);
        }

        /*
        Set the value of the ExcludeSource input for this Choreo. ((optional, string) Exclude these comma-delimited source dictionaries: ahd, century, wiktionary,webster, wordnet.)
        */
        this.set_ExcludeSource = function(value) {
            this.setInput("ExcludeSource", value);
        }

        /*
        Set the value of the ExpandTerms input for this Choreo. ((optional, any) Expand terms by either: synonym or hypernym.)
        */
        this.set_ExpandTerms = function(value) {
            this.setInput("ExpandTerms", value);
        }

        /*
        Set the value of the IncludePartOfSpeech input for this Choreo. ((optional, string) Only includes the specified comma-delimited parts of speech. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_IncludePartOfSpeech = function(value) {
            this.setInput("IncludePartOfSpeech", value);
        }

        /*
        Set the value of the IncludeSource input for this Choreo. ((optional, string) Only include these comma-delimited source dictionaries: ahd, century, wiktionary,webster, wordnet.)
        */
        this.set_IncludeSource = function(value) {
            this.setInput("IncludeSource", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count below the given number.)
        */
        this.set_MaxCorpus = function(value) {
            this.setInput("MaxCorpus", value);
        }

        /*
        Set the value of the MaxLength input for this Choreo. ((optional, integer) Maximum word length.)
        */
        this.set_MaxLength = function(value) {
            this.setInput("MaxLength", value);
        }

        /*
        Set the value of the MinCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count above the given number.)
        */
        this.set_MinCorpus = function(value) {
            this.setInput("MinCorpus", value);
        }

        /*
        Set the value of the MinLength input for this Choreo. ((optional, integer) ‪Minimum word length.)
        */
        this.set_MinLength = function(value) {
            this.setInput("MinLength", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Word or fragment to query for in Wordnik.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Number of results to skip.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Results can be sorted by: alpha, count, or length.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Indicate the order to sort, either asc (ascending) or desc (descending).)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the WordSense input for this Choreo. ((optional, string) Restricts words and finds the closest sense to the one indicated.)
        */
        this.set_WordSense = function(value) {
            this.setInput("WordSense", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReverseDictionary Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReverseDictionaryResultSet = function(resultStream) {
    ReverseDictionaryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReverseDictionary, choreography.Choreography);
util.inherits(ReverseDictionaryInputSet, choreography.InputSet);
util.inherits(ReverseDictionaryResultSet, choreography.ResultSet);
exports.ReverseDictionary = ReverseDictionary;


/*
    SearchWords
    Searches words.
*/


var SearchWords = function(session) {
    /*
        Create a new instance of the SearchWords Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Words/SearchWords"
    SearchWords.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchWordsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchWordsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchWords
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchWordsInputSet = function() {
    SearchWordsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CaseSensitive input for this Choreo. ((optional, string) Makes the query case-insensitive when false. Defaults to true, so queries are case-sensitive.)
        */
        this.set_CaseSensitive = function(value) {
            this.setInput("CaseSensitive", value);
        }

        /*
        Set the value of the ExcludePartOfSpeech input for this Choreo. ((optional, string) Excludes the specified comma-delimited parts of speech from the results returned. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_ExcludePartOfSpeech = function(value) {
            this.setInput("ExcludePartOfSpeech", value);
        }

        /*
        Set the value of the IncludePartOfSpeech input for this Choreo. ((optional, string) Only includes the specified comma-delimited parts of speech. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_IncludePartOfSpeech = function(value) {
            this.setInput("IncludePartOfSpeech", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MaxCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count below the given number.)
        */
        this.set_MaxCorpus = function(value) {
            this.setInput("MaxCorpus", value);
        }

        /*
        Set the value of the MaxEntries input for this Choreo. ((optional, integer) Limits the results to words that have fewer than the given numner of dictionary entries.)
        */
        this.set_MaxEntries = function(value) {
            this.setInput("MaxEntries", value);
        }

        /*
        Set the value of the MaxLength input for this Choreo. ((optional, integer) Maximum word length.)
        */
        this.set_MaxLength = function(value) {
            this.setInput("MaxLength", value);
        }

        /*
        Set the value of the MinCorpus input for this Choreo. ((optional, integer) Results include a corpus frequency count for each word returned. When this input is specified, results are limited to words with a corpus frequency count above the given number.)
        */
        this.set_MinCorpus = function(value) {
            this.setInput("MinCorpus", value);
        }

        /*
        Set the value of the MinEntries input for this Choreo. ((optional, integer) Limits the results to words that have more than the given numner of dictionary entries.)
        */
        this.set_MinEntries = function(value) {
            this.setInput("MinEntries", value);
        }

        /*
        Set the value of the MinLength input for this Choreo. ((optional, integer) ‪Minimum word length.)
        */
        this.set_MinLength = function(value) {
            this.setInput("MinLength", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Word or fragment to query for in Wordnik.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Number of results to skip.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchWords Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchWordsResultSet = function(resultStream) {
    SearchWordsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchWords, choreography.Choreography);
util.inherits(SearchWordsInputSet, choreography.InputSet);
util.inherits(SearchWordsResultSet, choreography.ResultSet);
exports.SearchWords = SearchWords;

