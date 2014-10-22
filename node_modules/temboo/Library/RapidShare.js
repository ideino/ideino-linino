
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddRealFolder
    Creates a new folder in RapidShare.
*/


var AddRealFolder = function(session) {
    /*
        Create a new instance of the AddRealFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/AddRealFolder"
    AddRealFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddRealFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddRealFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddRealFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddRealFolderInputSet = function() {
    AddRealFolderInputSet.super_.call(this);
        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the folder (Max character length is 250 bytes))
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Parent input for this Choreo. ((optional, integer) The ID of the parent folder. Defaults to 0 for 'root'.)
        */
        this.set_Parent = function(value) {
            this.setInput("Parent", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddRealFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddRealFolderResultSet = function(resultStream) {
    AddRealFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare. The id of the newly created folder should be returned in the response upon a successful execution.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddRealFolder, choreography.Choreography);
util.inherits(AddRealFolderInputSet, choreography.InputSet);
util.inherits(AddRealFolderResultSet, choreography.ResultSet);
exports.AddRealFolder = AddRealFolder;


/*
    DeleteFiles
    Delete one or more files from RapidShare.
*/


var DeleteFiles = function(session) {
    /*
        Create a new instance of the DeleteFiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/DeleteFiles"
    DeleteFiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteFilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteFilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteFiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteFilesInputSet = function() {
    DeleteFilesInputSet.super_.call(this);
        /*
        Set the value of the File input for this Choreo. ((required, integer) The id of the file to delete. Can be a commas separated list of ids.)
        */
        this.set_File = function(value) {
            this.setInput("File", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFilesResultSet = function(resultStream) {
    DeleteFilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteFiles, choreography.Choreography);
util.inherits(DeleteFilesInputSet, choreography.InputSet);
util.inherits(DeleteFilesResultSet, choreography.ResultSet);
exports.DeleteFiles = DeleteFiles;


/*
    DeleteRealFolder
    Delete a folder(s) from a RapidShare account.
*/


var DeleteRealFolder = function(session) {
    /*
        Create a new instance of the DeleteRealFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/DeleteRealFolder"
    DeleteRealFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRealFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRealFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRealFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRealFolderInputSet = function() {
    DeleteRealFolderInputSet.super_.call(this);
        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RealFolder input for this Choreo. ((required, integer) The id of the folder to delete. Can be a commas separated list of ids.)
        */
        this.set_RealFolder = function(value) {
            this.setInput("RealFolder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRealFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRealFolderResultSet = function(resultStream) {
    DeleteRealFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRealFolder, choreography.Choreography);
util.inherits(DeleteRealFolderInputSet, choreography.InputSet);
util.inherits(DeleteRealFolderResultSet, choreography.ResultSet);
exports.DeleteRealFolder = DeleteRealFolder;


/*
    GetAccountDetails
    Returns details about a RapidShare account in key-value pairs.
*/


var GetAccountDetails = function(session) {
    /*
        Create a new instance of the GetAccountDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/GetAccountDetails"
    GetAccountDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountDetailsInputSet = function() {
    GetAccountDetailsInputSet.super_.call(this);
        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the WithCookie input for this Choreo. ((optional, boolean) If value "1" is specified, a cookie is returned in the response)
        */
        this.set_WithCookie = function(value) {
            this.setInput("WithCookie", value);
        }

        /*
        Set the value of the WithPublicId input for this Choreo. ((optional, boolean) If value "1" is specified, the public id is returned in the response)
        */
        this.set_WithPublicId = function(value) {
            this.setInput("WithPublicId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountDetailsResultSet = function(resultStream) {
    GetAccountDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare formatted in key / value pairs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountDetails, choreography.Choreography);
util.inherits(GetAccountDetailsInputSet, choreography.InputSet);
util.inherits(GetAccountDetailsResultSet, choreography.ResultSet);
exports.GetAccountDetails = GetAccountDetails;


/*
    ListFiles
    Lists the files in all folders (or in a specified folder) and allows you to control the database columns returned in the result.
*/


var ListFiles = function(session) {
    /*
        Create a new instance of the ListFiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/ListFiles"
    ListFiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFilesInputSet = function() {
    ListFilesInputSet.super_.call(this);
        /*
        Set the value of the Fields input for this Choreo. ((optional, string) The database columns to return separated by commas. (i.e. downloads,lastdownload,filename,size, etc))
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileIDs input for this Choreo. ((optional, integer) The id of the file to list. Multiple IDs can be entered separated by commas.)
        */
        this.set_FileIDs = function(value) {
            this.setInput("FileIDs", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((optional, string) The name of the file to list)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the FolderID input for this Choreo. ((optional, integer) The id of the folder that contains the file you want to list. Defaults to 'all'.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFilesResultSet = function(resultStream) {
    ListFilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare formatted in commas separated values.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListFiles, choreography.Choreography);
util.inherits(ListFilesInputSet, choreography.InputSet);
util.inherits(ListFilesResultSet, choreography.ResultSet);
exports.ListFiles = ListFiles;


/*
    ListRealFolders
    Returns all existing RealFolders
*/


var ListRealFolders = function(session) {
    /*
        Create a new instance of the ListRealFolders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/ListRealFolders"
    ListRealFolders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRealFoldersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRealFoldersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRealFolders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRealFoldersInputSet = function() {
    ListRealFoldersInputSet.super_.call(this);
        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListRealFolders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRealFoldersResultSet = function(resultStream) {
    ListRealFoldersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare formatted in commas separated values.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListRealFolders, choreography.Choreography);
util.inherits(ListRealFoldersInputSet, choreography.InputSet);
util.inherits(ListRealFoldersResultSet, choreography.ResultSet);
exports.ListRealFolders = ListRealFolders;


/*
    MoveFilesToRealFolder
    Move an existing file to a new folder in RapidShare.
*/


var MoveFilesToRealFolder = function(session) {
    /*
        Create a new instance of the MoveFilesToRealFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/MoveFilesToRealFolder"
    MoveFilesToRealFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MoveFilesToRealFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MoveFilesToRealFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MoveFilesToRealFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MoveFilesToRealFolderInputSet = function() {
    MoveFilesToRealFolderInputSet.super_.call(this);
        /*
        Set the value of the Files input for this Choreo. ((required, integer) The id of the file to move. Can be a commas separated list of ids.)
        */
        this.set_Files = function(value) {
            this.setInput("Files", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RealFolder input for this Choreo. ((optional, integer) The ID of the parent folder. Defaults to 0 for 'root'.)
        */
        this.set_RealFolder = function(value) {
            this.setInput("RealFolder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MoveFilesToRealFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MoveFilesToRealFolderResultSet = function(resultStream) {
    MoveFilesToRealFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare. The id of the newly created folder should be returned in the response upon a successful execution.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MoveFilesToRealFolder, choreography.Choreography);
util.inherits(MoveFilesToRealFolderInputSet, choreography.InputSet);
util.inherits(MoveFilesToRealFolderResultSet, choreography.ResultSet);
exports.MoveFilesToRealFolder = MoveFilesToRealFolder;


/*
    MoveRealFolder
    Changes the parent ID of existing RealFolders, enabling the location of the folder to be moved within a RapidShare account file hierarchy.
*/


var MoveRealFolder = function(session) {
    /*
        Create a new instance of the MoveRealFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/MoveRealFolder"
    MoveRealFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MoveRealFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MoveRealFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MoveRealFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MoveRealFolderInputSet = function() {
    MoveRealFolderInputSet.super_.call(this);
        /*
        Set the value of the FolderId input for this Choreo. ((required, integer) The id of the folder(s) to be moved. Can be a commas separated list of ids.)
        */
        this.set_FolderId = function(value) {
            this.setInput("FolderId", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the NewParent input for this Choreo. ((required, integer) Enter the ID of new parent folder)
        */
        this.set_NewParent = function(value) {
            this.setInput("NewParent", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MoveRealFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MoveRealFolderResultSet = function(resultStream) {
    MoveRealFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare. The id of the newly created folder should be returned in the response upon a successful execution.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MoveRealFolder, choreography.Choreography);
util.inherits(MoveRealFolderInputSet, choreography.InputSet);
util.inherits(MoveRealFolderResultSet, choreography.ResultSet);
exports.MoveRealFolder = MoveRealFolder;


/*
    RenameFile
    Renames a file to something else.
*/


var RenameFile = function(session) {
    /*
        Create a new instance of the RenameFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/RenameFile"
    RenameFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RenameFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RenameFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RenameFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RenameFileInputSet = function() {
    RenameFileInputSet.super_.call(this);
        /*
        Set the value of the FileId input for this Choreo. ((required, integer) The ID of the file to be renamed. Can be a commas separated list of ids.)
        */
        this.set_FileId = function(value) {
            this.setInput("FileId", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the NewFileName input for this Choreo. ((required, string) The new file name.)
        */
        this.set_NewFileName = function(value) {
            this.setInput("NewFileName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RenameFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RenameFileResultSet = function(resultStream) {
    RenameFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare. The ID of the newly created folder should be returned in the response upon a successful execution.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RenameFile, choreography.Choreography);
util.inherits(RenameFileInputSet, choreography.InputSet);
util.inherits(RenameFileResultSet, choreography.ResultSet);
exports.RenameFile = RenameFile;


/*
    SendMail
    Send an email that contains a link to a file available on RapidShare.
*/


var SendMail = function(session) {
    /*
        Create a new instance of the SendMail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/SendMail"
    SendMail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendMailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendMailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendMail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendMailInputSet = function() {
    SendMailInputSet.super_.call(this);
        /*
        Set the value of the Comment input for this Choreo. ((required, string) A comment that you want to send with the email)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Email1 input for this Choreo. ((required, string) The first email address to send to)
        */
        this.set_Email1 = function(value) {
            this.setInput("Email1", value);
        }

        /*
        Set the value of the Email2 input for this Choreo. ((optional, string) The second email address to send to)
        */
        this.set_Email2 = function(value) {
            this.setInput("Email2", value);
        }

        /*
        Set the value of the Email3 input for this Choreo. ((optional, string) The third email address to send to)
        */
        this.set_Email3 = function(value) {
            this.setInput("Email3", value);
        }

        /*
        Set the value of the FileID1 input for this Choreo. ((required, integer) The id for the file to inform the email recipient about)
        */
        this.set_FileID1 = function(value) {
            this.setInput("FileID1", value);
        }

        /*
        Set the value of the FileName1 input for this Choreo. ((required, string) The name of the file to inform the email recipient about)
        */
        this.set_FileName1 = function(value) {
            this.setInput("FileName1", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The senders name)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ReplyEmail input for this Choreo. ((required, string) The sender reply email address)
        */
        this.set_ReplyEmail = function(value) {
            this.setInput("ReplyEmail", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The subject line for the email)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendMail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendMailResultSet = function(resultStream) {
    SendMailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendMail, choreography.Choreography);
util.inherits(SendMailInputSet, choreography.InputSet);
util.inherits(SendMailResultSet, choreography.ResultSet);
exports.SendMail = SendMail;


/*
    Upload
    Upload a file to RapidShare.
*/


var Upload = function(session) {
    /*
        Create a new instance of the Upload Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RapidShare/Upload"
    Upload.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Upload
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadInputSet = function() {
    UploadInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((conditional, string) The base64 encoded contents of the file you want to upload. Required unless using the VaultFile alias (an advanced option used when running Choreos in the Temboo Designer).)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file you want to upload)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the Folder input for this Choreo. ((optional, integer) The id of the folder you want to upload the file to)
        */
        this.set_Folder = function(value) {
            this.setInput("Folder", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((required, string) Your RapidShare username)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your RapidShare password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to a file in your vault to upload. Required if FileContents input variable is not specified.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Upload Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadResultSet = function(resultStream) {
    UploadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from RapidShare formatted in commas separated values.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Upload, choreography.Choreography);
util.inherits(UploadInputSet, choreography.InputSet);
util.inherits(UploadResultSet, choreography.ResultSet);
exports.Upload = Upload;

