
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Query
    Performs queries against data on the Socrata Platform.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Socrata/SODA/Query"
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
        Set the value of the AppToken input for this Choreo. ((optional, string) The App Token provided by Socrata.)
        */
        this.set_AppToken = function(value) {
            this.setInput("AppToken", value);
        }

        /*
        Set the value of the Domain input for this Choreo. ((required, string) The domain used in the request (i.e. soda.demo.socrata.com).)
        */
        this.set_Domain = function(value) {
            this.setInput("Domain", value);
        }

        /*
        Set the value of the Group input for this Choreo. ((optional, string) Groups results based on the column name provided.)
        */
        this.set_Group = function(value) {
            this.setInput("Group", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, string) The maximum number of results to return. Used in combination with the Offset input for pagination. Defaults to 100.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, string) Indicates the starting point of the result set. Used in combination with the Limit input for pagination. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Determines how results will be sorted. This input can take a column name, and can sort in either ascending or descending order (i.e. datetime asc).)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the Resource input for this Choreo. ((required, string) The unique identifier for a dataset to retrieve (i.e 4tka-6guv or earthquakes).)
        */
        this.set_Resource = function(value) {
            this.setInput("Resource", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), xml, csv, and rdf.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) A search clause. This wll do a full text search for a value.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the Select input for this Choreo. ((optional, string) Indicates which columns to return. If not specified, all columns will be returned.)
        */
        this.set_Select = function(value) {
            this.setInput("Select", value);
        }

        /*
        Set the value of the Where input for this Choreo. ((optional, string) Filters the results using a WHERE clause.)
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
        Retrieve the value for the "Fields" output from this Choreo execution. ((json) This lists the fields returned in this response in a JSON array.)
        */
        this.get_Fields = function() {
            return this.getResult("Fields");
        }
        /*
        Retrieve the value for the "Types" output from this Choreo execution. ((json) This is a list of SODA2 types in a JSON array. These will match up in the same order as the fields in X-SODA2-Fields.)
        */
        this.get_Types = function() {
            return this.getResult("Types");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response form Socrata.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;

