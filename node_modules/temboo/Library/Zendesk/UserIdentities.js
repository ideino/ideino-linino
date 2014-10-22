
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddUserIdentity
    Allows an agent to add new identities for a given user ID. 
*/


var AddUserIdentity = function(session) {
    /*
        Create a new instance of the AddUserIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/AddUserIdentity"
    AddUserIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddUserIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddUserIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddUserIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddUserIdentityInputSet = function() {
    AddUserIdentityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The unique idenity (e.g.  test@test.com, test@gmail.com, screen_name))
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((conditional, string) Type of identity to add (e.g. email, facebook, twitter, google))
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddUserIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddUserIdentityResultSet = function(resultStream) {
    AddUserIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddUserIdentity, choreography.Choreography);
util.inherits(AddUserIdentityInputSet, choreography.InputSet);
util.inherits(AddUserIdentityResultSet, choreography.ResultSet);
exports.AddUserIdentity = AddUserIdentity;


/*
    AddUserIdentityByEndUser
     Allows an end-user  to add new identities for a given user ID.
*/


var AddUserIdentityByEndUser = function(session) {
    /*
        Create a new instance of the AddUserIdentityByEndUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/AddUserIdentityByEndUser"
    AddUserIdentityByEndUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddUserIdentityByEndUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddUserIdentityByEndUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddUserIdentityByEndUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddUserIdentityByEndUserInputSet = function() {
    AddUserIdentityByEndUserInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The unique idenity (e.g.  test@test.com, test@gmail.com, screen_name))
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((conditional, string) Type of identity to add (e.g. email, facebook, twitter, google))
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddUserIdentityByEndUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddUserIdentityByEndUserResultSet = function(resultStream) {
    AddUserIdentityByEndUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddUserIdentityByEndUser, choreography.Choreography);
util.inherits(AddUserIdentityByEndUserInputSet, choreography.InputSet);
util.inherits(AddUserIdentityByEndUserResultSet, choreography.ResultSet);
exports.AddUserIdentityByEndUser = AddUserIdentityByEndUser;


/*
    DeleteUserIdentity
     Deletes the user identity for a user/
*/


var DeleteUserIdentity = function(session) {
    /*
        Create a new instance of the DeleteUserIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/DeleteUserIdentity"
    DeleteUserIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteUserIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteUserIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteUserIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteUserIdentityInputSet = function() {
    DeleteUserIdentityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((required, string) The ID of the Identity to delete.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUserIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserIdentityResultSet = function(resultStream) {
    DeleteUserIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteUserIdentity, choreography.Choreography);
util.inherits(DeleteUserIdentityInputSet, choreography.InputSet);
util.inherits(DeleteUserIdentityResultSet, choreography.ResultSet);
exports.DeleteUserIdentity = DeleteUserIdentity;


/*
    ListUserIdentities
    Lists all User Identities for a given User
*/


var ListUserIdentities = function(session) {
    /*
        Create a new instance of the ListUserIdentities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/ListUserIdentities"
    ListUserIdentities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUserIdentitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUserIdentitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUserIdentities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUserIdentitiesInputSet = function() {
    ListUserIdentitiesInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUserIdentities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUserIdentitiesResultSet = function(resultStream) {
    ListUserIdentitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(ListUserIdentities, choreography.Choreography);
util.inherits(ListUserIdentitiesInputSet, choreography.InputSet);
util.inherits(ListUserIdentitiesResultSet, choreography.ResultSet);
exports.ListUserIdentities = ListUserIdentities;


/*
    MakeUserIdentityThePrimary
    Sets the given user identity to primary.
*/


var MakeUserIdentityThePrimary = function(session) {
    /*
        Create a new instance of the MakeUserIdentityThePrimary Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/MakeUserIdentityThePrimary"
    MakeUserIdentityThePrimary.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MakeUserIdentityThePrimaryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MakeUserIdentityThePrimaryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MakeUserIdentityThePrimary
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MakeUserIdentityThePrimaryInputSet = function() {
    MakeUserIdentityThePrimaryInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((conditional, string) ID of the Identity to be updated.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MakeUserIdentityThePrimary Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MakeUserIdentityThePrimaryResultSet = function(resultStream) {
    MakeUserIdentityThePrimaryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MakeUserIdentityThePrimary, choreography.Choreography);
util.inherits(MakeUserIdentityThePrimaryInputSet, choreography.InputSet);
util.inherits(MakeUserIdentityThePrimaryResultSet, choreography.ResultSet);
exports.MakeUserIdentityThePrimary = MakeUserIdentityThePrimary;


/*
    RequestUserVerification
    This sends a verification email to the user, asking him to click a link in order to verify ownership of the email address.
*/


var RequestUserVerification = function(session) {
    /*
        Create a new instance of the RequestUserVerification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/RequestUserVerification"
    RequestUserVerification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RequestUserVerificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RequestUserVerificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RequestUserVerification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RequestUserVerificationInputSet = function() {
    RequestUserVerificationInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((conditional, string) The ID of the Identity to be verified.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RequestUserVerification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RequestUserVerificationResultSet = function(resultStream) {
    RequestUserVerificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RequestUserVerification, choreography.Choreography);
util.inherits(RequestUserVerificationInputSet, choreography.InputSet);
util.inherits(RequestUserVerificationResultSet, choreography.ResultSet);
exports.RequestUserVerification = RequestUserVerification;


/*
    ShowUserIdentity
    Shows the identity with the given ID.
*/


var ShowUserIdentity = function(session) {
    /*
        Create a new instance of the ShowUserIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/ShowUserIdentity"
    ShowUserIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowUserIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowUserIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowUserIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowUserIdentityInputSet = function() {
    ShowUserIdentityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((required, string) The ID of the Identity.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowUserIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowUserIdentityResultSet = function(resultStream) {
    ShowUserIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowUserIdentity, choreography.Choreography);
util.inherits(ShowUserIdentityInputSet, choreography.InputSet);
util.inherits(ShowUserIdentityResultSet, choreography.ResultSet);
exports.ShowUserIdentity = ShowUserIdentity;


/*
    UpdateUserIdentity
    Updates the User Identity.    This API method only allows you to set an identity as verified.
*/


var UpdateUserIdentity = function(session) {
    /*
        Create a new instance of the UpdateUserIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/UpdateUserIdentity"
    UpdateUserIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateUserIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateUserIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateUserIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateUserIdentityInputSet = function() {
    UpdateUserIdentityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((conditional, string) The ID of the Identity to be updated.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Verified input for this Choreo. ((required, string) Specifies whether the identity has been verified (true or false).)
        */
        this.set_Verified = function(value) {
            this.setInput("Verified", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUserIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserIdentityResultSet = function(resultStream) {
    UpdateUserIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUserIdentity, choreography.Choreography);
util.inherits(UpdateUserIdentityInputSet, choreography.InputSet);
util.inherits(UpdateUserIdentityResultSet, choreography.ResultSet);
exports.UpdateUserIdentity = UpdateUserIdentity;


/*
    VerifyUserIdentity
    Verifies the User Identity.   
*/


var VerifyUserIdentity = function(session) {
    /*
        Create a new instance of the VerifyUserIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/UserIdentities/VerifyUserIdentity"
    VerifyUserIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VerifyUserIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VerifyUserIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VerifyUserIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VerifyUserIdentityInputSet = function() {
    VerifyUserIdentityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IdentityID input for this Choreo. ((conditional, string) The ID of the Identity to verify.)
        */
        this.set_IdentityID = function(value) {
            this.setInput("IdentityID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VerifyUserIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VerifyUserIdentityResultSet = function(resultStream) {
    VerifyUserIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VerifyUserIdentity, choreography.Choreography);
util.inherits(VerifyUserIdentityInputSet, choreography.InputSet);
util.inherits(VerifyUserIdentityResultSet, choreography.ResultSet);
exports.VerifyUserIdentity = VerifyUserIdentity;

