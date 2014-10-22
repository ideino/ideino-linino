
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetOrder
    Returns orders based on the AmazonOrderId values that you specify.
*/


var GetOrder = function(session) {
    /*
        Create a new instance of the GetOrder Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Orders/GetOrder"
    GetOrder.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetOrderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetOrderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetOrder
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetOrderInputSet = function() {
    GetOrderInputSet.super_.call(this);
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
        Set the value of the AmazonOrderId input for this Choreo. ((required, string) An AmazonOrderId value used to retrieve the order.)
        */
        this.set_AmazonOrderId = function(value) {
            this.setInput("AmazonOrderId", value);
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
A ResultSet with methods tailored to the values returned by the GetOrder Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetOrderResultSet = function(resultStream) {
    GetOrderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetOrder, choreography.Choreography);
util.inherits(GetOrderInputSet, choreography.InputSet);
util.inherits(GetOrderResultSet, choreography.ResultSet);
exports.GetOrder = GetOrder;


/*
    ListOrders
    Returns orders created during a time frame that you specify.
*/


var ListOrders = function(session) {
    /*
        Create a new instance of the ListOrders Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Orders/ListOrders"
    ListOrders.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrdersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrdersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrders
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrdersInputSet = function() {
    ListOrdersInputSet.super_.call(this);
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
        Set the value of the CreatedAfter input for this Choreo. ((optional, date) A date used for selecting orders created after (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01). Defaults to today's date if not provided.)
        */
        this.set_CreatedAfter = function(value) {
            this.setInput("CreatedAfter", value);
        }

        /*
        Set the value of the CreatedBefore input for this Choreo. ((optional, date) A date used for selecting orders created before (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01).)
        */
        this.set_CreatedBefore = function(value) {
            this.setInput("CreatedBefore", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the FullfillmentChannel input for this Choreo. ((optional, string) A string indicating how an order was fulfilled. Use "AFN" for Amazon fulfilled orders, and "MFN" for seller fulfilled orders.)
        */
        this.set_FullfillmentChannel = function(value) {
            this.setInput("FullfillmentChannel", value);
        }

        /*
        Set the value of the MaxResultsPerPage input for this Choreo. ((optional, integer) A number that indicates the maximum number of orders that can be returned per page. Valid values are: 1-100.)
        */
        this.set_MaxResultsPerPage = function(value) {
            this.setInput("MaxResultsPerPage", value);
        }

        /*
        Set the value of the OrderStatus input for this Choreo. ((optional, string) An OrderStatus value to select only orders with a certain status. Valid values are: Pending, Unshipped, PartiallyShipped, Shipped, Canceled, Unfulfillable.)
        */
        this.set_OrderStatus = function(value) {
            this.setInput("OrderStatus", value);
        }

        /*
        Set the value of the PaymentMethod input for this Choreo. ((optional, string) Used to select only orders of a certain payment type. Valid values are: COD (cash on delivery), CSV (convenience store payment), or Other (Any payment method other than COD or CVS).)
        */
        this.set_PaymentMethod = function(value) {
            this.setInput("PaymentMethod", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListOrders Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrdersResultSet = function(resultStream) {
    ListOrdersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListOrders, choreography.Choreography);
util.inherits(ListOrdersInputSet, choreography.InputSet);
util.inherits(ListOrdersResultSet, choreography.ResultSet);
exports.ListOrders = ListOrders;


/*
    ListOrdersWithBuyerEmail
    Returns orders associated with a buyer's email address that you specify.
*/


var ListOrdersWithBuyerEmail = function(session) {
    /*
        Create a new instance of the ListOrdersWithBuyerEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Orders/ListOrdersWithBuyerEmail"
    ListOrdersWithBuyerEmail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrdersWithBuyerEmailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrdersWithBuyerEmailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrdersWithBuyerEmail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrdersWithBuyerEmailInputSet = function() {
    ListOrdersWithBuyerEmailInputSet.super_.call(this);
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
        Set the value of the BuyerEmail input for this Choreo. ((required, string) The e-mail address of a buyer. Used to select only the orders that contain the specified e-mail address.)
        */
        this.set_BuyerEmail = function(value) {
            this.setInput("BuyerEmail", value);
        }

        /*
        Set the value of the CreatedAfter input for this Choreo. ((optional, date) A date used for selecting orders created after (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01). Defaults to today's date if not provided.)
        */
        this.set_CreatedAfter = function(value) {
            this.setInput("CreatedAfter", value);
        }

        /*
        Set the value of the CreatedBefore input for this Choreo. ((optional, date) A date used for selecting orders created before (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01).)
        */
        this.set_CreatedBefore = function(value) {
            this.setInput("CreatedBefore", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the MaxResultsPerPage input for this Choreo. ((optional, integer) A number that indicates the maximum number of orders that can be returned per page. Valid values are: 1-100.)
        */
        this.set_MaxResultsPerPage = function(value) {
            this.setInput("MaxResultsPerPage", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListOrdersWithBuyerEmail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrdersWithBuyerEmailResultSet = function(resultStream) {
    ListOrdersWithBuyerEmailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListOrdersWithBuyerEmail, choreography.Choreography);
util.inherits(ListOrdersWithBuyerEmailInputSet, choreography.InputSet);
util.inherits(ListOrdersWithBuyerEmailResultSet, choreography.ResultSet);
exports.ListOrdersWithBuyerEmail = ListOrdersWithBuyerEmail;


/*
    ListOrdersWithSellerOrderId
    Returns orders associated with a seller order id that you specify.
*/


var ListOrdersWithSellerOrderId = function(session) {
    /*
        Create a new instance of the ListOrdersWithSellerOrderId Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Orders/ListOrdersWithSellerOrderId"
    ListOrdersWithSellerOrderId.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrdersWithSellerOrderIdResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrdersWithSellerOrderIdInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrdersWithSellerOrderId
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrdersWithSellerOrderIdInputSet = function() {
    ListOrdersWithSellerOrderIdInputSet.super_.call(this);
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
        Set the value of the CreatedAfter input for this Choreo. ((optional, date) A date used for selecting orders created after (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01). Defaults to today's date if not provided.)
        */
        this.set_CreatedAfter = function(value) {
            this.setInput("CreatedAfter", value);
        }

        /*
        Set the value of the CreatedBefore input for this Choreo. ((optional, date) A date used for selecting orders created before (or at) a specified time, in ISO 8601 date format (i.e. 2012-01-01).)
        */
        this.set_CreatedBefore = function(value) {
            this.setInput("CreatedBefore", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the MaxResultsPerPage input for this Choreo. ((optional, integer) A number that indicates the maximum number of orders that can be returned per page. Valid values are: 1-100.)
        */
        this.set_MaxResultsPerPage = function(value) {
            this.setInput("MaxResultsPerPage", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SellerOrderId input for this Choreo. ((required, string) An order identifier that is specified by the seller.)
        */
        this.set_SellerOrderId = function(value) {
            this.setInput("SellerOrderId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListOrdersWithSellerOrderId Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrdersWithSellerOrderIdResultSet = function(resultStream) {
    ListOrdersWithSellerOrderIdResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListOrdersWithSellerOrderId, choreography.Choreography);
util.inherits(ListOrdersWithSellerOrderIdInputSet, choreography.InputSet);
util.inherits(ListOrdersWithSellerOrderIdResultSet, choreography.ResultSet);
exports.ListOrdersWithSellerOrderId = ListOrdersWithSellerOrderId;

