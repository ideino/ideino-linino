
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CancelFulfillmentOrder
    Makes a requests to Amazon to cancel an existing fulfillment order.
*/


var CancelFulfillmentOrder = function(session) {
    /*
        Create a new instance of the CancelFulfillmentOrder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/OutboundShipments/CancelFulfillmentOrder"
    CancelFulfillmentOrder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CancelFulfillmentOrderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CancelFulfillmentOrderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CancelFulfillmentOrder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CancelFulfillmentOrderInputSet = function() {
    CancelFulfillmentOrderInputSet.super_.call(this);
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
        Set the value of the SellerFulfillmentOrderId input for this Choreo. ((required, string) The fulfillment order id that you created and submitted using the CreateFulfillmentOrder Choreo.)
        */
        this.set_SellerFulfillmentOrderId = function(value) {
            this.setInput("SellerFulfillmentOrderId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CancelFulfillmentOrder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CancelFulfillmentOrderResultSet = function(resultStream) {
    CancelFulfillmentOrderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CancelFulfillmentOrder, choreography.Choreography);
util.inherits(CancelFulfillmentOrderInputSet, choreography.InputSet);
util.inherits(CancelFulfillmentOrderResultSet, choreography.ResultSet);
exports.CancelFulfillmentOrder = CancelFulfillmentOrder;


/*
    ListAllFulfillmentOrders
    Returns a list of fulfillment orders fulfilled after (or at) a specified date or by fulfillment method.
*/


var ListAllFulfillmentOrders = function(session) {
    /*
        Create a new instance of the ListAllFulfillmentOrders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/OutboundShipments/ListAllFulfillmentOrders"
    ListAllFulfillmentOrders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllFulfillmentOrdersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllFulfillmentOrdersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllFulfillmentOrders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllFulfillmentOrdersInputSet = function() {
    ListAllFulfillmentOrdersInputSet.super_.call(this);
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
        Set the value of the FulfillmentMethod input for this Choreo. ((optional, string) A value used for selecting fulfillment orders based on their fulfillment method. "Consumer" indicates a customer order, and "Removal" indicates that the inventory should be returned to the specified.)
        */
        this.set_FulfillmentMethod = function(value) {
            this.setInput("FulfillmentMethod", value);
        }

        /*
        Set the value of the QueryStartDateTime input for this Choreo. ((optional, date) A date used for selecting items that have had changes in inventory availability after (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01).)
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

}

/*
A ResultSet with methods tailored to the values returned by the ListAllFulfillmentOrders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllFulfillmentOrdersResultSet = function(resultStream) {
    ListAllFulfillmentOrdersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllFulfillmentOrders, choreography.Choreography);
util.inherits(ListAllFulfillmentOrdersInputSet, choreography.InputSet);
util.inherits(ListAllFulfillmentOrdersResultSet, choreography.ResultSet);
exports.ListAllFulfillmentOrders = ListAllFulfillmentOrders;

