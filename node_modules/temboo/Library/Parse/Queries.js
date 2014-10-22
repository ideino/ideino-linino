
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Query
    Queries Parse and retrieves objects based on given constraints.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Queries/Query"
    Query.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Query
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryInputSet = function() {
    QueryInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The class name for the object being created.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, boolean) A flag indicating to include a count of objects in the response. Set to 1 to include a count. Defaults to 0.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) Specify a field to return multiple types of related objects in this query.  For example, enter: post.author, to retrieve posts and their authors related to this class.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of objects to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Returns only records after this number. Used in combination with the Limit input to page through many results.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the Where input for this Choreo. ((optional, json) A valid query constraint formatted as a JSON-encoded string. See documentation for syntax rules.)
        */
        this.set_Where = function(value) {
            this.setInput("Where", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;

