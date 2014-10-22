
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Copy
    Creates a copy of the specified file.
*/


var Copy = function(session) {
    /*
        Create a new instance of the Copy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Copy"
    Copy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CopyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CopyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Copy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CopyInputSet = function() {
    CopyInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((optional, json) A JSON representation of fields in a file resource. File metadata information (such as the title) can be set using this input. See documentation for formatting examples.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Convert input for this Choreo. ((optional, boolean) Whether to convert this file to the corresponding Google Docs format. (Default: false).)
        */
        this.set_Convert = function(value) {
            this.setInput("Convert", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to copy.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the OCR input for this Choreo. ((optional, boolean) Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (Default: false))
        */
        this.set_OCR = function(value) {
            this.setInput("OCR", value);
        }

        /*
        Set the value of the OcrLanguage input for this Choreo. ((optional, string) If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.)
        */
        this.set_OcrLanguage = function(value) {
            this.setInput("OcrLanguage", value);
        }

        /*
        Set the value of the Pinned input for this Choreo. ((optional, boolean) Whether to pin the head revision of the uploaded file. (Default: false).)
        */
        this.set_Pinned = function(value) {
            this.setInput("Pinned", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the SourceLanguage input for this Choreo. ((optional, string) The language of the original file to be translated.)
        */
        this.set_SourceLanguage = function(value) {
            this.setInput("SourceLanguage", value);
        }

        /*
        Set the value of the TargetLanguage input for this Choreo. ((optional, string) Target language to translate the file to. If no sourceLanguage is provided, the API will attempt to detect the language.)
        */
        this.set_TargetLanguage = function(value) {
            this.setInput("TargetLanguage", value);
        }

        /*
        Set the value of the TimedTextLanguage input for this Choreo. ((optional, string) The language of the timed text.)
        */
        this.set_TimedTextLanguage = function(value) {
            this.setInput("TimedTextLanguage", value);
        }

        /*
        Set the value of the TimedTextTrackName input for this Choreo. ((optional, string) The timed text track name.)
        */
        this.set_TimedTextTrackName = function(value) {
            this.setInput("TimedTextTrackName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Copy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CopyResultSet = function(resultStream) {
    CopyResultSet.super_.call(this, resultStream);    
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

util.inherits(Copy, choreography.Choreography);
util.inherits(CopyInputSet, choreography.InputSet);
util.inherits(CopyResultSet, choreography.ResultSet);
exports.Copy = Copy;


/*
    Delete
    Permanently deletes a file by ID.
*/


var Delete = function(session) {
    /*
        Create a new instance of the Delete Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Delete"
    Delete.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Delete
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInputSet = function() {
    DeleteInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to delete.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Delete Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteResultSet = function(resultStream) {
    DeleteResultSet.super_.call(this, resultStream);    
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

util.inherits(Delete, choreography.Choreography);
util.inherits(DeleteInputSet, choreography.InputSet);
util.inherits(DeleteResultSet, choreography.ResultSet);
exports.Delete = Delete;


/*
    Get
    Gets a file's metadata and content by ID.
*/


var Get = function(session) {
    /*
        Create a new instance of the Get Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Get"
    Get.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Get
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInputSet = function() {
    GetInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the ExportFormat input for this Choreo. ((optional, string) Indicates the download format (i.e. pdf, doc, txt, rtf, odt, etc). When specified, the FileContent output will contain the file's base64 encoded value.)
        */
        this.set_ExportFormat = function(value) {
            this.setInput("ExportFormat", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to retrieve.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UpdateViewDate input for this Choreo. ((optional, boolean) Whether to update the view date after successfully retrieving the file. Default value is false.)
        */
        this.set_UpdateViewDate = function(value) {
            this.setInput("UpdateViewDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Get Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetResultSet = function(resultStream) {
    GetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FileContent" output from this Choreo execution. ((string) The Base64 encoded file content. Only returned when the optional "Format" parameter is provided.)
        */
        this.get_FileContent = function() {
            return this.getResult("FileContent");
        }
        /*
        Retrieve the value for the "FileMetadata" output from this Choreo execution. ((json) The file metadata returned in the response from Google.)
        */
        this.get_FileMetadata = function() {
            return this.getResult("FileMetadata");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(Get, choreography.Choreography);
util.inherits(GetInputSet, choreography.InputSet);
util.inherits(GetResultSet, choreography.ResultSet);
exports.Get = Get;


/*
    Insert
    Inserts a new file.
*/


var Insert = function(session) {
    /*
        Create a new instance of the Insert Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Insert"
    Insert.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Insert
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertInputSet = function() {
    InsertInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((conditional, json) A JSON representation of fields in a file resource. File metadata information (such as the title) can be inserted using this input. See documentation for formatting examples.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the ContentType input for this Choreo. ((conditional, string) The Content-Type of the file that is being uploaded (i.e. image/jpg). Required when specifying the FileContent input.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Convert input for this Choreo. ((optional, boolean) Whether to convert this file to the corresponding Google Docs format. (Default: false).)
        */
        this.set_Convert = function(value) {
            this.setInput("Convert", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileContent input for this Choreo. ((conditional, string) The Base64 encoded contents of the file to upload.)
        */
        this.set_FileContent = function(value) {
            this.setInput("FileContent", value);
        }

        /*
        Set the value of the OCR input for this Choreo. ((optional, boolean) Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (Default: false))
        */
        this.set_OCR = function(value) {
            this.setInput("OCR", value);
        }

        /*
        Set the value of the OcrLanguage input for this Choreo. ((optional, string) If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.)
        */
        this.set_OcrLanguage = function(value) {
            this.setInput("OcrLanguage", value);
        }

        /*
        Set the value of the Pinned input for this Choreo. ((optional, boolean) Whether to pin the head revision of the uploaded file. (Default: false).)
        */
        this.set_Pinned = function(value) {
            this.setInput("Pinned", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the SourceLanguage input for this Choreo. ((optional, string) The language of the original file to be translated.)
        */
        this.set_SourceLanguage = function(value) {
            this.setInput("SourceLanguage", value);
        }

        /*
        Set the value of the TargetLanguage input for this Choreo. ((optional, string) Target language to translate the file to. If no sourceLanguage is provided, the API will attempt to detect the language.)
        */
        this.set_TargetLanguage = function(value) {
            this.setInput("TargetLanguage", value);
        }

        /*
        Set the value of the TimedTextLanguage input for this Choreo. ((optional, string) The language of the timed text.)
        */
        this.set_TimedTextLanguage = function(value) {
            this.setInput("TimedTextLanguage", value);
        }

        /*
        Set the value of the TimedTextTrackName input for this Choreo. ((optional, string) The timed text track name.)
        */
        this.set_TimedTextTrackName = function(value) {
            this.setInput("TimedTextTrackName", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a vault file to upload. This can be used as an alternative to the FileContent input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Insert Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertResultSet = function(resultStream) {
    InsertResultSet.super_.call(this, resultStream);    
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

util.inherits(Insert, choreography.Choreography);
util.inherits(InsertInputSet, choreography.InputSet);
util.inherits(InsertResultSet, choreography.ResultSet);
exports.Insert = Insert;


/*
    List
    Lists the user's files.
*/


var List = function(session) {
    /*
        Create a new instance of the List Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/List"
    List.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the List
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInputSet = function() {
    ListInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
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
        Set the value of the Query input for this Choreo. ((optional, string) A search query combining one or more search clauses (e.g. title='myFile.txt').)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the List Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListResultSet = function(resultStream) {
    ListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FileID" output from this Choreo execution. ((string) The id of the file returned. This is returned only when using the Query input to search for specific files.)
        */
        this.get_FileID = function() {
            return this.getResult("FileID");
        }
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

util.inherits(List, choreography.Choreography);
util.inherits(ListInputSet, choreography.InputSet);
util.inherits(ListResultSet, choreography.ResultSet);
exports.List = List;


/*
    Touch
    Sets the file's updated time to the current server time.
*/


var Touch = function(session) {
    /*
        Create a new instance of the Touch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Touch"
    Touch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TouchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TouchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Touch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TouchInputSet = function() {
    TouchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to update.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Touch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TouchResultSet = function(resultStream) {
    TouchResultSet.super_.call(this, resultStream);    
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

util.inherits(Touch, choreography.Choreography);
util.inherits(TouchInputSet, choreography.InputSet);
util.inherits(TouchResultSet, choreography.ResultSet);
exports.Touch = Touch;


/*
    Trash
    Moves a file to the trash.
*/


var Trash = function(session) {
    /*
        Create a new instance of the Trash Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Trash"
    Trash.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrashResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrashInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Trash
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrashInputSet = function() {
    TrashInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to trash.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Trash Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrashResultSet = function(resultStream) {
    TrashResultSet.super_.call(this, resultStream);    
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

util.inherits(Trash, choreography.Choreography);
util.inherits(TrashInputSet, choreography.InputSet);
util.inherits(TrashResultSet, choreography.ResultSet);
exports.Trash = Trash;


/*
    Untrash
    Restores a file from the trash.
*/


var Untrash = function(session) {
    /*
        Create a new instance of the Untrash Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Untrash"
    Untrash.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UntrashResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UntrashInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Untrash
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UntrashInputSet = function() {
    UntrashInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file to untrash.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Untrash Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UntrashResultSet = function(resultStream) {
    UntrashResultSet.super_.call(this, resultStream);    
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

util.inherits(Untrash, choreography.Choreography);
util.inherits(UntrashInputSet, choreography.InputSet);
util.inherits(UntrashResultSet, choreography.ResultSet);
exports.Untrash = Untrash;


/*
    Update
    Updates the metadata or content of an existing file.
*/


var Update = function(session) {
    /*
        Create a new instance of the Update Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Files/Update"
    Update.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Update
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateInputSet = function() {
    UpdateInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((conditional, json) A JSON representation of fields in a file resource. File metadata information (such as the title) can be updated using this input. See documentation for formatting examples.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the ContentType input for this Choreo. ((conditional, string) The Content-Type of the file that is being updated (i.e. image/jpeg). Required if modifying the file content.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Convert input for this Choreo. ((optional, boolean) Whether to convert this file to the corresponding Google Docs format. (Default: false).)
        */
        this.set_Convert = function(value) {
            this.setInput("Convert", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying which fields to include in a partial response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileContent input for this Choreo. ((conditional, string) The new Base64 encoded contents of the file that is being updated.)
        */
        this.set_FileContent = function(value) {
            this.setInput("FileContent", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file to update.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the OCR input for this Choreo. ((optional, boolean) Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (Default: false))
        */
        this.set_OCR = function(value) {
            this.setInput("OCR", value);
        }

        /*
        Set the value of the OcrLanguage input for this Choreo. ((optional, string) If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.)
        */
        this.set_OcrLanguage = function(value) {
            this.setInput("OcrLanguage", value);
        }

        /*
        Set the value of the Pinned input for this Choreo. ((optional, boolean) Whether to pin the new revision. (Default: false).)
        */
        this.set_Pinned = function(value) {
            this.setInput("Pinned", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the SetModifiedDate input for this Choreo. ((optional, boolean) Whether to set the modified date with the supplied modified date.)
        */
        this.set_SetModifiedDate = function(value) {
            this.setInput("SetModifiedDate", value);
        }

        /*
        Set the value of the SourceLanguage input for this Choreo. ((optional, string) The language of the original file to be translated.)
        */
        this.set_SourceLanguage = function(value) {
            this.setInput("SourceLanguage", value);
        }

        /*
        Set the value of the TargetLanguage input for this Choreo. ((optional, string) Target language to translate the file to. If no sourceLanguage is provided, the API will attempt to detect the language.)
        */
        this.set_TargetLanguage = function(value) {
            this.setInput("TargetLanguage", value);
        }

        /*
        Set the value of the TimedTextLanguage input for this Choreo. ((optional, string) The language of the timed text.)
        */
        this.set_TimedTextLanguage = function(value) {
            this.setInput("TimedTextLanguage", value);
        }

        /*
        Set the value of the TimedTextTrackName input for this Choreo. ((optional, string) The timed text track name.)
        */
        this.set_TimedTextTrackName = function(value) {
            this.setInput("TimedTextTrackName", value);
        }

        /*
        Set the value of the UpdateViewedDate input for this Choreo. ((optional, boolean) Whether to update the view date after successfully updating the file.)
        */
        this.set_UpdateViewedDate = function(value) {
            this.setInput("UpdateViewedDate", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a vault file to upload. This can be used as an alternative to the FileContent input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Update Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateResultSet = function(resultStream) {
    UpdateResultSet.super_.call(this, resultStream);    
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

util.inherits(Update, choreography.Choreography);
util.inherits(UpdateInputSet, choreography.InputSet);
util.inherits(UpdateResultSet, choreography.ResultSet);
exports.Update = Update;

