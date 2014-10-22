
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FQL
    Allows you to use a SQL-style syntax to query data in the Graph API.
*/


var FQL = function(session) {
    /*
        Create a new instance of the FQL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Searching/FQL"
    FQL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FQLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FQLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FQL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FQLInputSet = function() {
    FQLInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Conditions input for this Choreo. ((required, string) The conditions to use in the WHERE clause of the FQL statement.)
        */
        this.set_Conditions = function(value) {
            this.setInput("Conditions", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((required, string) The fields to return in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Table input for this Choreo. ((required, string) The table to select records from.)
        */
        this.set_Table = function(value) {
            this.setInput("Table", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FQL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FQLResultSet = function(resultStream) {
    FQLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FQL, choreography.Choreography);
util.inherits(FQLInputSet, choreography.InputSet);
util.inherits(FQLResultSet, choreography.ResultSet);
exports.FQL = FQL;


/*
    MultiQuery
    Allows you to submit multiple FQL statements and retrieve all the results you need in one request.
*/


var MultiQuery = function(session) {
    /*
        Create a new instance of the MultiQuery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Searching/MultiQuery"
    MultiQuery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MultiQueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MultiQueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MultiQuery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MultiQueryInputSet = function() {
    MultiQueryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The access token retrieved from the final step of the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Queries input for this Choreo. ((required, json) A JSON dictionary containing multiple queries to execute. See documentation for formatting examples.)
        */
        this.set_Queries = function(value) {
            this.setInput("Queries", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MultiQuery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MultiQueryResultSet = function(resultStream) {
    MultiQueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MultiQuery, choreography.Choreography);
util.inherits(MultiQueryInputSet, choreography.InputSet);
util.inherits(MultiQueryResultSet, choreography.ResultSet);
exports.MultiQuery = MultiQuery;


/*
    Search
    Search public objects across the social graph.
*/


var Search = function(session) {
    /*
        Create a new instance of the Search Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Facebook/Searching/Search"
    Search.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Search
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchInputSet = function() {
    SearchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The access token retrieved from the final step of the OAuth process. This is required for certain object types such as "user".)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Center input for this Choreo. ((conditional, string) The coordinates for a place (such as 37.76,122.427). Used only when specifying an object type of "place".)
        */
        this.set_Center = function(value) {
            this.setInput("Center", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, integer) The distance search parameter used only when specifying an object type of "place". Defaults to 1000.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return (i.e. id,name).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Used to page through results. Limits the number of records returned in the response.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ObjectType input for this Choreo. ((required, string) The type of object to search for such as: post, user, page, event, group, place, location, or checkin.)
        */
        this.set_ObjectType = function(value) {
            this.setInput("ObjectType", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through results. Returns results starting from the specified number.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) The Facebook query term to send in the request.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Since input for this Choreo. ((optional, date) Used for time-based pagination. Values can be a unix timestamp or any date accepted by strtotime.)
        */
        this.set_Since = function(value) {
            this.setInput("Since", value);
        }

        /*
        Set the value of the Until input for this Choreo. ((optional, date) Used for time-based pagination. Values can be a unix timestamp or any date accepted by strtotime.)
        */
        this.set_Until = function(value) {
            this.setInput("Until", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Search Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchResultSet = function(resultStream) {
    SearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HasPrevious" output from this Choreo execution. ((boolean) A boolean flag indicating that a previous page exists.)
        */
        this.get_HasPrevious = function() {
            return this.getResult("HasPrevious");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Facebook. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "HasNext" output from this Choreo execution. ((boolean) A boolean flag indicating that a next page exists.)
        */
        this.get_HasNext = function() {
            return this.getResult("HasNext");
        }
}

util.inherits(Search, choreography.Choreography);
util.inherits(SearchInputSet, choreography.InputSet);
util.inherits(SearchResultSet, choreography.ResultSet);
exports.Search = Search;

