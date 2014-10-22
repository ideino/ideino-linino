
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Query
    Searches a user's Box account for items that match a specified keyword.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Box/Search/Query"
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
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved during the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-separated list of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of search results to return. Defaults to 30.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The search result at which to start the response. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The string to search for; can be matched against item names, descriptions, text content of a file, and other fields of the different item types.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload. Required unless using the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Box.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;

