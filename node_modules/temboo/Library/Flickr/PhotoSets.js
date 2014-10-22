
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListPhotos
    Retrieves the list of photos in a set.
*/


var ListPhotos = function(session) {
    /*
        Create a new instance of the ListPhotos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/PhotoSets/ListPhotos"
    ListPhotos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPhotosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPhotosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPhotos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPhotosInputSet = function() {
    ListPhotosInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).  Required when accessing a protected resource.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((optional, string) The Access Token Secret retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to fetch for each returned record.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the Media input for this Choreo. ((optional, string) Filter results by media type. Possible values are all (default), photos or videos)
        */
        this.set_Media = function(value) {
            this.setInput("Media", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to return. If this argument is omitted, it defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of photos to return per page. Defaults to 500. The maximum allowed value is 500.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the PhotoSetID input for this Choreo. ((required, integer) The ID of the photo set.)
        */
        this.set_PhotoSetID = function(value) {
            this.setInput("PhotoSetID", value);
        }

        /*
        Set the value of the PrivacyFilter input for this Choreo. ((optional, integer) Valid values are: 1 (public photos), 2 (private photos visible to friends), 3 (private photos visible to family), 4 (private photos visible to friends and family), 5 (completely private photos).)
        */
        this.set_PrivacyFilter = function(value) {
            this.setInput("PrivacyFilter", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPhotos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPhotosResultSet = function(resultStream) {
    ListPhotosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPhotos, choreography.Choreography);
util.inherits(ListPhotosInputSet, choreography.InputSet);
util.inherits(ListPhotosResultSet, choreography.ResultSet);
exports.ListPhotos = ListPhotos;


/*
    ListSets
    Returns the photosets belonging to the specified user.
*/


var ListSets = function(session) {
    /*
        Create a new instance of the ListSets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/PhotoSets/ListSets"
    ListSets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSetsInputSet = function() {
    ListSetsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((conditional, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret). Required when accessing a protected resource or when UserID is not provided.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((conditional, string) The Access Token Secret retrieved during the OAuth process. Required when accessing a protected resource or when UserID is not provided.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource or when UserID is not provided.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to get. Currently, if this is not provided, all sets are returned, but this behaviour may change in future.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of sets to get per page. If paging is enabled, the maximum number of sets per page is 500.)
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

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The NSID of the user to get a photoset list for. When OAuth parameters are passed, the authenticated user is assumed.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSetsResultSet = function(resultStream) {
    ListSetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSets, choreography.Choreography);
util.inherits(ListSetsInputSet, choreography.InputSet);
util.inherits(ListSetsResultSet, choreography.ResultSet);
exports.ListSets = ListSets;

