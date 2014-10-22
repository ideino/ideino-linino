
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreatePeople
    Creates a new contact record in your Highrise CRM.
*/


var CreatePeople = function(session) {
    /*
        Create a new instance of the CreatePeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Highrise/CreatePeople"
    CreatePeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreatePeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreatePeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreatePeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreatePeopleInputSet = function() {
    CreatePeopleInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Highrise account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Background input for this Choreo. ((optional, string) Corresponds to the background field in Highrise)
        */
        this.set_Background = function(value) {
            this.setInput("Background", value);
        }

        /*
        Set the value of the CompanyName input for this Choreo. ((optional, string) Corresponds to the company name field in Highrise.)
        */
        this.set_CompanyName = function(value) {
            this.setInput("CompanyName", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((optional, string) Corresponds to the email address field in Highrise.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((required, string) Corresponds to the first name field in Highrise.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the HomePhone input for this Choreo. ((optional, string) Corresponds to the home phone field in Highrise.)
        */
        this.set_HomePhone = function(value) {
            this.setInput("HomePhone", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) Corresponds to the last name field in Highrise.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Highrise account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) Corresponds to the title field in Highrise.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorkPhone input for this Choreo. ((optional, string) Corresponds to the work phone field in Highrise.)
        */
        this.set_WorkPhone = function(value) {
            this.setInput("WorkPhone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreatePeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreatePeopleResultSet = function(resultStream) {
    CreatePeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Highrise.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreatePeople, choreography.Choreography);
util.inherits(CreatePeopleInputSet, choreography.InputSet);
util.inherits(CreatePeopleResultSet, choreography.ResultSet);
exports.CreatePeople = CreatePeople;


/*
    DeletePeople
    Deletes a specified contact from your Highrise CRM.
*/


var DeletePeople = function(session) {
    /*
        Create a new instance of the DeletePeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Highrise/DeletePeople"
    DeletePeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePeopleInputSet = function() {
    DeletePeopleInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Highrise account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ContactID input for this Choreo. ((required, string) The ID number of the contact you want to delete. This is used to contruct the URL for the request.)
        */
        this.set_ContactID = function(value) {
            this.setInput("ContactID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Highrise account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePeopleResultSet = function(resultStream) {
    DeletePeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Highrise. The delete people API method returns no XML, so this variable will contain no data.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePeople, choreography.Choreography);
util.inherits(DeletePeopleInputSet, choreography.InputSet);
util.inherits(DeletePeopleResultSet, choreography.ResultSet);
exports.DeletePeople = DeletePeople;


/*
    ListAllPeople
    Retrieves contacts from your Highrise CRM.
*/


var ListAllPeople = function(session) {
    /*
        Create a new instance of the ListAllPeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Highrise/ListAllPeople"
    ListAllPeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllPeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllPeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllPeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllPeopleInputSet = function() {
    ListAllPeopleInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Highrise account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Highrise account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllPeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllPeopleResultSet = function(resultStream) {
    ListAllPeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Highrise.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllPeople, choreography.Choreography);
util.inherits(ListAllPeopleInputSet, choreography.InputSet);
util.inherits(ListAllPeopleResultSet, choreography.ResultSet);
exports.ListAllPeople = ListAllPeople;


/*
    SearchPeople
    Lets you search your Highrise CRM by specifying an email search criteria.
*/


var SearchPeople = function(session) {
    /*
        Create a new instance of the SearchPeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Highrise/SearchPeople"
    SearchPeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchPeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchPeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchPeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchPeopleInputSet = function() {
    SearchPeopleInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Highrise account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) Allows you to search by the city field in Highrise.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) Allows you to search by the country field in Highrise.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((optional, string) Allows you to search by the email address field in Highrise.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Highrise account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((optional, string) Allows you to search by the phone field in Highrise.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Allows you to search by the state field in Highrise.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, string) Allows you to search by the ZIP field in Highrise.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchPeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchPeopleResultSet = function(resultStream) {
    SearchPeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Highrise.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchPeople, choreography.Choreography);
util.inherits(SearchPeopleInputSet, choreography.InputSet);
util.inherits(SearchPeopleResultSet, choreography.ResultSet);
exports.SearchPeople = SearchPeople;


/*
    ShowPeople
    Retrieves contacts from your Highrise CRM.
*/


var ShowPeople = function(session) {
    /*
        Create a new instance of the ShowPeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Highrise/ShowPeople"
    ShowPeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowPeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowPeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowPeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowPeopleInputSet = function() {
    ShowPeopleInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ConactID input for this Choreo. ((required, integer) The ID of the contact you want to retrieve. This is used to construct the URL for the request.)
        */
        this.set_ConactID = function(value) {
            this.setInput("ConactID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Highrise account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Highrise account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowPeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowPeopleResultSet = function(resultStream) {
    ShowPeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Highrise.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowPeople, choreography.Choreography);
util.inherits(ShowPeopleInputSet, choreography.InputSet);
util.inherits(ShowPeopleResultSet, choreography.ResultSet);
exports.ShowPeople = ShowPeople;

