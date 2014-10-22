
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ResetPassword
    Reset a SendGrid account password.
*/


var ResetPassword = function(session) {
    /*
        Create a new instance of the ResetPassword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Profile/ResetPassword"
    ResetPassword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ResetPasswordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ResetPasswordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ResetPassword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ResetPasswordInputSet = function() {
    ResetPasswordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the ConfirmPassword input for this Choreo. ((required, string) The new account password.  Must match the string entered in the Password variable.  Minumum password length is 6 characters.)
        */
        this.set_ConfirmPassword = function(value) {
            this.setInput("ConfirmPassword", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The new account password of 6 characters or more.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ResetPassword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ResetPasswordResultSet = function(resultStream) {
    ResetPasswordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ResetPassword, choreography.Choreography);
util.inherits(ResetPasswordInputSet, choreography.InputSet);
util.inherits(ResetPasswordResultSet, choreography.ResultSet);
exports.ResetPassword = ResetPassword;


/*
    UpdateAccountProfile
    Update a SendGrid account profile.
*/


var UpdateAccountProfile = function(session) {
    /*
        Create a new instance of the UpdateAccountProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Profile/UpdateAccountProfile"
    UpdateAccountProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAccountProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAccountProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAccountProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAccountProfileInputSet = function() {
    UpdateAccountProfileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((optional, string) The company address.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The city where this address is located in.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) The first name of the profile being updated.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) The last name of the profile being updated.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((optional, string) The phone number, where you can be reached.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state where this company is located in.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Website input for this Choreo. ((optional, string) The company's website.)
        */
        this.set_Website = function(value) {
            this.setInput("Website", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, string) The zipcode where this company is located.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAccountProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAccountProfileResultSet = function(resultStream) {
    UpdateAccountProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAccountProfile, choreography.Choreography);
util.inherits(UpdateAccountProfileInputSet, choreography.InputSet);
util.inherits(UpdateAccountProfileResultSet, choreography.ResultSet);
exports.UpdateAccountProfile = UpdateAccountProfile;


/*
    UpdateContactProfileEmailAddress
    Update an account username.
*/


var UpdateContactProfileEmailAddress = function(session) {
    /*
        Create a new instance of the UpdateContactProfileEmailAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Profile/UpdateContactProfileEmailAddress"
    UpdateContactProfileEmailAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateContactProfileEmailAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateContactProfileEmailAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateContactProfileEmailAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateContactProfileEmailAddressInputSet = function() {
    UpdateContactProfileEmailAddressInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the NewEmailAddress input for this Choreo. ((required, string) A valid email address, not exceeding 100 characters. This address will be used for all future communication with SendGrid. A confirmation email will be sent to validate the change of address.)
        */
        this.set_NewEmailAddress = function(value) {
            this.setInput("NewEmailAddress", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateContactProfileEmailAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateContactProfileEmailAddressResultSet = function(resultStream) {
    UpdateContactProfileEmailAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateContactProfileEmailAddress, choreography.Choreography);
util.inherits(UpdateContactProfileEmailAddressInputSet, choreography.InputSet);
util.inherits(UpdateContactProfileEmailAddressResultSet, choreography.ResultSet);
exports.UpdateContactProfileEmailAddress = UpdateContactProfileEmailAddress;


/*
    UpdateUsername
    Update an account username.
*/


var UpdateUsername = function(session) {
    /*
        Create a new instance of the UpdateUsername Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Profile/UpdateUsername"
    UpdateUsername.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateUsernameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateUsernameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateUsername
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateUsernameInputSet = function() {
    UpdateUsernameInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the NewUsername input for this Choreo. ((required, string) The new username, to be used for authenticating on the SendGrid SMTP servers and website. Must not exceed 100 characters. The username cannot be already taken or contain the SendGrid.com domain)
        */
        this.set_NewUsername = function(value) {
            this.setInput("NewUsername", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUsername Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUsernameResultSet = function(resultStream) {
    UpdateUsernameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUsername, choreography.Choreography);
util.inherits(UpdateUsernameInputSet, choreography.InputSet);
util.inherits(UpdateUsernameResultSet, choreography.ResultSet);
exports.UpdateUsername = UpdateUsername;


/*
    ViewAccountProfile
    Display account profile information.
*/


var ViewAccountProfile = function(session) {
    /*
        Create a new instance of the ViewAccountProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Profile/ViewAccountProfile"
    ViewAccountProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ViewAccountProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ViewAccountProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ViewAccountProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ViewAccountProfileInputSet = function() {
    ViewAccountProfileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ViewAccountProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ViewAccountProfileResultSet = function(resultStream) {
    ViewAccountProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ViewAccountProfile, choreography.Choreography);
util.inherits(ViewAccountProfileInputSet, choreography.InputSet);
util.inherits(ViewAccountProfileResultSet, choreography.ResultSet);
exports.ViewAccountProfile = ViewAccountProfile;

