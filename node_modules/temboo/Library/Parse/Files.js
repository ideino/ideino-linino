
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AssociateWithObject
    Allows you to associate a previously uploaded file with Parse objects.
*/


var AssociateWithObject = function(session) {
    /*
        Create a new instance of the AssociateWithObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Files/AssociateWithObject"
    AssociateWithObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AssociateWithObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AssociateWithObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AssociateWithObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AssociateWithObjectInputSet = function() {
    AssociateWithObjectInputSet.super_.call(this);
        /*
        Set the value of the Association input for this Choreo. ((required, json) A JSON string containing the file information that is to be associated with the Parse object. See documentation for formatting examples.)
        */
        this.set_Association = function(value) {
            this.setInput("Association", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The name of the class that a file is being associated with.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AssociateWithObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AssociateWithObjectResultSet = function(resultStream) {
    AssociateWithObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AssociateWithObject, choreography.Choreography);
util.inherits(AssociateWithObjectInputSet, choreography.InputSet);
util.inherits(AssociateWithObjectResultSet, choreography.ResultSet);
exports.AssociateWithObject = AssociateWithObject;


/*
    DeleteFile
    Deletes a file stored on Parse.
*/


var DeleteFile = function(session) {
    /*
        Create a new instance of the DeleteFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Files/DeleteFile"
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
        Set the value of the FileName input for this Choreo. ((required, json) The name of the file to delete. Note that this is the name generated and returned by Parse after uploading the file.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the MasterKey input for this Choreo. ((required, string) The Master Key provided by Parse.)
        */
        this.set_MasterKey = function(value) {
            this.setInput("MasterKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFileResultSet = function(resultStream) {
    DeleteFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
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
    UploadFile
    Uploads a file to Parse.
*/


var UploadFile = function(session) {
    /*
        Create a new instance of the UploadFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Files/UploadFile"
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
        Set the value of the FileContents input for this Choreo. ((conditional, string) The Base64-encoded contents of the file you want to upload.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((required, string) The content type of the file that is being uploaded (i.e. text/plain, image/jpeg, etc).)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file you are uploading to Parse.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a vault file to upload. Can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadFileResultSet = function(resultStream) {
    UploadFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadFile, choreography.Choreography);
util.inherits(UploadFileInputSet, choreography.InputSet);
util.inherits(UploadFileResultSet, choreography.ResultSet);
exports.UploadFile = UploadFile;

