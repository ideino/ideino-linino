
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ObjectDelete
    Deletes one or more specified keys.
*/


var ObjectDelete = function(session) {
    /*
        Create a new instance of the ObjectDelete Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/ObjectStorage/ObjectDelete"
    ObjectDelete.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObjectDeleteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObjectDeleteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObjectDelete
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObjectDeleteInputSet = function() {
    ObjectDeleteInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the All input for this Choreo. ((conditional, boolean) Indicates that all keys should be deleted if the Keys input is left empty. Set to "true" to delete all keys.)
        */
        this.set_All = function(value) {
            this.setInput("All", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the Keys input for this Choreo. ((conditional, string) A comma separated list of keys to delete. Required unless specifying "true" for the All parameter.)
        */
        this.set_Keys = function(value) {
            this.setInput("Keys", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObjectDelete Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObjectDeleteResultSet = function(resultStream) {
    ObjectDeleteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObjectDelete, choreography.Choreography);
util.inherits(ObjectDeleteInputSet, choreography.InputSet);
util.inherits(ObjectDeleteResultSet, choreography.ResultSet);
exports.ObjectDelete = ObjectDelete;


/*
    ObjectGet
    Retrieves one or more objects from Cloudmine.
*/


var ObjectGet = function(session) {
    /*
        Create a new instance of the ObjectGet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/ObjectStorage/ObjectGet"
    ObjectGet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObjectGetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObjectGetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObjectGet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObjectGetInputSet = function() {
    ObjectGetInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, boolean) Returns a count of the results in the response if set to true. Valid values are true and false.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Keys input for this Choreo. ((optional, string) A comma separated list of keys to return. If not specified, all key/value pairs are returned.)
        */
        this.set_Keys = function(value) {
            this.setInput("Keys", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Limits the number of results returned. Use -1 for no limit. Use 0 for no results, and with Count=true to just get the number of available results. This defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Indicates to start results after skiping this number objects. Used to page through results.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObjectGet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObjectGetResultSet = function(resultStream) {
    ObjectGetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObjectGet, choreography.Choreography);
util.inherits(ObjectGetInputSet, choreography.InputSet);
util.inherits(ObjectGetResultSet, choreography.ResultSet);
exports.ObjectGet = ObjectGet;


/*
    ObjectSearch
    Allows you to query key/value pair objects.
*/


var ObjectSearch = function(session) {
    /*
        Create a new instance of the ObjectSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/ObjectStorage/ObjectSearch"
    ObjectSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObjectSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObjectSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObjectSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObjectSearchInputSet = function() {
    ObjectSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, boolean) Returns a count of the results in the response if set to true. Valid values are true and false.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Limits the number of results returned. Use -1 for no limit. Use 0 for no results, and with Count=true to just get the number of available results. This defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) The query for your search. See Choreo documentation for information on appropriate query syntax.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Indicates to start results after skiping this number objects. Used to page through results.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObjectSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObjectSearchResultSet = function(resultStream) {
    ObjectSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObjectSearch, choreography.Choreography);
util.inherits(ObjectSearchInputSet, choreography.InputSet);
util.inherits(ObjectSearchResultSet, choreography.ResultSet);
exports.ObjectSearch = ObjectSearch;


/*
    ObjectSet
    Allows you to update or create key/value pairs.

*/


var ObjectSet = function(session) {
    /*
        Create a new instance of the ObjectSet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/ObjectStorage/ObjectSet"
    ObjectSet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObjectSetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObjectSetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObjectSet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObjectSetInputSet = function() {
    ObjectSetInputSet.super_.call(this);
        /*
        Set the value of the Data input for this Choreo. ((required, json) A valid JSON object containing key/value pairs.)
        */
        this.set_Data = function(value) {
            this.setInput("Data", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObjectSet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObjectSetResultSet = function(resultStream) {
    ObjectSetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObjectSet, choreography.Choreography);
util.inherits(ObjectSetInputSet, choreography.InputSet);
util.inherits(ObjectSetResultSet, choreography.ResultSet);
exports.ObjectSet = ObjectSet;


/*
    ObjectUpdate
    Allows you to update, merge, or create key/value pairs.

*/


var ObjectUpdate = function(session) {
    /*
        Create a new instance of the ObjectUpdate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CloudMine/ObjectStorage/ObjectUpdate"
    ObjectUpdate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ObjectUpdateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ObjectUpdateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ObjectUpdate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ObjectUpdateInputSet = function() {
    ObjectUpdateInputSet.super_.call(this);
        /*
        Set the value of the Data input for this Choreo. ((required, json) A valid JSON object containing key/value pairs.)
        */
        this.set_Data = function(value) {
            this.setInput("Data", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by CloudMine after registering your app.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ApplicationIdentifier input for this Choreo. ((required, string) The application identifier provided by CloudMine after registering your app.)
        */
        this.set_ApplicationIdentifier = function(value) {
            this.setInput("ApplicationIdentifier", value);
        }

        /*
        Set the value of the SessionToken input for this Choreo. ((conditional, string) The session token for an existing user (returned by the AccountLogin Choreo). This is only required if your app is performing this operation on behalf of another user.)
        */
        this.set_SessionToken = function(value) {
            this.setInput("SessionToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ObjectUpdate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ObjectUpdateResultSet = function(resultStream) {
    ObjectUpdateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from CloudMine.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ObjectUpdate, choreography.Choreography);
util.inherits(ObjectUpdateInputSet, choreography.InputSet);
util.inherits(ObjectUpdateResultSet, choreography.ResultSet);
exports.ObjectUpdate = ObjectUpdate;

