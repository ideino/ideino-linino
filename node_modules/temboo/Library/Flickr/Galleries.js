
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreatePhotoGallery
    Creates a new photo gallery.
*/


var CreatePhotoGallery = function(session) {
    /*
        Create a new instance of the CreatePhotoGallery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Galleries/CreatePhotoGallery"
    CreatePhotoGallery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreatePhotoGalleryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreatePhotoGalleryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreatePhotoGallery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreatePhotoGalleryInputSet = function() {
    CreatePhotoGalleryInputSet.super_.call(this);
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
        Set the value of the Description input for this Choreo. ((required, string) A short description for the gallery.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the PrimaryPhotoID input for this Choreo. ((optional, integer) The first photo to add to your gallery.)
        */
        this.set_PrimaryPhotoID = function(value) {
            this.setInput("PrimaryPhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The name of the gallery.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreatePhotoGallery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreatePhotoGalleryResultSet = function(resultStream) {
    CreatePhotoGalleryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreatePhotoGallery, choreography.Choreography);
util.inherits(CreatePhotoGalleryInputSet, choreography.InputSet);
util.inherits(CreatePhotoGalleryResultSet, choreography.ResultSet);
exports.CreatePhotoGallery = CreatePhotoGallery;


/*
    ListGalleries
    Get a gallery list for a specfied user.
*/


var ListGalleries = function(session) {
    /*
        Create a new instance of the ListGalleries Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Galleries/ListGalleries"
    ListGalleries.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGalleriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGalleriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGalleries
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGalleriesInputSet = function() {
    ListGalleriesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Enter the number of results pages to be returned.  Default is: 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Specify the number of galleries that are to be returned per page.  If null, defaults to 100 galleries returned.  Maximum is 500.)
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
        Set the value of the UserID input for this Choreo. ((required, string) Provide the NSID for the user whose gallery list(s) are to be retreived.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGalleries Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGalleriesResultSet = function(resultStream) {
    ListGalleriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGalleries, choreography.Choreography);
util.inherits(ListGalleriesInputSet, choreography.InputSet);
util.inherits(ListGalleriesResultSet, choreography.ResultSet);
exports.ListGalleries = ListGalleries;

