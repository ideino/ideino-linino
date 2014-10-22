
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetAudio
    Retrieves the audio pronunciation of a given word.
*/


var GetAudio = function(session) {
    /*
        Create a new instance of the GetAudio Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetAudio"
    GetAudio.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAudioResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAudioInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAudio
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAudioInputSet = function() {
    GetAudioInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAudio Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAudioResultSet = function(resultStream) {
    GetAudioResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAudio, choreography.Choreography);
util.inherits(GetAudioInputSet, choreography.InputSet);
util.inherits(GetAudioResultSet, choreography.ResultSet);
exports.GetAudio = GetAudio;


/*
    GetDefinitions
    Retrieves the definition of a given word.
*/


var GetDefinitions = function(session) {
    /*
        Create a new instance of the GetDefinitions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetDefinitions"
    GetDefinitions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDefinitionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDefinitionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDefinitions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDefinitionsInputSet = function() {
    GetDefinitionsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the Dictionaries input for this Choreo. ((optional, string) Source dictionary to return definitions from. Defaults to all, which returns definitions from all sources. See docs fro full list of acceptable values.)
        */
        this.set_Dictionaries = function(value) {
            this.setInput("Dictionaries", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the PartOfSpeech input for this Choreo. ((optional, string) Returns only definitions for particular parts of speech when this input is specified. Acceptable values include: adjective, noun, etc. See docs for full list.)
        */
        this.set_PartOfSpeech = function(value) {
            this.setInput("PartOfSpeech", value);
        }

        /*
        Set the value of the RelatedWords input for this Choreo. ((optional, string) Returns related words with definitions when true. Defaults to false.)
        */
        this.set_RelatedWords = function(value) {
            this.setInput("RelatedWords", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDefinitions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDefinitionsResultSet = function(resultStream) {
    GetDefinitionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDefinitions, choreography.Choreography);
util.inherits(GetDefinitionsInputSet, choreography.InputSet);
util.inherits(GetDefinitionsResultSet, choreography.ResultSet);
exports.GetDefinitions = GetDefinitions;


/*
    GetEtymology
    Retrieves the etymology of a given word.
*/


var GetEtymology = function(session) {
    /*
        Create a new instance of the GetEtymology Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetEtymology"
    GetEtymology.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEtymologyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEtymologyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEtymology
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEtymologyInputSet = function() {
    GetEtymologyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEtymology Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEtymologyResultSet = function(resultStream) {
    GetEtymologyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEtymology, choreography.Choreography);
util.inherits(GetEtymologyInputSet, choreography.InputSet);
util.inherits(GetEtymologyResultSet, choreography.ResultSet);
exports.GetEtymology = GetEtymology;


/*
    GetExamples
    Retrieves the examples of a given word.
*/


var GetExamples = function(session) {
    /*
        Create a new instance of the GetExamples Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetExamples"
    GetExamples.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetExamplesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetExamplesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetExamples
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetExamplesInputSet = function() {
    GetExamplesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the Duplicates input for this Choreo. ((optional, string) Shows duplicate examples from different sources when set to true. Defaults to false.)
        */
        this.set_Duplicates = function(value) {
            this.setInput("Duplicates", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Results to skip. Defaults to 0.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetExamples Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetExamplesResultSet = function(resultStream) {
    GetExamplesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetExamples, choreography.Choreography);
util.inherits(GetExamplesInputSet, choreography.InputSet);
util.inherits(GetExamplesResultSet, choreography.ResultSet);
exports.GetExamples = GetExamples;


/*
    GetFrequency
    Retrieves the word frequency of a given word.
*/


var GetFrequency = function(session) {
    /*
        Create a new instance of the GetFrequency Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetFrequency"
    GetFrequency.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFrequencyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFrequencyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFrequency
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFrequencyInputSet = function() {
    GetFrequencyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the EndYear input for this Choreo. ((optional, integer) End year for which to return word use frequencies. Defaults to 2012.)
        */
        this.set_EndYear = function(value) {
            this.setInput("EndYear", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the StartYear input for this Choreo. ((optional, integer) Start year for which to return word use frequencies. Defaults to 1800.)
        */
        this.set_StartYear = function(value) {
            this.setInput("StartYear", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFrequency Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFrequencyResultSet = function(resultStream) {
    GetFrequencyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFrequency, choreography.Choreography);
util.inherits(GetFrequencyInputSet, choreography.InputSet);
util.inherits(GetFrequencyResultSet, choreography.ResultSet);
exports.GetFrequency = GetFrequency;


/*
    GetHyphenation
    Retrieves the hyphenation of a given word.
*/


var GetHyphenation = function(session) {
    /*
        Create a new instance of the GetHyphenation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetHyphenation"
    GetHyphenation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetHyphenationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetHyphenationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetHyphenation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetHyphenationInputSet = function() {
    GetHyphenationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the Dictionary input for this Choreo. ((optional, string) Source dictionary to return pronunciation from. Acceptable values: ahd, century, cmu, macmillan, wiktionary,webster, wordnet.)
        */
        this.set_Dictionary = function(value) {
            this.setInput("Dictionary", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetHyphenation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetHyphenationResultSet = function(resultStream) {
    GetHyphenationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetHyphenation, choreography.Choreography);
util.inherits(GetHyphenationInputSet, choreography.InputSet);
util.inherits(GetHyphenationResultSet, choreography.ResultSet);
exports.GetHyphenation = GetHyphenation;


/*
    GetPronunciations
    Retrieves the pronuciation of a given word.
*/


var GetPronunciations = function(session) {
    /*
        Create a new instance of the GetPronunciations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetPronunciations"
    GetPronunciations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPronunciationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPronunciationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPronunciations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPronunciationsInputSet = function() {
    GetPronunciationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the Dictionary input for this Choreo. ((optional, string) Source dictionary to return pronunciation from. Acceptable values: ahd, century, cmu, macmillan, wiktionary,webster, wordnet.)
        */
        this.set_Dictionary = function(value) {
            this.setInput("Dictionary", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the TypeFormat input for this Choreo. ((optional, string) Text pronunciation type. Acceptable values: ahd, arpabet, gcide-diacritical, IPA.)
        */
        this.set_TypeFormat = function(value) {
            this.setInput("TypeFormat", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPronunciations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPronunciationsResultSet = function(resultStream) {
    GetPronunciationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPronunciations, choreography.Choreography);
util.inherits(GetPronunciationsInputSet, choreography.InputSet);
util.inherits(GetPronunciationsResultSet, choreography.ResultSet);
exports.GetPronunciations = GetPronunciations;


/*
    GetRelatedWords
    Retrieves the related words of a given word.
*/


var GetRelatedWords = function(session) {
    /*
        Create a new instance of the GetRelatedWords Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetRelatedWords"
    GetRelatedWords.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRelatedWordsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRelatedWordsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRelatedWords
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRelatedWordsInputSet = function() {
    GetRelatedWordsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the LimitPerType input for this Choreo. ((optional, integer) Limits the amount of results returned for each relationship type included in the output. Defaults to 10.)
        */
        this.set_LimitPerType = function(value) {
            this.setInput("LimitPerType", value);
        }

        /*
        Set the value of the RelationshipType input for this Choreo. ((optional, string) Limits the total results per type of relationship. Acceptable values inlcude adjective, noun, etc. See docs for complete list.)
        */
        this.set_RelationshipType = function(value) {
            this.setInput("RelationshipType", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRelatedWords Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRelatedWordsResultSet = function(resultStream) {
    GetRelatedWordsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRelatedWords, choreography.Choreography);
util.inherits(GetRelatedWordsInputSet, choreography.InputSet);
util.inherits(GetRelatedWordsResultSet, choreography.ResultSet);
exports.GetRelatedWords = GetRelatedWords;


/*
    GetTopExample
    Retrieves the top example of a given word.
*/


var GetTopExample = function(session) {
    /*
        Create a new instance of the GetTopExample Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Word/GetTopExample"
    GetTopExample.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopExampleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopExampleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopExample
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopExampleInputSet = function() {
    GetTopExampleInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cannonical input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_Cannonical = function(value) {
            this.setInput("Cannonical", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the UseCanonical input for this Choreo. ((optional, boolean) If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested. Defaults to false.)
        */
        this.set_UseCanonical = function(value) {
            this.setInput("UseCanonical", value);
        }

        /*
        Set the value of the Word input for this Choreo. ((required, string) The word you want to look up on Wordnik.)
        */
        this.set_Word = function(value) {
            this.setInput("Word", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopExample Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopExampleResultSet = function(resultStream) {
    GetTopExampleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopExample, choreography.Choreography);
util.inherits(GetTopExampleInputSet, choreography.InputSet);
util.inherits(GetTopExampleResultSet, choreography.ResultSet);
exports.GetTopExample = GetTopExample;

