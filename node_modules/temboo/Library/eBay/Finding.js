
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FindCompletedItems
    Retrieves items whose listings are completed and are no longer available for sale on eBay.
*/


var FindCompletedItems = function(session) {
    /*
        Create a new instance of the FindCompletedItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Finding/FindCompletedItems"
    FindCompletedItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindCompletedItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindCompletedItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindCompletedItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindCompletedItemsInputSet = function() {
    FindCompletedItemsInputSet.super_.call(this);
        /*
        Set the value of the FindCompletedItemsRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_FindCompletedItemsRequest = function(value) {
            this.setInput("FindCompletedItemsRequest", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AspectFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as aspect filters for the request.)
        */
        this.set_AspectFilters = function(value) {
            this.setInput("AspectFilters", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) Filters the results by category ID.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the GlobalID input for this Choreo. ((optional, integer) The global ID of the eBay site to access (e.g., EBAY-US).)
        */
        this.set_GlobalID = function(value) {
            this.setInput("GlobalID", value);
        }

        /*
        Set the value of the ItemFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as item filters for the request.)
        */
        this.set_ItemFilters = function(value) {
            this.setInput("ItemFilters", value);
        }

        /*
        Set the value of the Keywords input for this Choreo. ((conditional, string) Filters the results by one or more keywords.)
        */
        this.set_Keywords = function(value) {
            this.setInput("Keywords", value);
        }

        /*
        Set the value of the OutputSelector input for this Choreo. ((optional, string) Controls the fields that are returned in the response (e.g., GalleryInfo).)
        */
        this.set_OutputSelector = function(value) {
            this.setInput("OutputSelector", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Valid values: BestMatch, BidCountMost, CountryAscending, CountryDescending, DistanceNearest, CurrentPriceHighest, EndTimeSoonest, PricePlusShippingHighest, PricePlusShippingLowest, StartTimeNewest.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindCompletedItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindCompletedItemsResultSet = function(resultStream) {
    FindCompletedItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindCompletedItems, choreography.Choreography);
util.inherits(FindCompletedItemsInputSet, choreography.InputSet);
util.inherits(FindCompletedItemsResultSet, choreography.ResultSet);
exports.FindCompletedItems = FindCompletedItems;


/*
    FindItemsAdvanced
    Finds items by a keyword query and/or category and allows searching within item descriptions.
*/


var FindItemsAdvanced = function(session) {
    /*
        Create a new instance of the FindItemsAdvanced Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Finding/FindItemsAdvanced"
    FindItemsAdvanced.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindItemsAdvancedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindItemsAdvancedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindItemsAdvanced
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindItemsAdvancedInputSet = function() {
    FindItemsAdvancedInputSet.super_.call(this);
        /*
        Set the value of the FindItemsAdvancedRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_FindItemsAdvancedRequest = function(value) {
            this.setInput("FindItemsAdvancedRequest", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AspectFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as aspect filters for the request.)
        */
        this.set_AspectFilters = function(value) {
            this.setInput("AspectFilters", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) Filters the results by category ID.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the GlobalID input for this Choreo. ((optional, integer) The global ID of the eBay site to access (e.g., EBAY-US).)
        */
        this.set_GlobalID = function(value) {
            this.setInput("GlobalID", value);
        }

        /*
        Set the value of the ItemFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as item filters for the request.)
        */
        this.set_ItemFilters = function(value) {
            this.setInput("ItemFilters", value);
        }

        /*
        Set the value of the Keywords input for this Choreo. ((conditional, string) Filters the results by one or more keywords.)
        */
        this.set_Keywords = function(value) {
            this.setInput("Keywords", value);
        }

        /*
        Set the value of the OutputSelector input for this Choreo. ((optional, string) Controls the fields that are returned in the response (e.g., GalleryInfo).)
        */
        this.set_OutputSelector = function(value) {
            this.setInput("OutputSelector", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Valid values: BestMatch, BidCountMost, CountryAscending, CountryDescending, DistanceNearest, CurrentPriceHighest, EndTimeSoonest, PricePlusShippingHighest, PricePlusShippingLowest, StartTimeNewest.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindItemsAdvanced Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindItemsAdvancedResultSet = function(resultStream) {
    FindItemsAdvancedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindItemsAdvanced, choreography.Choreography);
util.inherits(FindItemsAdvancedInputSet, choreography.InputSet);
util.inherits(FindItemsAdvancedResultSet, choreography.ResultSet);
exports.FindItemsAdvanced = FindItemsAdvanced;


/*
    FindItemsByImage
    Finds items based on their image similarity to the specified item.
*/


var FindItemsByImage = function(session) {
    /*
        Create a new instance of the FindItemsByImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Finding/FindItemsByImage"
    FindItemsByImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindItemsByImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindItemsByImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindItemsByImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindItemsByImageInputSet = function() {
    FindItemsByImageInputSet.super_.call(this);
        /*
        Set the value of the FindItemsByImageRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_FindItemsByImageRequest = function(value) {
            this.setInput("FindItemsByImageRequest", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AspectFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as aspect filters for the request.)
        */
        this.set_AspectFilters = function(value) {
            this.setInput("AspectFilters", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) Filters the results by category ID.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the GlobalID input for this Choreo. ((optional, integer) The global ID of the eBay site to access (e.g., EBAY-US).)
        */
        this.set_GlobalID = function(value) {
            this.setInput("GlobalID", value);
        }

        /*
        Set the value of the ItemFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as item filters for the request.)
        */
        this.set_ItemFilters = function(value) {
            this.setInput("ItemFilters", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of an item associated with the image you want to use for matching. The item must be active and listed in a Clothing, Shoes & Accessories category (parent category ID 11450 on the eBay US site).)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the OutputSelector input for this Choreo. ((optional, string) Controls the fields that are returned in the response (e.g., GalleryInfo).)
        */
        this.set_OutputSelector = function(value) {
            this.setInput("OutputSelector", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Valid values: BestMatch, BidCountMost, CountryAscending, CountryDescending, DistanceNearest, CurrentPriceHighest, EndTimeSoonest, PricePlusShippingHighest, PricePlusShippingLowest, StartTimeNewest.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindItemsByImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindItemsByImageResultSet = function(resultStream) {
    FindItemsByImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindItemsByImage, choreography.Choreography);
util.inherits(FindItemsByImageInputSet, choreography.InputSet);
util.inherits(FindItemsByImageResultSet, choreography.ResultSet);
exports.FindItemsByImage = FindItemsByImage;


/*
    FindItemsByProduct
    Finds items based upon a product ID, such as an ISBN, UPC, EAN, or ePID.
*/


var FindItemsByProduct = function(session) {
    /*
        Create a new instance of the FindItemsByProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Finding/FindItemsByProduct"
    FindItemsByProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindItemsByProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindItemsByProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindItemsByProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindItemsByProductInputSet = function() {
    FindItemsByProductInputSet.super_.call(this);
        /*
        Set the value of the FindItemsByProductRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_FindItemsByProductRequest = function(value) {
            this.setInput("FindItemsByProductRequest", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the GlobalID input for this Choreo. ((optional, integer) The global ID of the eBay site to access (e.g., EBAY-US).)
        */
        this.set_GlobalID = function(value) {
            this.setInput("GlobalID", value);
        }

        /*
        Set the value of the ItemFilters input for this Choreo. ((optional, json) A dictionary of key/value pairs to use as item filters for the request.)
        */
        this.set_ItemFilters = function(value) {
            this.setInput("ItemFilters", value);
        }

        /*
        Set the value of the OutputSelector input for this Choreo. ((optional, string) Controls the fields that are returned in the response (e.g., GalleryInfo).)
        */
        this.set_OutputSelector = function(value) {
            this.setInput("OutputSelector", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the ProductIDType input for this Choreo. ((required, string) The type of identifier being used to find a product. Valid values are: ReferenceID, ISBN, UPC, and EAN.)
        */
        this.set_ProductIDType = function(value) {
            this.setInput("ProductIDType", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The ID of a product to find.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Valid values: BestMatch, BidCountMost, CountryAscending, CountryDescending, DistanceNearest, CurrentPriceHighest, EndTimeSoonest, PricePlusShippingHighest, PricePlusShippingLowest, StartTimeNewest.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindItemsByProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindItemsByProductResultSet = function(resultStream) {
    FindItemsByProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindItemsByProduct, choreography.Choreography);
util.inherits(FindItemsByProductInputSet, choreography.InputSet);
util.inherits(FindItemsByProductResultSet, choreography.ResultSet);
exports.FindItemsByProduct = FindItemsByProduct;


/*
    GetHistograms
    Returns category and/or aspect histogram information for the eBay category ID you specify.
*/


var GetHistograms = function(session) {
    /*
        Create a new instance of the GetHistograms Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Finding/GetHistograms"
    GetHistograms.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetHistogramsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetHistogramsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetHistograms
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetHistogramsInputSet = function() {
    GetHistogramsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((required, string) Specifies the category from which you want to retrieve histogram information. )
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the GlobalID input for this Choreo. ((optional, integer) The global ID of the eBay site to access (e.g., EBAY-US).)
        */
        this.set_GlobalID = function(value) {
            this.setInput("GlobalID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetHistograms Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetHistogramsResultSet = function(resultStream) {
    GetHistogramsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetHistograms, choreography.Choreography);
util.inherits(GetHistogramsInputSet, choreography.InputSet);
util.inherits(GetHistogramsResultSet, choreography.ResultSet);
exports.GetHistograms = GetHistograms;

