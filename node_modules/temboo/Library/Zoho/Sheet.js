
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DownloadSpreadsheet
    Downloads a specified spreadsheet in a user's Zoho Sheet Account.
*/


var DownloadSpreadsheet = function(session) {
    /*
        Create a new instance of the DownloadSpreadsheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Sheet/DownloadSpreadsheet"
    DownloadSpreadsheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadSpreadsheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadSpreadsheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadSpreadsheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadSpreadsheetInputSet = function() {
    DownloadSpreadsheetInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BookId input for this Choreo. ((required, integer) Specifies the unique spreadsheet id to download.)
        */
        this.set_BookId = function(value) {
            this.setInput("BookId", value);
        }

        /*
        Set the value of the DownloadFormat input for this Choreo. ((required, string) Specifies the file format in which the documents need to be downloaded. Possible values for documents: xls, xlsx, ods, sxc, pdf, html, csv, tsv.)
        */
        this.set_DownloadFormat = function(value) {
            this.setInput("DownloadFormat", value);
        }

        /*
        Set the value of the LoginID input for this Choreo. ((required, string) Your Zoho username (or login id))
        */
        this.set_LoginID = function(value) {
            this.setInput("LoginID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zoho password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DownloadSpreadsheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadSpreadsheetResultSet = function(resultStream) {
    DownloadSpreadsheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the DownloadFormat input.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DownloadSpreadsheet, choreography.Choreography);
util.inherits(DownloadSpreadsheetInputSet, choreography.InputSet);
util.inherits(DownloadSpreadsheetResultSet, choreography.ResultSet);
exports.DownloadSpreadsheet = DownloadSpreadsheet;


/*
    ListAllSpreadsheets
    Lists all the spreadsheets associated with a user's Zoho Sheet Account.
*/


var ListAllSpreadsheets = function(session) {
    /*
        Create a new instance of the ListAllSpreadsheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Sheet/ListAllSpreadsheets"
    ListAllSpreadsheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllSpreadsheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllSpreadsheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllSpreadsheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllSpreadsheetsInputSet = function() {
    ListAllSpreadsheetsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Sets the number of documents to be listed.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the LoginID input for this Choreo. ((required, string) Your Zoho username (or login id))
        */
        this.set_LoginID = function(value) {
            this.setInput("LoginID", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order documents by createdTime, lastModifiedTime or name.)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zoho password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Sorting order: asc or desc. Default sort order is set to ascending.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartFrom input for this Choreo. ((optional, integer) Sets the initial document number from which the documents will be listed.)
        */
        this.set_StartFrom = function(value) {
            this.setInput("StartFrom", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllSpreadsheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllSpreadsheetsResultSet = function(resultStream) {
    ListAllSpreadsheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllSpreadsheets, choreography.Choreography);
util.inherits(ListAllSpreadsheetsInputSet, choreography.InputSet);
util.inherits(ListAllSpreadsheetsResultSet, choreography.ResultSet);
exports.ListAllSpreadsheets = ListAllSpreadsheets;


/*
    ListPublicSpreadsheets
    Lists all the spreadsheets that have been made "public" from a user's Zoho Sheet  Account.
*/


var ListPublicSpreadsheets = function(session) {
    /*
        Create a new instance of the ListPublicSpreadsheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Sheet/ListPublicSpreadsheets"
    ListPublicSpreadsheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPublicSpreadsheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPublicSpreadsheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPublicSpreadsheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPublicSpreadsheetsInputSet = function() {
    ListPublicSpreadsheetsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Sets the number of documents to be listed.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the LoginID input for this Choreo. ((required, string) Your Zoho username (or login id))
        */
        this.set_LoginID = function(value) {
            this.setInput("LoginID", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order documents by createdTime, lastModifiedTime or name.)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zoho password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Sorting order: asc or desc. Default sort order is set to ascending.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartFrom input for this Choreo. ((optional, integer) Sets the initial document number from which the documents will be listed.)
        */
        this.set_StartFrom = function(value) {
            this.setInput("StartFrom", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPublicSpreadsheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPublicSpreadsheetsResultSet = function(resultStream) {
    ListPublicSpreadsheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPublicSpreadsheets, choreography.Choreography);
util.inherits(ListPublicSpreadsheetsInputSet, choreography.InputSet);
util.inherits(ListPublicSpreadsheetsResultSet, choreography.ResultSet);
exports.ListPublicSpreadsheets = ListPublicSpreadsheets;


/*
    ListSharedSpreadsheets
    Lists all the spreadsheets that have been "shared" to a user's Zoho Sheet Account.
*/


var ListSharedSpreadsheets = function(session) {
    /*
        Create a new instance of the ListSharedSpreadsheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Sheet/ListSharedSpreadsheets"
    ListSharedSpreadsheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSharedSpreadsheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSharedSpreadsheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSharedSpreadsheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSharedSpreadsheetsInputSet = function() {
    ListSharedSpreadsheetsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Sets the number of documents to be listed.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the LoginID input for this Choreo. ((required, string) Your Zoho username (or login id))
        */
        this.set_LoginID = function(value) {
            this.setInput("LoginID", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order documents by createdTime, lastModifiedTime or name.)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zoho password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Sorting order: asc or desc. Default sort order is set to ascending.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartFrom input for this Choreo. ((optional, integer) Sets the initial document number from which the documents will be listed.)
        */
        this.set_StartFrom = function(value) {
            this.setInput("StartFrom", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSharedSpreadsheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSharedSpreadsheetsResultSet = function(resultStream) {
    ListSharedSpreadsheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSharedSpreadsheets, choreography.Choreography);
util.inherits(ListSharedSpreadsheetsInputSet, choreography.InputSet);
util.inherits(ListSharedSpreadsheetsResultSet, choreography.ResultSet);
exports.ListSharedSpreadsheets = ListSharedSpreadsheets;


/*
    ListTrashedSpreadsheets
    Lists all the spreadsheets that have been "trashed" from a user's Zoho Sheet Account.
*/


var ListTrashedSpreadsheets = function(session) {
    /*
        Create a new instance of the ListTrashedSpreadsheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Sheet/ListTrashedSpreadsheets"
    ListTrashedSpreadsheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTrashedSpreadsheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTrashedSpreadsheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTrashedSpreadsheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTrashedSpreadsheetsInputSet = function() {
    ListTrashedSpreadsheetsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Sets the number of documents to be listed.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the LoginID input for this Choreo. ((required, string) Your Zoho username (or login id))
        */
        this.set_LoginID = function(value) {
            this.setInput("LoginID", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order documents by createdTime, lastModifiedTime or name.)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zoho password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Sorting order: asc or desc. Default sort order is set to ascending.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartFrom input for this Choreo. ((optional, integer) Sets the initial document number from which the documents will be listed.)
        */
        this.set_StartFrom = function(value) {
            this.setInput("StartFrom", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListTrashedSpreadsheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTrashedSpreadsheetsResultSet = function(resultStream) {
    ListTrashedSpreadsheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListTrashedSpreadsheets, choreography.Choreography);
util.inherits(ListTrashedSpreadsheetsInputSet, choreography.InputSet);
util.inherits(ListTrashedSpreadsheetsResultSet, choreography.ResultSet);
exports.ListTrashedSpreadsheets = ListTrashedSpreadsheets;

