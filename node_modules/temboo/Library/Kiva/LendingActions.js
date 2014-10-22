
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetRecentLending
    Returns the 100 most recent loans made on Kiva by public lenders.
*/


var GetRecentLending = function(session) {
    /*
        Create a new instance of the GetRecentLending Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/LendingActions/GetRecentLending"
    GetRecentLending.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentLendingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentLendingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentLending
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentLendingInputSet = function() {
    GetRecentLendingInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentLending Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentLendingResultSet = function(resultStream) {
    GetRecentLendingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentLending, choreography.Choreography);
util.inherits(GetRecentLendingInputSet, choreography.InputSet);
util.inherits(GetRecentLendingResultSet, choreography.ResultSet);
exports.GetRecentLending = GetRecentLending;

