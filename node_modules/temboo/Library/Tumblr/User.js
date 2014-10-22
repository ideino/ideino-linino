
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FollowUser
    Retrieves the user information associated with a given set of Tumblr Oauth credentials.
*/


var FollowUser = function(session) {
    /*
        Create a new instance of the FollowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/FollowUser"
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
        Set the value of the URL input for this Choreo. ((required, string) The URL of the user / blog to follow, without http:. Ex: username.tumblr.com)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FollowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FollowUserResultSet = function(resultStream) {
    FollowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
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
    GetUserInformation
    Retrieves the user information associated with a given set of Tumblr Oauth credentials.
*/


var GetUserInformation = function(session) {
    /*
        Create a new instance of the GetUserInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/GetUserInformation"
    GetUserInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInformationInputSet = function() {
    GetUserInformationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserInformationResultSet = function(resultStream) {
    GetUserInformationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserInformation, choreography.Choreography);
util.inherits(GetUserInformationInputSet, choreography.InputSet);
util.inherits(GetUserInformationResultSet, choreography.ResultSet);
exports.GetUserInformation = GetUserInformation;


/*
    RetrieveFollowedBlogsForUser
    Retrieve the blogs followed by the user whose OAuth credentials are provided.
*/


var RetrieveFollowedBlogsForUser = function(session) {
    /*
        Create a new instance of the RetrieveFollowedBlogsForUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/RetrieveFollowedBlogsForUser"
    RetrieveFollowedBlogsForUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveFollowedBlogsForUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveFollowedBlogsForUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveFollowedBlogsForUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveFollowedBlogsForUserInputSet = function() {
    RetrieveFollowedBlogsForUserInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return: 1 - 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The result to start at. Defaults to 0.)
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
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveFollowedBlogsForUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveFollowedBlogsForUserResultSet = function(resultStream) {
    RetrieveFollowedBlogsForUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveFollowedBlogsForUser, choreography.Choreography);
util.inherits(RetrieveFollowedBlogsForUserInputSet, choreography.InputSet);
util.inherits(RetrieveFollowedBlogsForUserResultSet, choreography.ResultSet);
exports.RetrieveFollowedBlogsForUser = RetrieveFollowedBlogsForUser;


/*
    RetrieveUserDashboard
    Retrieves the dashboard of the user that corresponds to the OAuth credentials provided.
*/


var RetrieveUserDashboard = function(session) {
    /*
        Create a new instance of the RetrieveUserDashboard Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/RetrieveUserDashboard"
    RetrieveUserDashboard.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUserDashboardResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUserDashboardInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUserDashboard
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUserDashboardInputSet = function() {
    RetrieveUserDashboardInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return: 1 - 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the NotesInfo input for this Choreo. ((optional, boolean) Indicates whether to return notes information. Specify 1(true) or 0 (false). Defaults to 0.)
        */
        this.set_NotesInfo = function(value) {
            this.setInput("NotesInfo", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The result to start at. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ReblogInfo input for this Choreo. ((optional, boolean) Indicates whether to return reblog information. Specify 1(true) or 0 (false). Defaults to 0.)
        */
        this.set_ReblogInfo = function(value) {
            this.setInput("ReblogInfo", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, integer) Return posts that have appeared after this ID. Used to page through results.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of post to return. Specify one of the following:  text, photo, quote, link, chat, audio, video, answer.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUserDashboard Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUserDashboardResultSet = function(resultStream) {
    RetrieveUserDashboardResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUserDashboard, choreography.Choreography);
util.inherits(RetrieveUserDashboardInputSet, choreography.InputSet);
util.inherits(RetrieveUserDashboardResultSet, choreography.ResultSet);
exports.RetrieveUserDashboard = RetrieveUserDashboard;


/*
    RetrieveUserLikes
    Retrieves the liked posts for the user that corresponds to the OAuth credentials provided.
*/


var RetrieveUserLikes = function(session) {
    /*
        Create a new instance of the RetrieveUserLikes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/RetrieveUserLikes"
    RetrieveUserLikes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUserLikesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUserLikesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUserLikes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUserLikesInputSet = function() {
    RetrieveUserLikesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return: 1 - 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The result to start at. Defaults to 0.)
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
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUserLikes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUserLikesResultSet = function(resultStream) {
    RetrieveUserLikesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUserLikes, choreography.Choreography);
util.inherits(RetrieveUserLikesInputSet, choreography.InputSet);
util.inherits(RetrieveUserLikesResultSet, choreography.ResultSet);
exports.RetrieveUserLikes = RetrieveUserLikes;


/*
    UnfollowUser
    Retrieves the user information associated with a given set of Tumblr Oauth credentials.
*/


var UnfollowUser = function(session) {
    /*
        Create a new instance of the UnfollowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/User/UnfollowUser"
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
        Set the value of the URL input for this Choreo. ((required, string) The URL of the user / blog to follow, without http:. Ex: username.tumblr.com)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnfollowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnfollowUserResultSet = function(resultStream) {
    UnfollowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnfollowUser, choreography.Choreography);
util.inherits(UnfollowUserInputSet, choreography.InputSet);
util.inherits(UnfollowUserResultSet, choreography.ResultSet);
exports.UnfollowUser = UnfollowUser;

