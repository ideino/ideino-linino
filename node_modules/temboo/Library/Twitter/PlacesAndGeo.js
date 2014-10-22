
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GeoSearch
    Searches for places that can be attached to a status update using a latitude and a longitude pair, an IP address, or a name.
*/


var GeoSearch = function(session) {
    /*
        Create a new instance of the GeoSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/PlacesAndGeo/GeoSearch"
    GeoSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GeoSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GeoSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GeoSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GeoSearchInputSet = function() {
    GeoSearchInputSet.super_.call(this);
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
        Set the value of the Accuracy input for this Choreo. ((optional, string) A hint on the "region" in which to search. If a number, then this is a radius in meters. You can also specify feet by using the ft suffix (i.e. 5ft).)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the Callback input for this Choreo. ((optional, string) If supplied, the response will use the JSONP format with a callback of the given name.)
        */
        this.set_Callback = function(value) {
            this.setInput("Callback", value);
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
        Set the value of the ContainedWithin input for this Choreo. ((optional, string) This is the place_id which you would like to restrict the search results to. This id can be retrieved with the GetPlaceInformation Choreo.)
        */
        this.set_ContainedWithin = function(value) {
            this.setInput("ContainedWithin", value);
        }

        /*
        Set the value of the Granularity input for this Choreo. ((optional, string) This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. Defaults to neighborhood.)
        */
        this.set_Granularity = function(value) {
            this.setInput("Granularity", value);
        }

        /*
        Set the value of the IP input for this Choreo. ((conditional, string) An IP address. Used when attempting to fix geolocation based off of the user's IP address. You must provide Latitude and Longitude, IP, or Query.)
        */
        this.set_IP = function(value) {
            this.setInput("IP", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) The latitude to search around. You must provide Latitude and Longitude, IP, or Query.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) The longitude to search around. You must provide Latitude and Longitude, IP, or Query.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) Free-form text to match against while executing a geo-based query. You must provide Latitude and Longitude, IP, or Query.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GeoSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GeoSearchResultSet = function(resultStream) {
    GeoSearchResultSet.super_.call(this, resultStream);    
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

util.inherits(GeoSearch, choreography.Choreography);
util.inherits(GeoSearchInputSet, choreography.InputSet);
util.inherits(GeoSearchResultSet, choreography.ResultSet);
exports.GeoSearch = GeoSearch;


/*
    GetPlaceInformation
    Searches for places that can be attached to a statuses/update using a latitude and a longitude pair, an IP address, or a name.
*/


var GetPlaceInformation = function(session) {
    /*
        Create a new instance of the GetPlaceInformation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/PlacesAndGeo/GetPlaceInformation"
    GetPlaceInformation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPlaceInformationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPlaceInformationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPlaceInformation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPlaceInformationInputSet = function() {
    GetPlaceInformationInputSet.super_.call(this);
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
        Set the value of the PlaceId input for this Choreo. ((required, string) The id for a place in the world. These IDs can be retrieved from the ReverseGeocode Choreo.)
        */
        this.set_PlaceId = function(value) {
            this.setInput("PlaceId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPlaceInformation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPlaceInformationResultSet = function(resultStream) {
    GetPlaceInformationResultSet.super_.call(this, resultStream);    
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

util.inherits(GetPlaceInformation, choreography.Choreography);
util.inherits(GetPlaceInformationInputSet, choreography.InputSet);
util.inherits(GetPlaceInformationResultSet, choreography.ResultSet);
exports.GetPlaceInformation = GetPlaceInformation;


/*
    ReverseGeocode
    Given a latitude and a longitude coordinates, returns up to 20 places that can be used as a Place ID when updating a status.
*/


var ReverseGeocode = function(session) {
    /*
        Create a new instance of the ReverseGeocode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/PlacesAndGeo/ReverseGeocode"
    ReverseGeocode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReverseGeocodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReverseGeocodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReverseGeocode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReverseGeocodeInputSet = function() {
    ReverseGeocodeInputSet.super_.call(this);
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
        Set the value of the Accuracy input for this Choreo. ((optional, string) A hint on the "region" in which to search. If a number, then this is a radius in meters. You can also specify feet by using the ft suffix (i.e. 5ft).)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the Callback input for this Choreo. ((optional, string) If supplied, the response will use the JSONP format with a callback of the given name.)
        */
        this.set_Callback = function(value) {
            this.setInput("Callback", value);
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
        Set the value of the Granularity input for this Choreo. ((optional, string) This is the minimal granularity of place types to return and must be one of: poi, neighborhood, city, admin or country. Defaults to neighborhood.)
        */
        this.set_Granularity = function(value) {
            this.setInput("Granularity", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude to search around.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude to search around.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReverseGeocode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReverseGeocodeResultSet = function(resultStream) {
    ReverseGeocodeResultSet.super_.call(this, resultStream);    
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

util.inherits(ReverseGeocode, choreography.Choreography);
util.inherits(ReverseGeocodeInputSet, choreography.InputSet);
util.inherits(ReverseGeocodeResultSet, choreography.ResultSet);
exports.ReverseGeocode = ReverseGeocode;


/*
    SimilarPlaces
    Locates places near the given coordinates which have a similar name.
*/


var SimilarPlaces = function(session) {
    /*
        Create a new instance of the SimilarPlaces Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/PlacesAndGeo/SimilarPlaces"
    SimilarPlaces.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SimilarPlacesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SimilarPlacesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SimilarPlaces
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SimilarPlacesInputSet = function() {
    SimilarPlacesInputSet.super_.call(this);
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
        Set the value of the Callback input for this Choreo. ((optional, string) If supplied, the response will use the JSONP format with a callback of the given name.)
        */
        this.set_Callback = function(value) {
            this.setInput("Callback", value);
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
        Set the value of the ContainedWithin input for this Choreo. ((optional, string) This is the place_id which you would like to restrict the search results to. This id can be retrieved with the GetPlaceInformation Choreo.)
        */
        this.set_ContainedWithin = function(value) {
            this.setInput("ContainedWithin", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude to search around.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude to search around.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the place.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SimilarPlaces Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SimilarPlacesResultSet = function(resultStream) {
    SimilarPlacesResultSet.super_.call(this, resultStream);    
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

util.inherits(SimilarPlaces, choreography.Choreography);
util.inherits(SimilarPlacesInputSet, choreography.InputSet);
util.inherits(SimilarPlacesResultSet, choreography.ResultSet);
exports.SimilarPlaces = SimilarPlaces;

