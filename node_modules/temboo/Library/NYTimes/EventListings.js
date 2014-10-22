
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchListings
    Searches events by location, filters, or full text search.
*/


var SearchListings = function(session) {
    /*
        Create a new instance of the SearchListings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/EventListings/SearchListings"
    SearchListings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchListingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchListingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchListings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchListingsInputSet = function() {
    SearchListingsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((optional, date) Start date to end date in the following format: YYYY-MM-DD:YYYY-MM-DD.)
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the Filters input for this Choreo. ((optional, string) Filters search results using facet names and values. See Choreo documentation for examples.)
        */
        this.set_Filters = function(value) {
            this.setInput("Filters", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) The latitude coordinate of the location to use in the event search. If specified, Longitude must also be provided.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) The longitude coordinate of the location to use in the event search. If specified, Latitude must also be provided.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. This can be used in combination with the Limit input to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) Search keywords to perform a text search on the following fields: web_description, event_name and venue_name.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((optional, integer) The radius of the spacial search (in meters). Defaults to 1000.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Allows you to sort results. Appending "+asc" or "+desc" to a facet will sort results on that value in ascending or descending order (i.e. dist+asc).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchListings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchListingsResultSet = function(resultStream) {
    SearchListingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API. Format corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchListings, choreography.Choreography);
util.inherits(SearchListingsInputSet, choreography.InputSet);
util.inherits(SearchListingsResultSet, choreography.ResultSet);
exports.SearchListings = SearchListings;


/*
    SearchWithinBoundedBox
    Allows you to do a spatial search for events within a box bounded by specified northeast and southwest points.
*/


var SearchWithinBoundedBox = function(session) {
    /*
        Create a new instance of the SearchWithinBoundedBox Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/EventListings/SearchWithinBoundedBox"
    SearchWithinBoundedBox.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchWithinBoundedBoxResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchWithinBoundedBoxInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchWithinBoundedBox
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchWithinBoundedBoxInputSet = function() {
    SearchWithinBoundedBoxInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((optional, date) Start date to end date in the following format: YYYY-MM-DD:YYYY-MM-DD.)
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the Filters input for this Choreo. ((optional, string) Filters search results using facet names and values. See Choreo documentation for examples.)
        */
        this.set_Filters = function(value) {
            this.setInput("Filters", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the NortheastLatitude input for this Choreo. ((conditional, decimal) The northeastern latitude of the bounding box to search. When searching within a bounded box, all four coordinates are required.)
        */
        this.set_NortheastLatitude = function(value) {
            this.setInput("NortheastLatitude", value);
        }

        /*
        Set the value of the NortheastLongitude input for this Choreo. ((conditional, decimal) The northeastern longitude of the bounding box to search. When searching within a bounded box, all four coordinates are required.)
        */
        this.set_NortheastLongitude = function(value) {
            this.setInput("NortheastLongitude", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) A numeric value indicating the starting point of the result set. This can be used in combination with the Limit input to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) Search keywords to perform a text search on the following fields: web_description, event_name and venue_name.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((optional, integer) The radius of the spacial search (in meters). Defaults to 1000.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to json, xml, or sphp. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Allows you to sort results. Appending "+asc" or "+desc" to a facet will sort results on that value in ascending or descending order (i.e. dist+asc).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the SouthwestLatitude input for this Choreo. ((conditional, decimal) The southwest latitude of the bounding box to search. When searching within a bounded box, all four coordinates are required.)
        */
        this.set_SouthwestLatitude = function(value) {
            this.setInput("SouthwestLatitude", value);
        }

        /*
        Set the value of the SouthwestLongitude input for this Choreo. ((conditional, decimal) The southwest longitude of the bounding box to search. When searching within a bounded box, all four coordinates are required.)
        */
        this.set_SouthwestLongitude = function(value) {
            this.setInput("SouthwestLongitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchWithinBoundedBox Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchWithinBoundedBoxResultSet = function(resultStream) {
    SearchWithinBoundedBoxResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API. Valid values are: json (the default) and xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchWithinBoundedBox, choreography.Choreography);
util.inherits(SearchWithinBoundedBoxInputSet, choreography.InputSet);
util.inherits(SearchWithinBoundedBoxResultSet, choreography.ResultSet);
exports.SearchWithinBoundedBox = SearchWithinBoundedBox;

