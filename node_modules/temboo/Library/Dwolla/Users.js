
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Account
    Retrieves the account information for the user associated with the given authorized access token.
*/


var Account = function(session) {
    /*
        Create a new instance of the Account Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Users/Account"
    Account.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AccountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AccountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Account
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AccountInputSet = function() {
    AccountInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Account Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AccountResultSet = function(resultStream) {
    AccountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Account, choreography.Choreography);
util.inherits(AccountInputSet, choreography.InputSet);
util.inherits(AccountResultSet, choreography.ResultSet);
exports.Account = Account;


/*
    Basic
    Retrieves the Dwolla account information for the user associated with the specified consumer credentials and Dwolla account identifier.
*/


var Basic = function(session) {
    /*
        Create a new instance of the Basic Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Users/Basic"
    Basic.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BasicResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BasicInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Basic
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BasicInputSet = function() {
    BasicInputSet.super_.call(this);
        /*
        Set the value of the AccountIdentifier input for this Choreo. ((required, string) Dwolla account identifier or email address of the Dwolla account.)
        */
        this.set_AccountIdentifier = function(value) {
            this.setInput("AccountIdentifier", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by Dwolla (AKA the Consumer Key).)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by Dwolla (AKA the Consumer Secret).)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Basic Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BasicResultSet = function(resultStream) {
    BasicResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Basic, choreography.Choreography);
util.inherits(BasicInputSet, choreography.InputSet);
util.inherits(BasicResultSet, choreography.ResultSet);
exports.Basic = Basic;

