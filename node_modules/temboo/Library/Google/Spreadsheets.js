
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddListRows
    Adds one or more rows to a worksheet in a Google spreadsheet using a simple XML file you provide.
*/


var AddListRows = function(session) {
    /*
        Create a new instance of the AddListRows Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/AddListRows"
    AddListRows.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddListRowsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddListRowsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddListRows
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddListRowsInputSet = function() {
    AddListRowsInputSet.super_.call(this);
        /*
        Set the value of the RowsetXML input for this Choreo. ((required, xml) The rows of data that you want to add to a worksheet in XML format. Your XML needs to be in the rowset/row schema described in the Choreo documentation.)
        */
        this.set_RowsetXML = function(value) {
            this.setInput("RowsetXML", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet that contains the worksheet you want to add rows to.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet that you want to add rows to.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddListRows Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddListRowsResultSet = function(resultStream) {
    AddListRowsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddListRows, choreography.Choreography);
util.inherits(AddListRowsInputSet, choreography.InputSet);
util.inherits(AddListRowsResultSet, choreography.ResultSet);
exports.AddListRows = AddListRows;


/*
    AddWorksheet
    Creates a new worksheet within an existing spreadsheet.
*/


var AddWorksheet = function(session) {
    /*
        Create a new instance of the AddWorksheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/AddWorksheet"
    AddWorksheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddWorksheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddWorksheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddWorksheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddWorksheetInputSet = function() {
    AddWorksheetInputSet.super_.call(this);
        /*
        Set the value of the ColumnCount input for this Choreo. ((required, integer) The number of columns that you want to specify for the new worksheet.)
        */
        this.set_ColumnCount = function(value) {
            this.setInput("ColumnCount", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowCount input for this Choreo. ((required, integer) The number of rows that you want to specify for the new worksheet.)
        */
        this.set_RowCount = function(value) {
            this.setInput("RowCount", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key associated with the spreadsheet that you want to add a worksheet to.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the new worksheet.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddWorksheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddWorksheetResultSet = function(resultStream) {
    AddWorksheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddWorksheet, choreography.Choreography);
util.inherits(AddWorksheetInputSet, choreography.InputSet);
util.inherits(AddWorksheetResultSet, choreography.ResultSet);
exports.AddWorksheet = AddWorksheet;


/*
    AppendRow
    Appends a simple comma-separated row of data to a given Google Spreadsheet.
*/


var AppendRow = function(session) {
    /*
        Create a new instance of the AppendRow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/AppendRow"
    AppendRow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AppendRowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AppendRowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AppendRow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AppendRowInputSet = function() {
    AppendRowInputSet.super_.call(this);
        /*
        Set the value of the RowData input for this Choreo. ((required, string) A comma separated list of items to be added as a new row to the spreadsheet.)
        */
        this.set_RowData = function(value) {
            this.setInput("RowData", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SheetName input for this Choreo. ((optional, string) The name of the sheet to write to. If not specified, rows are written to the first sheet.)
        */
        this.set_SheetName = function(value) {
            this.setInput("SheetName", value);
        }

        /*
        Set the value of the SpreadsheetTitle input for this Choreo. ((required, string) The title of the spreadsheet that you want to write rows to.)
        */
        this.set_SpreadsheetTitle = function(value) {
            this.setInput("SpreadsheetTitle", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AppendRow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AppendRowResultSet = function(resultStream) {
    AppendRowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Returns the string "success" if no error occurs.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AppendRow, choreography.Choreography);
util.inherits(AppendRowInputSet, choreography.InputSet);
util.inherits(AppendRowResultSet, choreography.ResultSet);
exports.AppendRow = AppendRow;


/*
    ClientLoginAuthentication
    Request an authorization token for Google Documents.
*/


var ClientLoginAuthentication = function(session) {
    /*
        Create a new instance of the ClientLoginAuthentication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/ClientLoginAuthentication"
    ClientLoginAuthentication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ClientLoginAuthenticationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ClientLoginAuthenticationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ClientLoginAuthentication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ClientLoginAuthenticationInputSet = function() {
    ClientLoginAuthenticationInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Service input for this Choreo. ((required, string) The service that you are requesting an authorization token for. Defaults to 'wise' for Spreadsheets API.)
        */
        this.set_Service = function(value) {
            this.setInput("Service", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ClientLoginAuthentication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ClientLoginAuthenticationResultSet = function(resultStream) {
    ClientLoginAuthenticationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AuthorizationKey" output from this Choreo execution. ((string) The auth token parsed from the Google login response)
        */
        this.get_AuthorizationKey = function() {
            return this.getResult("AuthorizationKey");
        }
}

util.inherits(ClientLoginAuthentication, choreography.Choreography);
util.inherits(ClientLoginAuthenticationInputSet, choreography.InputSet);
util.inherits(ClientLoginAuthenticationResultSet, choreography.ResultSet);
exports.ClientLoginAuthentication = ClientLoginAuthentication;


/*
    CreateSpreadsheet
    Creates a Google spreadsheet from a CSV file.
*/


var CreateSpreadsheet = function(session) {
    /*
        Create a new instance of the CreateSpreadsheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/CreateSpreadsheet"
    CreateSpreadsheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSpreadsheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSpreadsheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSpreadsheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSpreadsheetInputSet = function() {
    CreateSpreadsheetInputSet.super_.call(this);
        /*
        Set the value of the UploadFile input for this Choreo. ((conditional, multiline) The data to be written to the Google spreadsheet. Should be in CSV format.)
        */
        this.set_UploadFile = function(value) {
            this.setInput("UploadFile", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The name of the new document.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultCSVFile input for this Choreo. ((optional, vault file) The path to a CSV file stored in the vault. This is required unless you are using the UploadFile input variable. )
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateSpreadsheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSpreadsheetResultSet = function(resultStream) {
    CreateSpreadsheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateSpreadsheet, choreography.Choreography);
util.inherits(CreateSpreadsheetInputSet, choreography.InputSet);
util.inherits(CreateSpreadsheetResultSet, choreography.ResultSet);
exports.CreateSpreadsheet = CreateSpreadsheet;


/*
    DeleteListRow
    Deletes a specified worksheet row from a Google spreadsheet.
*/


var DeleteListRow = function(session) {
    /*
        Create a new instance of the DeleteListRow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/DeleteListRow"
    DeleteListRow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteListRowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteListRowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteListRow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteListRowInputSet = function() {
    DeleteListRowInputSet.super_.call(this);
        /*
        Set the value of the EditLink input for this Choreo. ((optional, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_EditLink = function(value) {
            this.setInput("EditLink", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The entry's resource URL found in the link element of the entry. Can be retrieved by running RetrieveListFeed Choreo. When this is provided, SpreadsheetKey, WorksheetId, and RowId are not needed.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RowId input for this Choreo. ((conditional, string) The unique ID of the row you want to delete. Required unless providing the Link input.)
        */
        this.set_RowId = function(value) {
            this.setInput("RowId", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet associated with the row you want to delete. Required unless providing the Link input.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet associated with the row you want to delete. Required unless providing the Link input.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteListRow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteListRowResultSet = function(resultStream) {
    DeleteListRowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteListRow, choreography.Choreography);
util.inherits(DeleteListRowInputSet, choreography.InputSet);
util.inherits(DeleteListRowResultSet, choreography.ResultSet);
exports.DeleteListRow = DeleteListRow;


/*
    DeleteWorksheet
    Deletes a specified worksheet from an existing spreadsheet.
*/


var DeleteWorksheet = function(session) {
    /*
        Create a new instance of the DeleteWorksheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/DeleteWorksheet"
    DeleteWorksheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteWorksheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteWorksheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteWorksheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteWorksheetInputSet = function() {
    DeleteWorksheetInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key associated with the spreadsheet that contains a worksheet you want to delete.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID associated with the worksheet that you want to delete.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteWorksheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteWorksheetResultSet = function(resultStream) {
    DeleteWorksheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteWorksheet, choreography.Choreography);
util.inherits(DeleteWorksheetInputSet, choreography.InputSet);
util.inherits(DeleteWorksheetResultSet, choreography.ResultSet);
exports.DeleteWorksheet = DeleteWorksheet;


/*
    DownloadBase64EncodedSpreadsheet
    Downloads a document with the title you specify, and returns the content as Base64 encoded data.
*/


var DownloadBase64EncodedSpreadsheet = function(session) {
    /*
        Create a new instance of the DownloadBase64EncodedSpreadsheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/DownloadBase64EncodedSpreadsheet"
    DownloadBase64EncodedSpreadsheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadBase64EncodedSpreadsheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadBase64EncodedSpreadsheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadBase64EncodedSpreadsheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadBase64EncodedSpreadsheetInputSet = function() {
    DownloadBase64EncodedSpreadsheetInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format you want to export the spreadsheet to, such as "txt" or "pdf". The default download format is "txt".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The entry's resource URL found in the link element of the entry. Required if Title is not specified.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the document to download. Required if the source Link is not specifed.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DownloadBase64EncodedSpreadsheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadBase64EncodedSpreadsheetResultSet = function(resultStream) {
    DownloadBase64EncodedSpreadsheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FileContents" output from this Choreo execution. ((string) The Base64 encoded file content of the downloaded file.)
        */
        this.get_FileContents = function() {
            return this.getResult("FileContents");
        }
}

util.inherits(DownloadBase64EncodedSpreadsheet, choreography.Choreography);
util.inherits(DownloadBase64EncodedSpreadsheetInputSet, choreography.InputSet);
util.inherits(DownloadBase64EncodedSpreadsheetResultSet, choreography.ResultSet);
exports.DownloadBase64EncodedSpreadsheet = DownloadBase64EncodedSpreadsheet;


/*
    RetrieveCellFeed
    Retrieves a list of cell names and values in a specified Google worksheet.
*/


var RetrieveCellFeed = function(session) {
    /*
        Create a new instance of the RetrieveCellFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveCellFeed"
    RetrieveCellFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCellFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCellFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCellFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCellFeedInputSet = function() {
    RetrieveCellFeedInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the cells you want to retrieve.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet associated with the cells you want to retrieve.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCellFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCellFeedResultSet = function(resultStream) {
    RetrieveCellFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveCellFeed, choreography.Choreography);
util.inherits(RetrieveCellFeedInputSet, choreography.InputSet);
util.inherits(RetrieveCellFeedResultSet, choreography.ResultSet);
exports.RetrieveCellFeed = RetrieveCellFeed;


/*
    RetrieveCellList
    Retrieves a list of cell values using the specified cell locations.
*/


var RetrieveCellList = function(session) {
    /*
        Create a new instance of the RetrieveCellList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveCellList"
    RetrieveCellList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCellListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCellListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCellList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCellListInputSet = function() {
    RetrieveCellListInputSet.super_.call(this);
        /*
        Set the value of the CellLocations input for this Choreo. ((required, string) A comma-separated list of cell locations to retrieve (e.g. A2,B4,C3).)
        */
        this.set_CellLocations = function(value) {
            this.setInput("CellLocations", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet associated with the cells you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((optional, string) The name of the spreadsheet containing the cells to retrieve. This and WorksheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet associated with the cells you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

        /*
        Set the value of the WorksheetName input for this Choreo. ((optional, string) The name of the worksheet containing the cells to retrieve. This and SpreadsheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup the spreadsheet details by name.)
        */
        this.set_WorksheetName = function(value) {
            this.setInput("WorksheetName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCellList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCellListResultSet = function(resultStream) {
    RetrieveCellListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CellValues" output from this Choreo execution. ((json) )
        */
        this.get_CellValues = function() {
            return this.getResult("CellValues");
        }
}

util.inherits(RetrieveCellList, choreography.Choreography);
util.inherits(RetrieveCellListInputSet, choreography.InputSet);
util.inherits(RetrieveCellListResultSet, choreography.ResultSet);
exports.RetrieveCellList = RetrieveCellList;


/*
    RetrieveCellValue
    Retrieves the value of given cell.
*/


var RetrieveCellValue = function(session) {
    /*
        Create a new instance of the RetrieveCellValue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveCellValue"
    RetrieveCellValue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveCellValueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveCellValueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveCellValue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveCellValueInputSet = function() {
    RetrieveCellValueInputSet.super_.call(this);
        /*
        Set the value of the CellLocation input for this Choreo. ((required, string) The location of the cell that should be retrieved (e.g. A2).)
        */
        this.set_CellLocation = function(value) {
            this.setInput("CellLocation", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet associated with the cell you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((optional, string) The name of the spreadsheet containing the cell to retrieve. This and WorksheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet associated with the cell you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

        /*
        Set the value of the WorksheetName input for this Choreo. ((optional, string) The name of the worksheet containing the cell to retrieve. This and SpreadsheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup the spreadsheet details by name.)
        */
        this.set_WorksheetName = function(value) {
            this.setInput("WorksheetName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveCellValue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveCellValueResultSet = function(resultStream) {
    RetrieveCellValueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CellValue" output from this Choreo execution. ((string) The value of the cell.)
        */
        this.get_CellValue = function() {
            return this.getResult("CellValue");
        }
}

util.inherits(RetrieveCellValue, choreography.Choreography);
util.inherits(RetrieveCellValueInputSet, choreography.InputSet);
util.inherits(RetrieveCellValueResultSet, choreography.ResultSet);
exports.RetrieveCellValue = RetrieveCellValue;


/*
    RetrieveLastColumnValue
    Returns the value of the last cell in a specified column.
*/


var RetrieveLastColumnValue = function(session) {
    /*
        Create a new instance of the RetrieveLastColumnValue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveLastColumnValue"
    RetrieveLastColumnValue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveLastColumnValueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveLastColumnValueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveLastColumnValue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveLastColumnValueInputSet = function() {
    RetrieveLastColumnValueInputSet.super_.call(this);
        /*
        Set the value of the ColumnName input for this Choreo. ((required, string) The name of the column that the cell value is in. This should be the value in row 1 of the column you wish to search.)
        */
        this.set_ColumnName = function(value) {
            this.setInput("ColumnName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet to query. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((optional, string) The name of the spreadsheet to query. This and WorksheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet to query. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

        /*
        Set the value of the WorksheetName input for this Choreo. ((optional, string) The name of the worksheet to query. This and SpreadsheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup the spreadsheet details by name.)
        */
        this.set_WorksheetName = function(value) {
            this.setInput("WorksheetName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveLastColumnValue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveLastColumnValueResultSet = function(resultStream) {
    RetrieveLastColumnValueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CellValue" output from this Choreo execution. (The value of the last cell in the specified column.)
        */
        this.get_CellValue = function() {
            return this.getResult("CellValue");
        }
        /*
        Retrieve the value for the "Column" output from this Choreo execution. ((integer) The column number for the returned cell.)
        */
        this.get_Column = function() {
            return this.getResult("Column");
        }
        /*
        Retrieve the value for the "Row" output from this Choreo execution. ((integer) The row number of the returned cell.)
        */
        this.get_Row = function() {
            return this.getResult("Row");
        }
}

util.inherits(RetrieveLastColumnValue, choreography.Choreography);
util.inherits(RetrieveLastColumnValueInputSet, choreography.InputSet);
util.inherits(RetrieveLastColumnValueResultSet, choreography.ResultSet);
exports.RetrieveLastColumnValue = RetrieveLastColumnValue;


/*
    RetrieveListFeed
    Retrieves a list-based feed containing data in your Google spreadsheet.
*/


var RetrieveListFeed = function(session) {
    /*
        Create a new instance of the RetrieveListFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveListFeed"
    RetrieveListFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveListFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveListFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveListFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveListFeedInputSet = function() {
    RetrieveListFeedInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the feed you want to retrieve.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet associated with the feed you want to retrieve.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveListFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveListFeedResultSet = function(resultStream) {
    RetrieveListFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveListFeed, choreography.Choreography);
util.inherits(RetrieveListFeedInputSet, choreography.InputSet);
util.inherits(RetrieveListFeedResultSet, choreography.ResultSet);
exports.RetrieveListFeed = RetrieveListFeed;


/*
    RetrieveListRow
    Retrieves a specified worksheet row from a Google spreadsheet.
*/


var RetrieveListRow = function(session) {
    /*
        Create a new instance of the RetrieveListRow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveListRow"
    RetrieveListRow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveListRowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveListRowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveListRow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveListRowInputSet = function() {
    RetrieveListRowInputSet.super_.call(this);
        /*
        Set the value of the Link input for this Choreo. ((optional, string) The entry's resource URL found in the link element of the entry. Can be retrieved by running RetrieveListFeed Choreo. When this is provided, SpreadsheetKey, WorksheetId, and RowId are not needed.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowId input for this Choreo. ((conditional, string) The unique ID of the row you want to retrieve. Required unless providing the Link input.)
        */
        this.set_RowId = function(value) {
            this.setInput("RowId", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet associated with the row you want to retrieve. Required unless providing the Link input.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet associated with the row you want to retrieve. Required unless providing the Link input.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveListRow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveListRowResultSet = function(resultStream) {
    RetrieveListRowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveListRow, choreography.Choreography);
util.inherits(RetrieveListRowInputSet, choreography.InputSet);
util.inherits(RetrieveListRowResultSet, choreography.ResultSet);
exports.RetrieveListRow = RetrieveListRow;


/*
    RetrieveSpecificRowsOrColumns
    Retrieves specific rows or columns based on a specified range.
*/


var RetrieveSpecificRowsOrColumns = function(session) {
    /*
        Create a new instance of the RetrieveSpecificRowsOrColumns Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveSpecificRowsOrColumns"
    RetrieveSpecificRowsOrColumns.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveSpecificRowsOrColumnsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveSpecificRowsOrColumnsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveSpecificRowsOrColumns
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveSpecificRowsOrColumnsInputSet = function() {
    RetrieveSpecificRowsOrColumnsInputSet.super_.call(this);
        /*
        Set the value of the MaxColumn input for this Choreo. ((optional, integer) The max column number to return.)
        */
        this.set_MaxColumn = function(value) {
            this.setInput("MaxColumn", value);
        }

        /*
        Set the value of the MaxRow input for this Choreo. ((optional, integer) The max row number to return.)
        */
        this.set_MaxRow = function(value) {
            this.setInput("MaxRow", value);
        }

        /*
        Set the value of the MinColumn input for this Choreo. ((optional, integer) The minimum column number to return.)
        */
        this.set_MinColumn = function(value) {
            this.setInput("MinColumn", value);
        }

        /*
        Set the value of the MinRow input for this Choreo. ((optional, integer) The minimum row number to return.)
        */
        this.set_MinRow = function(value) {
            this.setInput("MinRow", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated w.ith the feed you want to retrieve.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet associated with the feed you want to retrieve.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveSpecificRowsOrColumns Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveSpecificRowsOrColumnsResultSet = function(resultStream) {
    RetrieveSpecificRowsOrColumnsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveSpecificRowsOrColumns, choreography.Choreography);
util.inherits(RetrieveSpecificRowsOrColumnsInputSet, choreography.InputSet);
util.inherits(RetrieveSpecificRowsOrColumnsResultSet, choreography.ResultSet);
exports.RetrieveSpecificRowsOrColumns = RetrieveSpecificRowsOrColumns;


/*
    RetrieveSpreadsheetDetailsByName
    Retrieves spreadsheet and worksheet IDs with a given spreadsheet name.
*/


var RetrieveSpreadsheetDetailsByName = function(session) {
    /*
        Create a new instance of the RetrieveSpreadsheetDetailsByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveSpreadsheetDetailsByName"
    RetrieveSpreadsheetDetailsByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveSpreadsheetDetailsByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveSpreadsheetDetailsByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveSpreadsheetDetailsByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveSpreadsheetDetailsByNameInputSet = function() {
    RetrieveSpreadsheetDetailsByNameInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((required, string) The title of the spreadsheet you want to retrieve details for.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveSpreadsheetDetailsByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveSpreadsheetDetailsByNameResultSet = function(resultStream) {
    RetrieveSpreadsheetDetailsByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SpreadsheetDetails" output from this Choreo execution. (The spreadsheet details including spreadsheet name and key. Worksheet names and IDs associated with the spreadsheet are also included.)
        */
        this.get_SpreadsheetDetails = function() {
            return this.getResult("SpreadsheetDetails");
        }
}

util.inherits(RetrieveSpreadsheetDetailsByName, choreography.Choreography);
util.inherits(RetrieveSpreadsheetDetailsByNameInputSet, choreography.InputSet);
util.inherits(RetrieveSpreadsheetDetailsByNameResultSet, choreography.ResultSet);
exports.RetrieveSpreadsheetDetailsByName = RetrieveSpreadsheetDetailsByName;


/*
    RetrieveSpreadsheets
    Retrieves a list of spreadsheets that exist in your Google account.
*/


var RetrieveSpreadsheets = function(session) {
    /*
        Create a new instance of the RetrieveSpreadsheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveSpreadsheets"
    RetrieveSpreadsheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveSpreadsheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveSpreadsheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveSpreadsheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveSpreadsheetsInputSet = function() {
    RetrieveSpreadsheetsInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveSpreadsheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveSpreadsheetsResultSet = function(resultStream) {
    RetrieveSpreadsheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveSpreadsheets, choreography.Choreography);
util.inherits(RetrieveSpreadsheetsInputSet, choreography.InputSet);
util.inherits(RetrieveSpreadsheetsResultSet, choreography.ResultSet);
exports.RetrieveSpreadsheets = RetrieveSpreadsheets;


/*
    RetrieveWorksheet
    Retrieves a specified worksheet from a Google spreadsheet in CSV, XML, or JSON format.
*/


var RetrieveWorksheet = function(session) {
    /*
        Create a new instance of the RetrieveWorksheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveWorksheet"
    RetrieveWorksheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveWorksheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveWorksheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveWorksheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveWorksheetInputSet = function() {
    RetrieveWorksheetInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: csv (the default), xml, and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the worksheet you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((optional, string) The name of the spreadsheet to retrieve. This and WorksheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet that you want to retrieve. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

        /*
        Set the value of the WorksheetName input for this Choreo. ((optional, string) The name of the worksheet to retrieve. This and SpreadsheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_WorksheetName = function(value) {
            this.setInput("WorksheetName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveWorksheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveWorksheetResultSet = function(resultStream) {
    RetrieveWorksheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((multiline) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveWorksheet, choreography.Choreography);
util.inherits(RetrieveWorksheetInputSet, choreography.InputSet);
util.inherits(RetrieveWorksheetResultSet, choreography.ResultSet);
exports.RetrieveWorksheet = RetrieveWorksheet;


/*
    RetrieveWorksheets
    Retrieves a list of worksheets in a given Google spreadsheet.
*/


var RetrieveWorksheets = function(session) {
    /*
        Create a new instance of the RetrieveWorksheets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/RetrieveWorksheets"
    RetrieveWorksheets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveWorksheetsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveWorksheetsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveWorksheets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveWorksheetsInputSet = function() {
    RetrieveWorksheetsInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the worksheet(s) you want to retrieve.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveWorksheets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveWorksheetsResultSet = function(resultStream) {
    RetrieveWorksheetsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveWorksheets, choreography.Choreography);
util.inherits(RetrieveWorksheetsInputSet, choreography.InputSet);
util.inherits(RetrieveWorksheetsResultSet, choreography.ResultSet);
exports.RetrieveWorksheets = RetrieveWorksheets;


/*
    SearchColumn
    Searches a column for a specified value.
*/


var SearchColumn = function(session) {
    /*
        Create a new instance of the SearchColumn Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/SearchColumn"
    SearchColumn.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchColumnResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchColumnInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchColumn
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchColumnInputSet = function() {
    SearchColumnInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ReturnMatches input for this Choreo. ((optional, boolean) Set to true to return all matches of the query. When set to true, an array of cell values that meet the query criteria is returned in the Results output. Defaults to true.)
        */
        this.set_ReturnMatches = function(value) {
            this.setInput("ReturnMatches", value);
        }

        /*
        Set the value of the SearchColumn input for this Choreo. ((required, string) The name of the column to search. This should be the value in row 1 of the column you wish to search.)
        */
        this.set_SearchColumn = function(value) {
            this.setInput("SearchColumn", value);
        }

        /*
        Set the value of the SearchOperator input for this Choreo. ((required, string) The operator to use in the query. Allowed operators are: >, <, >=, >=, =, contains, and starts_with.)
        */
        this.set_SearchOperator = function(value) {
            this.setInput("SearchOperator", value);
        }

        /*
        Set the value of the SearchValue input for this Choreo. ((required, any) The value to search for in the specified column.)
        */
        this.set_SearchValue = function(value) {
            this.setInput("SearchValue", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet to query. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the SpreadsheetName input for this Choreo. ((optional, string) The name of the spreadsheet to query. This and WorksheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup spreadsheet details by name.)
        */
        this.set_SpreadsheetName = function(value) {
            this.setInput("SpreadsheetName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet to query. Required unless SpreadsheetName and WorksheetName are supplied.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

        /*
        Set the value of the WorksheetName input for this Choreo. ((optional, string) The name of the worksheet to query. This and SpreadsheetName can be used as an alternative to SpreadsheetKey and WorksheetId to lookup the spreadsheet details by name.)
        */
        this.set_WorksheetName = function(value) {
            this.setInput("WorksheetName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchColumn Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchColumnResultSet = function(resultStream) {
    SearchColumnResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Count" output from this Choreo execution. ((integer) The count of matched results. This is only returned when ReturnMatches is set to true.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
        /*
        Retrieve the value for the "Results" output from this Choreo execution. ((json) Contains an array of the matched cell values. This is only returned when ReturnMatches is set to true.)
        */
        this.get_Results = function() {
            return this.getResult("Results");
        }
        /*
        Retrieve the value for the "MatchFound" output from this Choreo execution. ((boolean) Whether or not a matched result was found.)
        */
        this.get_MatchFound = function() {
            return this.getResult("MatchFound");
        }
}

util.inherits(SearchColumn, choreography.Choreography);
util.inherits(SearchColumnInputSet, choreography.InputSet);
util.inherits(SearchColumnResultSet, choreography.ResultSet);
exports.SearchColumn = SearchColumn;


/*
    StructuredQuery
    Retrieves a list-based feed containing data in your Google spreadsheet that meets a specified criteria.
*/


var StructuredQuery = function(session) {
    /*
        Create a new instance of the StructuredQuery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/StructuredQuery"
    StructuredQuery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StructuredQueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StructuredQueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StructuredQuery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StructuredQueryInputSet = function() {
    StructuredQueryInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A valid structured query (i.e. id>4).)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the feed you want to retrieve.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet associated with the feed you want to retrieve.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StructuredQuery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StructuredQueryResultSet = function(resultStream) {
    StructuredQueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StructuredQuery, choreography.Choreography);
util.inherits(StructuredQueryInputSet, choreography.InputSet);
util.inherits(StructuredQueryResultSet, choreography.ResultSet);
exports.StructuredQuery = StructuredQuery;


/*
    UpdateCells
    Updates a specified cell in a Google worksheet.
*/


var UpdateCells = function(session) {
    /*
        Create a new instance of the UpdateCells Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/UpdateCells"
    UpdateCells.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCellsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCellsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCells
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCellsInputSet = function() {
    UpdateCellsInputSet.super_.call(this);
        /*
        Set the value of the Column input for this Choreo. ((required, integer) The column number of the cell location that you want to update (for example, column A = 1, columnB = 2, etc).)
        */
        this.set_Column = function(value) {
            this.setInput("Column", value);
        }

        /*
        Set the value of the InputValue input for this Choreo. ((required, string) The new value for the cell.)
        */
        this.set_InputValue = function(value) {
            this.setInput("InputValue", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Row input for this Choreo. ((required, integer) The row number of the cell location that you want to update.)
        */
        this.set_Row = function(value) {
            this.setInput("Row", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key of the spreadsheet associated with the cell you want to update.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID of the worksheet associated with the cell you want to update.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCells Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCellsResultSet = function(resultStream) {
    UpdateCellsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateCells, choreography.Choreography);
util.inherits(UpdateCellsInputSet, choreography.InputSet);
util.inherits(UpdateCellsResultSet, choreography.ResultSet);
exports.UpdateCells = UpdateCells;


/*
    UpdateListRows
    Updates a worksheet row in a Google spreadsheet using a simple XML file you provide.
*/


var UpdateListRows = function(session) {
    /*
        Create a new instance of the UpdateListRows Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/UpdateListRows"
    UpdateListRows.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateListRowsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateListRowsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateListRows
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateListRowsInputSet = function() {
    UpdateListRowsInputSet.super_.call(this);
        /*
        Set the value of the RowsetXML input for this Choreo. ((required, xml) The row of data that you want to update in XML format. Your XML needs to be in the rowset/row schema described in the Choreo documentation.)
        */
        this.set_RowsetXML = function(value) {
            this.setInput("RowsetXML", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The entry's resource URL found in the link element of the entry. Can be retrieved by running RetrieveListFeed Choreo. When this is provided, SpreadsheetKey, WorksheetId, and RowId are not needed.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowId input for this Choreo. ((conditional, string) The unique id of the row you want to update. Required unless providing the Link input.)
        */
        this.set_RowId = function(value) {
            this.setInput("RowId", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((conditional, string) The unique key of the spreadsheet that contains the worksheet you want to update. Required unless providing the Link input.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((conditional, string) The unique ID of the worksheet that you want to update. Required unless providing the Link input.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateListRows Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateListRowsResultSet = function(resultStream) {
    UpdateListRowsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateListRows, choreography.Choreography);
util.inherits(UpdateListRowsInputSet, choreography.InputSet);
util.inherits(UpdateListRowsResultSet, choreography.ResultSet);
exports.UpdateListRows = UpdateListRows;


/*
    UpdateWorksheet
    Updates existing worksheet metadata such as: Title, Row Count, and Column Count.
*/


var UpdateWorksheet = function(session) {
    /*
        Create a new instance of the UpdateWorksheet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Spreadsheets/UpdateWorksheet"
    UpdateWorksheet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateWorksheetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateWorksheetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateWorksheet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateWorksheetInputSet = function() {
    UpdateWorksheetInputSet.super_.call(this);
        /*
        Set the value of the ColumnCount input for this Choreo. ((required, integer) The number of columns that you want to specify for the worksheet.)
        */
        this.set_ColumnCount = function(value) {
            this.setInput("ColumnCount", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowCount input for this Choreo. ((required, integer) The number of rows that you want to specify for the worksheet.)
        */
        this.set_RowCount = function(value) {
            this.setInput("RowCount", value);
        }

        /*
        Set the value of the SpreadsheetKey input for this Choreo. ((required, string) The unique key associated with the spreadsheet that contains a worksheet you want to update.)
        */
        this.set_SpreadsheetKey = function(value) {
            this.setInput("SpreadsheetKey", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The new title of the worksheet.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WorksheetId input for this Choreo. ((required, string) The unique ID associated with the worksheet that you want to update.)
        */
        this.set_WorksheetId = function(value) {
            this.setInput("WorksheetId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateWorksheet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateWorksheetResultSet = function(resultStream) {
    UpdateWorksheetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateWorksheet, choreography.Choreography);
util.inherits(UpdateWorksheetInputSet, choreography.InputSet);
util.inherits(UpdateWorksheetResultSet, choreography.ResultSet);
exports.UpdateWorksheet = UpdateWorksheet;

