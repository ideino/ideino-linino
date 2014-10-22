
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetBalance
    Retrieves the account balance for the user associated with the given authorized access token.
*/


var GetBalance = function(session) {
    /*
        Create a new instance of the GetBalance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Balance/GetBalance"
    GetBalance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBalanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBalanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBalance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBalanceInputSet = function() {
    GetBalanceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBalance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBalanceResultSet = function(resultStream) {
    GetBalanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBalance, choreography.Choreography);
util.inherits(GetBalanceInputSet, choreography.InputSet);
util.inherits(GetBalanceResultSet, choreography.ResultSet);
exports.GetBalance = GetBalance;

