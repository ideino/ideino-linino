
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetContacts
    Retrieves your social contacts from multiple APIs in one API call.
*/


var GetContacts = function(session) {
    /*
        Create a new instance of the GetContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/Social/GetContacts"
    GetContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetContactsInputSet = function() {
    GetContactsInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((conditional, json) A list of credentials for the APIs you wish to access. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The Twitter screen name to retrieve followers for.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetContactsResultSet = function(resultStream) {
    GetContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) Contains the merged results from the API responses.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetContacts, choreography.Choreography);
util.inherits(GetContactsInputSet, choreography.InputSet);
util.inherits(GetContactsResultSet, choreography.ResultSet);
exports.GetContacts = GetContacts;


/*
    GetNearbyContacts
    Searches Foursquare recent check-ins and the Facebook social graph with a given set of Geo coordinates
*/


var GetNearbyContacts = function(session) {
    /*
        Create a new instance of the GetNearbyContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/Social/GetNearbyContacts"
    GetNearbyContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNearbyContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNearbyContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNearbyContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNearbyContactsInputSet = function() {
    GetNearbyContactsInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((required, json) A JSON dictionary containing Facebook and Foursquare credentials.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the AfterTimestamp input for this Choreo. ((optional, date) Seconds after which to look for checkins, e.g. for looking for new checkins since the last fetch.)
        */
        this.set_AfterTimestamp = function(value) {
            this.setInput("AfterTimestamp", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate of the location to search for.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Used to page through results. Limits the number of records returned in the API responses.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) The longitude coordinate of the location to search for.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through Facebook results. Returns results starting from the specified number.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNearbyContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNearbyContactsResultSet = function(resultStream) {
    GetNearbyContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) A merged result of Foursquare and Facebook location based searches.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNearbyContacts, choreography.Choreography);
util.inherits(GetNearbyContactsInputSet, choreography.InputSet);
util.inherits(GetNearbyContactsResultSet, choreography.ResultSet);
exports.GetNearbyContacts = GetNearbyContacts;


/*
    UpdateAllStatuses
    Shares a post across multiple social networks such as Facebook, Tumblr, and Twitter.
*/


var UpdateAllStatuses = function(session) {
    /*
        Create a new instance of the UpdateAllStatuses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/Social/UpdateAllStatuses"
    UpdateAllStatuses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateAllStatusesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateAllStatusesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateAllStatuses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateAllStatusesInputSet = function() {
    UpdateAllStatusesInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((required, json) A list of credentials for the APIs you wish to access. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The message to be posted across social networks.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateAllStatuses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateAllStatusesResultSet = function(resultStream) {
    UpdateAllStatusesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) A list of results for each API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateAllStatuses, choreography.Choreography);
util.inherits(UpdateAllStatusesInputSet, choreography.InputSet);
util.inherits(UpdateAllStatusesResultSet, choreography.ResultSet);
exports.UpdateAllStatuses = UpdateAllStatuses;

