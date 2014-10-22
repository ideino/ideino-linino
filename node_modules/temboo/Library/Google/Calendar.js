
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateCalendar
    Create a new secondary calendar.
*/


var CreateCalendar = function(session) {
    /*
        Create a new instance of the CreateCalendar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/CreateCalendar"
    CreateCalendar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateCalendarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateCalendarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateCalendar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateCalendarInputSet = function() {
    CreateCalendarInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description of the calendar.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Location input for this Choreo. ((optional, string) Geographic location of the calendar such as "Los Angeles" or "New York".)
        */
        this.set_Location = function(value) {
            this.setInput("Location", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) The timezone for the new calendar, such as "America/Los_Angeles". Defaults to UTC if left blank.)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The name for the new calendar.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateCalendar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateCalendarResultSet = function(resultStream) {
    CreateCalendarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(CreateCalendar, choreography.Choreography);
util.inherits(CreateCalendarInputSet, choreography.InputSet);
util.inherits(CreateCalendarResultSet, choreography.ResultSet);
exports.CreateCalendar = CreateCalendar;


/*
    CreateEvent
    Create a new event in a specified calendar.
*/


var CreateEvent = function(session) {
    /*
        Create a new instance of the CreateEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/CreateEvent"
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
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The ID for the calendar in which to add the event.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, string) The end date of the event, in the format "2012-04-10".)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((required, string) The end time for the event, in the format "10:30:00".)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the EventDescription input for this Choreo. ((optional, string) A short description of the event.)
        */
        this.set_EventDescription = function(value) {
            this.setInput("EventDescription", value);
        }

        /*
        Set the value of the EventLocation input for this Choreo. ((optional, string) The location for the new event.)
        */
        this.set_EventLocation = function(value) {
            this.setInput("EventLocation", value);
        }

        /*
        Set the value of the EventTitle input for this Choreo. ((required, string) The title for the new event.)
        */
        this.set_EventTitle = function(value) {
            this.setInput("EventTitle", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, string) The start date of the event, in the format "2012-11-03".)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((required, string) The start time for the event, in the format "10:00:00".)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEventResultSet = function(resultStream) {
    CreateEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TimezoneSetting" output from this Choreo execution. ((string) The timezone setting retrieved from the specified calendar.)
        */
        this.get_TimezoneSetting = function() {
            return this.getResult("TimezoneSetting");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "CreateEvent" output from this Choreo execution. (The request template with appropriate inputs passed.)
        */
        this.get_CreateEvent = function() {
            return this.getResult("CreateEvent");
        }
}

util.inherits(CreateEvent, choreography.Choreography);
util.inherits(CreateEventInputSet, choreography.InputSet);
util.inherits(CreateEventResultSet, choreography.ResultSet);
exports.CreateEvent = CreateEvent;


/*
    DeleteAllEvents
    Delete all events from a primary calendar of an account. Note that this operation can't be undone.
*/


var DeleteAllEvents = function(session) {
    /*
        Create a new instance of the DeleteAllEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/DeleteAllEvents"
    DeleteAllEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAllEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAllEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAllEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAllEventsInputSet = function() {
    DeleteAllEventsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAllEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAllEventsResultSet = function(resultStream) {
    DeleteAllEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No content is returned for delete calendar operations.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(DeleteAllEvents, choreography.Choreography);
util.inherits(DeleteAllEventsInputSet, choreography.InputSet);
util.inherits(DeleteAllEventsResultSet, choreography.ResultSet);
exports.DeleteAllEvents = DeleteAllEvents;


/*
    DeleteCalendar
    Delete a secondary calendar.
*/


var DeleteCalendar = function(session) {
    /*
        Create a new instance of the DeleteCalendar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/DeleteCalendar"
    DeleteCalendar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteCalendarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteCalendarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteCalendar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteCalendarInputSet = function() {
    DeleteCalendarInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The ID for the calendar to delete.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((required, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteCalendar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteCalendarResultSet = function(resultStream) {
    DeleteCalendarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No content is returned for delete calendar operations.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(DeleteCalendar, choreography.Choreography);
util.inherits(DeleteCalendarInputSet, choreography.InputSet);
util.inherits(DeleteCalendarResultSet, choreography.ResultSet);
exports.DeleteCalendar = DeleteCalendar;


/*
    DeleteEvent
    Delete a specific event from a specified calendar.
*/


var DeleteEvent = function(session) {
    /*
        Create a new instance of the DeleteEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/DeleteEvent"
    DeleteEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteEventInputSet = function() {
    DeleteEventInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The ID for the calendar to delete.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The name of the calendar that you want to retrieve information for. Note that if there are multiple calendars with the same name, only the first one will be returned.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the EventID input for this Choreo. ((required, string) The unique ID for the event to delete.)
        */
        this.set_EventID = function(value) {
            this.setInput("EventID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteEventResultSet = function(resultStream) {
    DeleteEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AccessToken" output from this Choreo execution. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.get_AccessToken = function() {
            return this.getResult("AccessToken");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No content is returned for delete calendar operations.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteEvent, choreography.Choreography);
util.inherits(DeleteEventInputSet, choreography.InputSet);
util.inherits(DeleteEventResultSet, choreography.ResultSet);
exports.DeleteEvent = DeleteEvent;


/*
    GetAllCalendars
    Retrieve data for all calendars.
*/


var GetAllCalendars = function(session) {
    /*
        Create a new instance of the GetAllCalendars Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetAllCalendars"
    GetAllCalendars.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllCalendarsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllCalendarsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllCalendars
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllCalendarsInputSet = function() {
    GetAllCalendarsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The maximum number of calendars to return. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) The calendar fields to return. Accepted values are "etag", "items", "kind", and "nextPageToken". All calendar items are returned by default.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Hidden input for this Choreo. ((optional, boolean) Enter "1" to return hidden calendars in the results, or "0" (the default) to not return them.)
        */
        this.set_Hidden = function(value) {
            this.setInput("Hidden", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllCalendars Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllCalendarsResultSet = function(resultStream) {
    GetAllCalendarsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllCalendars, choreography.Choreography);
util.inherits(GetAllCalendarsInputSet, choreography.InputSet);
util.inherits(GetAllCalendarsResultSet, choreography.ResultSet);
exports.GetAllCalendars = GetAllCalendars;


/*
    GetAllEvents
    Retrieve data for all events in a specified calendar.
*/


var GetAllEvents = function(session) {
    /*
        Create a new instance of the GetAllEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetAllEvents"
    GetAllEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllEventsInputSet = function() {
    GetAllEventsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The unique ID for the calendar with the events to retrieve.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllEventsResultSet = function(resultStream) {
    GetAllEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllEvents, choreography.Choreography);
util.inherits(GetAllEventsInputSet, choreography.InputSet);
util.inherits(GetAllEventsResultSet, choreography.ResultSet);
exports.GetAllEvents = GetAllEvents;


/*
    GetAllSettings
    Retrieves all settings for a Google Calendar account.
*/


var GetAllSettings = function(session) {
    /*
        Create a new instance of the GetAllSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetAllSettings"
    GetAllSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllSettingsInputSet = function() {
    GetAllSettingsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) The settings fields to return. Returns etag, item IDs, and item values by default.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllSettingsResultSet = function(resultStream) {
    GetAllSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(GetAllSettings, choreography.Choreography);
util.inherits(GetAllSettingsInputSet, choreography.InputSet);
util.inherits(GetAllSettingsResultSet, choreography.ResultSet);
exports.GetAllSettings = GetAllSettings;


/*
    GetCalendar
    Retrieve data for a specific calendar in a Google account.
*/


var GetCalendar = function(session) {
    /*
        Create a new instance of the GetCalendar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetCalendar"
    GetCalendar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCalendarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCalendarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCalendar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCalendarInputSet = function() {
    GetCalendarInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The ID for the calendar to retrieve.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCalendar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCalendarResultSet = function(resultStream) {
    GetCalendarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCalendar, choreography.Choreography);
util.inherits(GetCalendarInputSet, choreography.InputSet);
util.inherits(GetCalendarResultSet, choreography.ResultSet);
exports.GetCalendar = GetCalendar;


/*
    GetEvent
    Retrieve data for all calendars in an account.
*/


var GetEvent = function(session) {
    /*
        Create a new instance of the GetEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetEvent"
    GetEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEventInputSet = function() {
    GetEventInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The unique ID for the calendar with the events to retrieve.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the EventID input for this Choreo. ((required, string) The unique ID for the event to retrieve.)
        */
        this.set_EventID = function(value) {
            this.setInput("EventID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEventResultSet = function(resultStream) {
    GetEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEvent, choreography.Choreography);
util.inherits(GetEventInputSet, choreography.InputSet);
util.inherits(GetEventResultSet, choreography.ResultSet);
exports.GetEvent = GetEvent;


/*
    GetNextEvent
    Retrieves the next upcoming event in a Google calendar based on the current timestamp and the specified calendar's timezone setting.
*/


var GetNextEvent = function(session) {
    /*
        Create a new instance of the GetNextEvent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetNextEvent"
    GetNextEvent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNextEventResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNextEventInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNextEvent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNextEventInputSet = function() {
    GetNextEventInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The unique ID for the calendar that contains the next event to retrieve.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNextEvent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNextEventResultSet = function(resultStream) {
    GetNextEventResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNextEvent, choreography.Choreography);
util.inherits(GetNextEventInputSet, choreography.InputSet);
util.inherits(GetNextEventResultSet, choreography.ResultSet);
exports.GetNextEvent = GetNextEvent;


/*
    GetSetting
    Retrieves a specifed setting for a Google Calendar account.
*/


var GetSetting = function(session) {
    /*
        Create a new instance of the GetSetting Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/GetSetting"
    GetSetting.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSettingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSettingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSetting
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSettingInputSet = function() {
    GetSettingInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SettingID input for this Choreo. ((required, string) The unique ID for the setting to retrieve. Use the GetAllSettings Choreo to retrieve settings IDs.)
        */
        this.set_SettingID = function(value) {
            this.setInput("SettingID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSetting Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSettingResultSet = function(resultStream) {
    GetSettingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSetting, choreography.Choreography);
util.inherits(GetSettingInputSet, choreography.InputSet);
util.inherits(GetSettingResultSet, choreography.ResultSet);
exports.GetSetting = GetSetting;


/*
    SearchCalendarsByName
    Retrieves information about a calendar including the id with a given calendar name.
*/


var SearchCalendarsByName = function(session) {
    /*
        Create a new instance of the SearchCalendarsByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/SearchCalendarsByName"
    SearchCalendarsByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchCalendarsByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchCalendarsByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchCalendarsByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchCalendarsByNameInputSet = function() {
    SearchCalendarsByNameInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarName input for this Choreo. ((required, string) The name of the calendar that you want to retrieve information for. Note that if there are multiple calendars with the same name, only the first one will be returned.)
        */
        this.set_CalendarName = function(value) {
            this.setInput("CalendarName", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The maximum number of calendars to search by name. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchCalendarsByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchCalendarsByNameResultSet = function(resultStream) {
    SearchCalendarsByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "CalendarId" output from this Choreo execution. ((string) The calendar id parsed from the Google response.)
        */
        this.get_CalendarId = function() {
            return this.getResult("CalendarId");
        }
        /*
        Retrieve the value for the "CalendarDescription" output from this Choreo execution. ((string) The calendar description parsed from the Google response.)
        */
        this.get_CalendarDescription = function() {
            return this.getResult("CalendarDescription");
        }
        /*
        Retrieve the value for the "CalendarSummary" output from this Choreo execution. ((string) The summary or calendar name parsed from the Google response.)
        */
        this.get_CalendarSummary = function() {
            return this.getResult("CalendarSummary");
        }
        /*
        Retrieve the value for the "CalendarTimezone" output from this Choreo execution. ((string) The calendar timezone parsed from the Google response.)
        */
        this.get_CalendarTimezone = function() {
            return this.getResult("CalendarTimezone");
        }
}

util.inherits(SearchCalendarsByName, choreography.Choreography);
util.inherits(SearchCalendarsByNameInputSet, choreography.InputSet);
util.inherits(SearchCalendarsByNameResultSet, choreography.ResultSet);
exports.SearchCalendarsByName = SearchCalendarsByName;


/*
    SearchEvents
    Allows you to search for events using a variety of search parameters.
*/


var SearchEvents = function(session) {
    /*
        Create a new instance of the SearchEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/SearchEvents"
    SearchEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchEventsInputSet = function() {
    SearchEventsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The unique ID for the calendar with the events to retrieve.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the LastModified input for this Choreo. ((optional, date) An event's last modification time (as a RFC 3339 timestamp) to filter by.)
        */
        this.set_LastModified = function(value) {
            this.setInput("LastModified", value);
        }

        /*
        Set the value of the MaxAttendees input for this Choreo. ((optional, integer) The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned.)
        */
        this.set_MaxAttendees = function(value) {
            this.setInput("MaxAttendees", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of events to return on one result page.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the MaxTime input for this Choreo. ((optional, date) The max start time to filter by (formatted like 2012-05-22T00:47:43.000Z).)
        */
        this.set_MaxTime = function(value) {
            this.setInput("MaxTime", value);
        }

        /*
        Set the value of the MinTime input for this Choreo. ((optional, date) The minimum start time to filter by (formatted like 2012-05-22T00:47:43.000Z).)
        */
        this.set_MinTime = function(value) {
            this.setInput("MinTime", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) The order of the events returned in the result. Accepted values are: "startTime" (ordered by start date/time. Must set SingleEvents to 1 to use this) or "updated" (ordered by modification date/time).)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, integer) Indicates which result page to return. Used for paging through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A keyword search to find events.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowDeleted input for this Choreo. ((optional, boolean) Whether to include deleted events. Set to 1 (true) to include deleted events. Defaults to 0 (false).)
        */
        this.set_ShowDeleted = function(value) {
            this.setInput("ShowDeleted", value);
        }

        /*
        Set the value of the ShowHiddenInvitations input for this Choreo. ((optional, boolean) Whether to include hidden invitations in the result. Set to 1 (true) to enable. The default is 0 (false).)
        */
        this.set_ShowHiddenInvitations = function(value) {
            this.setInput("ShowHiddenInvitations", value);
        }

        /*
        Set the value of the SingleEvent input for this Choreo. ((optional, boolean) Whether to expand recurring events into instances and only return single one-off events and instances of recurring events. Defaults to 0 (false).)
        */
        this.set_SingleEvent = function(value) {
            this.setInput("SingleEvent", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) The time zone used in the response (i.e. America/Los_Angeles). The default is the time zone of the calendar.)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchEventsResultSet = function(resultStream) {
    SearchEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchEvents, choreography.Choreography);
util.inherits(SearchEventsInputSet, choreography.InputSet);
util.inherits(SearchEventsResultSet, choreography.ResultSet);
exports.SearchEvents = SearchEvents;


/*
    UpdateCalendar
    Updates the metadata for a calendar.
*/


var UpdateCalendar = function(session) {
    /*
        Create a new instance of the UpdateCalendar Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Calendar/UpdateCalendar"
    UpdateCalendar.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateCalendarResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateCalendarInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateCalendar
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateCalendarInputSet = function() {
    UpdateCalendarInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the CalendarID input for this Choreo. ((required, string) The ID for the calendar to update.)
        */
        this.set_CalendarID = function(value) {
            this.setInput("CalendarID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the NewDescription input for this Choreo. ((optional, string) The new description for the calendar to update.)
        */
        this.set_NewDescription = function(value) {
            this.setInput("NewDescription", value);
        }

        /*
        Set the value of the NewLocation input for this Choreo. ((optional, string) The new location for the calendar to update.)
        */
        this.set_NewLocation = function(value) {
            this.setInput("NewLocation", value);
        }

        /*
        Set the value of the NewSummary input for this Choreo. ((required, string) The new summary for the calendar to update.)
        */
        this.set_NewSummary = function(value) {
            this.setInput("NewSummary", value);
        }

        /*
        Set the value of the NewTimezone input for this Choreo. ((optional, string) The new timezone for the calendar to update.)
        */
        this.set_NewTimezone = function(value) {
            this.setInput("NewTimezone", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateCalendar Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateCalendarResultSet = function(resultStream) {
    UpdateCalendarResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(UpdateCalendar, choreography.Choreography);
util.inherits(UpdateCalendarInputSet, choreography.InputSet);
util.inherits(UpdateCalendarResultSet, choreography.ResultSet);
exports.UpdateCalendar = UpdateCalendar;

