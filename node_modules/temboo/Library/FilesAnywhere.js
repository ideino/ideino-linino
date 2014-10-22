
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AccountLogin
    Retrieves an authentication token from FilesAnywhere.
*/


var AccountLogin = function(session) {
    /*
        Create a new instance of the AccountLogin Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/AccountLogin"
    AccountLogin.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AccountLoginResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AccountLoginInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AccountLogin
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AccountLoginInputSet = function() {
    AccountLoginInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by FilesAnywhere.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AllowedIPList input for this Choreo. ((optional, string) List of allowed IP addresses.  Multiple IP addresses can be separated by commas.)
        */
        this.set_AllowedIPList = function(value) {
            this.setInput("AllowedIPList", value);
        }

        /*
        Set the value of the ClientEncryptParam input for this Choreo. ((optional, string) Used to return an encrypted password to use for subsequent logins.)
        */
        this.set_ClientEncryptParam = function(value) {
            this.setInput("ClientEncryptParam", value);
        }

        /*
        Set the value of the OrgID input for this Choreo. ((optional, integer) Defaults to 0 for a FilesAnywhere Web account.  Use 50 for a FilesAnywhere WebAdvanced account.)
        */
        this.set_OrgID = function(value) {
            this.setInput("OrgID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your FilesAnywhere password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your FilesAnywhere username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AccountLogin Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AccountLoginResultSet = function(resultStream) {
    AccountLoginResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((string) The token value parsed from the FilesAnywhere response.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AccountLogin, choreography.Choreography);
util.inherits(AccountLoginInputSet, choreography.InputSet);
util.inherits(AccountLoginResultSet, choreography.ResultSet);
exports.AccountLogin = AccountLogin;


/*
    AccountLogout
    Logout a user.
*/


var AccountLogout = function(session) {
    /*
        Create a new instance of the AccountLogout Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/AccountLogout"
    AccountLogout.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AccountLogoutResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AccountLogoutInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AccountLogout
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AccountLogoutInputSet = function() {
    AccountLogoutInputSet.super_.call(this);
        /*
        Set the value of the Token input for this Choreo. ((required, string) The token retrieved from authentication.  Can be passed from the AccountLogin Choreo.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AccountLogout Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AccountLogoutResultSet = function(resultStream) {
    AccountLogoutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AccountLogout, choreography.Choreography);
util.inherits(AccountLogoutInputSet, choreography.InputSet);
util.inherits(AccountLogoutResultSet, choreography.ResultSet);
exports.AccountLogout = AccountLogout;


/*
    AddItemComment
    Add a comment to an item.
*/


var AddItemComment = function(session) {
    /*
        Create a new instance of the AddItemComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/AddItemComment"
    AddItemComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddItemCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddItemCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddItemComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddItemCommentInputSet = function() {
    AddItemCommentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Comment input for this Choreo. ((required, string) Enter item comment.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the FullName input for this Choreo. ((required, string) Provide the full name of the user entering the comment.)
        */
        this.set_FullName = function(value) {
            this.setInput("FullName", value);
        }

        /*
        Set the value of the ParentID input for this Choreo. ((required, integer) Specify the ID of the parent comment.)
        */
        this.set_ParentID = function(value) {
            this.setInput("ParentID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) Enter the path to the item in the following format: \USERNAME\file.txt)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddItemComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddItemCommentResultSet = function(resultStream) {
    AddItemCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(AddItemComment, choreography.Choreography);
util.inherits(AddItemCommentInputSet, choreography.InputSet);
util.inherits(AddItemCommentResultSet, choreography.ResultSet);
exports.AddItemComment = AddItemComment;


/*
    CreateFolder
    Create a new folder.
*/


var CreateFolder = function(session) {
    /*
        Create a new instance of the CreateFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/CreateFolder"
    CreateFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateFolderInputSet = function() {
    CreateFolderInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the NewFolderName input for this Choreo. ((required, string) Enter a name for the new folder.)
        */
        this.set_NewFolderName = function(value) {
            this.setInput("NewFolderName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the folder you want to create (i.e. \JOHNSMITH\MyFolder).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateFolderResultSet = function(resultStream) {
    CreateFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateFolder, choreography.Choreography);
util.inherits(CreateFolderInputSet, choreography.InputSet);
util.inherits(CreateFolderResultSet, choreography.ResultSet);
exports.CreateFolder = CreateFolder;


/*
    DeleteItem
    Deletes a file from a specified directory in your FilesAnywhere account.
*/


var DeleteItem = function(session) {
    /*
        Create a new instance of the DeleteItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/DeleteItem"
    DeleteItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteItemInputSet = function() {
    DeleteItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file you want to delete (i.e. \JOHNSMITH\MyFolder\MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of item you are deleting. Can be set to 'file' or 'folder'. Defaults to 'file'.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteItemResultSet = function(resultStream) {
    DeleteItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteItem, choreography.Choreography);
util.inherits(DeleteItemInputSet, choreography.InputSet);
util.inherits(DeleteItemResultSet, choreography.ResultSet);
exports.DeleteItem = DeleteItem;


/*
    DownloadBase64EncodedFile
    Downloads a file from a specified directory in your FilesAnywhere account, and returns the content as Base64 encoded data.
*/


var DownloadBase64EncodedFile = function(session) {
    /*
        Create a new instance of the DownloadBase64EncodedFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/DownloadBase64EncodedFile"
    DownloadBase64EncodedFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadBase64EncodedFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadBase64EncodedFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadBase64EncodedFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadBase64EncodedFileInputSet = function() {
    DownloadBase64EncodedFileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file you want to download (i.e. \JOHNSMITH\MyFolder\MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DownloadBase64EncodedFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadBase64EncodedFileResultSet = function(resultStream) {
    DownloadBase64EncodedFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from FilesAnywhere. The response contains the Base64 encoded content of the file you are downloading.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(DownloadBase64EncodedFile, choreography.Choreography);
util.inherits(DownloadBase64EncodedFileInputSet, choreography.InputSet);
util.inherits(DownloadBase64EncodedFileResultSet, choreography.ResultSet);
exports.DownloadBase64EncodedFile = DownloadBase64EncodedFile;


/*
    FileProperties
    Lists file property information.
*/


var FileProperties = function(session) {
    /*
        Create a new instance of the FileProperties Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/FileProperties"
    FileProperties.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilePropertiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilePropertiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FileProperties
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilePropertiesInputSet = function() {
    FilePropertiesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file you want to retrieve properties for (i.e. \JOHNSMITH\MyFolder\MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FileProperties Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilePropertiesResultSet = function(resultStream) {
    FilePropertiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(FileProperties, choreography.Choreography);
util.inherits(FilePropertiesInputSet, choreography.InputSet);
util.inherits(FilePropertiesResultSet, choreography.ResultSet);
exports.FileProperties = FileProperties;


/*
    ItemCommentsList
    Get the comments list of an item.
*/


var ItemCommentsList = function(session) {
    /*
        Create a new instance of the ItemCommentsList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/ItemCommentsList"
    ItemCommentsList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ItemCommentsListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ItemCommentsListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ItemCommentsList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ItemCommentsListInputSet = function() {
    ItemCommentsListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ItemPath input for this Choreo. ((required, string) Enter the path to the item in the following format: \USERNAME\file.txt)
        */
        this.set_ItemPath = function(value) {
            this.setInput("ItemPath", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ItemCommentsList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ItemCommentsListResultSet = function(resultStream) {
    ItemCommentsListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(ItemCommentsList, choreography.Choreography);
util.inherits(ItemCommentsListInputSet, choreography.InputSet);
util.inherits(ItemCommentsListResultSet, choreography.ResultSet);
exports.ItemCommentsList = ItemCommentsList;


/*
    ListItems
    Lists files within a specified directory in your FilesAnywhere account.
*/


var ListItems = function(session) {
    /*
        Create a new instance of the ListItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/ListItems"
    ListItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListItemsInputSet = function() {
    ListItemsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PageNum input for this Choreo. ((optional, integer) The page number to return. Can be used to page through large result sets. Defaults to 1.)
        */
        this.set_PageNum = function(value) {
            this.setInput("PageNum", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results to return per page. Defaults to 10.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the folder that you want to list items for (i.e. \JOHNSMITH\MyFolder).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListItemsResultSet = function(resultStream) {
    ListItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(ListItems, choreography.Choreography);
util.inherits(ListItemsInputSet, choreography.InputSet);
util.inherits(ListItemsResultSet, choreography.ResultSet);
exports.ListItems = ListItems;


/*
    ListUserVolumes
    List user volumes.
*/


var ListUserVolumes = function(session) {
    /*
        Create a new instance of the ListUserVolumes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/ListUserVolumes"
    ListUserVolumes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUserVolumesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUserVolumesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUserVolumes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUserVolumesInputSet = function() {
    ListUserVolumesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListUserVolumes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUserVolumesResultSet = function(resultStream) {
    ListUserVolumesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(ListUserVolumes, choreography.Choreography);
util.inherits(ListUserVolumesInputSet, choreography.InputSet);
util.inherits(ListUserVolumesResultSet, choreography.ResultSet);
exports.ListUserVolumes = ListUserVolumes;


/*
    RenameItem
    Rename an item.
*/


var RenameItem = function(session) {
    /*
        Create a new instance of the RenameItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/RenameItem"
    RenameItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RenameItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RenameItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RenameItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RenameItemInputSet = function() {
    RenameItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the NewName input for this Choreo. ((required, string) Enter the new name for the item.)
        */
        this.set_NewName = function(value) {
            this.setInput("NewName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The path to the file you want to rename (i.e. \JOHNSMITH\MyFolder\MyFile.txt).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) Specify the type of file being renamed by entering: folder, OR, file.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RenameItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RenameItemResultSet = function(resultStream) {
    RenameItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RenameItem, choreography.Choreography);
util.inherits(RenameItemInputSet, choreography.InputSet);
util.inherits(RenameItemResultSet, choreography.ResultSet);
exports.RenameItem = RenameItem;


/*
    UploadFile
    Uploads a file to a specified directory in your FilesAnywhere account.
*/


var UploadFile = function(session) {
    /*
        Create a new instance of the UploadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/UploadFile"
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
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the FileContents input for this Choreo. ((optional, string) The base64 encoded file contents of the file you want to upload. Required unless using the VaultFile alias (an advanced option used when running Choreos in the Temboo Designer).)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) The file path that you want to use for the upload (i.e. \JOHNSMITH\MyFolder\MyFile.txt))
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
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
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(UploadFile, choreography.Choreography);
util.inherits(UploadFileInputSet, choreography.InputSet);
util.inherits(UploadFileResultSet, choreography.ResultSet);
exports.UploadFile = UploadFile;


/*
    ViewFile
    Generate a URL from which a file can be viewed.
*/


var ViewFile = function(session) {
    /*
        Create a new instance of the ViewFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FilesAnywhere/ViewFile"
    ViewFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ViewFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ViewFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ViewFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ViewFileInputSet = function() {
    ViewFileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((conditional, string) The API Key provided by FilesAnywhere. Required unless supplying a valid Token input.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your FilesAnywhere password. Required unless supplying a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((required, string) Enter the path to the item being viewed in the following format: \USERNAME\file.txt)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) Your FilesAnywhere username. Required unless supplying a valid Token input.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ViewFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ViewFileResultSet = function(resultStream) {
    ViewFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FilesAnywhere.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when APIKey, Username, and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(ViewFile, choreography.Choreography);
util.inherits(ViewFileInputSet, choreography.InputSet);
util.inherits(ViewFileResultSet, choreography.ResultSet);
exports.ViewFile = ViewFile;

