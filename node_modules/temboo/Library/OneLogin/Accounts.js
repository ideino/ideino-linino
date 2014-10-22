
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateAccount
    Creates a new account.
*/


var CreateAccount = function(session) {
    /*
        Create a new instance of the CreateAccount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Accounts/CreateAccount"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The account name.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((optional, string) The street address for the new account.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The city associated with the address.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) The country associated with the address of the new account.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address for the new account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((required, string) The first name on the new account.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((required, string) The last name on the new account.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((optional, string) The phone number for the new account.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the Plan input for this Choreo. ((required, string) Indicates which plan the new account has (i.e. enterprise).)
        */
        this.set_Plan = function(value) {
            this.setInput("Plan", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state associated with the address of the new account.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, string) The postal code associated with the address of the new account.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAccount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAccountResultSet = function(resultStream) {
    CreateAccountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
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
    ListAll
    Retrieves a list of all accounts.
*/


var ListAll = function(session) {
    /*
        Create a new instance of the ListAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Accounts/ListAll"
    ListAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInputSet = function() {
    ListAllInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllResultSet = function(resultStream) {
    ListAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAll, choreography.Choreography);
util.inherits(ListAllInputSet, choreography.InputSet);
util.inherits(ListAllResultSet, choreography.ResultSet);
exports.ListAll = ListAll;


/*
    ShowAccount
    Retrieves information for a single account.
*/


var ShowAccount = function(session) {
    /*
        Create a new instance of the ShowAccount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Accounts/ShowAccount"
    ShowAccount.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowAccountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowAccountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowAccount
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowAccountInputSet = function() {
    ShowAccountInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id the account you want to return.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowAccount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowAccountResultSet = function(resultStream) {
    ShowAccountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowAccount, choreography.Choreography);
util.inherits(ShowAccountInputSet, choreography.InputSet);
util.inherits(ShowAccountResultSet, choreography.ResultSet);
exports.ShowAccount = ShowAccount;


/*
    UpdateAccount
    Updates an existing account.
*/


var UpdateAccount = function(session) {
    /*
        Create a new instance of the UpdateAccount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Accounts/UpdateAccount"
    UpdateAccount.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAccountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAccountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAccount
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAccountInputSet = function() {
    UpdateAccountInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The account name.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((optional, string) The street address for the new account.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The city associated with the address.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) The country associated with the address of the new account.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address for the new account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((required, string) The first name on the new account.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id of the account to update.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((required, string) The last name on the new account.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((optional, string) The phone number for the new account.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the Plan input for this Choreo. ((required, string) Indicates which plan the new account has (i.e. enterprise).)
        */
        this.set_Plan = function(value) {
            this.setInput("Plan", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state associated with the address of the new account.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, string) The postal code associated with the address of the new account.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAccount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAccountResultSet = function(resultStream) {
    UpdateAccountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAccount, choreography.Choreography);
util.inherits(UpdateAccountInputSet, choreography.InputSet);
util.inherits(UpdateAccountResultSet, choreography.ResultSet);
exports.UpdateAccount = UpdateAccount;

