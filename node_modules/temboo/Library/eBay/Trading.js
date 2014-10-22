
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddBasicListing
    Allows you create a basic listing on eBay using scalar inputs rather than an XML request.
*/


var AddBasicListing = function(session) {
    /*
        Create a new instance of the AddBasicListing Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/AddBasicListing"
    AddBasicListing.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddBasicListingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddBasicListingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddBasicListing
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddBasicListingInputSet = function() {
    AddBasicListingInputSet.super_.call(this);
        /*
        Set the value of the BuyItNowPrice input for this Choreo. ((optional, decimal) Allows a user to purchase the item at a Buy It Now price and end the auction immediately.)
        */
        this.set_BuyItNowPrice = function(value) {
            this.setInput("BuyItNowPrice", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((conditional, integer) The numeric ID for a category on eBay. Category IDs can be retrieved with the GetCategories Choreo.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the ConditionID input for this Choreo. ((conditional, integer) The numeric ID (e.g., 1000) for the item condition.)
        */
        this.set_ConditionID = function(value) {
            this.setInput("ConditionID", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((conditional, string) The country where the item is located in.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((conditional, string) The currency associated with the item price.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the DispatchTimeMax input for this Choreo. ((conditional, integer) Specifies the maximum number of business days the seller commits to for preparing an item to be shipped after receiving a cleared payment.)
        */
        this.set_DispatchTimeMax = function(value) {
            this.setInput("DispatchTimeMax", value);
        }

        /*
        Set the value of the ExpeditedService input for this Choreo. ((optional, boolean) Whether or not the seller is offering expedited shipping service options.)
        */
        this.set_ExpeditedService = function(value) {
            this.setInput("ExpeditedService", value);
        }

        /*
        Set the value of the ItemDescription input for this Choreo. ((conditional, string) The seller's description of the item.)
        */
        this.set_ItemDescription = function(value) {
            this.setInput("ItemDescription", value);
        }

        /*
        Set the value of the ListingDuration input for this Choreo. ((conditional, string) The number of days the seller wants the listing to be active (e.g., Days_7). A complete list of accepted values is returned when calling GetCategoryFeatures with DetailLevel set to ReturnAll.)
        */
        this.set_ListingDuration = function(value) {
            this.setInput("ListingDuration", value);
        }

        /*
        Set the value of the ListingType input for this Choreo. ((optional, string) The format of the listing the seller wants to use. Valid values are: AdType, Chinese, FixedPriceItem, Half, LeadGeneration.)
        */
        this.set_ListingType = function(value) {
            this.setInput("ListingType", value);
        }

        /*
        Set the value of the PayPalEmailAddress input for this Choreo. ((conditional, string) The seller's PayPal email address. Required when a PaymentMethod is PayPal.)
        */
        this.set_PayPalEmailAddress = function(value) {
            this.setInput("PayPalEmailAddress", value);
        }

        /*
        Set the value of the PaymentMethods input for this Choreo. ((conditional, string) Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. This can be a comma-separated list (e.g., VisaMC,PayPal).)
        */
        this.set_PaymentMethods = function(value) {
            this.setInput("PaymentMethods", value);
        }

        /*
        Set the value of the PictureURL input for this Choreo. ((conditional, string) The URL for a picture associated with an item.)
        */
        this.set_PictureURL = function(value) {
            this.setInput("PictureURL", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((conditional, string) The Postal code of the place where the item is located.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((conditional, integer) Indicates the quantity of items available for purchase in the listing. Required for all auction listings and for non-variation, fixed-price listings. For auction listings, this value is always '1'.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the RefundOption input for this Choreo. ((optional, string) Indicates how the seller will compensate the buyer for a returned item (e.g. MoneyBack).)
        */
        this.set_RefundOption = function(value) {
            this.setInput("RefundOption", value);
        }

        /*
        Set the value of the ReservePrice input for this Choreo. ((optional, decimal) The lowest price at which the seller is willing to sell the item.)
        */
        this.set_ReservePrice = function(value) {
            this.setInput("ReservePrice", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ReturnPolicyDescription input for this Choreo. ((optional, string) The text description of return policy details.)
        */
        this.set_ReturnPolicyDescription = function(value) {
            this.setInput("ReturnPolicyDescription", value);
        }

        /*
        Set the value of the ReturnsAcceptedOption input for this Choreo. ((conditional, string) Indicates whether the seller allows the buyer to return the item (e.g., ReturnsAccepted).)
        */
        this.set_ReturnsAcceptedOption = function(value) {
            this.setInput("ReturnsAcceptedOption", value);
        }

        /*
        Set the value of the ReturnsWithinOption input for this Choreo. ((optional, string) The period of time the buyer has to return the item (e.g., Days_14). To accepted values for this field, call GeteBayDetails with DetailName set to ReturnPolicyDetails.)
        */
        this.set_ReturnsWithinOption = function(value) {
            this.setInput("ReturnsWithinOption", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the ShippingServiceAdditionalCost input for this Choreo. ((optional, decimal) Shipping costs in addition to the value specified for the ShippingServiceCost parameter.)
        */
        this.set_ShippingServiceAdditionalCost = function(value) {
            this.setInput("ShippingServiceAdditionalCost", value);
        }

        /*
        Set the value of the ShippingServiceCost input for this Choreo. ((conditional, decimal) The cost for shipping the item.)
        */
        this.set_ShippingServiceCost = function(value) {
            this.setInput("ShippingServiceCost", value);
        }

        /*
        Set the value of the ShippingService input for this Choreo. ((conditional, string) The name of the shipping service offered (e.g. UPSGround, USPSMedia).)
        */
        this.set_ShippingService = function(value) {
            this.setInput("ShippingService", value);
        }

        /*
        Set the value of the ShippingType input for this Choreo. ((conditional, string) The shipping cost model offered by the seller. Valid values are: Calculated, CalculatedDomesticFlatInternational, Flat, FlatDomesticCalculatedInternational, FreightFlat, NotSpecified.)
        */
        this.set_ShippingType = function(value) {
            this.setInput("ShippingType", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the Site input for this Choreo. ((optional, string) The name of the site on which the item is listed. This should corresponse to the SiteID. Default value is "US".)
        */
        this.set_Site = function(value) {
            this.setInput("Site", value);
        }

        /*
        Set the value of the StartPrice input for this Choreo. ((conditional, decimal) This value indicates the starting price of the item when it is listed for the first time.)
        */
        this.set_StartPrice = function(value) {
            this.setInput("StartPrice", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the item as it appears in the listing or search results.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddBasicListing Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddBasicListingResultSet = function(resultStream) {
    AddBasicListingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddBasicListing, choreography.Choreography);
util.inherits(AddBasicListingInputSet, choreography.InputSet);
util.inherits(AddBasicListingResultSet, choreography.ResultSet);
exports.AddBasicListing = AddBasicListing;


/*
    AddItem
    Defines a single new item and lists it on a specified eBay site.
*/


var AddItem = function(session) {
    /*
        Create a new instance of the AddItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/AddItem"
    AddItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddItemInputSet = function() {
    AddItemInputSet.super_.call(this);
        /*
        Set the value of the AddItemRequest input for this Choreo. ((required, xml) The complete XML request body containing item properties you wish to set.)
        */
        this.set_AddItemRequest = function(value) {
            this.setInput("AddItemRequest", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddItemResultSet = function(resultStream) {
    AddItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddItem, choreography.Choreography);
util.inherits(AddItemInputSet, choreography.InputSet);
util.inherits(AddItemResultSet, choreography.ResultSet);
exports.AddItem = AddItem;


/*
    AddMemberMessageAAQToPartner
    Allows a buyer and seller in an order relationship to send messages to each other's My Messages Inboxes.
*/


var AddMemberMessageAAQToPartner = function(session) {
    /*
        Create a new instance of the AddMemberMessageAAQToPartner Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/AddMemberMessageAAQToPartner"
    AddMemberMessageAAQToPartner.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddMemberMessageAAQToPartnerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddMemberMessageAAQToPartnerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddMemberMessageAAQToPartner
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddMemberMessageAAQToPartnerInputSet = function() {
    AddMemberMessageAAQToPartnerInputSet.super_.call(this);
        /*
        Set the value of the Body input for this Choreo. ((required, string) The message body.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the EmailCopyToSender input for this Choreo. ((optional, boolean) A flag used to indicate that a copy should be sent to the sender.)
        */
        this.set_EmailCopyToSender = function(value) {
            this.setInput("EmailCopyToSender", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The unique ID of the item about which the question was asked.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the QuestionType input for this Choreo. ((required, string) The type of question. Valid values are: General, Shipping, Payment, MultipleItemShipping, CustomizedSubject, or None.)
        */
        this.set_QuestionType = function(value) {
            this.setInput("QuestionType", value);
        }

        /*
        Set the value of the RecipientID input for this Choreo. ((required, string) The user ID of the message recipient.)
        */
        this.set_RecipientID = function(value) {
            this.setInput("RecipientID", value);
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
        Set the value of the Subject input for this Choreo. ((required, string) The message subject.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddMemberMessageAAQToPartner Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddMemberMessageAAQToPartnerResultSet = function(resultStream) {
    AddMemberMessageAAQToPartnerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddMemberMessageAAQToPartner, choreography.Choreography);
util.inherits(AddMemberMessageAAQToPartnerInputSet, choreography.InputSet);
util.inherits(AddMemberMessageAAQToPartnerResultSet, choreography.ResultSet);
exports.AddMemberMessageAAQToPartner = AddMemberMessageAAQToPartner;


/*
    AddMemberMessageRTQ
    Allows a seller to reply to a question about an active item listing.
*/


var AddMemberMessageRTQ = function(session) {
    /*
        Create a new instance of the AddMemberMessageRTQ Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/AddMemberMessageRTQ"
    AddMemberMessageRTQ.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddMemberMessageRTQResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddMemberMessageRTQInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddMemberMessageRTQ
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddMemberMessageRTQInputSet = function() {
    AddMemberMessageRTQInputSet.super_.call(this);
        /*
        Set the value of the Body input for this Choreo. ((required, string) The message body which should answer the question that an eBay user ask the seller. HTML is not allowed.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the DisplayToPublic input for this Choreo. ((optional, string) When set to true, this indicates that the member message is viewable in the item listing.)
        */
        this.set_DisplayToPublic = function(value) {
            this.setInput("DisplayToPublic", value);
        }

        /*
        Set the value of the EmailCopyToSender input for this Choreo. ((optional, boolean) A flag used to indicate that a copy should be sent to the sender.)
        */
        this.set_EmailCopyToSender = function(value) {
            this.setInput("EmailCopyToSender", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((optional, string) The unique ID of the item about which the question was asked.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ParentMessageID input for this Choreo. ((required, string) The ID number of the question to which this message is responding.)
        */
        this.set_ParentMessageID = function(value) {
            this.setInput("ParentMessageID", value);
        }

        /*
        Set the value of the RecipientID input for this Choreo. ((required, string) The recipient's eBay user ID.)
        */
        this.set_RecipientID = function(value) {
            this.setInput("RecipientID", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddMemberMessageRTQ Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddMemberMessageRTQResultSet = function(resultStream) {
    AddMemberMessageRTQResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddMemberMessageRTQ, choreography.Choreography);
util.inherits(AddMemberMessageRTQInputSet, choreography.InputSet);
util.inherits(AddMemberMessageRTQResultSet, choreography.ResultSet);
exports.AddMemberMessageRTQ = AddMemberMessageRTQ;


/*
    AddToWatchList
    Adds one or more items to the user's My eBay watch list.
*/


var AddToWatchList = function(session) {
    /*
        Create a new instance of the AddToWatchList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/AddToWatchList"
    AddToWatchList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddToWatchListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddToWatchListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddToWatchList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddToWatchListInputSet = function() {
    AddToWatchListInputSet.super_.call(this);
        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of an item to add to a user's watch list. This can be a comma-separated list of item IDs.)
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

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddToWatchList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddToWatchListResultSet = function(resultStream) {
    AddToWatchListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddToWatchList, choreography.Choreography);
util.inherits(AddToWatchListInputSet, choreography.InputSet);
util.inherits(AddToWatchListResultSet, choreography.ResultSet);
exports.AddToWatchList = AddToWatchList;


/*
    CompleteSale
    Allows the seller to perform the final steps for completing an order.
*/


var CompleteSale = function(session) {
    /*
        Create a new instance of the CompleteSale Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/CompleteSale"
    CompleteSale.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompleteSaleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompleteSaleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompleteSale
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompleteSaleInputSet = function() {
    CompleteSaleInputSet.super_.call(this);
        /*
        Set the value of the CompleteSaleRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_CompleteSaleRequest = function(value) {
            this.setInput("CompleteSaleRequest", value);
        }

        /*
        Set the value of the CommentText input for this Choreo. ((optional, string) The comment text to leave Feedback about the buyer.)
        */
        this.set_CommentText = function(value) {
            this.setInput("CommentText", value);
        }

        /*
        Set the value of the CommentType input for this Choreo. ((optional, string) The type of comment. Valid values are: Positive.)
        */
        this.set_CommentType = function(value) {
            this.setInput("CommentType", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((conditional, string) The unique identifier for an eBay item listing that was sold. Either ItemID or TransactionID should be provided.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Notes input for this Choreo. ((optional, string) A text field for shipping related notes.)
        */
        this.set_Notes = function(value) {
            this.setInput("Notes", value);
        }

        /*
        Set the value of the OrderID input for this Choreo. ((optional, string) A unique identifier that identifies a single line item or multiple line item order.)
        */
        this.set_OrderID = function(value) {
            this.setInput("OrderID", value);
        }

        /*
        Set the value of the OrderLineItemID input for this Choreo. ((optional, string) This is a unique identifier for an eBay order line item and is based upon the concatenation of ItemID and TransactionID, with a hyphen in between these two IDs.)
        */
        this.set_OrderLineItemID = function(value) {
            this.setInput("OrderLineItemID", value);
        }

        /*
        Set the value of the Paid input for this Choreo. ((conditional, boolean) Set to true to indicate that the item has been paid for. One of Feedback info, Shipped status or Paid status is required.)
        */
        this.set_Paid = function(value) {
            this.setInput("Paid", value);
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
        Set the value of the ShipmentTrackingNumber input for this Choreo. ((optional, string) The tracking number for the package.)
        */
        this.set_ShipmentTrackingNumber = function(value) {
            this.setInput("ShipmentTrackingNumber", value);
        }

        /*
        Set the value of the ShippedTime input for this Choreo. ((optional, date) The date and time that the item was shipped.)
        */
        this.set_ShippedTime = function(value) {
            this.setInput("ShippedTime", value);
        }

        /*
        Set the value of the Shipped input for this Choreo. ((conditional, boolean) Set to true to indicate that the item has been shipped. One of Feedback info, Shipped status or Paid status is required.)
        */
        this.set_Shipped = function(value) {
            this.setInput("Shipped", value);
        }

        /*
        Set the value of the ShippingCarrierUsed input for this Choreo. ((optional, string) The carrier used to ship the item.)
        */
        this.set_ShippingCarrierUsed = function(value) {
            this.setInput("ShippingCarrierUsed", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the TargetUser input for this Choreo. ((optional, string) The user ID of the buyer who you want to leave feedback for.)
        */
        this.set_TargetUser = function(value) {
            this.setInput("TargetUser", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((conditional, string) The unique identifier for an eBay order line item (transaction). Either ItemID or TransactionID should be provided.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompleteSale Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompleteSaleResultSet = function(resultStream) {
    CompleteSaleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompleteSale, choreography.Choreography);
util.inherits(CompleteSaleInputSet, choreography.InputSet);
util.inherits(CompleteSaleResultSet, choreography.ResultSet);
exports.CompleteSale = CompleteSale;


/*
    CreateBasicListing
    Allows you create a basic listing on eBay using scalar inputs rather than an XML request.
*/


var CreateBasicListing = function(session) {
    /*
        Create a new instance of the CreateBasicListing Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/CreateBasicListing"
    CreateBasicListing.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateBasicListingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateBasicListingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateBasicListing
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateBasicListingInputSet = function() {
    CreateBasicListingInputSet.super_.call(this);
        /*
        Set the value of the BuyItNowPrice input for this Choreo. ((optional, decimal) Allows a user to purchase the item at a Buy It Now price and end the auction immediately.)
        */
        this.set_BuyItNowPrice = function(value) {
            this.setInput("BuyItNowPrice", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((conditional, integer) The numeric ID for a category on eBay. Category IDs can be retrieved with the GetCategories Choreo.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the ConditionID input for this Choreo. ((conditional, integer) The numeric ID (e.g., 1000) for the item condition.)
        */
        this.set_ConditionID = function(value) {
            this.setInput("ConditionID", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((conditional, string) The country where the item is located in.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((conditional, string) The currency associated with the item price.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the DispatchTimeMax input for this Choreo. ((conditional, integer) Specifies the maximum number of business days the seller commits to for preparing an item to be shipped after receiving a cleared payment.)
        */
        this.set_DispatchTimeMax = function(value) {
            this.setInput("DispatchTimeMax", value);
        }

        /*
        Set the value of the ExpeditedService input for this Choreo. ((optional, boolean) Whether or not the seller is offering expedited shipping service options.)
        */
        this.set_ExpeditedService = function(value) {
            this.setInput("ExpeditedService", value);
        }

        /*
        Set the value of the ItemDescription input for this Choreo. ((conditional, string) The seller's description of the item.)
        */
        this.set_ItemDescription = function(value) {
            this.setInput("ItemDescription", value);
        }

        /*
        Set the value of the ListingDuration input for this Choreo. ((conditional, string) The number of days the seller wants the listing to be active (e.g., Days_7). A complete list of accepted values is returned when calling GetCategoryFeatures with DetailLevel set to ReturnAll.)
        */
        this.set_ListingDuration = function(value) {
            this.setInput("ListingDuration", value);
        }

        /*
        Set the value of the ListingType input for this Choreo. ((optional, string) The format of the listing the seller wants to use. Valid values are: AdType, Chinese, FixedPriceItem, Half, LeadGeneration.)
        */
        this.set_ListingType = function(value) {
            this.setInput("ListingType", value);
        }

        /*
        Set the value of the PayPalEmailAddress input for this Choreo. ((conditional, string) The seller's PayPal email address. Required when a PaymentMethod is PayPal.)
        */
        this.set_PayPalEmailAddress = function(value) {
            this.setInput("PayPalEmailAddress", value);
        }

        /*
        Set the value of the PaymentMethods input for this Choreo. ((conditional, string) Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. This can be a comma-separated list (e.g., VisaMC,PayPal).)
        */
        this.set_PaymentMethods = function(value) {
            this.setInput("PaymentMethods", value);
        }

        /*
        Set the value of the PictureURL input for this Choreo. ((conditional, string) The URL for a picture associated with an item.)
        */
        this.set_PictureURL = function(value) {
            this.setInput("PictureURL", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((conditional, string) The Postal code of the place where the item is located.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((conditional, integer) Indicates the quantity of items available for purchase in the listing. Required for all auction listings and for non-variation, fixed-price listings. For auction listings, this value is always '1'.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the RefundOption input for this Choreo. ((optional, string) Indicates how the seller will compensate the buyer for a returned item (e.g. MoneyBack).)
        */
        this.set_RefundOption = function(value) {
            this.setInput("RefundOption", value);
        }

        /*
        Set the value of the ReservePrice input for this Choreo. ((optional, decimal) The lowest price at which the seller is willing to sell the item.)
        */
        this.set_ReservePrice = function(value) {
            this.setInput("ReservePrice", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ReturnPolicyDescription input for this Choreo. ((optional, string) The text description of return policy details.)
        */
        this.set_ReturnPolicyDescription = function(value) {
            this.setInput("ReturnPolicyDescription", value);
        }

        /*
        Set the value of the ReturnsAcceptedOption input for this Choreo. ((conditional, string) Indicates whether the seller allows the buyer to return the item (e.g., ReturnsAccepted).)
        */
        this.set_ReturnsAcceptedOption = function(value) {
            this.setInput("ReturnsAcceptedOption", value);
        }

        /*
        Set the value of the ReturnsWithinOption input for this Choreo. ((optional, string) The period of time the buyer has to return the item (e.g., Days_14). To accepted values for this field, call GeteBayDetails with DetailName set to ReturnPolicyDetails.)
        */
        this.set_ReturnsWithinOption = function(value) {
            this.setInput("ReturnsWithinOption", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the ShippingServiceAdditionalCost input for this Choreo. ((optional, decimal) Shipping costs in addition to the value specified for the ShippingServiceCost parameter.)
        */
        this.set_ShippingServiceAdditionalCost = function(value) {
            this.setInput("ShippingServiceAdditionalCost", value);
        }

        /*
        Set the value of the ShippingServiceCost input for this Choreo. ((conditional, decimal) The cost for shipping the item.)
        */
        this.set_ShippingServiceCost = function(value) {
            this.setInput("ShippingServiceCost", value);
        }

        /*
        Set the value of the ShippingService input for this Choreo. ((conditional, string) The name of the shipping service offered (e.g. UPSGround, USPSMedia).)
        */
        this.set_ShippingService = function(value) {
            this.setInput("ShippingService", value);
        }

        /*
        Set the value of the ShippingType input for this Choreo. ((conditional, string) The shipping cost model offered by the seller. Valid values are: Calculated, CalculatedDomesticFlatInternational, Flat, FlatDomesticCalculatedInternational, FreightFlat, NotSpecified.)
        */
        this.set_ShippingType = function(value) {
            this.setInput("ShippingType", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the Site input for this Choreo. ((optional, string) The name of the site on which the item is listed. This should corresponse to the SiteID. Default value is "US".)
        */
        this.set_Site = function(value) {
            this.setInput("Site", value);
        }

        /*
        Set the value of the StartPrice input for this Choreo. ((conditional, decimal) This value indicates the starting price of the item when it is listed for the first time.)
        */
        this.set_StartPrice = function(value) {
            this.setInput("StartPrice", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the item as it appears in the listing or search results.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateBasicListing Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateBasicListingResultSet = function(resultStream) {
    CreateBasicListingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateBasicListing, choreography.Choreography);
util.inherits(CreateBasicListingInputSet, choreography.InputSet);
util.inherits(CreateBasicListingResultSet, choreography.ResultSet);
exports.CreateBasicListing = CreateBasicListing;


/*
    EndItem
    Ends the specified item listing before the date and time that it is scheduled to end per the listing duration.
*/


var EndItem = function(session) {
    /*
        Create a new instance of the EndItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/EndItem"
    EndItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EndItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EndItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EndItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EndItemInputSet = function() {
    EndItemInputSet.super_.call(this);
        /*
        Set the value of the EndingReason input for this Choreo. ((required, string) The reason the listing is ending early. Valid values are: LostOrBroken, NotAvailable, Incorrect, OtherListingError, CustomCode, SellToHighBidder, or Sold.)
        */
        this.set_EndingReason = function(value) {
            this.setInput("EndingReason", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ID of the item to end.)
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
        Set the value of the SellerInventoryID input for this Choreo. ((optional, string) Unique identifier that the seller specified when they listed the Half.com item. This paramater only applies to Half.com.)
        */
        this.set_SellerInventoryID = function(value) {
            this.setInput("SellerInventoryID", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EndItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EndItemResultSet = function(resultStream) {
    EndItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EndItem, choreography.Choreography);
util.inherits(EndItemInputSet, choreography.InputSet);
util.inherits(EndItemResultSet, choreography.ResultSet);
exports.EndItem = EndItem;


/*
    FetchToken
    Completes the authentication process by retrieving an eBay user token after they have visited the authorization URL returned by the GetSessionID Choreo and clicked "I agree".
*/


var FetchToken = function(session) {
    /*
        Create a new instance of the FetchToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/FetchToken"
    FetchToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FetchTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FetchTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FetchToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FetchTokenInputSet = function() {
    FetchTokenInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CertID input for this Choreo. ((required, string) The certificate that authenticates the application when making API calls.)
        */
        this.set_CertID = function(value) {
            this.setInput("CertID", value);
        }

        /*
        Set the value of the DevID input for this Choreo. ((required, string) The unique identifier for the developer's account.)
        */
        this.set_DevID = function(value) {
            this.setInput("DevID", value);
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
        Set the value of the SessionID input for this Choreo. ((required, string) The SessionID returned from PayPal. This gets passed to the FetchToken Choreo after the user authorizes the request.)
        */
        this.set_SessionID = function(value) {
            this.setInput("SessionID", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the Timeout input for this Choreo. ((optional, integer) The amount of time (in seconds) to poll eBay to see if your app's user has allowed or denied the request for access. Defaults to 20. Max is 60.)
        */
        this.set_Timeout = function(value) {
            this.setInput("Timeout", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FetchToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FetchTokenResultSet = function(resultStream) {
    FetchTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "UserToken" output from this Choreo execution. ((string) An eBay Auth Token which can be used to make requests the user's behalf.)
        */
        this.get_UserToken = function() {
            return this.getResult("UserToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FetchToken, choreography.Choreography);
util.inherits(FetchTokenInputSet, choreography.InputSet);
util.inherits(FetchTokenResultSet, choreography.ResultSet);
exports.FetchToken = FetchToken;


/*
    GetCategories
    Returns the latest category hierarchy for the eBay site.
*/


var GetCategories = function(session) {
    /*
        Create a new instance of the GetCategories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetCategories"
    GetCategories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCategories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCategoriesInputSet = function() {
    GetCategoriesInputSet.super_.call(this);
        /*
        Set the value of the CategoryParent input for this Choreo. ((optional, string) Indicates the ID of the highest-level category to return. Multiple CategoryParent IDs can be specified in a comma-separated list.)
        */
        this.set_CategoryParent = function(value) {
            this.setInput("CategoryParent", value);
        }

        /*
        Set the value of the CategorySiteID input for this Choreo. ((optional, string) The ID for the site for which to retrieve the category hierarchy. Use the numeric site code (e.g., 0 for US, 77 for eBay Germany, etc).)
        */
        this.set_CategorySiteID = function(value) {
            this.setInput("CategorySiteID", value);
        }

        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The level of detail to return in the response. Valid values are: ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the LevelLimit input for this Choreo. ((optional, string) Indicates the maximum depth of the category hierarchy to retrieve, where the top-level categories (meta-categories) are at level 1. Default is 0.)
        */
        this.set_LevelLimit = function(value) {
            this.setInput("LevelLimit", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

        /*
        Set the value of the ViewAllNodes input for this Choreo. ((optional, boolean) A flag that controls whether all eBay categories are returned, or only leaf categories are returned. To retrieve leaf categories, set this parameter to 'false'.)
        */
        this.set_ViewAllNodes = function(value) {
            this.setInput("ViewAllNodes", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCategories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCategoriesResultSet = function(resultStream) {
    GetCategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCategories, choreography.Choreography);
util.inherits(GetCategoriesInputSet, choreography.InputSet);
util.inherits(GetCategoriesResultSet, choreography.ResultSet);
exports.GetCategories = GetCategories;


/*
    GetCategoryFeatures
    Returns information that describes the feature and value settings that apply to the set of eBay categories.
*/


var GetCategoryFeatures = function(session) {
    /*
        Create a new instance of the GetCategoryFeatures Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetCategoryFeatures"
    GetCategoryFeatures.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCategoryFeaturesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCategoryFeaturesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCategoryFeatures
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCategoryFeaturesInputSet = function() {
    GetCategoryFeaturesInputSet.super_.call(this);
        /*
        Set the value of the AllFeaturesForCategory input for this Choreo. ((optional, boolean) A flag used to view all of the feature settings for a specific category.)
        */
        this.set_AllFeaturesForCategory = function(value) {
            this.setInput("AllFeaturesForCategory", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) The ID of the category for which you want to retrieve the feature settings.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The level of detail to return in the response. Valid values are: ReturnAll and ReturnSummary.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the FeatureID input for this Choreo. ((optional, string) Use this field if you want to know if specific features are enabled at the site or root category level. Multiple FeatureIDs can be specified in a comma-separated list.)
        */
        this.set_FeatureID = function(value) {
            this.setInput("FeatureID", value);
        }

        /*
        Set the value of the LevelLimit input for this Choreo. ((optional, string) Indicates the maximum depth of the category hierarchy to retrieve, where the top-level categories (meta-categories) are at level 1. Default is 0.)
        */
        this.set_LevelLimit = function(value) {
            this.setInput("LevelLimit", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

        /*
        Set the value of the ViewAllNodes input for this Choreo. ((optional, boolean) Indicates that eBay should return the site defaults along with all the categories that override the feature settings they inherit. DetailLevel must be 'ReturnAll' when setting this parameter to true.)
        */
        this.set_ViewAllNodes = function(value) {
            this.setInput("ViewAllNodes", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCategoryFeatures Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCategoryFeaturesResultSet = function(resultStream) {
    GetCategoryFeaturesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCategoryFeatures, choreography.Choreography);
util.inherits(GetCategoryFeaturesInputSet, choreography.InputSet);
util.inherits(GetCategoryFeaturesResultSet, choreography.ResultSet);
exports.GetCategoryFeatures = GetCategoryFeatures;


/*
    GetEbayDetails
    Retrieves the available meta-data for the specified eBay site.
*/


var GetEbayDetails = function(session) {
    /*
        Create a new instance of the GetEbayDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetEbayDetails"
    GetEbayDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEbayDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEbayDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEbayDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEbayDetailsInputSet = function() {
    GetEbayDetailsInputSet.super_.call(this);
        /*
        Set the value of the DetailName input for this Choreo. ((optional, string) An enumeration value used to filter the result by Detail Name (e.g., PaymentOptionDetails, RegionDetail, ShippingLocationDetails, ShippingServiceDetails, SiteDetails, etc).)
        */
        this.set_DetailName = function(value) {
            this.setInput("DetailName", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEbayDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEbayDetailsResultSet = function(resultStream) {
    GetEbayDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEbayDetails, choreography.Choreography);
util.inherits(GetEbayDetailsInputSet, choreography.InputSet);
util.inherits(GetEbayDetailsResultSet, choreography.ResultSet);
exports.GetEbayDetails = GetEbayDetails;


/*
    GetEbayOfficialTime
    Gets the official eBay system time in GMT.
*/


var GetEbayOfficialTime = function(session) {
    /*
        Create a new instance of the GetEbayOfficialTime Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetEbayOfficialTime"
    GetEbayOfficialTime.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEbayOfficialTimeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEbayOfficialTimeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEbayOfficialTime
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEbayOfficialTimeInputSet = function() {
    GetEbayOfficialTimeInputSet.super_.call(this);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEbayOfficialTime Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEbayOfficialTimeResultSet = function(resultStream) {
    GetEbayOfficialTimeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEbayOfficialTime, choreography.Choreography);
util.inherits(GetEbayOfficialTimeInputSet, choreography.InputSet);
util.inherits(GetEbayOfficialTimeResultSet, choreography.ResultSet);
exports.GetEbayOfficialTime = GetEbayOfficialTime;


/*
    GetFeedback
    Retrieves the feedback left for a specified user or the summary feedback data for a specific order line item or item listing.
*/


var GetFeedback = function(session) {
    /*
        Create a new instance of the GetFeedback Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetFeedback"
    GetFeedback.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFeedbackResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFeedbackInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFeedback
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFeedbackInputSet = function() {
    GetFeedbackInputSet.super_.call(this);
        /*
        Set the value of the CommentType input for this Choreo. ((optional, string) Returns feedback of a specified type. Valid values are: Positive, Neutral, Negative, Withdrawn, IndependentlyWithdrawn.)
        */
        this.set_CommentType = function(value) {
            this.setInput("CommentType", value);
        }

        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The response detail level. Valid values are: ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the FeedbackID input for this Choreo. ((optional, string) An ID that uniquely identifies a feedback record to be retrieved)
        */
        this.set_FeedbackID = function(value) {
            this.setInput("FeedbackID", value);
        }

        /*
        Set the value of the FeedbackType input for this Choreo. ((optional, string) The type of feedback to return. Valid values are: FeedbackReceivedAsSeller, FeedbackReceivedAsBuyer, FeedbackReceived, FeedbackLeft, CustomCode.)
        */
        this.set_FeedbackType = function(value) {
            this.setInput("FeedbackType", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((optional, string) The unique identifier for an eBay item listing.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the OrderLineItemID input for this Choreo. ((optional, string) The unique identifier for an eBay order line item. This id generated by concatenating ItemID and TransactionID with a hyphen in between the IDs.)
        */
        this.set_OrderLineItemID = function(value) {
            this.setInput("OrderLineItemID", value);
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
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((optional, string) The unique identifier for an eBay order line item (transaction).)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((conditional, string) The seller's UserID.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFeedback Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFeedbackResultSet = function(resultStream) {
    GetFeedbackResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFeedback, choreography.Choreography);
util.inherits(GetFeedbackInputSet, choreography.InputSet);
util.inherits(GetFeedbackResultSet, choreography.ResultSet);
exports.GetFeedback = GetFeedback;


/*
    GetItem
    Returns item data such as title, description, price information, and seller information.
*/


var GetItem = function(session) {
    /*
        Create a new instance of the GetItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetItem"
    GetItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetItemInputSet = function() {
    GetItemInputSet.super_.call(this);
        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The response detail level. Valid values are: ItemReturnAttributes, ItemReturnDescription, and ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the IncludeItemSpecifics input for this Choreo. ((optional, boolean) If set to true, the response returns the ItemSpecifics node (if the listing has custom Item Specifics).)
        */
        this.set_IncludeItemSpecifics = function(value) {
            this.setInput("IncludeItemSpecifics", value);
        }

        /*
        Set the value of the IncludeTaxTable input for this Choreo. ((optional, boolean) If set to true, an associated tax table is returned in the response.)
        */
        this.set_IncludeTaxTable = function(value) {
            this.setInput("IncludeTaxTable", value);
        }

        /*
        Set the value of the IncludeWatchCount input for this Choreo. ((optional, boolean) Indicates if the caller wants to include watch count for that item in the response when set to true. Only the seller is allowed to use this argument.)
        */
        this.set_IncludeWatchCount = function(value) {
            this.setInput("IncludeWatchCount", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The ItemID that uniquely identifies the item listing to retrieve.)
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

        /*
        Set the value of the TransactionID input for this Choreo. ((optional, string) A unique identifier for a transaction (i.e.  an order line item). An order line item is created when the buyer commits to purchasing an item.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetItemResultSet = function(resultStream) {
    GetItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetItem, choreography.Choreography);
util.inherits(GetItemInputSet, choreography.InputSet);
util.inherits(GetItemResultSet, choreography.ResultSet);
exports.GetItem = GetItem;


/*
    GetItemTransactions
    Retrieves order line item (transaction) information for a specified ItemID.
*/


var GetItemTransactions = function(session) {
    /*
        Create a new instance of the GetItemTransactions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetItemTransactions"
    GetItemTransactions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetItemTransactionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetItemTransactionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetItemTransactions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetItemTransactionsInputSet = function() {
    GetItemTransactionsInputSet.super_.call(this);
        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The detail level of the response. Valid values are: ItemReturnDescription and ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the IncludeContainingOrder input for this Choreo. ((optional, boolean) When set to true, the ContainingOrder container is returned in the response for each transaction node.)
        */
        this.set_IncludeContainingOrder = function(value) {
            this.setInput("IncludeContainingOrder", value);
        }

        /*
        Set the value of the IncludeFinalValueFee input for this Choreo. ((optional, boolean) When set to true, the Final Value Fee (FVF) for all order line items is returned in the response.)
        */
        this.set_IncludeFinalValueFee = function(value) {
            this.setInput("IncludeFinalValueFee", value);
        }

        /*
        Set the value of the IncludeVariations input for this Choreo. ((optional, boolean) When set to true, all variations defined for the item are returned at the root level.)
        */
        this.set_IncludeVariations = function(value) {
            this.setInput("IncludeVariations", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The unique identifier for an eBay item listing.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ModTimeFrom input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_ModTimeFrom = function(value) {
            this.setInput("ModTimeFrom", value);
        }

        /*
        Set the value of the ModTimeTo input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_ModTimeTo = function(value) {
            this.setInput("ModTimeTo", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((optional, integer) The number of days in the past to search for order line items.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the OrderLineItemID input for this Choreo. ((optional, string) A unique identifier for an eBay order line item.)
        */
        this.set_OrderLineItemID = function(value) {
            this.setInput("OrderLineItemID", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the Platform input for this Choreo. ((optional, string) The name of the eBay co-branded site upon which the order line item was created. Valid values are: eBay, Express, Half, Shopping, or WorldOfGood.)
        */
        this.set_Platform = function(value) {
            this.setInput("Platform", value);
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
        Set the value of the TransactionID input for this Choreo. ((optional, string) Include a TransactionID field in the request if you want to retrieve the data for a specific order line item (transaction).)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetItemTransactions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetItemTransactionsResultSet = function(resultStream) {
    GetItemTransactionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetItemTransactions, choreography.Choreography);
util.inherits(GetItemTransactionsInputSet, choreography.InputSet);
util.inherits(GetItemTransactionsResultSet, choreography.ResultSet);
exports.GetItemTransactions = GetItemTransactions;


/*
    GetMemberMessages
    Retrieves a list of the messages that buyers have posted about your active item listings.
*/


var GetMemberMessages = function(session) {
    /*
        Create a new instance of the GetMemberMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetMemberMessages"
    GetMemberMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMemberMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMemberMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMemberMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMemberMessagesInputSet = function() {
    GetMemberMessagesInputSet.super_.call(this);
        /*
        Set the value of the DisplayToPublic input for this Choreo. ((optional, boolean) When set to true, only public messages (viewable in the Item listing) are returned.)
        */
        this.set_DisplayToPublic = function(value) {
            this.setInput("DisplayToPublic", value);
        }

        /*
        Set the value of the EndCreationTime input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_EndCreationTime = function(value) {
            this.setInput("EndCreationTime", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((optional, string) The ID of the item the message is about.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the MailMessageType input for this Choreo. ((required, string) The type of message to retrieve. Valid values are: All and AskSellerQuestion. When set to AskSellerQuestion, ItemID or a date range filter must be specified.)
        */
        this.set_MailMessageType = function(value) {
            this.setInput("MailMessageType", value);
        }

        /*
        Set the value of the MemberMessageID input for this Choreo. ((optional, string) An ID that uniquely identifies the message for a given user to be retrieved.)
        */
        this.set_MemberMessageID = function(value) {
            this.setInput("MemberMessageID", value);
        }

        /*
        Set the value of the MessageStatus input for this Choreo. ((optional, string) The status of the message. Valid values are: Answered and Unanswered.)
        */
        this.set_MessageStatus = function(value) {
            this.setInput("MessageStatus", value);
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
        Set the value of the SenderID input for this Choreo. ((optional, string) The seller's UserID.)
        */
        this.set_SenderID = function(value) {
            this.setInput("SenderID", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the StartCreationTime input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_StartCreationTime = function(value) {
            this.setInput("StartCreationTime", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMemberMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMemberMessagesResultSet = function(resultStream) {
    GetMemberMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMemberMessages, choreography.Choreography);
util.inherits(GetMemberMessagesInputSet, choreography.InputSet);
util.inherits(GetMemberMessagesResultSet, choreography.ResultSet);
exports.GetMemberMessages = GetMemberMessages;


/*
    GetSellerTransactions
    Retrieves order line item (transaction) information for the authenticated user only.
*/


var GetSellerTransactions = function(session) {
    /*
        Create a new instance of the GetSellerTransactions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetSellerTransactions"
    GetSellerTransactions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSellerTransactionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSellerTransactionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSellerTransactions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSellerTransactionsInputSet = function() {
    GetSellerTransactionsInputSet.super_.call(this);
        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The detail level of the response. Valid values are: ItemReturnDescription and ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the EntriesPerPage input for this Choreo. ((optional, integer) The maximum number of records to return in the result.)
        */
        this.set_EntriesPerPage = function(value) {
            this.setInput("EntriesPerPage", value);
        }

        /*
        Set the value of the IncludeCodiceFiscale input for this Choreo. ((optional, string) When set to 'true', the buyer's Codice Fiscale number is returned in the response.)
        */
        this.set_IncludeCodiceFiscale = function(value) {
            this.setInput("IncludeCodiceFiscale", value);
        }

        /*
        Set the value of the IncludeContainingOrder input for this Choreo. ((optional, boolean) When set to true, the ContainingOrder container is returned in the response for each transaction node.)
        */
        this.set_IncludeContainingOrder = function(value) {
            this.setInput("IncludeContainingOrder", value);
        }

        /*
        Set the value of the IncludeFinalValueFee input for this Choreo. ((optional, boolean) When set to true, the Final Value Fee (FVF) for all order line items is returned in the response.)
        */
        this.set_IncludeFinalValueFee = function(value) {
            this.setInput("IncludeFinalValueFee", value);
        }

        /*
        Set the value of the InventoryTrackingMethod input for this Choreo. ((optional, boolean) Filters the response to only include order line items for listings that match this InventoryTrackingMethod setting. Valid values are: ItemID and SKU.)
        */
        this.set_InventoryTrackingMethod = function(value) {
            this.setInput("InventoryTrackingMethod", value);
        }

        /*
        Set the value of the ModTimeFrom input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_ModTimeFrom = function(value) {
            this.setInput("ModTimeFrom", value);
        }

        /*
        Set the value of the ModTimeTo input for this Choreo. ((optional, date) Used to filter by date range (e.g., 2013-02-08T00:00:00.000Z).)
        */
        this.set_ModTimeTo = function(value) {
            this.setInput("ModTimeTo", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((optional, integer) The number of days in the past to search for order line items.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the PageNumber input for this Choreo. ((optional, integer) Specifies the page number of the results to return.)
        */
        this.set_PageNumber = function(value) {
            this.setInput("PageNumber", value);
        }

        /*
        Set the value of the Platform input for this Choreo. ((optional, string) The name of the eBay co-branded site upon which the order line item was created. Valid values are: eBay, Express, Half, Shopping, or WorldOfGood.)
        */
        this.set_Platform = function(value) {
            this.setInput("Platform", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SKU input for this Choreo. ((optional, string) One or more seller SKUs to filter the result. Multiple SKUs can be provided in a comma-separated list.)
        */
        this.set_SKU = function(value) {
            this.setInput("SKU", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSellerTransactions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSellerTransactionsResultSet = function(resultStream) {
    GetSellerTransactionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSellerTransactions, choreography.Choreography);
util.inherits(GetSellerTransactionsInputSet, choreography.InputSet);
util.inherits(GetSellerTransactionsResultSet, choreography.ResultSet);
exports.GetSellerTransactions = GetSellerTransactions;


/*
    GetSessionID
    Generates an authorization URL that an application can use to complete the first step in the authentication process.
*/


var GetSessionID = function(session) {
    /*
        Create a new instance of the GetSessionID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetSessionID"
    GetSessionID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSessionIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSessionIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSessionID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSessionIDInputSet = function() {
    GetSessionIDInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The unique identifier for the application.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the CertID input for this Choreo. ((required, string) The certificate that authenticates the application when making API calls.)
        */
        this.set_CertID = function(value) {
            this.setInput("CertID", value);
        }

        /*
        Set the value of the DevID input for this Choreo. ((required, string) The unique identifier for the developer's account.)
        */
        this.set_DevID = function(value) {
            this.setInput("DevID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RuName input for this Choreo. ((required, string) Your application's RuName which identifies your application to eBay.)
        */
        this.set_RuName = function(value) {
            this.setInput("RuName", value);
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
A ResultSet with methods tailored to the values returned by the GetSessionID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSessionIDResultSet = function(resultStream) {
    GetSessionIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "AuthorizationURL" output from this Choreo execution. ((string) The URL that you can send the user to so that they can sign-in and approve the user consent form.)
        */
        this.get_AuthorizationURL = function() {
            return this.getResult("AuthorizationURL");
        }
        /*
        Retrieve the value for the "SessionID" output from this Choreo execution. ((string) The SessionID returned from PayPal. This gets passed to the FetchToken Choreo after the user authorizes the request.)
        */
        this.get_SessionID = function() {
            return this.getResult("SessionID");
        }
}

util.inherits(GetSessionID, choreography.Choreography);
util.inherits(GetSessionIDInputSet, choreography.InputSet);
util.inherits(GetSessionIDResultSet, choreography.ResultSet);
exports.GetSessionID = GetSessionID;


/*
    GetUser
    Retrieves data pertaining to a single eBay user.
*/


var GetUser = function(session) {
    /*
        Create a new instance of the GetUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/GetUser"
    GetUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInputSet = function() {
    GetUserInputSet.super_.call(this);
        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The level of detail to return in the response. Valid values are: ReturnAll or ReturnSummary.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the IncludeFeatureEligibility input for this Choreo. ((optional, boolean) Whether or not to include feature eligibility information in the response. Set to true or false.)
        */
        this.set_IncludeFeatureEligibility = function(value) {
            this.setInput("IncludeFeatureEligibility", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((optional, string) The ID of the item of a successfully concluded listing in which the requestor and target user were participants as buyer and seller.)
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

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The eBay User ID for the user whose data you want to retrieve.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserResultSet = function(resultStream) {
    GetUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUser, choreography.Choreography);
util.inherits(GetUserInputSet, choreography.InputSet);
util.inherits(GetUserResultSet, choreography.ResultSet);
exports.GetUser = GetUser;


/*
    LeaveFeedback
    Enables a buyer and seller to leave feedback for their order partner at the conclusion of a successful order.
*/


var LeaveFeedback = function(session) {
    /*
        Create a new instance of the LeaveFeedback Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/LeaveFeedback"
    LeaveFeedback.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LeaveFeedbackResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LeaveFeedbackInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LeaveFeedback
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LeaveFeedbackInputSet = function() {
    LeaveFeedbackInputSet.super_.call(this);
        /*
        Set the value of the LeaveFeedbackRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_LeaveFeedbackRequest = function(value) {
            this.setInput("LeaveFeedbackRequest", value);
        }

        /*
        Set the value of the CommentText input for this Choreo. ((conditional, string) The comment text to leave Feedback about the buyer.)
        */
        this.set_CommentText = function(value) {
            this.setInput("CommentText", value);
        }

        /*
        Set the value of the CommentType input for this Choreo. ((conditional, string) The type of comment. Valid values are: Positive, Negative, and Neutral.)
        */
        this.set_CommentType = function(value) {
            this.setInput("CommentType", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((conditional, string) The unique identifier for an eBay item listing that was sold. Required unless OrderLineItemID is specified.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the OrderLineItemID input for this Choreo. ((optional, string) This is a unique identifier for an eBay order line item and is based upon the concatenation of ItemID and TransactionID, with a hyphen in between these two IDs.)
        */
        this.set_OrderLineItemID = function(value) {
            this.setInput("OrderLineItemID", value);
        }

        /*
        Set the value of the RatingDetail input for this Choreo. ((conditional, string) The subject that is being rated. Valid values are: Communication, ItemAsDescribed, ShippingAndHandlingCharges, and ShippingTime.)
        */
        this.set_RatingDetail = function(value) {
            this.setInput("RatingDetail", value);
        }

        /*
        Set the value of the Rating input for this Choreo. ((conditional, integer) A detailed numeric rating (1 through 5) for an order line item. This rating is applied to the subject provided for RatingDetail.)
        */
        this.set_Rating = function(value) {
            this.setInput("Rating", value);
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
        Set the value of the TargetUser input for this Choreo. ((conditional, string) The user ID of the buyer who you want to leave feedback for.)
        */
        this.set_TargetUser = function(value) {
            this.setInput("TargetUser", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((optional, string) The unique identifier for an eBay order line item (transaction). Required when there are multiple order ine items between the two order partners that require feedback.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LeaveFeedback Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LeaveFeedbackResultSet = function(resultStream) {
    LeaveFeedbackResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LeaveFeedback, choreography.Choreography);
util.inherits(LeaveFeedbackInputSet, choreography.InputSet);
util.inherits(LeaveFeedbackResultSet, choreography.ResultSet);
exports.LeaveFeedback = LeaveFeedback;


/*
    PlaceOffer
    Allows an authenticated user to to make a bid, a best offer, or a purchase on the item specified by the ItemID input field.
*/


var PlaceOffer = function(session) {
    /*
        Create a new instance of the PlaceOffer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/PlaceOffer"
    PlaceOffer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PlaceOfferResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PlaceOfferInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PlaceOffer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PlaceOfferInputSet = function() {
    PlaceOfferInputSet.super_.call(this);
        /*
        Set the value of the PlaceOfferRequest input for this Choreo. ((optional, xml) The complete XML request body containing properties you wish to set. This can be used as an alternative to individual inputs that represent request properties.)
        */
        this.set_PlaceOfferRequest = function(value) {
            this.setInput("PlaceOfferRequest", value);
        }

        /*
        Set the value of the Action input for this Choreo. ((conditional, string) Indicates the type of offer being made on the specified listing. Valid values are: Bid, Purchase, Accept, Counter, Decline, or Offer.)
        */
        this.set_Action = function(value) {
            this.setInput("Action", value);
        }

        /*
        Set the value of the BestOfferID input for this Choreo. ((conditional, string) The ID of a Best Offer on an item. Required if Action is set to Accept or Decline.)
        */
        this.set_BestOfferID = function(value) {
            this.setInput("BestOfferID", value);
        }

        /*
        Set the value of the DetailLevel input for this Choreo. ((optional, string) The response detail level. Valid values are: ItemReturnAttributes, ItemReturnDescription, and ReturnAll.)
        */
        this.set_DetailLevel = function(value) {
            this.setInput("DetailLevel", value);
        }

        /*
        Set the value of the EndUserIP input for this Choreo. ((conditional, string) The public IP address of the machine from which the request is sent.)
        */
        this.set_EndUserIP = function(value) {
            this.setInput("EndUserIP", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((conditional, string) The ItemID that uniquely identifies the item listing to bid on.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the MaxBid input for this Choreo. ((conditional, decimal) The amount of the offer placed on the listing.)
        */
        this.set_MaxBid = function(value) {
            this.setInput("MaxBid", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((conditional, string) A message from the buyer to the seller.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((conditional, integer) Specifies the number of items from the specified listing that the user intends to purchase. For auctions, this must be set to 1.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
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
        Set the value of the UserConsent input for this Choreo. ((conditional, boolean) When set to true, confirms that the bidder read and agrees to eBay's privacy policy.)
        */
        this.set_UserConsent = function(value) {
            this.setInput("UserConsent", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PlaceOffer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PlaceOfferResultSet = function(resultStream) {
    PlaceOfferResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PlaceOffer, choreography.Choreography);
util.inherits(PlaceOfferInputSet, choreography.InputSet);
util.inherits(PlaceOfferResultSet, choreography.ResultSet);
exports.PlaceOffer = PlaceOffer;


/*
    ReviseItem
    Allows a seller to change the properties of a currently active listing.
*/


var ReviseItem = function(session) {
    /*
        Create a new instance of the ReviseItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/ReviseItem"
    ReviseItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReviseItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReviseItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReviseItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReviseItemInputSet = function() {
    ReviseItemInputSet.super_.call(this);
        /*
        Set the value of the ReviseItemRequest input for this Choreo. ((optional, xml) The complete XML request body containing item properties you wish to set. This can be used as an alternative to individual inputs that represent item properties.)
        */
        this.set_ReviseItemRequest = function(value) {
            this.setInput("ReviseItemRequest", value);
        }

        /*
        Set the value of the BuyItNowPrice input for this Choreo. ((optional, decimal) Allows a user to purchase the item at a Buy It Now price and end the auction immediately.)
        */
        this.set_BuyItNowPrice = function(value) {
            this.setInput("BuyItNowPrice", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, integer) The numeric ID for a category on eBay. Category IDs can be retrieved with the GetCategories Choreo.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the ConditionID input for this Choreo. ((optional, integer) The numeric ID (e.g., 1000) for the item condition.)
        */
        this.set_ConditionID = function(value) {
            this.setInput("ConditionID", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) The country that the item is located in.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((optional, string) The currency associated with the item price.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the DispatchTimeMax input for this Choreo. ((optional, integer) Specifies the maximum number of business days the seller commits to for preparing an item to be shipped after receiving a cleared payment.)
        */
        this.set_DispatchTimeMax = function(value) {
            this.setInput("DispatchTimeMax", value);
        }

        /*
        Set the value of the ExpeditedService input for this Choreo. ((optional, boolean) Whether or not the seller is offering expedited shipping service options.)
        */
        this.set_ExpeditedService = function(value) {
            this.setInput("ExpeditedService", value);
        }

        /*
        Set the value of the ItemDescription input for this Choreo. ((optional, string) The seller's description of the item.)
        */
        this.set_ItemDescription = function(value) {
            this.setInput("ItemDescription", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((conditional, string) The ID of the item to revise.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ListingDuration input for this Choreo. ((optional, string) The number of days the seller wants the listing to be active (e.g., Days_7). A complete list of accepted values is returned when calling GetCategoryFeatures with DetailLevel set to ReturnAll.)
        */
        this.set_ListingDuration = function(value) {
            this.setInput("ListingDuration", value);
        }

        /*
        Set the value of the ListingType input for this Choreo. ((optional, string) The format of the listing the seller wants to use. Valid values are: AdType, Chinese, FixedPriceItem, Half, LeadGeneration.)
        */
        this.set_ListingType = function(value) {
            this.setInput("ListingType", value);
        }

        /*
        Set the value of the PayPalEmailAddress input for this Choreo. ((optional, string) The seller's PayPal email address. Required when a PaymentMethod is PayPal.)
        */
        this.set_PayPalEmailAddress = function(value) {
            this.setInput("PayPalEmailAddress", value);
        }

        /*
        Set the value of the PaymentMethods input for this Choreo. ((optional, string) Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. This can be a comma-separated list (e.g., VisaMC,PayPal).)
        */
        this.set_PaymentMethods = function(value) {
            this.setInput("PaymentMethods", value);
        }

        /*
        Set the value of the PictureURL input for this Choreo. ((optional, string) The URL for a picture associated with an item.)
        */
        this.set_PictureURL = function(value) {
            this.setInput("PictureURL", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((optional, string) The Postal code of the place where the item is located.)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the Quantity input for this Choreo. ((optional, integer) Indicates the quantity of items available for purchase in the listing. Required for all auction listings and for non-variation, fixed-price listings. For auction listings, this value is always '1'.)
        */
        this.set_Quantity = function(value) {
            this.setInput("Quantity", value);
        }

        /*
        Set the value of the RefundOption input for this Choreo. ((optional, string) Indicates how the seller will compensate the buyer for a returned item (e.g. MoneyBack).)
        */
        this.set_RefundOption = function(value) {
            this.setInput("RefundOption", value);
        }

        /*
        Set the value of the ReservePrice input for this Choreo. ((optional, decimal) The lowest price at which the seller is willing to sell the item.)
        */
        this.set_ReservePrice = function(value) {
            this.setInput("ReservePrice", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ReturnPolicyDescription input for this Choreo. ((optional, string) The text description of return policy details.)
        */
        this.set_ReturnPolicyDescription = function(value) {
            this.setInput("ReturnPolicyDescription", value);
        }

        /*
        Set the value of the ReturnsAcceptedOption input for this Choreo. ((optional, string) Indicates whether the seller allows the buyer to return the item (e.g., ReturnsAccepted).)
        */
        this.set_ReturnsAcceptedOption = function(value) {
            this.setInput("ReturnsAcceptedOption", value);
        }

        /*
        Set the value of the ReturnsWithinOption input for this Choreo. ((optional, string) The period of time the buyer has to return the item (e.g., Days_14). To accepted values for this field, call GeteBayDetails with DetailName set to ReturnPolicyDetails.)
        */
        this.set_ReturnsWithinOption = function(value) {
            this.setInput("ReturnsWithinOption", value);
        }

        /*
        Set the value of the SandboxMode input for this Choreo. ((optional, boolean) Indicates that the request should be made to the sandbox endpoint instead of the production endpoint. Set to 1 to enable sandbox mode.)
        */
        this.set_SandboxMode = function(value) {
            this.setInput("SandboxMode", value);
        }

        /*
        Set the value of the ShippingServiceAdditionalCost input for this Choreo. ((optional, decimal) Shipping costs in addition to the value specified for the ShippingServiceCost parameter.)
        */
        this.set_ShippingServiceAdditionalCost = function(value) {
            this.setInput("ShippingServiceAdditionalCost", value);
        }

        /*
        Set the value of the ShippingServiceCost input for this Choreo. ((optional, decimal) The cost for shipping the item.)
        */
        this.set_ShippingServiceCost = function(value) {
            this.setInput("ShippingServiceCost", value);
        }

        /*
        Set the value of the ShippingService input for this Choreo. ((optional, string) The name of the shipping service offered (e.g. UPSGround, USPSMedia).)
        */
        this.set_ShippingService = function(value) {
            this.setInput("ShippingService", value);
        }

        /*
        Set the value of the ShippingType input for this Choreo. ((optional, string) The shipping cost model offered by the seller. Valid values are: Calculated, CalculatedDomesticFlatInternational, Flat, FlatDomesticCalculatedInternational, FreightFlat, NotSpecified.)
        */
        this.set_ShippingType = function(value) {
            this.setInput("ShippingType", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) The eBay site ID that you want to access. Defaults to 0 indicating the US site.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the Site input for this Choreo. ((optional, string) The name of the site on which the item is listed. This should corresponse to the SiteID. Default value is "US".)
        */
        this.set_Site = function(value) {
            this.setInput("Site", value);
        }

        /*
        Set the value of the StartPrice input for this Choreo. ((optional, decimal) This value indicates the starting price of the item when it is listed for the first time.)
        */
        this.set_StartPrice = function(value) {
            this.setInput("StartPrice", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the item as it appears in the listing or search results.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReviseItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReviseItemResultSet = function(resultStream) {
    ReviseItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReviseItem, choreography.Choreography);
util.inherits(ReviseItemInputSet, choreography.InputSet);
util.inherits(ReviseItemResultSet, choreography.ResultSet);
exports.ReviseItem = ReviseItem;


/*
    UploadSiteHostedPictures
    Allows you to uploads a picture to eBay Picture Services by specifying a binary attachment or image URL.
*/


var UploadSiteHostedPictures = function(session) {
    /*
        Create a new instance of the UploadSiteHostedPictures Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/eBay/Trading/UploadSiteHostedPictures"
    UploadSiteHostedPictures.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadSiteHostedPicturesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadSiteHostedPicturesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadSiteHostedPictures
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadSiteHostedPicturesInputSet = function() {
    UploadSiteHostedPicturesInputSet.super_.call(this);
        /*
        Set the value of the ExtensionInDays input for this Choreo. ((optional, integer) The number of days to extend the expiration date for the specified image, after a listing has ended.)
        */
        this.set_ExtensionInDays = function(value) {
            this.setInput("ExtensionInDays", value);
        }

        /*
        Set the value of the ExternalPictureURL input for this Choreo. ((conditional, string) The URL of an image to upload. Required unless providing PictureData. Max image size is 7 MB. Max URL length is 1024. Formats supported are: JPG, GIF, PNG, BMP, and TIF.)
        */
        this.set_ExternalPictureURL = function(value) {
            this.setInput("ExternalPictureURL", value);
        }

        /*
        Set the value of the PictureData input for this Choreo. ((conditional, string) The Base64 encoded string for an the image data. Required unless providing the ExternalPictureURL. Max image size is 7 MB. Formats supported are: JPG, GIF, PNG, BMP, and TIF.)
        */
        this.set_PictureData = function(value) {
            this.setInput("PictureData", value);
        }

        /*
        Set the value of the PictureName input for this Choreo. ((optional, string) The name of the picture.)
        */
        this.set_PictureName = function(value) {
            this.setInput("PictureName", value);
        }

        /*
        Set the value of the PictureSet input for this Choreo. ((optional, string) The image sizes that will be generated. Valid values are: Standard and Supersize.)
        */
        this.set_PictureSet = function(value) {
            this.setInput("PictureSet", value);
        }

        /*
        Set the value of the PictureUploadPolicy input for this Choreo. ((optional, string) Indicates that an uploaded picture is available to a seller on the eBay site. Valid values are: Add and ClearAndAdd.)
        */
        this.set_PictureUploadPolicy = function(value) {
            this.setInput("PictureUploadPolicy", value);
        }

        /*
        Set the value of the PictureWatermark input for this Choreo. ((optional, string) The type of watermark that should be applied to the pictures hosted by the eBay Picture Services. Valid values are: User and Icon.)
        */
        this.set_PictureWatermark = function(value) {
            this.setInput("PictureWatermark", value);
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
        Set the value of the UserToken input for this Choreo. ((required, string) A valid eBay Auth Token.)
        */
        this.set_UserToken = function(value) {
            this.setInput("UserToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UploadSiteHostedPictures Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadSiteHostedPicturesResultSet = function(resultStream) {
    UploadSiteHostedPicturesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from eBay.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadSiteHostedPictures, choreography.Choreography);
util.inherits(UploadSiteHostedPicturesInputSet, choreography.InputSet);
util.inherits(UploadSiteHostedPicturesResultSet, choreography.ResultSet);
exports.UploadSiteHostedPictures = UploadSiteHostedPictures;

