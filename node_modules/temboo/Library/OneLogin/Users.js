
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateUser
    Creates a new user.
*/


var CreateUser = function(session) {
    /*
        Create a new instance of the CreateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Users/CreateUser"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((conditional, string) The street address for the new account.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) The email address for the new user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((conditional, string) The first name of the new user.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((optional, string) The group id associated with the new user.)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((conditional, string) The last name of the new user.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the OpenIDName input for this Choreo. ((conditional, string) The open id name.)
        */
        this.set_OpenIDName = function(value) {
            this.setInput("OpenIDName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((conditional, string) The phone number of the new user.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateUserResultSet = function(resultStream) {
    CreateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
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
    Deletes an existing user.
*/


var DeleteUser = function(session) {
    /*
        Create a new instance of the DeleteUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Users/DeleteUser"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id the user you want to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserResultSet = function(resultStream) {
    DeleteUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
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
    ListAll
    Retrieves a list of all users.
*/


var ListAll = function(session) {
    /*
        Create a new instance of the ListAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Users/ListAll"
    ListAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInputSet = function() {
    ListAllInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllResultSet = function(resultStream) {
    ListAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAll, choreography.Choreography);
util.inherits(ListAllInputSet, choreography.InputSet);
util.inherits(ListAllResultSet, choreography.ResultSet);
exports.ListAll = ListAll;


/*
    ShowUser
    Retrieves information for a single user.
*/


var ShowUser = function(session) {
    /*
        Create a new instance of the ShowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Users/ShowUser"
    ShowUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowUserInputSet = function() {
    ShowUserInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id the user you want to return.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowUserResultSet = function(resultStream) {
    ShowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowUser, choreography.Choreography);
util.inherits(ShowUserInputSet, choreography.InputSet);
util.inherits(ShowUserResultSet, choreography.ResultSet);
exports.ShowUser = ShowUser;


/*
    UpdateUser
    Updates an existing user.
*/


var UpdateUser = function(session) {
    /*
        Create a new instance of the UpdateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Users/UpdateUser"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((conditional, string) The street address for the new account.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) The email address for the new user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((conditional, string) The first name of the new user.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((optional, string) The group id associated with the new user.)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id of the user you want to update.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((conditional, string) The last name of the new user.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the OpenIDName input for this Choreo. ((conditional, string) The open id name.)
        */
        this.set_OpenIDName = function(value) {
            this.setInput("OpenIDName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((conditional, string) The phone number of the new user.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the Role input for this Choreo. ((optional, string) Updates a user's role.)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserResultSet = function(resultStream) {
    UpdateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUser, choreography.Choreography);
util.inherits(UpdateUserInputSet, choreography.InputSet);
util.inherits(UpdateUserResultSet, choreography.ResultSet);
exports.UpdateUser = UpdateUser;

