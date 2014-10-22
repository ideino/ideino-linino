
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddRoleToInstanceProfile
    Adds the specified role to the specified instance profile.
*/


var AddRoleToInstanceProfile = function(session) {
    /*
        Create a new instance of the AddRoleToInstanceProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/AddRoleToInstanceProfile"
    AddRoleToInstanceProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddRoleToInstanceProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddRoleToInstanceProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddRoleToInstanceProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddRoleToInstanceProfileInputSet = function() {
    AddRoleToInstanceProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceProfileName input for this Choreo. ((required, string) Name of the instance profile to update.)
        */
        this.set_InstanceProfileName = function(value) {
            this.setInput("InstanceProfileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role to add.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddRoleToInstanceProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddRoleToInstanceProfileResultSet = function(resultStream) {
    AddRoleToInstanceProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddRoleToInstanceProfile, choreography.Choreography);
util.inherits(AddRoleToInstanceProfileInputSet, choreography.InputSet);
util.inherits(AddRoleToInstanceProfileResultSet, choreography.ResultSet);
exports.AddRoleToInstanceProfile = AddRoleToInstanceProfile;


/*
    AddUserToGroup
    Adds a specified user to a specified group.
*/


var AddUserToGroup = function(session) {
    /*
        Create a new instance of the AddUserToGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/AddUserToGroup"
    AddUserToGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddUserToGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddUserToGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddUserToGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddUserToGroupInputSet = function() {
    AddUserToGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group that the user will be added to.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to add.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddUserToGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddUserToGroupResultSet = function(resultStream) {
    AddUserToGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddUserToGroup, choreography.Choreography);
util.inherits(AddUserToGroupInputSet, choreography.InputSet);
util.inherits(AddUserToGroupResultSet, choreography.ResultSet);
exports.AddUserToGroup = AddUserToGroup;


/*
    ChangePassword
    Allows the authenticating user to change their password.
*/


var ChangePassword = function(session) {
    /*
        Create a new instance of the ChangePassword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ChangePassword"
    ChangePassword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChangePasswordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChangePasswordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ChangePassword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChangePasswordInputSet = function() {
    ChangePasswordInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The user's Access Key ID.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The user's Secret Key ID.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the NewPassword input for this Choreo. ((required, string) The new password.)
        */
        this.set_NewPassword = function(value) {
            this.setInput("NewPassword", value);
        }

        /*
        Set the value of the OldPassword input for this Choreo. ((required, string) The old password.)
        */
        this.set_OldPassword = function(value) {
            this.setInput("OldPassword", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ChangePassword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChangePasswordResultSet = function(resultStream) {
    ChangePasswordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ChangePassword, choreography.Choreography);
util.inherits(ChangePasswordInputSet, choreography.InputSet);
util.inherits(ChangePasswordResultSet, choreography.ResultSet);
exports.ChangePassword = ChangePassword;


/*
    CreateAccessKey
    Creates a new AWS Secret Access Key and corresponding AWS Access Key ID for a specified user.
*/


var CreateAccessKey = function(session) {
    /*
        Create a new instance of the CreateAccessKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateAccessKey"
    CreateAccessKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAccessKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAccessKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAccessKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAccessKeyInputSet = function() {
    CreateAccessKeyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((conditional, string) The user name that the new key will belong to.  If you do not specify a user name, IAM determines the user name implicitly based on the AWS Access Key ID signing the request. )
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAccessKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAccessKeyResultSet = function(resultStream) {
    CreateAccessKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAccessKey, choreography.Choreography);
util.inherits(CreateAccessKeyInputSet, choreography.InputSet);
util.inherits(CreateAccessKeyResultSet, choreography.ResultSet);
exports.CreateAccessKey = CreateAccessKey;


/*
    CreateAccountAlias
    Creates an alias for your AWS account.
*/


var CreateAccountAlias = function(session) {
    /*
        Create a new instance of the CreateAccountAlias Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateAccountAlias"
    CreateAccountAlias.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAccountAliasResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAccountAliasInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAccountAlias
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAccountAliasInputSet = function() {
    CreateAccountAliasInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AccountAlias input for this Choreo. ((required, string) Name of the account alias to create. Must contain only digits, lowercase letters, and hyphens (-), but cannot begin or end with a hyphen. Ex.: alias-account-name.)
        */
        this.set_AccountAlias = function(value) {
            this.setInput("AccountAlias", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAccountAlias Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAccountAliasResultSet = function(resultStream) {
    CreateAccountAliasResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAccountAlias, choreography.Choreography);
util.inherits(CreateAccountAliasInputSet, choreography.InputSet);
util.inherits(CreateAccountAliasResultSet, choreography.ResultSet);
exports.CreateAccountAlias = CreateAccountAlias;


/*
    CreateGroup
    Creates a new group in your AWS account.
*/


var CreateGroup = function(session) {
    /*
        Create a new instance of the CreateGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateGroup"
    CreateGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateGroupInputSet = function() {
    CreateGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to create.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path to the group. If it is not included, it defaults to a slash (/).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateGroupResultSet = function(resultStream) {
    CreateGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateGroup, choreography.Choreography);
util.inherits(CreateGroupInputSet, choreography.InputSet);
util.inherits(CreateGroupResultSet, choreography.ResultSet);
exports.CreateGroup = CreateGroup;


/*
    CreateInstanceProfile
    Creates a new instance profile.
*/


var CreateInstanceProfile = function(session) {
    /*
        Create a new instance of the CreateInstanceProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateInstanceProfile"
    CreateInstanceProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateInstanceProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateInstanceProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateInstanceProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateInstanceProfileInputSet = function() {
    CreateInstanceProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceProfileName input for this Choreo. ((required, string) Name of the instance profile to create.)
        */
        this.set_InstanceProfileName = function(value) {
            this.setInput("InstanceProfileName", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path for the user name. If it is not included, it defaults to a slash (/).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateInstanceProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateInstanceProfileResultSet = function(resultStream) {
    CreateInstanceProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateInstanceProfile, choreography.Choreography);
util.inherits(CreateInstanceProfileInputSet, choreography.InputSet);
util.inherits(CreateInstanceProfileResultSet, choreography.ResultSet);
exports.CreateInstanceProfile = CreateInstanceProfile;


/*
    CreateLoginProfile
    Creates a password for the specified user, which gives the user the ability to access AWS services through the AWS Management Console.
*/


var CreateLoginProfile = function(session) {
    /*
        Create a new instance of the CreateLoginProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateLoginProfile"
    CreateLoginProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateLoginProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateLoginProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateLoginProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateLoginProfileInputSet = function() {
    CreateLoginProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the MustChangePassword input for this Choreo. ((optional, boolean) Whether or not the user is required to change their password immediately.  Valid values are true/false or 1/0.)
        */
        this.set_MustChangePassword = function(value) {
            this.setInput("MustChangePassword", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The new password for the user.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to create a password for.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateLoginProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateLoginProfileResultSet = function(resultStream) {
    CreateLoginProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateLoginProfile, choreography.Choreography);
util.inherits(CreateLoginProfileInputSet, choreography.InputSet);
util.inherits(CreateLoginProfileResultSet, choreography.ResultSet);
exports.CreateLoginProfile = CreateLoginProfile;


/*
    CreateUser
    Creates a new user for your AWS account.
*/


var CreateUser = function(session) {
    /*
        Create a new instance of the CreateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateUser"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path for the user name. If it is not included, it defaults to a slash (/).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to create.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateUserResultSet = function(resultStream) {
    CreateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
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
    CreateVirtualMFADevice
    Creates a new virtual MFA device for the AWS account.
*/


var CreateVirtualMFADevice = function(session) {
    /*
        Create a new instance of the CreateVirtualMFADevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/CreateVirtualMFADevice"
    CreateVirtualMFADevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateVirtualMFADeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateVirtualMFADeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateVirtualMFADevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateVirtualMFADeviceInputSet = function() {
    CreateVirtualMFADeviceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path for the virtual MFA device. If it is not included, it defaults to a slash (/).)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VirtualMFADeviceName input for this Choreo. ((required, string) The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device.)
        */
        this.set_VirtualMFADeviceName = function(value) {
            this.setInput("VirtualMFADeviceName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateVirtualMFADevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateVirtualMFADeviceResultSet = function(resultStream) {
    CreateVirtualMFADeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateVirtualMFADevice, choreography.Choreography);
util.inherits(CreateVirtualMFADeviceInputSet, choreography.InputSet);
util.inherits(CreateVirtualMFADeviceResultSet, choreography.ResultSet);
exports.CreateVirtualMFADevice = CreateVirtualMFADevice;


/*
    DeactivateMFADevice
    Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.
*/


var DeactivateMFADevice = function(session) {
    /*
        Create a new instance of the DeactivateMFADevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeactivateMFADevice"
    DeactivateMFADevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeactivateMFADeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeactivateMFADeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeactivateMFADevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeactivateMFADeviceInputSet = function() {
    DeactivateMFADeviceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user whose MFA device you want to deactivate.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeactivateMFADevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeactivateMFADeviceResultSet = function(resultStream) {
    DeactivateMFADeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeactivateMFADevice, choreography.Choreography);
util.inherits(DeactivateMFADeviceInputSet, choreography.InputSet);
util.inherits(DeactivateMFADeviceResultSet, choreography.ResultSet);
exports.DeactivateMFADevice = DeactivateMFADevice;


/*
    DeleteAccessKey
    Deletes the access key associated with the specified user.
*/


var DeleteAccessKey = function(session) {
    /*
        Create a new instance of the DeleteAccessKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteAccessKey"
    DeleteAccessKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAccessKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAccessKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAccessKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAccessKeyInputSet = function() {
    DeleteAccessKeyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) An AWS Access Key ID with sufficient permissions to delete the specified AccessKeyId.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID associated with the AWS AccessKey ID with sufficient permissions to delete the AccessKeyId.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AccessKeyId input for this Choreo. ((conditional, string) The Access Key ID for the Access Key ID and Secret Access Key you want to delete.)
        */
        this.set_AccessKeyId = function(value) {
            this.setInput("AccessKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((conditional, string) Name of the user whose key you want to delete.  If you do not specify a user name, IAM determines the user name implicitly based on the AWS Access Key ID signing the request.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAccessKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAccessKeyResultSet = function(resultStream) {
    DeleteAccessKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteAccessKey, choreography.Choreography);
util.inherits(DeleteAccessKeyInputSet, choreography.InputSet);
util.inherits(DeleteAccessKeyResultSet, choreography.ResultSet);
exports.DeleteAccessKey = DeleteAccessKey;


/*
    DeleteAccountAlias
    Deletes the specified AWS account alias.
*/


var DeleteAccountAlias = function(session) {
    /*
        Create a new instance of the DeleteAccountAlias Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteAccountAlias"
    DeleteAccountAlias.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAccountAliasResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAccountAliasInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAccountAlias
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAccountAliasInputSet = function() {
    DeleteAccountAliasInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AccountAlias input for this Choreo. ((required, string) Name of the account alias to delete.)
        */
        this.set_AccountAlias = function(value) {
            this.setInput("AccountAlias", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAccountAlias Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAccountAliasResultSet = function(resultStream) {
    DeleteAccountAliasResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteAccountAlias, choreography.Choreography);
util.inherits(DeleteAccountAliasInputSet, choreography.InputSet);
util.inherits(DeleteAccountAliasResultSet, choreography.ResultSet);
exports.DeleteAccountAlias = DeleteAccountAlias;


/*
    DeleteAccountPasswordPolicy
    Deletes the password policy for the AWS account.
*/


var DeleteAccountPasswordPolicy = function(session) {
    /*
        Create a new instance of the DeleteAccountPasswordPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteAccountPasswordPolicy"
    DeleteAccountPasswordPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAccountPasswordPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAccountPasswordPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAccountPasswordPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAccountPasswordPolicyInputSet = function() {
    DeleteAccountPasswordPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAccountPasswordPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAccountPasswordPolicyResultSet = function(resultStream) {
    DeleteAccountPasswordPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteAccountPasswordPolicy, choreography.Choreography);
util.inherits(DeleteAccountPasswordPolicyInputSet, choreography.InputSet);
util.inherits(DeleteAccountPasswordPolicyResultSet, choreography.ResultSet);
exports.DeleteAccountPasswordPolicy = DeleteAccountPasswordPolicy;


/*
    DeleteGroup
    Deletes a specified group.
*/


var DeleteGroup = function(session) {
    /*
        Create a new instance of the DeleteGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteGroup"
    DeleteGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteGroupInputSet = function() {
    DeleteGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to delete.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteGroupResultSet = function(resultStream) {
    DeleteGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteGroup, choreography.Choreography);
util.inherits(DeleteGroupInputSet, choreography.InputSet);
util.inherits(DeleteGroupResultSet, choreography.ResultSet);
exports.DeleteGroup = DeleteGroup;


/*
    DeleteGroupPolicy
    Deletes the specified policy that is associated with the specified group.
*/


var DeleteGroupPolicy = function(session) {
    /*
        Create a new instance of the DeleteGroupPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteGroupPolicy"
    DeleteGroupPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteGroupPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteGroupPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteGroupPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteGroupPolicyInputSet = function() {
    DeleteGroupPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) Name of the group the policy is associated with.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the policy document.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteGroupPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteGroupPolicyResultSet = function(resultStream) {
    DeleteGroupPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteGroupPolicy, choreography.Choreography);
util.inherits(DeleteGroupPolicyInputSet, choreography.InputSet);
util.inherits(DeleteGroupPolicyResultSet, choreography.ResultSet);
exports.DeleteGroupPolicy = DeleteGroupPolicy;


/*
    DeleteInstanceProfile
    Deletes the specified instance profile. 
*/


var DeleteInstanceProfile = function(session) {
    /*
        Create a new instance of the DeleteInstanceProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteInstanceProfile"
    DeleteInstanceProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInstanceProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInstanceProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInstanceProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInstanceProfileInputSet = function() {
    DeleteInstanceProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceProfileName input for this Choreo. ((required, string) Name of the instance profile to delete.)
        */
        this.set_InstanceProfileName = function(value) {
            this.setInput("InstanceProfileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInstanceProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInstanceProfileResultSet = function(resultStream) {
    DeleteInstanceProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInstanceProfile, choreography.Choreography);
util.inherits(DeleteInstanceProfileInputSet, choreography.InputSet);
util.inherits(DeleteInstanceProfileResultSet, choreography.ResultSet);
exports.DeleteInstanceProfile = DeleteInstanceProfile;


/*
    DeleteLoginProfile
    Deletes the password for the specified user, which terminates the user's ability to access AWS services through the AWS Management Console.
*/


var DeleteLoginProfile = function(session) {
    /*
        Create a new instance of the DeleteLoginProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteLoginProfile"
    DeleteLoginProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteLoginProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteLoginProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteLoginProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteLoginProfileInputSet = function() {
    DeleteLoginProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user whose login profile you want to delete.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteLoginProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteLoginProfileResultSet = function(resultStream) {
    DeleteLoginProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteLoginProfile, choreography.Choreography);
util.inherits(DeleteLoginProfileInputSet, choreography.InputSet);
util.inherits(DeleteLoginProfileResultSet, choreography.ResultSet);
exports.DeleteLoginProfile = DeleteLoginProfile;


/*
    DeleteRole
    Deletes the specified role.
*/


var DeleteRole = function(session) {
    /*
        Create a new instance of the DeleteRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteRole"
    DeleteRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRoleInputSet = function() {
    DeleteRoleInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role to delete.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRoleResultSet = function(resultStream) {
    DeleteRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRole, choreography.Choreography);
util.inherits(DeleteRoleInputSet, choreography.InputSet);
util.inherits(DeleteRoleResultSet, choreography.ResultSet);
exports.DeleteRole = DeleteRole;


/*
    DeleteRolePolicy
    Deletes the specified policy associated with the specified role.
*/


var DeleteRolePolicy = function(session) {
    /*
        Create a new instance of the DeleteRolePolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteRolePolicy"
    DeleteRolePolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRolePolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRolePolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRolePolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRolePolicyInputSet = function() {
    DeleteRolePolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the policy document.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role the associated with the policy.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRolePolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRolePolicyResultSet = function(resultStream) {
    DeleteRolePolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRolePolicy, choreography.Choreography);
util.inherits(DeleteRolePolicyInputSet, choreography.InputSet);
util.inherits(DeleteRolePolicyResultSet, choreography.ResultSet);
exports.DeleteRolePolicy = DeleteRolePolicy;


/*
    DeleteServerCertificate
    Deletes the specified server certificate.
*/


var DeleteServerCertificate = function(session) {
    /*
        Create a new instance of the DeleteServerCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteServerCertificate"
    DeleteServerCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteServerCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteServerCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteServerCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteServerCertificateInputSet = function() {
    DeleteServerCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ServerCertificateName input for this Choreo. ((required, string) The name of the server certificate you want to delete.)
        */
        this.set_ServerCertificateName = function(value) {
            this.setInput("ServerCertificateName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteServerCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteServerCertificateResultSet = function(resultStream) {
    DeleteServerCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteServerCertificate, choreography.Choreography);
util.inherits(DeleteServerCertificateInputSet, choreography.InputSet);
util.inherits(DeleteServerCertificateResultSet, choreography.ResultSet);
exports.DeleteServerCertificate = DeleteServerCertificate;


/*
    DeleteSigningCertificate
    Deletes the specified signing certificate associated with the specified user.
*/


var DeleteSigningCertificate = function(session) {
    /*
        Create a new instance of the DeleteSigningCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteSigningCertificate"
    DeleteSigningCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteSigningCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteSigningCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteSigningCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteSigningCertificateInputSet = function() {
    DeleteSigningCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the CertificateId input for this Choreo. ((required, string) ID of the signing certificate to delete.)
        */
        this.set_CertificateId = function(value) {
            this.setInput("CertificateId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((optional, string) Name of the user the signing certificate belongs to.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteSigningCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteSigningCertificateResultSet = function(resultStream) {
    DeleteSigningCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteSigningCertificate, choreography.Choreography);
util.inherits(DeleteSigningCertificateInputSet, choreography.InputSet);
util.inherits(DeleteSigningCertificateResultSet, choreography.ResultSet);
exports.DeleteSigningCertificate = DeleteSigningCertificate;


/*
    DeleteUser
    Deletes a specified user. The user must not belong to any groups, have any keys or signing certificates, or have any attached policies.
*/


var DeleteUser = function(session) {
    /*
        Create a new instance of the DeleteUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteUser"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to delete.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserResultSet = function(resultStream) {
    DeleteUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
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
    DeleteUserPolicy
    Deletes the specified policy associated with the specified user.
*/


var DeleteUserPolicy = function(session) {
    /*
        Create a new instance of the DeleteUserPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteUserPolicy"
    DeleteUserPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteUserPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteUserPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteUserPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteUserPolicyInputSet = function() {
    DeleteUserPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the user policy document you would like to delete.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user to delete the specified policy for.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUserPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserPolicyResultSet = function(resultStream) {
    DeleteUserPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteUserPolicy, choreography.Choreography);
util.inherits(DeleteUserPolicyInputSet, choreography.InputSet);
util.inherits(DeleteUserPolicyResultSet, choreography.ResultSet);
exports.DeleteUserPolicy = DeleteUserPolicy;


/*
    DeleteVirtualMFADevice
    Deletes a virtual MFA device.  You must deactivate a user's virtual MFA device before you can delete it.
*/


var DeleteVirtualMFADevice = function(session) {
    /*
        Create a new instance of the DeleteVirtualMFADevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/DeleteVirtualMFADevice"
    DeleteVirtualMFADevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteVirtualMFADeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteVirtualMFADeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteVirtualMFADevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteVirtualMFADeviceInputSet = function() {
    DeleteVirtualMFADeviceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteVirtualMFADevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteVirtualMFADeviceResultSet = function(resultStream) {
    DeleteVirtualMFADeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteVirtualMFADevice, choreography.Choreography);
util.inherits(DeleteVirtualMFADeviceInputSet, choreography.InputSet);
util.inherits(DeleteVirtualMFADeviceResultSet, choreography.ResultSet);
exports.DeleteVirtualMFADevice = DeleteVirtualMFADevice;


/*
    EnableMFADevice
    Enables the specified MFA device and associates it with the specified user name. When enabled, the MFA device is required for every subsequent login by the user name associated with the device.
*/


var EnableMFADevice = function(session) {
    /*
        Create a new instance of the EnableMFADevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/EnableMFADevice"
    EnableMFADevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EnableMFADeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EnableMFADeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EnableMFADevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EnableMFADeviceInputSet = function() {
    EnableMFADeviceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AuthenticationCode1 input for this Choreo. ((required, string) An authentication code emitted by the device.)
        */
        this.set_AuthenticationCode1 = function(value) {
            this.setInput("AuthenticationCode1", value);
        }

        /*
        Set the value of the AuthenticationCode2 input for this Choreo. ((required, string) A subsequent authentication code emitted by the device.)
        */
        this.set_AuthenticationCode2 = function(value) {
            this.setInput("AuthenticationCode2", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user for whom you want to enable the MFA device.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EnableMFADevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EnableMFADeviceResultSet = function(resultStream) {
    EnableMFADeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EnableMFADevice, choreography.Choreography);
util.inherits(EnableMFADeviceInputSet, choreography.InputSet);
util.inherits(EnableMFADeviceResultSet, choreography.ResultSet);
exports.EnableMFADevice = EnableMFADevice;


/*
    GetAccountPasswordPolicy
    Retrieves the password policy for the AWS account.
*/


var GetAccountPasswordPolicy = function(session) {
    /*
        Create a new instance of the GetAccountPasswordPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetAccountPasswordPolicy"
    GetAccountPasswordPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountPasswordPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountPasswordPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountPasswordPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountPasswordPolicyInputSet = function() {
    GetAccountPasswordPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountPasswordPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountPasswordPolicyResultSet = function(resultStream) {
    GetAccountPasswordPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountPasswordPolicy, choreography.Choreography);
util.inherits(GetAccountPasswordPolicyInputSet, choreography.InputSet);
util.inherits(GetAccountPasswordPolicyResultSet, choreography.ResultSet);
exports.GetAccountPasswordPolicy = GetAccountPasswordPolicy;


/*
    GetAccountSummary
    Retrieves account level information about account entity usage and IAM quotas.
*/


var GetAccountSummary = function(session) {
    /*
        Create a new instance of the GetAccountSummary Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetAccountSummary"
    GetAccountSummary.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAccountSummaryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAccountSummaryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAccountSummary
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAccountSummaryInputSet = function() {
    GetAccountSummaryInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAccountSummary Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAccountSummaryResultSet = function(resultStream) {
    GetAccountSummaryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAccountSummary, choreography.Choreography);
util.inherits(GetAccountSummaryInputSet, choreography.InputSet);
util.inherits(GetAccountSummaryResultSet, choreography.ResultSet);
exports.GetAccountSummary = GetAccountSummary;


/*
    GetGroup
    Returns a list of users that are in the specified group.
*/


var GetGroup = function(session) {
    /*
        Create a new instance of the GetGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetGroup"
    GetGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetGroupInputSet = function() {
    GetGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to return.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetGroupResultSet = function(resultStream) {
    GetGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetGroup, choreography.Choreography);
util.inherits(GetGroupInputSet, choreography.InputSet);
util.inherits(GetGroupResultSet, choreography.ResultSet);
exports.GetGroup = GetGroup;


/*
    GetGroupPolicy
    Retrieves the specified policy document for the specified group.
*/


var GetGroupPolicy = function(session) {
    /*
        Create a new instance of the GetGroupPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetGroupPolicy"
    GetGroupPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetGroupPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetGroupPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetGroupPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetGroupPolicyInputSet = function() {
    GetGroupPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to return.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the policy document to get.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetGroupPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetGroupPolicyResultSet = function(resultStream) {
    GetGroupPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetGroupPolicy, choreography.Choreography);
util.inherits(GetGroupPolicyInputSet, choreography.InputSet);
util.inherits(GetGroupPolicyResultSet, choreography.ResultSet);
exports.GetGroupPolicy = GetGroupPolicy;


/*
    GetInstanceProfile
    Retrieves information about the specified instance profile, including the instance profile's path, ARN, and RoleId.
*/


var GetInstanceProfile = function(session) {
    /*
        Create a new instance of the GetInstanceProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetInstanceProfile"
    GetInstanceProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetInstanceProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInstanceProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetInstanceProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInstanceProfileInputSet = function() {
    GetInstanceProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceProfileName input for this Choreo. ((required, string) Name of the instance profile to get information about.)
        */
        this.set_InstanceProfileName = function(value) {
            this.setInput("InstanceProfileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetInstanceProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetInstanceProfileResultSet = function(resultStream) {
    GetInstanceProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetInstanceProfile, choreography.Choreography);
util.inherits(GetInstanceProfileInputSet, choreography.InputSet);
util.inherits(GetInstanceProfileResultSet, choreography.ResultSet);
exports.GetInstanceProfile = GetInstanceProfile;


/*
    GetLoginProfile
    Retrieves the user name and password create date for the specified user.
*/


var GetLoginProfile = function(session) {
    /*
        Create a new instance of the GetLoginProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetLoginProfile"
    GetLoginProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLoginProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLoginProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLoginProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLoginProfileInputSet = function() {
    GetLoginProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user whose login profile you want to retrieve.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLoginProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLoginProfileResultSet = function(resultStream) {
    GetLoginProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLoginProfile, choreography.Choreography);
util.inherits(GetLoginProfileInputSet, choreography.InputSet);
util.inherits(GetLoginProfileResultSet, choreography.ResultSet);
exports.GetLoginProfile = GetLoginProfile;


/*
    GetRole
    Retrieves information about the specified role, including the role's path, ARN, RoleId, and the policy granting permission to EC2 to assume the role.
*/


var GetRole = function(session) {
    /*
        Create a new instance of the GetRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetRole"
    GetRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRoleInputSet = function() {
    GetRoleInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role to get information about.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRoleResultSet = function(resultStream) {
    GetRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRole, choreography.Choreography);
util.inherits(GetRoleInputSet, choreography.InputSet);
util.inherits(GetRoleResultSet, choreography.ResultSet);
exports.GetRole = GetRole;


/*
    GetRolePolicy
    Retrieves the specified policy document for the specified role.
*/


var GetRolePolicy = function(session) {
    /*
        Create a new instance of the GetRolePolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetRolePolicy"
    GetRolePolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRolePolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRolePolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRolePolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRolePolicyInputSet = function() {
    GetRolePolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the policy document to get.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role associated with the policy.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRolePolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRolePolicyResultSet = function(resultStream) {
    GetRolePolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRolePolicy, choreography.Choreography);
util.inherits(GetRolePolicyInputSet, choreography.InputSet);
util.inherits(GetRolePolicyResultSet, choreography.ResultSet);
exports.GetRolePolicy = GetRolePolicy;


/*
    GetServerCertificate
    Retrieves information about the specified server certificate.
*/


var GetServerCertificate = function(session) {
    /*
        Create a new instance of the GetServerCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetServerCertificate"
    GetServerCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetServerCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetServerCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetServerCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetServerCertificateInputSet = function() {
    GetServerCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ServerCertificateName input for this Choreo. ((required, string) The name of the server certificate you want to retrieve information about.)
        */
        this.set_ServerCertificateName = function(value) {
            this.setInput("ServerCertificateName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetServerCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetServerCertificateResultSet = function(resultStream) {
    GetServerCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetServerCertificate, choreography.Choreography);
util.inherits(GetServerCertificateInputSet, choreography.InputSet);
util.inherits(GetServerCertificateResultSet, choreography.ResultSet);
exports.GetServerCertificate = GetServerCertificate;


/*
    GetUser
    Retrieves details about a specified user, including the user's path, GUID, and ARN.
*/


var GetUser = function(session) {
    /*
        Create a new instance of the GetUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetUser"
    GetUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInputSet = function() {
    GetUserInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((conditional, string) The name of the user to retrieve. If you do not specify a user name, IAM determines the user name implicitly based on the AWS Access Key ID signing the request.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserResultSet = function(resultStream) {
    GetUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUser, choreography.Choreography);
util.inherits(GetUserInputSet, choreography.InputSet);
util.inherits(GetUserResultSet, choreography.ResultSet);
exports.GetUser = GetUser;


/*
    GetUserPolicy
    Retrieves the specified policy document for the specified user.
*/


var GetUserPolicy = function(session) {
    /*
        Create a new instance of the GetUserPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/GetUserPolicy"
    GetUserPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserPolicyInputSet = function() {
    GetUserPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) Name of the policy document to get.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to retrieve.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserPolicyResultSet = function(resultStream) {
    GetUserPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserPolicy, choreography.Choreography);
util.inherits(GetUserPolicyInputSet, choreography.InputSet);
util.inherits(GetUserPolicyResultSet, choreography.ResultSet);
exports.GetUserPolicy = GetUserPolicy;


/*
    ListAccessKeys
    Returns information about the Access Key IDs associated with the specified user.
*/


var ListAccessKeys = function(session) {
    /*
        Create a new instance of the ListAccessKeys Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListAccessKeys"
    ListAccessKeys.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAccessKeysResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAccessKeysInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAccessKeys
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAccessKeysInputSet = function() {
    ListAccessKeysInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((conditional, string) Name of the user.  If the UserName field is not specified, the UserName is determined implicitly based on the AWS Access Key ID used to sign the request.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAccessKeys Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAccessKeysResultSet = function(resultStream) {
    ListAccessKeysResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAccessKeys, choreography.Choreography);
util.inherits(ListAccessKeysInputSet, choreography.InputSet);
util.inherits(ListAccessKeysResultSet, choreography.ResultSet);
exports.ListAccessKeys = ListAccessKeys;


/*
    ListAccountAliases
    Lists the account aliases associated with the account. 
*/


var ListAccountAliases = function(session) {
    /*
        Create a new instance of the ListAccountAliases Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListAccountAliases"
    ListAccountAliases.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAccountAliasesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAccountAliasesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAccountAliases
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAccountAliasesInputSet = function() {
    ListAccountAliasesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAccountAliases Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAccountAliasesResultSet = function(resultStream) {
    ListAccountAliasesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAccountAliases, choreography.Choreography);
util.inherits(ListAccountAliasesInputSet, choreography.InputSet);
util.inherits(ListAccountAliasesResultSet, choreography.ResultSet);
exports.ListAccountAliases = ListAccountAliases;


/*
    ListGroupPolicies
    Lists the names of the policies associated with the specified group.
*/


var ListGroupPolicies = function(session) {
    /*
        Create a new instance of the ListGroupPolicies Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListGroupPolicies"
    ListGroupPolicies.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGroupPoliciesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGroupPoliciesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGroupPolicies
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGroupPoliciesInputSet = function() {
    ListGroupPoliciesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to list policies for.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGroupPolicies Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGroupPoliciesResultSet = function(resultStream) {
    ListGroupPoliciesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGroupPolicies, choreography.Choreography);
util.inherits(ListGroupPoliciesInputSet, choreography.InputSet);
util.inherits(ListGroupPoliciesResultSet, choreography.ResultSet);
exports.ListGroupPolicies = ListGroupPolicies;


/*
    ListGroups
    Returns a list of groups and allows you to filter the results with a specific path prefix.
*/


var ListGroups = function(session) {
    /*
        Create a new instance of the ListGroups Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListGroups"
    ListGroups.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGroupsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGroupsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGroups
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGroupsInputSet = function() {
    ListGroupsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((optional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all groups whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGroups Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGroupsResultSet = function(resultStream) {
    ListGroupsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGroups, choreography.Choreography);
util.inherits(ListGroupsInputSet, choreography.InputSet);
util.inherits(ListGroupsResultSet, choreography.ResultSet);
exports.ListGroups = ListGroups;


/*
    ListGroupsForUser
    Lists the groups the specified user belongs to.
*/


var ListGroupsForUser = function(session) {
    /*
        Create a new instance of the ListGroupsForUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListGroupsForUser"
    ListGroupsForUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGroupsForUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGroupsForUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGroupsForUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGroupsForUserInputSet = function() {
    ListGroupsForUserInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((optional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all groups whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Lists the groups the specified user belongs to.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGroupsForUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGroupsForUserResultSet = function(resultStream) {
    ListGroupsForUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGroupsForUser, choreography.Choreography);
util.inherits(ListGroupsForUserInputSet, choreography.InputSet);
util.inherits(ListGroupsForUserResultSet, choreography.ResultSet);
exports.ListGroupsForUser = ListGroupsForUser;


/*
    ListInstanceProfiles
    Lists the instance profiles that have the specified path prefix.
*/


var ListInstanceProfiles = function(session) {
    /*
        Create a new instance of the ListInstanceProfiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListInstanceProfiles"
    ListInstanceProfiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInstanceProfilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInstanceProfilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInstanceProfiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInstanceProfilesInputSet = function() {
    ListInstanceProfilesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((optional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all groups whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInstanceProfiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInstanceProfilesResultSet = function(resultStream) {
    ListInstanceProfilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListInstanceProfiles, choreography.Choreography);
util.inherits(ListInstanceProfilesInputSet, choreography.InputSet);
util.inherits(ListInstanceProfilesResultSet, choreography.ResultSet);
exports.ListInstanceProfiles = ListInstanceProfiles;


/*
    ListInstanceProfilesForRole
    Lists the names of the policies associated with the specified role. 
*/


var ListInstanceProfilesForRole = function(session) {
    /*
        Create a new instance of the ListInstanceProfilesForRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListInstanceProfilesForRole"
    ListInstanceProfilesForRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInstanceProfilesForRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInstanceProfilesForRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInstanceProfilesForRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInstanceProfilesForRoleInputSet = function() {
    ListInstanceProfilesForRoleInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) The name of the role to list instance profiles for.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInstanceProfilesForRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInstanceProfilesForRoleResultSet = function(resultStream) {
    ListInstanceProfilesForRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListInstanceProfilesForRole, choreography.Choreography);
util.inherits(ListInstanceProfilesForRoleInputSet, choreography.InputSet);
util.inherits(ListInstanceProfilesForRoleResultSet, choreography.ResultSet);
exports.ListInstanceProfilesForRole = ListInstanceProfilesForRole;


/*
    ListMFADevices
    Lists the MFA devices. If the request includes the user name, then this action lists all the MFA devices associated with the specified user name. If you do not specify a user name, IAM determines the user name implicitly based on the AWS Access Key ID signing the request.
*/


var ListMFADevices = function(session) {
    /*
        Create a new instance of the ListMFADevices Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListMFADevices"
    ListMFADevices.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMFADevicesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMFADevicesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMFADevices
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMFADevicesInputSet = function() {
    ListMFADevicesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((optional, string) Name of the user whose MFA devices you want to list.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMFADevices Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMFADevicesResultSet = function(resultStream) {
    ListMFADevicesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMFADevices, choreography.Choreography);
util.inherits(ListMFADevicesInputSet, choreography.InputSet);
util.inherits(ListMFADevicesResultSet, choreography.ResultSet);
exports.ListMFADevices = ListMFADevices;


/*
    ListRolePolicies
    Lists the names of the policies associated with the specified role. 
*/


var ListRolePolicies = function(session) {
    /*
        Create a new instance of the ListRolePolicies Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListRolePolicies"
    ListRolePolicies.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRolePoliciesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRolePoliciesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRolePolicies
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRolePoliciesInputSet = function() {
    ListRolePoliciesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the Role that you would like to retrieve policies for.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListRolePolicies Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRolePoliciesResultSet = function(resultStream) {
    ListRolePoliciesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListRolePolicies, choreography.Choreography);
util.inherits(ListRolePoliciesInputSet, choreography.InputSet);
util.inherits(ListRolePoliciesResultSet, choreography.ResultSet);
exports.ListRolePolicies = ListRolePolicies;


/*
    ListRoles
    Lists the roles that have the specified path prefix. If there are none, the action returns an empty list.
*/


var ListRoles = function(session) {
    /*
        Create a new instance of the ListRoles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListRoles"
    ListRoles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRolesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRolesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRoles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRolesInputSet = function() {
    ListRolesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((optional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all groups whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListRoles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRolesResultSet = function(resultStream) {
    ListRolesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListRoles, choreography.Choreography);
util.inherits(ListRolesInputSet, choreography.InputSet);
util.inherits(ListRolesResultSet, choreography.ResultSet);
exports.ListRoles = ListRoles;


/*
    ListServerCertificates
    Lists the server certificates that have the specified path prefix. If none exist, the action returns an empty list.
*/


var ListServerCertificates = function(session) {
    /*
        Create a new instance of the ListServerCertificates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListServerCertificates"
    ListServerCertificates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListServerCertificatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListServerCertificatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListServerCertificates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListServerCertificatesInputSet = function() {
    ListServerCertificatesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((optional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all groups whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListServerCertificates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListServerCertificatesResultSet = function(resultStream) {
    ListServerCertificatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListServerCertificates, choreography.Choreography);
util.inherits(ListServerCertificatesInputSet, choreography.InputSet);
util.inherits(ListServerCertificatesResultSet, choreography.ResultSet);
exports.ListServerCertificates = ListServerCertificates;


/*
    ListSigningCertificates
    Returns information about the signing certificates associated with the specified user. If there are none, the action returns an empty list.
*/


var ListSigningCertificates = function(session) {
    /*
        Create a new instance of the ListSigningCertificates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListSigningCertificates"
    ListSigningCertificates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSigningCertificatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSigningCertificatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSigningCertificates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSigningCertificatesInputSet = function() {
    ListSigningCertificatesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((optional, string) The name of the user.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSigningCertificates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSigningCertificatesResultSet = function(resultStream) {
    ListSigningCertificatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSigningCertificates, choreography.Choreography);
util.inherits(ListSigningCertificatesInputSet, choreography.InputSet);
util.inherits(ListSigningCertificatesResultSet, choreography.ResultSet);
exports.ListSigningCertificates = ListSigningCertificates;


/*
    ListUserPolicies
    Lists the names of the policies associated with the specified user.
*/


var ListUserPolicies = function(session) {
    /*
        Create a new instance of the ListUserPolicies Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListUserPolicies"
    ListUserPolicies.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUserPoliciesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUserPoliciesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUserPolicies
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUserPoliciesInputSet = function() {
    ListUserPoliciesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to list policies for.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUserPolicies Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUserPoliciesResultSet = function(resultStream) {
    ListUserPoliciesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListUserPolicies, choreography.Choreography);
util.inherits(ListUserPoliciesInputSet, choreography.InputSet);
util.inherits(ListUserPoliciesResultSet, choreography.ResultSet);
exports.ListUserPolicies = ListUserPolicies;


/*
    ListUsers
    Lists the users that have the specified path prefix. If there are none, the action returns an empty list.
*/


var ListUsers = function(session) {
    /*
        Create a new instance of the ListUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListUsers"
    ListUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUsersInputSet = function() {
    ListUsersInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the PathPrefix input for this Choreo. ((conditional, string) The path prefix for filtering the results. For example, "/division_abc/subdivision_xyz/" retrieves all users whose path starts with that string. If it is not included, it defaults to a slash (/).)
        */
        this.set_PathPrefix = function(value) {
            this.setInput("PathPrefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUsersResultSet = function(resultStream) {
    ListUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListUsers, choreography.Choreography);
util.inherits(ListUsersInputSet, choreography.InputSet);
util.inherits(ListUsersResultSet, choreography.ResultSet);
exports.ListUsers = ListUsers;


/*
    ListVirtualMFADevices
    Lists the virtual MFA devices under the AWS account.
*/


var ListVirtualMFADevices = function(session) {
    /*
        Create a new instance of the ListVirtualMFADevices Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ListVirtualMFADevices"
    ListVirtualMFADevices.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListVirtualMFADevicesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListVirtualMFADevicesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListVirtualMFADevices
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListVirtualMFADevicesInputSet = function() {
    ListVirtualMFADevicesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AssignmentStatus input for this Choreo. ((optional, string) Filters by the whether the device is assigned or unassigned to a specific user. Valid values: "Unassigned", "Assigned" or "Any" (default - both assigned and unassigned devices).)
        */
        this.set_AssignmentStatus = function(value) {
            this.setInput("AssignmentStatus", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Used for pagination to indicate the starting point of the results to return.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxItems input for this Choreo. ((optional, integer) Used for pagination to limit the number of results returned. Defaults to 100.)
        */
        this.set_MaxItems = function(value) {
            this.setInput("MaxItems", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListVirtualMFADevices Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListVirtualMFADevicesResultSet = function(resultStream) {
    ListVirtualMFADevicesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListVirtualMFADevices, choreography.Choreography);
util.inherits(ListVirtualMFADevicesInputSet, choreography.InputSet);
util.inherits(ListVirtualMFADevicesResultSet, choreography.ResultSet);
exports.ListVirtualMFADevices = ListVirtualMFADevices;


/*
    PutGroupPolicy
    Adds or updates a policy document associated with a specified group.
*/


var PutGroupPolicy = function(session) {
    /*
        Create a new instance of the PutGroupPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/PutGroupPolicy"
    PutGroupPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutGroupPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutGroupPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutGroupPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutGroupPolicyInputSet = function() {
    PutGroupPolicyInputSet.super_.call(this);
        /*
        Set the value of the PolicyDocument input for this Choreo. ((required, json) The policy document. See documentation for formatting examples.)
        */
        this.set_PolicyDocument = function(value) {
            this.setInput("PolicyDocument", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to associate the policy with.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) The name of the policy document.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutGroupPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutGroupPolicyResultSet = function(resultStream) {
    PutGroupPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutGroupPolicy, choreography.Choreography);
util.inherits(PutGroupPolicyInputSet, choreography.InputSet);
util.inherits(PutGroupPolicyResultSet, choreography.ResultSet);
exports.PutGroupPolicy = PutGroupPolicy;


/*
    PutRolePolicy
    Adds or updates a policy document associated with a specified role.
*/


var PutRolePolicy = function(session) {
    /*
        Create a new instance of the PutRolePolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/PutRolePolicy"
    PutRolePolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutRolePolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutRolePolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutRolePolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutRolePolicyInputSet = function() {
    PutRolePolicyInputSet.super_.call(this);
        /*
        Set the value of the PolicyDocument input for this Choreo. ((required, json) The policy document. See documentation for formatting examples.)
        */
        this.set_PolicyDocument = function(value) {
            this.setInput("PolicyDocument", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) The name of the policy document.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) The name of the role to associate the policy with.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutRolePolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutRolePolicyResultSet = function(resultStream) {
    PutRolePolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutRolePolicy, choreography.Choreography);
util.inherits(PutRolePolicyInputSet, choreography.InputSet);
util.inherits(PutRolePolicyResultSet, choreography.ResultSet);
exports.PutRolePolicy = PutRolePolicy;


/*
    PutUserPolicy
    Adds or updates a policy document associated with a specified user.
*/


var PutUserPolicy = function(session) {
    /*
        Create a new instance of the PutUserPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/PutUserPolicy"
    PutUserPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutUserPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutUserPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutUserPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutUserPolicyInputSet = function() {
    PutUserPolicyInputSet.super_.call(this);
        /*
        Set the value of the PolicyDocument input for this Choreo. ((required, json) The policy document. See documentation for formatting examples.)
        */
        this.set_PolicyDocument = function(value) {
            this.setInput("PolicyDocument", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the PolicyName input for this Choreo. ((required, string) The name of the policy document.)
        */
        this.set_PolicyName = function(value) {
            this.setInput("PolicyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to associate the policy with.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutUserPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutUserPolicyResultSet = function(resultStream) {
    PutUserPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutUserPolicy, choreography.Choreography);
util.inherits(PutUserPolicyInputSet, choreography.InputSet);
util.inherits(PutUserPolicyResultSet, choreography.ResultSet);
exports.PutUserPolicy = PutUserPolicy;


/*
    RemoveRoleFromInstanceProfile
    Removes the specified Role from the specified Instance Profile.
*/


var RemoveRoleFromInstanceProfile = function(session) {
    /*
        Create a new instance of the RemoveRoleFromInstanceProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/RemoveRoleFromInstanceProfile"
    RemoveRoleFromInstanceProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveRoleFromInstanceProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveRoleFromInstanceProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveRoleFromInstanceProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveRoleFromInstanceProfileInputSet = function() {
    RemoveRoleFromInstanceProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceProfileName input for this Choreo. ((required, string) Name of the instance profile to update.)
        */
        this.set_InstanceProfileName = function(value) {
            this.setInput("InstanceProfileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleName input for this Choreo. ((required, string) Name of the role to remove.)
        */
        this.set_RoleName = function(value) {
            this.setInput("RoleName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveRoleFromInstanceProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveRoleFromInstanceProfileResultSet = function(resultStream) {
    RemoveRoleFromInstanceProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveRoleFromInstanceProfile, choreography.Choreography);
util.inherits(RemoveRoleFromInstanceProfileInputSet, choreography.InputSet);
util.inherits(RemoveRoleFromInstanceProfileResultSet, choreography.ResultSet);
exports.RemoveRoleFromInstanceProfile = RemoveRoleFromInstanceProfile;


/*
    RemoveUserFromGroup
    Removes the specified user from the specified group.
*/


var RemoveUserFromGroup = function(session) {
    /*
        Create a new instance of the RemoveUserFromGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/RemoveUserFromGroup"
    RemoveUserFromGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveUserFromGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveUserFromGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveUserFromGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveUserFromGroupInputSet = function() {
    RemoveUserFromGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) Name of the group to update.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user to remove.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveUserFromGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveUserFromGroupResultSet = function(resultStream) {
    RemoveUserFromGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveUserFromGroup, choreography.Choreography);
util.inherits(RemoveUserFromGroupInputSet, choreography.InputSet);
util.inherits(RemoveUserFromGroupResultSet, choreography.ResultSet);
exports.RemoveUserFromGroup = RemoveUserFromGroup;


/*
    ResyncMFADevice
    Synchronizes the specified MFA device with AWS servers.
*/


var ResyncMFADevice = function(session) {
    /*
        Create a new instance of the ResyncMFADevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/ResyncMFADevice"
    ResyncMFADevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ResyncMFADeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ResyncMFADeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ResyncMFADevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ResyncMFADeviceInputSet = function() {
    ResyncMFADeviceInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AuthenticationCode1 input for this Choreo. ((required, string) An authentication code emitted by the device.)
        */
        this.set_AuthenticationCode1 = function(value) {
            this.setInput("AuthenticationCode1", value);
        }

        /*
        Set the value of the AuthenticationCode2 input for this Choreo. ((required, string) A subsequent authentication code emitted by the device.)
        */
        this.set_AuthenticationCode2 = function(value) {
            this.setInput("AuthenticationCode2", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Name of the user for whom you want to enable the MFA device.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ResyncMFADevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ResyncMFADeviceResultSet = function(resultStream) {
    ResyncMFADeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ResyncMFADevice, choreography.Choreography);
util.inherits(ResyncMFADeviceInputSet, choreography.InputSet);
util.inherits(ResyncMFADeviceResultSet, choreography.ResultSet);
exports.ResyncMFADevice = ResyncMFADevice;


/*
    UpdateAccessKey
    Changes the status of the specified access key from Active to Inactive, or vice versa. This action can be used to disable a user's key as part of a key rotation workflow.
*/


var UpdateAccessKey = function(session) {
    /*
        Create a new instance of the UpdateAccessKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateAccessKey"
    UpdateAccessKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAccessKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAccessKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAccessKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAccessKeyInputSet = function() {
    UpdateAccessKeyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AccessKeyId input for this Choreo. ((conditional, string) The Access Key ID for the Access Key ID and Secret Access Key you want to delete.)
        */
        this.set_AccessKeyId = function(value) {
            this.setInput("AccessKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((required, string) The status you want to assign to the Secret Access Key. Active means the key can be used for API calls to AWS, while Inactive means the key cannot be used.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((conditional, string) Name of the user whose key you want to update.  If the UserName field is not specified, the UserName is determined implicitly based on the AWS Access Key ID used to sign the request.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAccessKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAccessKeyResultSet = function(resultStream) {
    UpdateAccessKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAccessKey, choreography.Choreography);
util.inherits(UpdateAccessKeyInputSet, choreography.InputSet);
util.inherits(UpdateAccessKeyResultSet, choreography.ResultSet);
exports.UpdateAccessKey = UpdateAccessKey;


/*
    UpdateAccountPasswordPolicy
    Updates the password policy settings for the account.
*/


var UpdateAccountPasswordPolicy = function(session) {
    /*
        Create a new instance of the UpdateAccountPasswordPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateAccountPasswordPolicy"
    UpdateAccountPasswordPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAccountPasswordPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAccountPasswordPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAccountPasswordPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAccountPasswordPolicyInputSet = function() {
    UpdateAccountPasswordPolicyInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AllowUsersToChangePassword input for this Choreo. ((optional, boolean) Determines whether users can set/change their own passwords. Valid values: "true" or "false" (the default).)
        */
        this.set_AllowUsersToChangePassword = function(value) {
            this.setInput("AllowUsersToChangePassword", value);
        }

        /*
        Set the value of the ExpirePasswords input for this Choreo. ((optional, boolean) Determines whether the passwords expire. Valid values: "true" or "false" (the default).)
        */
        this.set_ExpirePasswords = function(value) {
            this.setInput("ExpirePasswords", value);
        }

        /*
        Set the value of the MaxPasswordsAge input for this Choreo. ((optional, integer) Maximum age of the passwords before they expire.)
        */
        this.set_MaxPasswordsAge = function(value) {
            this.setInput("MaxPasswordsAge", value);
        }

        /*
        Set the value of the MinimumPasswordLength input for this Choreo. ((optional, integer) Mininum length of the password. Defaults to none.)
        */
        this.set_MinimumPasswordLength = function(value) {
            this.setInput("MinimumPasswordLength", value);
        }

        /*
        Set the value of the RequireLowercaseCharacters input for this Choreo. ((optional, boolean) Determines whether at least one lower-case character is required in the password. Valid values: "true" or "false" (the default).)
        */
        this.set_RequireLowercaseCharacters = function(value) {
            this.setInput("RequireLowercaseCharacters", value);
        }

        /*
        Set the value of the RequireNumbers input for this Choreo. ((optional, boolean) Determines whether numbers are required in the password. Valid values: "true" or "false" (the default).)
        */
        this.set_RequireNumbers = function(value) {
            this.setInput("RequireNumbers", value);
        }

        /*
        Set the value of the RequireSymbols input for this Choreo. ((optional, boolean) Determines whether symbols are required in the password. Valid values: "true" or "false" (the default).)
        */
        this.set_RequireSymbols = function(value) {
            this.setInput("RequireSymbols", value);
        }

        /*
        Set the value of the RequireUppercaseCharacters input for this Choreo. ((optional, boolean) Determines whether at least one upper-case character is required in the password. Valid values: "true" or "false" (the default).)
        */
        this.set_RequireUppercaseCharacters = function(value) {
            this.setInput("RequireUppercaseCharacters", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAccountPasswordPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAccountPasswordPolicyResultSet = function(resultStream) {
    UpdateAccountPasswordPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAccountPasswordPolicy, choreography.Choreography);
util.inherits(UpdateAccountPasswordPolicyInputSet, choreography.InputSet);
util.inherits(UpdateAccountPasswordPolicyResultSet, choreography.ResultSet);
exports.UpdateAccountPasswordPolicy = UpdateAccountPasswordPolicy;


/*
    UpdateGroup
    Updates the name and/or the path of a specified group.
*/


var UpdateGroup = function(session) {
    /*
        Create a new instance of the UpdateGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateGroup"
    UpdateGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateGroupInputSet = function() {
    UpdateGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) The name of the group to update.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the NewGroupName input for this Choreo. ((optional, string) The new name of the group. Include a value here only if you are updating the group's name.)
        */
        this.set_NewGroupName = function(value) {
            this.setInput("NewGroupName", value);
        }

        /*
        Set the value of the NewPath input for this Choreo. ((optional, string) The new path for the group. Include a value here only if you are changing the user's existing path.)
        */
        this.set_NewPath = function(value) {
            this.setInput("NewPath", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateGroupResultSet = function(resultStream) {
    UpdateGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateGroup, choreography.Choreography);
util.inherits(UpdateGroupInputSet, choreography.InputSet);
util.inherits(UpdateGroupResultSet, choreography.ResultSet);
exports.UpdateGroup = UpdateGroup;


/*
    UpdateLoginProfile
    Changes the password for the specified user.
*/


var UpdateLoginProfile = function(session) {
    /*
        Create a new instance of the UpdateLoginProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateLoginProfile"
    UpdateLoginProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateLoginProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateLoginProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateLoginProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateLoginProfileInputSet = function() {
    UpdateLoginProfileInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the MustChangePassword input for this Choreo. ((optional, boolean) Specifies whether or not the user should be required to change their password immediately.  Valid values are true/false or 1/0.)
        */
        this.set_MustChangePassword = function(value) {
            this.setInput("MustChangePassword", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The new password for the user name.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to update.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateLoginProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateLoginProfileResultSet = function(resultStream) {
    UpdateLoginProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateLoginProfile, choreography.Choreography);
util.inherits(UpdateLoginProfileInputSet, choreography.InputSet);
util.inherits(UpdateLoginProfileResultSet, choreography.ResultSet);
exports.UpdateLoginProfile = UpdateLoginProfile;


/*
    UpdateServerCertificate
    Updates the name and/or the path of the specified server certificate.
*/


var UpdateServerCertificate = function(session) {
    /*
        Create a new instance of the UpdateServerCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateServerCertificate"
    UpdateServerCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateServerCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateServerCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateServerCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateServerCertificateInputSet = function() {
    UpdateServerCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the NewPath input for this Choreo. ((conditional, string) The new path for the server certificate. Include this only if you are updating the server certificate's path.)
        */
        this.set_NewPath = function(value) {
            this.setInput("NewPath", value);
        }

        /*
        Set the value of the NewServerCertificateName input for this Choreo. ((conditional, string) The new name for the server certificate. Include this only if you are updating the server certificate's name.)
        */
        this.set_NewServerCertificateName = function(value) {
            this.setInput("NewServerCertificateName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ServerCertificateName input for this Choreo. ((required, string) The name for the server certificate. Do not include the path in this value.)
        */
        this.set_ServerCertificateName = function(value) {
            this.setInput("ServerCertificateName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateServerCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateServerCertificateResultSet = function(resultStream) {
    UpdateServerCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateServerCertificate, choreography.Choreography);
util.inherits(UpdateServerCertificateInputSet, choreography.InputSet);
util.inherits(UpdateServerCertificateResultSet, choreography.ResultSet);
exports.UpdateServerCertificate = UpdateServerCertificate;


/*
    UpdateSigningCertificate
    Changes the status of the specified signing certificate from active to disabled, or vice versa. This action can be used to disable a user's signing certificate as part of a certificate rotation workflow.
*/


var UpdateSigningCertificate = function(session) {
    /*
        Create a new instance of the UpdateSigningCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateSigningCertificate"
    UpdateSigningCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateSigningCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateSigningCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateSigningCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateSigningCertificateInputSet = function() {
    UpdateSigningCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the CertificateId input for this Choreo. ((required, string) The ID of the signing certificate you want to update.)
        */
        this.set_CertificateId = function(value) {
            this.setInput("CertificateId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((required, string) The status you want to assign to the certificate. Active means the certificate can be used for API calls to AWS, while Inactive means the certificate cannot be used.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((optional, string) Name of the user the signing certificate belongs to.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateSigningCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateSigningCertificateResultSet = function(resultStream) {
    UpdateSigningCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateSigningCertificate, choreography.Choreography);
util.inherits(UpdateSigningCertificateInputSet, choreography.InputSet);
util.inherits(UpdateSigningCertificateResultSet, choreography.ResultSet);
exports.UpdateSigningCertificate = UpdateSigningCertificate;


/*
    UpdateUser
    Updates the name and/or the path of a specified user.
*/


var UpdateUser = function(session) {
    /*
        Create a new instance of the UpdateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UpdateUser"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the NewPath input for this Choreo. ((optional, string) The new path for the user. Include a value here only if you are changing the user's existing path. The path needs to start with and end with a slash(/).  For example, "/Division/HR/".)
        */
        this.set_NewPath = function(value) {
            this.setInput("NewPath", value);
        }

        /*
        Set the value of the NewUserName input for this Choreo. ((optional, string) The new name of the user. Include a value here only if you are updating the user's name.)
        */
        this.set_NewUserName = function(value) {
            this.setInput("NewUserName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) The name of the user to update.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserResultSet = function(resultStream) {
    UpdateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUser, choreography.Choreography);
util.inherits(UpdateUserInputSet, choreography.InputSet);
util.inherits(UpdateUserResultSet, choreography.ResultSet);
exports.UpdateUser = UpdateUser;


/*
    UploadServerCertificate
    Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.
*/


var UploadServerCertificate = function(session) {
    /*
        Create a new instance of the UploadServerCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UploadServerCertificate"
    UploadServerCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadServerCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadServerCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadServerCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadServerCertificateInputSet = function() {
    UploadServerCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the CertificateBody input for this Choreo. ((required, multiline) The contents of the signing certificate.)
        */
        this.set_CertificateBody = function(value) {
            this.setInput("CertificateBody", value);
        }

        /*
        Set the value of the CertificateChain input for this Choreo. ((optional, multiline) The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain.)
        */
        this.set_CertificateChain = function(value) {
            this.setInput("CertificateChain", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) The path for the server certificate.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

        /*
        Set the value of the PrivateKey input for this Choreo. ((required, multiline) The contents of the private key in PEM-encoded format.)
        */
        this.set_PrivateKey = function(value) {
            this.setInput("PrivateKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ServerCertificateName input for this Choreo. ((required, string) The name for the server certificate. Do not include the path in this value.)
        */
        this.set_ServerCertificateName = function(value) {
            this.setInput("ServerCertificateName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UploadServerCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadServerCertificateResultSet = function(resultStream) {
    UploadServerCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadServerCertificate, choreography.Choreography);
util.inherits(UploadServerCertificateInputSet, choreography.InputSet);
util.inherits(UploadServerCertificateResultSet, choreography.ResultSet);
exports.UploadServerCertificate = UploadServerCertificate;


/*
    UploadSigningCertificate
    Uploads an X.509 signing certificate and associates it with the specified user.
*/


var UploadSigningCertificate = function(session) {
    /*
        Create a new instance of the UploadSigningCertificate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/IAM/UploadSigningCertificate"
    UploadSigningCertificate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadSigningCertificateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadSigningCertificateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadSigningCertificate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadSigningCertificateInputSet = function() {
    UploadSigningCertificateInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the CertificateBody input for this Choreo. ((required, multiline) The contents of the signing certificate.)
        */
        this.set_CertificateBody = function(value) {
            this.setInput("CertificateBody", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((optional, string) The name of the user.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UploadSigningCertificate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadSigningCertificateResultSet = function(resultStream) {
    UploadSigningCertificateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadSigningCertificate, choreography.Choreography);
util.inherits(UploadSigningCertificateInputSet, choreography.InputSet);
util.inherits(UploadSigningCertificateResultSet, choreography.ResultSet);
exports.UploadSigningCertificate = UploadSigningCertificate;

