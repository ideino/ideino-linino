
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateIndex
    Create a new index within a collection.
*/


var CreateIndex = function(session) {
    /*
        Create a new instance of the CreateIndex Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Indexes/CreateIndex"
    CreateIndex.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateIndexResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateIndexInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateIndex
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateIndexInputSet = function() {
    CreateIndexInputSet.super_.call(this);
        /*
        Set the value of the Specification input for this Choreo. ((required, json) The index specification to be created (e.g., {"key":1}).)
        */
        this.set_Specification = function(value) {
            this.setInput("Specification", value);
        }

        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the Background input for this Choreo. ((optional, boolean) Indicates that the index will be built in the background. Defaults to true.)
        */
        this.set_Background = function(value) {
            this.setInput("Background", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the indexes to list.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the indexes to list.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the DropDuplicates input for this Choreo. ((optional, boolean) When creating a unique index on a collection with pre-existing records, this flag will keep the first document the database indexes and drop all subsequent with duplicate values. Defaults to false.)
        */
        this.set_DropDuplicates = function(value) {
            this.setInput("DropDuplicates", value);
        }

        /*
        Set the value of the Maximum input for this Choreo. ((optional, string) The maximum longitude and latitude for a geo index.)
        */
        this.set_Maximum = function(value) {
            this.setInput("Maximum", value);
        }

        /*
        Set the value of the Minimum input for this Choreo. ((optional, string) The minimum longitude and latitude for a geo index.)
        */
        this.set_Minimum = function(value) {
            this.setInput("Minimum", value);
        }

        /*
        Set the value of the Unique input for this Choreo. ((optional, boolean) Indicates that the index should enforce a uniqueness constraint. Defaults to false.)
        */
        this.set_Unique = function(value) {
            this.setInput("Unique", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateIndex Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateIndexResultSet = function(resultStream) {
    CreateIndexResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateIndex, choreography.Choreography);
util.inherits(CreateIndexInputSet, choreography.InputSet);
util.inherits(CreateIndexResultSet, choreography.ResultSet);
exports.CreateIndex = CreateIndex;


/*
    DeleteAllIndexes
    Deletes all indexes within a collection.
*/


var DeleteAllIndexes = function(session) {
    /*
        Create a new instance of the DeleteAllIndexes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Indexes/DeleteAllIndexes"
    DeleteAllIndexes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAllIndexesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAllIndexesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAllIndexes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAllIndexesInputSet = function() {
    DeleteAllIndexesInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the indexes to delete.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the indexes to delete.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAllIndexes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAllIndexesResultSet = function(resultStream) {
    DeleteAllIndexesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteAllIndexes, choreography.Choreography);
util.inherits(DeleteAllIndexesInputSet, choreography.InputSet);
util.inherits(DeleteAllIndexesResultSet, choreography.ResultSet);
exports.DeleteAllIndexes = DeleteAllIndexes;


/*
    DeleteIndex
    Deletes a specified index within a collection.
*/


var DeleteIndex = function(session) {
    /*
        Create a new instance of the DeleteIndex Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Indexes/DeleteIndex"
    DeleteIndex.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteIndexResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteIndexInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteIndex
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteIndexInputSet = function() {
    DeleteIndexInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the index being deleted.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the index being deleted.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the IndexName input for this Choreo. ((required, string) The name of the index to delete.)
        */
        this.set_IndexName = function(value) {
            this.setInput("IndexName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteIndex Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteIndexResultSet = function(resultStream) {
    DeleteIndexResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteIndex, choreography.Choreography);
util.inherits(DeleteIndexInputSet, choreography.InputSet);
util.inherits(DeleteIndexResultSet, choreography.ResultSet);
exports.DeleteIndex = DeleteIndex;


/*
    ListIndexes
    Retrieve a list of indexes within a collection.
*/


var ListIndexes = function(session) {
    /*
        Create a new instance of the ListIndexes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Indexes/ListIndexes"
    ListIndexes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListIndexesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListIndexesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListIndexes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListIndexesInputSet = function() {
    ListIndexesInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection associated with the indexes to list.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database associated with the indexes to list.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListIndexes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListIndexesResultSet = function(resultStream) {
    ListIndexesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListIndexes, choreography.Choreography);
util.inherits(ListIndexesInputSet, choreography.InputSet);
util.inherits(ListIndexesResultSet, choreography.ResultSet);
exports.ListIndexes = ListIndexes;

