
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FindByCoordinates
    Returns a place ID for a given latitude, longitude and accuracy.
*/


var FindByCoordinates = function(session) {
    /*
        Create a new instance of the FindByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Places/FindByCoordinates"
    FindByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByCoordinatesInputSet = function() {
    FindByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Accuracy input for this Choreo. ((optional, integer) Recorded accuracy level of the location information. Valid range is 1-16. The default is 16.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude whose valid range is -90 to 90. Anything more than 4 decimal places will be truncated.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude whose valid range is -180 to 180. Anything more than 4 decimal places will be truncated.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) )
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByCoordinatesResultSet = function(resultStream) {
    FindByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByCoordinates, choreography.Choreography);
util.inherits(FindByCoordinatesInputSet, choreography.InputSet);
util.inherits(FindByCoordinatesResultSet, choreography.ResultSet);
exports.FindByCoordinates = FindByCoordinates;


/*
    FindByKeyword
    Returns a list of place IDs for a query string.
*/


var FindByKeyword = function(session) {
    /*
        Create a new instance of the FindByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Places/FindByKeyword"
    FindByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByKeywordInputSet = function() {
    FindByKeywordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The query string to use for place ID lookups.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByKeywordResultSet = function(resultStream) {
    FindByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByKeyword, choreography.Choreography);
util.inherits(FindByKeywordInputSet, choreography.InputSet);
util.inherits(FindByKeywordResultSet, choreography.ResultSet);
exports.FindByKeyword = FindByKeyword;


/*
    FindByURL
    Obtain geo-location information for a place using its flickr.com/places URL.
*/


var FindByURL = function(session) {
    /*
        Create a new instance of the FindByURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Places/FindByURL"
    FindByURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByURLInputSet = function() {
    FindByURLInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) Enter a flickr.com/places URL in the following form: /country/region/city. For example: /USA/NewYork/Rochester.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByURLResultSet = function(resultStream) {
    FindByURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByURL, choreography.Choreography);
util.inherits(FindByURLInputSet, choreography.InputSet);
util.inherits(FindByURLResultSet, choreography.ResultSet);
exports.FindByURL = FindByURL;

