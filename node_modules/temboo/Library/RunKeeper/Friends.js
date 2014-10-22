
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveFriends
    Returns the friends in a user's network.
*/


var RetrieveFriends = function(session) {
    /*
        Create a new instance of the RetrieveFriends Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Friends/RetrieveFriends"
    RetrieveFriends.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveFriendsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveFriendsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveFriends
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveFriendsInputSet = function() {
    RetrieveFriendsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number entries to return per page. Defaults to 25.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of entries to return. This parameter is used in combination with the PageSize input to page through results. Defaults to 0 (the first page).)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveFriends Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveFriendsResultSet = function(resultStream) {
    RetrieveFriendsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Previous" output from this Choreo execution. ((integer) The previous page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Previous = function() {
            return this.getResult("Previous");
        }
        /*
        Retrieve the value for the "Next" output from this Choreo execution. ((integer) The next page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Next = function() {
            return this.getResult("Next");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveFriends, choreography.Choreography);
util.inherits(RetrieveFriendsInputSet, choreography.InputSet);
util.inherits(RetrieveFriendsResultSet, choreography.ResultSet);
exports.RetrieveFriends = RetrieveFriends;

