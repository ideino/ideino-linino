
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListInventorySupplyByDateRange
    Returns information about the availability of a seller's inventory using a given date range.
*/


var ListInventorySupplyByDateRange = function(session) {
    /*
        Create a new instance of the ListInventorySupplyByDateRange Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Inventory/ListInventorySupplyByDateRange"
    ListInventorySupplyByDateRange.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInventorySupplyByDateRangeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInventorySupplyByDateRangeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInventorySupplyByDateRange
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInventorySupplyByDateRangeInputSet = function() {
    ListInventorySupplyByDateRangeInputSet.super_.call(this);
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
        Set the value of the PageToken input for this Choreo. ((conditional, string) The value returned in the NextPageToken output of this Choreo when there are multiple pages of inventory items to retrieve. Required unless providing QueryStartDateTime.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the QueryStartDateTime input for this Choreo. ((conditional, date) A date used for selecting items that have had changes in inventory availability after (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01). Required unless providing PageToken.)
        */
        this.set_QueryStartDateTime = function(value) {
            this.setInput("QueryStartDateTime", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ResponseGroup input for this Choreo. ((optional, string) Indicates whether or not to return the SupplyDetail element in the response. Valid values are: "Basic" (does not include SupplyDetail), and "Detailed" (includes SupplyDetail). Defaults to "Basic".)
        */
        this.set_ResponseGroup = function(value) {
            this.setInput("ResponseGroup", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInventorySupplyByDateRange Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInventorySupplyByDateRangeResultSet = function(resultStream) {
    ListInventorySupplyByDateRangeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NextPageToken" output from this Choreo execution. ((string) A token used to retrieve the next page of results. If a token is not returned, there are no more results to retrieve. This token can be passed to the PageToken input of this Choreo.)
        */
        this.get_NextPageToken = function() {
            return this.getResult("NextPageToken");
        }
}

util.inherits(ListInventorySupplyByDateRange, choreography.Choreography);
util.inherits(ListInventorySupplyByDateRangeInputSet, choreography.InputSet);
util.inherits(ListInventorySupplyByDateRangeResultSet, choreography.ResultSet);
exports.ListInventorySupplyByDateRange = ListInventorySupplyByDateRange;


/*
    ListInventorySupplyBySKU
    Returns information about the availability of a seller's inventory using a given SellerSKU.
*/


var ListInventorySupplyBySKU = function(session) {
    /*
        Create a new instance of the ListInventorySupplyBySKU Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Inventory/ListInventorySupplyBySKU"
    ListInventorySupplyBySKU.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInventorySupplyBySKUResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInventorySupplyBySKUInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInventorySupplyBySKU
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInventorySupplyBySKUInputSet = function() {
    ListInventorySupplyBySKUInputSet.super_.call(this);
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
        Set the value of the ResponseGroup input for this Choreo. ((optional, string) Indicates whether or not to return the SupplyDetail element in the response. Valid values are: "Basic" (does not include SupplyDetail), and "Detailed" (includes SupplyDetail). Defaults to "Basic".)
        */
        this.set_ResponseGroup = function(value) {
            this.setInput("ResponseGroup", value);
        }

        /*
        Set the value of the SellerSKU input for this Choreo. ((required, string) A seller SKU for an item that you want inventory availability information about.)
        */
        this.set_SellerSKU = function(value) {
            this.setInput("SellerSKU", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInventorySupplyBySKU Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInventorySupplyBySKUResultSet = function(resultStream) {
    ListInventorySupplyBySKUResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListInventorySupplyBySKU, choreography.Choreography);
util.inherits(ListInventorySupplyBySKUInputSet, choreography.InputSet);
util.inherits(ListInventorySupplyBySKUResultSet, choreography.ResultSet);
exports.ListInventorySupplyBySKU = ListInventorySupplyBySKU;

