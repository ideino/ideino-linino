
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetNewsItem
    Queries the Newswire API for a specific news item.
*/


var GetNewsItem = function(session) {
    /*
        Create a new instance of the GetNewsItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/TimesNewswire/GetNewsItem"
    GetNewsItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewsItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewsItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewsItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewsItemInputSet = function() {
    GetNewsItemInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The complete URL of a specific news item. This URL is returned in the output of the GetRecentNews Choreo.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNewsItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewsItemResultSet = function(resultStream) {
    GetNewsItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewsItem, choreography.Choreography);
util.inherits(GetNewsItemInputSet, choreography.InputSet);
util.inherits(GetNewsItemResultSet, choreography.ResultSet);
exports.GetNewsItem = GetNewsItem;


/*
    GetRecentNewsItems
    Retrieves recent news items.
*/


var GetRecentNewsItems = function(session) {
    /*
        Create a new instance of the GetRecentNewsItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/TimesNewswire/GetRecentNewsItems"
    GetRecentNewsItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentNewsItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentNewsItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentNewsItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentNewsItemsInputSet = function() {
    GetRecentNewsItemsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. This can be used in combination with the Limit input to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Section input for this Choreo. ((optional, string) Limits the set of items by one or more sections. Separate sections by semicolons. Defaults to "all" to get all sections. See Choreo documentation for more options for this input.)
        */
        this.set_Section = function(value) {
            this.setInput("Section", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((optional, string) Limits the set of items by originating source. Set to "nyt" for New York Times items only and "iht" for International Herald Tribune items. Set to "all" for both (the default).)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the TimePeriod input for this Choreo. ((optional, integer) Limits the set of items by time published. Valid range is number of hours, 1–720 (in hours). Defaults to 24.)
        */
        this.set_TimePeriod = function(value) {
            this.setInput("TimePeriod", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentNewsItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentNewsItemsResultSet = function(resultStream) {
    GetRecentNewsItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentNewsItems, choreography.Choreography);
util.inherits(GetRecentNewsItemsInputSet, choreography.InputSet);
util.inherits(GetRecentNewsItemsResultSet, choreography.ResultSet);
exports.GetRecentNewsItems = GetRecentNewsItems;

