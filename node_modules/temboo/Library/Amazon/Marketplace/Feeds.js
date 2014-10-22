
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddOrUpdateInventoryItem
    Add or update an individual inventory listing.
*/


var AddOrUpdateInventoryItem = function(session) {
    /*
        Create a new instance of the AddOrUpdateInventoryItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/AddOrUpdateInventoryItem"
    AddOrUpdateInventoryItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddOrUpdateInventoryItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddOrUpdateInventoryItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddOrUpdateInventoryItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddOrUpdateInventoryItemInputSet = function() {
    AddOrUpdateInventoryItemInputSet.super_.call(this);
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
        Set the value of the ExpeditedShipping input for this Choreo. ((optional, string) The expedited shipping options that you offer for this item. Valid values: 3 = UK Only; N = None, no express delivery offered.)
        */
        this.set_ExpeditedShipping = function(value) {
            this.setInput("ExpeditedShipping", value);
        }

        /*
        Set the value of the FulfillmentCenterId input for this Choreo. ((conditional, string) For those merchants using Amazon fulfillment services, this designates which fulfillment network will be used. Required when using Amazon fulfillment services. Valid values are: AMAZON_EU, DEFAULT.)
        */
        this.set_FulfillmentCenterId = function(value) {
            this.setInput("FulfillmentCenterId", value);
        }

        /*
        Set the value of the ItemCondition input for this Choreo. ((conditional, integer) A numerical entry that indicates the condition of the item. Required for new listings. Valid values are: 1-11. See documentation for description of item condition numeric values.)
        */
        this.set_ItemCondition = function(value) {
            this.setInput("ItemCondition", value);
        }

        /*
        Set the value of the ItemNote input for this Choreo. ((optional, string) A description or note for the item you're adding or updating.)
        */
        this.set_ItemNote = function(value) {
            this.setInput("ItemNote", value);
        }

        /*
        Set the value of the Price input for this Choreo. ((conditional, decimal) The price at which the merchant offers the product for sale. Required if ProductId is provided.)
        */
        this.set_Price = function(value) {
            this.setInput("Price", value);
        }

        /*
        Set the value of the ProductIdType input for this Choreo. ((conditional, integer) The type of standard, unique identifier entered in the product-id field. This is a required field if product-id is provided. Valid values are: 1 (ASIN), 2 (ISBN), 3 (UPC), 4  (EAN).)
        */
        this.set_ProductIdType = function(value) {
            this.setInput("ProductIdType", value);
        }

        /*
        Set the value of the ProductId input for this Choreo. ((conditional, string) A standard, alphanumeric string that uniquely identifies the product. This could be a UPC, EAN or ISBN.  This is a required field if product-id-type is provided.)
        */
        this.set_ProductId = function(value) {
            this.setInput("ProductId", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((conditional, integer) Enter the quantity of the item you are making available for sale. Required for merchant-fulfilled items. Leave blank for amazon-fullfilled items.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the SKU input for this Choreo. ((required, string) A unique identifier for the product, assigned by the merchant. The SKU must be unique for each product listed.)
        */
        this.set_SKU = function(value) {
            this.setInput("SKU", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

        /*
        Set the value of the WillShipInternationally input for this Choreo. ((optional, integer) Specify your international shipping options. Valid values are: 3 = UK Only; 4 = UK and Europe; 5 = UK, Europe, and North America; 6 = Worldwide)
        */
        this.set_WillShipInternationally = function(value) {
            this.setInput("WillShipInternationally", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddOrUpdateInventoryItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddOrUpdateInventoryItemResultSet = function(resultStream) {
    AddOrUpdateInventoryItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the product submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
}

util.inherits(AddOrUpdateInventoryItem, choreography.Choreography);
util.inherits(AddOrUpdateInventoryItemInputSet, choreography.InputSet);
util.inherits(AddOrUpdateInventoryItemResultSet, choreography.ResultSet);
exports.AddOrUpdateInventoryItem = AddOrUpdateInventoryItem;


/*
    AddOrUpdateInventoryItems
    Adds or updates one or more inventory listings in your Seller Central account with a given flat flile.
*/


var AddOrUpdateInventoryItems = function(session) {
    /*
        Create a new instance of the AddOrUpdateInventoryItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/AddOrUpdateInventoryItems"
    AddOrUpdateInventoryItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddOrUpdateInventoryItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddOrUpdateInventoryItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddOrUpdateInventoryItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddOrUpdateInventoryItemsInputSet = function() {
    AddOrUpdateInventoryItemsInputSet.super_.call(this);
        /*
        Set the value of the FeedData input for this Choreo. ((conditional, multiline) The feed data to sumbit to Amazon Marketplace.)
        */
        this.set_FeedData = function(value) {
            this.setInput("FeedData", value);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the vault file you want to submit. Required unless you using the FeedData input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the AddOrUpdateInventoryItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddOrUpdateInventoryItemsResultSet = function(resultStream) {
    AddOrUpdateInventoryItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
}

util.inherits(AddOrUpdateInventoryItems, choreography.Choreography);
util.inherits(AddOrUpdateInventoryItemsInputSet, choreography.InputSet);
util.inherits(AddOrUpdateInventoryItemsResultSet, choreography.ResultSet);
exports.AddOrUpdateInventoryItems = AddOrUpdateInventoryItems;


/*
    AddOrUpdateProductImage
    Adds or updates a product image with a given image location and SKU.
*/


var AddOrUpdateProductImage = function(session) {
    /*
        Create a new instance of the AddOrUpdateProductImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/AddOrUpdateProductImage"
    AddOrUpdateProductImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddOrUpdateProductImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddOrUpdateProductImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddOrUpdateProductImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddOrUpdateProductImageInputSet = function() {
    AddOrUpdateProductImageInputSet.super_.call(this);
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
        Set the value of the ImageLocation input for this Choreo. ((required, string) The URL for the image location.)
        */
        this.set_ImageLocation = function(value) {
            this.setInput("ImageLocation", value);
        }

        /*
        Set the value of the ImageType input for this Choreo. ((optional, string) The type of image (Main, Alternate, or Swatch). Defaults to "Main".)
        */
        this.set_ImageType = function(value) {
            this.setInput("ImageType", value);
        }

        /*
        Set the value of the SKU input for this Choreo. ((required, string) A SKU is a "Stock Keeping Unit" which you can assign to your products to track your inventory. Provide the SKU for the product that is associated with the image you are uploading.)
        */
        this.set_SKU = function(value) {
            this.setInput("SKU", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddOrUpdateProductImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddOrUpdateProductImageResultSet = function(resultStream) {
    AddOrUpdateProductImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
}

util.inherits(AddOrUpdateProductImage, choreography.Choreography);
util.inherits(AddOrUpdateProductImageInputSet, choreography.InputSet);
util.inherits(AddOrUpdateProductImageResultSet, choreography.ResultSet);
exports.AddOrUpdateProductImage = AddOrUpdateProductImage;


/*
    DeleteInventoryItem
    Deletes an individual inventory listings from a Seller Central account with a given SKU.
*/


var DeleteInventoryItem = function(session) {
    /*
        Create a new instance of the DeleteInventoryItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/DeleteInventoryItem"
    DeleteInventoryItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInventoryItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInventoryItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInventoryItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInventoryItemInputSet = function() {
    DeleteInventoryItemInputSet.super_.call(this);
        /*
        Set the value of the SKU input for this Choreo. ((required, string) A individual SKU associating with the product to delete.)
        */
        this.set_SKU = function(value) {
            this.setInput("SKU", value);
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
        Set the value of the DeleteOptions input for this Choreo. ((optional, string) Use 'd' to reduce the listings inventory to 0 and keep details in the system. Use 'x'  to completely delete listings from your current inventory. Defaults to "d".)
        */
        this.set_DeleteOptions = function(value) {
            this.setInput("DeleteOptions", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the vault file you want to submit.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInventoryItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInventoryItemResultSet = function(resultStream) {
    DeleteInventoryItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
}

util.inherits(DeleteInventoryItem, choreography.Choreography);
util.inherits(DeleteInventoryItemInputSet, choreography.InputSet);
util.inherits(DeleteInventoryItemResultSet, choreography.ResultSet);
exports.DeleteInventoryItem = DeleteInventoryItem;


/*
    DeleteInventoryItems
    Deletes inventory listings from a Seller Central account with a given flat file of SKUs.
*/


var DeleteInventoryItems = function(session) {
    /*
        Create a new instance of the DeleteInventoryItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/DeleteInventoryItems"
    DeleteInventoryItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInventoryItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInventoryItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInventoryItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInventoryItemsInputSet = function() {
    DeleteInventoryItemsInputSet.super_.call(this);
        /*
        Set the value of the SKUs input for this Choreo. ((conditional, multiline) The list of SKUs associating with the products to delete. SKUs are provided as Tab Delimited values (do not include a sku column name).)
        */
        this.set_SKUs = function(value) {
            this.setInput("SKUs", value);
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
        Set the value of the DeleteOptions input for this Choreo. ((optional, string) Use 'd' to reduce the listings inventory to 0 and keep details in the system. Use 'x'  to completely delete listings from your current inventory. Defaults to "d".)
        */
        this.set_DeleteOptions = function(value) {
            this.setInput("DeleteOptions", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the vault file you want to submit.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInventoryItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInventoryItemsResultSet = function(resultStream) {
    DeleteInventoryItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInventoryItems, choreography.Choreography);
util.inherits(DeleteInventoryItemsInputSet, choreography.InputSet);
util.inherits(DeleteInventoryItemsResultSet, choreography.ResultSet);
exports.DeleteInventoryItems = DeleteInventoryItems;


/*
    GetFeedSubmissionList
    Returns a list of all feed submissions submitted in the previous 90 days.
*/


var GetFeedSubmissionList = function(session) {
    /*
        Create a new instance of the GetFeedSubmissionList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/GetFeedSubmissionList"
    GetFeedSubmissionList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFeedSubmissionListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFeedSubmissionListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFeedSubmissionList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFeedSubmissionListInputSet = function() {
    GetFeedSubmissionListInputSet.super_.call(this);
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
        Set the value of the FeedProcessingStatusList input for this Choreo. ((optional, string) A comma separated list of one or more feed processing statuses by which to filter the list of feed submissions.)
        */
        this.set_FeedProcessingStatusList = function(value) {
            this.setInput("FeedProcessingStatusList", value);
        }

        /*
        Set the value of the FeedSubmissionIdList input for this Choreo. ((optional, string) A comma separated list of FeedSubmmissionId values. If you pass in FeedSubmmissionId values in a request, other query conditions are ignored.)
        */
        this.set_FeedSubmissionIdList = function(value) {
            this.setInput("FeedSubmissionIdList", value);
        }

        /*
        Set the value of the FeedTypeList input for this Choreo. ((optional, string) A comma separated list of one or more FeedType enumeration values by which to filter the list of feed submissions.)
        */
        this.set_FeedTypeList = function(value) {
            this.setInput("FeedTypeList", value);
        }

        /*
        Set the value of the MaxCount input for this Choreo. ((optional, integer) A non-negative integer that indicates the maximum number of feed submissions to return in the list. Defaults to 10. Max is 100.)
        */
        this.set_MaxCount = function(value) {
            this.setInput("MaxCount", value);
        }

        /*
        Set the value of the SubmittedFromDate input for this Choreo. ((optional, date) The earliest submission date that you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_SubmittedFromDate = function(value) {
            this.setInput("SubmittedFromDate", value);
        }

        /*
        Set the value of the SubmittedToDate input for this Choreo. ((optional, date) The latest submission date that you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_SubmittedToDate = function(value) {
            this.setInput("SubmittedToDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFeedSubmissionList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFeedSubmissionListResultSet = function(resultStream) {
    GetFeedSubmissionListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "FeedProcessingStatus" output from this Choreo execution. ((string) The FeedProcessingStatus parsed from the Amazon response.)
        */
        this.get_FeedProcessingStatus = function() {
            return this.getResult("FeedProcessingStatus");
        }
        /*
        Retrieve the value for the "FeedSubmissionId" output from this Choreo execution. ((integer) The FeedSubmissionId parsed from the Amazon response. If multiple records are returned, this output variable will contain the first id in the list.)
        */
        this.get_FeedSubmissionId = function() {
            return this.getResult("FeedSubmissionId");
        }
}

util.inherits(GetFeedSubmissionList, choreography.Choreography);
util.inherits(GetFeedSubmissionListInputSet, choreography.InputSet);
util.inherits(GetFeedSubmissionListResultSet, choreography.ResultSet);
exports.GetFeedSubmissionList = GetFeedSubmissionList;


/*
    GetFeedSubmissionResult
    Returns the feed processing report and the Content-MD5 header.
*/


var GetFeedSubmissionResult = function(session) {
    /*
        Create a new instance of the GetFeedSubmissionResult Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/GetFeedSubmissionResult"
    GetFeedSubmissionResult.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFeedSubmissionResultResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFeedSubmissionResultInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFeedSubmissionResult
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFeedSubmissionResultInputSet = function() {
    GetFeedSubmissionResultInputSet.super_.call(this);
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
        Set the value of the FeedSubmissionId input for this Choreo. ((required, string) A FeedSubmmissionId value.)
        */
        this.set_FeedSubmissionId = function(value) {
            this.setInput("FeedSubmissionId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFeedSubmissionResult Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFeedSubmissionResultResultSet = function(resultStream) {
    GetFeedSubmissionResultResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ContentMD5Header" output from this Choreo execution. ((string) The Content MD5 header returned from Amazon. This can used to check against an MD5 hash that you generate before submitting the feed to verify that the feed was submitted correctly.)
        */
        this.get_ContentMD5Header = function() {
            return this.getResult("ContentMD5Header");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFeedSubmissionResult, choreography.Choreography);
util.inherits(GetFeedSubmissionResultInputSet, choreography.InputSet);
util.inherits(GetFeedSubmissionResultResultSet, choreography.ResultSet);
exports.GetFeedSubmissionResult = GetFeedSubmissionResult;


/*
    SubmitFeed
    Submits a feed, of the specified type, to Amazon Marketplace.
*/


var SubmitFeed = function(session) {
    /*
        Create a new instance of the SubmitFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/SubmitFeed"
    SubmitFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SubmitFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SubmitFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SubmitFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SubmitFeedInputSet = function() {
    SubmitFeedInputSet.super_.call(this);
        /*
        Set the value of the FeedData input for this Choreo. ((conditional, multiline) The feed data to submit to Amazon Marketplace.)
        */
        this.set_FeedData = function(value) {
            this.setInput("FeedData", value);
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
        Set the value of the FeedType input for this Choreo. ((optional, string) The type of feed being submitted.  Default value is set to  _POST_FLAT_FILE_INVLOADER_DATA_).)
        */
        this.set_FeedType = function(value) {
            this.setInput("FeedType", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to the vault file you want to submit. Required unless you using the FeedData input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the SubmitFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SubmitFeedResultSet = function(resultStream) {
    SubmitFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
}

util.inherits(SubmitFeed, choreography.Choreography);
util.inherits(SubmitFeedInputSet, choreography.InputSet);
util.inherits(SubmitFeedResultSet, choreography.ResultSet);
exports.SubmitFeed = SubmitFeed;


/*
    UpdatePriceAndQuantity
    Updates only the price and quantity of a particular product with a given product SKU.
*/


var UpdatePriceAndQuantity = function(session) {
    /*
        Create a new instance of the UpdatePriceAndQuantity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Feeds/UpdatePriceAndQuantity"
    UpdatePriceAndQuantity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdatePriceAndQuantityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdatePriceAndQuantityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdatePriceAndQuantity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdatePriceAndQuantityInputSet = function() {
    UpdatePriceAndQuantityInputSet.super_.call(this);
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
        Set the value of the Price input for this Choreo. ((required, decimal) Enter the unit price for this product. The price must be greater than 0.00. Do NOT include the currency symbol (e.g. $).)
        */
        this.set_Price = function(value) {
            this.setInput("Price", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((required, integer) Enter the quantity of the product you have for sale. The quantity must be a whole number, and should be greater than zero.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the SKU input for this Choreo. ((required, string) A SKU is a "Stock Keeping Unit" which you can assign to your products to track your inventory. Provide the SKU that you want to modify.)
        */
        this.set_SKU = function(value) {
            this.setInput("SKU", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdatePriceAndQuantity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdatePriceAndQuantityResultSet = function(resultStream) {
    UpdatePriceAndQuantityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ProcessingStatus" output from this Choreo execution. ((string) The processing status of the feed submission which is parsed from the Amazon response.)
        */
        this.get_ProcessingStatus = function() {
            return this.getResult("ProcessingStatus");
        }
        /*
        Retrieve the value for the "SubmissionId" output from this Choreo execution. ((integer) The submission id parsed from the Amazon response.)
        */
        this.get_SubmissionId = function() {
            return this.getResult("SubmissionId");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon after submitting the feed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "SubmissionResult" output from this Choreo execution. ((string) The submission result returned from Amazon.)
        */
        this.get_SubmissionResult = function() {
            return this.getResult("SubmissionResult");
        }
}

util.inherits(UpdatePriceAndQuantity, choreography.Choreography);
util.inherits(UpdatePriceAndQuantityInputSet, choreography.InputSet);
util.inherits(UpdatePriceAndQuantityResultSet, choreography.ResultSet);
exports.UpdatePriceAndQuantity = UpdatePriceAndQuantity;

