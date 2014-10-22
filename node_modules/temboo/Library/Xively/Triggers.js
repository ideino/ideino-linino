
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateTrigger
    Creates a new trigger.
*/


var CreateTrigger = function(session) {
    /*
        Create a new instance of the CreateTrigger Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Triggers/CreateTrigger"
    CreateTrigger.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTriggerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTriggerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTrigger
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTriggerInputSet = function() {
    CreateTriggerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DatastreamID input for this Choreo. ((required, string) The ID of the datastream you would like to create a trigger for.)
        */
        this.set_DatastreamID = function(value) {
            this.setInput("DatastreamID", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((required, integer) The ID of the feed you would like to create a trigger for.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the ThresholdValue input for this Choreo. ((required, string) Threshold that will cause the trigger to activate. Not required if TriggerType = "change", "frozen" or "live". Required for all others.)
        */
        this.set_ThresholdValue = function(value) {
            this.setInput("ThresholdValue", value);
        }

        /*
        Set the value of the TriggerType input for this Choreo. ((required, string) Type of trigger. Possible values: "gt", "gte", "lt", "lte", "eq", "change" (any change), "frozen" (no updates for 15 minutes), or "live" (updated again after being frozen).)
        */
        this.set_TriggerType = function(value) {
            this.setInput("TriggerType", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The URL that the Xively trigger will post to when activated. Ex: http://requestb.in)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTrigger Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTriggerResultSet = function(resultStream) {
    CreateTriggerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TriggerID" output from this Choreo execution. ((integer) TriggerID extracted from the TriggerLocation.)
        */
        this.get_TriggerID = function() {
            return this.getResult("TriggerID");
        }
        /*
        Retrieve the value for the "TriggerLocation" output from this Choreo execution. ((string) The URL of the newly created trigger.)
        */
        this.get_TriggerLocation = function() {
            return this.getResult("TriggerLocation");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful trigger creation, the code should be 201.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(CreateTrigger, choreography.Choreography);
util.inherits(CreateTriggerInputSet, choreography.InputSet);
util.inherits(CreateTriggerResultSet, choreography.ResultSet);
exports.CreateTrigger = CreateTrigger;


/*
    DeleteTrigger
    Deletes the specified trigger.
*/


var DeleteTrigger = function(session) {
    /*
        Create a new instance of the DeleteTrigger Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Triggers/DeleteTrigger"
    DeleteTrigger.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTriggerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTriggerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTrigger
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTriggerInputSet = function() {
    DeleteTriggerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the TriggerID input for this Choreo. ((required, integer) TriggerID for the trigger that you wish to delete.)
        */
        this.set_TriggerID = function(value) {
            this.setInput("TriggerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTrigger Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTriggerResultSet = function(resultStream) {
    DeleteTriggerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful trigger deletion, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteTrigger, choreography.Choreography);
util.inherits(DeleteTriggerInputSet, choreography.InputSet);
util.inherits(DeleteTriggerResultSet, choreography.ResultSet);
exports.DeleteTrigger = DeleteTrigger;


/*
    ListAllTriggers
    Returns all triggers for the authenticated account.
*/


var ListAllTriggers = function(session) {
    /*
        Create a new instance of the ListAllTriggers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Triggers/ListAllTriggers"
    ListAllTriggers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllTriggersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllTriggersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllTriggers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllTriggersInputSet = function() {
    ListAllTriggersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the FeedID input for this Choreo. ((optional, integer) Filter the returned triggers to only include those for the specified FeedID.)
        */
        this.set_FeedID = function(value) {
            this.setInput("FeedID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "json" (the default) and "xml".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllTriggers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllTriggersResultSet = function(resultStream) {
    ListAllTriggersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllTriggers, choreography.Choreography);
util.inherits(ListAllTriggersInputSet, choreography.InputSet);
util.inherits(ListAllTriggersResultSet, choreography.ResultSet);
exports.ListAllTriggers = ListAllTriggers;


/*
    ReadTrigger
    Returns a specific trigger for the authenticated account.
*/


var ReadTrigger = function(session) {
    /*
        Create a new instance of the ReadTrigger Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Triggers/ReadTrigger"
    ReadTrigger.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadTriggerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadTriggerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadTrigger
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadTriggerInputSet = function() {
    ReadTriggerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
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

        /*
        Set the value of the TriggerID input for this Choreo. ((required, integer) ID for the trigger that you wish to retrieve information about.)
        */
        this.set_TriggerID = function(value) {
            this.setInput("TriggerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadTrigger Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadTriggerResultSet = function(resultStream) {
    ReadTriggerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadTrigger, choreography.Choreography);
util.inherits(ReadTriggerInputSet, choreography.InputSet);
util.inherits(ReadTriggerResultSet, choreography.ResultSet);
exports.ReadTrigger = ReadTrigger;


/*
    UpdateTrigger
    Updates an existing trigger.
*/


var UpdateTrigger = function(session) {
    /*
        Create a new instance of the UpdateTrigger Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Triggers/UpdateTrigger"
    UpdateTrigger.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateTriggerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateTriggerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateTrigger
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateTriggerInputSet = function() {
    UpdateTriggerInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ThresholdValue input for this Choreo. ((optional, string) Threshold that will cause the trigger to activate. Include input only if changing Threshold Value.)
        */
        this.set_ThresholdValue = function(value) {
            this.setInput("ThresholdValue", value);
        }

        /*
        Set the value of the TriggerID input for this Choreo. ((required, integer) TriggerID for the trigger that you wish to update.)
        */
        this.set_TriggerID = function(value) {
            this.setInput("TriggerID", value);
        }

        /*
        Set the value of the TriggerType input for this Choreo. ((optional, string) Type of trigger. Include input only if changing TriggerType. Valid values: gt, gte, lt, lte, eq, change (any change), frozen (no updates for 15 minutes), or live (updated again after being frozen).)
        */
        this.set_TriggerType = function(value) {
            this.setInput("TriggerType", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) The URL that the Xively trigger will post to when activated. Include input only if changing the URL. Ex: http://requestb.in)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateTrigger Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateTriggerResultSet = function(resultStream) {
    UpdateTriggerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful trigger update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(UpdateTrigger, choreography.Choreography);
util.inherits(UpdateTriggerInputSet, choreography.InputSet);
util.inherits(UpdateTriggerResultSet, choreography.ResultSet);
exports.UpdateTrigger = UpdateTrigger;

