
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddMultipleContacts
    Creates multiple contacts in your Constant Contact list via the Activities bulk API.  The Choreo can use Excel or CSV files for the bulk upload.
*/


var AddMultipleContacts = function(session) {
    /*
        Create a new instance of the AddMultipleContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/AddMultipleContacts"
    AddMultipleContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddMultipleContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddMultipleContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddMultipleContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddMultipleContactsInputSet = function() {
    AddMultipleContactsInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((conditional, multiline) The file contents of the list you want to upload. Should be in CSV format.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, integer) The numberic id for the list that you want to add contacts to.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to the vault CSV file you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddMultipleContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddMultipleContactsResultSet = function(resultStream) {
    AddMultipleContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddMultipleContacts, choreography.Choreography);
util.inherits(AddMultipleContactsInputSet, choreography.InputSet);
util.inherits(AddMultipleContactsResultSet, choreography.ResultSet);
exports.AddMultipleContacts = AddMultipleContacts;


/*
    CreateContact
    Creates a contact in your Constant Contact account.
*/


var CreateContact = function(session) {
    /*
        Create a new instance of the CreateContact Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/CreateContact"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Addr1 input for this Choreo. ((optional, string) The first line of the contact's address.)
        */
        this.set_Addr1 = function(value) {
            this.setInput("Addr1", value);
        }

        /*
        Set the value of the Addr2 input for this Choreo. ((optional, string) The second line of the contact's address.)
        */
        this.set_Addr2 = function(value) {
            this.setInput("Addr2", value);
        }

        /*
        Set the value of the Addr3 input for this Choreo. ((optional, string) The third line of the contact's address.)
        */
        this.set_Addr3 = function(value) {
            this.setInput("Addr3", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The city portion of the contact's address.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the CompanyName input for this Choreo. ((optional, string) The company name for the contact.)
        */
        this.set_CompanyName = function(value) {
            this.setInput("CompanyName", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) The country code associated with the contact's address.)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the CountryName input for this Choreo. ((optional, string) Corresponds to the Country Name field in Constant Contact)
        */
        this.set_CountryName = function(value) {
            this.setInput("CountryName", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address for the contact.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the EmailType input for this Choreo. ((optional, string) The email type that the contact should receive.)
        */
        this.set_EmailType = function(value) {
            this.setInput("EmailType", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) The first name of the contact.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the HomePhone input for this Choreo. ((optional, string) The contact's home phone.)
        */
        this.set_HomePhone = function(value) {
            this.setInput("HomePhone", value);
        }

        /*
        Set the value of the JobTitle input for this Choreo. ((optional, string) The contact's job title.)
        */
        this.set_JobTitle = function(value) {
            this.setInput("JobTitle", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) The last name of the contact.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, integer) The ID for the list that you want to add the contact to.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the MiddleName input for this Choreo. ((optional, string) The middle name of the contact.)
        */
        this.set_MiddleName = function(value) {
            this.setInput("MiddleName", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The full name of the contact.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Note input for this Choreo. ((optional, string) A note associated with the contact.)
        */
        this.set_Note = function(value) {
            this.setInput("Note", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((optional, string) The postal code for the contact's address.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the StateCode input for this Choreo. ((optional, string) The state code for the contact's address.)
        */
        this.set_StateCode = function(value) {
            this.setInput("StateCode", value);
        }

        /*
        Set the value of the StateName input for this Choreo. ((optional, string) Corresponds to the State Name field in Constant Contact)
        */
        this.set_StateName = function(value) {
            this.setInput("StateName", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) The status of the contact (i.e. Active).)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the SubPostalCode input for this Choreo. ((optional, string) The sub postal code for the contact.)
        */
        this.set_SubPostalCode = function(value) {
            this.setInput("SubPostalCode", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

        /*
        Set the value of the WorkPhone input for this Choreo. ((optional, string) The contact's work phone.)
        */
        this.set_WorkPhone = function(value) {
            this.setInput("WorkPhone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateContact Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateContactResultSet = function(resultStream) {
    CreateContactResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
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
    ListAllContacts
    Retrieves a list of all contacts from Constant Contact.
*/


var ListAllContacts = function(session) {
    /*
        Create a new instance of the ListAllContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/ListAllContacts"
    ListAllContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllContactsInputSet = function() {
    ListAllContactsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllContactsResultSet = function(resultStream) {
    ListAllContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllContacts, choreography.Choreography);
util.inherits(ListAllContactsInputSet, choreography.InputSet);
util.inherits(ListAllContactsResultSet, choreography.ResultSet);
exports.ListAllContacts = ListAllContacts;


/*
    ObtainContactInformation
    Retrieves contact information from Constant Contact by specifying the contact ID.
*/


var ObtainContactInformation = function(session) {
    /*
        Create a new instance of the ObtainContactInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/ObtainContactInformation"
    ObtainContactInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObtainContactInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObtainContactInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObtainContactInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObtainContactInformationInputSet = function() {
    ObtainContactInformationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ContactId input for this Choreo. ((required, integer) The ID for the contact you want to retrieve information for.)
        */
        this.set_ContactId = function(value) {
            this.setInput("ContactId", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObtainContactInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObtainContactInformationResultSet = function(resultStream) {
    ObtainContactInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObtainContactInformation, choreography.Choreography);
util.inherits(ObtainContactInformationInputSet, choreography.InputSet);
util.inherits(ObtainContactInformationResultSet, choreography.ResultSet);
exports.ObtainContactInformation = ObtainContactInformation;


/*
    SearchContactsByEmail
    Allows you to search Constant Contact by email to retrieve a contact's information.
*/


var SearchContactsByEmail = function(session) {
    /*
        Create a new instance of the SearchContactsByEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/SearchContactsByEmail"
    SearchContactsByEmail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchContactsByEmailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchContactsByEmailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchContactsByEmail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchContactsByEmailInputSet = function() {
    SearchContactsByEmailInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address to use in your search.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchContactsByEmail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchContactsByEmailResultSet = function(resultStream) {
    SearchContactsByEmailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchContactsByEmail, choreography.Choreography);
util.inherits(SearchContactsByEmailInputSet, choreography.InputSet);
util.inherits(SearchContactsByEmailResultSet, choreography.ResultSet);
exports.SearchContactsByEmail = SearchContactsByEmail;


/*
    SearchContactsByUpdatedSince
    Searches your Constant Contact list by last updated date.  Use this Choreo for synchronizing your lists with other systems. 
*/


var SearchContactsByUpdatedSince = function(session) {
    /*
        Create a new instance of the SearchContactsByUpdatedSince Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/SearchContactsByUpdatedSince"
    SearchContactsByUpdatedSince.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchContactsByUpdatedSinceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchContactsByUpdatedSinceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchContactsByUpdatedSince
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchContactsByUpdatedSinceInputSet = function() {
    SearchContactsByUpdatedSinceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ListType input for this Choreo. ((optional, string) The list type to query.  Supported values for this parameter are: active, removed and do-not-mail. Defaults to 'active'.)
        */
        this.set_ListType = function(value) {
            this.setInput("ListType", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UpdatedSince input for this Choreo. ((required, date) Epoch timestamp in milliseconds or formatted like 2009-12-01T01:00:00.000Z. Used to query for modified records.)
        */
        this.set_UpdatedSince = function(value) {
            this.setInput("UpdatedSince", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) Your Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchContactsByUpdatedSince Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchContactsByUpdatedSinceResultSet = function(resultStream) {
    SearchContactsByUpdatedSinceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchContactsByUpdatedSince, choreography.Choreography);
util.inherits(SearchContactsByUpdatedSinceInputSet, choreography.InputSet);
util.inherits(SearchContactsByUpdatedSinceResultSet, choreography.ResultSet);
exports.SearchContactsByUpdatedSince = SearchContactsByUpdatedSince;


/*
    UpdateContact
    Updates an existing contact in your Constant Contact system when you supply a contact ID to the Choreo.
*/


var UpdateContact = function(session) {
    /*
        Create a new instance of the UpdateContact Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ConstantContact/UpdateContact"
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
        Set the value of the UpdatedContactXML input for this Choreo. ((required, xml) This input should be the updated XML returned from the ObtainContactInformation Choreo.)
        */
        this.set_UpdatedContactXML = function(value) {
            this.setInput("UpdatedContactXML", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Constant Contact.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ContactId input for this Choreo. ((required, integer) The id for the contact you want to update.)
        */
        this.set_ContactId = function(value) {
            this.setInput("ContactId", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, integer) The ID for the list that you want to update)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Constant Contact password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserName input for this Choreo. ((required, string) You Constant Contact username.)
        */
        this.set_UserName = function(value) {
            this.setInput("UserName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateContact Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateContactResultSet = function(resultStream) {
    UpdateContactResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Constant Contact. Note that a successful update returns no content.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateContact, choreography.Choreography);
util.inherits(UpdateContactInputSet, choreography.InputSet);
util.inherits(UpdateContactResultSet, choreography.ResultSet);
exports.UpdateContact = UpdateContact;

