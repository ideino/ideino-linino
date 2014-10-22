
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    QueryArticles
    Lets you query the Article Search API for New York Times articles.
*/


var QueryArticles = function(session) {
    /*
        Create a new instance of the QueryArticles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/ArticleSearch/QueryArticles"
    QueryArticles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryArticlesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryArticlesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the QueryArticles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryArticlesInputSet = function() {
    QueryArticlesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BeginDate input for this Choreo. ((optional, date) Sets the starting point (which is inclusive) of the range of publication dates to return. Must be used with EndDate. Date should be formatted like YYYYMMDD.)
        */
        this.set_BeginDate = function(value) {
            this.setInput("BeginDate", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Sets the end point (which is inclusive) of the range of publication dates to return. Must be used with BeginDate. Date should be formatted like YYYYMMDD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Facets input for this Choreo. ((optional, string) A comma-delimited list of up to 5 facets. This indicates the sets of facet values to include in the response. See Choreo documentation for more information about accepted values for this input.)
        */
        this.set_Facets = function(value) {
            this.setInput("Facets", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma-delimited list of fields to return. These fields are returned by default: body, byline, date, title, and url.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) This corresponds to which set of 10 results is returned. Used to page through results. Set to 0 to return records 0-9, set to 1 to return records 10-19, etc.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Search keywords (optionally applied to specific fields) and/or facets. See Choreo documentation for syntax examples.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Rank input for this Choreo. ((optional, string) Sets the order of the results. Accepted values are: newest (the defaults), oldest, or closest.)
        */
        this.set_Rank = function(value) {
            this.setInput("Rank", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the QueryArticles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryArticlesResultSet = function(resultStream) {
    QueryArticlesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(QueryArticles, choreography.Choreography);
util.inherits(QueryArticlesInputSet, choreography.InputSet);
util.inherits(QueryArticlesResultSet, choreography.ResultSet);
exports.QueryArticles = QueryArticles;

