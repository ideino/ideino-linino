
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateUser
    Creates a new user in an enterprise.
*/


var CreateUser = function(session) {
    /*
        Create a new instance of the CreateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Users/CreateUser"
    CreateUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateUserInputSet = function() {
    CreateUserInputSet.super_.call(this);
        /*
        Set the value of the UserObject input for this Choreo. ((required, json) A JSON object representing the new user. See documentation for formatting examples.)
        */
        this.set_UserObject = function(value) {
            this.setInput("UserObject", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the CreateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateUserResultSet = function(resultStream) {
    CreateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateUser, choreography.Choreography);
util.inherits(CreateUserInputSet, choreography.InputSet);
util.inherits(CreateUserResultSet, choreography.ResultSet);
exports.CreateUser = CreateUser;


/*
    DeleteUser
    Deletes a specified user.
*/


var DeleteUser = function(session) {
    /*
        Create a new instance of the DeleteUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Users/DeleteUser"
    DeleteUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteUserInputSet = function() {
    DeleteUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Force input for this Choreo. ((optional, boolean) Whether or not the user should be deleted even when they still own files.)
        */
        this.set_Force = function(value) {
            this.setInput("Force", value);
        }

        /*
        Set the value of the Notify input for this Choreo. ((optional, boolean) Indicates that the user should receive an email notification of the transfer.)
        */
        this.set_Notify = function(value) {
            this.setInput("Notify", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The id of the user whose information should be updated.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserResultSet = function(resultStream) {
    DeleteUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteUser, choreography.Choreography);
util.inherits(DeleteUserInputSet, choreography.InputSet);
util.inherits(DeleteUserResultSet, choreography.ResultSet);
exports.DeleteUser = DeleteUser;


/*
    GetCurrentUser
    Retrieves information about the authenticated user.
*/


var GetCurrentUser = function(session) {
    /*
        Create a new instance of the GetCurrentUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Users/GetCurrentUser"
    GetCurrentUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCurrentUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCurrentUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCurrentUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCurrentUserInputSet = function() {
    GetCurrentUserInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetCurrentUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCurrentUserResultSet = function(resultStream) {
    GetCurrentUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCurrentUser, choreography.Choreography);
util.inherits(GetCurrentUserInputSet, choreography.InputSet);
util.inherits(GetCurrentUserResultSet, choreography.ResultSet);
exports.GetCurrentUser = GetCurrentUser;


/*
    UpdateUser
    Updates information for an existing user.
*/


var UpdateUser = function(session) {
    /*
        Create a new instance of the UpdateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Users/UpdateUser"
    UpdateUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateUserInputSet = function() {
    UpdateUserInputSet.super_.call(this);
        /*
        Set the value of the UserObject input for this Choreo. ((required, json) A JSON object representing the user's information that should be updated. See documentation for formatting examples.)
        */
        this.set_UserObject = function(value) {
            this.setInput("UserObject", value);
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
        Set the value of the UserID input for this Choreo. ((required, string) The id of the user whose information should be updated.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserResultSet = function(resultStream) {
    UpdateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUser, choreography.Choreography);
util.inherits(UpdateUserInputSet, choreography.InputSet);
util.inherits(UpdateUserResultSet, choreography.ResultSet);
exports.UpdateUser = UpdateUser;

