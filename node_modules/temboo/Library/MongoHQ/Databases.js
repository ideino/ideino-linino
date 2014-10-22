
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateDatabase
    Creates a new database in your account.
*/


var CreateDatabase = function(session) {
    /*
        Create a new instance of the CreateDatabase Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Databases/CreateDatabase"
    CreateDatabase.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDatabaseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDatabaseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDatabase
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDatabaseInputSet = function() {
    CreateDatabaseInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to create.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of database to create (e.g., sandbox, small, large). A full list of database types are returned by the ListPlans Choreo and are represented in the "slug" property of each plan object.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDatabase Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDatabaseResultSet = function(resultStream) {
    CreateDatabaseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDatabase, choreography.Choreography);
util.inherits(CreateDatabaseInputSet, choreography.InputSet);
util.inherits(CreateDatabaseResultSet, choreography.ResultSet);
exports.CreateDatabase = CreateDatabase;


/*
    DeleteDatabase
    Deletes a specified database.
*/


var DeleteDatabase = function(session) {
    /*
        Create a new instance of the DeleteDatabase Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Databases/DeleteDatabase"
    DeleteDatabase.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDatabaseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDatabaseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDatabase
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDatabaseInputSet = function() {
    DeleteDatabaseInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to delete.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDatabase Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDatabaseResultSet = function(resultStream) {
    DeleteDatabaseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDatabase, choreography.Choreography);
util.inherits(DeleteDatabaseInputSet, choreography.InputSet);
util.inherits(DeleteDatabaseResultSet, choreography.ResultSet);
exports.DeleteDatabase = DeleteDatabase;


/*
    GetDatabase
    Retrieves information about a specified database.
*/


var GetDatabase = function(session) {
    /*
        Create a new instance of the GetDatabase Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Databases/GetDatabase"
    GetDatabase.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDatabaseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDatabaseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDatabase
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDatabaseInputSet = function() {
    GetDatabaseInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to retrieve.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDatabase Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDatabaseResultSet = function(resultStream) {
    GetDatabaseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDatabase, choreography.Choreography);
util.inherits(GetDatabaseInputSet, choreography.InputSet);
util.inherits(GetDatabaseResultSet, choreography.ResultSet);
exports.GetDatabase = GetDatabase;


/*
    ListDatabases
    Retrieves a list of all databases in your account.
*/


var ListDatabases = function(session) {
    /*
        Create a new instance of the ListDatabases Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Databases/ListDatabases"
    ListDatabases.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListDatabasesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListDatabasesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListDatabases
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListDatabasesInputSet = function() {
    ListDatabasesInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListDatabases Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListDatabasesResultSet = function(resultStream) {
    ListDatabasesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListDatabases, choreography.Choreography);
util.inherits(ListDatabasesInputSet, choreography.InputSet);
util.inherits(ListDatabasesResultSet, choreography.ResultSet);
exports.ListDatabases = ListDatabases;

