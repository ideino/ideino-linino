
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListThreads
    Returns a list of trending threads.
*/


var ListThreads = function(session) {
    /*
        Create a new instance of the ListThreads Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Trends/ListThreads"
    ListThreads.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListThreadsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListThreadsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListThreads
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListThreadsInputSet = function() {
    ListThreadsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Callback input for this Choreo. ((optional, string) The name of a callback function to wrap the respone in. Used when setting ResponseFormat to "jsonp".)
        */
        this.set_Callback = function(value) {
            this.setInput("Callback", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, string) Allows you to look up a forum by ID (aka the short name).)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Indicates the relations to include with your response. Valid values are: forum, author, category.)
        */
        this.set_Related = function(value) {
            this.setInput("Related", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListThreads Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListThreadsResultSet = function(resultStream) {
    ListThreadsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListThreads, choreography.Choreography);
util.inherits(ListThreadsInputSet, choreography.InputSet);
util.inherits(ListThreadsResultSet, choreography.ResultSet);
exports.ListThreads = ListThreads;

