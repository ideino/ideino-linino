
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListGuideCategoriesByID
    Returns a list of categories that match the IDs provided.
*/


var ListGuideCategoriesByID = function(session) {
    /*
        Create a new instance of the ListGuideCategoriesByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/GuideCategories/ListGuideCategoriesByID"
    ListGuideCategoriesByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGuideCategoriesByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGuideCategoriesByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGuideCategoriesByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGuideCategoriesByIDInputSet = function() {
    ListGuideCategoriesByIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Google for simple API access when you do not need to access user data.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the GuideCategoryID input for this Choreo. ((conditional, string) A comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved.)
        */
        this.set_GuideCategoryID = function(value) {
            this.setInput("GuideCategoryID", value);
        }

        /*
        Set the value of the H1 input for this Choreo. ((optional, string) The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.)
        */
        this.set_H1 = function(value) {
            this.setInput("H1", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of one or more guideCategory resource properties that the API response will include. Valid values are: id and snippet.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGuideCategoriesByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGuideCategoriesByIDResultSet = function(resultStream) {
    ListGuideCategoriesByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(ListGuideCategoriesByID, choreography.Choreography);
util.inherits(ListGuideCategoriesByIDInputSet, choreography.InputSet);
util.inherits(ListGuideCategoriesByIDResultSet, choreography.ResultSet);
exports.ListGuideCategoriesByID = ListGuideCategoriesByID;


/*
    ListGuideCategoriesByRegion
    Returns a list of guide categories available in the specified country.
*/


var ListGuideCategoriesByRegion = function(session) {
    /*
        Create a new instance of the ListGuideCategoriesByRegion Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/GuideCategories/ListGuideCategoriesByRegion"
    ListGuideCategoriesByRegion.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGuideCategoriesByRegionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGuideCategoriesByRegionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGuideCategoriesByRegion
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGuideCategoriesByRegionInputSet = function() {
    ListGuideCategoriesByRegionInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Google for simple API access when you do not need to access user data.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the H1 input for this Choreo. ((optional, string) The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.)
        */
        this.set_H1 = function(value) {
            this.setInput("H1", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) A comma-separated list of one or more guideCategory resource properties that the API response will include. Valid values are: id and snippet.)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the RegionCode input for this Choreo. ((optional, string) Indicates to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. Defaults to US.)
        */
        this.set_RegionCode = function(value) {
            this.setInput("RegionCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGuideCategoriesByRegion Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGuideCategoriesByRegionResultSet = function(resultStream) {
    ListGuideCategoriesByRegionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGuideCategoriesByRegion, choreography.Choreography);
util.inherits(ListGuideCategoriesByRegionInputSet, choreography.InputSet);
util.inherits(ListGuideCategoriesByRegionResultSet, choreography.ResultSet);
exports.ListGuideCategoriesByRegion = ListGuideCategoriesByRegion;

