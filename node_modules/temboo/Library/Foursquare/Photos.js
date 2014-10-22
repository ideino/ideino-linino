
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddPhoto
    Allows a user to add a new photo to a check-in, tip, or a venue.
*/


var AddPhoto = function(session) {
    /*
        Create a new instance of the AddPhoto Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Photos/AddPhoto"
    AddPhoto.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddPhotoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddPhotoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddPhoto
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddPhotoInputSet = function() {
    AddPhotoInputSet.super_.call(this);
        /*
        Set the value of the AltitudeAccuracy input for this Choreo. ((optional, integer) Vertical accuracy of the user's location, in meters.)
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
        Set the value of the Broadcast input for this Choreo. ((optional, string) Whether to broadcast this photo. Set to "twitter" if you want to send to twitter, "facebook "if you want to send to facebook, or "twitter,facebook" if you want to send to both.)
        */
        this.set_Broadcast = function(value) {
            this.setInput("Broadcast", value);
        }

        /*
        Set the value of the CheckinID input for this Choreo. ((conditional, any) The ID of the checkin to attach a photo to. One of the id fields (CheckinID, TipID, or VenueID) must be specified.)
        */
        this.set_CheckinID = function(value) {
            this.setInput("CheckinID", value);
        }

        /*
        Set the value of the ImageFile input for this Choreo. ((conditional, string) The base64 encoded image contents. Required unless using the VaultFile alias (an advanced option used when running Choreos in the Temboo Designer).)
        */
        this.set_ImageFile = function(value) {
            this.setInput("ImageFile", value);
        }

        /*
        Set the value of the LLAccuracy input for this Choreo. ((optional, integer) Accuracy of the user's latitude and longitude, in meters.)
        */
        this.set_LLAccuracy = function(value) {
            this.setInput("LLAccuracy", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) Laitude of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) Longitude of the user's location.)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TipID input for this Choreo. ((conditional, string) The ID of the tip to attach a photo to. One of the id fields (CheckinID, TipID, or VenueID) must be specified.)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((conditional, string) The ID of the venue to attach a photo to. One of the id fields (CheckinID, TipID, or VenueID) must be specified.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to an image in the vault. Required unless specifying the ImageFile input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddPhoto Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddPhotoResultSet = function(resultStream) {
    AddPhotoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddPhoto, choreography.Choreography);
util.inherits(AddPhotoInputSet, choreography.InputSet);
util.inherits(AddPhotoResultSet, choreography.ResultSet);
exports.AddPhoto = AddPhoto;


/*
    PhotoDetails
    Retrieves details of a photo. 
*/


var PhotoDetails = function(session) {
    /*
        Create a new instance of the PhotoDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Photos/PhotoDetails"
    PhotoDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PhotoDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PhotoDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PhotoDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PhotoDetailsInputSet = function() {
    PhotoDetailsInputSet.super_.call(this);
        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, string) The ID of the photo to get details for.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PhotoDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PhotoDetailsResultSet = function(resultStream) {
    PhotoDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PhotoDetails, choreography.Choreography);
util.inherits(PhotoDetailsInputSet, choreography.InputSet);
util.inherits(PhotoDetailsResultSet, choreography.ResultSet);
exports.PhotoDetails = PhotoDetails;

