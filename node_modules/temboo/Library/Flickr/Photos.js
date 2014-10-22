
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddTags
    Add a tag to a specified photo on Flickr.
*/


var AddTags = function(session) {
    /*
        Create a new instance of the AddTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/AddTags"
    AddTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddTagsInputSet = function() {
    AddTagsInputSet.super_.call(this);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to add tags to.)
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

        /*
        Set the value of the Tags input for this Choreo. ((required, string) The tags to add to the photo. Multiple tags can be separated by spaces.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddTagsResultSet = function(resultStream) {
    AddTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddTags, choreography.Choreography);
util.inherits(AddTagsInputSet, choreography.InputSet);
util.inherits(AddTagsResultSet, choreography.ResultSet);
exports.AddTags = AddTags;


/*
    Delete
    Delete a photo from Flickr.
*/


var Delete = function(session) {
    /*
        Create a new instance of the Delete Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/Delete"
    Delete.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Delete
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInputSet = function() {
    DeleteInputSet.super_.call(this);
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
        Set the value of the AccessToken input for this Choreo. ((optional, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo that you want to delete.)
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
A ResultSet with methods tailored to the values returned by the Delete Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteResultSet = function(resultStream) {
    DeleteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Delete, choreography.Choreography);
util.inherits(DeleteInputSet, choreography.InputSet);
util.inherits(DeleteResultSet, choreography.ResultSet);
exports.Delete = Delete;


/*
    Download
    Retrieves a photo from a constructed source URL and returns the file content as Base64 encoded data.
*/


var Download = function(session) {
    /*
        Create a new instance of the Download Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/Download"
    Download.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Download
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadInputSet = function() {
    DownloadInputSet.super_.call(this);
        /*
        Set the value of the FarmID input for this Choreo. ((conditional, integer) The farm id associated with the photo. Required unless providing the URL.)
        */
        this.set_FarmID = function(value) {
            this.setInput("FarmID", value);
        }

        /*
        Set the value of the ImageType input for this Choreo. ((optional, string) The image type. Valid values are: jpg, png, or gif. Defaults to "jpg".)
        */
        this.set_ImageType = function(value) {
            this.setInput("ImageType", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((conditional, integer) The id of the photo you to download.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the Secret input for this Choreo. ((conditional, string) The secret associated with the photo. Required unless providing the URL.)
        */
        this.set_Secret = function(value) {
            this.setInput("Secret", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((conditional, integer) The server id associated with the photo. Required unless providing the URL.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((conditional, string) The url to download the photo from. Required unless providing the Secret, ServerID, and FarmID parameters.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Download Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadResultSet = function(resultStream) {
    DownloadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The Base64 encoded image content.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Download, choreography.Choreography);
util.inherits(DownloadInputSet, choreography.InputSet);
util.inherits(DownloadResultSet, choreography.ResultSet);
exports.Download = Download;


/*
    ListGeoTaggedPhotos
    Returns a list of your geo-tagged photos.
*/


var ListGeoTaggedPhotos = function(session) {
    /*
        Create a new instance of the ListGeoTaggedPhotos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/ListGeoTaggedPhotos"
    ListGeoTaggedPhotos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGeoTaggedPhotosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGeoTaggedPhotosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGeoTaggedPhotos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGeoTaggedPhotosInputSet = function() {
    ListGeoTaggedPhotosInputSet.super_.call(this);
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
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to retrieve for each returned record. See Choreo documentation for accepted values.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the MaxTakenDate input for this Choreo. ((optional, date) Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.)
        */
        this.set_MaxTakenDate = function(value) {
            this.setInput("MaxTakenDate", value);
        }

        /*
        Set the value of the MaxUploadDate input for this Choreo. ((optional, date) Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.)
        */
        this.set_MaxUploadDate = function(value) {
            this.setInput("MaxUploadDate", value);
        }

        /*
        Set the value of the Media input for this Choreo. ((optional, string) Filter results by media type. Possible values are all (default), photos or videos.)
        */
        this.set_Media = function(value) {
            this.setInput("Media", value);
        }

        /*
        Set the value of the MinTakenDate input for this Choreo. ((optional, date) Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime.)
        */
        this.set_MinTakenDate = function(value) {
            this.setInput("MinTakenDate", value);
        }

        /*
        Set the value of the MinUploadDate input for this Choreo. ((optional, date) Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.)
        */
        this.set_MinUploadDate = function(value) {
            this.setInput("MinUploadDate", value);
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

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The sort order. Accepted values are: date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, and interestingness-asc.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGeoTaggedPhotos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGeoTaggedPhotosResultSet = function(resultStream) {
    ListGeoTaggedPhotosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGeoTaggedPhotos, choreography.Choreography);
util.inherits(ListGeoTaggedPhotosInputSet, choreography.InputSet);
util.inherits(ListGeoTaggedPhotosResultSet, choreography.ResultSet);
exports.ListGeoTaggedPhotos = ListGeoTaggedPhotos;


/*
    ListPeople
    Retrieve a list of people in a given photo.
*/


var ListPeople = function(session) {
    /*
        Create a new instance of the ListPeople Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/ListPeople"
    ListPeople.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPeopleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPeopleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPeople
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPeopleInputSet = function() {
    ListPeopleInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, string) Enter the ID of a photo for which people will be listed.)
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
A ResultSet with methods tailored to the values returned by the ListPeople Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPeopleResultSet = function(resultStream) {
    ListPeopleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPeople, choreography.Choreography);
util.inherits(ListPeopleInputSet, choreography.InputSet);
util.inherits(ListPeopleResultSet, choreography.ResultSet);
exports.ListPeople = ListPeople;


/*
    ListPhotosWithoutGeoTags
    Returns a list of your photos which haven't been geo-tagged.
*/


var ListPhotosWithoutGeoTags = function(session) {
    /*
        Create a new instance of the ListPhotosWithoutGeoTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/ListPhotosWithoutGeoTags"
    ListPhotosWithoutGeoTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPhotosWithoutGeoTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPhotosWithoutGeoTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPhotosWithoutGeoTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPhotosWithoutGeoTagsInputSet = function() {
    ListPhotosWithoutGeoTagsInputSet.super_.call(this);
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
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to retrieve for each returned record. See Choreo documentation for accepted values.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the MaxTakenDate input for this Choreo. ((optional, date) Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.)
        */
        this.set_MaxTakenDate = function(value) {
            this.setInput("MaxTakenDate", value);
        }

        /*
        Set the value of the MaxUploadDate input for this Choreo. ((optional, date) Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.)
        */
        this.set_MaxUploadDate = function(value) {
            this.setInput("MaxUploadDate", value);
        }

        /*
        Set the value of the Media input for this Choreo. ((optional, string) Filter results by media type. Possible values are all (default), photos or videos.)
        */
        this.set_Media = function(value) {
            this.setInput("Media", value);
        }

        /*
        Set the value of the MinTakenDate input for this Choreo. ((optional, date) Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime.)
        */
        this.set_MinTakenDate = function(value) {
            this.setInput("MinTakenDate", value);
        }

        /*
        Set the value of the MinUploadDate input for this Choreo. ((optional, date) Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.)
        */
        this.set_MinUploadDate = function(value) {
            this.setInput("MinUploadDate", value);
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
        Set the value of the PrivacyFilter input for this Choreo. ((optional, integer) Valid values are: 1 (public photos), 2 (private photos visible to friends), 3 (private photos visible to family), 4 (private photos visible to friends and family), 5 (completely private photos).)
        */
        this.set_PrivacyFilter = function(value) {
            this.setInput("PrivacyFilter", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) )
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The sort order. Accepted values are: date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, and interestingness-asc.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPhotosWithoutGeoTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPhotosWithoutGeoTagsResultSet = function(resultStream) {
    ListPhotosWithoutGeoTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPhotosWithoutGeoTags, choreography.Choreography);
util.inherits(ListPhotosWithoutGeoTagsInputSet, choreography.InputSet);
util.inherits(ListPhotosWithoutGeoTagsResultSet, choreography.ResultSet);
exports.ListPhotosWithoutGeoTags = ListPhotosWithoutGeoTags;


/*
    ListPublicPhotos
    Obtain a list of public photos for a given user.
*/


var ListPublicPhotos = function(session) {
    /*
        Create a new instance of the ListPublicPhotos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/ListPublicPhotos"
    ListPublicPhotos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPublicPhotosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPublicPhotosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPublicPhotos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPublicPhotosInputSet = function() {
    ListPublicPhotosInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-separated list returning additional photo information such as: license, description, date_upload, date_taken.  Additional options are listed on this method's API doc page.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specify the page of photos that is to be returned.  If unspecified, the first page is returned.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Specify how many photos to display per page. Default is set to: 100. The mamimum allowed value is: 500.)
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
        Set the value of the SafeSearch input for this Choreo. ((optional, integer) Specify a safe search setting by entering: 1 (for safe), 2 (moderate), 3 (restricted).  Default is set to: 1 (safe).)
        */
        this.set_SafeSearch = function(value) {
            this.setInput("SafeSearch", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) Enter the NSID of the user whose public photos are being retrieved.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPublicPhotos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPublicPhotosResultSet = function(resultStream) {
    ListPublicPhotosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPublicPhotos, choreography.Choreography);
util.inherits(ListPublicPhotosInputSet, choreography.InputSet);
util.inherits(ListPublicPhotosResultSet, choreography.ResultSet);
exports.ListPublicPhotos = ListPublicPhotos;


/*
    ListRecentPhotos
    Retrieve public photos that have been recently uploaded to Flickr.
*/


var ListRecentPhotos = function(session) {
    /*
        Create a new instance of the ListRecentPhotos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/ListRecentPhotos"
    ListRecentPhotos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRecentPhotosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRecentPhotosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRecentPhotos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRecentPhotosInputSet = function() {
    ListRecentPhotosInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-separated list returning additional photo information such as: license, description, date_upload, date_taken.  Additional options are listed on this method's API doc page.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specify the page of photos that is to be returned.  If unspecified, the first page is returned.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Specify how many photos to display per page. Default is set to: 100. The mamimum allowed value is: 500.)
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
A ResultSet with methods tailored to the values returned by the ListRecentPhotos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRecentPhotosResultSet = function(resultStream) {
    ListRecentPhotosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListRecentPhotos, choreography.Choreography);
util.inherits(ListRecentPhotosInputSet, choreography.InputSet);
util.inherits(ListRecentPhotosResultSet, choreography.ResultSet);
exports.ListRecentPhotos = ListRecentPhotos;


/*
    SearchPhotos
    Returns a list of photos matching a search criteria.
*/


var SearchPhotos = function(session) {
    /*
        Create a new instance of the SearchPhotos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/SearchPhotos"
    SearchPhotos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchPhotosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchPhotosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchPhotos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchPhotosInputSet = function() {
    SearchPhotosInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Accuracy input for this Choreo. ((optional, integer) The accuracy level of the location information. Current range is 1-16. World level is 1, Country is ~3, Region is ~6, City is ~11, Street is ~16.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the BoundingBox input for this Choreo. ((optional, string) A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. These values represent the coordinates of the bottom-left corner and top-right corner of the box.)
        */
        this.set_BoundingBox = function(value) {
            this.setInput("BoundingBox", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((optional, integer) The content type setting. 1 = photos only, 2 = screenshots only, 3 = other, 4 = photos and screenshots, 5 = screenshots and other, 6 = photos and other, 7 = all.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to fetch for each returned record. See documentation for more details on supported fields.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the GeoContext input for this Choreo. ((optional, integer) A numeric value representing the photo's location info beyond latitude and longitude. 0 = not defined, 1 = indoors, 2 = outdoors.)
        */
        this.set_GeoContext = function(value) {
            this.setInput("GeoContext", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((optional, string) The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
        }

        /*
        Set the value of the InGallery input for this Choreo. ((optional, boolean) Limits the search to only photos that are in a gallery. Default is false.)
        */
        this.set_InGallery = function(value) {
            this.setInput("InGallery", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) A valid latitude, in decimal format, for performing geo queries (not required if providing another limiting search parameter).)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) A valid longitude, in decimal format, for performing geo queries (not required if providing another limiting search parameter).)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MaxTakenDate input for this Choreo. ((optional, date) The maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.)
        */
        this.set_MaxTakenDate = function(value) {
            this.setInput("MaxTakenDate", value);
        }

        /*
        Set the value of the MaxUploadDate input for this Choreo. ((optional, date) The maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.)
        */
        this.set_MaxUploadDate = function(value) {
            this.setInput("MaxUploadDate", value);
        }

        /*
        Set the value of the Media input for this Choreo. ((optional, string) Filter results by media type. Valid values are all (default), photos or videos.)
        */
        this.set_Media = function(value) {
            this.setInput("Media", value);
        }

        /*
        Set the value of the MinTakenDate input for this Choreo. ((optional, date) The minimum taken date. Photos with a taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.)
        */
        this.set_MinTakenDate = function(value) {
            this.setInput("MinTakenDate", value);
        }

        /*
        Set the value of the MinUploadDate input for this Choreo. ((optional, date) The minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.)
        */
        this.set_MinUploadDate = function(value) {
            this.setInput("MinUploadDate", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of photos to return per page. Defaults to 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the PlaceID input for this Choreo. ((optional, string) A Flickr place id.)
        */
        this.set_PlaceID = function(value) {
            this.setInput("PlaceID", value);
        }

        /*
        Set the value of the RadiusUnits input for this Choreo. ((optional, string) The unit of measure when doing radial geo queries. Valid values are: "mi" (miles) and "km" (kilometers). The default is "km".)
        */
        this.set_RadiusUnits = function(value) {
            this.setInput("RadiusUnits", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((optional, integer) A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers). Defaults to 5 (km).)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Defaults to date-posted-desc unless performing a geo query. Valid values are: date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, interestingness-asc, relevance.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the TagMode input for this Choreo. ((optional, string) Use the mode 'any' to search using an OR combination of tags. Use 'all' for an AND combnation. Defaults to 'any'.)
        */
        this.set_TagMode = function(value) {
            this.setInput("TagMode", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a hyphen.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) A keyword search against photo titles, descriptions, or tags. Prepend search term with a hyphen to exclude. Not required if providing another limiting search parameter.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user who's photo to search. If this parameter isn't passed, all public photos will be searched. A value of "me" will search against the authenticated user's photos.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the WOEID input for this Choreo. ((optional, string) The unique 'Where on Earth ID' that uniquely represents spatial entities.)
        */
        this.set_WOEID = function(value) {
            this.setInput("WOEID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchPhotos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchPhotosResultSet = function(resultStream) {
    SearchPhotosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchPhotos, choreography.Choreography);
util.inherits(SearchPhotosInputSet, choreography.InputSet);
util.inherits(SearchPhotosResultSet, choreography.ResultSet);
exports.SearchPhotos = SearchPhotos;


/*
    Upload
    Uploads a photo to Flickr.
*/


var Upload = function(session) {
    /*
        Create a new instance of the Upload Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Photos/Upload"
    Upload.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Upload
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadInputSet = function() {
    UploadInputSet.super_.call(this);
        /*
        Set the value of the ImageFileContents input for this Choreo. ((conditional, string) The base-64 encoded file contents to upload. Required unless using the URL input.)
        */
        this.set_ImageFileContents = function(value) {
            this.setInput("ImageFileContents", value);
        }

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
        Set the value of the ContentType input for this Choreo. ((optional, integer) The type of content you are uploading. Set to 1 for Photo, 2 for Screenshot, or 3 for Other. Defaults to 1.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description for the photo.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Hidden input for this Choreo. ((optional, integer) Set to 1 to allow photos to appear in global search results, 2 to be hidden from public searches. Defaults to 2.)
        */
        this.set_Hidden = function(value) {
            this.setInput("Hidden", value);
        }

        /*
        Set the value of the IsFamily input for this Choreo. ((optional, boolean) Set to 0 for no, 1 for yes. Specifies who can view the photo. Defaults to 0.)
        */
        this.set_IsFamily = function(value) {
            this.setInput("IsFamily", value);
        }

        /*
        Set the value of the IsFriend input for this Choreo. ((optional, boolean) Set to 0 for no, 1 for yes. Specifies who can view the photo. Defaults to 0.)
        */
        this.set_IsFriend = function(value) {
            this.setInput("IsFriend", value);
        }

        /*
        Set the value of the IsPublic input for this Choreo. ((optional, boolean) Set to 0 for no, 1 for yes. Specifies who can view the photo. Defaults to 0.)
        */
        this.set_IsPublic = function(value) {
            this.setInput("IsPublic", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SafetyLevel input for this Choreo. ((optional, integer) Set value to 1 for Safe, 2 for Moderate, or 3 for Restricted. Defaults to 1.)
        */
        this.set_SafetyLevel = function(value) {
            this.setInput("SafetyLevel", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) A list of tags to apply to the photo. Separate multiple tags with spaces.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the photo you're uploading.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((conditional, string) A url for a photo to upload to Flickr. Required unless specifying the ImageFileContents.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A vault file path can be specified as an alternative to using ImageFileContents input. Required if ImageFileContents is not specified.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Upload Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadResultSet = function(resultStream) {
    UploadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Upload, choreography.Choreography);
util.inherits(UploadInputSet, choreography.InputSet);
util.inherits(UploadResultSet, choreography.ResultSet);
exports.Upload = Upload;

