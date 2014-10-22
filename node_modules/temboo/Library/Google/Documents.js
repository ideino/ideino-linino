
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ClientLoginAuthentication
    Request an authorization token for Google Documents.
*/


var ClientLoginAuthentication = function(session) {
    /*
        Create a new instance of the ClientLoginAuthentication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/ClientLoginAuthentication"
    ClientLoginAuthentication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ClientLoginAuthenticationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ClientLoginAuthenticationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ClientLoginAuthentication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ClientLoginAuthenticationInputSet = function() {
    ClientLoginAuthenticationInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ClientLoginAuthentication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ClientLoginAuthenticationResultSet = function(resultStream) {
    ClientLoginAuthenticationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Stores the response from Google login.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AuthorizationKey" output from this Choreo execution. ((string) The authorization token parsed from the Google login response.)
        */
        this.get_AuthorizationKey = function() {
            return this.getResult("AuthorizationKey");
        }
}

util.inherits(ClientLoginAuthentication, choreography.Choreography);
util.inherits(ClientLoginAuthenticationInputSet, choreography.InputSet);
util.inherits(ClientLoginAuthenticationResultSet, choreography.ResultSet);
exports.ClientLoginAuthentication = ClientLoginAuthentication;


/*
    CopyDocument
    Copies a document with the title you specify.
*/


var CopyDocument = function(session) {
    /*
        Create a new instance of the CopyDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/CopyDocument"
    CopyDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CopyDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CopyDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CopyDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CopyDocumentInputSet = function() {
    CopyDocumentInputSet.super_.call(this);
        /*
        Set the value of the NewTitle input for this Choreo. ((required, string) The title for the new, copied document.)
        */
        this.set_NewTitle = function(value) {
            this.setInput("NewTitle", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document to copy. Enclose in quotation marks for an exact, non-case-sensitive match.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CopyDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CopyDocumentResultSet = function(resultStream) {
    CopyDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CopyDocument, choreography.Choreography);
util.inherits(CopyDocumentInputSet, choreography.InputSet);
util.inherits(CopyDocumentResultSet, choreography.ResultSet);
exports.CopyDocument = CopyDocument;


/*
    CreateEmptyDocument
    Create a new, empty document.
*/


var CreateEmptyDocument = function(session) {
    /*
        Create a new instance of the CreateEmptyDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/CreateEmptyDocument"
    CreateEmptyDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateEmptyDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateEmptyDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateEmptyDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateEmptyDocumentInputSet = function() {
    CreateEmptyDocumentInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the new document to create.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEmptyDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEmptyDocumentResultSet = function(resultStream) {
    CreateEmptyDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResourceID" output from this Choreo execution. ((string) The document resource ID returned from Google.)
        */
        this.get_ResourceID = function() {
            return this.getResult("ResourceID");
        }
        /*
        Retrieve the value for the "EditLink" output from this Choreo execution. (The edit link URL parsed from the Google response.)
        */
        this.get_EditLink = function() {
            return this.getResult("EditLink");
        }
}

util.inherits(CreateEmptyDocument, choreography.Choreography);
util.inherits(CreateEmptyDocumentInputSet, choreography.InputSet);
util.inherits(CreateEmptyDocumentResultSet, choreography.ResultSet);
exports.CreateEmptyDocument = CreateEmptyDocument;


/*
    CreateSharingPermission
    Grants a new user read/write access to an existing document.
*/


var CreateSharingPermission = function(session) {
    /*
        Create a new instance of the CreateSharingPermission Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/CreateSharingPermission"
    CreateSharingPermission.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSharingPermissionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSharingPermissionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSharingPermission
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSharingPermissionInputSet = function() {
    CreateSharingPermissionInputSet.super_.call(this);
        /*
        Set the value of the NewUserEmail input for this Choreo. ((required, string) The email address of the user to whom you want to grant permission.)
        */
        this.set_NewUserEmail = function(value) {
            this.setInput("NewUserEmail", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google passsword.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Role input for this Choreo. ((optional, string) The role that will be given to the new user permission (i.e., writer, reader, etc). Defaults to "writer".)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSharingPermission Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSharingPermissionResultSet = function(resultStream) {
    CreateSharingPermissionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResourceID" output from this Choreo execution. ((string) The resource ID of the document to which you want to add a user.)
        */
        this.get_ResourceID = function() {
            return this.getResult("ResourceID");
        }
}

util.inherits(CreateSharingPermission, choreography.Choreography);
util.inherits(CreateSharingPermissionInputSet, choreography.InputSet);
util.inherits(CreateSharingPermissionResultSet, choreography.ResultSet);
exports.CreateSharingPermission = CreateSharingPermission;


/*
    DeleteDocumentOrFile
    Permanently deletes the document or file you specify.
*/


var DeleteDocumentOrFile = function(session) {
    /*
        Create a new instance of the DeleteDocumentOrFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/DeleteDocumentOrFile"
    DeleteDocumentOrFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDocumentOrFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDocumentOrFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDocumentOrFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDocumentOrFileInputSet = function() {
    DeleteDocumentOrFileInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResourceID input for this Choreo. ((required, string) The resource ID for the document or file to delete.)
        */
        this.set_ResourceID = function(value) {
            this.setInput("ResourceID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDocumentOrFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDocumentOrFileResultSet = function(resultStream) {
    DeleteDocumentOrFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (There is no XML response for delete requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDocumentOrFile, choreography.Choreography);
util.inherits(DeleteDocumentOrFileInputSet, choreography.InputSet);
util.inherits(DeleteDocumentOrFileResultSet, choreography.ResultSet);
exports.DeleteDocumentOrFile = DeleteDocumentOrFile;


/*
    DownloadBase64EncodedDocument
    Downloads a document with the title you specify, and returns the content as Base64 encoded data.
*/


var DownloadBase64EncodedDocument = function(session) {
    /*
        Create a new instance of the DownloadBase64EncodedDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/DownloadBase64EncodedDocument"
    DownloadBase64EncodedDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadBase64EncodedDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadBase64EncodedDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadBase64EncodedDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadBase64EncodedDocumentInputSet = function() {
    DownloadBase64EncodedDocumentInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format you want to export the document to, such as "doc", "txt", "pdf", etc. The default download format is HTML.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((conditional, string) Enter the source links for the document to be retrieved. Required unless specifying the Title.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the document to download. Required unless specifying the download Link.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DownloadBase64EncodedDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadBase64EncodedDocumentResultSet = function(resultStream) {
    DownloadBase64EncodedDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FileContents" output from this Choreo execution. ((string) The Base64 encoded file content of the downloaded file.)
        */
        this.get_FileContents = function() {
            return this.getResult("FileContents");
        }
}

util.inherits(DownloadBase64EncodedDocument, choreography.Choreography);
util.inherits(DownloadBase64EncodedDocumentInputSet, choreography.InputSet);
util.inherits(DownloadBase64EncodedDocumentResultSet, choreography.ResultSet);
exports.DownloadBase64EncodedDocument = DownloadBase64EncodedDocument;


/*
    GetAccountInfo
    Retrieves information about a specified Google Documents account.
*/


var GetAccountInfo = function(session) {
    /*
        Create a new instance of the GetAccountInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/GetAccountInfo"
    GetAccountInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountInfoInputSet = function() {
    GetAccountInfoInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountInfoResultSet = function(resultStream) {
    GetAccountInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountInfo, choreography.Choreography);
util.inherits(GetAccountInfoInputSet, choreography.InputSet);
util.inherits(GetAccountInfoResultSet, choreography.ResultSet);
exports.GetAccountInfo = GetAccountInfo;


/*
    GetAllDocuments
    Retrieves a list of all documents, files, and collections in a Google account.
*/


var GetAllDocuments = function(session) {
    /*
        Create a new instance of the GetAllDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/GetAllDocuments"
    GetAllDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllDocumentsInputSet = function() {
    GetAllDocumentsInputSet.super_.call(this);
        /*
        Set the value of the Deleted input for this Choreo. ((optional, boolean) Returns deleted documents when set to "true" (the default). Skips deleted documents when set to "false".)
        */
        this.set_Deleted = function(value) {
            this.setInput("Deleted", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllDocumentsResultSet = function(resultStream) {
    GetAllDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllDocuments, choreography.Choreography);
util.inherits(GetAllDocumentsInputSet, choreography.InputSet);
util.inherits(GetAllDocumentsResultSet, choreography.ResultSet);
exports.GetAllDocuments = GetAllDocuments;


/*
    RenameDocumentOrFile
    Rename a document or file with the new title you specify.
*/


var RenameDocumentOrFile = function(session) {
    /*
        Create a new instance of the RenameDocumentOrFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/RenameDocumentOrFile"
    RenameDocumentOrFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RenameDocumentOrFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RenameDocumentOrFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RenameDocumentOrFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RenameDocumentOrFileInputSet = function() {
    RenameDocumentOrFileInputSet.super_.call(this);
        /*
        Set the value of the NewTitle input for this Choreo. ((required, string) The new title for the document. It will appear exactly as you type it, so be sure to use the proper capitalization.)
        */
        this.set_NewTitle = function(value) {
            this.setInput("NewTitle", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document to rename.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RenameDocumentOrFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RenameDocumentOrFileResultSet = function(resultStream) {
    RenameDocumentOrFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "EditLink" output from this Choreo execution. ((string) The edit link URL for the document to rename, parsed from the Google response.)
        */
        this.get_EditLink = function() {
            return this.getResult("EditLink");
        }
}

util.inherits(RenameDocumentOrFile, choreography.Choreography);
util.inherits(RenameDocumentOrFileInputSet, choreography.InputSet);
util.inherits(RenameDocumentOrFileResultSet, choreography.ResultSet);
exports.RenameDocumentOrFile = RenameDocumentOrFile;


/*
    SearchByCategory
    Retrieves a list of all resources in a category you specify.
*/


var SearchByCategory = function(session) {
    /*
        Create a new instance of the SearchByCategory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/SearchByCategory"
    SearchByCategory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByCategoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByCategoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByCategory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByCategoryInputSet = function() {
    SearchByCategoryInputSet.super_.call(this);
        /*
        Set the value of the Category input for this Choreo. ((required, string) The category to list: "document", "spreadsheet", "presentation", "drawing", "folder", "starred", or "trashed". Combine multiple categories with "/".)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the MyDocs input for this Choreo. ((optional, boolean) Enter "true" to return resources for the requesting user only. The default is "false" (returns all account resources).)
        */
        this.set_MyDocs = function(value) {
            this.setInput("MyDocs", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the Viewed input for this Choreo. ((optional, boolean) Enter "true" to return only viewed resources for the specified category. The default is "false" (viewed and unviewed category resources).)
        */
        this.set_Viewed = function(value) {
            this.setInput("Viewed", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCategory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCategoryResultSet = function(resultStream) {
    SearchByCategoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByCategory, choreography.Choreography);
util.inherits(SearchByCategoryInputSet, choreography.InputSet);
util.inherits(SearchByCategoryResultSet, choreography.ResultSet);
exports.SearchByCategory = SearchByCategory;


/*
    SearchByTitle
    Retrieves information for a file with the title you specify.
*/


var SearchByTitle = function(session) {
    /*
        Create a new instance of the SearchByTitle Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/SearchByTitle"
    SearchByTitle.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByTitleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByTitleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByTitle
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByTitleInputSet = function() {
    SearchByTitleInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document to search for. Enclose in quotation marks for an exact, non-case-sensitive match.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByTitle Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByTitleResultSet = function(resultStream) {
    SearchByTitleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "EditMediaLink" output from this Choreo execution. ((string) The 'resumable-edit-media' link of the document. This link is used when editing the content of an existing Google doc.)
        */
        this.get_EditMediaLink = function() {
            return this.getResult("EditMediaLink");
        }
        /*
        Retrieve the value for the "EditMetaDataLink" output from this Choreo execution. ((string) The 'edit' link of the document. This link is used when editing the metadata of an existing Google doc.)
        */
        this.get_EditMetaDataLink = function() {
            return this.getResult("EditMetaDataLink");
        }
        /*
        Retrieve the value for the "ResourceID" output from this Choreo execution. ((string) The document resource ID returned from Google.)
        */
        this.get_ResourceID = function() {
            return this.getResult("ResourceID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByTitle, choreography.Choreography);
util.inherits(SearchByTitleInputSet, choreography.InputSet);
util.inherits(SearchByTitleResultSet, choreography.ResultSet);
exports.SearchByTitle = SearchByTitle;


/*
    SearchByType
    Retrieves a list of all files of a MIME type you specify.
*/


var SearchByType = function(session) {
    /*
        Create a new instance of the SearchByType Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/SearchByType"
    SearchByType.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByTypeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByTypeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByType
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByTypeInputSet = function() {
    SearchByTypeInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The MIME type of the files to list: word, excel, powerpoint, pdf, csv, rtf, html, css, xml, plaintext, zip, jpg, or png.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByType Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByTypeResultSet = function(resultStream) {
    SearchByTypeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByType, choreography.Choreography);
util.inherits(SearchByTypeInputSet, choreography.InputSet);
util.inherits(SearchByTypeResultSet, choreography.ResultSet);
exports.SearchByType = SearchByType;


/*
    SearchForShared
    Retrieves a list of all documents shared by the two users you specify.
*/


var SearchForShared = function(session) {
    /*
        Create a new instance of the SearchForShared Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/SearchForShared"
    SearchForShared.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchForSharedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchForSharedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchForShared
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchForSharedInputSet = function() {
    SearchForSharedInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the User1 input for this Choreo. ((required, string) The email address of the first document collaborator.)
        */
        this.set_User1 = function(value) {
            this.setInput("User1", value);
        }

        /*
        Set the value of the User2 input for this Choreo. ((required, string) The email address for the second document collaborator.)
        */
        this.set_User2 = function(value) {
            this.setInput("User2", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchForShared Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchForSharedResultSet = function(resultStream) {
    SearchForSharedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchForShared, choreography.Choreography);
util.inherits(SearchForSharedInputSet, choreography.InputSet);
util.inherits(SearchForSharedResultSet, choreography.ResultSet);
exports.SearchForShared = SearchForShared;


/*
    ToggleProperties
    Toggle settings for a document or file on or off, depending on its current state.
*/


var ToggleProperties = function(session) {
    /*
        Create a new instance of the ToggleProperties Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/ToggleProperties"
    ToggleProperties.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TogglePropertiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TogglePropertiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ToggleProperties
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TogglePropertiesInputSet = function() {
    TogglePropertiesInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document with the properties you want to toggle. Enclose in quotation marks for an exact, non-case-sensitive match.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ToggleProperties Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TogglePropertiesResultSet = function(resultStream) {
    TogglePropertiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "EditLink" output from this Choreo execution. ((string) The edit link URL for the document, parsed from the Google response.)
        */
        this.get_EditLink = function() {
            return this.getResult("EditLink");
        }
}

util.inherits(ToggleProperties, choreography.Choreography);
util.inherits(TogglePropertiesInputSet, choreography.InputSet);
util.inherits(TogglePropertiesResultSet, choreography.ResultSet);
exports.ToggleProperties = ToggleProperties;


/*
    TrashDocumentOrFile
    Move the document or file you specify to the Google Documents trash.
*/


var TrashDocumentOrFile = function(session) {
    /*
        Create a new instance of the TrashDocumentOrFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/TrashDocumentOrFile"
    TrashDocumentOrFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrashDocumentOrFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrashDocumentOrFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TrashDocumentOrFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrashDocumentOrFileInputSet = function() {
    TrashDocumentOrFileInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document or file to trash. Enclose in quotation marks for an exact, non-case-sensitive match.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TrashDocumentOrFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrashDocumentOrFileResultSet = function(resultStream) {
    TrashDocumentOrFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResourceID" output from this Choreo execution. ((string) The resource ID for the document to trash as returned by Google.)
        */
        this.get_ResourceID = function() {
            return this.getResult("ResourceID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TrashDocumentOrFile, choreography.Choreography);
util.inherits(TrashDocumentOrFileInputSet, choreography.InputSet);
util.inherits(TrashDocumentOrFileResultSet, choreography.ResultSet);
exports.TrashDocumentOrFile = TrashDocumentOrFile;


/*
    UpdateFile
    Updates the content of an existing Google document.
*/


var UpdateFile = function(session) {
    /*
        Create a new instance of the UpdateFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/UpdateFile"
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
        Set the value of the FileContents input for this Choreo. ((conditional, string) The base64-encoded contents of the file you want to update.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((required, string) Enter the content type for the file. Currently, the supported content types are: application/pdf, application/rtf, application/msword, application/vnd.ms-excel, text/plain, and text/csv.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for your Google account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the document that you want to update.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the Vault file to upload. This can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateFileResultSet = function(resultStream) {
    UpdateFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
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
    Uploads MS Word, Excel, or plain text documents to a Google account.
*/


var UploadFile = function(session) {
    /*
        Create a new instance of the UploadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Documents/UploadFile"
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
        Set the value of the FileContents input for this Choreo. ((conditional, string) The base64-encoded contents of the file you want to upload. Required unless using the VaultFile alias input (an advnaced option used when running Choreos in the Temboo Designer).)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((required, string) Enter the content type for the file. Currently, the supported content types are: application/pdf, application/rtf, application/msword, application/vnd.ms-excel, text/plain, and text/csv.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for your Google account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The name for the file you're uploading.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the Vault file to upload. Required unless using the FileContents input variable instead.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadFileResultSet = function(resultStream) {
    UploadFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the Google Documents API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadFile, choreography.Choreography);
util.inherits(UploadFileInputSet, choreography.InputSet);
util.inherits(UploadFileResultSet, choreography.ResultSet);
exports.UploadFile = UploadFile;

