
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCompetitivePricingForASIN
    Returns the current competitive pricing of products, based on  ASIN values and the MarketplaceId that you specify.
*/


var GetCompetitivePricingForASIN = function(session) {
    /*
        Create a new instance of the GetCompetitivePricingForASIN Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetCompetitivePricingForASIN"
    GetCompetitivePricingForASIN.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompetitivePricingForASINResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompetitivePricingForASINInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompetitivePricingForASIN
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompetitivePricingForASINInputSet = function() {
    GetCompetitivePricingForASINInputSet.super_.call(this);
        /*
        Set the value of the ASIN input for this Choreo. ((required, string) A comma-separated list of up to 20 ASIN values used to identify products in the given marketplace.)
        */
        this.set_ASIN = function(value) {
            this.setInput("ASIN", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompetitivePricingForASIN Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompetitivePricingForASINResultSet = function(resultStream) {
    GetCompetitivePricingForASINResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompetitivePricingForASIN, choreography.Choreography);
util.inherits(GetCompetitivePricingForASINInputSet, choreography.InputSet);
util.inherits(GetCompetitivePricingForASINResultSet, choreography.ResultSet);
exports.GetCompetitivePricingForASIN = GetCompetitivePricingForASIN;


/*
    GetCompetitivePricingForSKU
    Returns the current competitive pricing of products, based on SellerSKU values and the MarketplaceId that you specify.
*/


var GetCompetitivePricingForSKU = function(session) {
    /*
        Create a new instance of the GetCompetitivePricingForSKU Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetCompetitivePricingForSKU"
    GetCompetitivePricingForSKU.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompetitivePricingForSKUResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompetitivePricingForSKUInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompetitivePricingForSKU
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompetitivePricingForSKUInputSet = function() {
    GetCompetitivePricingForSKUInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SellerSKU input for this Choreo. ((required, string) A comma-separated list of up to 20 SellerSKU values used to identify products in the given marketplace.)
        */
        this.set_SellerSKU = function(value) {
            this.setInput("SellerSKU", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCompetitivePricingForSKU Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompetitivePricingForSKUResultSet = function(resultStream) {
    GetCompetitivePricingForSKUResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompetitivePricingForSKU, choreography.Choreography);
util.inherits(GetCompetitivePricingForSKUInputSet, choreography.InputSet);
util.inherits(GetCompetitivePricingForSKUResultSet, choreography.ResultSet);
exports.GetCompetitivePricingForSKU = GetCompetitivePricingForSKU;


/*
    GetLowestOfferListingsForASIN
    Returns the lowest price offer listings for specific products by item condition. This method uses a MarketplaceId and ASIN values to uniquely identify products.
*/


var GetLowestOfferListingsForASIN = function(session) {
    /*
        Create a new instance of the GetLowestOfferListingsForASIN Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetLowestOfferListingsForASIN"
    GetLowestOfferListingsForASIN.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLowestOfferListingsForASINResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLowestOfferListingsForASINInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLowestOfferListingsForASIN
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLowestOfferListingsForASINInputSet = function() {
    GetLowestOfferListingsForASINInputSet.super_.call(this);
        /*
        Set the value of the ASIN input for this Choreo. ((required, string) A comma-separated list of up to 20 ASIN values used to identify products in the given marketplace.)
        */
        this.set_ASIN = function(value) {
            this.setInput("ASIN", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ItemCondition input for this Choreo. ((optional, string) Filters the offer listings to be considered based on item condition. Valid values: New, Used, Collectible, Refurbished, Club.)
        */
        this.set_ItemCondition = function(value) {
            this.setInput("ItemCondition", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLowestOfferListingsForASIN Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLowestOfferListingsForASINResultSet = function(resultStream) {
    GetLowestOfferListingsForASINResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLowestOfferListingsForASIN, choreography.Choreography);
util.inherits(GetLowestOfferListingsForASINInputSet, choreography.InputSet);
util.inherits(GetLowestOfferListingsForASINResultSet, choreography.ResultSet);
exports.GetLowestOfferListingsForASIN = GetLowestOfferListingsForASIN;


/*
    GetLowestOfferListingsForSKU
    Returns the lowest price offer listings for specific products by item condition. This method uses a MarketplaceId and SellerSKU values to uniquely identify products.
*/


var GetLowestOfferListingsForSKU = function(session) {
    /*
        Create a new instance of the GetLowestOfferListingsForSKU Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetLowestOfferListingsForSKU"
    GetLowestOfferListingsForSKU.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLowestOfferListingsForSKUResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLowestOfferListingsForSKUInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLowestOfferListingsForSKU
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLowestOfferListingsForSKUInputSet = function() {
    GetLowestOfferListingsForSKUInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ExcludeMe input for this Choreo. ((optional, boolean) Excludes your own offer listings from the offer listings that are returned. Set to "true" to exclude your own offer listings from the results. Defaults to "false".)
        */
        this.set_ExcludeMe = function(value) {
            this.setInput("ExcludeMe", value);
        }

        /*
        Set the value of the ItemCondition input for this Choreo. ((optional, string) Filters the offer listings to be considered based on item condition. Valid values: New, Used, Collectible, Refurbished, Club.)
        */
        this.set_ItemCondition = function(value) {
            this.setInput("ItemCondition", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SellerSKU input for this Choreo. ((required, string) A comma-separated list of up to 20 SellerSKU values used to identify products in the given marketplace.)
        */
        this.set_SellerSKU = function(value) {
            this.setInput("SellerSKU", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLowestOfferListingsForSKU Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLowestOfferListingsForSKUResultSet = function(resultStream) {
    GetLowestOfferListingsForSKUResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLowestOfferListingsForSKU, choreography.Choreography);
util.inherits(GetLowestOfferListingsForSKUInputSet, choreography.InputSet);
util.inherits(GetLowestOfferListingsForSKUResultSet, choreography.ResultSet);
exports.GetLowestOfferListingsForSKU = GetLowestOfferListingsForSKU;


/*
    GetMatchingProduct
    Returns a list of products and their attributes, based on ASIN values that you specify.
*/


var GetMatchingProduct = function(session) {
    /*
        Create a new instance of the GetMatchingProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetMatchingProduct"
    GetMatchingProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMatchingProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMatchingProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMatchingProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMatchingProductInputSet = function() {
    GetMatchingProductInputSet.super_.call(this);
        /*
        Set the value of the ASIN input for this Choreo. ((required, string) A comma-separated list of up to 10 ASIN values used to identify products in the given marketplace.)
        */
        this.set_ASIN = function(value) {
            this.setInput("ASIN", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMatchingProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMatchingProductResultSet = function(resultStream) {
    GetMatchingProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMatchingProduct, choreography.Choreography);
util.inherits(GetMatchingProductInputSet, choreography.InputSet);
util.inherits(GetMatchingProductResultSet, choreography.ResultSet);
exports.GetMatchingProduct = GetMatchingProduct;


/*
    GetProductCategoriesForASIN
    Returns the product categories that a product belongs to, including parent categories back to the root for the marketplace. This method uses a MarketplaceId and an ASIN to uniquely identify a product.
*/


var GetProductCategoriesForASIN = function(session) {
    /*
        Create a new instance of the GetProductCategoriesForASIN Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetProductCategoriesForASIN"
    GetProductCategoriesForASIN.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetProductCategoriesForASINResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetProductCategoriesForASINInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetProductCategoriesForASIN
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetProductCategoriesForASINInputSet = function() {
    GetProductCategoriesForASINInputSet.super_.call(this);
        /*
        Set the value of the ASIN input for this Choreo. ((required, string) An ASIN value used to identify a product in the given marketplace.)
        */
        this.set_ASIN = function(value) {
            this.setInput("ASIN", value);
        }

        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetProductCategoriesForASIN Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetProductCategoriesForASINResultSet = function(resultStream) {
    GetProductCategoriesForASINResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetProductCategoriesForASIN, choreography.Choreography);
util.inherits(GetProductCategoriesForASINInputSet, choreography.InputSet);
util.inherits(GetProductCategoriesForASINResultSet, choreography.ResultSet);
exports.GetProductCategoriesForASIN = GetProductCategoriesForASIN;


/*
    GetProductCategoriesForSKU
    Returns the product categories that a product belongs to, including parent categories back to the root for the marketplace. This method uses a MarketplaceId and a SellerSKU to uniquely identify a product.
*/


var GetProductCategoriesForSKU = function(session) {
    /*
        Create a new instance of the GetProductCategoriesForSKU Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetProductCategoriesForSKU"
    GetProductCategoriesForSKU.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetProductCategoriesForSKUResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetProductCategoriesForSKUInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetProductCategoriesForSKU
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetProductCategoriesForSKUInputSet = function() {
    GetProductCategoriesForSKUInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SellerSKU input for this Choreo. ((required, string) A SellerSKU value used to identify a product in the given marketplace.)
        */
        this.set_SellerSKU = function(value) {
            this.setInput("SellerSKU", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetProductCategoriesForSKU Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetProductCategoriesForSKUResultSet = function(resultStream) {
    GetProductCategoriesForSKUResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetProductCategoriesForSKU, choreography.Choreography);
util.inherits(GetProductCategoriesForSKUInputSet, choreography.InputSet);
util.inherits(GetProductCategoriesForSKUResultSet, choreography.ResultSet);
exports.GetProductCategoriesForSKU = GetProductCategoriesForSKU;


/*
    GetServiceStatus
    This is the standard method following MWS API GetServiceStatus standard. It can return a GREEN, GREEN_I, YELLOW or RED status.
*/


var GetServiceStatus = function(session) {
    /*
        Create a new instance of the GetServiceStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/GetServiceStatus"
    GetServiceStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetServiceStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetServiceStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetServiceStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetServiceStatusInputSet = function() {
    GetServiceStatusInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetServiceStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetServiceStatusResultSet = function(resultStream) {
    GetServiceStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Status" output from this Choreo execution. ((string) The service status parsed from the Amazon response.)
        */
        this.get_Status = function() {
            return this.getResult("Status");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetServiceStatus, choreography.Choreography);
util.inherits(GetServiceStatusInputSet, choreography.InputSet);
util.inherits(GetServiceStatusResultSet, choreography.ResultSet);
exports.GetServiceStatus = GetServiceStatus;


/*
    ListMatchingProducts
    Returns a list of products and their attributes, ordered by relevancy, based on a search query that you specify.
*/


var ListMatchingProducts = function(session) {
    /*
        Create a new instance of the ListMatchingProducts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Products/ListMatchingProducts"
    ListMatchingProducts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMatchingProductsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMatchingProductsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMatchingProducts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMatchingProductsInputSet = function() {
    ListMatchingProductsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSMarketplaceId input for this Choreo. ((required, string) The Marketplace ID provided by Amazon Web Services.)
        */
        this.set_AWSMarketplaceId = function(value) {
            this.setInput("AWSMarketplaceId", value);
        }

        /*
        Set the value of the AWSMerchantId input for this Choreo. ((required, string) The Merchant ID provided by Amazon Web Services.)
        */
        this.set_AWSMerchantId = function(value) {
            this.setInput("AWSMerchantId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A search string used to search for products.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMatchingProducts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMatchingProductsResultSet = function(resultStream) {
    ListMatchingProductsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMatchingProducts, choreography.Choreography);
util.inherits(ListMatchingProductsInputSet, choreography.InputSet);
util.inherits(ListMatchingProductsResultSet, choreography.ResultSet);
exports.ListMatchingProducts = ListMatchingProducts;

