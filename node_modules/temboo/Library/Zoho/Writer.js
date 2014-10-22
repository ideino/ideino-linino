
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DownloadDocument
    Downloads a specified document in a user's Zoho Writer Account.
*/


var DownloadDocument = function(session) {
    /*
        Create a new instance of the DownloadDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Writer/DownloadDocument"
    DownloadDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DownloadDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DownloadDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DownloadDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DownloadDocumentInputSet = function() {
    DownloadDocumentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Zoho)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DocumentId input for this Choreo. ((required, integer) Specifies the unique document id to download.)
        */
        this.set_DocumentId = function(value) {
            this.setInput("DocumentId", value);
        }

        /*
        Set the value of the DownloadFormat input for this Choreo. ((required, string) Specifies the file format in which the documents need to be downloaded. Possible values for documents: doc, docx, pdf, html, sxw, odt, rtf.)
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
A ResultSet with methods tailored to the values returned by the DownloadDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DownloadDocumentResultSet = function(resultStream) {
    DownloadDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the DownloadFormat input.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DownloadDocument, choreography.Choreography);
util.inherits(DownloadDocumentInputSet, choreography.InputSet);
util.inherits(DownloadDocumentResultSet, choreography.ResultSet);
exports.DownloadDocument = DownloadDocument;


/*
    ListAllDocuments
    Lists all the documents associated with a user's Zoho Writer Account.
*/


var ListAllDocuments = function(session) {
    /*
        Create a new instance of the ListAllDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Writer/ListAllDocuments"
    ListAllDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllDocumentsInputSet = function() {
    ListAllDocumentsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListAllDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllDocumentsResultSet = function(resultStream) {
    ListAllDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllDocuments, choreography.Choreography);
util.inherits(ListAllDocumentsInputSet, choreography.InputSet);
util.inherits(ListAllDocumentsResultSet, choreography.ResultSet);
exports.ListAllDocuments = ListAllDocuments;


/*
    ListPublicDocuments
    Lists all the documents that have been made "public" from a user's Zoho Writer Account.
*/


var ListPublicDocuments = function(session) {
    /*
        Create a new instance of the ListPublicDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Writer/ListPublicDocuments"
    ListPublicDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPublicDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPublicDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPublicDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPublicDocumentsInputSet = function() {
    ListPublicDocumentsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListPublicDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPublicDocumentsResultSet = function(resultStream) {
    ListPublicDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPublicDocuments, choreography.Choreography);
util.inherits(ListPublicDocumentsInputSet, choreography.InputSet);
util.inherits(ListPublicDocumentsResultSet, choreography.ResultSet);
exports.ListPublicDocuments = ListPublicDocuments;


/*
    ListSharedDocuments
    Lists all the documents that have been "shared" to a user's Zoho Writer Account.
*/


var ListSharedDocuments = function(session) {
    /*
        Create a new instance of the ListSharedDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Writer/ListSharedDocuments"
    ListSharedDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSharedDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSharedDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSharedDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSharedDocumentsInputSet = function() {
    ListSharedDocumentsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListSharedDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSharedDocumentsResultSet = function(resultStream) {
    ListSharedDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSharedDocuments, choreography.Choreography);
util.inherits(ListSharedDocumentsInputSet, choreography.InputSet);
util.inherits(ListSharedDocumentsResultSet, choreography.ResultSet);
exports.ListSharedDocuments = ListSharedDocuments;


/*
    ListTrashedDocuments
    Lists all the documents that have been "trashed" from a user's Zoho Writer Account.
*/


var ListTrashedDocuments = function(session) {
    /*
        Create a new instance of the ListTrashedDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zoho/Writer/ListTrashedDocuments"
    ListTrashedDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTrashedDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTrashedDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTrashedDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTrashedDocumentsInputSet = function() {
    ListTrashedDocumentsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListTrashedDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTrashedDocumentsResultSet = function(resultStream) {
    ListTrashedDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Zoho. Corresponds to the ResponseFormat input. Defaults to XML.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListTrashedDocuments, choreography.Choreography);
util.inherits(ListTrashedDocumentsInputSet, choreography.InputSet);
util.inherits(ListTrashedDocumentsResultSet, choreography.ResultSet);
exports.ListTrashedDocuments = ListTrashedDocuments;

