
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CheckUsername
    Check whether the provided username is available.  An error is returned if the entered username is either taken, or invalid.
*/


var CheckUsername = function(session) {
    /*
        Create a new instance of the CheckUsername Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/CheckUsername"
    CheckUsername.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CheckUsernameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CheckUsernameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CheckUsername
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CheckUsernameInputSet = function() {
    CheckUsernameInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
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
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Enter a Disqus username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CheckUsername Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CheckUsernameResultSet = function(resultStream) {
    CheckUsernameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CheckUsername, choreography.Choreography);
util.inherits(CheckUsernameInputSet, choreography.InputSet);
util.inherits(CheckUsernameResultSet, choreography.ResultSet);
exports.CheckUsername = CheckUsername;


/*
    FollowUser
    Follows the specified user.
*/


var FollowUser = function(session) {
    /*
        Create a new instance of the FollowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/FollowUser"
    FollowUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FollowUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FollowUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FollowUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FollowUserInputSet = function() {
    FollowUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
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
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The User ID that is to be followed. If UserID is set, then Username must be null.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) The Disqus username that is to be followed.  If Username is being set, then UserID must be null.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the FollowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FollowUserResultSet = function(resultStream) {
    FollowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FollowUser, choreography.Choreography);
util.inherits(FollowUserInputSet, choreography.InputSet);
util.inherits(FollowUserResultSet, choreography.ResultSet);
exports.FollowUser = FollowUser;


/*
    ListActiveForums
    Retrieve a list of forums a user has been active on.
*/


var ListActiveForums = function(session) {
    /*
        Create a new instance of the ListActiveForums Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/ListActiveForums"
    ListActiveForums.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListActiveForumsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListActiveForumsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListActiveForums
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListActiveForumsInputSet = function() {
    ListActiveForumsInputSet.super_.call(this);
        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Default is set to null.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Defaults to 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) The sort order for the results. Valid values are: asc or desc. Default is set to: asc.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SinceID input for this Choreo. ((optional, integer) A Unix timestamp (or ISO datetime standard) to obtain results from. Default is set to null.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) the Disqus User ID, for which active forum information will be retrieved.  If UserID is set, then Username must be null.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) A Disqus username.  If Username is being set, then UserID must be null.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListActiveForums Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListActiveForumsResultSet = function(resultStream) {
    ListActiveForumsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListActiveForums, choreography.Choreography);
util.inherits(ListActiveForumsInputSet, choreography.InputSet);
util.inherits(ListActiveForumsResultSet, choreography.ResultSet);
exports.ListActiveForums = ListActiveForums;


/*
    ListForums
    Retrieve a list of forums owned by the specified user.
*/


var ListForums = function(session) {
    /*
        Create a new instance of the ListForums Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/ListForums"
    ListForums.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListForumsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListForumsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListForums
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListForumsInputSet = function() {
    ListForumsInputSet.super_.call(this);
        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Default is set to null.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Defaults to 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) The sort order for the results. Valid vaues are: asc or desc. Default is set to: asc.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SinceID input for this Choreo. ((optional, integer) A Unix timestamp (or ISO datetime standard) to obtain results from. Default is set to null.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The Disqus User ID, for which active forum information will be retrieved.  If UserID is set, then Username must be null.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) A Disqus username.  If Username is being set, then UserID must be null.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListForums Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListForumsResultSet = function(resultStream) {
    ListForumsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListForums, choreography.Choreography);
util.inherits(ListForumsInputSet, choreography.InputSet);
util.inherits(ListForumsResultSet, choreography.ResultSet);
exports.ListForums = ListForums;


/*
    ListPosts
    List posts made by a user.
*/


var ListPosts = function(session) {
    /*
        Create a new instance of the ListPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/ListPosts"
    ListPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPostsInputSet = function() {
    ListPostsInputSet.super_.call(this);
        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Default is set to null.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Included input for this Choreo. ((optional, string) Specify the type of posts that are to be retrieved. Valid values are: unapproved, approved, spam, deleted, flagged, highlighted.  Default is: approved.)
        */
        this.set_Included = function(value) {
            this.setInput("Included", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Defaults to 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) The sort order for the results. valid values are: asc or desc. Default is set to: asc.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
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

        /*
        Set the value of the SinceID input for this Choreo. ((optional, integer) Default is set to null.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The Disqus User ID, for which active forum information will be retrieved.  If UserID is set, then Username must be null.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) A Disqus username. If Username is being set, then UserID must be null.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPostsResultSet = function(resultStream) {
    ListPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPosts, choreography.Choreography);
util.inherits(ListPostsInputSet, choreography.InputSet);
util.inherits(ListPostsResultSet, choreography.ResultSet);
exports.ListPosts = ListPosts;


/*
    UnfollowUser
    List posts made by a user.
*/


var UnfollowUser = function(session) {
    /*
        Create a new instance of the UnfollowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Users/UnfollowUser"
    UnfollowUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnfollowUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnfollowUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnfollowUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnfollowUserInputSet = function() {
    UnfollowUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The User ID that is to be unfollowed. If UserID is set, then Username must be null.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((conditional, string) A Disqus username.  If Username is being set, then UserID must be null.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnfollowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnfollowUserResultSet = function(resultStream) {
    UnfollowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnfollowUser, choreography.Choreography);
util.inherits(UnfollowUserInputSet, choreography.InputSet);
util.inherits(UnfollowUserResultSet, choreography.ResultSet);
exports.UnfollowUser = UnfollowUser;

