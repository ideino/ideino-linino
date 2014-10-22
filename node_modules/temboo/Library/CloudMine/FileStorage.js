
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteFile
    Deletes one or more files from the CloudMine server using the keys provided.
*/


var DeleteFile = function(session) {
    /*
        Create a new instance of the DeleteFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/FileStorage/DeleteFile"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the Keys input for this Choreo. ((required, string) A comma-separated list of keys to delete.)
        */
        this.set_Keys = function(value) {
            this.setInput("Keys", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to the vault file to upload. This can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFileResultSet = function(resultStream) {
    DeleteFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
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
    GetFile
    Retrieves a file from the CloudMine server with a given key.
*/


var GetFile = function(session) {
    /*
        Create a new instance of the GetFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/FileStorage/GetFile"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the Key input for this Choreo. ((required, string) The key whose value you want.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to the vault file to upload. This can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFileResultSet = function(resultStream) {
    GetFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
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
    SetFile
    Allows you to update or create a file on the CloudMine server.
*/


var SetFile = function(session) {
    /*
        Create a new instance of the SetFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/FileStorage/SetFile"
    SetFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetFileInputSet = function() {
    SetFileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((optional, string) The Content-Type of the file you are creating or updating. This defaults to application/octet-stream.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the FileContents input for this Choreo. ((conditional, string) The Base64 encoded contents of the file.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the Key input for this Choreo. ((optional, string) A key for the file you are uploading. If provided, the file will be stored with this key; otherwise, a key will be generated and returned.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to the vault file to upload. This can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the SetFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetFileResultSet = function(resultStream) {
    SetFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetFile, choreography.Choreography);
util.inherits(SetFileInputSet, choreography.InputSet);
util.inherits(SetFileResultSet, choreography.ResultSet);
exports.SetFile = SetFile;

