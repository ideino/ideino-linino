
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddCommentToPhoto
    Adds a comment to a specified photo in Google Picasa.
*/


var AddCommentToPhoto = function(session) {
    /*
        Create a new instance of the AddCommentToPhoto Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/AddCommentToPhoto"
    AddCommentToPhoto.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCommentToPhotoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCommentToPhotoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddCommentToPhoto
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCommentToPhotoInputSet = function() {
    AddCommentToPhotoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((required, integer) The id of the album which contains the photo you want to add a comment to.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
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
        Set the value of the Comment input for this Choreo. ((required, string) The comment that you want to add to a photo.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo you want to add a comment to.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddCommentToPhoto Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCommentToPhotoResultSet = function(resultStream) {
    AddCommentToPhotoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddCommentToPhoto, choreography.Choreography);
util.inherits(AddCommentToPhotoInputSet, choreography.InputSet);
util.inherits(AddCommentToPhotoResultSet, choreography.ResultSet);
exports.AddCommentToPhoto = AddCommentToPhoto;


/*
    CreateAlbum
    Creates a photo album in a Google Picasa account.
*/


var CreateAlbum = function(session) {
    /*
        Create a new instance of the CreateAlbum Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/CreateAlbum"
    CreateAlbum.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAlbumResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAlbumInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAlbum
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAlbumInputSet = function() {
    CreateAlbumInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
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
        Set the value of the Keywords input for this Choreo. ((optional, string) Keywords to associate with the album you are creating separated by commas.)
        */
        this.set_Keywords = function(value) {
            this.setInput("Keywords", value);
        }

        /*
        Set the value of the PhotoAccess input for this Choreo. ((optional, string) The perssion level to specify for photo access. Defaults to 'public'.)
        */
        this.set_PhotoAccess = function(value) {
            this.setInput("PhotoAccess", value);
        }

        /*
        Set the value of the PhotoLocation input for this Choreo. ((optional, string) The location to associate with the photo (i.e. Italy).)
        */
        this.set_PhotoLocation = function(value) {
            this.setInput("PhotoLocation", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Summary input for this Choreo. ((optional, string) The album summary.)
        */
        this.set_Summary = function(value) {
            this.setInput("Summary", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) The timestamp to associate with the photo.  Defaults to the current timestamp. Should be an epoch timestamp in milliseconds.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the album.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAlbum Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAlbumResultSet = function(resultStream) {
    CreateAlbumResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(CreateAlbum, choreography.Choreography);
util.inherits(CreateAlbumInputSet, choreography.InputSet);
util.inherits(CreateAlbumResultSet, choreography.ResultSet);
exports.CreateAlbum = CreateAlbum;


/*
    DeleteAlbum
    Deletes an album in Google Picasa with a specified album Id.
*/


var DeleteAlbum = function(session) {
    /*
        Create a new instance of the DeleteAlbum Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/DeleteAlbum"
    DeleteAlbum.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAlbumResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAlbumInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAlbum
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAlbumInputSet = function() {
    DeleteAlbumInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((required, integer) The album id. Note that this can be retrieved by running the ListAlbums Choreo.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAlbum Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAlbumResultSet = function(resultStream) {
    DeleteAlbumResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(DeleteAlbum, choreography.Choreography);
util.inherits(DeleteAlbumInputSet, choreography.InputSet);
util.inherits(DeleteAlbumResultSet, choreography.ResultSet);
exports.DeleteAlbum = DeleteAlbum;


/*
    DeleteTag
    Removes a tag from a specified photo in Google Picasa.
*/


var DeleteTag = function(session) {
    /*
        Create a new instance of the DeleteTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/DeleteTag"
    DeleteTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTagInputSet = function() {
    DeleteTagInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumId input for this Choreo. ((required, integer) The id for the album which has the tagged photo. Note that this can be retrieved by running the ListAlbums Choreo.)
        */
        this.set_AlbumId = function(value) {
            this.setInput("AlbumId", value);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id for the photo that has a tag to delete.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the TagID input for this Choreo. ((required, string) The Id (or tag name) for the tag that you want to delete.)
        */
        this.set_TagID = function(value) {
            this.setInput("TagID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTagResultSet = function(resultStream) {
    DeleteTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(DeleteTag, choreography.Choreography);
util.inherits(DeleteTagInputSet, choreography.InputSet);
util.inherits(DeleteTagResultSet, choreography.ResultSet);
exports.DeleteTag = DeleteTag;


/*
    ListAlbums
    List all albums created in a Google Picasa account.
*/


var ListAlbums = function(session) {
    /*
        Create a new instance of the ListAlbums Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/ListAlbums"
    ListAlbums.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAlbumsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAlbumsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAlbums
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAlbumsInputSet = function() {
    ListAlbumsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAlbums Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAlbumsResultSet = function(resultStream) {
    ListAlbumsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAlbums, choreography.Choreography);
util.inherits(ListAlbumsInputSet, choreography.InputSet);
util.inherits(ListAlbumsResultSet, choreography.ResultSet);
exports.ListAlbums = ListAlbums;


/*
    ListPhotosByAlbum
    Lists all photos in a specified Google Picasa album.
*/


var ListPhotosByAlbum = function(session) {
    /*
        Create a new instance of the ListPhotosByAlbum Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/ListPhotosByAlbum"
    ListPhotosByAlbum.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPhotosByAlbumResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPhotosByAlbumInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPhotosByAlbum
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPhotosByAlbumInputSet = function() {
    ListPhotosByAlbumInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((required, integer) The album id. Note that this can be retrieved by running the ListAlbums Choreo.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPhotosByAlbum Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPhotosByAlbumResultSet = function(resultStream) {
    ListPhotosByAlbumResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(ListPhotosByAlbum, choreography.Choreography);
util.inherits(ListPhotosByAlbumInputSet, choreography.InputSet);
util.inherits(ListPhotosByAlbumResultSet, choreography.ResultSet);
exports.ListPhotosByAlbum = ListPhotosByAlbum;


/*
    PostPhoto
    Uploads a photo to Google Picasa.
*/


var PostPhoto = function(session) {
    /*
        Create a new instance of the PostPhoto Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/PostPhoto"
    PostPhoto.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostPhotoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostPhotoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PostPhoto
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostPhotoInputSet = function() {
    PostPhotoInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((conditional, string) The base64 encoded file contents of the photo you want to upload.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((optional, integer) The id of the album that you want to upload the photo to. Defaults to 'default' which means the photo will be uploaded to the dropbox album.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
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
        Set the value of the ImageName input for this Choreo. ((required, string) The name of the image you want to upload.)
        */
        this.set_ImageName = function(value) {
            this.setInput("ImageName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to "default" which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((vault file) The path to the vault file you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the PostPhoto Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostPhotoResultSet = function(resultStream) {
    PostPhotoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PostPhoto, choreography.Choreography);
util.inherits(PostPhotoInputSet, choreography.InputSet);
util.inherits(PostPhotoResultSet, choreography.ResultSet);
exports.PostPhoto = PostPhoto;


/*
    RetrieveComments
    Returns a feed of the photo comments for a specified user.
*/


var RetrieveComments = function(session) {
    /*
        Create a new instance of the RetrieveComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/RetrieveComments"
    RetrieveComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCommentsInputSet = function() {
    RetrieveCommentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The max number of comments to return. Defaults to 10.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCommentsResultSet = function(resultStream) {
    RetrieveCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(RetrieveComments, choreography.Choreography);
util.inherits(RetrieveCommentsInputSet, choreography.InputSet);
util.inherits(RetrieveCommentsResultSet, choreography.ResultSet);
exports.RetrieveComments = RetrieveComments;


/*
    RetrieveTagsByUser
    Returns a feed of the photo tags for a specified user.
*/


var RetrieveTagsByUser = function(session) {
    /*
        Create a new instance of the RetrieveTagsByUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/RetrieveTagsByUser"
    RetrieveTagsByUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveTagsByUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveTagsByUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveTagsByUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveTagsByUserInputSet = function() {
    RetrieveTagsByUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveTagsByUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveTagsByUserResultSet = function(resultStream) {
    RetrieveTagsByUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveTagsByUser, choreography.Choreography);
util.inherits(RetrieveTagsByUserInputSet, choreography.InputSet);
util.inherits(RetrieveTagsByUserResultSet, choreography.ResultSet);
exports.RetrieveTagsByUser = RetrieveTagsByUser;


/*
    SearchPhotosByTag
    Searches photos using tags that you specify.
*/


var SearchPhotosByTag = function(session) {
    /*
        Create a new instance of the SearchPhotosByTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/SearchPhotosByTag"
    SearchPhotosByTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchPhotosByTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchPhotosByTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchPhotosByTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchPhotosByTagInputSet = function() {
    SearchPhotosByTagInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
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
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) A photo tag to search by. Multiple tags can be separated by commas.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to 'default' which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchPhotosByTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchPhotosByTagResultSet = function(resultStream) {
    SearchPhotosByTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
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

util.inherits(SearchPhotosByTag, choreography.Choreography);
util.inherits(SearchPhotosByTagInputSet, choreography.InputSet);
util.inherits(SearchPhotosByTagResultSet, choreography.ResultSet);
exports.SearchPhotosByTag = SearchPhotosByTag;


/*
    TagPhoto
    Creates a tag for a specified photo in Google Picasa.
*/


var TagPhoto = function(session) {
    /*
        Create a new instance of the TagPhoto Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Picasa/TagPhoto"
    TagPhoto.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TagPhotoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TagPhotoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TagPhoto
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TagPhotoInputSet = function() {
    TagPhotoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AlbumID input for this Choreo. ((required, integer) The id of the album which contains the photo you want to tag.)
        */
        this.set_AlbumID = function(value) {
            this.setInput("AlbumID", value);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo you want to tag.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) The text for the photo tag.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Google Picasa username. Defaults to "default" which means the server will use the UserID of the user whose access token was specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TagPhoto Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TagPhotoResultSet = function(resultStream) {
    TagPhotoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google Picasa.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TagPhoto, choreography.Choreography);
util.inherits(TagPhotoInputSet, choreography.InputSet);
util.inherits(TagPhotoResultSet, choreography.ResultSet);
exports.TagPhoto = TagPhoto;

