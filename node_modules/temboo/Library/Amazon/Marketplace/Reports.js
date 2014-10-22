
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CancelReportRequest
    Cancels one or more report requests.
*/


var CancelReportRequest = function(session) {
    /*
        Create a new instance of the CancelReportRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/CancelReportRequest"
    CancelReportRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CancelReportRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CancelReportRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CancelReportRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CancelReportRequestInputSet = function() {
    CancelReportRequestInputSet.super_.call(this);
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
        Set the value of the ReportProcessingStatus input for this Choreo. ((optional, string) A report processing status by which to filter report requests. Valid values are: _SUBMITTED_, _IN_PROGRESS_, _CANCELLED_, _DONE_, _DONE_NO_DATA_.)
        */
        this.set_ReportProcessingStatus = function(value) {
            this.setInput("ReportProcessingStatus", value);
        }

        /*
        Set the value of the ReportRequestId input for this Choreo. ((optional, string) A ReportRequestId value. If you pass in a ReportRequestId value, other query conditions are ignored.)
        */
        this.set_ReportRequestId = function(value) {
            this.setInput("ReportRequestId", value);
        }

        /*
        Set the value of the ReportType input for this Choreo. ((optional, string) A ReportType enumeration value (i.e. GET_ORDERS_DATA_).)
        */
        this.set_ReportType = function(value) {
            this.setInput("ReportType", value);
        }

        /*
        Set the value of the RequestedFromDate input for this Choreo. ((optional, date) The start of the date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_RequestedFromDate = function(value) {
            this.setInput("RequestedFromDate", value);
        }

        /*
        Set the value of the RequestedToDate input for this Choreo. ((optional, date) The end of the date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_RequestedToDate = function(value) {
            this.setInput("RequestedToDate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CancelReportRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CancelReportRequestResultSet = function(resultStream) {
    CancelReportRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Count" output from this Choreo execution. ((integer) A non-negative integer that represents the total number of report requests that were cancelled.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CancelReportRequest, choreography.Choreography);
util.inherits(CancelReportRequestInputSet, choreography.InputSet);
util.inherits(CancelReportRequestResultSet, choreography.ResultSet);
exports.CancelReportRequest = CancelReportRequest;


/*
    FlatFileOrderReport
    Returns a tab-delimited flat file order report. The report shows orders from the previous 60 days.
*/


var FlatFileOrderReport = function(session) {
    /*
        Create a new instance of the FlatFileOrderReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/FlatFileOrderReport"
    FlatFileOrderReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FlatFileOrderReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FlatFileOrderReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FlatFileOrderReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FlatFileOrderReportInputSet = function() {
    FlatFileOrderReportInputSet.super_.call(this);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 5 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FlatFileOrderReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FlatFileOrderReportResultSet = function(resultStream) {
    FlatFileOrderReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Report" output from this Choreo execution. ((multiline) The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
}

util.inherits(FlatFileOrderReport, choreography.Choreography);
util.inherits(FlatFileOrderReportInputSet, choreography.InputSet);
util.inherits(FlatFileOrderReportResultSet, choreography.ResultSet);
exports.FlatFileOrderReport = FlatFileOrderReport;


/*
    GetReportById
    Returns the contents of a report with a given report id.
*/


var GetReportById = function(session) {
    /*
        Create a new instance of the GetReportById Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/GetReportById"
    GetReportById.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReportByIdResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReportByIdInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReportById
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReportByIdInputSet = function() {
    GetReportByIdInputSet.super_.call(this);
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
        Set the value of the ReportId input for this Choreo. ((required, integer) The id of the report to retrieve.)
        */
        this.set_ReportId = function(value) {
            this.setInput("ReportId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReportById Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReportByIdResultSet = function(resultStream) {
    GetReportByIdResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon which contains the contents of the report requested. This is typically a flat file or XML information.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ContentMD5Header" output from this Choreo execution. ((string) )
        */
        this.get_ContentMD5Header = function() {
            return this.getResult("ContentMD5Header");
        }
}

util.inherits(GetReportById, choreography.Choreography);
util.inherits(GetReportByIdInputSet, choreography.InputSet);
util.inherits(GetReportByIdResultSet, choreography.ResultSet);
exports.GetReportById = GetReportById;


/*
    GetReportCount
    Retrieves the number of your available Amazon Marketplace reports, ready for download, that were generated in the last 90 days.
*/


var GetReportCount = function(session) {
    /*
        Create a new instance of the GetReportCount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/GetReportCount"
    GetReportCount.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReportCountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReportCountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReportCount
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReportCountInputSet = function() {
    GetReportCountInputSet.super_.call(this);
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
        Set the value of the Acknowledged input for this Choreo. ((optional, boolean) A Boolean value that indicates if an order report has been acknowledged by a prior call to UpdateReportAcknowledgements. Set to "true" to list order reports that have been acknowledged.)
        */
        this.set_Acknowledged = function(value) {
            this.setInput("Acknowledged", value);
        }

        /*
        Set the value of the AvailableFromDate input for this Choreo. ((optional, date) The earliest date you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_AvailableFromDate = function(value) {
            this.setInput("AvailableFromDate", value);
        }

        /*
        Set the value of the AvailableToDate input for this Choreo. ((optional, date) The most recent date you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_AvailableToDate = function(value) {
            this.setInput("AvailableToDate", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ReportType input for this Choreo. ((optional, string) A ReportType enumeration value (i.e. _GET_FLAT_FILE_OPEN_LISTINGS_DATA_).)
        */
        this.set_ReportType = function(value) {
            this.setInput("ReportType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReportCount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReportCountResultSet = function(resultStream) {
    GetReportCountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Count" output from this Choreo execution. ((integer) A non-negative integer. parsed from the Amazon response, that represents the total number of reports available to download.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
}

util.inherits(GetReportCount, choreography.Choreography);
util.inherits(GetReportCountInputSet, choreography.InputSet);
util.inherits(GetReportCountResultSet, choreography.ResultSet);
exports.GetReportCount = GetReportCount;


/*
    GetReportList
    Returns a list of reports that were created in the previous 90 days.
*/


var GetReportList = function(session) {
    /*
        Create a new instance of the GetReportList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/GetReportList"
    GetReportList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReportListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReportListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReportList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReportListInputSet = function() {
    GetReportListInputSet.super_.call(this);
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
        Set the value of the Acknowledged input for this Choreo. ((optional, boolean) A Boolean value that indicates if an order report has been acknowledged by a prior call to UpdateReportAcknowledgements. Set to "true" to list order reports that have been acknowledged.)
        */
        this.set_Acknowledged = function(value) {
            this.setInput("Acknowledged", value);
        }

        /*
        Set the value of the AvailableFromDate input for this Choreo. ((optional, date) The earliest date you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_AvailableFromDate = function(value) {
            this.setInput("AvailableFromDate", value);
        }

        /*
        Set the value of the AvailableToDate input for this Choreo. ((optional, date) The most recent date you are looking for, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_AvailableToDate = function(value) {
            this.setInput("AvailableToDate", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the MaxCount input for this Choreo. ((optional, integer) A non-negative integer that represents the maximum number of report requests to return. Defaults to 10. Max is 100.)
        */
        this.set_MaxCount = function(value) {
            this.setInput("MaxCount", value);
        }

        /*
        Set the value of the ReportRequestId input for this Choreo. ((optional, integer) A ReportRequestId value. If you pass a ReportRequestId value, other query conditions are ignored.)
        */
        this.set_ReportRequestId = function(value) {
            this.setInput("ReportRequestId", value);
        }

        /*
        Set the value of the ReportType input for this Choreo. ((optional, string) A ReportType enumeration value (i.e. GET_ORDERS_DATA_).)
        */
        this.set_ReportType = function(value) {
            this.setInput("ReportType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((conditional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReportList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReportListResultSet = function(resultStream) {
    GetReportListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ReportId" output from this Choreo execution. ((integer) The report id parsed from the Amazon response. If multiple records are returned, this output variable will contain the first id in the list.)
        */
        this.get_ReportId = function() {
            return this.getResult("ReportId");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReportList, choreography.Choreography);
util.inherits(GetReportListInputSet, choreography.InputSet);
util.inherits(GetReportListResultSet, choreography.ResultSet);
exports.GetReportList = GetReportList;


/*
    GetReportRequestList
    Returns a list of report requests that you can use to get the ReportProcessingStatus and ReportId in order to retrieve a report.
*/


var GetReportRequestList = function(session) {
    /*
        Create a new instance of the GetReportRequestList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/GetReportRequestList"
    GetReportRequestList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReportRequestListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReportRequestListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReportRequestList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReportRequestListInputSet = function() {
    GetReportRequestListInputSet.super_.call(this);
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
        Set the value of the MaxCount input for this Choreo. ((optional, integer) A non-negative integer that represents the maximum number of report requests to return. Defaults to 10. Max is 100.)
        */
        this.set_MaxCount = function(value) {
            this.setInput("MaxCount", value);
        }

        /*
        Set the value of the ReportProcessingStatusList input for this Choreo. ((optional, string) A comma separated list of up to three ReportProcessingStatuses by which to filter report requests.)
        */
        this.set_ReportProcessingStatusList = function(value) {
            this.setInput("ReportProcessingStatusList", value);
        }

        /*
        Set the value of the ReportRequestIdList input for this Choreo. ((optional, string) A comma separated list of up to three ReportRequestId values. If you pass in a ReportRequestId values, other query conditions are ignored.)
        */
        this.set_ReportRequestIdList = function(value) {
            this.setInput("ReportRequestIdList", value);
        }

        /*
        Set the value of the ReportTypeList input for this Choreo. ((optional, string) A comma separated list of up to three ReportType enumeration values.)
        */
        this.set_ReportTypeList = function(value) {
            this.setInput("ReportTypeList", value);
        }

        /*
        Set the value of the RequestedFromDate input for this Choreo. ((optional, date) The start of the date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_RequestedFromDate = function(value) {
            this.setInput("RequestedFromDate", value);
        }

        /*
        Set the value of the RequestedToDate input for this Choreo. ((optional, date) The end of the date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_RequestedToDate = function(value) {
            this.setInput("RequestedToDate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReportRequestList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReportRequestListResultSet = function(resultStream) {
    GetReportRequestListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The report status parsed from the Amazon response. If multiple records are returned, this output variable will contain the report status in the list.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The report request id parsed from the Amazon response. If multiple records are returned, this output variable will contain the first id in the list.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response. If multiple records are returned, this output variable will contain the first id in the list.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
}

util.inherits(GetReportRequestList, choreography.Choreography);
util.inherits(GetReportRequestListInputSet, choreography.InputSet);
util.inherits(GetReportRequestListResultSet, choreography.ResultSet);
exports.GetReportRequestList = GetReportRequestList;


/*
    ListInventoryReport
    Returns a tab-delimited report of open listings. The report contains the SKU, ASIN, Price, and Quantity fields for inventory listings.
*/


var ListInventoryReport = function(session) {
    /*
        Create a new instance of the ListInventoryReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/ListInventoryReport"
    ListInventoryReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInventoryReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInventoryReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInventoryReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInventoryReportInputSet = function() {
    ListInventoryReportInputSet.super_.call(this);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 5 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInventoryReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInventoryReportResultSet = function(resultStream) {
    ListInventoryReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
        /*
        Retrieve the value for the "Report" output from this Choreo execution. ((multiline) The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
}

util.inherits(ListInventoryReport, choreography.Choreography);
util.inherits(ListInventoryReportInputSet, choreography.InputSet);
util.inherits(ListInventoryReportResultSet, choreography.ResultSet);
exports.ListInventoryReport = ListInventoryReport;


/*
    MerchantListingsLiteReport
    Returns a tab-delimited flat file active listings report that contains only the SKU, ASIN, Price, and Quantity fields for items that have a quantity greater than zero.
*/


var MerchantListingsLiteReport = function(session) {
    /*
        Create a new instance of the MerchantListingsLiteReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/MerchantListingsLiteReport"
    MerchantListingsLiteReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MerchantListingsLiteReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MerchantListingsLiteReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MerchantListingsLiteReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MerchantListingsLiteReportInputSet = function() {
    MerchantListingsLiteReportInputSet.super_.call(this);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 5 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MerchantListingsLiteReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MerchantListingsLiteReportResultSet = function(resultStream) {
    MerchantListingsLiteReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "Report" output from this Choreo execution. ((multiline) The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
}

util.inherits(MerchantListingsLiteReport, choreography.Choreography);
util.inherits(MerchantListingsLiteReportInputSet, choreography.InputSet);
util.inherits(MerchantListingsLiteReportResultSet, choreography.ResultSet);
exports.MerchantListingsLiteReport = MerchantListingsLiteReport;


/*
    MerchantListingsReport
    Returns a tab-delimited report of active listings.
*/


var MerchantListingsReport = function(session) {
    /*
        Create a new instance of the MerchantListingsReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/MerchantListingsReport"
    MerchantListingsReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MerchantListingsReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MerchantListingsReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MerchantListingsReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MerchantListingsReportInputSet = function() {
    MerchantListingsReportInputSet.super_.call(this);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 5 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MerchantListingsReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MerchantListingsReportResultSet = function(resultStream) {
    MerchantListingsReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Report" output from this Choreo execution. ((multiline) The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
}

util.inherits(MerchantListingsReport, choreography.Choreography);
util.inherits(MerchantListingsReportInputSet, choreography.InputSet);
util.inherits(MerchantListingsReportResultSet, choreography.ResultSet);
exports.MerchantListingsReport = MerchantListingsReport;


/*
    RequestReport
    Creates a report request and submits the request to Amazon MWS.
*/


var RequestReport = function(session) {
    /*
        Create a new instance of the RequestReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/RequestReport"
    RequestReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RequestReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RequestReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RequestReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RequestReportInputSet = function() {
    RequestReportInputSet.super_.call(this);
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
        Set the value of the EndDate input for this Choreo. ((optional, date) The end of a date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ReportOptions input for this Choreo. ((optional, string) A Boolean value that shows or hides an additional column of information on several order reports. When set to ShowSalesChannel=true, an additional column is added showing the sales channel.)
        */
        this.set_ReportOptions = function(value) {
            this.setInput("ReportOptions", value);
        }

        /*
        Set the value of the ReportType input for this Choreo. ((optional, string) A ReportType enumeration value. Defaults to _GET_FLAT_FILE_OPEN_LISTINGS_DATA_.)
        */
        this.set_ReportType = function(value) {
            this.setInput("ReportType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) The start of a date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RequestReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RequestReportResultSet = function(resultStream) {
    RequestReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RequestReport, choreography.Choreography);
util.inherits(RequestReportInputSet, choreography.InputSet);
util.inherits(RequestReportResultSet, choreography.ResultSet);
exports.RequestReport = RequestReport;


/*
    RetrieveReport
    Creates a report request of any report type, polls for the status of the report, and downloads the report when it's available.
*/


var RetrieveReport = function(session) {
    /*
        Create a new instance of the RetrieveReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/RetrieveReport"
    RetrieveReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveReportInputSet = function() {
    RetrieveReportInputSet.super_.call(this);
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
        Set the value of the EndDate input for this Choreo. ((optional, date) The end of a date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ReportType input for this Choreo. ((optional, string) A ReportType enumeration value. Defaults to _GET_FLAT_FILE_OPEN_LISTINGS_DATA_.)
        */
        this.set_ReportType = function(value) {
            this.setInput("ReportType", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) The start of a date range used for selecting the data to report, in ISO8601 date format (i.e. 2012-01-01).)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 10 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveReportResultSet = function(resultStream) {
    RetrieveReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Report" output from this Choreo execution. (The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
}

util.inherits(RetrieveReport, choreography.Choreography);
util.inherits(RetrieveReportInputSet, choreography.InputSet);
util.inherits(RetrieveReportResultSet, choreography.ResultSet);
exports.RetrieveReport = RetrieveReport;


/*
    UnshippedOrdersReport
    Returns a tab-delimited flat file report that contains only orders that are not confirmed as shipped.
*/


var UnshippedOrdersReport = function(session) {
    /*
        Create a new instance of the UnshippedOrdersReport Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/UnshippedOrdersReport"
    UnshippedOrdersReport.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnshippedOrdersReportResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnshippedOrdersReportInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnshippedOrdersReport
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnshippedOrdersReportInputSet = function() {
    UnshippedOrdersReportInputSet.super_.call(this);
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
        Set the value of the TimeToWait input for this Choreo. ((optional, integer) By default, the Choreo will wait for 5 minutes to see if the report is ready for retrieval. Max is 120 minutes.)
        */
        this.set_TimeToWait = function(value) {
            this.setInput("TimeToWait", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnshippedOrdersReport Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnshippedOrdersReportResultSet = function(resultStream) {
    UnshippedOrdersReportResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Report" output from this Choreo execution. ((multiline) The report contents.)
        */
        this.get_Report = function() {
            return this.getResult("Report");
        }
        /*
        Retrieve the value for the "GeneratedReportId" output from this Choreo execution. ((integer) The GeneratedReportId parsed from the Amazon response.)
        */
        this.get_GeneratedReportId = function() {
            return this.getResult("GeneratedReportId");
        }
        /*
        Retrieve the value for the "ReportProcessingStatus" output from this Choreo execution. ((string) The status of the report request parsed from the Amazon response.)
        */
        this.get_ReportProcessingStatus = function() {
            return this.getResult("ReportProcessingStatus");
        }
        /*
        Retrieve the value for the "ReportRequestId" output from this Choreo execution. ((integer) The ReportRequestId parsed from the Amazon response. This id is used in GetReportRequestList.)
        */
        this.get_ReportRequestId = function() {
            return this.getResult("ReportRequestId");
        }
}

util.inherits(UnshippedOrdersReport, choreography.Choreography);
util.inherits(UnshippedOrdersReportInputSet, choreography.InputSet);
util.inherits(UnshippedOrdersReportResultSet, choreography.ResultSet);
exports.UnshippedOrdersReport = UnshippedOrdersReport;


/*
    UpdateReportAcknowledgements
    Updates the acknowledged status of a report.
*/


var UpdateReportAcknowledgements = function(session) {
    /*
        Create a new instance of the UpdateReportAcknowledgements Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/Marketplace/Reports/UpdateReportAcknowledgements"
    UpdateReportAcknowledgements.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateReportAcknowledgementsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateReportAcknowledgementsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateReportAcknowledgements
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateReportAcknowledgementsInputSet = function() {
    UpdateReportAcknowledgementsInputSet.super_.call(this);
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
        Set the value of the Acknowledged input for this Choreo. ((optional, boolean) A Boolean value that indicates if an order report has been acknowledged by a prior call to UpdateReportAcknowledgements. Set to true to list order reports that have been acknowledged.)
        */
        this.set_Acknowledged = function(value) {
            this.setInput("Acknowledged", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((conditional, string) The base URL for the MWS endpoint. Defaults to mws.amazonservices.co.uk.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ReportId input for this Choreo. ((required, integer) The id of the report to acknowledge.)
        */
        this.set_ReportId = function(value) {
            this.setInput("ReportId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateReportAcknowledgements Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateReportAcknowledgementsResultSet = function(resultStream) {
    UpdateReportAcknowledgementsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateReportAcknowledgements, choreography.Choreography);
util.inherits(UpdateReportAcknowledgementsInputSet, choreography.InputSet);
util.inherits(UpdateReportAcknowledgementsResultSet, choreography.ResultSet);
exports.UpdateReportAcknowledgements = UpdateReportAcknowledgements;

