
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateEvent
    Creates a new event.
*/


var CreateEvent = function(session) {
    /*
        Create a new instance of the CreateEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Events/CreateEvent"
    CreateEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateEventInputSet = function() {
    CreateEventInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EventTypeID input for this Choreo. ((required, integer) The id for the type of event you want to create. Note that depending on the event type id specified, you may need to provide the ObjectName and ObjectID that is being affected.)
        */
        this.set_EventTypeID = function(value) {
            this.setInput("EventTypeID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((conditional, integer) The object id that is being affected. Required for certain event types. When specified, ObjectName must also be provided.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ObjectName input for this Choreo. ((conditional, string) The object name that is being affected (i.e. user-id). Required for certain event types. When specified, ObjectID must also be provided.)
        */
        this.set_ObjectName = function(value) {
            this.setInput("ObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEventResultSet = function(resultStream) {
    CreateEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateEvent, choreography.Choreography);
util.inherits(CreateEventInputSet, choreography.InputSet);
util.inherits(CreateEventResultSet, choreography.ResultSet);
exports.CreateEvent = CreateEvent;


/*
    ListAll
    Retrieves a list of all events (aka activities).
*/


var ListAll = function(session) {
    /*
        Create a new instance of the ListAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Events/ListAll"
    ListAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInputSet = function() {
    ListAllInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllResultSet = function(resultStream) {
    ListAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAll, choreography.Choreography);
util.inherits(ListAllInputSet, choreography.InputSet);
util.inherits(ListAllResultSet, choreography.ResultSet);
exports.ListAll = ListAll;


/*
    ShowEvent
    Retrieves information for a single event.
*/


var ShowEvent = function(session) {
    /*
        Create a new instance of the ShowEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Events/ShowEvent"
    ShowEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowEventInputSet = function() {
    ShowEventInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id the event you want to return.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowEventResultSet = function(resultStream) {
    ShowEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowEvent, choreography.Choreography);
util.inherits(ShowEventInputSet, choreography.InputSet);
util.inherits(ShowEventResultSet, choreography.ResultSet);
exports.ShowEvent = ShowEvent;

