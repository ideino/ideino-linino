
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteDatapoint
    Deletes a single existing datapoint for a specific timestamp.
*/


var DeleteDatapoint = function(session) {
    /*
        Create a new instance of the DeleteDatapoint Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/DeleteDatapoint"
    DeleteDatapoint.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDatapointResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDatapointInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDatapoint
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDatapointInputSet = function() {
    DeleteDatapointInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID of the datastream you would like to delete the datapoint for.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, string) The ID of the feed you would like to delete the datapoint for.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((required, date) Timestamp of datapoint value to delete. Must be in ISO 8601 format, and can include up to 6 decimal places of resolution (in seconds), default zone is UTC.  Ex: 2013-05-07T00:00:00.123456Z.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDatapoint Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDatapointResultSet = function(resultStream) {
    DeleteDatapointResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponsStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful datapoint deletion, the code should be 200.)
        */
        this.get_ResponsStatusCode = function() {
            return this.getResult("ResponsStatusCode");
        }
}

util.inherits(DeleteDatapoint, choreography.Choreography);
util.inherits(DeleteDatapointInputSet, choreography.InputSet);
util.inherits(DeleteDatapointResultSet, choreography.ResultSet);
exports.DeleteDatapoint = DeleteDatapoint;


/*
    DeleteDatastream
    Deletes a datastream. 
*/


var DeleteDatastream = function(session) {
    /*
        Create a new instance of the DeleteDatastream Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/DeleteDatastream"
    DeleteDatastream.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDatastreamResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDatastreamInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDatastream
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDatastreamInputSet = function() {
    DeleteDatastreamInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID of the datastream you wish to delete.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, string) The ID of the feed you would like to delete the datastream for.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDatastream Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDatastreamResultSet = function(resultStream) {
    DeleteDatastreamResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful deletion, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteDatastream, choreography.Choreography);
util.inherits(DeleteDatastreamInputSet, choreography.InputSet);
util.inherits(DeleteDatastreamResultSet, choreography.ResultSet);
exports.DeleteDatastream = DeleteDatastream;


/*
    DeleteMultipleDatapoints
    Deletes multiple datapoints from a single datastream given a start date, end date, and/or duration.
*/


var DeleteMultipleDatapoints = function(session) {
    /*
        Create a new instance of the DeleteMultipleDatapoints Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/DeleteMultipleDatapoints"
    DeleteMultipleDatapoints.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteMultipleDatapointsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteMultipleDatapointsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteMultipleDatapoints
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteMultipleDatapointsInputSet = function() {
    DeleteMultipleDatapointsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID of the datastream you would like to delete datapoints from.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((conditional, string) Specifies the duration of the deletion. Can be used with StartDate or EndDate. Ex: 5seconds, 10minutes, 6hours. See documentation for full description / examples.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((conditional, date) Defines the end point of the deletion as a timestamp. Can be used with Duration. Ex: 2013-05-10T12:00:00Z.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, string) The ID of the feed you would like to delete datapoints from.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((conditional, date) Defines the starting point of the deletion as a timestamp. Can be used with Duration. Ex: 2013-05-10T00:00:00Z.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteMultipleDatapoints Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteMultipleDatapointsResultSet = function(resultStream) {
    DeleteMultipleDatapointsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponsStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful datapoint range deletion, the code should be 200.)
        */
        this.get_ResponsStatusCode = function() {
            return this.getResult("ResponsStatusCode");
        }
}

util.inherits(DeleteMultipleDatapoints, choreography.Choreography);
util.inherits(DeleteMultipleDatapointsInputSet, choreography.InputSet);
util.inherits(DeleteMultipleDatapointsResultSet, choreography.ResultSet);
exports.DeleteMultipleDatapoints = DeleteMultipleDatapoints;


/*
    ListAllFeeds
    Returns filterable data on all feeds viewable by the authenticated account.
*/


var ListAllFeeds = function(session) {
    /*
        Create a new instance of the ListAllFeeds Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/ListAllFeeds"
    ListAllFeeds.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllFeedsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllFeedsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllFeeds
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllFeedsInputSet = function() {
    ListAllFeedsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Content input for this Choreo. ((optional, string) Describes whether to return full or summary results. Full - all datastream values are returned, summary - returns the environment metadata for each feed. Valid values: 'full' or 'summary'.)
        */
        this.set_Content = function(value) {
            this.setInput("Content", value);
        }

        /*
        Set the value of the DistanceUnits input for this Choreo. ((optional, string) Units of distance. Valid values: "miles" or "kms" (default).)
        */
        this.set_DistanceUnits = function(value) {
            this.setInput("DistanceUnits", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, decimal) Search radius (units like miles or kilometers defined by DistanceUnits). Ex: 5.0.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the FeedType input for this Choreo. ((optional, string) The type of feed that is being returned. Valid values are "json" (the default), "xml" and "csv". No metadata is returned for the csv feed.)
        */
        this.set_FeedType = function(value) {
            this.setInput("FeedType", value);
        }

        /*
        Set the value of the FullTextSearch input for this Choreo. ((optional, string) Returns any feeds matching this string.)
        */
        this.set_FullTextSearch = function(value) {
            this.setInput("FullTextSearch", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) Used to find feeds located around this latitude. Ex. 51.5235375648154.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) Used to find feeds located around this longitude. Ex: -0.0807666778564453.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates which page of results you are requesting. Starts from 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Defines how many results to return per page (1 to 1000).)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the ShowUser input for this Choreo. ((optional, string) Include user login and user level for each feed. Valid values: true, false (default).)
        */
        this.set_ShowUser = function(value) {
            this.setInput("ShowUser", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Order of returned feeds. Valid values: "created_at", "retrieved_at" or "relevance".)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Sets whether to search for only live feeds, only frozen feeds, or all feeds. Valid values: "live", "frozen", "all" (default).)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((optional, string) Returns feeds containing datastreams tagged with the search query.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) Returns feeds containing datastreams with units specified by the search query. Ex: Celsius.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

        /*
        Set the value of the User input for this Choreo. ((optional, string) Returns feeds created by the user specified.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllFeeds Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllFeedsResultSet = function(resultStream) {
    ListAllFeedsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllFeeds, choreography.Choreography);
util.inherits(ListAllFeedsInputSet, choreography.InputSet);
util.inherits(ListAllFeedsResultSet, choreography.ResultSet);
exports.ListAllFeeds = ListAllFeeds;


/*
    ReadFeed
    Returns filterable data on a specific feed viewable by the authenticated account.
*/


var ReadFeed = function(session) {
    /*
        Create a new instance of the ReadFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/ReadFeed"
    ReadFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadFeedInputSet = function() {
    ReadFeedInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Datastreams input for this Choreo. ((optional, string) Filter by datastream. Valid values - comma separated datastream IDs (Ex: energy,power).)
        */
        this.set_Datastreams = function(value) {
            this.setInput("Datastreams", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, string) Used for a historical query. If used with EndDate will request data prior to EndDate, if used with StartDate will request data after StartDate. By itself will give most recent data. Ex: 6hours, 2days.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Used for a historical query. Defines the end point of the data returned as a timestamp. Ex: 2013-05-10T12:00:00Z.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID of the feed you wish to view.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the FeedType input for this Choreo. ((optional, string) The type of feed that is being returned. Valid values are "json" (the default), "csv" and "xml". No metadata is returned for the csv feed.)
        */
        this.set_FeedType = function(value) {
            this.setInput("FeedType", value);
        }

        /*
        Set the value of the FindPrevious input for this Choreo. ((optional, boolean) Used for a historical query. Will also return the previous value to the date range being requested. Useful when graphing, to start a graph with a datapoint. Valid values: "true", blank (default).)
        */
        this.set_FindPrevious = function(value) {
            this.setInput("FindPrevious", value);
        }

        /*
        Set the value of the IntervalType input for this Choreo. ((optional, string) Used for a historical query. If set to "discrete" the data will be returned in fixed time interval format according to Interval value. If not set, the raw datapoints will be returned.)
        */
        this.set_IntervalType = function(value) {
            this.setInput("IntervalType", value);
        }

        /*
        Set the value of the Interval input for this Choreo. ((optional, integer) Used for a historical query. Determines what interval of data is requested and is defined in seconds between the datapoints. See documentation for full list of possible values. Ex.: 0, 30, 60, etc.)
        */
        this.set_Interval = function(value) {
            this.setInput("Interval", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Used for a historical query. Limits the number of results to the number specified here. Defaults to 100, has a maximum of 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ShowUser input for this Choreo. ((optional, string) Include user login for each feed. For JSON/XML response only. Valid values: "true", "false" (default).)
        */
        this.set_ShowUser = function(value) {
            this.setInput("ShowUser", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Used for a historical query. Defines the starting point of the query as a timestamp. Ex: 2013-05-10T00:00:00Z.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadFeedResultSet = function(resultStream) {
    ReadFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadFeed, choreography.Choreography);
util.inherits(ReadFeedInputSet, choreography.InputSet);
util.inherits(ReadFeedResultSet, choreography.ResultSet);
exports.ReadFeed = ReadFeed;


/*
    ReadGraph
    Returns a customizable graph (Base64-encoded PNG image file) of datapoints from a specific datastream.
*/


var ReadGraph = function(session) {
    /*
        Create a new instance of the ReadGraph Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/ReadGraph"
    ReadGraph.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadGraphResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadGraphInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadGraph
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadGraphInputSet = function() {
    ReadGraphInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Color input for this Choreo. ((optional, string) The PNG color in hex. Ex: FFCC33.)
        */
        this.set_Color = function(value) {
            this.setInput("Color", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID for the datastream you wish to read.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, string) Used for a historical query. If used with EndDate will request data prior to EndDate, if used with StartDate will request data after StartDate. By itself will give most recent data. Ex: 6hours, 2days.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, date) Used for a historical query. Defines the end point of the data returned as a timestamp. Ex: 2013-05-10T12:00:00Z. Default value is set to current timestamp.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID of the feed you wish to read.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the FindPrevious input for this Choreo. ((optional, boolean) Used for a historical query. Will also return the previous value to the date range being requested. Useful to allow a graph to start a graph with some datapoint. Valid values: "true", blank (default).)
        */
        this.set_FindPrevious = function(value) {
            this.setInput("FindPrevious", value);
        }

        /*
        Set the value of the Height input for this Choreo. ((optional, integer) The PNG height in pixels. Max height: 500. Ex: 400.)
        */
        this.set_Height = function(value) {
            this.setInput("Height", value);
        }

        /*
        Set the value of the IntervalType input for this Choreo. ((optional, string) Used for a historical query. If set to "discrete" the data will be returned in fixed time interval format according to Interval value. If not set, the raw datapoints will be returned.)
        */
        this.set_IntervalType = function(value) {
            this.setInput("IntervalType", value);
        }

        /*
        Set the value of the Interval input for this Choreo. ((optional, integer) Used for a historical query. Determines what interval of data is requested and is defined in seconds between the datapoints. See documentation for full list of possible values. Ex: 0, 30, 60, etc.)
        */
        this.set_Interval = function(value) {
            this.setInput("Interval", value);
        }

        /*
        Set the value of the Legend input for this Choreo. ((optional, string) Label given datapoints on a legend included on the graph.)
        */
        this.set_Legend = function(value) {
            this.setInput("Legend", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Used for a historical query. LImits the number of results to the number specified here. Defaults to 100, has a maximum of 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the LineSize input for this Choreo. ((optional, integer) Size of the lines/strokes in pixels. Ex: 4.)
        */
        this.set_LineSize = function(value) {
            this.setInput("LineSize", value);
        }

        /*
        Set the value of the ShowAxisLabels input for this Choreo. ((optional, boolean) Show access labels. Input "true" to turn on, leave blank to keep off (default).)
        */
        this.set_ShowAxisLabels = function(value) {
            this.setInput("ShowAxisLabels", value);
        }

        /*
        Set the value of the ShowDetailedGrid input for this Choreo. ((optional, string) Show detailed grid. Input "true" to turn on, leave blank to keep off (default).)
        */
        this.set_ShowDetailedGrid = function(value) {
            this.setInput("ShowDetailedGrid", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) Used for a historical query. Defines the starting the point of the query as a timestamp. Ex: 2013-05-10T00:00:00Z.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) Timezone of the graph. For a list of valid values please see description and API documenation. Ex: Eastern Time (US & Canada), Pacific Time (US & Canada), UTC, Tokyo.)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) Title of the graph.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Width input for this Choreo. ((optional, integer) The PNG width in pixels. Max width: 600. Ex: 600.)
        */
        this.set_Width = function(value) {
            this.setInput("Width", value);
        }

        /*
        Set the value of the YAxisMax input for this Choreo. ((optional, string) Y-axis maximum value if the YAxisScale is set to "manual".)
        */
        this.set_YAxisMax = function(value) {
            this.setInput("YAxisMax", value);
        }

        /*
        Set the value of the YAxisMin input for this Choreo. ((optional, string) Y-axis minimum value if the YAxisScale is set to "manual".)
        */
        this.set_YAxisMin = function(value) {
            this.setInput("YAxisMin", value);
        }

        /*
        Set the value of the YAxisScale input for this Choreo. ((optional, string) Method used to determine the y-axis scale. Valid values: "auto" (default), "datastream", or "manual".)
        */
        this.set_YAxisScale = function(value) {
            this.setInput("YAxisScale", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadGraph Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadGraphResultSet = function(resultStream) {
    ReadGraphResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively, which is a base64-encoded binary .png file. Decode to get the binary PNG graphic.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadGraph, choreography.Choreography);
util.inherits(ReadGraphInputSet, choreography.InputSet);
util.inherits(ReadGraphResultSet, choreography.ResultSet);
exports.ReadGraph = ReadGraph;


/*
    WriteData
    Allows you to update your feed, including updating/creating new datastreams and datapoints. 
*/


var WriteData = function(session) {
    /*
        Create a new instance of the WriteData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/WriteData"
    WriteData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WriteDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WriteDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WriteData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WriteDataInputSet = function() {
    WriteDataInputSet.super_.call(this);
        /*
        Set the value of the FeedData input for this Choreo. ((optional, any) Custom data body for the new feed in JSON or XML format (set by FeedType). See documentation for the minimum required fields for a feed. If custom FeedData is used, Value and Timestamp is ignored.)
        */
        this.set_FeedData = function(value) {
            this.setInput("FeedData", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((optional, string) ID for single datastream you would like to update. Required if specifying a single datapoint update using Value.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID for the feed that you would like to update.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the FeedType input for this Choreo. ((optional, string) The type of feed that is being provided for custom FeedData. Valid values are "json" (the default), "xml" and "csv". Ignored if specifying single datapoint Value.)
        */
        this.set_FeedType = function(value) {
            this.setInput("FeedType", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) Can be used with a single Value and DatastreamID. If specified, sets timestamp for Value. If Value is set with blank Timestamp, Value's timestamp will be current time. Ex: 2013-05-10T00:00:00.123456Z.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Value input for this Choreo. ((optional, string) Specifies the value for a single datapoint in a specified datastream.)
        */
        this.set_Value = function(value) {
            this.setInput("Value", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WriteData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WriteDataResultSet = function(resultStream) {
    WriteDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful feed / data update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(WriteData, choreography.Choreography);
util.inherits(WriteDataInputSet, choreography.InputSet);
util.inherits(WriteDataResultSet, choreography.ResultSet);
exports.WriteData = WriteData;


/*
    WriteDatastreamMetadata
    Allows you to easily update the metadata of your datastream.
*/


var WriteDatastreamMetadata = function(session) {
    /*
        Create a new instance of the WriteDatastreamMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/WriteDatastreamMetadata"
    WriteDatastreamMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WriteDatastreamMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WriteDatastreamMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WriteDatastreamMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WriteDatastreamMetadataInputSet = function() {
    WriteDatastreamMetadataInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomDatastreamData input for this Choreo. ((optional, json) Custom data body for the updated datastream in JSON. See documentation for how to construct your own datastream feed. If custom DatastreamData is used, all other optional inputs are ignored.)
        */
        this.set_CustomDatastreamData = function(value) {
            this.setInput("CustomDatastreamData", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID of the Datastream you would like to add metadata to. Required unless you are using CustomDatastreamData.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID for the feed that you would like to update.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the MaxValue input for this Choreo. ((optional, string) The maximum value since the last reset. Leave empty to keep existing MaxValue. Type "BLANK" to clear existing value.)
        */
        this.set_MaxValue = function(value) {
            this.setInput("MaxValue", value);
        }

        /*
        Set the value of the MinValue input for this Choreo. ((optional, string) The minimum value since the last reset. Leave empty to keep existing MinValue. Type "BLANK" to clear existing value.)
        */
        this.set_MinValue = function(value) {
            this.setInput("MinValue", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated list of searchable tags (the characters ', ", and commas are not allowed). Tags input overwrites previous tags, enter "BLANK" to clear all tags. Ex: "power,energy".)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the UnitSymbol input for this Choreo. ((optional, string) The symbol of the Unit. Leave empty to keep existing UnitSymbol. Type "BLANK" to clear existing value. Ex: "C".)
        */
        this.set_UnitSymbol = function(value) {
            this.setInput("UnitSymbol", value);
        }

        /*
        Set the value of the UnitType input for this Choreo. ((optional, string) The type of Unit. Leave empty to keep existing UnitType. Type "BLANK" to clear existing value. Ex: "basicSI".)
        */
        this.set_UnitType = function(value) {
            this.setInput("UnitType", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((optional, string) The units of the datastream. Leave empty to keep existing Units. Type "BLANK" to clear existing Units. Ex: "Celsius".)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WriteDatastreamMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WriteDatastreamMetadataResultSet = function(resultStream) {
    WriteDatastreamMetadataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful datastream update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(WriteDatastreamMetadata, choreography.Choreography);
util.inherits(WriteDatastreamMetadataInputSet, choreography.InputSet);
util.inherits(WriteDatastreamMetadataResultSet, choreography.ResultSet);
exports.WriteDatastreamMetadata = WriteDatastreamMetadata;


/*
    WriteFeedMetadata
    Allows you to easily update the metadata of your feed.
*/


var WriteFeedMetadata = function(session) {
    /*
        Create a new instance of the WriteFeedMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/WriteFeedMetadata"
    WriteFeedMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WriteFeedMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WriteFeedMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WriteFeedMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WriteFeedMetadataInputSet = function() {
    WriteFeedMetadataInputSet.super_.call(this);
        /*
        Set the value of the FeedData input for this Choreo. ((optional, any) Custom data body for the new feed in JSON or XML format (set by FeedType). See documentation for how to write your own feed. If custom FeedData is used, all other optional inputs are ignored.)
        */
        this.set_FeedData = function(value) {
            this.setInput("FeedData", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description of the feed. Leave empty to keep existing Description. Type "BLANK" to clear existing Description.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) Contact Email. Leave empty to keep existing Email. Type "BLANK" to clear existing Email.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID for the feed that you would like to update.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the FeedType input for this Choreo. ((optional, string) The type of feed that is being provided for custom FeedData. Valid values are "json" (the default) and "xml".)
        */
        this.set_FeedType = function(value) {
            this.setInput("FeedType", value);
        }

        /*
        Set the value of the Icon input for this Choreo. ((optional, string) The URL of an icon which is relevant to this feed. Leave empty to keep existing Icon. Type "BLANK" to clear existing Icon.)
        */
        this.set_Icon = function(value) {
            this.setInput("Icon", value);
        }

        /*
        Set the value of the Private input for this Choreo. ((optional, boolean) Specifies whether or not the feed is private to the creator of the feed. If 'true' the feed is private, if 'false' the feed is public. Leave empty to keep existing settings.)
        */
        this.set_Private = function(value) {
            this.setInput("Private", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated list of searchable tags (the characters ', ", and commas are not allowed). Tags input overwrites previous tags, enter "BLANK" to clear all tags. Ex: "power,energy".)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) A descriptive name for the feed. Leave empty to keep existing Title. Type "BLANK" to clear existing Title.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Website input for this Choreo. ((optional, string) The URL of a website which is relevant to this feed. Leave empty to keep existing Website. Type "BLANK" to clear existing Website. Ex.: http://www.homepage.com.)
        */
        this.set_Website = function(value) {
            this.setInput("Website", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WriteFeedMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WriteFeedMetadataResultSet = function(resultStream) {
    WriteFeedMetadataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful feed update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(WriteFeedMetadata, choreography.Choreography);
util.inherits(WriteFeedMetadataInputSet, choreography.InputSet);
util.inherits(WriteFeedMetadataResultSet, choreography.ResultSet);
exports.WriteFeedMetadata = WriteFeedMetadata;


/*
    WriteLocationData
    Allows you to easily update the location data of your feed.
*/


var WriteLocationData = function(session) {
    /*
        Create a new instance of the WriteLocationData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/ReadWriteData/WriteLocationData"
    WriteLocationData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new WriteLocationDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new WriteLocationDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the WriteLocationData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var WriteLocationDataInputSet = function() {
    WriteLocationDataInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Disposition input for this Choreo. ((optional, string) Can be set to "mobile" to enable creating waypoints (lat, lon and elevation with timestamp), or "fixed" (default) for a single location. Leave empty to keep existing settings.)
        */
        this.set_Disposition = function(value) {
            this.setInput("Disposition", value);
        }

        /*
        Set the value of the Domain input for this Choreo. ((optional, string) The domain of the location, i.e. physical or virtual. Leave empty to keep existing Domain. Type "BLANK" to clear existing Domain. Ex: "physical".)
        */
        this.set_Domain = function(value) {
            this.setInput("Domain", value);
        }

        /*
        Set the value of the Elevation input for this Choreo. ((optional, decimal) Elevation in meters. Leave empty to keep previously existing Elevation. Type "BLANK" to clear existing Elevation. Ex: 20.5.)
        */
        this.set_Elevation = function(value) {
            this.setInput("Elevation", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID for the feed that you would like to update.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((optional, decimal) Latitude coordinates. Leave empty to keep previously existing Latitude. Type "BLANK" to clear existing Latitude. Ex: 40.728194.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((optional, decimal) Longitude coordinates. Leave empty to keep previously existing Location. Type "BLANK" to clear existing settings. Ex: -73.957316.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) Name of Location. Leave empty to keep existing Location. Type "BLANK" to clear existing settings. Ex.: "My Fitbit Tracker".)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the WriteLocationData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var WriteLocationDataResultSet = function(resultStream) {
    WriteLocationDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful feed location update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(WriteLocationData, choreography.Choreography);
util.inherits(WriteLocationDataInputSet, choreography.InputSet);
util.inherits(WriteLocationDataResultSet, choreography.ResultSet);
exports.WriteLocationData = WriteLocationData;

