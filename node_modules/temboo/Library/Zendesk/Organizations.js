
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AutocompleteOrganizationName
    Returns an array of organizations whose name starts with the value specified in the name parameter.
*/


var AutocompleteOrganizationName = function(session) {
    /*
        Create a new instance of the AutocompleteOrganizationName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/AutocompleteOrganizationName"
    AutocompleteOrganizationName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AutocompleteOrganizationNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AutocompleteOrganizationNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AutocompleteOrganizationName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AutocompleteOrganizationNameInputSet = function() {
    AutocompleteOrganizationNameInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) Prefix used to generate a list of Organization names. Must be at least 2 characters long.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the AutocompleteOrganizationName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AutocompleteOrganizationNameResultSet = function(resultStream) {
    AutocompleteOrganizationNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AutocompleteOrganizationName, choreography.Choreography);
util.inherits(AutocompleteOrganizationNameInputSet, choreography.InputSet);
util.inherits(AutocompleteOrganizationNameResultSet, choreography.ResultSet);
exports.AutocompleteOrganizationName = AutocompleteOrganizationName;


/*
    CreateManyOrganizations
    Create multiple organizations with a single request. 
*/


var CreateManyOrganizations = function(session) {
    /*
        Create a new instance of the CreateManyOrganizations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/CreateManyOrganizations"
    CreateManyOrganizations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateManyOrganizationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateManyOrganizationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateManyOrganizations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateManyOrganizationsInputSet = function() {
    CreateManyOrganizationsInputSet.super_.call(this);
        /*
        Set the value of the OrganizationData input for this Choreo. ((optional, json) A JSON-formatted string containing an array of organization properties you wish to set. This can used when you need to set multiple properties.)
        */
        this.set_OrganizationData = function(value) {
            this.setInput("OrganizationData", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Names input for this Choreo. ((conditional, string) Comma-seperated list of up to 10  organization names to create.)
        */
        this.set_Names = function(value) {
            this.setInput("Names", value);
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
A ResultSet with methods tailored to the values returned by the CreateManyOrganizations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateManyOrganizationsResultSet = function(resultStream) {
    CreateManyOrganizationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateManyOrganizations, choreography.Choreography);
util.inherits(CreateManyOrganizationsInputSet, choreography.InputSet);
util.inherits(CreateManyOrganizationsResultSet, choreography.ResultSet);
exports.CreateManyOrganizations = CreateManyOrganizations;


/*
    CreateOrganization
    Create an organization.
*/


var CreateOrganization = function(session) {
    /*
        Create a new instance of the CreateOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/CreateOrganization"
    CreateOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateOrganizationInputSet = function() {
    CreateOrganizationInputSet.super_.call(this);
        /*
        Set the value of the OrganizationData input for this Choreo. ((optional, json) A JSON-formatted string containing the organization properties you wish to set. This can used when you need to set multiple properties.)
        */
        this.set_OrganizationData = function(value) {
            this.setInput("OrganizationData", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) Name of the organization to create.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the CreateOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateOrganizationResultSet = function(resultStream) {
    CreateOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateOrganization, choreography.Choreography);
util.inherits(CreateOrganizationInputSet, choreography.InputSet);
util.inherits(CreateOrganizationResultSet, choreography.ResultSet);
exports.CreateOrganization = CreateOrganization;


/*
    DeleteOrganization
    Deletes an existing organization.
*/


var DeleteOrganization = function(session) {
    /*
        Create a new instance of the DeleteOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/DeleteOrganization"
    DeleteOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteOrganizationInputSet = function() {
    DeleteOrganizationInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) ID of the organization to delete.)
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
A ResultSet with methods tailored to the values returned by the DeleteOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteOrganizationResultSet = function(resultStream) {
    DeleteOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Zendesk.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteOrganization, choreography.Choreography);
util.inherits(DeleteOrganizationInputSet, choreography.InputSet);
util.inherits(DeleteOrganizationResultSet, choreography.ResultSet);
exports.DeleteOrganization = DeleteOrganization;


/*
    GetOrganization
    Get detailed info for a given organization.
*/


var GetOrganization = function(session) {
    /*
        Create a new instance of the GetOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/GetOrganization"
    GetOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetOrganizationInputSet = function() {
    GetOrganizationInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) ID of the organization to get.)
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
A ResultSet with methods tailored to the values returned by the GetOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetOrganizationResultSet = function(resultStream) {
    GetOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetOrganization, choreography.Choreography);
util.inherits(GetOrganizationInputSet, choreography.InputSet);
util.inherits(GetOrganizationResultSet, choreography.ResultSet);
exports.GetOrganization = GetOrganization;


/*
    ListOrganizations
    Lists all organizations.
*/


var ListOrganizations = function(session) {
    /*
        Create a new instance of the ListOrganizations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/ListOrganizations"
    ListOrganizations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrganizationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrganizationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrganizations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrganizationsInputSet = function() {
    ListOrganizationsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListOrganizations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrganizationsResultSet = function(resultStream) {
    ListOrganizationsResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListOrganizations, choreography.Choreography);
util.inherits(ListOrganizationsInputSet, choreography.InputSet);
util.inherits(ListOrganizationsResultSet, choreography.ResultSet);
exports.ListOrganizations = ListOrganizations;


/*
    ListOrganizationsByUser
    Lists all organizations by user.
*/


var ListOrganizationsByUser = function(session) {
    /*
        Create a new instance of the ListOrganizationsByUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/ListOrganizationsByUser"
    ListOrganizationsByUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrganizationsByUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrganizationsByUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrganizationsByUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrganizationsByUserInputSet = function() {
    ListOrganizationsByUserInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) ID of the user.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the Number parameter to paginate a large set of results.)
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
A ResultSet with methods tailored to the values returned by the ListOrganizationsByUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrganizationsByUserResultSet = function(resultStream) {
    ListOrganizationsByUserResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListOrganizationsByUser, choreography.Choreography);
util.inherits(ListOrganizationsByUserInputSet, choreography.InputSet);
util.inherits(ListOrganizationsByUserResultSet, choreography.ResultSet);
exports.ListOrganizationsByUser = ListOrganizationsByUser;


/*
    UpdateOrganization
    Update an existing organization.
*/


var UpdateOrganization = function(session) {
    /*
        Create a new instance of the UpdateOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Organizations/UpdateOrganization"
    UpdateOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateOrganizationInputSet = function() {
    UpdateOrganizationInputSet.super_.call(this);
        /*
        Set the value of the OrganizationData input for this Choreo. ((optional, json) A JSON-formatted string containing the organization properties you wish to set. This can used when you need to set multiple properties.)
        */
        this.set_OrganizationData = function(value) {
            this.setInput("OrganizationData", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) ID of the organization to update.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Notes input for this Choreo. ((conditional, string) Notes on the organization.)
        */
        this.set_Notes = function(value) {
            this.setInput("Notes", value);
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
A ResultSet with methods tailored to the values returned by the UpdateOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateOrganizationResultSet = function(resultStream) {
    UpdateOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateOrganization, choreography.Choreography);
util.inherits(UpdateOrganizationInputSet, choreography.InputSet);
util.inherits(UpdateOrganizationResultSet, choreography.ResultSet);
exports.UpdateOrganization = UpdateOrganization;

