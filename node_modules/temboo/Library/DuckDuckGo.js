
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Query
    Access DuckDuckGo web search functionality.  
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DuckDuckGo/Query"
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
        Set the value of the Format input for this Choreo. ((optional, string) Enter: xml, or json.  Default is set to xml.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the NoHTML input for this Choreo. ((optional, integer) Enter 1 to remove HTML from text. Set only if Format=json.)
        */
        this.set_NoHTML = function(value) {
            this.setInput("NoHTML", value);
        }

        /*
        Set the value of the NoRedirect input for this Choreo. ((optional, integer) Enter 1 to skip HTTP redirects.  This is useful for !bang commands. Set only if Format=json.)
        */
        this.set_NoRedirect = function(value) {
            this.setInput("NoRedirect", value);
        }

        /*
        Set the value of the PrettyPrint input for this Choreo. ((optional, integer) Enter 1 to pretty-print the JSON output.)
        */
        this.set_PrettyPrint = function(value) {
            this.setInput("PrettyPrint", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Enter a search query.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the SkipDisambiguation input for this Choreo. ((optional, integer) Enter 1 to skip disambiguation. Set only if Format=json.)
        */
        this.set_SkipDisambiguation = function(value) {
            this.setInput("SkipDisambiguation", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DuckDuckGo in XML or JSON format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;

