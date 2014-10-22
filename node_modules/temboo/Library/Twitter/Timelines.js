
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    HomeTimeline
    Retrieves a collection of the most recent Tweets and retweets posted by the authenticating user and the users they follow.
*/


var HomeTimeline = function(session) {
    /*
        Create a new instance of the HomeTimeline Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Timelines/HomeTimeline"
    HomeTimeline.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HomeTimelineResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HomeTimelineInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HomeTimeline
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HomeTimelineInputSet = function() {
    HomeTimelineInputSet.super_.call(this);
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
        Set the value of the ContributorDetails input for this Choreo. ((optional, boolean) Set to true to include the screen_name of the contributor. By default only the user_id of the contributor is included.)
        */
        this.set_ContributorDetails = function(value) {
            this.setInput("ContributorDetails", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the ExcludeReplies input for this Choreo. ((optional, boolean) Set to true to prevent replies from appearing in the returned timeline.)
        */
        this.set_ExcludeReplies = function(value) {
            this.setInput("ExcludeReplies", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Defaults to false.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HomeTimeline Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HomeTimelineResultSet = function(resultStream) {
    HomeTimelineResultSet.super_.call(this, resultStream);    
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
}

util.inherits(HomeTimeline, choreography.Choreography);
util.inherits(HomeTimelineInputSet, choreography.InputSet);
util.inherits(HomeTimelineResultSet, choreography.ResultSet);
exports.HomeTimeline = HomeTimeline;


/*
    Mentions
    Retrieves the 20 most recent mentions for the authenticating user.
*/


var Mentions = function(session) {
    /*
        Create a new instance of the Mentions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Timelines/Mentions"
    Mentions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MentionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MentionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Mentions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MentionsInputSet = function() {
    MentionsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.n)
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
        Set the value of the ContributorDetails input for this Choreo. ((optional, boolean) Set to true to include the screen_name of the contributor. By default only the user_id of the contributor is included.)
        */
        this.set_ContributorDetails = function(value) {
            this.setInput("ContributorDetails", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of tweets to retrieve. Must be less than or equal to 200. Defaults to 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Defaults to false, which returns the complete user object.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Mentions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MentionsResultSet = function(resultStream) {
    MentionsResultSet.super_.call(this, resultStream);    
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

util.inherits(Mentions, choreography.Choreography);
util.inherits(MentionsInputSet, choreography.InputSet);
util.inherits(MentionsResultSet, choreography.ResultSet);
exports.Mentions = Mentions;


/*
    RetweetsOfMe
    Retrieves the most recent tweets posted by the authenticating user that have recently been retweeted by others.
*/


var RetweetsOfMe = function(session) {
    /*
        Create a new instance of the RetweetsOfMe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Timelines/RetweetsOfMe"
    RetweetsOfMe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetweetsOfMeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetweetsOfMeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetweetsOfMe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetweetsOfMeInputSet = function() {
    RetweetsOfMeInputSet.super_.call(this);
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
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The tweets "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the IncludeUserEntities input for this Choreo. ((optional, boolean) The user "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeUserEntities = function(value) {
            this.setInput("IncludeUserEntities", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Defaults to false.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetweetsOfMe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetweetsOfMeResultSet = function(resultStream) {
    RetweetsOfMeResultSet.super_.call(this, resultStream);    
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

util.inherits(RetweetsOfMe, choreography.Choreography);
util.inherits(RetweetsOfMeInputSet, choreography.InputSet);
util.inherits(RetweetsOfMeResultSet, choreography.ResultSet);
exports.RetweetsOfMe = RetweetsOfMe;


/*
    UserTimeline
    Retrieves a collection of the most recent Tweets posted by the user whose screen_name or user_id is indicated.
*/


var UserTimeline = function(session) {
    /*
        Create a new instance of the UserTimeline Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Timelines/UserTimeline"
    UserTimeline.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserTimelineResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserTimelineInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserTimeline
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserTimelineInputSet = function() {
    UserTimelineInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((conditional, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((conditional, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((conditional, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ContributorDetails input for this Choreo. ((optional, boolean) Set to true to include the screen_name of the contributor. By default only the user_id of the contributor is included.)
        */
        this.set_ContributorDetails = function(value) {
            this.setInput("ContributorDetails", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the ExcludeReplies input for this Choreo. ((optional, boolean) Set to true to prevent replies from appearing in the returned timeline.)
        */
        this.set_ExcludeReplies = function(value) {
            this.setInput("ExcludeReplies", value);
        }

        /*
        Set the value of the IncludeRetweets input for this Choreo. ((optional, boolean) When set to true, the response will include the "entities" node.)
        */
        this.set_IncludeRetweets = function(value) {
            this.setInput("IncludeRetweets", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) Screen name of the user to return results for. Required unless providing the UserId.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Defaults to false.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) ID of the user to return results for. Required unless providing the ScreenName.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserTimeline Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserTimelineResultSet = function(resultStream) {
    UserTimelineResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(UserTimeline, choreography.Choreography);
util.inherits(UserTimelineInputSet, choreography.InputSet);
util.inherits(UserTimelineResultSet, choreography.ResultSet);
exports.UserTimeline = UserTimeline;

