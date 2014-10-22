
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetRateLimitStatus
    Allows you to predict the rate limits available to your application by returning the limits for specified families of methods.
*/


var GetRateLimitStatus = function(session) {
    /*
        Create a new instance of the GetRateLimitStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Help/GetRateLimitStatus"
    GetRateLimitStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRateLimitStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRateLimitStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRateLimitStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRateLimitStatusInputSet = function() {
    GetRateLimitStatusInputSet.super_.call(this);
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
        Set the value of the Resources input for this Choreo. ((optional, string) A comma-separated list of resources you want to know the current rate limit disposition for (e.g., statuses,friends,trends).)
        */
        this.set_Resources = function(value) {
            this.setInput("Resources", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRateLimitStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRateLimitStatusResultSet = function(resultStream) {
    GetRateLimitStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(GetRateLimitStatus, choreography.Choreography);
util.inherits(GetRateLimitStatusInputSet, choreography.InputSet);
util.inherits(GetRateLimitStatusResultSet, choreography.ResultSet);
exports.GetRateLimitStatus = GetRateLimitStatus;

