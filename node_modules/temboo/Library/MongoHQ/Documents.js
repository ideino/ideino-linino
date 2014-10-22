
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    BulkUpdate
    Updates multiple documents by criteria.
*/


var BulkUpdate = function(session) {
    /*
        Create a new instance of the BulkUpdate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/BulkUpdate"
    BulkUpdate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BulkUpdateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BulkUpdateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BulkUpdate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BulkUpdateInputSet = function() {
    BulkUpdateInputSet.super_.call(this);
        /*
        Set the value of the Object input for this Choreo. ((required, json) The JSON document update command. This accepts standard MongoDB syntax such as $set or $inc.)
        */
        this.set_Object = function(value) {
            this.setInput("Object", value);
        }

        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the document being updated.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the Criteria input for this Choreo. ((required, json) The JSON criteria used to match which documents will be updated.)
        */
        this.set_Criteria = function(value) {
            this.setInput("Criteria", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the document being updated.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Multiple input for this Choreo. ((optional, boolean) Indicates that all documents matching the criteria should be updated. Setting to false (the default) will update just one.)
        */
        this.set_Multiple = function(value) {
            this.setInput("Multiple", value);
        }

        /*
        Set the value of the Safe input for this Choreo. ((optional, boolean) When set to true, the operation will wait until the document is saved before returning. When set to false (the default) documents are saved asynchronously.)
        */
        this.set_Safe = function(value) {
            this.setInput("Safe", value);
        }

        /*
        Set the value of the Upsert input for this Choreo. ((optional, boolean) Indicates that the operation will create records that do not already exist. Set to true to enable this feature. Defaults to false.)
        */
        this.set_Upsert = function(value) {
            this.setInput("Upsert", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BulkUpdate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BulkUpdateResultSet = function(resultStream) {
    BulkUpdateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BulkUpdate, choreography.Choreography);
util.inherits(BulkUpdateInputSet, choreography.InputSet);
util.inherits(BulkUpdateResultSet, choreography.ResultSet);
exports.BulkUpdate = BulkUpdate;


/*
    CreateDocument
    Creates a new document within a collection.
*/


var CreateDocument = function(session) {
    /*
        Create a new instance of the CreateDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/CreateDocument"
    CreateDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDocumentInputSet = function() {
    CreateDocumentInputSet.super_.call(this);
        /*
        Set the value of the Document input for this Choreo. ((required, json) The JSON document to be created under the collection.)
        */
        this.set_Document = function(value) {
            this.setInput("Document", value);
        }

        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the new document.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the new document.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Safe input for this Choreo. ((optional, boolean) When set to true, the operation will wait until the document is saved before returning. When set to false (the default) documents are saved asynchronously.)
        */
        this.set_Safe = function(value) {
            this.setInput("Safe", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDocumentResultSet = function(resultStream) {
    CreateDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDocument, choreography.Choreography);
util.inherits(CreateDocumentInputSet, choreography.InputSet);
util.inherits(CreateDocumentResultSet, choreography.ResultSet);
exports.CreateDocument = CreateDocument;


/*
    DeleteDocument
    Deletes a specific document within a collection.
*/


var DeleteDocument = function(session) {
    /*
        Create a new instance of the DeleteDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/DeleteDocument"
    DeleteDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDocumentInputSet = function() {
    DeleteDocumentInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the document to delete.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the document to delete.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the DocumentID input for this Choreo. ((required, string) The ID of the document to delete.)
        */
        this.set_DocumentID = function(value) {
            this.setInput("DocumentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDocumentResultSet = function(resultStream) {
    DeleteDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDocument, choreography.Choreography);
util.inherits(DeleteDocumentInputSet, choreography.InputSet);
util.inherits(DeleteDocumentResultSet, choreography.ResultSet);
exports.DeleteDocument = DeleteDocument;


/*
    GetDocument
    Retrieves a specific document within a collection.
*/


var GetDocument = function(session) {
    /*
        Create a new instance of the GetDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/GetDocument"
    GetDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDocumentInputSet = function() {
    GetDocumentInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the document to retrieve.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the document to retrieve.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the DocumentID input for this Choreo. ((required, string) The ID of the document to return.)
        */
        this.set_DocumentID = function(value) {
            this.setInput("DocumentID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDocumentResultSet = function(resultStream) {
    GetDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDocument, choreography.Choreography);
util.inherits(GetDocumentInputSet, choreography.InputSet);
util.inherits(GetDocumentResultSet, choreography.ResultSet);
exports.GetDocument = GetDocument;


/*
    ListDocuments
    Lists or queries documents within a collection.
*/


var ListDocuments = function(session) {
    /*
        Create a new instance of the ListDocuments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/ListDocuments"
    ListDocuments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListDocumentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListDocumentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListDocuments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListDocumentsInputSet = function() {
    ListDocumentsInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the documents to list.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the documents to list.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, json) A JSON array of fields to return.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of documents to return. Used with the Skip parameter to paginate through a large set of results.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, json) A JSON string used to query documents.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) The number of documents to skip. Used with Limit parameter to paginate through a large set of results.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, json) A JSON string describing how the results should be sorted.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListDocuments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListDocumentsResultSet = function(resultStream) {
    ListDocumentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "DocumentCount" output from this Choreo execution. ((integer) The total number of documents that match the query or list.)
        */
        this.get_DocumentCount = function() {
            return this.getResult("DocumentCount");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListDocuments, choreography.Choreography);
util.inherits(ListDocumentsInputSet, choreography.InputSet);
util.inherits(ListDocumentsResultSet, choreography.ResultSet);
exports.ListDocuments = ListDocuments;


/*
    UpdateDocument
    Updates a specific document within a collection.
*/


var UpdateDocument = function(session) {
    /*
        Create a new instance of the UpdateDocument Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Documents/UpdateDocument"
    UpdateDocument.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateDocumentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateDocumentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateDocument
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateDocumentInputSet = function() {
    UpdateDocumentInputSet.super_.call(this);
        /*
        Set the value of the Document input for this Choreo. ((required, json) The JSON document update command. This accepts standard MongoDB syntax such as $set or $inc.)
        */
        this.set_Document = function(value) {
            this.setInput("Document", value);
        }

        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the document being updated.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the document being updated.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the DocumentID input for this Choreo. ((required, string) The ID of the document being updated.)
        */
        this.set_DocumentID = function(value) {
            this.setInput("DocumentID", value);
        }

        /*
        Set the value of the Safe input for this Choreo. ((optional, boolean) When set to true, the operation will wait until the document is saved before returning. When set to false (the default) documents are saved asynchronously.)
        */
        this.set_Safe = function(value) {
            this.setInput("Safe", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateDocument Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateDocumentResultSet = function(resultStream) {
    UpdateDocumentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateDocument, choreography.Choreography);
util.inherits(UpdateDocumentInputSet, choreography.InputSet);
util.inherits(UpdateDocumentResultSet, choreography.ResultSet);
exports.UpdateDocument = UpdateDocument;

