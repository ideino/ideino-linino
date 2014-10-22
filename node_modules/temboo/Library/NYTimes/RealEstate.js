
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetListingsCounts
    Retrieves counts of real estate listings from New York Times Web Service.
*/


var GetListingsCounts = function(session) {
    /*
        Create a new instance of the GetListingsCounts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/RealEstate/GetListingsCounts"
    GetListingsCounts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListingsCountsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListingsCountsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListingsCounts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListingsCountsInputSet = function() {
    GetListingsCountsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Bedrooms input for this Choreo. ((optional, integer) Limits the results by number of bedrooms to search for. Defaults to 1.)
        */
        this.set_Bedrooms = function(value) {
            this.setInput("Bedrooms", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((required, string) Sets the quarter, month, week or day for the results (i.e. 2008-Q1, 2008-W52, 2007-07, 2010-10-01, etc).)
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the GeoExtentLevel input for this Choreo. ((required, string) The geographical unit for the results (i.e. borough, neighborhood, or zip).)
        */
        this.set_GeoExtentLevel = function(value) {
            this.setInput("GeoExtentLevel", value);
        }

        /*
        Set the value of the GeoExtentValue input for this Choreo. ((required, string) Limits the search to a specific area.  For example, if GeoExtentLevel is borough, the value for GeoExtentValue could be Brooklyn.)
        */
        this.set_GeoExtentValue = function(value) {
            this.setInput("GeoExtentValue", value);
        }

        /*
        Set the value of the GeoSummaryLevel input for this Choreo. ((required, string) The geographic unit for grouping the results (borough, neighborhood, or zip).)
        */
        this.set_GeoSummaryLevel = function(value) {
            this.setInput("GeoSummaryLevel", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetListingsCounts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListingsCountsResultSet = function(resultStream) {
    GetListingsCountsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListingsCounts, choreography.Choreography);
util.inherits(GetListingsCountsInputSet, choreography.InputSet);
util.inherits(GetListingsCountsResultSet, choreography.ResultSet);
exports.GetListingsCounts = GetListingsCounts;


/*
    GetListingsPercentiles
    Retrieves percentiles of real estate listings from New York Times Web Service.
*/


var GetListingsPercentiles = function(session) {
    /*
        Create a new instance of the GetListingsPercentiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/RealEstate/GetListingsPercentiles"
    GetListingsPercentiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListingsPercentilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListingsPercentilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListingsPercentiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListingsPercentilesInputSet = function() {
    GetListingsPercentilesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Bedrooms input for this Choreo. ((optional, integer) Limits the results by number of bedrooms to search for. Defaults to 1.)
        */
        this.set_Bedrooms = function(value) {
            this.setInput("Bedrooms", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((required, string) Sets the quarter, month, week or day for the results (i.e. 2008-Q1, 2008-W52, 2007-07, 2010-10-01, etc).)
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the GeoExtentLevel input for this Choreo. ((required, string) The geographical unit for the results (i.e. borough, neighborhood, or zip).)
        */
        this.set_GeoExtentLevel = function(value) {
            this.setInput("GeoExtentLevel", value);
        }

        /*
        Set the value of the GeoExtentValue input for this Choreo. ((required, string) Limits the search to a specific area.  For example, if GeoExtentLevel is borough, the value for GeoExtentValue could be Brooklyn.)
        */
        this.set_GeoExtentValue = function(value) {
            this.setInput("GeoExtentValue", value);
        }

        /*
        Set the value of the GeoSummaryLevel input for this Choreo. ((required, string) The geographic unit for grouping the results (borough, neighborhood, or zip).)
        */
        this.set_GeoSummaryLevel = function(value) {
            this.setInput("GeoSummaryLevel", value);
        }

        /*
        Set the value of the Percentile input for this Choreo. ((required, integer) Specify a percentile for the listing prices you want to retrieve (i.e 50).)
        */
        this.set_Percentile = function(value) {
            this.setInput("Percentile", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetListingsPercentiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListingsPercentilesResultSet = function(resultStream) {
    GetListingsPercentilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListingsPercentiles, choreography.Choreography);
util.inherits(GetListingsPercentilesInputSet, choreography.InputSet);
util.inherits(GetListingsPercentilesResultSet, choreography.ResultSet);
exports.GetListingsPercentiles = GetListingsPercentiles;


/*
    GetSalesCounts
    Retrieves counts of real estate sales from New York Times Web Service.
*/


var GetSalesCounts = function(session) {
    /*
        Create a new instance of the GetSalesCounts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/RealEstate/GetSalesCounts"
    GetSalesCounts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSalesCountsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSalesCountsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSalesCounts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSalesCountsInputSet = function() {
    GetSalesCountsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Bedrooms input for this Choreo. ((optional, integer) Limits the results by number of bedrooms to search for. Defaults to 1.)
        */
        this.set_Bedrooms = function(value) {
            this.setInput("Bedrooms", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((required, string) Sets the quarter, month, week or day for the results (i.e. 2008-Q1, 2008-W52, 2007-07, 2010-10-01, etc))
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the GeoExtentLevel input for this Choreo. ((required, string) The geographical unit for the results (i.e. borough, neighborhood, or zip))
        */
        this.set_GeoExtentLevel = function(value) {
            this.setInput("GeoExtentLevel", value);
        }

        /*
        Set the value of the GeoExtentValue input for this Choreo. ((required, string) Limits the search to a specific area.  For example, if GeoExtendLevel is borough, the value for GeoExtendValue could be Brooklyn.)
        */
        this.set_GeoExtentValue = function(value) {
            this.setInput("GeoExtentValue", value);
        }

        /*
        Set the value of the GeoSummaryLevel input for this Choreo. ((required, string) The geographic unit for grouping the results (borough, neighborhood, or zip))
        */
        this.set_GeoSummaryLevel = function(value) {
            this.setInput("GeoSummaryLevel", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSalesCounts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSalesCountsResultSet = function(resultStream) {
    GetSalesCountsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSalesCounts, choreography.Choreography);
util.inherits(GetSalesCountsInputSet, choreography.InputSet);
util.inherits(GetSalesCountsResultSet, choreography.ResultSet);
exports.GetSalesCounts = GetSalesCounts;


/*
    GetSalesPercentiles
    Retrieves percentiles of real estate sales from New York Times Web Service.
*/


var GetSalesPercentiles = function(session) {
    /*
        Create a new instance of the GetSalesPercentiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/RealEstate/GetSalesPercentiles"
    GetSalesPercentiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSalesPercentilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSalesPercentilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSalesPercentiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSalesPercentilesInputSet = function() {
    GetSalesPercentilesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Bedrooms input for this Choreo. ((optional, integer) Limits the results by number of bedrooms to search for. Defaults to 1.)
        */
        this.set_Bedrooms = function(value) {
            this.setInput("Bedrooms", value);
        }

        /*
        Set the value of the DateRange input for this Choreo. ((required, string) Sets the quarter, month, week or day for the results (i.e. 2008-Q1, 2008-W52, 2007-07, etc))
        */
        this.set_DateRange = function(value) {
            this.setInput("DateRange", value);
        }

        /*
        Set the value of the GeoExtentLevel input for this Choreo. ((required, string) The geographical unit for the results (i.e. borough, neighborhood, or zip))
        */
        this.set_GeoExtentLevel = function(value) {
            this.setInput("GeoExtentLevel", value);
        }

        /*
        Set the value of the GeoExtentValue input for this Choreo. ((required, string) Limits the search to a specific area.  For example, if GeoExtendLevel is borough, the value for GeoExtendValue could be Brooklyn.)
        */
        this.set_GeoExtentValue = function(value) {
            this.setInput("GeoExtentValue", value);
        }

        /*
        Set the value of the GeoSummaryLevel input for this Choreo. ((required, string) The geographic unit for grouping the results (borough, neighborhood, or zip))
        */
        this.set_GeoSummaryLevel = function(value) {
            this.setInput("GeoSummaryLevel", value);
        }

        /*
        Set the value of the Percentile input for this Choreo. ((required, integer) Specify the percentile for sales prices you want to retrieve (i.e 50))
        */
        this.set_Percentile = function(value) {
            this.setInput("Percentile", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSalesPercentiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSalesPercentilesResultSet = function(resultStream) {
    GetSalesPercentilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSalesPercentiles, choreography.Choreography);
util.inherits(GetSalesPercentilesInputSet, choreography.InputSet);
util.inherits(GetSalesPercentilesResultSet, choreography.ResultSet);
exports.GetSalesPercentiles = GetSalesPercentiles;

