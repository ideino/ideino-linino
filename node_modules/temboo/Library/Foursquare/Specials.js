
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchSpecials
    Returns a list of specials near the current location.
*/


var SearchSpecials = function(session) {
    /*
        Create a new instance of the SearchSpecials Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Specials/SearchSpecials"
    SearchSpecials.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchSpecialsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchSpecialsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchSpecials
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchSpecialsInputSet = function() {
    SearchSpecialsInputSet.super_.call(this);
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
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) The latitude point of the user's location.)
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
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) The longitude point of the user's location.)
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
        Set the value of the Radius input for this Choreo. ((optional, integer) Limit results to venues within this many meters of the specified location. Defaults to a city-wide area.)
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
A ResultSet with methods tailored to the values returned by the SearchSpecials Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchSpecialsResultSet = function(resultStream) {
    SearchSpecialsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchSpecials, choreography.Choreography);
util.inherits(SearchSpecialsInputSet, choreography.InputSet);
util.inherits(SearchSpecialsResultSet, choreography.ResultSet);
exports.SearchSpecials = SearchSpecials;

