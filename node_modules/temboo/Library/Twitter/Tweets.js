
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetRetweeters
    Retrieves a collection of up to 100 user IDs belonging to users who have retweeted the specified tweet.
*/


var GetRetweeters = function(session) {
    /*
        Create a new instance of the GetRetweeters Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Tweets/GetRetweeters"
    GetRetweeters.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRetweetersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRetweetersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRetweeters
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRetweetersInputSet = function() {
    GetRetweetersInputSet.super_.call(this);
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
        Set the value of the ID input for this Choreo. ((required, string) The numerical ID of the desired status.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the StringifyIDs input for this Choreo. ((optional, boolean) A boolean flag indicating that IDs should be returned as strings.)
        */
        this.set_StringifyIDs = function(value) {
            this.setInput("StringifyIDs", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRetweeters Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRetweetersResultSet = function(resultStream) {
    GetRetweetersResultSet.super_.call(this, resultStream);    
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

util.inherits(GetRetweeters, choreography.Choreography);
util.inherits(GetRetweetersInputSet, choreography.InputSet);
util.inherits(GetRetweetersResultSet, choreography.ResultSet);
exports.GetRetweeters = GetRetweeters;


/*
    GetRetweets
    Retrieves up to 100 of the first retweets of a given tweet.
*/


var GetRetweets = function(session) {
    /*
        Create a new instance of the GetRetweets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Tweets/GetRetweets"
    GetRetweets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRetweetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRetweetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRetweets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRetweetsInputSet = function() {
    GetRetweetsInputSet.super_.call(this);
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
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to, up to a maximum of 100.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The numerical ID of the tweet to retrieve retweets for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRetweets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRetweetsResultSet = function(resultStream) {
    GetRetweetsResultSet.super_.call(this, resultStream);    
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

util.inherits(GetRetweets, choreography.Choreography);
util.inherits(GetRetweetsInputSet, choreography.InputSet);
util.inherits(GetRetweetsResultSet, choreography.ResultSet);
exports.GetRetweets = GetRetweets;


/*
    StatusesDestroy
    Deletes a specified status.
*/


var StatusesDestroy = function(session) {
    /*
        Create a new instance of the StatusesDestroy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Tweets/StatusesDestroy"
    StatusesDestroy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StatusesDestroyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StatusesDestroyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StatusesDestroy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StatusesDestroyInputSet = function() {
    StatusesDestroyInputSet.super_.call(this);
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
        Set the value of the ID input for this Choreo. ((required, string) The numerical ID of the status to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StatusesDestroy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StatusesDestroyResultSet = function(resultStream) {
    StatusesDestroyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StatusesDestroy, choreography.Choreography);
util.inherits(StatusesDestroyInputSet, choreography.InputSet);
util.inherits(StatusesDestroyResultSet, choreography.ResultSet);
exports.StatusesDestroy = StatusesDestroy;


/*
    StatusesShow
    Retrieves a single Tweet with a given ID.
*/


var StatusesShow = function(session) {
    /*
        Create a new instance of the StatusesShow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Tweets/StatusesShow"
    StatusesShow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StatusesShowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StatusesShowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StatusesShow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StatusesShowInputSet = function() {
    StatusesShowInputSet.super_.call(this);
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
        Set the value of the ID input for this Choreo. ((required, string) The numerical ID of the desired Tweet.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the IncludeMyRetweet input for this Choreo. ((optional, boolean) When set to true, any Tweets returned that have been retweeted by the authenticating user will include an additional current_user_retweet node, containing the ID of the source status for the retweet.)
        */
        this.set_IncludeMyRetweet = function(value) {
            this.setInput("IncludeMyRetweet", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to true, each tweet returned in a timeline will include a user object including only the status authors numerical ID. Defaults to false.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StatusesShow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StatusesShowResultSet = function(resultStream) {
    StatusesShowResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(StatusesShow, choreography.Choreography);
util.inherits(StatusesShowInputSet, choreography.InputSet);
util.inherits(StatusesShowResultSet, choreography.ResultSet);
exports.StatusesShow = StatusesShow;


/*
    StatusesUpdate
    Allows you to update your Twitter status (aka Tweet).
*/


var StatusesUpdate = function(session) {
    /*
        Create a new instance of the StatusesUpdate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Tweets/StatusesUpdate"
    StatusesUpdate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StatusesUpdateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StatusesUpdateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StatusesUpdate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StatusesUpdateInputSet = function() {
    StatusesUpdateInputSet.super_.call(this);
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
        Set the value of the DisplayCoordinates input for this Choreo. ((optional, boolean) Whether or not to put a pin on the exact coordinates a tweet has been sent from.)
        */
        this.set_DisplayCoordinates = function(value) {
            this.setInput("DisplayCoordinates", value);
        }

        /*
        Set the value of the InReplyTo input for this Choreo. ((optional, string) The ID of an existing status that the update is in reply to.)
        */
        this.set_InReplyTo = function(value) {
            this.setInput("InReplyTo", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude of the location this tweet refers to.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude of the location this tweet refers to.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the PlaceID input for this Choreo. ((optional, string) The ID associated with a place in the world. These IDs can be retrieved from the PlacesAndGeo.ReverseGeocode Choreo.)
        */
        this.set_PlaceID = function(value) {
            this.setInput("PlaceID", value);
        }

        /*
        Set the value of the StatusUpdate input for this Choreo. ((required, string) The text for your status update. 140-character limit.)
        */
        this.set_StatusUpdate = function(value) {
            this.setInput("StatusUpdate", value);
        }

        /*
        Set the value of the TrimUser input for this Choreo. ((optional, boolean) When set to either true, each tweet returned in a timeline will include a user object including only the status authors numerical ID.)
        */
        this.set_TrimUser = function(value) {
            this.setInput("TrimUser", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StatusesUpdate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StatusesUpdateResultSet = function(resultStream) {
    StatusesUpdateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StatusesUpdate, choreography.Choreography);
util.inherits(StatusesUpdateInputSet, choreography.InputSet);
util.inherits(StatusesUpdateResultSet, choreography.ResultSet);
exports.StatusesUpdate = StatusesUpdate;

