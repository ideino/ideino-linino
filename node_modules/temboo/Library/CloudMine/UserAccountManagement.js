
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AccountLogin
    Authenticates a user and returns a session token in order to create and query against user-level objects.
*/


var AccountLogin = function(session) {
    /*
        Create a new instance of the AccountLogin Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/AccountLogin"
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
        Set the value of the Password input for this Choreo. ((required, string) The password for the user that needs to authenticate.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username for the user that needs to authenticate.)
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
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
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
    Allows you to invalidate a user's session token.
*/


var AccountLogout = function(session) {
    /*
        Create a new instance of the AccountLogout Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/AccountLogout"
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
        Set the value of the SessionToken input for this Choreo. ((required, string) The session token obtained from the AccountLogin Choreo.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AccountLogout Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AccountLogoutResultSet = function(resultStream) {
    AccountLogoutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
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
    CreateAccount
    Creates a user account with a given username and password.
*/


var CreateAccount = function(session) {
    /*
        Create a new instance of the CreateAccount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/CreateAccount"
    CreateAccount.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAccountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAccountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAccount
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAccountInputSet = function() {
    CreateAccountInputSet.super_.call(this);
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
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude coordinate of the user's location. If provide, Longitude is also required.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude coordinate of the user's location. If provide, Latitude is also required.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) A name to associated with the user profile information.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The password for the account that is being created.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username for the account that is being created.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAccount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAccountResultSet = function(resultStream) {
    CreateAccountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAccount, choreography.Choreography);
util.inherits(CreateAccountInputSet, choreography.InputSet);
util.inherits(CreateAccountResultSet, choreography.ResultSet);
exports.CreateAccount = CreateAccount;


/*
    GetUsers
    Retrieves a list of all users that have been created for your application.
*/


var GetUsers = function(session) {
    /*
        Create a new instance of the GetUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/GetUsers"
    GetUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUsersInputSet = function() {
    GetUsersInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUsersResultSet = function(resultStream) {
    GetUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUsers, choreography.Choreography);
util.inherits(GetUsersInputSet, choreography.InputSet);
util.inherits(GetUsersResultSet, choreography.ResultSet);
exports.GetUsers = GetUsers;


/*
    PasswordChange
    Updates a user's password.
*/


var PasswordChange = function(session) {
    /*
        Create a new instance of the PasswordChange Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/PasswordChange"
    PasswordChange.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PasswordChangeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PasswordChangeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PasswordChange
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PasswordChangeInputSet = function() {
    PasswordChangeInputSet.super_.call(this);
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
        Set the value of the NewPassword input for this Choreo. ((required, string) The user's new password.)
        */
        this.set_NewPassword = function(value) {
            this.setInput("NewPassword", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The password for the user that needs to authenticate.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username for the user that needs to authenticate.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PasswordChange Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PasswordChangeResultSet = function(resultStream) {
    PasswordChangeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PasswordChange, choreography.Choreography);
util.inherits(PasswordChangeInputSet, choreography.InputSet);
util.inherits(PasswordChangeResultSet, choreography.ResultSet);
exports.PasswordChange = PasswordChange;


/*
    PasswordReset
    Allows a user who has forgotten their password to trigger a password reset email.
*/


var PasswordReset = function(session) {
    /*
        Create a new instance of the PasswordReset Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/PasswordReset"
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
        Set the value of the Username input for this Choreo. ((required, string) The username/email for the user that needs to reset their password.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PasswordReset Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PasswordResetResultSet = function(resultStream) {
    PasswordResetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
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
    SearchUsers
    Allows you to search for users using CloudMine's search query language syntax.
*/


var SearchUsers = function(session) {
    /*
        Create a new instance of the SearchUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/UserAccountManagement/SearchUsers"
    SearchUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchUsersInputSet = function() {
    SearchUsersInputSet.super_.call(this);
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
        Set the value of the Query input for this Choreo. ((required, string) Search query for which users to retrieve.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((required, string) The session token for an existing user (returned by the AccountLogin Choreo).)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchUsersResultSet = function(resultStream) {
    SearchUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchUsers, choreography.Choreography);
util.inherits(SearchUsersInputSet, choreography.InputSet);
util.inherits(SearchUsersResultSet, choreography.ResultSet);
exports.SearchUsers = SearchUsers;

