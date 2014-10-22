
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateKey
    Creates a new APIKey.
*/


var CreateKey = function(session) {
    /*
        Create a new instance of the CreateKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/CreateKey"
    CreateKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateKeyInputSet = function() {
    CreateKeyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The master API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessMethods input for this Choreo. ((conditional, string) Comma-separated input containing one or more allowed HTTP methods that the key is allowed. Valid values: get, put, post, and/or delete. Ex.: "put,post". Required unless writing your own CustomKey.)
        */
        this.set_AccessMethods = function(value) {
            this.setInput("AccessMethods", value);
        }

        /*
        Set the value of the CustomKey input for this Choreo. ((optional, any) Optional Custom key to send to Xively. Type and format depends on CustomType. Please see documentation for more information on constructing your own body. If used, all other scalar inputs are ignored.)
        */
        this.set_CustomKey = function(value) {
            this.setInput("CustomKey", value);
        }

        /*
        Set the value of the CustomPermissions input for this Choreo. ((optional, any) Optional custom permissions for advanced configuration. Type and format depends on CustomType. If specified, ignores SourceIP, ResourcesData and AccessMethodsData.)
        */
        this.set_CustomPermissions = function(value) {
            this.setInput("CustomPermissions", value);
        }

        /*
        Set the value of the CustomType input for this Choreo. ((optional, string) The datatype that is being input if adding custom permission objects. Valid values are "json" (the default) and "xml".)
        */
        this.set_CustomType = function(value) {
            this.setInput("CustomType", value);
        }

        /*
        Set the value of the ExpirationDate input for this Choreo. ((optional, date) Expiration date for the key, after which it won't work. Must be in ISO 8601 format, default zone is UTC.  Ex: 2013-05-07T00:00:00Z.)
        */
        this.set_ExpirationDate = function(value) {
            this.setInput("ExpirationDate", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((conditional, string) A label by which the key can be referenced. Required unless writing your own CustomKey.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the PrivateAccess input for this Choreo. ((optional, string) Flag that indicates whether this key can access private resources belonging to the user. To turn on, input "true", leave blank for "false".)
        */
        this.set_PrivateAccess = function(value) {
            this.setInput("PrivateAccess", value);
        }

        /*
        Set the value of the ResourceFeedID input for this Choreo. ((optional, integer) Specify a particular FeedID that the new APIKey should have access to. If not specified, the new APIKey permissions will apply to all feeds you are authorized to access.)
        */
        this.set_ResourceFeedID = function(value) {
            this.setInput("ResourceFeedID", value);
        }

        /*
        Set the value of the SourceIP input for this Choreo. ((optional, string) An IP address that, when specified, limits incoming requests to that specific IP address only.)
        */
        this.set_SourceIP = function(value) {
            this.setInput("SourceIP", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateKeyResultSet = function(resultStream) {
    CreateKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAPIKey" output from this Choreo execution. ((string) The new APIKey obtained from the APIKeyLocation returned by this Choreo.)
        */
        this.get_NewAPIKey = function() {
            return this.getResult("NewAPIKey");
        }
        /*
        Retrieve the value for the "APIKeyLocation" output from this Choreo execution. ((string) The URL of the newly created APIKey.)
        */
        this.get_APIKeyLocation = function() {
            return this.getResult("APIKeyLocation");
        }
}

util.inherits(CreateKey, choreography.Choreography);
util.inherits(CreateKeyInputSet, choreography.InputSet);
util.inherits(CreateKeyResultSet, choreography.ResultSet);
exports.CreateKey = CreateKey;


/*
    DeleteKey
    Deletes a specific API Key.
*/


var DeleteKey = function(session) {
    /*
        Create a new instance of the DeleteKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/DeleteKey"
    DeleteKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteKeyInputSet = function() {
    DeleteKeyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key you would like to delete.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the MasterAPIKey input for this Choreo. ((optional, string) Specify a MasterAPIKey with more permissions if the APIKey you would like to delete does not have sufficient permissions.)
        */
        this.set_MasterAPIKey = function(value) {
            this.setInput("MasterAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteKeyResultSet = function(resultStream) {
    DeleteKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a valid deletion, the code returned should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteKey, choreography.Choreography);
util.inherits(DeleteKeyInputSet, choreography.InputSet);
util.inherits(DeleteKeyResultSet, choreography.ResultSet);
exports.DeleteKey = DeleteKey;


/*
    ListAllKeys
    Returns a JSON or XML representation of all of the user's keys.
*/


var ListAllKeys = function(session) {
    /*
        Create a new instance of the ListAllKeys Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/ListAllKeys"
    ListAllKeys.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllKeysResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllKeysInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllKeys
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllKeysInputSet = function() {
    ListAllKeysInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The master API Key for which you would like to return a list of all the user's keys.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllKeys Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllKeysResultSet = function(resultStream) {
    ListAllKeysResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllKeys, choreography.Choreography);
util.inherits(ListAllKeysInputSet, choreography.InputSet);
util.inherits(ListAllKeysResultSet, choreography.ResultSet);
exports.ListAllKeys = ListAllKeys;


/*
    ReadKey
    Returns a JSON or XML representation of the specified APIKey.
*/


var ReadKey = function(session) {
    /*
        Create a new instance of the ReadKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/ReadKey"
    ReadKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadKeyInputSet = function() {
    ReadKeyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key you would like to return information on.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the MasterAPIKey input for this Choreo. ((optional, string) Specify a MasterAPIKey with more permissions if the APIKey you would like to view does not have sufficient (read) permissions.)
        */
        this.set_MasterAPIKey = function(value) {
            this.setInput("MasterAPIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadKeyResultSet = function(resultStream) {
    ReadKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadKey, choreography.Choreography);
util.inherits(ReadKeyInputSet, choreography.InputSet);
util.inherits(ReadKeyResultSet, choreography.ResultSet);
exports.ReadKey = ReadKey;


/*
    RegenerateKey
    Allows you to regenerate a new key with the same attributes and permissions as a previous key.
*/


var RegenerateKey = function(session) {
    /*
        Create a new instance of the RegenerateKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/RegenerateKey"
    RegenerateKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RegenerateKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RegenerateKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RegenerateKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RegenerateKeyInputSet = function() {
    RegenerateKeyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key you would like to regenerate. On successful regeneration, this API Key will no longer be valid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the MasterAPIKey input for this Choreo. ((optional, string) Specify a MasterAPIKey with sufficient permissions if the APIKey you would like to regenerate does not have the permissions to do so.)
        */
        this.set_MasterAPIKey = function(value) {
            this.setInput("MasterAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RegenerateKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RegenerateKeyResultSet = function(resultStream) {
    RegenerateKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "APIKeyLocation" output from this Choreo execution. ((string) The URL of the newly regenerated APIKey.)
        */
        this.get_APIKeyLocation = function() {
            return this.getResult("APIKeyLocation");
        }
        /*
        Retrieve the value for the "NewAPIKey" output from this Choreo execution. ((string) The regenerated APIKey obtained from the APIKeyLocation returned by this Choreo.)
        */
        this.get_NewAPIKey = function() {
            return this.getResult("NewAPIKey");
        }
}

util.inherits(RegenerateKey, choreography.Choreography);
util.inherits(RegenerateKeyInputSet, choreography.InputSet);
util.inherits(RegenerateKeyResultSet, choreography.ResultSet);
exports.RegenerateKey = RegenerateKey;


/*
    UpdateKey
    Updates an existing APIKey.
*/


var UpdateKey = function(session) {
    /*
        Create a new instance of the UpdateKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/APIKeys/UpdateKey"
    UpdateKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateKeyInputSet = function() {
    UpdateKeyInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key you would like to update.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessMethods input for this Choreo. ((conditional, string) Comma-separated input containing one or more allowed HTTP methods that the key is allowed. Valid values: get, put, post, and/or delete. Ex.: "put,post". Required unless writing your own CustomKey.)
        */
        this.set_AccessMethods = function(value) {
            this.setInput("AccessMethods", value);
        }

        /*
        Set the value of the CustomKey input for this Choreo. ((optional, any) Optional Custom key to sent to Xively. Type and format depends on CustomType. Please see documentation for more information on constructing your own body. If used all other scalar inputs are ignored.)
        */
        this.set_CustomKey = function(value) {
            this.setInput("CustomKey", value);
        }

        /*
        Set the value of the CustomPermissions input for this Choreo. ((optional, any) Optional custom permissions for advanced configuration. Type and format depends on CustomType. If specified ignores SourceIP, ResourcesData and AccessMethodsData.)
        */
        this.set_CustomPermissions = function(value) {
            this.setInput("CustomPermissions", value);
        }

        /*
        Set the value of the CustomType input for this Choreo. ((optional, string) The datatype that is being input if adding custom permission objects. Valid values are "json" (the default) and "xml".)
        */
        this.set_CustomType = function(value) {
            this.setInput("CustomType", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((conditional, string) A label by which the key can be referenced. Required unless writing your own CustomKey.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the MasterAPIKey input for this Choreo. ((optional, string) Specify a MasterAPIKey with more permissions if the APIKey you would like to view does not have sufficient (write) permissions.)
        */
        this.set_MasterAPIKey = function(value) {
            this.setInput("MasterAPIKey", value);
        }

        /*
        Set the value of the PrivateAccess input for this Choreo. ((optional, string) Flag that indicates whether this key can access private resources belonging to the user. To turn on, input "true", leave blank for "false".)
        */
        this.set_PrivateAccess = function(value) {
            this.setInput("PrivateAccess", value);
        }

        /*
        Set the value of the ResourceFeedID input for this Choreo. ((optional, string) Specify a particular FeedID that the APIKey should have access to. If not specified, the APIKey permissions will apply to all feeds you are authorized to access.)
        */
        this.set_ResourceFeedID = function(value) {
            this.setInput("ResourceFeedID", value);
        }

        /*
        Set the value of the SourceIP input for this Choreo. ((optional, string) An IP address that, when specified, limits incoming requests to that specific IP address only.)
        */
        this.set_SourceIP = function(value) {
            this.setInput("SourceIP", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateKeyResultSet = function(resultStream) {
    UpdateKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful APIKey update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(UpdateKey, choreography.Choreography);
util.inherits(UpdateKeyInputSet, choreography.InputSet);
util.inherits(UpdateKeyResultSet, choreography.ResultSet);
exports.UpdateKey = UpdateKey;

