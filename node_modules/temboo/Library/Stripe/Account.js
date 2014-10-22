
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveAccountDetails
    Retrieves the details of the account.
*/


var RetrieveAccountDetails = function(session) {
    /*
        Create a new instance of the RetrieveAccountDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Account/RetrieveAccountDetails"
    RetrieveAccountDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveAccountDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveAccountDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveAccountDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveAccountDetailsInputSet = function() {
    RetrieveAccountDetailsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveAccountDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveAccountDetailsResultSet = function(resultStream) {
    RetrieveAccountDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveAccountDetails, choreography.Choreography);
util.inherits(RetrieveAccountDetailsInputSet, choreography.InputSet);
util.inherits(RetrieveAccountDetailsResultSet, choreography.ResultSet);
exports.RetrieveAccountDetails = RetrieveAccountDetails;

