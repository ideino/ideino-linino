
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetPhotoLocation
    Retrieves geo data (including latitude and longitude coordinates) for a specified photo.
*/


var GetPhotoLocation = function(session) {
    /*
        Create a new instance of the GetPhotoLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Geo/GetPhotoLocation"
    GetPhotoLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPhotoLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPhotoLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPhotoLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPhotoLocationInputSet = function() {
    GetPhotoLocationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo that you want to get the location for.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPhotoLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPhotoLocationResultSet = function(resultStream) {
    GetPhotoLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPhotoLocation, choreography.Choreography);
util.inherits(GetPhotoLocationInputSet, choreography.InputSet);
util.inherits(GetPhotoLocationResultSet, choreography.ResultSet);
exports.GetPhotoLocation = GetPhotoLocation;


/*
    ListPhotosForLocation
    Return a list of the user's photos for a specified location.
*/


var ListPhotosForLocation = function(session) {
    /*
        Create a new instance of the ListPhotosForLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Geo/ListPhotosForLocation"
    ListPhotosForLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPhotosForLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPhotosForLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPhotosForLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPhotosForLocationInputSet = function() {
    ListPhotosForLocationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the Accuracy input for this Choreo. ((optional, integer) Recorded accuracy level of the location information. Current range is 1-16. Defaults to 16 if not specified.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to retrieve for each returned record. See Choreo documentation for accepted values.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to return. Used for paging through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPhotosForLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPhotosForLocationResultSet = function(resultStream) {
    ListPhotosForLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPhotosForLocation, choreography.Choreography);
util.inherits(ListPhotosForLocationInputSet, choreography.InputSet);
util.inherits(ListPhotosForLocationResultSet, choreography.ResultSet);
exports.ListPhotosForLocation = ListPhotosForLocation;


/*
    SetPhotoLocation
    Sets the geo data (including latitude and longitude) for a specified photo.
*/


var SetPhotoLocation = function(session) {
    /*
        Create a new instance of the SetPhotoLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Geo/SetPhotoLocation"
    SetPhotoLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetPhotoLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetPhotoLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetPhotoLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetPhotoLocationInputSet = function() {
    SetPhotoLocationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the Accuracy input for this Choreo. ((optional, integer) Recorded accuracy level of the location information. Current range is 1-16. Defaults to 16 if not specified.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the Context input for this Choreo. ((optional, string) A numeric value representing the photo's location beyond latitude and longitude. For example, you can indicate that a photo was taken "indoors" or "outdoors". Set to 1 for indoors or 2 for outdoors.)
        */
        this.set_Context = function(value) {
            this.setInput("Context", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to set location data for.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetPhotoLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetPhotoLocationResultSet = function(resultStream) {
    SetPhotoLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetPhotoLocation, choreography.Choreography);
util.inherits(SetPhotoLocationInputSet, choreography.InputSet);
util.inherits(SetPhotoLocationResultSet, choreography.ResultSet);
exports.SetPhotoLocation = SetPhotoLocation;

