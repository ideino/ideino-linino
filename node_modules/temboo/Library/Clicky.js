
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AdvancedFilter
    Allows you to retrieve analytics, using more advanced filter options.
*/


var AdvancedFilter = function(session) {
    /*
        Create a new instance of the AdvancedFilter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/AdvancedFilter"
    AdvancedFilter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdvancedFilterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdvancedFilterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdvancedFilter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdvancedFilterInputSet = function() {
    AdvancedFilterInputSet.super_.call(this);
        /*
        Set the value of the Date input for this Choreo. ((optional, string) The date or date range you want to access. Use YYYY-MM-DD format for date and YYYY-MM-DD,YYYY-MM-DD for a range. See docs for more options for this input. Defaults to 'today'.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((required, string) The name of the data you want to filter by (i.e. ip_address). See docs for a complete list of supported filters.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((required, string) The value of the filter you want to apply to the request. For example, if you're FilterName is "ip_address", you could use "65.0.0.0,85.0.0.0" in the FilterValue.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The maximum number of results that will be returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of data you want to retrieve. Note that not all types are available for this Choreo. Use types: vistors-list, segmentation, or actions-list.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdvancedFilter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdvancedFilterResultSet = function(resultStream) {
    AdvancedFilterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AdvancedFilter, choreography.Choreography);
util.inherits(AdvancedFilterInputSet, choreography.InputSet);
util.inherits(AdvancedFilterResultSet, choreography.ResultSet);
exports.AdvancedFilter = AdvancedFilter;


/*
    FilterByItems
    Retrieves the stats for just a single item for the type you are requesting.
*/


var FilterByItems = function(session) {
    /*
        Create a new instance of the FilterByItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/FilterByItems"
    FilterByItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterByItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterByItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterByItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterByItemsInputSet = function() {
    FilterByItemsInputSet.super_.call(this);
        /*
        Set the value of the Item input for this Choreo. ((required, string) Use this input to get the stats for just a single item for the type you are requesting (i.e. type=links-domains and item=google.com).)
        */
        this.set_Item = function(value) {
            this.setInput("Item", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The maximum number of results that will be returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of data you want to retrieve. Can be a comma-separated list of types (i.e. visitors,countries,searches).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterByItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterByItemsResultSet = function(resultStream) {
    FilterByItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterByItems, choreography.Choreography);
util.inherits(FilterByItemsInputSet, choreography.InputSet);
util.inherits(FilterByItemsResultSet, choreography.ResultSet);
exports.FilterByItems = FilterByItems;


/*
    FilterByKeyword
    Retrieves analytics, filtering down to only the results you specify in a keyword filter.
*/


var FilterByKeyword = function(session) {
    /*
        Create a new instance of the FilterByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/FilterByKeyword"
    FilterByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterByKeywordInputSet = function() {
    FilterByKeywordInputSet.super_.call(this);
        /*
        Set the value of the Filter input for this Choreo. ((required, string) You can use this parameter to filter down to only the results you want.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The maximum number of results that will be returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of data you want to retrieve. Can be a comma-separated list of types (i.e. visitors,countries,searches).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterByKeywordResultSet = function(resultStream) {
    FilterByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterByKeyword, choreography.Choreography);
util.inherits(FilterByKeywordInputSet, choreography.InputSet);
util.inherits(FilterByKeywordResultSet, choreography.ResultSet);
exports.FilterByKeyword = FilterByKeyword;


/*
    GetAnalyticsByDate
    Retrieves anlaytics for your website for a particular date or date range.
*/


var GetAnalyticsByDate = function(session) {
    /*
        Create a new instance of the GetAnalyticsByDate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/GetAnalyticsByDate"
    GetAnalyticsByDate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAnalyticsByDateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAnalyticsByDateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAnalyticsByDate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAnalyticsByDateInputSet = function() {
    GetAnalyticsByDateInputSet.super_.call(this);
        /*
        Set the value of the Date input for this Choreo. ((optional, string) The date or date range you want to access. Use YYYY-MM-DD format for date and YYYY-MM-DD,YYYY-MM-DD for a range. See docs for more options for this input. Defaults to 'today'.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The maximum number of results that will be returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of data you want to retrieve. Can be a comma-separated list of types (i.e. visitors,countries,searches).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAnalyticsByDate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAnalyticsByDateResultSet = function(resultStream) {
    GetAnalyticsByDateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAnalyticsByDate, choreography.Choreography);
util.inherits(GetAnalyticsByDateInputSet, choreography.InputSet);
util.inherits(GetAnalyticsByDateResultSet, choreography.ResultSet);
exports.GetAnalyticsByDate = GetAnalyticsByDate;


/*
    GetAnalyticsByType
    Retrieves a specified type of anlaytics for your website.
*/


var GetAnalyticsByType = function(session) {
    /*
        Create a new instance of the GetAnalyticsByType Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/GetAnalyticsByType"
    GetAnalyticsByType.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAnalyticsByTypeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAnalyticsByTypeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAnalyticsByType
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAnalyticsByTypeInputSet = function() {
    GetAnalyticsByTypeInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The maximum number of results that will be returned. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of data you want to retrieve. Can be a comma-separated list of types (i.e. visitors,countries,searches).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAnalyticsByType Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAnalyticsByTypeResultSet = function(resultStream) {
    GetAnalyticsByTypeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAnalyticsByType, choreography.Choreography);
util.inherits(GetAnalyticsByTypeInputSet, choreography.InputSet);
util.inherits(GetAnalyticsByTypeResultSet, choreography.ResultSet);
exports.GetAnalyticsByType = GetAnalyticsByType;


/*
    HourlyVisitorsLast7Days
    Retrieves hourly visitor and action tallies for the last 7 days.
*/


var HourlyVisitorsLast7Days = function(session) {
    /*
        Create a new instance of the HourlyVisitorsLast7Days Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/HourlyVisitorsLast7Days"
    HourlyVisitorsLast7Days.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HourlyVisitorsLast7DaysResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HourlyVisitorsLast7DaysInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HourlyVisitorsLast7Days
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HourlyVisitorsLast7DaysInputSet = function() {
    HourlyVisitorsLast7DaysInputSet.super_.call(this);
        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "visitors,actions".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HourlyVisitorsLast7Days Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HourlyVisitorsLast7DaysResultSet = function(resultStream) {
    HourlyVisitorsLast7DaysResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HourlyVisitorsLast7Days, choreography.Choreography);
util.inherits(HourlyVisitorsLast7DaysInputSet, choreography.InputSet);
util.inherits(HourlyVisitorsLast7DaysResultSet, choreography.ResultSet);
exports.HourlyVisitorsLast7Days = HourlyVisitorsLast7Days;


/*
    Last30VisitorsTodayViaSearch
    Retrieves the last 30 visitors today who arrived via a search.
*/


var Last30VisitorsTodayViaSearch = function(session) {
    /*
        Create a new instance of the Last30VisitorsTodayViaSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/Last30VisitorsTodayViaSearch"
    Last30VisitorsTodayViaSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new Last30VisitorsTodayViaSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new Last30VisitorsTodayViaSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Last30VisitorsTodayViaSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var Last30VisitorsTodayViaSearchInputSet = function() {
    Last30VisitorsTodayViaSearchInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records you want to retrieve. Defaults to 30.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "visitors-list".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Last30VisitorsTodayViaSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var Last30VisitorsTodayViaSearchResultSet = function(resultStream) {
    Last30VisitorsTodayViaSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Last30VisitorsTodayViaSearch, choreography.Choreography);
util.inherits(Last30VisitorsTodayViaSearchInputSet, choreography.InputSet);
util.inherits(Last30VisitorsTodayViaSearchResultSet, choreography.ResultSet);
exports.Last30VisitorsTodayViaSearch = Last30VisitorsTodayViaSearch;


/*
    SegmentationForVisitorsTodayViaSearch
    Retrieves segmentation data for visitors today who arrived via a search.
*/


var SegmentationForVisitorsTodayViaSearch = function(session) {
    /*
        Create a new instance of the SegmentationForVisitorsTodayViaSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/SegmentationForVisitorsTodayViaSearch"
    SegmentationForVisitorsTodayViaSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SegmentationForVisitorsTodayViaSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SegmentationForVisitorsTodayViaSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SegmentationForVisitorsTodayViaSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SegmentationForVisitorsTodayViaSearchInputSet = function() {
    SegmentationForVisitorsTodayViaSearchInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records you want to retrieve. Defaults to 30.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "segmentation".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SegmentationForVisitorsTodayViaSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SegmentationForVisitorsTodayViaSearchResultSet = function(resultStream) {
    SegmentationForVisitorsTodayViaSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SegmentationForVisitorsTodayViaSearch, choreography.Choreography);
util.inherits(SegmentationForVisitorsTodayViaSearchInputSet, choreography.InputSet);
util.inherits(SegmentationForVisitorsTodayViaSearchResultSet, choreography.ResultSet);
exports.SegmentationForVisitorsTodayViaSearch = SegmentationForVisitorsTodayViaSearch;


/*
    TopStatsLastWeek
    Retrieves last weeks's top pages, links, and searches.
*/


var TopStatsLastWeek = function(session) {
    /*
        Create a new instance of the TopStatsLastWeek Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/TopStatsLastWeek"
    TopStatsLastWeek.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopStatsLastWeekResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopStatsLastWeekInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopStatsLastWeek
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopStatsLastWeekInputSet = function() {
    TopStatsLastWeekInputSet.super_.call(this);
        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "pages,links,searches".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopStatsLastWeek Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopStatsLastWeekResultSet = function(resultStream) {
    TopStatsLastWeekResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopStatsLastWeek, choreography.Choreography);
util.inherits(TopStatsLastWeekInputSet, choreography.InputSet);
util.inherits(TopStatsLastWeekResultSet, choreography.ResultSet);
exports.TopStatsLastWeek = TopStatsLastWeek;


/*
    TopStatsLastWeekByDay
    Retrieves last weeks's top pages, links, and searches, by day.
*/


var TopStatsLastWeekByDay = function(session) {
    /*
        Create a new instance of the TopStatsLastWeekByDay Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/TopStatsLastWeekByDay"
    TopStatsLastWeekByDay.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopStatsLastWeekByDayResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopStatsLastWeekByDayInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopStatsLastWeekByDay
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopStatsLastWeekByDayInputSet = function() {
    TopStatsLastWeekByDayInputSet.super_.call(this);
        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "pages,links,searches".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopStatsLastWeekByDay Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopStatsLastWeekByDayResultSet = function(resultStream) {
    TopStatsLastWeekByDayResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopStatsLastWeekByDay, choreography.Choreography);
util.inherits(TopStatsLastWeekByDayInputSet, choreography.InputSet);
util.inherits(TopStatsLastWeekByDayResultSet, choreography.ResultSet);
exports.TopStatsLastWeekByDay = TopStatsLastWeekByDay;


/*
    VisitorsToday
    Retrieves today's visitors, actions, average actions, average time, and bounce rate.
*/


var VisitorsToday = function(session) {
    /*
        Create a new instance of the VisitorsToday Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Clicky/VisitorsToday"
    VisitorsToday.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VisitorsTodayResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VisitorsTodayInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VisitorsToday
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VisitorsTodayInputSet = function() {
    VisitorsTodayInputSet.super_.call(this);
        /*
        Set the value of the Output input for this Choreo. ((optional, string) What format you want the returned data to be in. Accepted values: xml, php, json, csv. Defaults to 'xml'.)
        */
        this.set_Output = function(value) {
            this.setInput("Output", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((required, integer) Your request must include the site's ID that you want to access data from. Available from your site preferences page.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SiteKey input for this Choreo. ((required, string) The unique key assigned to you when you first register with Clicky. Available from your site preferences page.)
        */
        this.set_SiteKey = function(value) {
            this.setInput("SiteKey", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of data you want to retrieve. Defaults to "visitors,actions,actions-average,time-average,bounce-rate".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VisitorsToday Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VisitorsTodayResultSet = function(resultStream) {
    VisitorsTodayResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Clicky formatted as specified in the Output parameter. Default is XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VisitorsToday, choreography.Choreography);
util.inherits(VisitorsTodayInputSet, choreography.InputSet);
util.inherits(VisitorsTodayResultSet, choreography.ResultSet);
exports.VisitorsToday = VisitorsToday;

