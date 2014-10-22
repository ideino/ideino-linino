
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ApproveFriendRequest
    Approves a pending friend request from another user.
*/


var ApproveFriendRequest = function(session) {
    /*
        Create a new instance of the ApproveFriendRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/ApproveFriendRequest"
    ApproveFriendRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ApproveFriendRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ApproveFriendRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ApproveFriendRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ApproveFriendRequestInputSet = function() {
    ApproveFriendRequestInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The user ID of a pending friend.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ApproveFriendRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ApproveFriendRequestResultSet = function(resultStream) {
    ApproveFriendRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ApproveFriendRequest, choreography.Choreography);
util.inherits(ApproveFriendRequestInputSet, choreography.InputSet);
util.inherits(ApproveFriendRequestResultSet, choreography.ResultSet);
exports.ApproveFriendRequest = ApproveFriendRequest;


/*
    Badges
    Returns badges for a given user.
*/


var Badges = function(session) {
    /*
        Create a new instance of the Badges Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/Badges"
    Badges.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BadgesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BadgesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Badges
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BadgesInputSet = function() {
    BadgesInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get badges for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Badges Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BadgesResultSet = function(resultStream) {
    BadgesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Badges, choreography.Choreography);
util.inherits(BadgesInputSet, choreography.InputSet);
util.inherits(BadgesResultSet, choreography.ResultSet);
exports.Badges = Badges;


/*
    CheckinsByUser
    Retrieve a list of check-ins for an authenticated user.
*/


var CheckinsByUser = function(session) {
    /*
        Create a new instance of the CheckinsByUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/CheckinsByUser"
    CheckinsByUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CheckinsByUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CheckinsByUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CheckinsByUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CheckinsByUserInputSet = function() {
    CheckinsByUserInputSet.super_.call(this);
        /*
        Set the value of the AfterTimeStamp input for this Choreo. ((optional, date) Retrieve the first results after the seconds entered since epoch time.)
        */
        this.set_AfterTimeStamp = function(value) {
            this.setInput("AfterTimeStamp", value);
        }

        /*
        Set the value of the BeforeTimeStamp input for this Choreo. ((optional, date) Retrieve the first results prior to the seconds specified. Useful for paging backward in time.)
        */
        this.set_BeforeTimeStamp = function(value) {
            this.setInput("BeforeTimeStamp", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The total number of results to be returned, up to 250.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API Oauth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The number of results to skip. Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Only 'self' is supported at this moment by the Foursquare API. Defaults to: self.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CheckinsByUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CheckinsByUserResultSet = function(resultStream) {
    CheckinsByUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CheckinsByUser, choreography.Choreography);
util.inherits(CheckinsByUserInputSet, choreography.InputSet);
util.inherits(CheckinsByUserResultSet, choreography.ResultSet);
exports.CheckinsByUser = CheckinsByUser;


/*
    DenyFriendRequest
    Denies a pending friend request from another user.
*/


var DenyFriendRequest = function(session) {
    /*
        Create a new instance of the DenyFriendRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/DenyFriendRequest"
    DenyFriendRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DenyFriendRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DenyFriendRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DenyFriendRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DenyFriendRequestInputSet = function() {
    DenyFriendRequestInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The user ID of a pending friend.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DenyFriendRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DenyFriendRequestResultSet = function(resultStream) {
    DenyFriendRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DenyFriendRequest, choreography.Choreography);
util.inherits(DenyFriendRequestInputSet, choreography.InputSet);
util.inherits(DenyFriendRequestResultSet, choreography.ResultSet);
exports.DenyFriendRequest = DenyFriendRequest;


/*
    FindUsers
    Allows a user to locate friends.
*/


var FindUsers = function(session) {
    /*
        Create a new instance of the FindUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/FindUsers"
    FindUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindUsersInputSet = function() {
    FindUsersInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((conditional, string) A comma-delimited list of email addresses to look for. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FacebookID input for this Choreo. ((conditional, string) A comma-delimited list of Facebook ID's to look for. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_FacebookID = function(value) {
            this.setInput("FacebookID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) A single string to search for in users' names. A single string to search for in users' names. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Phone input for this Choreo. ((conditional, string) A comma-delimited list of phone numbers to look for. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_Phone = function(value) {
            this.setInput("Phone", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TwitterSource input for this Choreo. ((conditional, string) A single Twitter handle. Results will be users that this handle follows on Twitter who use Foursquare. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_TwitterSource = function(value) {
            this.setInput("TwitterSource", value);
        }

        /*
        Set the value of the Twitter input for this Choreo. ((conditional, string) A comma-delimited list of Twitter handles to look for. Must specify one of Name, Phone, Email, FacebookID, Twitter, or TwitterSource.)
        */
        this.set_Twitter = function(value) {
            this.setInput("Twitter", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindUsersResultSet = function(resultStream) {
    FindUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindUsers, choreography.Choreography);
util.inherits(FindUsersInputSet, choreography.InputSet);
util.inherits(FindUsersResultSet, choreography.ResultSet);
exports.FindUsers = FindUsers;


/*
    Leaderboard
    Return the user's Leaderboard
*/


var Leaderboard = function(session) {
    /*
        Create a new instance of the Leaderboard Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/Leaderboard"
    Leaderboard.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LeaderboardResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LeaderboardInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Leaderboard
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LeaderboardInputSet = function() {
    LeaderboardInputSet.super_.call(this);
        /*
        Set the value of the Neighbors input for this Choreo. ((optional, integer) The number of friends' scores to return that are adjacent to your score, in ranked order.)
        */
        this.set_Neighbors = function(value) {
            this.setInput("Neighbors", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Leaderboard Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LeaderboardResultSet = function(resultStream) {
    LeaderboardResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Leaderboard, choreography.Choreography);
util.inherits(LeaderboardInputSet, choreography.InputSet);
util.inherits(LeaderboardResultSet, choreography.ResultSet);
exports.Leaderboard = Leaderboard;


/*
    ListFriends
    Retrieve a list of a user's friends.
*/


var ListFriends = function(session) {
    /*
        Create a new instance of the ListFriends Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/ListFriends"
    ListFriends.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFriendsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFriendsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFriends
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFriendsInputSet = function() {
    ListFriendsInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results returned, up to 500.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API Oauth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Specify an offest to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get friends for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFriends Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFriendsResultSet = function(resultStream) {
    ListFriendsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListFriends, choreography.Choreography);
util.inherits(ListFriendsInputSet, choreography.InputSet);
util.inherits(ListFriendsResultSet, choreography.ResultSet);
exports.ListFriends = ListFriends;


/*
    Mayorships
    Returns a user's mayorships.
*/


var Mayorships = function(session) {
    /*
        Create a new instance of the Mayorships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/Mayorships"
    Mayorships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MayorshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MayorshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Mayorships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MayorshipsInputSet = function() {
    MayorshipsInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get mayorships for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Mayorships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MayorshipsResultSet = function(resultStream) {
    MayorshipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Mayorships, choreography.Choreography);
util.inherits(MayorshipsInputSet, choreography.InputSet);
util.inherits(MayorshipsResultSet, choreography.ResultSet);
exports.Mayorships = Mayorships;


/*
    PendingFriendRequests
    Retrieves a list of pending friend requests for the authenticated user.
*/


var PendingFriendRequests = function(session) {
    /*
        Create a new instance of the PendingFriendRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/PendingFriendRequests"
    PendingFriendRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PendingFriendRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PendingFriendRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PendingFriendRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PendingFriendRequestsInputSet = function() {
    PendingFriendRequestsInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PendingFriendRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PendingFriendRequestsResultSet = function(resultStream) {
    PendingFriendRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PendingFriendRequests, choreography.Choreography);
util.inherits(PendingFriendRequestsInputSet, choreography.InputSet);
util.inherits(PendingFriendRequestsResultSet, choreography.ResultSet);
exports.PendingFriendRequests = PendingFriendRequests;


/*
    PhotosFromUser
    Returns photos from a user.
*/


var PhotosFromUser = function(session) {
    /*
        Create a new instance of the PhotosFromUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/PhotosFromUser"
    PhotosFromUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PhotosFromUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PhotosFromUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PhotosFromUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PhotosFromUserInputSet = function() {
    PhotosFromUserInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 500.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get badges for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PhotosFromUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PhotosFromUserResultSet = function(resultStream) {
    PhotosFromUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PhotosFromUser, choreography.Choreography);
util.inherits(PhotosFromUserInputSet, choreography.InputSet);
util.inherits(PhotosFromUserResultSet, choreography.ResultSet);
exports.PhotosFromUser = PhotosFromUser;


/*
    TipsFromUser
    Returns tips from a user.
*/


var TipsFromUser = function(session) {
    /*
        Create a new instance of the TipsFromUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/TipsFromUser"
    TipsFromUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TipsFromUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TipsFromUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TipsFromUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TipsFromUserInputSet = function() {
    TipsFromUserInputSet.super_.call(this);
        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 500.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Enter: recent, nearby, or popular. NEARBY requires geolat and geolong to be provided.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get tips for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TipsFromUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TipsFromUserResultSet = function(resultStream) {
    TipsFromUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TipsFromUser, choreography.Choreography);
util.inherits(TipsFromUserInputSet, choreography.InputSet);
util.inherits(TipsFromUserResultSet, choreography.ResultSet);
exports.TipsFromUser = TipsFromUser;


/*
    UserLists
    Retrieves user lists.
*/


var UserLists = function(session) {
    /*
        Create a new instance of the UserLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/UserLists"
    UserLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserListsInputSet = function() {
    UserListsInputSet.super_.call(this);
        /*
        Set the value of the Group input for this Choreo. ((optional, string) Used to narrow down the lists to returns. Valid values are: created, edited, followed, friends, and suggested. See documentation for definitions of these parameter values.)
        */
        this.set_Group = function(value) {
            this.setInput("Group", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) Latitude of user's location. Required in order to return the suggested group.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) Longitude of user's location. Required in order to return the suggested group.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get lists for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserListsResultSet = function(resultStream) {
    UserListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UserLists, choreography.Choreography);
util.inherits(UserListsInputSet, choreography.InputSet);
util.inherits(UserListsResultSet, choreography.ResultSet);
exports.UserLists = UserLists;


/*
    VenueHistory
    Returns a list of all venues visited by the specified user, along with how many visits and when they were last there. 
*/


var VenueHistory = function(session) {
    /*
        Create a new instance of the VenueHistory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Users/VenueHistory"
    VenueHistory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VenueHistoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VenueHistoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VenueHistory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VenueHistoryInputSet = function() {
    VenueHistoryInputSet.super_.call(this);
        /*
        Set the value of the AfterTimeStamp input for this Choreo. ((optional, date) Retrieve the first results after the seconds entered since epoch time.)
        */
        this.set_AfterTimeStamp = function(value) {
            this.setInput("AfterTimeStamp", value);
        }

        /*
        Set the value of the BeforeTimeStamp input for this Choreo. ((optional, date) Retrieve the first results prior to the seconds specified. Useful for paging backward in time.)
        */
        this.set_BeforeTimeStamp = function(value) {
            this.setInput("BeforeTimeStamp", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) Limits returned venues to those in this category. If specifying a top-level category, all sub-categories will also match the query.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Only 'self' is supported at this moment by the Foursquare API. Defaults to: self.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VenueHistory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VenueHistoryResultSet = function(resultStream) {
    VenueHistoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VenueHistory, choreography.Choreography);
util.inherits(VenueHistoryInputSet, choreography.InputSet);
util.inherits(VenueHistoryResultSet, choreography.ResultSet);
exports.VenueHistory = VenueHistory;

