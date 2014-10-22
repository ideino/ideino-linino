
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateCopyRef
    Allows you to create a copy reference (copy_ref) that you can later reference to copy files or folders to another user's Dropbox using the CopyFileOrFolder choreo. 
*/


var CreateCopyRef = function(session) {
    /*
        Create a new instance of the CreateCopyRef Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/CreateCopyRef"
    CreateCopyRef.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCopyRefResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCopyRefInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCopyRef
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCopyRefInputSet = function() {
    CreateCopyRefInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file you want to make available as a copy reference, i.e.  "testfile.txt" or "Folder/testfile.txt".)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCopyRef Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCopyRefResultSet = function(resultStream) {
    CreateCopyRefResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateCopyRef, choreography.Choreography);
util.inherits(CreateCopyRefInputSet, choreography.InputSet);
util.inherits(CreateCopyRefResultSet, choreography.ResultSet);
exports.CreateCopyRef = CreateCopyRef;


/*
    Delta
    Allows you keep up with changes to files and folders in a user's Dropbox.
*/


var Delta = function(session) {
    /*
        Create a new instance of the Delta Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/Delta"
    Delta.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeltaResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeltaInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Delta
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeltaInputSet = function() {
    DeltaInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) A string that is used to keep track of your current state. On the next call pass in this value to return delta entries that have been recorded since the cursor was returned.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Locale input for this Choreo. ((optional, string) The metadata returned will have its size field translated based on the given locale.)
        */
        this.set_Locale = function(value) {
            this.setInput("Locale", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Delta Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeltaResultSet = function(resultStream) {
    DeltaResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Delta, choreography.Choreography);
util.inherits(DeltaInputSet, choreography.InputSet);
util.inherits(DeltaResultSet, choreography.ResultSet);
exports.Delta = Delta;


/*
    GetFile
    Gets a file from your Dropbox account, returns the file content as Base64 encoded data.
*/


var GetFile = function(session) {
    /*
        Create a new instance of the GetFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/GetFile"
    GetFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFileInputSet = function() {
    GetFileInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to file you want to retrieve (i.e. RootFolder/SubFolder/MyFile.txt). Only the file name is necessary when the file is at the root level.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFileResultSet = function(resultStream) {
    GetFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from Dropbox. The response will contain the contents of the file you are retrieving as Base64 encoded data.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFile, choreography.Choreography);
util.inherits(GetFileInputSet, choreography.InputSet);
util.inherits(GetFileResultSet, choreography.ResultSet);
exports.GetFile = GetFile;


/*
    GetFileRevisions
    Retrieves metadata for the previous revisions of a file
*/


var GetFileRevisions = function(session) {
    /*
        Create a new instance of the GetFileRevisions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/GetFileRevisions"
    GetFileRevisions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFileRevisionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFileRevisionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFileRevisions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFileRevisionsInputSet = function() {
    GetFileRevisionsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file that you want to return revisions for (i.e. RootFolder/SubFolder/MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RevisionLimit input for this Choreo. ((optional, integer) Default is 10. Max is 1,000. When listing a file, the service will not report listings containing more than the amount specified here.)
        */
        this.set_RevisionLimit = function(value) {
            this.setInput("RevisionLimit", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFileRevisions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFileRevisionsResultSet = function(resultStream) {
    GetFileRevisionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFileRevisions, choreography.Choreography);
util.inherits(GetFileRevisionsInputSet, choreography.InputSet);
util.inherits(GetFileRevisionsResultSet, choreography.ResultSet);
exports.GetFileRevisions = GetFileRevisions;


/*
    GetShareableLink
    Retrieves a shareable link to files or folders.
*/


var GetShareableLink = function(session) {
    /*
        Create a new instance of the GetShareableLink Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/GetShareableLink"
    GetShareableLink.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetShareableLinkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetShareableLinkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetShareableLink
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetShareableLinkInputSet = function() {
    GetShareableLinkInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file or folder you want to return a shareable link for (i.e. RootFolder/SubFolder/MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShareableLink Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShareableLinkResultSet = function(resultStream) {
    GetShareableLinkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetShareableLink, choreography.Choreography);
util.inherits(GetShareableLinkInputSet, choreography.InputSet);
util.inherits(GetShareableLinkResultSet, choreography.ResultSet);
exports.GetShareableLink = GetShareableLink;


/*
    GetThumbnail
    Retrieves a thumbnail for a specified image.
*/


var GetThumbnail = function(session) {
    /*
        Create a new instance of the GetThumbnail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/GetThumbnail"
    GetThumbnail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetThumbnailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetThumbnailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetThumbnail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetThumbnailInputSet = function() {
    GetThumbnailInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the ImageFormat input for this Choreo. ((optional, string) The thumbnail format to return for the specified image. Accepted values are: jpeg (default) or png.)
        */
        this.set_ImageFormat = function(value) {
            this.setInput("ImageFormat", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file that you want to generate a thumbnail for (i.e. RootFolder/SubFolder/MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

        /*
        Set the value of the Size input for this Choreo. ((optional, string) The size of the thumbnail to generate. Accepted values are: small, medium, s, m, l, xl. See Choreo documentation for exact dimensions. Defaults to "small".)
        */
        this.set_Size = function(value) {
            this.setInput("Size", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetThumbnail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetThumbnailResultSet = function(resultStream) {
    GetThumbnailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The base64 encoded image content of the thumbnail.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetThumbnail, choreography.Choreography);
util.inherits(GetThumbnailInputSet, choreography.InputSet);
util.inherits(GetThumbnailResultSet, choreography.ResultSet);
exports.GetThumbnail = GetThumbnail;


/*
    ListFolderContents
    Lists contents of a given Dropbox folder.
*/


var ListFolderContents = function(session) {
    /*
        Create a new instance of the ListFolderContents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/ListFolderContents"
    ListFolderContents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFolderContentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFolderContentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFolderContents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFolderContentsInputSet = function() {
    ListFolderContentsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the FileLimit input for this Choreo. ((optional, integer) Dropbox will not return a list that exceeds this specified limit. Defaults to 10,000.)
        */
        this.set_FileLimit = function(value) {
            this.setInput("FileLimit", value);
        }

        /*
        Set the value of the Folder input for this Choreo. ((optional, string) The name of the folder that contains the listing you want to retrieve. A path to a sub-folder is also valid (i.e. RootFolder/SubFolder).)
        */
        this.set_Folder = function(value) {
            this.setInput("Folder", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFolderContents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFolderContentsResultSet = function(resultStream) {
    ListFolderContentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListFolderContents, choreography.Choreography);
util.inherits(ListFolderContentsInputSet, choreography.InputSet);
util.inherits(ListFolderContentsResultSet, choreography.ResultSet);
exports.ListFolderContents = ListFolderContents;


/*
    RestoreFileToRevision
    Restores a specified file to a previous revision.
*/


var RestoreFileToRevision = function(session) {
    /*
        Create a new instance of the RestoreFileToRevision Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/RestoreFileToRevision"
    RestoreFileToRevision.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RestoreFileToRevisionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RestoreFileToRevisionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RestoreFileToRevision
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RestoreFileToRevisionInputSet = function() {
    RestoreFileToRevisionInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file that you want to return revisions for (i.e. RootFolder/SubFolder/MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Revision input for this Choreo. ((required, string) The revision of the file to restore. The revision ID can be retrieved by running the GetFileRevision Choreo.)
        */
        this.set_Revision = function(value) {
            this.setInput("Revision", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RestoreFileToRevision Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RestoreFileToRevisionResultSet = function(resultStream) {
    RestoreFileToRevisionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RestoreFileToRevision, choreography.Choreography);
util.inherits(RestoreFileToRevisionInputSet, choreography.InputSet);
util.inherits(RestoreFileToRevisionResultSet, choreography.ResultSet);
exports.RestoreFileToRevision = RestoreFileToRevision;


/*
    SearchFilesAndFolders
    Allows you to search Dropbox for files or folders by a keyword search.
*/


var SearchFilesAndFolders = function(session) {
    /*
        Create a new instance of the SearchFilesAndFolders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/SearchFilesAndFolders"
    SearchFilesAndFolders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchFilesAndFoldersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchFilesAndFoldersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchFilesAndFolders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchFilesAndFoldersInputSet = function() {
    SearchFilesAndFoldersInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the FileLimit input for this Choreo. ((optional, integer) Dropbox will not return a list that exceeds this specified limit. Defaults to 10,000.)
        */
        this.set_FileLimit = function(value) {
            this.setInput("FileLimit", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path to the folder you want to search from (i.e. RootFolder/SubFolder). Leave blank to search ALL.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The search string. Must be at least three characters long.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchFilesAndFolders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchFilesAndFoldersResultSet = function(resultStream) {
    SearchFilesAndFoldersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchFilesAndFolders, choreography.Choreography);
util.inherits(SearchFilesAndFoldersInputSet, choreography.InputSet);
util.inherits(SearchFilesAndFoldersResultSet, choreography.ResultSet);
exports.SearchFilesAndFolders = SearchFilesAndFolders;


/*
    UploadFile
    Uploads a file to your Dropbox account.
*/


var UploadFile = function(session) {
    /*
        Create a new instance of the UploadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/FilesAndMetadata/UploadFile"
    UploadFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadFileInputSet = function() {
    UploadFileInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((conditional, string) The Base64-encoded contents of the file you want to upload. Required UNLESS uploading a file from a URL using the FileContentsFromURL input variable.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the FileContentsFromURL input for this Choreo. ((conditional, string) URL for file you want to upload. Alternative to uploading Base64Encoded data. If specifiying URL, leave FileContents blank. Valid URLs: http(s) requests only.)
        */
        this.set_FileContentsFromURL = function(value) {
            this.setInput("FileContentsFromURL", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file you are uploading to Dropbox.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the Folder input for this Choreo. ((optional, string) The name of the folder that that you want to upload a file to. A path to a sub-folder is also valid (i.e. RootFolder/SubFolder).)
        */
        this.set_Folder = function(value) {
            this.setInput("Folder", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Root input for this Choreo. ((conditional, string) The root relative to which path is specified. Valid values are "sandbox" and "dropbox" (the default). When your access token has the App folder level of access, this should be set to "sandbox".)
        */
        this.set_Root = function(value) {
            this.setInput("Root", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadFileResultSet = function(resultStream) {
    UploadFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadFile, choreography.Choreography);
util.inherits(UploadFileInputSet, choreography.InputSet);
util.inherits(UploadFileResultSet, choreography.ResultSet);
exports.UploadFile = UploadFile;

