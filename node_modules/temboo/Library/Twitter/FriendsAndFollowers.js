
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateFriendship
    Allows you to follow another Twitter user by specifying a Twitter user id or screen name.
*/


var CreateFriendship = function(session) {
    /*
        Create a new instance of the CreateFriendship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/CreateFriendship"
    CreateFriendship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateFriendshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateFriendshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateFriendship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateFriendshipInputSet = function() {
    CreateFriendshipInputSet.super_.call(this);
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
        Set the value of the Follow input for this Choreo. ((optional, boolean) A boolean flag that enables notifications for the target user when set to true.)
        */
        this.set_Follow = function(value) {
            this.setInput("Follow", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name for the friend you want to create a friendship with. Required if UserId isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The user id for the friend you want to create a friendship with. Required if ScreenName isn't specified.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateFriendship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateFriendshipResultSet = function(resultStream) {
    CreateFriendshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateFriendship, choreography.Choreography);
util.inherits(CreateFriendshipInputSet, choreography.InputSet);
util.inherits(CreateFriendshipResultSet, choreography.ResultSet);
exports.CreateFriendship = CreateFriendship;


/*
    DeleteFriendship
    Allows you to unfollow another Twitter user when you specify a Twitter user ID or screen name.
*/


var DeleteFriendship = function(session) {
    /*
        Create a new instance of the DeleteFriendship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/DeleteFriendship"
    DeleteFriendship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteFriendshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteFriendshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteFriendship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteFriendshipInputSet = function() {
    DeleteFriendshipInputSet.super_.call(this);
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
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name for the friend you want to unfollow. Required if UserId isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The user ID for the friend you want to unfollow. Required if ScreenName isn't specified.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFriendship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFriendshipResultSet = function(resultStream) {
    DeleteFriendshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteFriendship, choreography.Choreography);
util.inherits(DeleteFriendshipInputSet, choreography.InputSet);
util.inherits(DeleteFriendshipResultSet, choreography.ResultSet);
exports.DeleteFriendship = DeleteFriendship;


/*
    FriendshipsLookup
    Retrieves the relationship of the authenticating user to the comma-separated list of up to 100 screen names or user IDs provided.
*/


var FriendshipsLookup = function(session) {
    /*
        Create a new instance of the FriendshipsLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/FriendshipsLookup"
    FriendshipsLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FriendshipsLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FriendshipsLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FriendshipsLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FriendshipsLookupInputSet = function() {
    FriendshipsLookupInputSet.super_.call(this);
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
        Set the value of the ScreenName input for this Choreo. ((conditional, string) A comma separated list of screen names. Up to 100 are allowed. Required unless UserID is specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) A comma separated list of user IDs. Up to 100 are allowed. Required unless ScreenName is specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FriendshipsLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FriendshipsLookupResultSet = function(resultStream) {
    FriendshipsLookupResultSet.super_.call(this, resultStream);    
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

util.inherits(FriendshipsLookup, choreography.Choreography);
util.inherits(FriendshipsLookupInputSet, choreography.InputSet);
util.inherits(FriendshipsLookupResultSet, choreography.ResultSet);
exports.FriendshipsLookup = FriendshipsLookup;


/*
    FriendshipsShow
    Returns detailed information about the relationship between two users.
*/


var FriendshipsShow = function(session) {
    /*
        Create a new instance of the FriendshipsShow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/FriendshipsShow"
    FriendshipsShow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FriendshipsShowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FriendshipsShowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FriendshipsShow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FriendshipsShowInputSet = function() {
    FriendshipsShowInputSet.super_.call(this);
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
        Set the value of the SourceScreenName input for this Choreo. ((conditional, string) The screen_name of the subject user. Required unless specifying the SourceUserID instead.)
        */
        this.set_SourceScreenName = function(value) {
            this.setInput("SourceScreenName", value);
        }

        /*
        Set the value of the SourceUserID input for this Choreo. ((conditional, string) The ID of the subject user. Required unless specifying the SourceScreenName instead.)
        */
        this.set_SourceUserID = function(value) {
            this.setInput("SourceUserID", value);
        }

        /*
        Set the value of the TargetScreenName input for this Choreo. ((conditional, string) The screen_name of the target user. Required unless specifying the TargetUserID instead.)
        */
        this.set_TargetScreenName = function(value) {
            this.setInput("TargetScreenName", value);
        }

        /*
        Set the value of the TargetUserID input for this Choreo. ((conditional, string) The ID of the target user. Required unless specifying the TargetScreenName instead.)
        */
        this.set_TargetUserID = function(value) {
            this.setInput("TargetUserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FriendshipsShow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FriendshipsShowResultSet = function(resultStream) {
    FriendshipsShowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FriendshipsShow, choreography.Choreography);
util.inherits(FriendshipsShowInputSet, choreography.InputSet);
util.inherits(FriendshipsShowResultSet, choreography.ResultSet);
exports.FriendshipsShow = FriendshipsShow;


/*
    GetFollowersByID
    Retrieves a list of numeric IDs for every user following the specified user.
*/


var GetFollowersByID = function(session) {
    /*
        Create a new instance of the GetFollowersByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/GetFollowersByID"
    GetFollowersByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFollowersByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFollowersByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFollowersByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFollowersByIDInputSet = function() {
    GetFollowersByIDInputSet.super_.call(this);
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
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. Required if UserID isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, integer) The ID of the user for whom to return results for. Required if ScreenName isn't specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFollowersByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFollowersByIDResultSet = function(resultStream) {
    GetFollowersByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFollowersByID, choreography.Choreography);
util.inherits(GetFollowersByIDInputSet, choreography.InputSet);
util.inherits(GetFollowersByIDResultSet, choreography.ResultSet);
exports.GetFollowersByID = GetFollowersByID;


/*
    GetFriendsByID
    Retrieves a list of numeric IDs for every user the specified user is following (also known as their "friends").
*/


var GetFriendsByID = function(session) {
    /*
        Create a new instance of the GetFriendsByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/GetFriendsByID"
    GetFriendsByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFriendsByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFriendsByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFriendsByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFriendsByIDInputSet = function() {
    GetFriendsByIDInputSet.super_.call(this);
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
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. Required if UserId isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user for whom to return results for. Required if ScreenName isn't specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFriendsByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFriendsByIDResultSet = function(resultStream) {
    GetFriendsByIDResultSet.super_.call(this, resultStream);    
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
}

util.inherits(GetFriendsByID, choreography.Choreography);
util.inherits(GetFriendsByIDInputSet, choreography.InputSet);
util.inherits(GetFriendsByIDResultSet, choreography.ResultSet);
exports.GetFriendsByID = GetFriendsByID;


/*
    IncomingFriendships
    Retrieves a list of numeric IDs for every user who has a pending request to follow the authenticating user.
*/


var IncomingFriendships = function(session) {
    /*
        Create a new instance of the IncomingFriendships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/IncomingFriendships"
    IncomingFriendships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new IncomingFriendshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new IncomingFriendshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the IncomingFriendships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var IncomingFriendshipsInputSet = function() {
    IncomingFriendshipsInputSet.super_.call(this);
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
        Set the value of the Cursor input for this Choreo. ((optional, integer) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the IncomingFriendships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var IncomingFriendshipsResultSet = function(resultStream) {
    IncomingFriendshipsResultSet.super_.call(this, resultStream);    
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

util.inherits(IncomingFriendships, choreography.Choreography);
util.inherits(IncomingFriendshipsInputSet, choreography.InputSet);
util.inherits(IncomingFriendshipsResultSet, choreography.ResultSet);
exports.IncomingFriendships = IncomingFriendships;


/*
    ListFollowers
    Retrieves a collection of user objects for users following the specified user.
*/


var ListFollowers = function(session) {
    /*
        Create a new instance of the ListFollowers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/ListFollowers"
    ListFollowers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFollowersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFollowersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFollowers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFollowersInputSet = function() {
    ListFollowersInputSet.super_.call(this);
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
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the IncludeUserEntities input for this Choreo. ((optional, boolean) The user "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeUserEntities = function(value) {
            this.setInput("IncludeUserEntities", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. Required if UserID isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user for whom to return results for. Required if ScreenName isn't specified.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFollowers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFollowersResultSet = function(resultStream) {
    ListFollowersResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(ListFollowers, choreography.Choreography);
util.inherits(ListFollowersInputSet, choreography.InputSet);
util.inherits(ListFollowersResultSet, choreography.ResultSet);
exports.ListFollowers = ListFollowers;


/*
    ListFriends
    Retrieves a collection of user objects for every user the specified user is following.
*/


var ListFriends = function(session) {
    /*
        Create a new instance of the ListFriends Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/ListFriends"
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
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the IncludeUserEntities input for this Choreo. ((optional, boolean) The user "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeUserEntities = function(value) {
            this.setInput("IncludeUserEntities", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. Required if UserID isn't specified.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The ID of the user for whom to return results for. Required if ScreenName isn't specified.)
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
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
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
}

util.inherits(ListFriends, choreography.Choreography);
util.inherits(ListFriendsInputSet, choreography.InputSet);
util.inherits(ListFriendsResultSet, choreography.ResultSet);
exports.ListFriends = ListFriends;


/*
    OutgoingFriendships
    Retrieves a list of numeric IDs for every protected user for whom the authenticating user has a pending follow request.
*/


var OutgoingFriendships = function(session) {
    /*
        Create a new instance of the OutgoingFriendships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/FriendsAndFollowers/OutgoingFriendships"
    OutgoingFriendships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new OutgoingFriendshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new OutgoingFriendshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the OutgoingFriendships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var OutgoingFriendshipsInputSet = function() {
    OutgoingFriendshipsInputSet.super_.call(this);
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
        Set the value of the Cursor input for this Choreo. ((optional, integer) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that Tweet IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the OutgoingFriendships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var OutgoingFriendshipsResultSet = function(resultStream) {
    OutgoingFriendshipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(OutgoingFriendships, choreography.Choreography);
util.inherits(OutgoingFriendshipsInputSet, choreography.InputSet);
util.inherits(OutgoingFriendshipsResultSet, choreography.ResultSet);
exports.OutgoingFriendships = OutgoingFriendships;

