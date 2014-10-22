
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateCollection
    Creates a new collection within a database.
*/


var CreateCollection = function(session) {
    /*
        Create a new instance of the CreateCollection Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Collections/CreateCollection"
    CreateCollection.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCollectionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCollectionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCollection
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCollectionInputSet = function() {
    CreateCollectionInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection to create.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to create the collection under.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCollection Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCollectionResultSet = function(resultStream) {
    CreateCollectionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateCollection, choreography.Choreography);
util.inherits(CreateCollectionInputSet, choreography.InputSet);
util.inherits(CreateCollectionResultSet, choreography.ResultSet);
exports.CreateCollection = CreateCollection;


/*
    DeleteCollection
    Deletes a specific collection within a database.
*/


var DeleteCollection = function(session) {
    /*
        Create a new instance of the DeleteCollection Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Collections/DeleteCollection"
    DeleteCollection.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCollectionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCollectionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCollection
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCollectionInputSet = function() {
    DeleteCollectionInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection to delete.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database that contains the collection to delete.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteCollection Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCollectionResultSet = function(resultStream) {
    DeleteCollectionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteCollection, choreography.Choreography);
util.inherits(DeleteCollectionInputSet, choreography.InputSet);
util.inherits(DeleteCollectionResultSet, choreography.ResultSet);
exports.DeleteCollection = DeleteCollection;


/*
    GetCollection
    Retrieves a specific collection within a database.
*/


var GetCollection = function(session) {
    /*
        Create a new instance of the GetCollection Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Collections/GetCollection"
    GetCollection.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCollectionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCollectionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCollection
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCollectionInputSet = function() {
    GetCollectionInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection to retrieve.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database that contains the collection to retrieve.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCollection Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCollectionResultSet = function(resultStream) {
    GetCollectionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCollection, choreography.Choreography);
util.inherits(GetCollectionInputSet, choreography.InputSet);
util.inherits(GetCollectionResultSet, choreography.ResultSet);
exports.GetCollection = GetCollection;


/*
    ListCollections
    Retrieves a list of all collections within a database.
*/


var ListCollections = function(session) {
    /*
        Create a new instance of the ListCollections Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Collections/ListCollections"
    ListCollections.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCollectionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCollectionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCollections
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCollectionsInputSet = function() {
    ListCollectionsInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database that contains the collections to list.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCollections Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCollectionsResultSet = function(resultStream) {
    ListCollectionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCollections, choreography.Choreography);
util.inherits(ListCollectionsInputSet, choreography.InputSet);
util.inherits(ListCollectionsResultSet, choreography.ResultSet);
exports.ListCollections = ListCollections;


/*
    UpdateCollection
    Renames a collection within a specified database.
*/


var UpdateCollection = function(session) {
    /*
        Create a new instance of the UpdateCollection Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Collections/UpdateCollection"
    UpdateCollection.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCollectionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCollectionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCollection
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCollectionInputSet = function() {
    UpdateCollectionInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the CollectionName input for this Choreo. ((required, string) The name of the collection to update.)
        */
        this.set_CollectionName = function(value) {
            this.setInput("CollectionName", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to create the collection under.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the NewCollectionName input for this Choreo. ((required, string) The new name of the collection.)
        */
        this.set_NewCollectionName = function(value) {
            this.setInput("NewCollectionName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCollection Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCollectionResultSet = function(resultStream) {
    UpdateCollectionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateCollection, choreography.Choreography);
util.inherits(UpdateCollectionInputSet, choreography.InputSet);
util.inherits(UpdateCollectionResultSet, choreography.ResultSet);
exports.UpdateCollection = UpdateCollection;

