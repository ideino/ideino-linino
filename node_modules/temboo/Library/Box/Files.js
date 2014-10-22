
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CopyFile
    Creates a copy of a file in another folder.
*/


var CopyFile = function(session) {
    /*
        Create a new instance of the CopyFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/CopyFile"
    CopyFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CopyFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CopyFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CopyFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CopyFileInputSet = function() {
    CopyFileInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file to copy.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) An optional new name for the file.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ParentID input for this Choreo. ((required, string) The ID of the destination folder to copy the file into.)
        */
        this.set_ParentID = function(value) {
            this.setInput("ParentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CopyFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CopyFileResultSet = function(resultStream) {
    CopyFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CopyFile, choreography.Choreography);
util.inherits(CopyFileInputSet, choreography.InputSet);
util.inherits(CopyFileResultSet, choreography.ResultSet);
exports.CopyFile = CopyFile;


/*
    DeleteFile
    Moves a file to the trash.
*/


var DeleteFile = function(session) {
    /*
        Create a new instance of the DeleteFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/DeleteFile"
    DeleteFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteFileInputSet = function() {
    DeleteFileInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file that you want to delete.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFileResultSet = function(resultStream) {
    DeleteFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteFile, choreography.Choreography);
util.inherits(DeleteFileInputSet, choreography.InputSet);
util.inherits(DeleteFileResultSet, choreography.ResultSet);
exports.DeleteFile = DeleteFile;


/*
    DownloadFile
    Retrieves the contents of a specified file.
*/


var DownloadFile = function(session) {
    /*
        Create a new instance of the DownloadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/DownloadFile"
    DownloadFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadFileInputSet = function() {
    DownloadFileInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file to download.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DownloadFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadFileResultSet = function(resultStream) {
    DownloadFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The Base64 encoded contents of the downloaded file.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DownloadFile, choreography.Choreography);
util.inherits(DownloadFileInputSet, choreography.InputSet);
util.inherits(DownloadFileResultSet, choreography.ResultSet);
exports.DownloadFile = DownloadFile;


/*
    GetComments
    Retrieves comments for a specified file.
*/


var GetComments = function(session) {
    /*
        Create a new instance of the GetComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/GetComments"
    GetComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommentsInputSet = function() {
    GetCommentsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file that you want to view comments for.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentsResultSet = function(resultStream) {
    GetCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComments, choreography.Choreography);
util.inherits(GetCommentsInputSet, choreography.InputSet);
util.inherits(GetCommentsResultSet, choreography.ResultSet);
exports.GetComments = GetComments;


/*
    GetFileInformation
    Retrieves information for a specified file.
*/


var GetFileInformation = function(session) {
    /*
        Create a new instance of the GetFileInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/GetFileInformation"
    GetFileInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFileInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFileInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFileInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFileInformationInputSet = function() {
    GetFileInformationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file that you want to retrieve information for.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetFileInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFileInformationResultSet = function(resultStream) {
    GetFileInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFileInformation, choreography.Choreography);
util.inherits(GetFileInformationInputSet, choreography.InputSet);
util.inherits(GetFileInformationResultSet, choreography.ResultSet);
exports.GetFileInformation = GetFileInformation;


/*
    UpdateFile
    Updates individual or multiple fields in the file object.
*/


var UpdateFile = function(session) {
    /*
        Create a new instance of the UpdateFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/UpdateFile"
    UpdateFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateFileInputSet = function() {
    UpdateFileInputSet.super_.call(this);
        /*
        Set the value of the FileObject input for this Choreo. ((required, json) A JSON object representing the new file information. See documentation for formatting examples.)
        */
        this.set_FileObject = function(value) {
            this.setInput("FileObject", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file to update.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateFileResultSet = function(resultStream) {
    UpdateFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateFile, choreography.Choreography);
util.inherits(UpdateFileInputSet, choreography.InputSet);
util.inherits(UpdateFileResultSet, choreography.ResultSet);
exports.UpdateFile = UpdateFile;


/*
    UploadFile
    Uploads a new file to a user's account. This can also be used when updating the contents of an existing file.
*/


var UploadFile = function(session) {
    /*
        Create a new instance of the UploadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/UploadFile"
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
        Set the value of the FileContents input for this Choreo. ((conditional, string) The Base64 encoded contents of the file you want to upload.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((optional, string) When providing the id of an existing file, the content of the file will be updated.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((conditional, string) The name of the new file to upload. Note that when providing the FileID in order to perform an update to a file, it is not necessary to provide the FileName.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the FolderID input for this Choreo. ((optional, string) The ID of the target folder to upload the file to. Defaults to 0 indicating the root folder.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadFileResultSet = function(resultStream) {
    UploadFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadFile, choreography.Choreography);
util.inherits(UploadFileInputSet, choreography.InputSet);
util.inherits(UploadFileResultSet, choreography.ResultSet);
exports.UploadFile = UploadFile;


/*
    ZipFile
    Creates a zipped version of the specified Box file and returns a link to the new compressed file.
*/


var ZipFile = function(session) {
    /*
        Create a new instance of the ZipFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Files/ZipFile"
    ZipFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ZipFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ZipFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ZipFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ZipFileInputSet = function() {
    ZipFileInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The id of the file to zip.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the SharedLink input for this Choreo. ((conditional, json) A JSON object  representing the item’s shared link and associated permissions. See documentation for formatting examples.)
        */
        this.set_SharedLink = function(value) {
            this.setInput("SharedLink", value);
        }

        /*
        Set the value of the ZipFileLocation input for this Choreo. ((conditional, string) The id of the folder to put the new zip file in. When not specified, the zip file will be put in the root folder.)
        */
        this.set_ZipFileLocation = function(value) {
            this.setInput("ZipFileLocation", value);
        }

        /*
        Set the value of the ZipFileName input for this Choreo. ((required, string) The name of the zip file that will be created.)
        */
        this.set_ZipFileName = function(value) {
            this.setInput("ZipFileName", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the ZipFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ZipFileResultSet = function(resultStream) {
    ZipFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URL" output from this Choreo execution. ((string) The url for the newly created zip file.)
        */
        this.get_URL = function() {
            return this.getResult("URL");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from Box. This contains the newly created zip file metadata.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ZipFile, choreography.Choreography);
util.inherits(ZipFileInputSet, choreography.InputSet);
util.inherits(ZipFileResultSet, choreography.ResultSet);
exports.ZipFile = ZipFile;

