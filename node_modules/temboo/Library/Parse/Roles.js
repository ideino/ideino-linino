
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRole
    Creates a new role.
*/


var CreateRole = function(session) {
    /*
        Create a new instance of the CreateRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Roles/CreateRole"
    CreateRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRoleInputSet = function() {
    CreateRoleInputSet.super_.call(this);
        /*
        Set the value of the Role input for this Choreo. ((required, json) A JSON string containing the role information. See documentation for formatting details.)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRoleResultSet = function(resultStream) {
    CreateRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateRole, choreography.Choreography);
util.inherits(CreateRoleInputSet, choreography.InputSet);
util.inherits(CreateRoleResultSet, choreography.ResultSet);
exports.CreateRole = CreateRole;


/*
    DeleteRole
    Retrieves a given role.
*/


var DeleteRole = function(session) {
    /*
        Create a new instance of the DeleteRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Roles/DeleteRole"
    DeleteRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRoleInputSet = function() {
    DeleteRoleInputSet.super_.call(this);
        /*
        Set the value of the ObjectID input for this Choreo. ((required, json) The ID of the role to retrieve.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRoleResultSet = function(resultStream) {
    DeleteRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRole, choreography.Choreography);
util.inherits(DeleteRoleInputSet, choreography.InputSet);
util.inherits(DeleteRoleResultSet, choreography.ResultSet);
exports.DeleteRole = DeleteRole;


/*
    RetrieveRole
    Deletes a specified role.
*/


var RetrieveRole = function(session) {
    /*
        Create a new instance of the RetrieveRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Roles/RetrieveRole"
    RetrieveRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveRoleInputSet = function() {
    RetrieveRoleInputSet.super_.call(this);
        /*
        Set the value of the ObjectID input for this Choreo. ((required, json) The ID of the role to be retrieved.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveRoleResultSet = function(resultStream) {
    RetrieveRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveRole, choreography.Choreography);
util.inherits(RetrieveRoleInputSet, choreography.InputSet);
util.inherits(RetrieveRoleResultSet, choreography.ResultSet);
exports.RetrieveRole = RetrieveRole;


/*
    UpdateRole
    Updates an existing role.
*/


var UpdateRole = function(session) {
    /*
        Create a new instance of the UpdateRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Roles/UpdateRole"
    UpdateRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateRoleInputSet = function() {
    UpdateRoleInputSet.super_.call(this);
        /*
        Set the value of the Role input for this Choreo. ((required, json) A JSON string containing the role information to be updated. See documentation for formatting details.)
        */
        this.set_Role = function(value) {
            this.setInput("Role", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the role to update.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateRoleResultSet = function(resultStream) {
    UpdateRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateRole, choreography.Choreography);
util.inherits(UpdateRoleInputSet, choreography.InputSet);
util.inherits(UpdateRoleResultSet, choreography.ResultSet);
exports.UpdateRole = UpdateRole;

