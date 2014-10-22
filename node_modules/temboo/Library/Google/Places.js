
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeletePlace
    Delete a new Place from Google Places.
*/


var DeletePlace = function(session) {
    /*
        Create a new instance of the DeletePlace Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Places/DeletePlace"
    DeletePlace.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePlaceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePlaceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePlace
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePlaceInputSet = function() {
    DeletePlaceInputSet.super_.call(this);
        /*
        Set the value of the Key input for this Choreo. ((required, string) Enter your Google API key.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the PlaceReference input for this Choreo. ((required, string) The unique place reference. This is returned in the PlaceSearch Choreo.)
        */
        this.set_PlaceReference = function(value) {
            this.setInput("PlaceReference", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePlace Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePlaceResultSet = function(resultStream) {
    DeletePlaceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePlace, choreography.Choreography);
util.inherits(DeletePlaceInputSet, choreography.InputSet);
util.inherits(DeletePlaceResultSet, choreography.ResultSet);
exports.DeletePlace = DeletePlace;


/*
    PlaceCheckInRequests
    Specify whether a user has checked into a place.
*/


var PlaceCheckInRequests = function(session) {
    /*
        Create a new instance of the PlaceCheckInRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Places/PlaceCheckInRequests"
    PlaceCheckInRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PlaceCheckInRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PlaceCheckInRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PlaceCheckInRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PlaceCheckInRequestsInputSet = function() {
    PlaceCheckInRequestsInputSet.super_.call(this);
        /*
        Set the value of the Key input for this Choreo. ((required, string) Enter your Google API key.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the PlaceReference input for this Choreo. ((required, string) The unique place reference. This is returned in the PlaceSearch Choreo.)
        */
        this.set_PlaceReference = function(value) {
            this.setInput("PlaceReference", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PlaceCheckInRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PlaceCheckInRequestsResultSet = function(resultStream) {
    PlaceCheckInRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PlaceCheckInRequests, choreography.Choreography);
util.inherits(PlaceCheckInRequestsInputSet, choreography.InputSet);
util.inherits(PlaceCheckInRequestsResultSet, choreography.ResultSet);
exports.PlaceCheckInRequests = PlaceCheckInRequests;


/*
    PlaceDetails
    Retrieve detailed information about places retrieved by the PlaceSearch Choreo.
*/


var PlaceDetails = function(session) {
    /*
        Create a new instance of the PlaceDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Places/PlaceDetails"
    PlaceDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PlaceDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PlaceDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PlaceDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PlaceDetailsInputSet = function() {
    PlaceDetailsInputSet.super_.call(this);
        /*
        Set the value of the Key input for this Choreo. ((required, string) Enter your Google API key.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Set the language in which to return restults.  A list of supported languages is available here: https://spreadsheets.google.com/pub?key=p9pdwsai2hDMsLkXsoM05KQ&gid=1)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Reference input for this Choreo. ((required, string) Enter a textual identifier that uniquely identidies a place obtained from the PlaceSearch Choreo.)
        */
        this.set_Reference = function(value) {
            this.setInput("Reference", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PlaceDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PlaceDetailsResultSet = function(resultStream) {
    PlaceDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PlaceDetails, choreography.Choreography);
util.inherits(PlaceDetailsInputSet, choreography.InputSet);
util.inherits(PlaceDetailsResultSet, choreography.ResultSet);
exports.PlaceDetails = PlaceDetails;


/*
    PlaceSearch
    Search for places based on latitude/longitude coordinates, keywords, and distance.
*/


var PlaceSearch = function(session) {
    /*
        Create a new instance of the PlaceSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Places/PlaceSearch"
    PlaceSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PlaceSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PlaceSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PlaceSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PlaceSearchInputSet = function() {
    PlaceSearchInputSet.super_.call(this);
        /*
        Set the value of the Key input for this Choreo. ((required, string) Enter your Google API key.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the Keyword input for this Choreo. ((optional, string) Enter a keyword (term, address, type, customer review, etc.) to be matched against all results retrieved for this Place.)
        */
        this.set_Keyword = function(value) {
            this.setInput("Keyword", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Set the language in which to return restults.  A list of supported languages is available here: https://spreadsheets.google.com/pub?key=p9pdwsai2hDMsLkXsoM05KQ&gid=1)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, string) Specify a latitude point around which Places results will be retrieved.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, string) Specify a longitude point around which Places results will be retrieved.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) Enter a name to be matched when results are retrieved for this specified Place.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((optional, integer) Specify the radius in meters, for which Places results will be returned. Maximum radius is limited to 50,000 meters. If rankby=distance, then radius must not be specified.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the RankBy input for this Choreo. ((optional, string) Specify how results are listed. Values include: prominence (default); distance - sorts results by distance from specified location. Radius must not be used, and Keyword, Name, or Types are required).)
        */
        this.set_RankBy = function(value) {
            this.setInput("RankBy", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

        /*
        Set the value of the Types input for this Choreo. ((optional, string) Filter results by types, such as: bar, dentist.  Multiple types must be separated by the pipe ("|") symbol: bar|dentist||airport.)
        */
        this.set_Types = function(value) {
            this.setInput("Types", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PlaceSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PlaceSearchResultSet = function(resultStream) {
    PlaceSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PlaceSearch, choreography.Choreography);
util.inherits(PlaceSearchInputSet, choreography.InputSet);
util.inherits(PlaceSearchResultSet, choreography.ResultSet);
exports.PlaceSearch = PlaceSearch;


/*
    UserPlaceReports
    Add a new Place to Google Places.
*/


var UserPlaceReports = function(session) {
    /*
        Create a new instance of the UserPlaceReports Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Places/UserPlaceReports"
    UserPlaceReports.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserPlaceReportsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserPlaceReportsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserPlaceReports
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserPlaceReportsInputSet = function() {
    UserPlaceReportsInputSet.super_.call(this);
        /*
        Set the value of the POSTForm input for this Choreo. ((required, any) Enter the required POST parameter, reference in the body of this JSON form.)
        */
        this.set_POSTForm = function(value) {
            this.setInput("POSTForm", value);
        }

        /*
        Set the value of the Key input for this Choreo. ((required, string) Enter your Google API key.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sensor input for this Choreo. ((optional, boolean) Indicates whether or not the directions request is from a device with a location sensor. Value must be either 1 or 0. Defaults to 0 (false).)
        */
        this.set_Sensor = function(value) {
            this.setInput("Sensor", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserPlaceReports Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserPlaceReportsResultSet = function(resultStream) {
    UserPlaceReportsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UserPlaceReports, choreography.Choreography);
util.inherits(UserPlaceReportsInputSet, choreography.InputSet);
util.inherits(UserPlaceReportsResultSet, choreography.ResultSet);
exports.UserPlaceReports = UserPlaceReports;

