
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateEntry
    Adds a new sleep activity to a user's feed.
*/


var CreateEntry = function(session) {
    /*
        Create a new instance of the CreateEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Sleep/CreateEntry"
    CreateEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateEntryInputSet = function() {
    CreateEntryInputSet.super_.call(this);
        /*
        Set the value of the Entry input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the entry to create. See documentation for formatting examples.)
        */
        this.set_Entry = function(value) {
            this.setInput("Entry", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEntryResultSet = function(resultStream) {
    CreateEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) Contains the string 'true" when a new entry is created successfully.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "URI" output from this Choreo execution. ((string) The entry uri that was created.)
        */
        this.get_URI = function() {
            return this.getResult("URI");
        }
}

util.inherits(CreateEntry, choreography.Choreography);
util.inherits(CreateEntryInputSet, choreography.InputSet);
util.inherits(CreateEntryResultSet, choreography.ResultSet);
exports.CreateEntry = CreateEntry;


/*
    DeleteEntry
    Removes an individual sleep entry from a user’s feed.
*/


var DeleteEntry = function(session) {
    /*
        Create a new instance of the DeleteEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Sleep/DeleteEntry"
    DeleteEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteEntryInputSet = function() {
    DeleteEntryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, string) This can be the individual id of the sleep entry, or you can pass the full uri for the entry as returned from the RetrieveEntries Choreo (i.e. /sleep/-12985593-1351022400000).)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteEntryResultSet = function(resultStream) {
    DeleteEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) Contains the string "true" when an entry is deleted successfully.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteEntry, choreography.Choreography);
util.inherits(DeleteEntryInputSet, choreography.InputSet);
util.inherits(DeleteEntryResultSet, choreography.ResultSet);
exports.DeleteEntry = DeleteEntry;


/*
    RetrieveEntries
    Returns the feed for a user's sleep entries.
*/


var RetrieveEntries = function(session) {
    /*
        Create a new instance of the RetrieveEntries Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Sleep/RetrieveEntries"
    RetrieveEntries.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveEntriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveEntriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveEntries
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveEntriesInputSet = function() {
    RetrieveEntriesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number entries to return per page. Defaults to 25.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of entries to return. This parameter is used in combination with the PageSize input to page through results. Defaults to 0 (the first page).)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveEntries Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveEntriesResultSet = function(resultStream) {
    RetrieveEntriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Next" output from this Choreo execution. ((integer) The next page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Next = function() {
            return this.getResult("Next");
        }
        /*
        Retrieve the value for the "Previous" output from this Choreo execution. ((integer) The previous page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Previous = function() {
            return this.getResult("Previous");
        }
}

util.inherits(RetrieveEntries, choreography.Choreography);
util.inherits(RetrieveEntriesInputSet, choreography.InputSet);
util.inherits(RetrieveEntriesResultSet, choreography.ResultSet);
exports.RetrieveEntries = RetrieveEntries;


/*
    RetrieveEntry
    Retrieves a sleep entry from a user’s feed.
*/


var RetrieveEntry = function(session) {
    /*
        Create a new instance of the RetrieveEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Sleep/RetrieveEntry"
    RetrieveEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveEntryInputSet = function() {
    RetrieveEntryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, string) This can be the individual id of the sleep entry, or you can pass the full uri for the entry as returned from the RetrieveEntries response (i.e. /sleep/-12985593-1347998400000).)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveEntryResultSet = function(resultStream) {
    RetrieveEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveEntry, choreography.Choreography);
util.inherits(RetrieveEntryInputSet, choreography.InputSet);
util.inherits(RetrieveEntryResultSet, choreography.ResultSet);
exports.RetrieveEntry = RetrieveEntry;


/*
    UpdateEntry
    Updates a sleep entry in a user’s feed.
*/


var UpdateEntry = function(session) {
    /*
        Create a new instance of the UpdateEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Sleep/UpdateEntry"
    UpdateEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateEntryInputSet = function() {
    UpdateEntryInputSet.super_.call(this);
        /*
        Set the value of the Entry input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the fields to be updated in the sleep entry. See documentation for formatting examples.)
        */
        this.set_Entry = function(value) {
            this.setInput("Entry", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, string) This can be the individual id of the sleep entry, or you can pass the full uri for the entry as returned from the RetrieveEntries response (i.e. /sleep/-12985593-1347998400000).)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateEntryResultSet = function(resultStream) {
    UpdateEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateEntry, choreography.Choreography);
util.inherits(UpdateEntryInputSet, choreography.InputSet);
util.inherits(UpdateEntryResultSet, choreography.ResultSet);
exports.UpdateEntry = UpdateEntry;

