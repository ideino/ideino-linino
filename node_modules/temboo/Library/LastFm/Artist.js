
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddTags
    Tags an artist with one or more user supplied tags. 
*/


var AddTags = function(session) {
    /*
        Create a new instance of the AddTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/AddTags"
    AddTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddTagsInputSet = function() {
    AddTagsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((string) A comma delimited list of user supplied tags to apply to this artist. Accepts a maximum of 10 tags.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddTagsResultSet = function(resultStream) {
    AddTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddTags, choreography.Choreography);
util.inherits(AddTagsInputSet, choreography.InputSet);
util.inherits(AddTagsResultSet, choreography.ResultSet);
exports.AddTags = AddTags;


/*
    GetCorrection
    Allows you to check whether the supplied artist has a correction to a canonical artist.
*/


var GetCorrection = function(session) {
    /*
        Create a new instance of the GetCorrection Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetCorrection"
    GetCorrection.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCorrectionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCorrectionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCorrection
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCorrectionInputSet = function() {
    GetCorrectionInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name to correct.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCorrection Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCorrectionResultSet = function(resultStream) {
    GetCorrectionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCorrection, choreography.Choreography);
util.inherits(GetCorrectionInputSet, choreography.InputSet);
util.inherits(GetCorrectionResultSet, choreography.ResultSet);
exports.GetCorrection = GetCorrection;


/*
    GetEvents
    Retrieves a list of upcoming events for this artist.
*/


var GetEvents = function(session) {
    /*
        Create a new instance of the GetEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetEvents"
    GetEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEventsInputSet = function() {
    GetEventsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the FestivalsOnly input for this Choreo. ((optional, boolean) Whether only festivals should be returned, or all events. Defaults to 0 (false).)
        */
        this.set_FestivalsOnly = function(value) {
            this.setInput("FestivalsOnly", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEventsResultSet = function(resultStream) {
    GetEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEvents, choreography.Choreography);
util.inherits(GetEventsInputSet, choreography.InputSet);
util.inherits(GetEventsResultSet, choreography.ResultSet);
exports.GetEvents = GetEvents;


/*
    GetImages
    Retrieves a list of images for a specified artist in a variety of sizes. 
*/


var GetImages = function(session) {
    /*
        Create a new instance of the GetImages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetImages"
    GetImages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetImagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetImagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetImages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetImagesInputSet = function() {
    GetImagesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((optional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Sort ordering can be either 'popularity' (default) or 'dateadded'.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetImages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetImagesResultSet = function(resultStream) {
    GetImagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetImages, choreography.Choreography);
util.inherits(GetImagesInputSet, choreography.InputSet);
util.inherits(GetImagesResultSet, choreography.ResultSet);
exports.GetImages = GetImages;


/*
    GetInfo
    Retrieves the metadata for an artist including biographical data.
*/


var GetInfo = function(session) {
    /*
        Create a new instance of the GetInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetInfo"
    GetInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInfoInputSet = function() {
    GetInfoInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) The language to return the biography in, expressed as an ISO 639 alpha-2 code.)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) The username for the context of the request. If supplied, the user's playcount for this artist is included in the response.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetInfoResultSet = function(resultStream) {
    GetInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetInfo, choreography.Choreography);
util.inherits(GetInfoInputSet, choreography.InputSet);
util.inherits(GetInfoResultSet, choreography.ResultSet);
exports.GetInfo = GetInfo;


/*
    GetPastEvents
    Retrieves a paginated list of all the events this artist has played at in the past.
*/


var GetPastEvents = function(session) {
    /*
        Create a new instance of the GetPastEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetPastEvents"
    GetPastEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPastEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPastEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPastEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPastEventsInputSet = function() {
    GetPastEventsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((optional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPastEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPastEventsResultSet = function(resultStream) {
    GetPastEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPastEvents, choreography.Choreography);
util.inherits(GetPastEventsInputSet, choreography.InputSet);
util.inherits(GetPastEventsResultSet, choreography.ResultSet);
exports.GetPastEvents = GetPastEvents;


/*
    GetPodcast
    Retrieves a podcast of free mp3s based on a specified artist.
*/


var GetPodcast = function(session) {
    /*
        Create a new instance of the GetPodcast Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetPodcast"
    GetPodcast.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPodcastResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPodcastInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPodcast
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPodcastInputSet = function() {
    GetPodcastInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((optional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPodcast Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPodcastResultSet = function(resultStream) {
    GetPodcastResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPodcast, choreography.Choreography);
util.inherits(GetPodcastInputSet, choreography.InputSet);
util.inherits(GetPodcastResultSet, choreography.ResultSet);
exports.GetPodcast = GetPodcast;


/*
    GetShouts
    Retrieves a list of shouts for a specified artist.
*/


var GetShouts = function(session) {
    /*
        Create a new instance of the GetShouts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetShouts"
    GetShouts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetShoutsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetShoutsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetShouts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetShoutsInputSet = function() {
    GetShoutsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShouts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShoutsResultSet = function(resultStream) {
    GetShoutsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetShouts, choreography.Choreography);
util.inherits(GetShoutsInputSet, choreography.InputSet);
util.inherits(GetShoutsResultSet, choreography.ResultSet);
exports.GetShouts = GetShouts;


/*
    GetSimilar
    Retrieves a list of all the artists similar to the specified artist.
*/


var GetSimilar = function(session) {
    /*
        Create a new instance of the GetSimilar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetSimilar"
    GetSimilar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSimilarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSimilarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSimilar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSimilarInputSet = function() {
    GetSimilarInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSimilar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSimilarResultSet = function(resultStream) {
    GetSimilarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSimilar, choreography.Choreography);
util.inherits(GetSimilarInputSet, choreography.InputSet);
util.inherits(GetSimilarResultSet, choreography.ResultSet);
exports.GetSimilar = GetSimilar;


/*
    GetTags
    Retrieves the tags applied by an individual user to an artist on Last.fm.
*/


var GetTags = function(session) {
    /*
        Create a new instance of the GetTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetTags"
    GetTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTagsInputSet = function() {
    GetTagsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The last.fm username to use for the lookup.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTagsResultSet = function(resultStream) {
    GetTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTags, choreography.Choreography);
util.inherits(GetTagsInputSet, choreography.InputSet);
util.inherits(GetTagsResultSet, choreography.ResultSet);
exports.GetTags = GetTags;


/*
    GetTopAlbums
    Retrieves the top albums for an artist on Last.fm, ordered by popularity.
*/


var GetTopAlbums = function(session) {
    /*
        Create a new instance of the GetTopAlbums Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetTopAlbums"
    GetTopAlbums.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopAlbumsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopAlbumsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopAlbums
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopAlbumsInputSet = function() {
    GetTopAlbumsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopAlbums Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopAlbumsResultSet = function(resultStream) {
    GetTopAlbumsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopAlbums, choreography.Choreography);
util.inherits(GetTopAlbumsInputSet, choreography.InputSet);
util.inherits(GetTopAlbumsResultSet, choreography.ResultSet);
exports.GetTopAlbums = GetTopAlbums;


/*
    GetTopFans
    Retrieves the top fans for an artist on Last.fm, based on listening data.
*/


var GetTopFans = function(session) {
    /*
        Create a new instance of the GetTopFans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetTopFans"
    GetTopFans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopFansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopFansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopFans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopFansInputSet = function() {
    GetTopFansInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopFans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopFansResultSet = function(resultStream) {
    GetTopFansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopFans, choreography.Choreography);
util.inherits(GetTopFansInputSet, choreography.InputSet);
util.inherits(GetTopFansResultSet, choreography.ResultSet);
exports.GetTopFans = GetTopFans;


/*
    GetTopTags
    Retrieves the top tags for an artist on Last.fm, ordered by popularity.
*/


var GetTopTags = function(session) {
    /*
        Create a new instance of the GetTopTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetTopTags"
    GetTopTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopTagsInputSet = function() {
    GetTopTagsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopTagsResultSet = function(resultStream) {
    GetTopTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopTags, choreography.Choreography);
util.inherits(GetTopTagsInputSet, choreography.InputSet);
util.inherits(GetTopTagsResultSet, choreography.ResultSet);
exports.GetTopTags = GetTopTags;


/*
    GetTopTracks
    Retrieves the top tracks by an artist on Last.fm, ordered by popularity.
*/


var GetTopTracks = function(session) {
    /*
        Create a new instance of the GetTopTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/GetTopTracks"
    GetTopTracks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopTracksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopTracksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopTracks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopTracksInputSet = function() {
    GetTopTracksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((conditional, string) The artist name. Required unless providing MbID.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the AutoCorrect input for this Choreo. ((optional, boolean) Transform misspelled artist names into correct artist names. The corrected artist name will be returned in the response. Defaults to 0.)
        */
        this.set_AutoCorrect = function(value) {
            this.setInput("AutoCorrect", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the artist. Required unless providing Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopTracksResultSet = function(resultStream) {
    GetTopTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopTracks, choreography.Choreography);
util.inherits(GetTopTracksInputSet, choreography.InputSet);
util.inherits(GetTopTracksResultSet, choreography.ResultSet);
exports.GetTopTracks = GetTopTracks;


/*
    RemoveTag
    Removes a user's tag from an artist.
*/


var RemoveTag = function(session) {
    /*
        Create a new instance of the RemoveTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/RemoveTag"
    RemoveTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveTagInputSet = function() {
    RemoveTagInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((string) A single user tag to remove from this artist.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveTagResultSet = function(resultStream) {
    RemoveTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveTag, choreography.Choreography);
util.inherits(RemoveTagInputSet, choreography.InputSet);
util.inherits(RemoveTagResultSet, choreography.ResultSet);
exports.RemoveTag = RemoveTag;


/*
    Search
    Searches for an artist by name. Returns artist matches sorted by relevance.
*/


var Search = function(session) {
    /*
        Create a new instance of the Search Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/Search"
    Search.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Search
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchInputSet = function() {
    SearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 30.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Search Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchResultSet = function(resultStream) {
    SearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Search, choreography.Choreography);
util.inherits(SearchInputSet, choreography.InputSet);
util.inherits(SearchResultSet, choreography.ResultSet);
exports.Search = Search;


/*
    Share
    Allows you to share an artist with Last.fm users or other friends.
*/


var Share = function(session) {
    /*
        Create a new instance of the Share Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/Share"
    Share.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShareResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShareInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Share
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShareInputSet = function() {
    ShareInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) An optional message to send with the recommendation. If not supplied a default message will be used.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Public input for this Choreo. ((optional, boolean) Optionally show in the sharing users activity feed. Defaults to 0 (false).)
        */
        this.set_Public = function(value) {
            this.setInput("Public", value);
        }

        /*
        Set the value of the Recipient input for this Choreo. ((string) A comma delimited list of email addresses or Last.fm usernames. Maximum is 10.)
        */
        this.set_Recipient = function(value) {
            this.setInput("Recipient", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Share Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShareResultSet = function(resultStream) {
    ShareResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Share, choreography.Choreography);
util.inherits(ShareInputSet, choreography.InputSet);
util.inherits(ShareResultSet, choreography.ResultSet);
exports.Share = Share;


/*
    Shout
    Creates a message in an artist's shoutbox.
*/


var Shout = function(session) {
    /*
        Create a new instance of the Shout Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Artist/Shout"
    Shout.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShoutResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShoutInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Shout
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShoutInputSet = function() {
    ShoutInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((string) The artist name.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) An optional message to send with the recommendation. If not supplied a default message will be used.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Shout Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShoutResultSet = function(resultStream) {
    ShoutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Shout, choreography.Choreography);
util.inherits(ShoutInputSet, choreography.InputSet);
util.inherits(ShoutResultSet, choreography.ResultSet);
exports.Shout = Shout;

