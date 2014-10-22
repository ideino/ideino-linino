
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateObject
    Creates a new object on Parse.
*/


var CreateObject = function(session) {
    /*
        Create a new instance of the CreateObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Objects/CreateObject"
    CreateObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateObjectInputSet = function() {
    CreateObjectInputSet.super_.call(this);
        /*
        Set the value of the ObjectContents input for this Choreo. ((required, json) A JSON string containing the object contents.)
        */
        this.set_ObjectContents = function(value) {
            this.setInput("ObjectContents", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The class name for the object being created.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateObjectResultSet = function(resultStream) {
    CreateObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateObject, choreography.Choreography);
util.inherits(CreateObjectInputSet, choreography.InputSet);
util.inherits(CreateObjectResultSet, choreography.ResultSet);
exports.CreateObject = CreateObject;


/*
    DeleteObject
    Deletes a given object.
*/


var DeleteObject = function(session) {
    /*
        Create a new instance of the DeleteObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Objects/DeleteObject"
    DeleteObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteObjectInputSet = function() {
    DeleteObjectInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The class name for the object being deleted.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the object to delete.)
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
A ResultSet with methods tailored to the values returned by the DeleteObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteObjectResultSet = function(resultStream) {
    DeleteObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteObject, choreography.Choreography);
util.inherits(DeleteObjectInputSet, choreography.InputSet);
util.inherits(DeleteObjectResultSet, choreography.ResultSet);
exports.DeleteObject = DeleteObject;


/*
    RetrieveObject
    Retrieves a given object.
*/


var RetrieveObject = function(session) {
    /*
        Create a new instance of the RetrieveObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Objects/RetrieveObject"
    RetrieveObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveObjectInputSet = function() {
    RetrieveObjectInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The class name for the object being retrieved.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the object to retrieve.)
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
A ResultSet with methods tailored to the values returned by the RetrieveObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveObjectResultSet = function(resultStream) {
    RetrieveObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveObject, choreography.Choreography);
util.inherits(RetrieveObjectInputSet, choreography.InputSet);
util.inherits(RetrieveObjectResultSet, choreography.ResultSet);
exports.RetrieveObject = RetrieveObject;


/*
    UpdateObject
    Updates an existing object.
*/


var UpdateObject = function(session) {
    /*
        Create a new instance of the UpdateObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/Objects/UpdateObject"
    UpdateObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateObjectInputSet = function() {
    UpdateObjectInputSet.super_.call(this);
        /*
        Set the value of the ObjectContents input for this Choreo. ((required, json) A JSON string containing the object contents.)
        */
        this.set_ObjectContents = function(value) {
            this.setInput("ObjectContents", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ClassName input for this Choreo. ((required, string) The class name for the object being updated.)
        */
        this.set_ClassName = function(value) {
            this.setInput("ClassName", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the object to update.)
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
A ResultSet with methods tailored to the values returned by the UpdateObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateObjectResultSet = function(resultStream) {
    UpdateObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateObject, choreography.Choreography);
util.inherits(UpdateObjectInputSet, choreography.InputSet);
util.inherits(UpdateObjectResultSet, choreography.ResultSet);
exports.UpdateObject = UpdateObject;

