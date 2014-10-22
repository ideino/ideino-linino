
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Explore
    Returns a list of recommended venues near the current location.
*/


var Explore = function(session) {
    /*
        Create a new instance of the Explore Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/Explore"
    Explore.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ExploreResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ExploreInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Explore
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ExploreInputSet = function() {
    ExploreInputSet.super_.call(this);
        /*
        Set the value of the AccuracyOfCoordinates input for this Choreo. ((optional, integer) Accuracy of latitude and longitude, in meters.)
        */
        this.set_AccuracyOfCoordinates = function(value) {
            this.setInput("AccuracyOfCoordinates", value);
        }

        /*
        Set the value of the AltitudeAccuracy input for this Choreo. ((optional, integer) Accuracy of the user's altitude, in meters.)
        */
        this.set_AltitudeAccuracy = function(value) {
            this.setInput("AltitudeAccuracy", value);
        }

        /*
        Set the value of the Altitude input for this Choreo. ((optional, integer) Altitude of the user's location, in meters.)
        */
        this.set_Altitude = function(value) {
            this.setInput("Altitude", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Intent input for this Choreo. ((optional, string) Limit results to venues when set to "specials".)
        */
        this.set_Intent = function(value) {
            this.setInput("Intent", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) The latitude point of the user's location. Required unless the Near parameter is provided.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to retun, up to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) The longitude point of the user's location. Required unless the Near parameter is provided.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Near input for this Choreo. ((conditional, string) A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Required unless provided Latitude and Longitude.)
        */
        this.set_Near = function(value) {
            this.setInput("Near", value);
        }

        /*
        Set the value of the Novelty input for this Choreo. ((optional, string) Pass new or old to limit results to places the acting user hasn't been or has been, respectively. Omitting this parameter returns a mixture of both new and old.)
        */
        this.set_Novelty = function(value) {
            this.setInput("Novelty", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((conditional, string) The Foursquare API OAuth token string. Required unless specifying the ClientID and ClientSecret.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search term to be applied against tips, category, etc. at a venue.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((optional, integer) Radius to search within, in meters. If radius is not specified, a suggested radius will be used depending on the density of venues in the area.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Section input for this Choreo. ((optional, string) One of food, drinks, coffee, shops, arts, or outdoors. Choosing one of these limits results to venues with categories matching these terms.)
        */
        this.set_Section = function(value) {
            this.setInput("Section", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Explore Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ExploreResultSet = function(resultStream) {
    ExploreResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Explore, choreography.Choreography);
util.inherits(ExploreInputSet, choreography.InputSet);
util.inherits(ExploreResultSet, choreography.ResultSet);
exports.Explore = Explore;


/*
    HereNow
    Retrieves a count of how many people are at a given venue. For authenticated users, friends and friends-of-friends at the venue are also returned.
*/


var HereNow = function(session) {
    /*
        Create a new instance of the HereNow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/HereNow"
    HereNow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HereNowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HereNowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HereNow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HereNowInputSet = function() {
    HereNowInputSet.super_.call(this);
        /*
        Set the value of the AfterTimestamp input for this Choreo. ((optional, date) Retrieve the first results to follow this timestamp (an epoch timestamp in seconds).)
        */
        this.set_AfterTimestamp = function(value) {
            this.setInput("AfterTimestamp", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return, up to 500.)
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
        Set the value of the VenueID input for this Choreo. ((required, string) The ID associated with the venue you want to retrieve details for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HereNow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HereNowResultSet = function(resultStream) {
    HereNowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HereNow, choreography.Choreography);
util.inherits(HereNowInputSet, choreography.InputSet);
util.inherits(HereNowResultSet, choreography.ResultSet);
exports.HereNow = HereNow;


/*
    Like
    Allows the authenticated user to like or unlike a venue.
*/


var Like = function(session) {
    /*
        Create a new instance of the Like Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/Like"
    Like.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Like
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikeInputSet = function() {
    LikeInputSet.super_.call(this);
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
        Set the value of the Set input for this Choreo. ((optional, boolean) Set to 1 (the default) to like this checkin. Set to 0 to undo a previous like.)
        */
        this.set_Set = function(value) {
            this.setInput("Set", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((required, string) The ID of the venue to like or unlike.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Like Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikeResultSet = function(resultStream) {
    LikeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Like, choreography.Choreography);
util.inherits(LikeInputSet, choreography.InputSet);
util.inherits(LikeResultSet, choreography.ResultSet);
exports.Like = Like;


/*
    Likes
    Returns friends and a total count of users who have liked a venue.
*/


var Likes = function(session) {
    /*
        Create a new instance of the Likes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/Likes"
    Likes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Likes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikesInputSet = function() {
    LikesInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string. Required unless specifying the ClientID and ClientSecret.)
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
        Set the value of the VenueID input for this Choreo. ((required, string) The ID of the venue to retrieve likes for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Likes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikesResultSet = function(resultStream) {
    LikesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Likes, choreography.Choreography);
util.inherits(LikesInputSet, choreography.InputSet);
util.inherits(LikesResultSet, choreography.ResultSet);
exports.Likes = Likes;


/*
    SearchVenues
    Obtain a list of venues near the current location. 
*/


var SearchVenues = function(session) {
    /*
        Create a new instance of the SearchVenues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/SearchVenues"
    SearchVenues.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchVenuesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchVenuesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchVenues
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchVenuesInputSet = function() {
    SearchVenuesInputSet.super_.call(this);
        /*
        Set the value of the AccuracyOfCoordinates input for this Choreo. ((optional, integer) Accuracy of latitude and longitude, in meters. Currently, this parameter   does not affect search results.)
        */
        this.set_AccuracyOfCoordinates = function(value) {
            this.setInput("AccuracyOfCoordinates", value);
        }

        /*
        Set the value of the AltitudeAccuracy input for this Choreo. ((optional, integer) Accuracy of the user's altitude, in meters. Currently, this parameter does not affect search results.)
        */
        this.set_AltitudeAccuracy = function(value) {
            this.setInput("AltitudeAccuracy", value);
        }

        /*
        Set the value of the Altitude input for this Choreo. ((optional, integer) Altitude of the user's location, in meters. Currently, this parameter does not affect search results.)
        */
        this.set_Altitude = function(value) {
            this.setInput("Altitude", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Intent input for this Choreo. ((optional, string) Indicates your intent when performing the search.  Enter: checkin (default), match (requires Query and Latitude/Longitude to be provided).)
        */
        this.set_Intent = function(value) {
            this.setInput("Intent", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to retun, up to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((conditional, string) The Foursquare API Oauth token string. Required unless specifying the ClientID and ClientSecret.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) Your search string.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchVenues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchVenuesResultSet = function(resultStream) {
    SearchVenuesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchVenues, choreography.Choreography);
util.inherits(SearchVenuesInputSet, choreography.InputSet);
util.inherits(SearchVenuesResultSet, choreography.ResultSet);
exports.SearchVenues = SearchVenues;


/*
    Similar
    Returns a list of venues similar to the specified venue.
*/


var Similar = function(session) {
    /*
        Create a new instance of the Similar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/Similar"
    Similar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SimilarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SimilarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Similar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SimilarInputSet = function() {
    SimilarInputSet.super_.call(this);
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
        Set the value of the VenueID input for this Choreo. ((required, string) The id for the venue you want similar venues for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Similar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SimilarResultSet = function(resultStream) {
    SimilarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Similar, choreography.Choreography);
util.inherits(SimilarInputSet, choreography.InputSet);
util.inherits(SimilarResultSet, choreography.ResultSet);
exports.Similar = Similar;


/*
    TipsFromVenue
    This choreo returns tips for a particular venue written by other Foursquare users.
*/


var TipsFromVenue = function(session) {
    /*
        Create a new instance of the TipsFromVenue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/TipsFromVenue"
    TipsFromVenue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TipsFromVenueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TipsFromVenueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TipsFromVenue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TipsFromVenueInputSet = function() {
    TipsFromVenueInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to retun, up to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((conditional, string) The Foursquare API OAuth token string. Required unless specifying the ClientID and ClientSecret.)
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
        Set the value of the Sort input for this Choreo. ((optional, string) Enter: recent or popular.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((required, string) The venue you want tips for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TipsFromVenue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TipsFromVenueResultSet = function(resultStream) {
    TipsFromVenueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TipsFromVenue, choreography.Choreography);
util.inherits(TipsFromVenueInputSet, choreography.InputSet);
util.inherits(TipsFromVenueResultSet, choreography.ResultSet);
exports.TipsFromVenue = TipsFromVenue;


/*
    TrendingVenues
    Returns a list of venues near the current location with the most people currently checked in.
*/


var TrendingVenues = function(session) {
    /*
        Create a new instance of the TrendingVenues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/TrendingVenues"
    TrendingVenues.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrendingVenuesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrendingVenuesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TrendingVenues
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrendingVenuesInputSet = function() {
    TrendingVenuesInputSet.super_.call(this);
        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to retun, up to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude point of the user's location.)
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
        Set the value of the Radius input for this Choreo. ((optional, integer) Radius in meters, up to approximately 2000 meters.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TrendingVenues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrendingVenuesResultSet = function(resultStream) {
    TrendingVenuesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TrendingVenues, choreography.Choreography);
util.inherits(TrendingVenuesInputSet, choreography.InputSet);
util.inherits(TrendingVenuesResultSet, choreography.ResultSet);
exports.TrendingVenues = TrendingVenues;


/*
    VenueDetail
    Obtain details about venues, including location, mayorship, tags, tips, specials and category.  Users who have authenticated via their oauth_token credential, also receive information about who is at the location being queried.
*/


var VenueDetail = function(session) {
    /*
        Create a new instance of the VenueDetail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/VenueDetail"
    VenueDetail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VenueDetailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VenueDetailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VenueDetail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VenueDetailInputSet = function() {
    VenueDetailInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) Your Foursquare client ID, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) Your Foursquare client secret, obtained after registering at Foursquare. Required unless using the OauthToken input.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((conditional, string) The Foursquare API Oauth token string. Required unless specifying the ClientID and ClientSecret.)
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
        Set the value of the VenueID input for this Choreo. ((required, string) The ID associated with the venue you want to retrieve details for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VenueDetail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VenueDetailResultSet = function(resultStream) {
    VenueDetailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VenueDetail, choreography.Choreography);
util.inherits(VenueDetailInputSet, choreography.InputSet);
util.inherits(VenueDetailResultSet, choreography.ResultSet);
exports.VenueDetail = VenueDetail;


/*
    VenueEvents
    Allows you to access information about the current events at a place.
*/


var VenueEvents = function(session) {
    /*
        Create a new instance of the VenueEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Venues/VenueEvents"
    VenueEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VenueEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VenueEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VenueEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VenueEventsInputSet = function() {
    VenueEventsInputSet.super_.call(this);
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
        Set the value of the VenueID input for this Choreo. ((required, string) The ID associated with the venue you want to retrieve details for.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VenueEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VenueEventsResultSet = function(resultStream) {
    VenueEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VenueEvents, choreography.Choreography);
util.inherits(VenueEventsInputSet, choreography.InputSet);
util.inherits(VenueEventsResultSet, choreography.ResultSet);
exports.VenueEvents = VenueEvents;

