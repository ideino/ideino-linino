
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Tweets
    Retrieves a collection of relevant Tweets matching a specified query.
*/


var Tweets = function(session) {
    /*
        Create a new instance of the Tweets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Search/Tweets"
    Tweets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TweetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TweetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Tweets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TweetsInputSet = function() {
    TweetsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Geocode input for this Choreo. ((optional, string) Returns tweets by users located within a given radius of the given latitude/longitude. Formatted like: 37.781157,-122.398720,1mi.)
        */
        this.set_Geocode = function(value) {
            this.setInput("Geocode", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Restricts tweets to the given language, given by an ISO 639-1 code.)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A search query of up to 1,000 characters.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResultType input for this Choreo. ((optional, string) Specifies what type of search results you want to receive. The default is "mixed." Valid values are: mixed, recent, and popular.)
        */
        this.set_ResultType = function(value) {
            this.setInput("ResultType", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the Until input for this Choreo. ((optional, date) Returns tweets generated before the given date. Date should be formatted as YYYY-MM-DD.)
        */
        this.set_Until = function(value) {
            this.setInput("Until", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Tweets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TweetsResultSet = function(resultStream) {
    TweetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Tweets, choreography.Choreography);
util.inherits(TweetsInputSet, choreography.InputSet);
util.inherits(TweetsResultSet, choreography.ResultSet);
exports.Tweets = Tweets;

