
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListVersions
    Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.
*/


var ListVersions = function(session) {
    /*
        Create a new instance of the ListVersions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Versions/ListVersions"
    ListVersions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListVersionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListVersionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListVersions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListVersionsInputSet = function() {
    ListVersionsInputSet.super_.call(this);
        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListVersions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListVersionsResultSet = function(resultStream) {
    ListVersionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListVersions, choreography.Choreography);
util.inherits(ListVersionsInputSet, choreography.InputSet);
util.inherits(ListVersionsResultSet, choreography.ResultSet);
exports.ListVersions = ListVersions;

