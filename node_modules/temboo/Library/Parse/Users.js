
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteUser
    Deletes a specified user.
*/


var DeleteUser = function(session) {
    /*
        Create a new instance of the DeleteUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/DeleteUser"
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
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the user to retrieve.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserResultSet = function(resultStream) {
    DeleteUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
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
    LinkExistingUser
    Allows your application to link an existing user with a service like Facebook or Twitter.
*/


var LinkExistingUser = function(session) {
    /*
        Create a new instance of the LinkExistingUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/LinkExistingUser"
    LinkExistingUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LinkExistingUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LinkExistingUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LinkExistingUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LinkExistingUserInputSet = function() {
    LinkExistingUserInputSet.super_.call(this);
        /*
        Set the value of the AuthData input for this Choreo. ((required, json) A JSON string containing the authentication data of the user you want to link with another service. See documentation for more formatting details.)
        */
        this.set_AuthData = function(value) {
            this.setInput("AuthData", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the user that is being linked to another service.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((required, string) A valid Session Token. Note that Session Tokens can be retrieved by the Login and SignUp Choreos.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LinkExistingUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LinkExistingUserResultSet = function(resultStream) {
    LinkExistingUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LinkExistingUser, choreography.Choreography);
util.inherits(LinkExistingUserInputSet, choreography.InputSet);
util.inherits(LinkExistingUserResultSet, choreography.ResultSet);
exports.LinkExistingUser = LinkExistingUser;


/*
    LinkNewUser
    Allows your application to sign up and login users by linking them to other services such as Twitter or Facebook.
*/


var LinkNewUser = function(session) {
    /*
        Create a new instance of the LinkNewUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/LinkNewUser"
    LinkNewUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LinkNewUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LinkNewUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LinkNewUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LinkNewUserInputSet = function() {
    LinkNewUserInputSet.super_.call(this);
        /*
        Set the value of the AuthData input for this Choreo. ((required, json) A JSON string containing the authentication data of the user you want to link with another service. See documentation for more formatting details.)
        */
        this.set_AuthData = function(value) {
            this.setInput("AuthData", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LinkNewUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LinkNewUserResultSet = function(resultStream) {
    LinkNewUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LinkNewUser, choreography.Choreography);
util.inherits(LinkNewUserInputSet, choreography.InputSet);
util.inherits(LinkNewUserResultSet, choreography.ResultSet);
exports.LinkNewUser = LinkNewUser;


/*
    Login
    Allows your application to authenticate a given user; returns user information, user-provided fields, and a session token.
*/


var Login = function(session) {
    /*
        Create a new instance of the Login Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/Login"
    Login.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LoginResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LoginInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Login
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LoginInputSet = function() {
    LoginInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The password for the user that is loggin in.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username for the user that is authenticating.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Login Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LoginResultSet = function(resultStream) {
    LoginResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Login, choreography.Choreography);
util.inherits(LoginInputSet, choreography.InputSet);
util.inherits(LoginResultSet, choreography.ResultSet);
exports.Login = Login;


/*
    PasswordReset
    Allows a user to request a password reset email.
*/


var PasswordReset = function(session) {
    /*
        Create a new instance of the PasswordReset Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/PasswordReset"
    PasswordReset.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PasswordResetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PasswordResetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PasswordReset
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PasswordResetInputSet = function() {
    PasswordResetInputSet.super_.call(this);
        /*
        Set the value of the EmailAddress input for this Choreo. ((required, json) The email address for the user who wishes to reset their password.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PasswordReset Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PasswordResetResultSet = function(resultStream) {
    PasswordResetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PasswordReset, choreography.Choreography);
util.inherits(PasswordResetInputSet, choreography.InputSet);
util.inherits(PasswordResetResultSet, choreography.ResultSet);
exports.PasswordReset = PasswordReset;


/*
    Query
    Retrieves multiple users at once and allows you to specify query constraints.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/Query"
    Query.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Query
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryInputSet = function() {
    QueryInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, boolean) A flag indicating to include a count of users in the response. Set to 1 to include a count. Defaults to 0.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) Specify a field to return multiple types of related objects in this query.  For example, enter: post.author, to retrieve posts and their authors related to this class.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of users to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the Where input for this Choreo. ((optional, json) A valid query constraint formatted as a JSON-encoded string. See documentation for syntax rules.)
        */
        this.set_Where = function(value) {
            this.setInput("Where", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;


/*
    RetrieveUser
    Retrieves details for a specific user.
*/


var RetrieveUser = function(session) {
    /*
        Create a new instance of the RetrieveUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/RetrieveUser"
    RetrieveUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUserInputSet = function() {
    RetrieveUserInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the user to retrieve.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUserResultSet = function(resultStream) {
    RetrieveUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUser, choreography.Choreography);
util.inherits(RetrieveUserInputSet, choreography.InputSet);
util.inherits(RetrieveUserResultSet, choreography.ResultSet);
exports.RetrieveUser = RetrieveUser;


/*
    SignUp
    Allows your application to sign up a new user.
*/


var SignUp = function(session) {
    /*
        Create a new instance of the SignUp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/SignUp"
    SignUp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SignUpResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SignUpInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SignUp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SignUpInputSet = function() {
    SignUpInputSet.super_.call(this);
        /*
        Set the value of the User input for this Choreo. ((required, json) A JSON string containing the new user information.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SignUp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SignUpResultSet = function(resultStream) {
    SignUpResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SignUp, choreography.Choreography);
util.inherits(SignUpInputSet, choreography.InputSet);
util.inherits(SignUpResultSet, choreography.ResultSet);
exports.SignUp = SignUp;


/*
    UpdateUser
    Updates information for an existing user.
*/


var UpdateUser = function(session) {
    /*
        Create a new instance of the UpdateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Users/UpdateUser"
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
        Set the value of the UserInformation input for this Choreo. ((required, json) A JSON string containing the user information to update.)
        */
        this.set_UserInformation = function(value) {
            this.setInput("UserInformation", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the user to update.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((required, string) A valid Session Token. Note that Session Tokens can be retrieved by the Login and SignUp Choreos.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserResultSet = function(resultStream) {
    UpdateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUser, choreography.Choreography);
util.inherits(UpdateUserInputSet, choreography.InputSet);
util.inherits(UpdateUserResultSet, choreography.ResultSet);
exports.UpdateUser = UpdateUser;

