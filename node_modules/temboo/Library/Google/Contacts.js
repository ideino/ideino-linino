
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateContact
    Create a new contact.
*/


var CreateContact = function(session) {
    /*
        Create a new instance of the CreateContact Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/CreateContact"
    CreateContact.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateContactResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateContactInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateContact
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateContactInputSet = function() {
    CreateContactInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The OAuth client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The OAuth client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) The new contact's email address.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((conditional, string) The new contact's first name.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((conditional, string) The new contact's last name.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((optional, string) The phone number for the new contact. It's best to use the "(555) 123-4567" format.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateContact Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateContactResultSet = function(resultStream) {
    CreateContactResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "ContactID" output from this Choreo execution. ((string) The unique ID supplied by Google for the new user.)
        */
        this.get_ContactID = function() {
            return this.getResult("ContactID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateContact, choreography.Choreography);
util.inherits(CreateContactInputSet, choreography.InputSet);
util.inherits(CreateContactResultSet, choreography.ResultSet);
exports.CreateContact = CreateContact;


/*
    DeleteContact
    Deletes a specified contact.
*/


var DeleteContact = function(session) {
    /*
        Create a new instance of the DeleteContact Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/DeleteContact"
    DeleteContact.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteContactResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteContactInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteContact
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteContactInputSet = function() {
    DeleteContactInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The OAuth client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The OAuth client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the ContactID input for this Choreo. ((required, string) The unique ID string for the contact you want to delete.)
        */
        this.set_ContactID = function(value) {
            this.setInput("ContactID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteContact Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteContactResultSet = function(resultStream) {
    DeleteContactResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. No content is returned for a successful delete request.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteContact, choreography.Choreography);
util.inherits(DeleteContactInputSet, choreography.InputSet);
util.inherits(DeleteContactResultSet, choreography.ResultSet);
exports.DeleteContact = DeleteContact;


/*
    GetAllContacts
    Retrieve data for all contacts in an account.
*/


var GetAllContacts = function(session) {
    /*
        Create a new instance of the GetAllContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/GetAllContacts"
    GetAllContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllContactsInputSet = function() {
    GetAllContactsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserEmail input for this Choreo. ((optional, string) The email address of the user whose contacts you want to retrieve. Defaults to "default," or the user whose OAuth access token is passed.)
        */
        this.set_UserEmail = function(value) {
            this.setInput("UserEmail", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllContactsResultSet = function(resultStream) {
    GetAllContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
}

util.inherits(GetAllContacts, choreography.Choreography);
util.inherits(GetAllContactsInputSet, choreography.InputSet);
util.inherits(GetAllContactsResultSet, choreography.ResultSet);
exports.GetAllContacts = GetAllContacts;


/*
    GetAllGroups
    Retrieve data for all groups in an account.
*/


var GetAllGroups = function(session) {
    /*
        Create a new instance of the GetAllGroups Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/GetAllGroups"
    GetAllGroups.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllGroupsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllGroupsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllGroups
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllGroupsInputSet = function() {
    GetAllGroupsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The OAuth client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The OAuth client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllGroups Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllGroupsResultSet = function(resultStream) {
    GetAllGroupsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
}

util.inherits(GetAllGroups, choreography.Choreography);
util.inherits(GetAllGroupsInputSet, choreography.InputSet);
util.inherits(GetAllGroupsResultSet, choreography.ResultSet);
exports.GetAllGroups = GetAllGroups;


/*
    GetContactById
    Retrieves a specific contact with a given id.
*/


var GetContactById = function(session) {
    /*
        Create a new instance of the GetContactById Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/GetContactById"
    GetContactById.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetContactByIdResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetContactByIdInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetContactById
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetContactByIdInputSet = function() {
    GetContactByIdInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the ContactId input for this Choreo. ((required, string) The id associated with the contact to return. This can either be the individual id of the contact, or the full 'edit' link returned in the entry nodes of the GetAllContacts output.)
        */
        this.set_ContactId = function(value) {
            this.setInput("ContactId", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserEmail input for this Choreo. ((required, string) The email address of the user whose contacts you want to retrieve. Defaults to "default," or the user whose OAuth access token is passed.)
        */
        this.set_UserEmail = function(value) {
            this.setInput("UserEmail", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetContactById Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetContactByIdResultSet = function(resultStream) {
    GetContactByIdResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
}

util.inherits(GetContactById, choreography.Choreography);
util.inherits(GetContactByIdInputSet, choreography.InputSet);
util.inherits(GetContactByIdResultSet, choreography.ResultSet);
exports.GetContactById = GetContactById;


/*
    GetContactsWithQuery
    Retrieves the contact or contacts in that account that match a specified query term.
*/


var GetContactsWithQuery = function(session) {
    /*
        Create a new instance of the GetContactsWithQuery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/GetContactsWithQuery"
    GetContactsWithQuery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetContactsWithQueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetContactsWithQueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetContactsWithQuery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetContactsWithQueryInputSet = function() {
    GetContactsWithQueryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The OAuth client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The OAuth client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The contact criteria to search for, such as name or email address.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetContactsWithQuery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetContactsWithQueryResultSet = function(resultStream) {
    GetContactsWithQueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ContactID" output from this Choreo execution. ((string) The unique ID string for the retrieved contact. If more than one contact is retrieved by the request, only the first contact's ID is output.)
        */
        this.get_ContactID = function() {
            return this.getResult("ContactID");
        }
        /*
        Retrieve the value for the "Link" output from this Choreo execution. ((string) The unique edit link for the retrieved contact. If more than one contact is retrieved by the request, only the first contact's edit link is output.)
        */
        this.get_Link = function() {
            return this.getResult("Link");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetContactsWithQuery, choreography.Choreography);
util.inherits(GetContactsWithQueryInputSet, choreography.InputSet);
util.inherits(GetContactsWithQueryResultSet, choreography.ResultSet);
exports.GetContactsWithQuery = GetContactsWithQuery;


/*
    UpdateContact
    Update an existing contact's information.
*/


var UpdateContact = function(session) {
    /*
        Create a new instance of the UpdateContact Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Contacts/UpdateContact"
    UpdateContact.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateContactResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateContactInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateContact
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateContactInputSet = function() {
    UpdateContactInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The OAuth client ID provided by Google when you register your application.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The OAuth client secret provided by Google when you registered your application.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((conditional, string) The id of the contact to update. Required unless providing a value for the Query input.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the NewEmail input for this Choreo. ((conditional, string) The contact's new email address.)
        */
        this.set_NewEmail = function(value) {
            this.setInput("NewEmail", value);
        }

        /*
        Set the value of the NewFirstName input for this Choreo. ((conditional, string) The contact's new first name.)
        */
        this.set_NewFirstName = function(value) {
            this.setInput("NewFirstName", value);
        }

        /*
        Set the value of the NewLastName input for this Choreo. ((conditional, string) The contact's new last name.)
        */
        this.set_NewLastName = function(value) {
            this.setInput("NewLastName", value);
        }

        /*
        Set the value of the NewPhone input for this Choreo. ((optional, string) The contact's new telephone number.)
        */
        this.set_NewPhone = function(value) {
            this.setInput("NewPhone", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) A search term to retrieve the contact to update, such as an email address, last name, or address. Required unless providing a value for the ID input.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) The refresh token retrieved in the last step of the OAuth process. This is used when an access token is expired or not provided.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateContact Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateContactResultSet = function(resultStream) {
    UpdateContactResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FirstName" output from this Choreo execution. ((string) The contact's current given name.)
        */
        this.get_FirstName = function() {
            return this.getResult("FirstName");
        }
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) The access token retrieved in the last step of the OAuth process. Access tokens that are expired will be refreshed and returned in the Choreo output.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "Email" output from this Choreo execution. ((string) The contact's current email address.)
        */
        this.get_Email = function() {
            return this.getResult("Email");
        }
        /*
        Retrieve the value for the "LastName" output from this Choreo execution. ((string) The contact's current family name.)
        */
        this.get_LastName = function() {
            return this.getResult("LastName");
        }
        /*
        Retrieve the value for the "ContactID" output from this Choreo execution. ((string) The unique ID for the contact returned by Google.)
        */
        this.get_ContactID = function() {
            return this.getResult("ContactID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Phone" output from this Choreo execution. ((string) The contact's current telephone number.)
        */
        this.get_Phone = function() {
            return this.getResult("Phone");
        }
}

util.inherits(UpdateContact, choreography.Choreography);
util.inherits(UpdateContactInputSet, choreography.InputSet);
util.inherits(UpdateContactResultSet, choreography.ResultSet);
exports.UpdateContact = UpdateContact;

