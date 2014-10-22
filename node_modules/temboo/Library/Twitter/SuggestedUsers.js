
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetSuggestedUsers
    Retrieves users in a given category of the Twitter suggested user list.
*/


var GetSuggestedUsers = function(session) {
    /*
        Create a new instance of the GetSuggestedUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/SuggestedUsers/GetSuggestedUsers"
    GetSuggestedUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSuggestedUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSuggestedUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSuggestedUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSuggestedUsersInputSet = function() {
    GetSuggestedUsersInputSet.super_.call(this);
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
        Set the value of the Language input for this Choreo. ((optional, string) Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 code (e.g., en).)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Members input for this Choreo. ((optional, boolean) When set to true, makes a request to users/suggestions/:slug/members and retrieves the most recent statuses for users that are not protected.)
        */
        this.set_Members = function(value) {
            this.setInput("Members", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((required, string) The short name of  the category (e.g., news, technology, government). These are returned in the response of the GetSuggestedCategories Choreo.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSuggestedUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSuggestedUsersResultSet = function(resultStream) {
    GetSuggestedUsersResultSet.super_.call(this, resultStream);    
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
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(GetSuggestedUsers, choreography.Choreography);
util.inherits(GetSuggestedUsersInputSet, choreography.InputSet);
util.inherits(GetSuggestedUsersResultSet, choreography.ResultSet);
exports.GetSuggestedUsers = GetSuggestedUsers;


/*
    GetUserCategories
    Retrieves the list of suggested user categories.
*/


var GetUserCategories = function(session) {
    /*
        Create a new instance of the GetUserCategories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/SuggestedUsers/GetUserCategories"
    GetUserCategories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserCategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserCategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserCategories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserCategoriesInputSet = function() {
    GetUserCategoriesInputSet.super_.call(this);
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
        Set the value of the Language input for this Choreo. ((optional, string) Restricts the suggested categories to the requested language. The language must be specified by the appropriate two letter ISO 639-1 code (e.g., en). )
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserCategories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserCategoriesResultSet = function(resultStream) {
    GetUserCategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
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
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserCategories, choreography.Choreography);
util.inherits(GetUserCategoriesInputSet, choreography.InputSet);
util.inherits(GetUserCategoriesResultSet, choreography.ResultSet);
exports.GetUserCategories = GetUserCategories;

