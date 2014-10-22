
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrievePostsWithTag
    Retrieves posts that have a given tag.
*/


var RetrievePostsWithTag = function(session) {
    /*
        Create a new instance of the RetrievePostsWithTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Tagged/RetrievePostsWithTag"
    RetrievePostsWithTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrievePostsWithTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrievePostsWithTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrievePostsWithTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrievePostsWithTagInputSet = function() {
    RetrievePostsWithTagInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Before input for this Choreo. ((optional, string) The timestamp of when you'd like to see posts before (e.g. 1363716547).)
        */
        this.set_Before = function(value) {
            this.setInput("Before", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) Specifies the post format to return. Valid values are: text (plain text, no html) or raw (as entered by the user).)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of posts to return: 1- 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The post number to start at. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) The tag on the posts you'd like to retrieve.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrievePostsWithTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrievePostsWithTagResultSet = function(resultStream) {
    RetrievePostsWithTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrievePostsWithTag, choreography.Choreography);
util.inherits(RetrievePostsWithTagInputSet, choreography.InputSet);
util.inherits(RetrievePostsWithTagResultSet, choreography.ResultSet);
exports.RetrievePostsWithTag = RetrievePostsWithTag;

