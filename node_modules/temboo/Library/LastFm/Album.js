
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddTags
    Tags an album using a list of user supplied tags. 
*/


var AddTags = function(session) {
    /*
        Create a new instance of the AddTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/AddTags"
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
        Set the value of the Album input for this Choreo. ((string) The album name.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the Tags input for this Choreo. ((string) A comma delimited list of user supplied tags to apply to this album. Accepts a maximum of 10 tags.)
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
    GetBuyLinks
    Retrieves a list of Buy Links for a particular Album.
*/


var GetBuyLinks = function(session) {
    /*
        Create a new instance of the GetBuyLinks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/GetBuyLinks"
    GetBuyLinks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBuyLinksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBuyLinksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBuyLinks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBuyLinksInputSet = function() {
    GetBuyLinksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Album input for this Choreo. ((conditional, string) The album name. Required unless providing MbID.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the Country input for this Choreo. ((optional, string) A country name, as defined by the ISO 3166-1 country names standard.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the album. Required unless providing the Album and Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBuyLinks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBuyLinksResultSet = function(resultStream) {
    GetBuyLinksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBuyLinks, choreography.Choreography);
util.inherits(GetBuyLinksInputSet, choreography.InputSet);
util.inherits(GetBuyLinksResultSet, choreography.ResultSet);
exports.GetBuyLinks = GetBuyLinks;


/*
    GetInfo
    Retrieves the metadata for an album on Last.fm using the album and artist name or a musicbrainz id.
*/


var GetInfo = function(session) {
    /*
        Create a new instance of the GetInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/GetInfo"
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
        Set the value of the Album input for this Choreo. ((conditional, string) The album name. Required unless providing MbID.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the album. Required unless providing the Album and Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) The username for the context of the request. If supplied, the user's playcount for this album is included in the response.)
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
    GetShouts
    Retrieves a list of shouts for a specified album.
*/


var GetShouts = function(session) {
    /*
        Create a new instance of the GetShouts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/GetShouts"
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
        Set the value of the Album input for this Choreo. ((conditional, string) The album title. Required unless providing MbID.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the album. Required unless providing the Album and Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to first page.)
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
    GetTags
    Retrieves the tags applied by an individual user to an album on Last.fm.
*/


var GetTags = function(session) {
    /*
        Create a new instance of the GetTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/GetTags"
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
        Set the value of the Album input for this Choreo. ((conditional, string) The album name. Required unless providing MbID.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the album. Required unless providing the Album and Artist.)
        */
        this.set_MbID = function(value) {
            this.setInput("MbID", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The last.fm username to lookup.)
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
    GetTopTags
    Retrieves a list of the top tags for an album on Last.fm, ordered by popularity. 
*/


var GetTopTags = function(session) {
    /*
        Create a new instance of the GetTopTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/GetTopTags"
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
        Set the value of the Album input for this Choreo. ((conditional, string) The album name. Required unless providing MbID.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the MbID input for this Choreo. ((conditional, string) The musicbrainz id for the album. Required unless providing the Album and Artist.)
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
    RemoveTag
    Removes a user's tag from a specified album.
*/


var RemoveTag = function(session) {
    /*
        Create a new instance of the RemoveTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/RemoveTag"
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
        Set the value of the Album input for this Choreo. ((string) The album name.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
        Set the value of the Tag input for this Choreo. ((string) A single user tag to remove from this album.)
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
    Searches for an album by name. Returns album matches sorted by relevance.
*/


var Search = function(session) {
    /*
        Create a new instance of the Search Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/Search"
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
        Set the value of the Album input for this Choreo. ((string) The album name.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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
    Allows you to share an album with one or more Last.fm users or other friends.
*/


var Share = function(session) {
    /*
        Create a new instance of the Share Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Album/Share"
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
        Set the value of the Album input for this Choreo. ((string) The album name.)
        */
        this.set_Album = function(value) {
            this.setInput("Album", value);
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

