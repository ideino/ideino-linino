
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FindPopularItems
    Searches for popular items based on a category or keyword.
*/


var FindPopularItems = function(session) {
    /*
        Create a new instance of the FindPopularItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/FindPopularItems"
    FindPopularItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindPopularItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindPopularItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindPopularItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindPopularItemsInputSet = function() {
    FindPopularItemsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CategoryIDExclude input for this Choreo. ((conditional, integer) The ID of a category to exclude from the result set. Multiple category IDs can be separated by commas.)
        */
        this.set_CategoryIDExclude = function(value) {
            this.setInput("CategoryIDExclude", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) The ID of a category to filter by. Multiple category IDs can be separated by commas.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the MaxEntries input for this Choreo. ((conditional, integer) The maxiumum number of entries to return in the response.)
        */
        this.set_MaxEntries = function(value) {
            this.setInput("MaxEntries", value);
        }

        /*
        Set the value of the QueryKeywords input for this Choreo. ((conditional, string) The text for a keyword search.)
        */
        this.set_QueryKeywords = function(value) {
            this.setInput("QueryKeywords", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindPopularItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindPopularItemsResultSet = function(resultStream) {
    FindPopularItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindPopularItems, choreography.Choreography);
util.inherits(FindPopularItemsInputSet, choreography.InputSet);
util.inherits(FindPopularItemsResultSet, choreography.ResultSet);
exports.FindPopularItems = FindPopularItems;


/*
    FindProducts
    Retrieves the listings for products that match the specified keywords.
*/


var FindProducts = function(session) {
    /*
        Create a new instance of the FindProducts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/FindProducts"
    FindProducts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindProductsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindProductsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindProducts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindProductsInputSet = function() {
    FindProductsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AvailableItemsOnly input for this Choreo. ((optional, boolean) If set to true, only retrieve data for products that have been used to pre-fill active listings. If false, retrieve all products that match the query. Defaults to false.)
        */
        this.set_AvailableItemsOnly = function(value) {
            this.setInput("AvailableItemsOnly", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((conditional, string) Restricts your query to a specific category. The request requires one of the following filter parameters: QueryKeywords, ProductID, or CategoryID. Only one of the filters should be provided.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the DomainName input for this Choreo. ((optional, string) A domain to search in (e.g. Textbooks).)
        */
        this.set_DomainName = function(value) {
            this.setInput("DomainName", value);
        }

        /*
        Set the value of the HideDuplicateItems input for this Choreo. ((optional, string) Specifies whether or not to remove duplicate items from search results.)
        */
        this.set_HideDuplicateItems = function(value) {
            this.setInput("HideDuplicateItems", value);
        }

        /*
        Set the value of the IncludeSelector input for this Choreo. ((optional, string) Defines standard subsets of fields to return within the response. Valid values are: Details, DomainHistogram, and Items.)
        */
        this.set_IncludeSelector = function(value) {
            this.setInput("IncludeSelector", value);
        }

        /*
        Set the value of the MaxEntries input for this Choreo. ((optional, integer) The maximum number of entries to return in the response.)
        */
        this.set_MaxEntries = function(value) {
            this.setInput("MaxEntries", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, string) The page number to retrieve.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((conditional, string) Used to retrieve product details. The request requires one of the following filter parameters: QueryKeywords, ProductID, or CategoryID. Only one of the filters should be provided.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the ProductSort input for this Choreo. ((optional, string) Sorts the list of products returned. Valid values are: ItemCount, Popularity, Rating, ReviewCount, and Title.)
        */
        this.set_ProductSort = function(value) {
            this.setInput("ProductSort", value);
        }

        /*
        Set the value of the QueryKeywords input for this Choreo. ((conditional, string) The query keywords to use for the product search. The request requires one of the following filter parameters: QueryKeywords, ProductID, or CategoryID. Only one of the filters should be provided.)
        */
        this.set_QueryKeywords = function(value) {
            this.setInput("QueryKeywords", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Sorts search results in ascending or descending order. Valid values are: Ascending and Descending.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindProducts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindProductsResultSet = function(resultStream) {
    FindProductsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindProducts, choreography.Choreography);
util.inherits(FindProductsInputSet, choreography.InputSet);
util.inherits(FindProductsResultSet, choreography.ResultSet);
exports.FindProducts = FindProducts;


/*
    GetCategoryInfo
    Retrieve high-level category information for a specified category.
*/


var GetCategoryInfo = function(session) {
    /*
        Create a new instance of the GetCategoryInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/GetCategoryInfo"
    GetCategoryInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCategoryInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCategoryInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCategoryInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCategoryInfoInputSet = function() {
    GetCategoryInfoInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((required, string) The ID of a category to retrieve. Use an ID of -1 to retrieve the root category and the top-level (level 1) meta categories.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the IncludeSelector input for this Choreo. ((optional, string) Defines standard subsets of fields to return within the response. Valid values are: ChildCategories.)
        */
        this.set_IncludeSelector = function(value) {
            this.setInput("IncludeSelector", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCategoryInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCategoryInfoResultSet = function(resultStream) {
    GetCategoryInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCategoryInfo, choreography.Choreography);
util.inherits(GetCategoryInfoInputSet, choreography.InputSet);
util.inherits(GetCategoryInfoResultSet, choreography.ResultSet);
exports.GetCategoryInfo = GetCategoryInfo;


/*
    GetItemStatus
    Allows you to get the status for a group of items.
*/


var GetItemStatus = function(session) {
    /*
        Create a new instance of the GetItemStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/GetItemStatus"
    GetItemStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetItemStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetItemStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetItemStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetItemStatusInputSet = function() {
    GetItemStatusInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of an item to retrieve the status for. Multiple item IDs can be separated by commas.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetItemStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetItemStatusResultSet = function(resultStream) {
    GetItemStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetItemStatus, choreography.Choreography);
util.inherits(GetItemStatusInputSet, choreography.InputSet);
util.inherits(GetItemStatusResultSet, choreography.ResultSet);
exports.GetItemStatus = GetItemStatus;


/*
    GetMultipleItems
    Retrieves publicly available data for one or more listings.
*/


var GetMultipleItems = function(session) {
    /*
        Create a new instance of the GetMultipleItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/GetMultipleItems"
    GetMultipleItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMultipleItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMultipleItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMultipleItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMultipleItemsInputSet = function() {
    GetMultipleItemsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of an item to retrieve the status for. Multiple item IDs can be separated by commas.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMultipleItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMultipleItemsResultSet = function(resultStream) {
    GetMultipleItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMultipleItems, choreography.Choreography);
util.inherits(GetMultipleItemsInputSet, choreography.InputSet);
util.inherits(GetMultipleItemsResultSet, choreography.ResultSet);
exports.GetMultipleItems = GetMultipleItems;


/*
    GetShippingCosts
    Retrieves shipping costs for an item.
*/


var GetShippingCosts = function(session) {
    /*
        Create a new instance of the GetShippingCosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/GetShippingCosts"
    GetShippingCosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetShippingCostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetShippingCostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetShippingCosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetShippingCostsInputSet = function() {
    GetShippingCostsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the DestinationCountryCode input for this Choreo. ((conditional, string) The shipment destination country code.)
        */
        this.set_DestinationCountryCode = function(value) {
            this.setInput("DestinationCountryCode", value);
        }

        /*
        Set the value of the DestinationPostalCode input for this Choreo. ((conditional, string) The shipment destination postal code.)
        */
        this.set_DestinationPostalCode = function(value) {
            this.setInput("DestinationPostalCode", value);
        }

        /*
        Set the value of the IncludeDetails input for this Choreo. ((conditional, boolean) Indicates whether to return the ShippingDetails container in the response.)
        */
        this.set_IncludeDetails = function(value) {
            this.setInput("IncludeDetails", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of the item to get shipping costs for.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the QuantitySold input for this Choreo. ((optional, string) The quantity of items being shipped.)
        */
        this.set_QuantitySold = function(value) {
            this.setInput("QuantitySold", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShippingCosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShippingCostsResultSet = function(resultStream) {
    GetShippingCostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetShippingCosts, choreography.Choreography);
util.inherits(GetShippingCostsInputSet, choreography.InputSet);
util.inherits(GetShippingCostsResultSet, choreography.ResultSet);
exports.GetShippingCosts = GetShippingCosts;


/*
    GetUserProfile
    Retrieves public user information based on the user ID you specify.
*/


var GetUserProfile = function(session) {
    /*
        Create a new instance of the GetUserProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Shopping/GetUserProfile"
    GetUserProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserProfileInputSet = function() {
    GetUserProfileInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to return the profile for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserProfileResultSet = function(resultStream) {
    GetUserProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserProfile, choreography.Choreography);
util.inherits(GetUserProfileInputSet, choreography.InputSet);
util.inherits(GetUserProfileResultSet, choreography.ResultSet);
exports.GetUserProfile = GetUserProfile;

