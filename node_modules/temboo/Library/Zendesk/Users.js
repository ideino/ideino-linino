
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateManyUsers
    Creates many new users at one time.
*/


var CreateManyUsers = function(session) {
    /*
        Create a new instance of the CreateManyUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/CreateManyUsers"
    CreateManyUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateManyUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateManyUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateManyUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateManyUsersInputSet = function() {
    CreateManyUsersInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the Users input for this Choreo. ((required, json) A JSON-formatted string containing an array of user properties you wish to set.)
        */
        this.set_Users = function(value) {
            this.setInput("Users", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateManyUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateManyUsersResultSet = function(resultStream) {
    CreateManyUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateManyUsers, choreography.Choreography);
util.inherits(CreateManyUsersInputSet, choreography.InputSet);
util.inherits(CreateManyUsersResultSet, choreography.ResultSet);
exports.CreateManyUsers = CreateManyUsers;


/*
    CreateUser
    Creates a new user.
*/


var CreateUser = function(session) {
    /*
        Create a new instance of the CreateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/CreateUser"
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
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the UserData input for this Choreo. ((required, json) A JSON-formatted string containing the user properties you wish to set.)
        */
        this.set_UserData = function(value) {
            this.setInput("UserData", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateUserResultSet = function(resultStream) {
    CreateUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) )
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
    Deletes a given user.
*/


var DeleteUser = function(session) {
    /*
        Create a new instance of the DeleteUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/DeleteUser"
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
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the user to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the DeleteUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteUserResultSet = function(resultStream) {
    DeleteUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Zendesk.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteUser, choreography.Choreography);
util.inherits(DeleteUserInputSet, choreography.InputSet);
util.inherits(DeleteUserResultSet, choreography.ResultSet);
exports.DeleteUser = DeleteUser;


/*
    ListAllUsers
    Retrieves a list of all existing users.
*/


var ListAllUsers = function(session) {
    /*
        Create a new instance of the ListAllUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/ListAllUsers"
    ListAllUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllUsersInputSet = function() {
    ListAllUsersInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
A ResultSet with methods tailored to the values returned by the ListAllUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllUsersResultSet = function(resultStream) {
    ListAllUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListAllUsers, choreography.Choreography);
util.inherits(ListAllUsersInputSet, choreography.InputSet);
util.inherits(ListAllUsersResultSet, choreography.ResultSet);
exports.ListAllUsers = ListAllUsers;


/*
    ListUsersByGroup
    Retrieves a list of all users in a specified group.
*/


var ListUsersByGroup = function(session) {
    /*
        Create a new instance of the ListUsersByGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/ListUsersByGroup"
    ListUsersByGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUsersByGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUsersByGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUsersByGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUsersByGroupInputSet = function() {
    ListUsersByGroupInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((required, integer) The ID number of the group.)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
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
A ResultSet with methods tailored to the values returned by the ListUsersByGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUsersByGroupResultSet = function(resultStream) {
    ListUsersByGroupResultSet.super_.call(this, resultStream);    
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

util.inherits(ListUsersByGroup, choreography.Choreography);
util.inherits(ListUsersByGroupInputSet, choreography.InputSet);
util.inherits(ListUsersByGroupResultSet, choreography.ResultSet);
exports.ListUsersByGroup = ListUsersByGroup;


/*
    ListUsersByOrganization
    Retrieves a list of users involving a specified organization.
*/


var ListUsersByOrganization = function(session) {
    /*
        Create a new instance of the ListUsersByOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/ListUsersByOrganization"
    ListUsersByOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUsersByOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUsersByOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUsersByOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUsersByOrganizationInputSet = function() {
    ListUsersByOrganizationInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OrganizationID input for this Choreo. ((required, integer) The ID number of the organization.)
        */
        this.set_OrganizationID = function(value) {
            this.setInput("OrganizationID", value);
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
A ResultSet with methods tailored to the values returned by the ListUsersByOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUsersByOrganizationResultSet = function(resultStream) {
    ListUsersByOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(ListUsersByOrganization, choreography.Choreography);
util.inherits(ListUsersByOrganizationInputSet, choreography.InputSet);
util.inherits(ListUsersByOrganizationResultSet, choreography.ResultSet);
exports.ListUsersByOrganization = ListUsersByOrganization;


/*
    SearchUsers
    Returns a list of users who match the search parameters.
*/


var SearchUsers = function(session) {
    /*
        Create a new instance of the SearchUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/SearchUsers"
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
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the Query input for this Choreo. ((required, string) Perform a search across usernames or email addresses.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchUsersResultSet = function(resultStream) {
    SearchUsersResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchUsers, choreography.Choreography);
util.inherits(SearchUsersInputSet, choreography.InputSet);
util.inherits(SearchUsersResultSet, choreography.ResultSet);
exports.SearchUsers = SearchUsers;


/*
    ShowCurrentUser
    Returns information about the currently authenticated user.
*/


var ShowCurrentUser = function(session) {
    /*
        Create a new instance of the ShowCurrentUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/ShowCurrentUser"
    ShowCurrentUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowCurrentUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowCurrentUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowCurrentUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowCurrentUserInputSet = function() {
    ShowCurrentUserInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the ShowCurrentUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowCurrentUserResultSet = function(resultStream) {
    ShowCurrentUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowCurrentUser, choreography.Choreography);
util.inherits(ShowCurrentUserInputSet, choreography.InputSet);
util.inherits(ShowCurrentUserResultSet, choreography.ResultSet);
exports.ShowCurrentUser = ShowCurrentUser;


/*
    ShowUser
    Returns information about given user.
*/


var ShowUser = function(session) {
    /*
        Create a new instance of the ShowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/ShowUser"
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
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID number of a user.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the ShowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowUserResultSet = function(resultStream) {
    ShowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
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
    SuspendUser
    Suspends an existing user.
*/


var SuspendUser = function(session) {
    /*
        Create a new instance of the SuspendUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/SuspendUser"
    SuspendUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SuspendUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SuspendUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SuspendUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SuspendUserInputSet = function() {
    SuspendUserInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the UserID input for this Choreo. ((required, integer) The id of the user being updated.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SuspendUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SuspendUserResultSet = function(resultStream) {
    SuspendUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SuspendUser, choreography.Choreography);
util.inherits(SuspendUserInputSet, choreography.InputSet);
util.inherits(SuspendUserResultSet, choreography.ResultSet);
exports.SuspendUser = SuspendUser;


/*
    UpdateUser
    Updates an existing user.
*/


var UpdateUser = function(session) {
    /*
        Create a new instance of the UpdateUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/UpdateUser"
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
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the UserData input for this Choreo. ((required, json) A JSON-formatted string containing the user properties you wish to set.)
        */
        this.set_UserData = function(value) {
            this.setInput("UserData", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, integer) The ID of the user being updated.)
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
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
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
    UpdateUserImage
    Updates a user's profile image.
*/


var UpdateUserImage = function(session) {
    /*
        Create a new instance of the UpdateUserImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Users/UpdateUserImage"
    UpdateUserImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateUserImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateUserImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateUserImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateUserImageInputSet = function() {
    UpdateUserImageInputSet.super_.call(this);
        /*
        Set the value of the Response input for this Choreo. ((required, json) The response from Zendesk.)
        */
        this.set_Response = function(value) {
            this.setInput("Response", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ImageURL input for this Choreo. ((required, string) The URL of the profile image.)
        */
        this.set_ImageURL = function(value) {
            this.setInput("ImageURL", value);
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
        Set the value of the UserID input for this Choreo. ((required, integer) The ID of the user being updated.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUserImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserImageResultSet = function(resultStream) {
    UpdateUserImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((required, json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUserImage, choreography.Choreography);
util.inherits(UpdateUserImageInputSet, choreography.InputSet);
util.inherits(UpdateUserImageResultSet, choreography.ResultSet);
exports.UpdateUserImage = UpdateUserImage;

