
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetComps
    Returns a list of comparable recent sales for a specified property.
*/


var GetComps = function(session) {
    /*
        Create a new instance of the GetComps Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetComps"
    GetComps.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComps
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompsInputSet = function() {
    GetCompsInputSet.super_.call(this);
        /*
        Set the value of the Count input for this Choreo. ((required, integer) Enter the number of comparable recent sales to retrieve. Choose a value between 1 and 25.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the RentEstimate input for this Choreo. ((optional, boolean) Set to 1 (true) to enable. Defaults to 0 (false).)
        */
        this.set_RentEstimate = function(value) {
            this.setInput("RentEstimate", value);
        }

        /*
        Set the value of the ZPID input for this Choreo. ((required, integer) Enter a Zillow Property ID for the property being queried.)
        */
        this.set_ZPID = function(value) {
            this.setInput("ZPID", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetComps Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompsResultSet = function(resultStream) {
    GetCompsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComps, choreography.Choreography);
util.inherits(GetCompsInputSet, choreography.InputSet);
util.inherits(GetCompsResultSet, choreography.ResultSet);
exports.GetComps = GetComps;


/*
    GetDeepSearchResults
    Retrieve comprehensive property information for a specified address. 
*/


var GetDeepSearchResults = function(session) {
    /*
        Create a new instance of the GetDeepSearchResults Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetDeepSearchResults"
    GetDeepSearchResults.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDeepSearchResultsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDeepSearchResultsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDeepSearchResults
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDeepSearchResultsInputSet = function() {
    GetDeepSearchResultsInputSet.super_.call(this);
        /*
        Set the value of the Address input for this Choreo. ((required, string) Enter the address of the property to search.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) Enter a city name.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the RentEstimate input for this Choreo. ((optional, boolean) Set to 1 (true) to enable. Defaults to 0 (false).)
        */
        this.set_RentEstimate = function(value) {
            this.setInput("RentEstimate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) Enter a State abbreviation. If State is set, an entry for City must also be entered.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

        /*
        Set the value of the Zipcode input for this Choreo. ((required, integer) Enter a zipcode. Can be combined with or without the  City and State input variables.)
        */
        this.set_Zipcode = function(value) {
            this.setInput("Zipcode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDeepSearchResults Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDeepSearchResultsResultSet = function(resultStream) {
    GetDeepSearchResultsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDeepSearchResults, choreography.Choreography);
util.inherits(GetDeepSearchResultsInputSet, choreography.InputSet);
util.inherits(GetDeepSearchResultsResultSet, choreography.ResultSet);
exports.GetDeepSearchResults = GetDeepSearchResults;


/*
    GetMonthlyPayments
    Retrieve estimated monthly payments, including principal and interest based on current interest rates.
*/


var GetMonthlyPayments = function(session) {
    /*
        Create a new instance of the GetMonthlyPayments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetMonthlyPayments"
    GetMonthlyPayments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMonthlyPaymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMonthlyPaymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMonthlyPayments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMonthlyPaymentsInputSet = function() {
    GetMonthlyPaymentsInputSet.super_.call(this);
        /*
        Set the value of the DollarsDown input for this Choreo. ((optional, integer) Specify the dollar amount that is placed for a down payment. This variable can be used in place of DownPaymentAmount.)
        */
        this.set_DollarsDown = function(value) {
            this.setInput("DollarsDown", value);
        }

        /*
        Set the value of the DownPaymentAmount input for this Choreo. ((optional, integer) Enter the percentage of the total properly price that will be used as a down payment. If < 20%, mortage insurance info is also returned.)
        */
        this.set_DownPaymentAmount = function(value) {
            this.setInput("DownPaymentAmount", value);
        }

        /*
        Set the value of the OutputFormat input for this Choreo. ((optional, string) Enter the desired query output format.  Enter: xml, or json.  Default output is set to: xml.)
        */
        this.set_OutputFormat = function(value) {
            this.setInput("OutputFormat", value);
        }

        /*
        Set the value of the Price input for this Choreo. ((required, integer) Enter the price for which the monthly payment is to be calculated.)
        */
        this.set_Price = function(value) {
            this.setInput("Price", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, integer) Enter the zip code of the property.  If null, no property tax, or hazard insurance data will be returned.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMonthlyPayments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMonthlyPaymentsResultSet = function(resultStream) {
    GetMonthlyPaymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMonthlyPayments, choreography.Choreography);
util.inherits(GetMonthlyPaymentsInputSet, choreography.InputSet);
util.inherits(GetMonthlyPaymentsResultSet, choreography.ResultSet);
exports.GetMonthlyPayments = GetMonthlyPayments;


/*
    GetRateSummary
    Retrieve current interest rates for a specified loan type.
*/


var GetRateSummary = function(session) {
    /*
        Create a new instance of the GetRateSummary Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetRateSummary"
    GetRateSummary.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRateSummaryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRateSummaryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRateSummary
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRateSummaryInputSet = function() {
    GetRateSummaryInputSet.super_.call(this);
        /*
        Set the value of the OutputFormat input for this Choreo. ((optional, string) Enter the desired query output format.  Enter: xml, or json.  Default output is set to: xml.)
        */
        this.set_OutputFormat = function(value) {
            this.setInput("OutputFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Enter a U.S. state abbreviation for which to retrieve mortgage rates.  If null, the national average rate is returned.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRateSummary Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRateSummaryResultSet = function(resultStream) {
    GetRateSummaryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRateSummary, choreography.Choreography);
util.inherits(GetRateSummaryInputSet, choreography.InputSet);
util.inherits(GetRateSummaryResultSet, choreography.ResultSet);
exports.GetRateSummary = GetRateSummary;


/*
    GetUpdatedPropertyDetails
    Retrieve detailed property information that has been edited by the home's owner or agent.
*/


var GetUpdatedPropertyDetails = function(session) {
    /*
        Create a new instance of the GetUpdatedPropertyDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetUpdatedPropertyDetails"
    GetUpdatedPropertyDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUpdatedPropertyDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUpdatedPropertyDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUpdatedPropertyDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUpdatedPropertyDetailsInputSet = function() {
    GetUpdatedPropertyDetailsInputSet.super_.call(this);
        /*
        Set the value of the ZPID input for this Choreo. ((required, integer) Enter a Zillow Property ID for the property being queried.)
        */
        this.set_ZPID = function(value) {
            this.setInput("ZPID", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUpdatedPropertyDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUpdatedPropertyDetailsResultSet = function(resultStream) {
    GetUpdatedPropertyDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUpdatedPropertyDetails, choreography.Choreography);
util.inherits(GetUpdatedPropertyDetailsInputSet, choreography.InputSet);
util.inherits(GetUpdatedPropertyDetailsResultSet, choreography.ResultSet);
exports.GetUpdatedPropertyDetails = GetUpdatedPropertyDetails;


/*
    GetZestimate
    Retrieve estimate information for a specified property.
*/


var GetZestimate = function(session) {
    /*
        Create a new instance of the GetZestimate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zillow/GetZestimate"
    GetZestimate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetZestimateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetZestimateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetZestimate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetZestimateInputSet = function() {
    GetZestimateInputSet.super_.call(this);
        /*
        Set the value of the RentEstimate input for this Choreo. ((optional, boolean) Set to 1 (true) to enable. Defaults to 0 (false).)
        */
        this.set_RentEstimate = function(value) {
            this.setInput("RentEstimate", value);
        }

        /*
        Set the value of the ZPID input for this Choreo. ((required, integer) Enter a Zillow Property ID for the property being queried.)
        */
        this.set_ZPID = function(value) {
            this.setInput("ZPID", value);
        }

        /*
        Set the value of the ZWSID input for this Choreo. ((required, string) Enter a Zillow Web Service Identifier (ZWS ID).)
        */
        this.set_ZWSID = function(value) {
            this.setInput("ZWSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetZestimate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetZestimateResultSet = function(resultStream) {
    GetZestimateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Zillow.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetZestimate, choreography.Choreography);
util.inherits(GetZestimateInputSet, choreography.InputSet);
util.inherits(GetZestimateResultSet, choreography.ResultSet);
exports.GetZestimate = GetZestimate;

