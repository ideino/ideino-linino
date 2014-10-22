
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Batch
    Allows you to perform multiple graph operations in one request.
*/


var Batch = function(session) {
    /*
        Create a new instance of the Batch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/BatchRequests/Batch"
    Batch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Batch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BatchInputSet = function() {
    BatchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Batch input for this Choreo. ((required, json) A JSON object which describes each individual operation you'd like to perform. See documentation for syntax examples.)
        */
        this.set_Batch = function(value) {
            this.setInput("Batch", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Batch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BatchResultSet = function(resultStream) {
    BatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Contains the Base64 encoded value of the image retrieved from Facebook.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Batch, choreography.Choreography);
util.inherits(BatchInputSet, choreography.InputSet);
util.inherits(BatchResultSet, choreography.ResultSet);
exports.Batch = Batch;

