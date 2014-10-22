
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetDeployment
    Retrieves details about a particular deployment in your account.
*/


var GetDeployment = function(session) {
    /*
        Create a new instance of the GetDeployment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Deployments/GetDeployment"
    GetDeployment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDeploymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDeploymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDeployment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDeploymentInputSet = function() {
    GetDeploymentInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DeploymentName input for this Choreo. ((required, string) The domain and port of the server (e.g., rose.mongohq.com:9000).)
        */
        this.set_DeploymentName = function(value) {
            this.setInput("DeploymentName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDeployment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDeploymentResultSet = function(resultStream) {
    GetDeploymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDeployment, choreography.Choreography);
util.inherits(GetDeploymentInputSet, choreography.InputSet);
util.inherits(GetDeploymentResultSet, choreography.ResultSet);
exports.GetDeployment = GetDeployment;


/*
    GetLogs
    Retrieves logs from a particular deployment in your account.
*/


var GetLogs = function(session) {
    /*
        Create a new instance of the GetLogs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Deployments/GetLogs"
    GetLogs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLogsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLogsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLogs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLogsInputSet = function() {
    GetLogsInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

        /*
        Set the value of the DeploymentName input for this Choreo. ((required, string) The domain and port of the server (e.g., rose.mongohq.com:9000).)
        */
        this.set_DeploymentName = function(value) {
            this.setInput("DeploymentName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLogs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLogsResultSet = function(resultStream) {
    GetLogsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLogs, choreography.Choreography);
util.inherits(GetLogsInputSet, choreography.InputSet);
util.inherits(GetLogsResultSet, choreography.ResultSet);
exports.GetLogs = GetLogs;


/*
    ListDeployments
    Retrieves a list of all deployments in your account.
*/


var ListDeployments = function(session) {
    /*
        Create a new instance of the ListDeployments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MongoHQ/Deployments/ListDeployments"
    ListDeployments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListDeploymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListDeploymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListDeployments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListDeploymentsInputSet = function() {
    ListDeploymentsInputSet.super_.call(this);
        /*
        Set the value of the APIToken input for this Choreo. ((required, string) The API Token provided by MongoHQ.)
        */
        this.set_APIToken = function(value) {
            this.setInput("APIToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListDeployments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListDeploymentsResultSet = function(resultStream) {
    ListDeploymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from MongoHQ.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListDeployments, choreography.Choreography);
util.inherits(ListDeploymentsInputSet, choreography.InputSet);
util.inherits(ListDeploymentsResultSet, choreography.ResultSet);
exports.ListDeployments = ListDeployments;

