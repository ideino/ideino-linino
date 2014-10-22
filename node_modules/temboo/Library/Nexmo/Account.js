
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    BuyNumber
    Purchase the specified inbound number.
*/


var BuyNumber = function(session) {
    /*
        Create a new instance of the BuyNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/BuyNumber"
    BuyNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BuyNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BuyNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BuyNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BuyNumberInputSet = function() {
    BuyNumberInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) Country code. (e.g.: ES))
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((required, string) An available inbound (MSISDN) number  (e.g. 34911067000).)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BuyNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BuyNumberResultSet = function(resultStream) {
    BuyNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Nexmo. A 200 is returned for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. For a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BuyNumber, choreography.Choreography);
util.inherits(BuyNumberInputSet, choreography.InputSet);
util.inherits(BuyNumberResultSet, choreography.ResultSet);
exports.BuyNumber = BuyNumber;


/*
    CancelNumber
    Cancels the specified inbound number subscription.
*/


var CancelNumber = function(session) {
    /*
        Create a new instance of the CancelNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/CancelNumber"
    CancelNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CancelNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CancelNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CancelNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CancelNumberInputSet = function() {
    CancelNumberInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) 2-digit country code. (e.g.: CA))
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((required, string) Your inbound (MSISDN) number (e.g. 34911067000).)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CancelNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CancelNumberResultSet = function(resultStream) {
    CancelNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. For a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Nexmo. A 200 is returned for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(CancelNumber, choreography.Choreography);
util.inherits(CancelNumberInputSet, choreography.InputSet);
util.inherits(CancelNumberResultSet, choreography.ResultSet);
exports.CancelNumber = CancelNumber;


/*
    GetBalance
    Retrieve your current account balance.
*/


var GetBalance = function(session) {
    /*
        Create a new instance of the GetBalance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/GetBalance"
    GetBalance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBalanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBalanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBalance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBalanceInputSet = function() {
    GetBalanceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBalance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBalanceResultSet = function(resultStream) {
    GetBalanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBalance, choreography.Choreography);
util.inherits(GetBalanceInputSet, choreography.InputSet);
util.inherits(GetBalanceResultSet, choreography.ResultSet);
exports.GetBalance = GetBalance;


/*
    GetNumbers
    Get all inbound numbers associated with your Nexmo account.
*/


var GetNumbers = function(session) {
    /*
        Create a new instance of the GetNumbers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/GetNumbers"
    GetNumbers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNumbersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNumbersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNumbers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNumbersInputSet = function() {
    GetNumbersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Page index.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Pattern input for this Choreo. ((optional, string) Pattern to match.)
        */
        this.set_Pattern = function(value) {
            this.setInput("Pattern", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Size input for this Choreo. ((optional, integer) Page size.)
        */
        this.set_Size = function(value) {
            this.setInput("Size", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNumbers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNumbersResultSet = function(resultStream) {
    GetNumbersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNumbers, choreography.Choreography);
util.inherits(GetNumbersInputSet, choreography.InputSet);
util.inherits(GetNumbersResultSet, choreography.ResultSet);
exports.GetNumbers = GetNumbers;


/*
    GetPricingByCountry
    Retrieve Nexmo's outbound pricing for the specified country.
*/


var GetPricingByCountry = function(session) {
    /*
        Create a new instance of the GetPricingByCountry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/GetPricingByCountry"
    GetPricingByCountry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPricingByCountryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPricingByCountryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPricingByCountry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPricingByCountryInputSet = function() {
    GetPricingByCountryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) A 2 letter country code.  (e.g. CA))
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPricingByCountry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPricingByCountryResultSet = function(resultStream) {
    GetPricingByCountryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPricingByCountry, choreography.Choreography);
util.inherits(GetPricingByCountryInputSet, choreography.InputSet);
util.inherits(GetPricingByCountryResultSet, choreography.ResultSet);
exports.GetPricingByCountry = GetPricingByCountry;


/*
    GetPricingByPrefix
    Retrieve Nexmo's outbound pricing for the specified international prefix.
*/


var GetPricingByPrefix = function(session) {
    /*
        Create a new instance of the GetPricingByPrefix Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/GetPricingByPrefix"
    GetPricingByPrefix.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPricingByPrefixResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPricingByPrefixInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPricingByPrefix
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPricingByPrefixInputSet = function() {
    GetPricingByPrefixInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Prefix input for this Choreo. ((required, integer) International dialing code. (e.g. 44))
        */
        this.set_Prefix = function(value) {
            this.setInput("Prefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPricingByPrefix Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPricingByPrefixResultSet = function(resultStream) {
    GetPricingByPrefixResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPricingByPrefix, choreography.Choreography);
util.inherits(GetPricingByPrefixInputSet, choreography.InputSet);
util.inherits(GetPricingByPrefixResultSet, choreography.ResultSet);
exports.GetPricingByPrefix = GetPricingByPrefix;


/*
    TopUp
    Allows you to top-up your account provided that you've set up "auto-reload" in your Account Settings.
*/


var TopUp = function(session) {
    /*
        Create a new instance of the TopUp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/TopUp"
    TopUp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopUpResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopUpInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopUp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopUpInputSet = function() {
    TopUpInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((required, string) The transaction id associated with your **first** 'auto reload' top-up.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopUp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopUpResultSet = function(resultStream) {
    TopUpResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. For a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Nexmo. A 200 is returned for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(TopUp, choreography.Choreography);
util.inherits(TopUpInputSet, choreography.InputSet);
util.inherits(TopUpResultSet, choreography.ResultSet);
exports.TopUp = TopUp;


/*
    UpdateAccountSettings
    Update your account settings.
*/


var UpdateAccountSettings = function(session) {
    /*
        Create a new instance of the UpdateAccountSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/UpdateAccountSettings"
    UpdateAccountSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAccountSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAccountSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAccountSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAccountSettingsInputSet = function() {
    UpdateAccountSettingsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the DeliveryReceiptCallbackURL input for this Choreo. ((conditional, string) Your new Delivery Receipt Callback URL.)
        */
        this.set_DeliveryReceiptCallbackURL = function(value) {
            this.setInput("DeliveryReceiptCallbackURL", value);
        }

        /*
        Set the value of the InboundCallbackURL input for this Choreo. ((conditional, string) Your new Inbound Callback URL.)
        */
        this.set_InboundCallbackURL = function(value) {
            this.setInput("InboundCallbackURL", value);
        }

        /*
        Set the value of the NewSecret input for this Choreo. ((optional, string) Your new API secret. (8 characters max))
        */
        this.set_NewSecret = function(value) {
            this.setInput("NewSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAccountSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAccountSettingsResultSet = function(resultStream) {
    UpdateAccountSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Nexmo.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAccountSettings, choreography.Choreography);
util.inherits(UpdateAccountSettingsInputSet, choreography.InputSet);
util.inherits(UpdateAccountSettingsResultSet, choreography.ResultSet);
exports.UpdateAccountSettings = UpdateAccountSettings;


/*
    UpdateNumber
    Updates the callback details for the specified number.
*/


var UpdateNumber = function(session) {
    /*
        Create a new instance of the UpdateNumber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Nexmo/Account/UpdateNumber"
    UpdateNumber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateNumberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateNumberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateNumber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateNumberInputSet = function() {
    UpdateNumberInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your API Key provided to you by Nexmo.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) Your API Secret provided to you by Nexmo.)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((optional, string) Mobile originated Callback URL.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) 2-digit country code. (e.g. CA))
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((required, string) Your inbound (MSISDN) number (e.g. 34911067000).)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the SMPPSystemType input for this Choreo. ((optional, string) The Mobile Orignated associated system type for SMPP client only. (e.g.: inbound))
        */
        this.set_SMPPSystemType = function(value) {
            this.setInput("SMPPSystemType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateNumber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateNumberResultSet = function(resultStream) {
    UpdateNumberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Nexmo. A 200 is returned for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Nexmo. For a successful request, an empty response body is returned.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateNumber, choreography.Choreography);
util.inherits(UpdateNumberInputSet, choreography.InputSet);
util.inherits(UpdateNumberResultSet, choreography.ResultSet);
exports.UpdateNumber = UpdateNumber;

