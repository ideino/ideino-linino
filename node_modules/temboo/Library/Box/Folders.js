
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CopyFolder
    Creates a copy of a folder in another folder.
*/


var CopyFolder = function(session) {
    /*
        Create a new instance of the CopyFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/CopyFolder"
    CopyFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CopyFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CopyFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CopyFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CopyFolderInputSet = function() {
    CopyFolderInputSet.super_.call(this);
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
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder to copy.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) An optional new name for the folder.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ParentID input for this Choreo. ((required, string) The ID of the destination folder to copy the folder to.)
        */
        this.set_ParentID = function(value) {
            this.setInput("ParentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CopyFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CopyFolderResultSet = function(resultStream) {
    CopyFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CopyFolder, choreography.Choreography);
util.inherits(CopyFolderInputSet, choreography.InputSet);
util.inherits(CopyFolderResultSet, choreography.ResultSet);
exports.CopyFolder = CopyFolder;


/*
    CreateFolder
    Creates a new folder in the parent folder you specify.
*/


var CreateFolder = function(session) {
    /*
        Create a new instance of the CreateFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/CreateFolder"
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the folder to create.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ParentID input for this Choreo. ((optional, string) The ID of the parent folder in which to create the new folder. Defaults to 0 indicating the "root" folder.)
        */
        this.set_ParentID = function(value) {
            this.setInput("ParentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateFolderResultSet = function(resultStream) {
    CreateFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
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
    CreateSharedLink
    Creates a shared link for a particular folder.
*/


var CreateSharedLink = function(session) {
    /*
        Create a new instance of the CreateSharedLink Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/CreateSharedLink"
    CreateSharedLink.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSharedLinkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSharedLinkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSharedLink
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSharedLinkInputSet = function() {
    CreateSharedLinkInputSet.super_.call(this);
        /*
        Set the value of the SharedLink input for this Choreo. ((required, json) A JSON object  representing the item’s shared link and associated permissions. See documentation for formatting examples.)
        */
        this.set_SharedLink = function(value) {
            this.setInput("SharedLink", value);
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
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder to get a shared link for.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSharedLink Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSharedLinkResultSet = function(resultStream) {
    CreateSharedLinkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateSharedLink, choreography.Choreography);
util.inherits(CreateSharedLinkInputSet, choreography.InputSet);
util.inherits(CreateSharedLinkResultSet, choreography.ResultSet);
exports.CreateSharedLink = CreateSharedLink;


/*
    DeleteFolder
    Deletes a specified folder.
*/


var DeleteFolder = function(session) {
    /*
        Create a new instance of the DeleteFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/DeleteFolder"
    DeleteFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteFolderInputSet = function() {
    DeleteFolderInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder that you want to delete.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Recursive input for this Choreo. ((optional, boolean) Whether or not to delete this folder if it has items within in. Defaults to true.)
        */
        this.set_Recursive = function(value) {
            this.setInput("Recursive", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFolderResultSet = function(resultStream) {
    DeleteFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteFolder, choreography.Choreography);
util.inherits(DeleteFolderInputSet, choreography.InputSet);
util.inherits(DeleteFolderResultSet, choreography.ResultSet);
exports.DeleteFolder = DeleteFolder;


/*
    GetFolderInformation
    Retrieves information for a specified folder.
*/


var GetFolderInformation = function(session) {
    /*
        Create a new instance of the GetFolderInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/GetFolderInformation"
    GetFolderInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFolderInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFolderInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFolderInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFolderInformationInputSet = function() {
    GetFolderInformationInputSet.super_.call(this);
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
        Set the value of the FolderID input for this Choreo. ((conditional, string) The id of the folder that you want to retrieve information for. Defaults to 0 indicating the "root" folder.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetFolderInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFolderInformationResultSet = function(resultStream) {
    GetFolderInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFolderInformation, choreography.Choreography);
util.inherits(GetFolderInformationInputSet, choreography.InputSet);
util.inherits(GetFolderInformationResultSet, choreography.ResultSet);
exports.GetFolderInformation = GetFolderInformation;


/*
    RetrieveFolderItems
    Retrieves only the files and/or folders contained within the specified folder.
*/


var RetrieveFolderItems = function(session) {
    /*
        Create a new instance of the RetrieveFolderItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/RetrieveFolderItems"
    RetrieveFolderItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveFolderItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveFolderItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveFolderItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveFolderItemsInputSet = function() {
    RetrieveFolderItemsInputSet.super_.call(this);
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
        Set the value of the FolderID input for this Choreo. ((conditional, string) The id of the folder that you want to retrieve items for. Defaults to 0 indicating the "root" folder.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of items to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The item at which to begin the response.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveFolderItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveFolderItemsResultSet = function(resultStream) {
    RetrieveFolderItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveFolderItems, choreography.Choreography);
util.inherits(RetrieveFolderItemsInputSet, choreography.InputSet);
util.inherits(RetrieveFolderItemsResultSet, choreography.ResultSet);
exports.RetrieveFolderItems = RetrieveFolderItems;


/*
    UpdateFolder
    Updates the information about a folder.
*/


var UpdateFolder = function(session) {
    /*
        Create a new instance of the UpdateFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/UpdateFolder"
    UpdateFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateFolderInputSet = function() {
    UpdateFolderInputSet.super_.call(this);
        /*
        Set the value of the FolderObject input for this Choreo. ((required, json) A JSON object representing the new folder information. See documentation for formatting examples.)
        */
        this.set_FolderObject = function(value) {
            this.setInput("FolderObject", value);
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
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder to update.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateFolderResultSet = function(resultStream) {
    UpdateFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateFolder, choreography.Choreography);
util.inherits(UpdateFolderInputSet, choreography.InputSet);
util.inherits(UpdateFolderResultSet, choreography.ResultSet);
exports.UpdateFolder = UpdateFolder;


/*
    ZipFolder
    Creates a zip file containing all files within the specified folder and returns a link to the new compressed file.
*/


var ZipFolder = function(session) {
    /*
        Create a new instance of the ZipFolder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Folders/ZipFolder"
    ZipFolder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ZipFolderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ZipFolderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ZipFolder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ZipFolderInputSet = function() {
    ZipFolderInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FolderID input for this Choreo. ((conditional, string) The id of the folder that you want to retrieve items for to zip. To indicate the root folder, specify 0.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the SharedLink input for this Choreo. ((conditional, json) A JSON object  representing the item’s shared link and associated permissions. See documentation for formatting examples.)
        */
        this.set_SharedLink = function(value) {
            this.setInput("SharedLink", value);
        }

        /*
        Set the value of the ZipFileLocation input for this Choreo. ((optional, string) The id of the folder to put the new zip file in. When not specified, the zip file will be put in the root folder.)
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
A ResultSet with methods tailored to the values returned by the ZipFolder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ZipFolderResultSet = function(resultStream) {
    ZipFolderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URL" output from this Choreo execution. ((string) The url for the newly created zip file.)
        */
        this.get_URL = function() {
            return this.getResult("URL");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box. This contains the newly created zip file metadata.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ZipFolder, choreography.Choreography);
util.inherits(ZipFolderInputSet, choreography.InputSet);
util.inherits(ZipFolderResultSet, choreography.ResultSet);
exports.ZipFolder = ZipFolder;

