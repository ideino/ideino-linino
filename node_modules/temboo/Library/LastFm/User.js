
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetArtistTracks
    Retrieves a list of tracks by a given artist scrobbled by this user, including scrobble time.
*/


var GetArtistTracks = function(session) {
    /*
        Create a new instance of the GetArtistTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetArtistTracks"
    GetArtistTracks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetArtistTracksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetArtistTracksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetArtistTracks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetArtistTracksInputSet = function() {
    GetArtistTracksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist input for this Choreo. ((required, string) The artist name you are interested in.)
        */
        this.set_Artist = function(value) {
            this.setInput("Artist", value);
        }

        /*
        Set the value of the EndTimestamp input for this Choreo. ((optional, date) A unix timestamp to end at.)
        */
        this.set_EndTimestamp = function(value) {
            this.setInput("EndTimestamp", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the StartTimestamp input for this Choreo. ((optional, date) A unix timestamp to start at.)
        */
        this.set_StartTimestamp = function(value) {
            this.setInput("StartTimestamp", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The last.fm username to fetch the recent tracks of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetArtistTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetArtistTracksResultSet = function(resultStream) {
    GetArtistTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetArtistTracks, choreography.Choreography);
util.inherits(GetArtistTracksInputSet, choreography.InputSet);
util.inherits(GetArtistTracksResultSet, choreography.ResultSet);
exports.GetArtistTracks = GetArtistTracks;


/*
    GetBannedTracks
    Retrieves a list of the tracks banned by a particular user.
*/


var GetBannedTracks = function(session) {
    /*
        Create a new instance of the GetBannedTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetBannedTracks"
    GetBannedTracks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBannedTracksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBannedTracksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBannedTracks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBannedTracksInputSet = function() {
    GetBannedTracksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the User input for this Choreo. ((string) The user name associated with the banned tracks you want to retrieve.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBannedTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBannedTracksResultSet = function(resultStream) {
    GetBannedTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBannedTracks, choreography.Choreography);
util.inherits(GetBannedTracksInputSet, choreography.InputSet);
util.inherits(GetBannedTracksResultSet, choreography.ResultSet);
exports.GetBannedTracks = GetBannedTracks;


/*
    GetEvents
    Retrieves a list of upcoming events that a user is attending.
*/


var GetEvents = function(session) {
    /*
        Create a new instance of the GetEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetEvents"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the FestivalsOnly input for this Choreo. ((optional, boolean) Whether only festivals should be returned, or all events. Defaults to 0 to return all events.)
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
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The user to fetch the events for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEventsResultSet = function(resultStream) {
    GetEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    GetFriends
    Retrieves a list of the user's friends on Last.fm.
*/


var GetFriends = function(session) {
    /*
        Create a new instance of the GetFriends Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetFriends"
    GetFriends.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFriendsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFriendsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFriends
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFriendsInputSet = function() {
    GetFriendsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the RecentTracks input for this Choreo. ((optional, boolean) Whether or not to include information about friends' recent listening in the response. Defaults to 0 for false.)
        */
        this.set_RecentTracks = function(value) {
            this.setInput("RecentTracks", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the friends of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFriends Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFriendsResultSet = function(resultStream) {
    GetFriendsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFriends, choreography.Choreography);
util.inherits(GetFriendsInputSet, choreography.InputSet);
util.inherits(GetFriendsResultSet, choreography.ResultSet);
exports.GetFriends = GetFriends;


/*
    GetInfo
    Get information about a user profile.
*/


var GetInfo = function(session) {
    /*
        Create a new instance of the GetInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetInfo"
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
        Set the value of the User input for this Choreo. ((required, string) The user to fetch info for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
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
    GetLovedTracks
    Retrieves a list of the last 50 tracks loved by a user.
*/


var GetLovedTracks = function(session) {
    /*
        Create a new instance of the GetLovedTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetLovedTracks"
    GetLovedTracks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLovedTracksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLovedTracksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLovedTracks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLovedTracksInputSet = function() {
    GetLovedTracksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the User input for this Choreo. ((string) The user name to fetch the loved tracks for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLovedTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLovedTracksResultSet = function(resultStream) {
    GetLovedTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLovedTracks, choreography.Choreography);
util.inherits(GetLovedTracksInputSet, choreography.InputSet);
util.inherits(GetLovedTracksResultSet, choreography.ResultSet);
exports.GetLovedTracks = GetLovedTracks;


/*
    GetNeighbours
    Retrieves a list of a user's neighbours on Last.fm. 
*/


var GetNeighbours = function(session) {
    /*
        Create a new instance of the GetNeighbours Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetNeighbours"
    GetNeighbours.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNeighboursResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNeighboursInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNeighbours
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNeighboursInputSet = function() {
    GetNeighboursInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the neighbours of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNeighbours Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNeighboursResultSet = function(resultStream) {
    GetNeighboursResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNeighbours, choreography.Choreography);
util.inherits(GetNeighboursInputSet, choreography.InputSet);
util.inherits(GetNeighboursResultSet, choreography.ResultSet);
exports.GetNeighbours = GetNeighbours;


/*
    GetNewReleases
    Retrieves a list of forthcoming releases based on a user's musical taste. 
*/


var GetNewReleases = function(session) {
    /*
        Create a new instance of the GetNewReleases Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetNewReleases"
    GetNewReleases.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewReleasesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewReleasesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewReleases
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewReleasesInputSet = function() {
    GetNewReleasesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the UserRecommendations input for this Choreo. ((optional, boolean) If 1, the feed contains new releases based on Last.fm's artist recommendations for this user. Otherwise, it is based on their library.)
        */
        this.set_UserRecommendations = function(value) {
            this.setInput("UserRecommendations", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The Last.fm username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNewReleases Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewReleasesResultSet = function(resultStream) {
    GetNewReleasesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewReleases, choreography.Choreography);
util.inherits(GetNewReleasesInputSet, choreography.InputSet);
util.inherits(GetNewReleasesResultSet, choreography.ResultSet);
exports.GetNewReleases = GetNewReleases;


/*
    GetPastEvents
    Retrieves a paginated list of all events a user has attended in the past. 
*/


var GetPastEvents = function(session) {
    /*
        Create a new instance of the GetPastEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetPastEvents"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the User input for this Choreo. ((string) The username to fetch the events for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPastEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPastEventsResultSet = function(resultStream) {
    GetPastEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    GetPersonalTags
    Retrieves a user's personal tags.
*/


var GetPersonalTags = function(session) {
    /*
        Create a new instance of the GetPersonalTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetPersonalTags"
    GetPersonalTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPersonalTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPersonalTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPersonalTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPersonalTagsInputSet = function() {
    GetPersonalTagsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the Tag input for this Choreo. ((string) The tag you're interested in.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the TaggingType input for this Choreo. ((string) The type of items which have been tagged. Valid values are: artist, album, track.)
        */
        this.set_TaggingType = function(value) {
            this.setInput("TaggingType", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The user who performed the taggings.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPersonalTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPersonalTagsResultSet = function(resultStream) {
    GetPersonalTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPersonalTags, choreography.Choreography);
util.inherits(GetPersonalTagsInputSet, choreography.InputSet);
util.inherits(GetPersonalTagsResultSet, choreography.ResultSet);
exports.GetPersonalTags = GetPersonalTags;


/*
    GetPlaylists
    Retrieves a list of a user's playlists on Last.fm. 
*/


var GetPlaylists = function(session) {
    /*
        Create a new instance of the GetPlaylists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetPlaylists"
    GetPlaylists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPlaylistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPlaylistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPlaylists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPlaylistsInputSet = function() {
    GetPlaylistsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The last.fm username to fetch the playlists of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPlaylists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPlaylistsResultSet = function(resultStream) {
    GetPlaylistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPlaylists, choreography.Choreography);
util.inherits(GetPlaylistsInputSet, choreography.InputSet);
util.inherits(GetPlaylistsResultSet, choreography.ResultSet);
exports.GetPlaylists = GetPlaylists;


/*
    GetRecentStations
    Retrieves a list of the recent Stations listened to by this user.
*/


var GetRecentStations = function(session) {
    /*
        Create a new instance of the GetRecentStations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetRecentStations"
    GetRecentStations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentStationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentStationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentStations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentStationsInputSet = function() {
    GetRecentStationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 10. Maximum is 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to first page.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((required, string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The last.fm username to fetch the recent Stations of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentStations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentStationsResultSet = function(resultStream) {
    GetRecentStationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentStations, choreography.Choreography);
util.inherits(GetRecentStationsInputSet, choreography.InputSet);
util.inherits(GetRecentStationsResultSet, choreography.ResultSet);
exports.GetRecentStations = GetRecentStations;


/*
    GetRecentTracks
    Get a list of the recent tracks listened to by this user.
*/


var GetRecentTracks = function(session) {
    /*
        Create a new instance of the GetRecentTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetRecentTracks"
    GetRecentTracks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentTracksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentTracksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentTracks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentTracksInputSet = function() {
    GetRecentTracksInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EndTimestamp input for this Choreo. ((optional, date) End timestamp of a range - only display scrobbles before this time, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_EndTimestamp = function(value) {
            this.setInput("EndTimestamp", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50. Maximum is 200.)
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

        /*
        Set the value of the StartTimestamp input for this Choreo. ((optional, date) Beginning timestamp of a range - only display scrobbles after this time, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_StartTimestamp = function(value) {
            this.setInput("StartTimestamp", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the recent tracks of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentTracksResultSet = function(resultStream) {
    GetRecentTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentTracks, choreography.Choreography);
util.inherits(GetRecentTracksInputSet, choreography.InputSet);
util.inherits(GetRecentTracksResultSet, choreography.ResultSet);
exports.GetRecentTracks = GetRecentTracks;


/*
    GetRecommendedArtists
    Retrieves Last.fm artist recommendations for a user.
*/


var GetRecommendedArtists = function(session) {
    /*
        Create a new instance of the GetRecommendedArtists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetRecommendedArtists"
    GetRecommendedArtists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecommendedArtistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecommendedArtistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecommendedArtists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecommendedArtistsInputSet = function() {
    GetRecommendedArtistsInputSet.super_.call(this);
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
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to first page.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecommendedArtists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecommendedArtistsResultSet = function(resultStream) {
    GetRecommendedArtistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecommendedArtists, choreography.Choreography);
util.inherits(GetRecommendedArtistsInputSet, choreography.InputSet);
util.inherits(GetRecommendedArtistsResultSet, choreography.ResultSet);
exports.GetRecommendedArtists = GetRecommendedArtists;


/*
    GetRecommendedEvents
    Retrieves a paginated list of all events recommended to a user by Last.fm, based on their listening profile. 
*/


var GetRecommendedEvents = function(session) {
    /*
        Create a new instance of the GetRecommendedEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetRecommendedEvents"
    GetRecommendedEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecommendedEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecommendedEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecommendedEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecommendedEventsInputSet = function() {
    GetRecommendedEventsInputSet.super_.call(this);
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
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number to fetch. Defaults to first page.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecommendedEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecommendedEventsResultSet = function(resultStream) {
    GetRecommendedEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecommendedEvents, choreography.Choreography);
util.inherits(GetRecommendedEventsInputSet, choreography.InputSet);
util.inherits(GetRecommendedEventsResultSet, choreography.ResultSet);
exports.GetRecommendedEvents = GetRecommendedEvents;


/*
    GetShouts
    Retrieves a list of shouts for a specified user.
*/


var GetShouts = function(session) {
    /*
        Create a new instance of the GetShouts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetShouts"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50. Maximum is 200.)
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

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch shouts for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShouts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShoutsResultSet = function(resultStream) {
    GetShoutsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    GetTopAlbums
    Retrieves the top albums listened to by a user.
*/


var GetTopAlbums = function(session) {
    /*
        Create a new instance of the GetTopAlbums Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetTopAlbums"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the Period input for this Choreo. ((optional, string) The time period over which to retrieve top albums for. Valid values are: overall, 7day, 3month, 6month, 12month. Defaults to 'overall'.)
        */
        this.set_Period = function(value) {
            this.setInput("Period", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The Last.fm username to fetch top albums for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopAlbums Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopAlbumsResultSet = function(resultStream) {
    GetTopAlbumsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    GetTopArtists
    Retrieves the top artists listened to by a user.
*/


var GetTopArtists = function(session) {
    /*
        Create a new instance of the GetTopArtists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetTopArtists"
    GetTopArtists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopArtistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopArtistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopArtists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopArtistsInputSet = function() {
    GetTopArtistsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the Period input for this Choreo. ((optional, string) The time period over which to retrieve top artists for. Valid values are: overall, 7day, 3month, 6month, 12month. Defaults to 'overall'.)
        */
        this.set_Period = function(value) {
            this.setInput("Period", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The Last.fm username to fetch top artists for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopArtists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopArtistsResultSet = function(resultStream) {
    GetTopArtistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopArtists, choreography.Choreography);
util.inherits(GetTopArtistsInputSet, choreography.InputSet);
util.inherits(GetTopArtistsResultSet, choreography.ResultSet);
exports.GetTopArtists = GetTopArtists;


/*
    GetTopTags
    Retrieves the top tags used by a user. 
*/


var GetTopTags = function(session) {
    /*
        Create a new instance of the GetTopTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetTopTags"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Limit the number of tags returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The Last.fm username to fetch top tags for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopTagsResultSet = function(resultStream) {
    GetTopTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    Retrieves the top tracks listened to by a user.
*/


var GetTopTracks = function(session) {
    /*
        Create a new instance of the GetTopTracks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetTopTracks"
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
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to fetch per page. Defaults to 50.)
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

        /*
        Set the value of the Period input for this Choreo. ((optional, string) The time period over which to retrieve top tracks for. Valid values are: overall, 7day, 3month, 6month, 12month. Defaults to 'overall'.)
        */
        this.set_Period = function(value) {
            this.setInput("Period", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The Last.fm username to fetch top tracks for.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopTracks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopTracksResultSet = function(resultStream) {
    GetTopTracksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
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
    GetWeeklyAlbumChart
    Retrieves an album chart for a user profile, for a given date range.
*/


var GetWeeklyAlbumChart = function(session) {
    /*
        Create a new instance of the GetWeeklyAlbumChart Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetWeeklyAlbumChart"
    GetWeeklyAlbumChart.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeeklyAlbumChartResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeeklyAlbumChartInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeeklyAlbumChart
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeeklyAlbumChartInputSet = function() {
    GetWeeklyAlbumChartInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EndTimestamp input for this Choreo. ((optional, date) End timestamp at which the chart should end on, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_EndTimestamp = function(value) {
            this.setInput("EndTimestamp", value);
        }

        /*
        Set the value of the StartTimestamp input for this Choreo. ((optional, date) Beginning timestamp at which the chart should start from, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_StartTimestamp = function(value) {
            this.setInput("StartTimestamp", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the charts of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeeklyAlbumChart Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeeklyAlbumChartResultSet = function(resultStream) {
    GetWeeklyAlbumChartResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeeklyAlbumChart, choreography.Choreography);
util.inherits(GetWeeklyAlbumChartInputSet, choreography.InputSet);
util.inherits(GetWeeklyAlbumChartResultSet, choreography.ResultSet);
exports.GetWeeklyAlbumChart = GetWeeklyAlbumChart;


/*
    GetWeeklyArtistChart
    Retrieves an artist chart for a user profile, for a given date range.
*/


var GetWeeklyArtistChart = function(session) {
    /*
        Create a new instance of the GetWeeklyArtistChart Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetWeeklyArtistChart"
    GetWeeklyArtistChart.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeeklyArtistChartResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeeklyArtistChartInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeeklyArtistChart
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeeklyArtistChartInputSet = function() {
    GetWeeklyArtistChartInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EndTimestamp input for this Choreo. ((optional, date) End timestamp at which the chart should end on, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_EndTimestamp = function(value) {
            this.setInput("EndTimestamp", value);
        }

        /*
        Set the value of the StartTimestamp input for this Choreo. ((optional, date) Beginning timestamp at which the chart should start from, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_StartTimestamp = function(value) {
            this.setInput("StartTimestamp", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the charts of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeeklyArtistChart Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeeklyArtistChartResultSet = function(resultStream) {
    GetWeeklyArtistChartResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeeklyArtistChart, choreography.Choreography);
util.inherits(GetWeeklyArtistChartInputSet, choreography.InputSet);
util.inherits(GetWeeklyArtistChartResultSet, choreography.ResultSet);
exports.GetWeeklyArtistChart = GetWeeklyArtistChart;


/*
    GetWeeklyChartList
    Retrieves a list of available charts for this user, expressed as date ranges which can be sent to the chart services.
*/


var GetWeeklyChartList = function(session) {
    /*
        Create a new instance of the GetWeeklyChartList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetWeeklyChartList"
    GetWeeklyChartList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeeklyChartListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeeklyChartListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeeklyChartList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeeklyChartListInputSet = function() {
    GetWeeklyChartListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the charts of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeeklyChartList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeeklyChartListResultSet = function(resultStream) {
    GetWeeklyChartListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeeklyChartList, choreography.Choreography);
util.inherits(GetWeeklyChartListInputSet, choreography.InputSet);
util.inherits(GetWeeklyChartListResultSet, choreography.ResultSet);
exports.GetWeeklyChartList = GetWeeklyChartList;


/*
    GetWeeklyTrackChart
    Retrieves a track chart for a user profile, for a given date range.
*/


var GetWeeklyTrackChart = function(session) {
    /*
        Create a new instance of the GetWeeklyTrackChart Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/GetWeeklyTrackChart"
    GetWeeklyTrackChart.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWeeklyTrackChartResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWeeklyTrackChartInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWeeklyTrackChart
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWeeklyTrackChartInputSet = function() {
    GetWeeklyTrackChartInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EndTimestamp input for this Choreo. ((optional, date) End timestamp at which the chart should end on, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_EndTimestamp = function(value) {
            this.setInput("EndTimestamp", value);
        }

        /*
        Set the value of the StartTimestamp input for this Choreo. ((optional, date) Beginning timestamp at which the chart should start from, in UNIX timestamp format. This must be in the UTC time zone.)
        */
        this.set_StartTimestamp = function(value) {
            this.setInput("StartTimestamp", value);
        }

        /*
        Set the value of the User input for this Choreo. ((string) The last.fm username to fetch the charts of.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWeeklyTrackChart Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWeeklyTrackChartResultSet = function(resultStream) {
    GetWeeklyTrackChartResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWeeklyTrackChart, choreography.Choreography);
util.inherits(GetWeeklyTrackChartInputSet, choreography.InputSet);
util.inherits(GetWeeklyTrackChartResultSet, choreography.ResultSet);
exports.GetWeeklyTrackChart = GetWeeklyTrackChart;


/*
    Shout
    Creates a message in a user's shoutbox 
*/


var Shout = function(session) {
    /*
        Create a new instance of the Shout Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/User/Shout"
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
        Set the value of the APIKey input for this Choreo. ((required, string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your Last.fm API Secret.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The message to post to the shoutbox.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the SessionKey input for this Choreo. ((required, string) The session key retrieved in the last step of the authorization process.)
        */
        this.set_SessionKey = function(value) {
            this.setInput("SessionKey", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The name of the user to shout on.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Shout Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShoutResultSet = function(resultStream) {
    ShoutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Shout, choreography.Choreography);
util.inherits(ShoutInputSet, choreography.InputSet);
util.inherits(ShoutResultSet, choreography.ResultSet);
exports.Shout = Shout;

