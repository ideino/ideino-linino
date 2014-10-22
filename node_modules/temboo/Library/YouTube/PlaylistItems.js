
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    InsertItem
    Creates a new item within a playlist.
*/


var InsertItem = function(session) {
    /*
        Create a new instance of the InsertItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/PlaylistItems/InsertItem"
    InsertItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertItemInputSet = function() {
    InsertItemInputSet.super_.call(this);
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
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of fields that are being set and that will be returned in the response. Part names that can be passed are: snippet and contentDetails.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PlaylistID input for this Choreo. ((required, string) The id of the playlist to add an item to.)
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

        /*
        Set the value of the VideoID input for this Choreo. ((required, string) The id of the video to add to the playlist.)
        */
        this.set_VideoID = function(value) {
            this.setInput("VideoID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InsertItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertItemResultSet = function(resultStream) {
    InsertItemResultSet.super_.call(this, resultStream);    
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

util.inherits(InsertItem, choreography.Choreography);
util.inherits(InsertItemInputSet, choreography.InputSet);
util.inherits(InsertItemResultSet, choreography.ResultSet);
exports.InsertItem = InsertItem;


/*
    ListItemsByID
    Returns a collection of playlist items that match the list of IDs provided.
*/


var ListItemsByID = function(session) {
    /*
        Create a new instance of the ListItemsByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/PlaylistItems/ListItemsByID"
    ListItemsByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListItemsByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListItemsByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListItemsByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListItemsByIDInputSet = function() {
    ListItemsByIDInputSet.super_.call(this);
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
        Set the value of the ItemID input for this Choreo. ((conditional, string) A comma-separated list of IDs for playlist items to retrieve.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
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
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of playlistItem resource properties that the API response will include. Part names that you can pass are: id, snippet, and contentDetails.)
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

        /*
        Set the value of the VideoID input for this Choreo. ((optional, string) Indicates that only the playlist items that contain the specified video should be returned.)
        */
        this.set_VideoID = function(value) {
            this.setInput("VideoID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListItemsByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListItemsByIDResultSet = function(resultStream) {
    ListItemsByIDResultSet.super_.call(this, resultStream);    
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

util.inherits(ListItemsByID, choreography.Choreography);
util.inherits(ListItemsByIDInputSet, choreography.InputSet);
util.inherits(ListItemsByIDResultSet, choreography.ResultSet);
exports.ListItemsByID = ListItemsByID;


/*
    ListItemsByPlaylist
    Returns a collection of playlist items within a specific playlist.
*/


var ListItemsByPlaylist = function(session) {
    /*
        Create a new instance of the ListItemsByPlaylist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/PlaylistItems/ListItemsByPlaylist"
    ListItemsByPlaylist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListItemsByPlaylistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListItemsByPlaylistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListItemsByPlaylist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListItemsByPlaylistInputSet = function() {
    ListItemsByPlaylistInputSet.super_.call(this);
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
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of playlistItem resource properties that the API response will include. Part names that you can pass are: id, snippet, and contentDetails.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PlaylistID input for this Choreo. ((conditional, string) A unique ID of the playlist for which you want to retrieve playlist items.)
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

        /*
        Set the value of the VideoID input for this Choreo. ((optional, string) Indicates that only the playlist items that contain the specified video should be returned.)
        */
        this.set_VideoID = function(value) {
            this.setInput("VideoID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListItemsByPlaylist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListItemsByPlaylistResultSet = function(resultStream) {
    ListItemsByPlaylistResultSet.super_.call(this, resultStream);    
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

util.inherits(ListItemsByPlaylist, choreography.Choreography);
util.inherits(ListItemsByPlaylistInputSet, choreography.InputSet);
util.inherits(ListItemsByPlaylistResultSet, choreography.ResultSet);
exports.ListItemsByPlaylist = ListItemsByPlaylist;

