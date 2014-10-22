
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveCardToken
    Retrieves a card token based on a given id.
*/


var RetrieveCardToken = function(session) {
    /*
        Create a new instance of the RetrieveCardToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Tokens/RetrieveCardToken"
    RetrieveCardToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCardTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCardTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCardToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCardTokenInputSet = function() {
    RetrieveCardTokenInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the TokenID input for this Choreo. ((required, string) The unique identifier of the token you want to retrieve)
        */
        this.set_TokenID = function(value) {
            this.setInput("TokenID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCardToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCardTokenResultSet = function(resultStream) {
    RetrieveCardTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveCardToken, choreography.Choreography);
util.inherits(RetrieveCardTokenInputSet, choreography.InputSet);
util.inherits(RetrieveCardTokenResultSet, choreography.ResultSet);
exports.RetrieveCardToken = RetrieveCardToken;

