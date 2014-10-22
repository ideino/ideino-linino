
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListPlans
    Returns a list of the shared plans and custom deploys.
*/


var ListPlans = function(session) {
    /*
        Create a new instance of the ListPlans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Plans/ListPlans"
    ListPlans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPlansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPlansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPlans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPlansInputSet = function() {
    ListPlansInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPlans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPlansResultSet = function(resultStream) {
    ListPlansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPlans, choreography.Choreography);
util.inherits(ListPlansInputSet, choreography.InputSet);
util.inherits(ListPlansResultSet, choreography.ResultSet);
exports.ListPlans = ListPlans;

