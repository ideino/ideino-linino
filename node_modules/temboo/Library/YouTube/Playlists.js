
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeletePlaylist
    Deletes a YouTube playlist.
*/


var DeletePlaylist = function(session) {
    /*
        Create a new instance of the DeletePlaylist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/DeletePlaylist"
    DeletePlaylist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePlaylistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePlaylistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePlaylist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePlaylistInputSet = function() {
    DeletePlaylistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the PlaylistID input for this Choreo. ((required, string) The id of the playlist to delete.)
        */
        this.set_PlaylistID = function(value) {
            this.setInput("PlaylistID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePlaylist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePlaylistResultSet = function(resultStream) {
    DeletePlaylistResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePlaylist, choreography.Choreography);
util.inherits(DeletePlaylistInputSet, choreography.InputSet);
util.inherits(DeletePlaylistResultSet, choreography.ResultSet);
exports.DeletePlaylist = DeletePlaylist;


/*
    InsertPlaylist
    Creates a playlist.
*/


var InsertPlaylist = function(session) {
    /*
        Create a new instance of the InsertPlaylist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/InsertPlaylist"
    InsertPlaylist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertPlaylistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertPlaylistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertPlaylist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertPlaylistInputSet = function() {
    InsertPlaylistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The playlist's description.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of fields that are being set and that will be returned in the response (i.e. snippet,status).)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PrivacyStatus input for this Choreo. ((optional, string) The playlist's privacy status. Valid values are: private or public.)
        */
        this.set_PrivacyStatus = function(value) {
            this.setInput("PrivacyStatus", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the playlist.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InsertPlaylist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertPlaylistResultSet = function(resultStream) {
    InsertPlaylistResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(InsertPlaylist, choreography.Choreography);
util.inherits(InsertPlaylistInputSet, choreography.InputSet);
util.inherits(InsertPlaylistResultSet, choreography.ResultSet);
exports.InsertPlaylist = InsertPlaylist;


/*
    ListMyPlaylists
    Returns a collection of playlists owned by the authenticated user.
*/


var ListMyPlaylists = function(session) {
    /*
        Create a new instance of the ListMyPlaylists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/ListMyPlaylists"
    ListMyPlaylists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMyPlaylistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMyPlaylistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMyPlaylists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMyPlaylistsInputSet = function() {
    ListMyPlaylistsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of playlist resource properties that the API response will include. Part names that you can pass are: id, snippet, and status.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMyPlaylists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMyPlaylistsResultSet = function(resultStream) {
    ListMyPlaylistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMyPlaylists, choreography.Choreography);
util.inherits(ListMyPlaylistsInputSet, choreography.InputSet);
util.inherits(ListMyPlaylistsResultSet, choreography.ResultSet);
exports.ListMyPlaylists = ListMyPlaylists;


/*
    ListPlaylistsByChannel
    Returns a collection of playlists associated with a specified channel.
*/


var ListPlaylistsByChannel = function(session) {
    /*
        Create a new instance of the ListPlaylistsByChannel Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/ListPlaylistsByChannel"
    ListPlaylistsByChannel.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPlaylistsByChannelResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPlaylistsByChannelInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPlaylistsByChannel
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPlaylistsByChannelInputSet = function() {
    ListPlaylistsByChannelInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Google for simple API access when you do not need to access user data.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ChannelID input for this Choreo. ((required, string) Indicates that only the specified channel's playlists should be returned.)
        */
        this.set_ChannelID = function(value) {
            this.setInput("ChannelID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of playlist resource properties that the API response will include. Part names that you can pass are: id, snippet, and status.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPlaylistsByChannel Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPlaylistsByChannelResultSet = function(resultStream) {
    ListPlaylistsByChannelResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPlaylistsByChannel, choreography.Choreography);
util.inherits(ListPlaylistsByChannelInputSet, choreography.InputSet);
util.inherits(ListPlaylistsByChannelResultSet, choreography.ResultSet);
exports.ListPlaylistsByChannel = ListPlaylistsByChannel;


/*
    ListPlaylistsByID
    Returns a collection of playlists that match the provided IDs.
*/


var ListPlaylistsByID = function(session) {
    /*
        Create a new instance of the ListPlaylistsByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/ListPlaylistsByID"
    ListPlaylistsByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPlaylistsByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPlaylistsByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPlaylistsByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPlaylistsByIDInputSet = function() {
    ListPlaylistsByIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Google for simple API access when you do not need to access user data.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of playlist resource properties that the API response will include. Part names that you can pass are: id, snippet, and status.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PlaylistID input for this Choreo. ((required, string) A comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved.)
        */
        this.set_PlaylistID = function(value) {
            this.setInput("PlaylistID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPlaylistsByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPlaylistsByIDResultSet = function(resultStream) {
    ListPlaylistsByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPlaylistsByID, choreography.Choreography);
util.inherits(ListPlaylistsByIDInputSet, choreography.InputSet);
util.inherits(ListPlaylistsByIDResultSet, choreography.ResultSet);
exports.ListPlaylistsByID = ListPlaylistsByID;


/*
    UpdatePlaylist
    Updates a playlist.
*/


var UpdatePlaylist = function(session) {
    /*
        Create a new instance of the UpdatePlaylist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Playlists/UpdatePlaylist"
    UpdatePlaylist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdatePlaylistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdatePlaylistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdatePlaylist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdatePlaylistInputSet = function() {
    UpdatePlaylistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The playlist's description.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of fields that are being set and that will be returned in the response (i.e. snippet,status).)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PlaylistID input for this Choreo. ((required, string) The id of the playlist to update.)
        */
        this.set_PlaylistID = function(value) {
            this.setInput("PlaylistID", value);
        }

        /*
        Set the value of the PrivacyStatus input for this Choreo. ((optional, string) The playlist's privacy status. Valid values are: private or public.)
        */
        this.set_PrivacyStatus = function(value) {
            this.setInput("PrivacyStatus", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the playlist.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdatePlaylist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdatePlaylistResultSet = function(resultStream) {
    UpdatePlaylistResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdatePlaylist, choreography.Choreography);
util.inherits(UpdatePlaylistInputSet, choreography.InputSet);
util.inherits(UpdatePlaylistResultSet, choreography.ResultSet);
exports.UpdatePlaylist = UpdatePlaylist;

