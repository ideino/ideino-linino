
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddCollaboration
    Adds a collaboration for a single user to a specific folder.
*/


var AddCollaboration = function(session) {
    /*
        Create a new instance of the AddCollaboration Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Collaborations/AddCollaboration"
    AddCollaboration.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCollaborationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCollaborationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddCollaboration
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCollaborationInputSet = function() {
    AddCollaborationInputSet.super_.call(this);
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
        Set the value of the FolderID input for this Choreo. ((required, string) The id of the folder that you want to create a collaboration for.)
        */
        this.set_FolderID = function(value) {
            this.setInput("FolderID", value);
        }

        /*
        Set the value of the Login input for this Choreo. ((conditional, string) The email address of someone who this collaboration applies to. Required unless providing the UserID. Note, this does not need to be a Box user.)
        */
        this.set_Login = function(value) {
            this.setInput("Login", value);
        }

        /*
        Set the value of the Role input for this Choreo. ((optional, string) The access level of the collaboration. Valid values are "viewer" or "editor". Defaults to "viewer".)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The id of a Box user who this collaboration applies to. Required unless providing the EmailAddress.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddCollaboration Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCollaborationResultSet = function(resultStream) {
    AddCollaborationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddCollaboration, choreography.Choreography);
util.inherits(AddCollaborationInputSet, choreography.InputSet);
util.inherits(AddCollaborationResultSet, choreography.ResultSet);
exports.AddCollaboration = AddCollaboration;


/*
    DeleteCollaboration
    Deletes a single collaboration.
*/


var DeleteCollaboration = function(session) {
    /*
        Create a new instance of the DeleteCollaboration Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Collaborations/DeleteCollaboration"
    DeleteCollaboration.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCollaborationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCollaborationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCollaboration
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCollaborationInputSet = function() {
    DeleteCollaborationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CollaborationID input for this Choreo. ((required, string) The id of the collaboration to remove from a folder.)
        */
        this.set_CollaborationID = function(value) {
            this.setInput("CollaborationID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteCollaboration Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCollaborationResultSet = function(resultStream) {
    DeleteCollaborationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteCollaboration, choreography.Choreography);
util.inherits(DeleteCollaborationInputSet, choreography.InputSet);
util.inherits(DeleteCollaborationResultSet, choreography.ResultSet);
exports.DeleteCollaboration = DeleteCollaboration;


/*
    GetCollaboration
    Retrieves an existing collaboration.
*/


var GetCollaboration = function(session) {
    /*
        Create a new instance of the GetCollaboration Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Collaborations/GetCollaboration"
    GetCollaboration.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCollaborationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCollaborationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCollaboration
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCollaborationInputSet = function() {
    GetCollaborationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CollaborationID input for this Choreo. ((required, string) The id of the collaboration to retrieve.)
        */
        this.set_CollaborationID = function(value) {
            this.setInput("CollaborationID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetCollaboration Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCollaborationResultSet = function(resultStream) {
    GetCollaborationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCollaboration, choreography.Choreography);
util.inherits(GetCollaborationInputSet, choreography.InputSet);
util.inherits(GetCollaborationResultSet, choreography.ResultSet);
exports.GetCollaboration = GetCollaboration;


/*
    GetPendingCollaborations
    Retrieves all pending collaboration invites for a user.
*/


var GetPendingCollaborations = function(session) {
    /*
        Create a new instance of the GetPendingCollaborations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Collaborations/GetPendingCollaborations"
    GetPendingCollaborations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPendingCollaborationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPendingCollaborationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPendingCollaborations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPendingCollaborationsInputSet = function() {
    GetPendingCollaborationsInputSet.super_.call(this);
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
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetPendingCollaborations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPendingCollaborationsResultSet = function(resultStream) {
    GetPendingCollaborationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPendingCollaborations, choreography.Choreography);
util.inherits(GetPendingCollaborationsInputSet, choreography.InputSet);
util.inherits(GetPendingCollaborationsResultSet, choreography.ResultSet);
exports.GetPendingCollaborations = GetPendingCollaborations;


/*
    UpdateCollaboration
    Edits an existing collaboration.
*/


var UpdateCollaboration = function(session) {
    /*
        Create a new instance of the UpdateCollaboration Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Collaborations/UpdateCollaboration"
    UpdateCollaboration.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCollaborationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCollaborationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCollaboration
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCollaborationInputSet = function() {
    UpdateCollaborationInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CollaborationID input for this Choreo. ((required, string) The id of the collaboration to edit.)
        */
        this.set_CollaborationID = function(value) {
            this.setInput("CollaborationID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Role input for this Choreo. ((conditional, string) The access level of the collaboration. Valid values are "viewer" or "editor". Defaults to "viewer". This value can only be updated by the owner of the folder.)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((conditional, string) Whether this collaboration has been accepted. Valid values are: "accepted" or "rejected". This value can only be updated by the user who has been invited to the collaboration.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCollaboration Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCollaborationResultSet = function(resultStream) {
    UpdateCollaborationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateCollaboration, choreography.Choreography);
util.inherits(UpdateCollaborationInputSet, choreography.InputSet);
util.inherits(UpdateCollaborationResultSet, choreography.ResultSet);
exports.UpdateCollaboration = UpdateCollaboration;

