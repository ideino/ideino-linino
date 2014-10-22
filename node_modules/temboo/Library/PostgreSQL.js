
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    JSONToDB
    Performs a batch operation in PostgreSQL with a set of records in JSON format.
*/


var JSONToDB = function(session) {
    /*
        Create a new instance of the JSONToDB Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PostgreSQL/JSONToDB"
    JSONToDB.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new JSONToDBResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new JSONToDBInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the JSONToDB
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var JSONToDBInputSet = function() {
    JSONToDBInputSet.super_.call(this);
        /*
        Set the value of the BatchFile input for this Choreo. ((required, json) The records to send to the database for the batch operation.)
        */
        this.set_BatchFile = function(value) {
            this.setInput("BatchFile", value);
        }

        /*
        Set the value of the BatchMode input for this Choreo. ((optional, string) The type of batch operation to perform. Accepted values are: insert, update, or upsert.)
        */
        this.set_BatchMode = function(value) {
            this.setInput("BatchMode", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to connect to.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for the database user.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The database port. Defaults to 5432.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the RollbackOnError input for this Choreo. ((optional, boolean) Rollback if error occurs. Set to 1 to enable. Defaults to 0 (false).)
        */
        this.set_RollbackOnError = function(value) {
            this.setInput("RollbackOnError", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) The name or IP address of the database server.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the TableName input for this Choreo. ((required, string) The database table that the batch operation is to be performed on.)
        */
        this.set_TableName = function(value) {
            this.setInput("TableName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The database username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the Version input for this Choreo. ((optional, decimal) The version of the Postgres database. Allowed values are 8 and 9 (the default).)
        */
        this.set_Version = function(value) {
            this.setInput("Version", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the JSONToDB Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var JSONToDBResultSet = function(resultStream) {
    JSONToDBResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Success" output from this Choreo execution. ((boolean) Indicates the result of the batch operation. The value will be "true" when the SQL transaction executes successfully.)
        */
        this.get_Success = function() {
            return this.getResult("Success");
        }
}

util.inherits(JSONToDB, choreography.Choreography);
util.inherits(JSONToDBInputSet, choreography.InputSet);
util.inherits(JSONToDBResultSet, choreography.ResultSet);
exports.JSONToDB = JSONToDB;


/*
    RunCommand
    Executes a SQL command for a Postgres database.
*/


var RunCommand = function(session) {
    /*
        Create a new instance of the RunCommand Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PostgreSQL/RunCommand"
    RunCommand.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RunCommandResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RunCommandInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RunCommand
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RunCommandInputSet = function() {
    RunCommandInputSet.super_.call(this);
        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to connect to.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for the database user.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The database port. Defaults to 5432.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The preferred format for the database results. Accepted formats are json (the default) and xml. This input only applies when providing a SELECT statement for the SQL input.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SQL input for this Choreo. ((required, multiline) A SQL statement to execute.)
        */
        this.set_SQL = function(value) {
            this.setInput("SQL", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) The name or IP address of the database server.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The database username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the Version input for this Choreo. ((optional, decimal) The version of the Postgres database. Allowed values are 8 and 9 (the default).)
        */
        this.set_Version = function(value) {
            this.setInput("Version", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RunCommand Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RunCommandResultSet = function(resultStream) {
    RunCommandResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResultData" output from this Choreo execution. (The data returned from the database. This output will only contain a value when a SELECT statement is provided. Results are returned as JSON or XML depending on the ResponseFormat.)
        */
        this.get_ResultData = function() {
            return this.getResult("ResultData");
        }
        /*
        Retrieve the value for the "Success" output from this Choreo execution. ((boolean) Indicates the result of the database command. The value will be "true" when the SQL statement executes successfully.)
        */
        this.get_Success = function() {
            return this.getResult("Success");
        }
}

util.inherits(RunCommand, choreography.Choreography);
util.inherits(RunCommandInputSet, choreography.InputSet);
util.inherits(RunCommandResultSet, choreography.ResultSet);
exports.RunCommand = RunCommand;


/*
    XMLToDB
    Performs a batch operation in PostgreSQL with a set of records in XML format.
*/


var XMLToDB = function(session) {
    /*
        Create a new instance of the XMLToDB Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/PostgreSQL/XMLToDB"
    XMLToDB.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLToDBResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLToDBInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XMLToDB
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLToDBInputSet = function() {
    XMLToDBInputSet.super_.call(this);
        /*
        Set the value of the BatchFile input for this Choreo. ((required, xml) The records to send to the database for the batch operation.)
        */
        this.set_BatchFile = function(value) {
            this.setInput("BatchFile", value);
        }

        /*
        Set the value of the BatchMode input for this Choreo. ((optional, string) The type of batch operation to perform. Accepted values are: insert, update, or upsert.)
        */
        this.set_BatchMode = function(value) {
            this.setInput("BatchMode", value);
        }

        /*
        Set the value of the DatabaseName input for this Choreo. ((required, string) The name of the database to connect to.)
        */
        this.set_DatabaseName = function(value) {
            this.setInput("DatabaseName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for the database user.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The database port. Defaults to 5432.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the RollbackOnError input for this Choreo. ((optional, boolean) Rollback if error occurs. Set to 1 to enable. Defaults to 0 (false).)
        */
        this.set_RollbackOnError = function(value) {
            this.setInput("RollbackOnError", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) The name or IP address of the database server.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the TableName input for this Choreo. ((required, string) The database table that the batch operation is to be performed on.)
        */
        this.set_TableName = function(value) {
            this.setInput("TableName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The database username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the Version input for this Choreo. ((optional, decimal) The version of the Postgres database. Allowed values are 8 and 9 (the default).)
        */
        this.set_Version = function(value) {
            this.setInput("Version", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XMLToDB Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLToDBResultSet = function(resultStream) {
    XMLToDBResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Success" output from this Choreo execution. ((boolean) Indicates the result of the batch operation. The value will be "true" when the SQL transaction executes successfully.)
        */
        this.get_Success = function() {
            return this.getResult("Success");
        }
}

util.inherits(XMLToDB, choreography.Choreography);
util.inherits(XMLToDBInputSet, choreography.InputSet);
util.inherits(XMLToDBResultSet, choreography.ResultSet);
exports.XMLToDB = XMLToDB;

