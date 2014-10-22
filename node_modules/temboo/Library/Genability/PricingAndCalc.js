
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CalculateTariffInputMetaData
    Retrieve inputs required to run a calculation for the specified tariff, within a specified period of time.
*/


var CalculateTariffInputMetaData = function(session) {
    /*
        Create a new instance of the CalculateTariffInputMetaData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/PricingAndCalc/CalculateTariffInputMetaData"
    CalculateTariffInputMetaData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CalculateTariffInputMetaDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CalculateTariffInputMetaDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CalculateTariffInputMetaData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CalculateTariffInputMetaDataInputSet = function() {
    CalculateTariffInputMetaDataInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the BillingPeriod input for this Choreo. ((optional, string) Specify whether results retireved should be based on a billing period, or not.  Default is set to: false.)
        */
        this.set_BillingPeriod = function(value) {
            this.setInput("BillingPeriod", value);
        }

        /*
        Set the value of the CityLimits input for this Choreo. ((optional, string) Specify whether electricity pricing information should be restricted to city limits, or not.  Example input value: Inside.)
        */
        this.set_CityLimits = function(value) {
            this.setInput("CityLimits", value);
        }

        /*
        Set the value of the ConnectionType input for this Choreo. ((optional, string) The connection type.  For example: Primary.)
        */
        this.set_ConnectionType = function(value) {
            this.setInput("ConnectionType", value);
        }

        /*
        Set the value of the FromDateTime input for this Choreo. ((required, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_FromDateTime = function(value) {
            this.setInput("FromDateTime", value);
        }

        /*
        Set the value of the GroupBy input for this Choreo. ((optional, string) Specify how calculation details are displayed.  For example retrieved details can be grouped by month, or year. Options include: Daily, Weekly, Month, Year.)
        */
        this.set_GroupBy = function(value) {
            this.setInput("GroupBy", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((optional, string) An applicability value.  If an error is returned, indicating the need for an extra applicability parameter, use this variable to set the parameter name.  For example: territoryID.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the KeyValue input for this Choreo. ((conditional, string) The value for the specified KeyName variable. For example if KeyName is set to territoryID, you could provide 3385 for the KeyValue input.)
        */
        this.set_KeyValue = function(value) {
            this.setInput("KeyValue", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((required, string) A Genability tariff ID.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the ToDateTime input for this Choreo. ((required, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_ToDateTime = function(value) {
            this.setInput("ToDateTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CalculateTariffInputMetaData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CalculateTariffInputMetaDataResultSet = function(resultStream) {
    CalculateTariffInputMetaDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CalculateTariffInputMetaData, choreography.Choreography);
util.inherits(CalculateTariffInputMetaDataInputSet, choreography.InputSet);
util.inherits(CalculateTariffInputMetaDataResultSet, choreography.ResultSet);
exports.CalculateTariffInputMetaData = CalculateTariffInputMetaData;


/*
    GetPrice
    Retrieves the consumption price of a specified Tariff over a given date range.
*/


var GetPrice = function(session) {
    /*
        Create a new instance of the GetPrice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/PricingAndCalc/GetPrice"
    GetPrice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPriceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPriceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPrice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPriceInputSet = function() {
    GetPriceInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((optional, string) A Genability ID for an account. More info on Accounts is available here: http://developer.genability.com/documentation/api-reference/account-api/account)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the ConsumptionAmount input for this Choreo. ((optional, decimal) Specify a monthly consumption in kWh. By default the highest banded level of consumption is used.)
        */
        this.set_ConsumptionAmount = function(value) {
            this.setInput("ConsumptionAmount", value);
        }

        /*
        Set the value of the DemandAmount input for this Choreo. ((optional, decimal) Specify a monthly demand in kWh. By default the highest banded level of demand is used.)
        */
        this.set_DemandAmount = function(value) {
            this.setInput("DemandAmount", value);
        }

        /*
        Set the value of the FromDateTime input for this Choreo. ((required, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_FromDateTime = function(value) {
            this.setInput("FromDateTime", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((optional, string) A Genability tariff ID. Not required, if AccountID is specified.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to be returned. Defailt is set to: 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to start to display results from. If unspecified, the first page of results will be returned.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((optional, string) The Genability ID of a profile. This ID can be passed instead of consumptionAmount or demandAmount.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the ProviderAccountID input for this Choreo. ((optional, string) A unique ID for an Account. Same as AccountId, however your unique ID can be used instead of the Genability Account ID.)
        */
        this.set_ProviderAccountID = function(value) {
            this.setInput("ProviderAccountID", value);
        }

        /*
        Set the value of the TerritoryID input for this Choreo. ((optional, string) Return rate changes for the specified Territory.)
        */
        this.set_TerritoryID = function(value) {
            this.setInput("TerritoryID", value);
        }

        /*
        Set the value of the ToDateTime input for this Choreo. ((optional, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_ToDateTime = function(value) {
            this.setInput("ToDateTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPrice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPriceResultSet = function(resultStream) {
    GetPriceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPrice, choreography.Choreography);
util.inherits(GetPriceInputSet, choreography.InputSet);
util.inherits(GetPriceResultSet, choreography.ResultSet);
exports.GetPrice = GetPrice;


/*
    GetTariffPrice
    Retrieve summarized rates of a specified electricity tariff, in addition to changes in rates over a specified time span.
*/


var GetTariffPrice = function(session) {
    /*
        Create a new instance of the GetTariffPrice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/PricingAndCalc/GetTariffPrice"
    GetTariffPrice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTariffPriceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTariffPriceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTariffPrice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTariffPriceInputSet = function() {
    GetTariffPriceInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((optional, string) The Genability ID for an account. This is optional if MasterTariffID is set.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the ConsumptionAmount input for this Choreo. ((optional, decimal) Specify a monthly consumption in kWh. By default the highest banded level of consumption is used.)
        */
        this.set_ConsumptionAmount = function(value) {
            this.setInput("ConsumptionAmount", value);
        }

        /*
        Set the value of the DemandAmount input for this Choreo. ((optional, decimal) Specify a monthly demand in kWh. By default the highest banded level of demand is used.)
        */
        this.set_DemandAmount = function(value) {
            this.setInput("DemandAmount", value);
        }

        /*
        Set the value of the FromDateTime input for this Choreo. ((required, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_FromDateTime = function(value) {
            this.setInput("FromDateTime", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((optional, string) A Genability tariff ID. This variable is not required, if AccountID is set.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to be returned. Defailt is set to: 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to start to display results from. If unspecified, the first page of results will be returned.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the TerritoryID input for this Choreo. ((optional, string) Return rate changes for the specified Territory.)
        */
        this.set_TerritoryID = function(value) {
            this.setInput("TerritoryID", value);
        }

        /*
        Set the value of the ToDateTime input for this Choreo. ((optional, string) The date and time of the requested start of the price query. Must be in ISO 8601 format.  Example: 2012-06-12T00:00:00.0-0700)
        */
        this.set_ToDateTime = function(value) {
            this.setInput("ToDateTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTariffPrice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTariffPriceResultSet = function(resultStream) {
    GetTariffPriceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTariffPrice, choreography.Choreography);
util.inherits(GetTariffPriceInputSet, choreography.InputSet);
util.inherits(GetTariffPriceResultSet, choreography.ResultSet);
exports.GetTariffPrice = GetTariffPrice;


/*
    GetTerritoryIDFromZipcode
    Get a territoryID, by using a consumer's zipcode, LSE ID and master tariff ID.
*/


var GetTerritoryIDFromZipcode = function(session) {
    /*
        Create a new instance of the GetTerritoryIDFromZipcode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/PricingAndCalc/GetTerritoryIDFromZipcode"
    GetTerritoryIDFromZipcode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTerritoryIDFromZipcodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTerritoryIDFromZipcodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTerritoryIDFromZipcode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTerritoryIDFromZipcodeInputSet = function() {
    GetTerritoryIDFromZipcodeInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((required, string) An LSE ID.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((required, string) A Genability tariff ID.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the Zipcode input for this Choreo. ((required, integer) A zip code for which a territory ID is to be retrieved.)
        */
        this.set_Zipcode = function(value) {
            this.setInput("Zipcode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTerritoryIDFromZipcode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTerritoryIDFromZipcodeResultSet = function(resultStream) {
    GetTerritoryIDFromZipcodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTerritoryIDFromZipcode, choreography.Choreography);
util.inherits(GetTerritoryIDFromZipcodeInputSet, choreography.InputSet);
util.inherits(GetTerritoryIDFromZipcodeResultSet, choreography.ResultSet);
exports.GetTerritoryIDFromZipcode = GetTerritoryIDFromZipcode;


/*
    RunNewPriceCalculation
    Calculate electricity costs based on a POSTed calculation criteria. 
*/


var RunNewPriceCalculation = function(session) {
    /*
        Create a new instance of the RunNewPriceCalculation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/PricingAndCalc/RunNewPriceCalculation"
    RunNewPriceCalculation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RunNewPriceCalculationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RunNewPriceCalculationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RunNewPriceCalculation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RunNewPriceCalculationInputSet = function() {
    RunNewPriceCalculationInputSet.super_.call(this);
        /*
        Set the value of the POSTData input for this Choreo. ((required, json) The POST payload in JSON format.)
        */
        this.set_POSTData = function(value) {
            this.setInput("POSTData", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((required, string) A Genability tariff ID.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RunNewPriceCalculation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RunNewPriceCalculationResultSet = function(resultStream) {
    RunNewPriceCalculationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RunNewPriceCalculation, choreography.Choreography);
util.inherits(RunNewPriceCalculationInputSet, choreography.InputSet);
util.inherits(RunNewPriceCalculationResultSet, choreography.ResultSet);
exports.RunNewPriceCalculation = RunNewPriceCalculation;

