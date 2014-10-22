
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCensusIDByCoordinates
    Retrieve the U.S. census block geography ID for a specified latitude and longitude. 
*/


var GetCensusIDByCoordinates = function(session) {
    /*
        Create a new instance of the GetCensusIDByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DataGov/GetCensusIDByCoordinates"
    GetCensusIDByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCensusIDByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCensusIDByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCensusIDByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCensusIDByCoordinatesInputSet = function() {
    GetCensusIDByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the GeographyType input for this Choreo. ((required, string) Specify one of the following geography type values: "state", "county", "tract", "block", "congdistrict", "statehouse", "statesenate", "censusplace", or "msa" (metropolitan statistical area).)
        */
        this.set_GeographyType = function(value) {
            this.setInput("GeographyType", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Specify a latitude to search for, such as "41.486857".)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Specify a longitude to search for, such as "-71.294392".)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCensusIDByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCensusIDByCoordinatesResultSet = function(resultStream) {
    GetCensusIDByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CensusID" output from this Choreo execution. ((integer) The ID retrieved from the API call.)
        */
        this.get_CensusID = function() {
            return this.getResult("CensusID");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response returned from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCensusIDByCoordinates, choreography.Choreography);
util.inherits(GetCensusIDByCoordinatesInputSet, choreography.InputSet);
util.inherits(GetCensusIDByCoordinatesResultSet, choreography.ResultSet);
exports.GetCensusIDByCoordinates = GetCensusIDByCoordinates;


/*
    GetCensusIDByTypeAndName
    Retrieve the U.S. census ID for a specified geography type and name.
*/


var GetCensusIDByTypeAndName = function(session) {
    /*
        Create a new instance of the GetCensusIDByTypeAndName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DataGov/GetCensusIDByTypeAndName"
    GetCensusIDByTypeAndName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCensusIDByTypeAndNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCensusIDByTypeAndNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCensusIDByTypeAndName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCensusIDByTypeAndNameInputSet = function() {
    GetCensusIDByTypeAndNameInputSet.super_.call(this);
        /*
        Set the value of the GeographyName input for this Choreo. ((required, string) Specify the geography name for the correspnding type, with at least three leading characters. For example, for the geography type "state" you could enter "ore" for Oregon.)
        */
        this.set_GeographyName = function(value) {
            this.setInput("GeographyName", value);
        }

        /*
        Set the value of the GeographyType input for this Choreo. ((required, string) Specify one of the following geography type values: "state", "county", "tract", "block", "congdistrict", "statehouse", "statesenate", "censusplace", or "msa" (metropolitan statistical area).)
        */
        this.set_GeographyType = function(value) {
            this.setInput("GeographyType", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((required, integer) Specify the maximum number of results to return. Defaults to 50.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCensusIDByTypeAndName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCensusIDByTypeAndNameResultSet = function(resultStream) {
    GetCensusIDByTypeAndNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response returned from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "CensusID" output from this Choreo execution. ((integer) The ID retrieved from the API call.)
        */
        this.get_CensusID = function() {
            return this.getResult("CensusID");
        }
}

util.inherits(GetCensusIDByTypeAndName, choreography.Choreography);
util.inherits(GetCensusIDByTypeAndNameInputSet, choreography.InputSet);
util.inherits(GetCensusIDByTypeAndNameResultSet, choreography.ResultSet);
exports.GetCensusIDByTypeAndName = GetCensusIDByTypeAndName;


/*
    GetDemographicsByCoordinates
    Retrieve demographic information for specified geographical coordinates.
*/


var GetDemographicsByCoordinates = function(session) {
    /*
        Create a new instance of the GetDemographicsByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DataGov/GetDemographicsByCoordinates"
    GetDemographicsByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDemographicsByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDemographicsByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDemographicsByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDemographicsByCoordinatesInputSet = function() {
    GetDemographicsByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the DataVersion input for this Choreo. ((optional, string) Specify the data version to search. Valid values are 2011 or 2012 (the default).)
        */
        this.set_DataVersion = function(value) {
            this.setInput("DataVersion", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Specify a latitude to search for, such as "41.486857".)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Specify a longitude to search for, such as "-71.294392".)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDemographicsByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDemographicsByCoordinatesResultSet = function(resultStream) {
    GetDemographicsByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response returned from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDemographicsByCoordinates, choreography.Choreography);
util.inherits(GetDemographicsByCoordinatesInputSet, choreography.InputSet);
util.inherits(GetDemographicsByCoordinatesResultSet, choreography.ResultSet);
exports.GetDemographicsByCoordinates = GetDemographicsByCoordinates;


/*
    GetDemographicsByTypeAndID
    Retrieve demographic data for a specified geography type and geography ID.
*/


var GetDemographicsByTypeAndID = function(session) {
    /*
        Create a new instance of the GetDemographicsByTypeAndID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DataGov/GetDemographicsByTypeAndID"
    GetDemographicsByTypeAndID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDemographicsByTypeAndIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDemographicsByTypeAndIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDemographicsByTypeAndID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDemographicsByTypeAndIDInputSet = function() {
    GetDemographicsByTypeAndIDInputSet.super_.call(this);
        /*
        Set the value of the DataVersion input for this Choreo. ((optional, string) Specify the census data version to search. Valid values are: jun2011, dec2011, jun2012, and dec2012.)
        */
        this.set_DataVersion = function(value) {
            this.setInput("DataVersion", value);
        }

        /*
        Set the value of the GeographyIDs input for this Choreo. ((conditional, integer) The geography IDs to search for. Separate multiple IDs by commas; a maximum of 10 IDs are allowed.)
        */
        this.set_GeographyIDs = function(value) {
            this.setInput("GeographyIDs", value);
        }

        /*
        Set the value of the GeographyType input for this Choreo. ((required, string) Specify one of the following geography type values: "state", "county", "tract", "block", "congdistrict", "statehouse", "statesenate", "censusplace", or "msa" (metropolitan statistical area).)
        */
        this.set_GeographyType = function(value) {
            this.setInput("GeographyType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDemographicsByTypeAndID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDemographicsByTypeAndIDResultSet = function(resultStream) {
    GetDemographicsByTypeAndIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response returned from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDemographicsByTypeAndID, choreography.Choreography);
util.inherits(GetDemographicsByTypeAndIDInputSet, choreography.InputSet);
util.inherits(GetDemographicsByTypeAndIDResultSet, choreography.ResultSet);
exports.GetDemographicsByTypeAndID = GetDemographicsByTypeAndID;


/*
    GetDemographicsForNation
    Retrieve demographic information for the entire nation.
*/


var GetDemographicsForNation = function(session) {
    /*
        Create a new instance of the GetDemographicsForNation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DataGov/GetDemographicsForNation"
    GetDemographicsForNation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDemographicsForNationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDemographicsForNationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDemographicsForNation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDemographicsForNationInputSet = function() {
    GetDemographicsForNationInputSet.super_.call(this);
        /*
        Set the value of the DataVersion input for this Choreo. ((optional, string) Specify the census data version to search. Valid values are: jun2011, dec2011, jun2012, and dec2012.)
        */
        this.set_DataVersion = function(value) {
            this.setInput("DataVersion", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDemographicsForNation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDemographicsForNationResultSet = function(resultStream) {
    GetDemographicsForNationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response returned from the API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDemographicsForNation, choreography.Choreography);
util.inherits(GetDemographicsForNationInputSet, choreography.InputSet);
util.inherits(GetDemographicsForNationResultSet, choreography.ResultSet);
exports.GetDemographicsForNation = GetDemographicsForNation;

