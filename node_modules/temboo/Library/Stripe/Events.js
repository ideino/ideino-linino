
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListAllEvents
    Returns a list of events that have happened in your account.
*/


var ListAllEvents = function(session) {
    /*
        Create a new instance of the ListAllEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Events/ListAllEvents"
    ListAllEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllEventsInputSet = function() {
    ListAllEventsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) A limit on the number of events to be returned. Count can range between 1 and 100 items.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Created input for this Choreo. ((optional, date) Filters the result based on the event created date (a UTC timestamp).)
        */
        this.set_Created = function(value) {
            this.setInput("Created", value);
        }

        /*
        Set the value of the GreaterThanEqualTo input for this Choreo. ((optional, date) Returns events that have been created after or equal to this UTC timestamp.)
        */
        this.set_GreaterThanEqualTo = function(value) {
            this.setInput("GreaterThanEqualTo", value);
        }

        /*
        Set the value of the GreaterThan input for this Choreo. ((optional, date) Returns events that have been created after this UTC timestamp.)
        */
        this.set_GreaterThan = function(value) {
            this.setInput("GreaterThan", value);
        }

        /*
        Set the value of the LessThanEqualTo input for this Choreo. ((optional, date) Return events that were created before or equal to this UTC timestamp.)
        */
        this.set_LessThanEqualTo = function(value) {
            this.setInput("LessThanEqualTo", value);
        }

        /*
        Set the value of the LessThan input for this Choreo. ((optional, date) Return events that were created before this UTC timestamp.)
        */
        this.set_LessThan = function(value) {
            this.setInput("LessThan", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) An offset into your events array. The API will return the requested number of events starting at that offset.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) A string containing a specific event name, or group of events using * as a wildcard. This will return a filtered result including only events with a matching event property.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllEventsResultSet = function(resultStream) {
    ListAllEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllEvents, choreography.Choreography);
util.inherits(ListAllEventsInputSet, choreography.InputSet);
util.inherits(ListAllEventsResultSet, choreography.ResultSet);
exports.ListAllEvents = ListAllEvents;


/*
    MoneyReceived
    Retrieves a list of successful charge events.
*/


var MoneyReceived = function(session) {
    /*
        Create a new instance of the MoneyReceived Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Events/MoneyReceived"
    MoneyReceived.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MoneyReceivedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MoneyReceivedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MoneyReceived
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MoneyReceivedInputSet = function() {
    MoneyReceivedInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) A limit on the number of events to be returned. Count can range between 1 and 100 items. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Created input for this Choreo. ((optional, date) Filters the result based on the event created date (a UTC timestamp).)
        */
        this.set_Created = function(value) {
            this.setInput("Created", value);
        }

        /*
        Set the value of the GreaterThanEqualTo input for this Choreo. ((optional, date) Returns events that have been created after or equal to this UTC timestamp.)
        */
        this.set_GreaterThanEqualTo = function(value) {
            this.setInput("GreaterThanEqualTo", value);
        }

        /*
        Set the value of the GreaterThan input for this Choreo. ((optional, date) Returns events that have been created after this UTC timestamp.)
        */
        this.set_GreaterThan = function(value) {
            this.setInput("GreaterThan", value);
        }

        /*
        Set the value of the LessThanEqualTo input for this Choreo. ((optional, date) Return events that were created before or equal to this UTC timestamp.)
        */
        this.set_LessThanEqualTo = function(value) {
            this.setInput("LessThanEqualTo", value);
        }

        /*
        Set the value of the LessThan input for this Choreo. ((optional, date) Return events that were created before this UTC timestamp.)
        */
        this.set_LessThan = function(value) {
            this.setInput("LessThan", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) An offset into your events array. The API will return the requested number of events starting at that offset.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, an array of charge amounts is returned. Verbose mode returns an array of charge objects. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MoneyReceived Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MoneyReceivedResultSet = function(resultStream) {
    MoneyReceivedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TotalCount" output from this Choreo execution. ((integer) The total number of results. This can be used to determine whether or not you need to retrieve the next page of results.)
        */
        this.get_TotalCount = function() {
            return this.getResult("TotalCount");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MoneyReceived, choreography.Choreography);
util.inherits(MoneyReceivedInputSet, choreography.InputSet);
util.inherits(MoneyReceivedResultSet, choreography.ResultSet);
exports.MoneyReceived = MoneyReceived;


/*
    RetrieveEvent
    Retrieves the details of an event.
*/


var RetrieveEvent = function(session) {
    /*
        Create a new instance of the RetrieveEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Events/RetrieveEvent"
    RetrieveEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveEventInputSet = function() {
    RetrieveEventInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EventID input for this Choreo. ((required, string) The id of the event to return.)
        */
        this.set_EventID = function(value) {
            this.setInput("EventID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveEventResultSet = function(resultStream) {
    RetrieveEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveEvent, choreography.Choreography);
util.inherits(RetrieveEventInputSet, choreography.InputSet);
util.inherits(RetrieveEventResultSet, choreography.ResultSet);
exports.RetrieveEvent = RetrieveEvent;

