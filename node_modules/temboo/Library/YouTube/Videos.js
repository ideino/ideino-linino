
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteVideo
    Deletes a YouTube video.
*/


var DeleteVideo = function(session) {
    /*
        Create a new instance of the DeleteVideo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Videos/DeleteVideo"
    DeleteVideo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteVideoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteVideoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteVideo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteVideoInputSet = function() {
    DeleteVideoInputSet.super_.call(this);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the VideoID input for this Choreo. ((required, string) The id of the video to delete.)
        */
        this.set_VideoID = function(value) {
            this.setInput("VideoID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteVideo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteVideoResultSet = function(resultStream) {
    DeleteVideoResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteVideo, choreography.Choreography);
util.inherits(DeleteVideoInputSet, choreography.InputSet);
util.inherits(DeleteVideoResultSet, choreography.ResultSet);
exports.DeleteVideo = DeleteVideo;


/*
    ListVideosByID
    Returns a list of YouTube videos that match the IDs provided.
*/


var ListVideosByID = function(session) {
    /*
        Create a new instance of the ListVideosByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Videos/ListVideosByID"
    ListVideosByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListVideosByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListVideosByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListVideosByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListVideosByIDInputSet = function() {
    ListVideosByIDInputSet.super_.call(this);
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
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of fields to include. Valid values are: id, snippet, contentDetails, fileDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails.)
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
        Set the value of the VideoID input for this Choreo. ((required, string) A comma-separated list of the YouTube video ID(s) that are being retrieved.)
        */
        this.set_VideoID = function(value) {
            this.setInput("VideoID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListVideosByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListVideosByIDResultSet = function(resultStream) {
    ListVideosByIDResultSet.super_.call(this, resultStream);    
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

util.inherits(ListVideosByID, choreography.Choreography);
util.inherits(ListVideosByIDInputSet, choreography.InputSet);
util.inherits(ListVideosByIDResultSet, choreography.ResultSet);
exports.ListVideosByID = ListVideosByID;


/*
    UpdateVideo
    Updates a video's metadata.
*/


var UpdateVideo = function(session) {
    /*
        Create a new instance of the UpdateVideo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Videos/UpdateVideo"
    UpdateVideo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateVideoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateVideoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateVideo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateVideoInputSet = function() {
    UpdateVideoInputSet.super_.call(this);
        /*
        Set the value of the VideoMetadata input for this Choreo. ((required, json) A JSON representation of the video resource containing fields to update. The id key for the video is requried for updates. See documentation for examples.)
        */
        this.set_VideoMetadata = function(value) {
            this.setInput("VideoMetadata", value);
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
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of fields that are being set and that will be returned in the response (i.e. snippet,status).)
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
A ResultSet with methods tailored to the values returned by the UpdateVideo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateVideoResultSet = function(resultStream) {
    UpdateVideoResultSet.super_.call(this, resultStream);    
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

util.inherits(UpdateVideo, choreography.Choreography);
util.inherits(UpdateVideoInputSet, choreography.InputSet);
util.inherits(UpdateVideoResultSet, choreography.ResultSet);
exports.UpdateVideo = UpdateVideo;

