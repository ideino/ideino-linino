
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteActivity
    Removes an individual background activity from a user’s feed.
*/


var DeleteActivity = function(session) {
    /*
        Create a new instance of the DeleteActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/BackgroundActivities/DeleteActivity"
    DeleteActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteActivityInputSet = function() {
    DeleteActivityInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((required, string) This can be the individual id of the activity, or you can pass the full uri for the activity as returned from the RetrieveActivities Choreo (i.e. /backgroundActivities/-12985593-1347998400000).)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteActivityResultSet = function(resultStream) {
    DeleteActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) Contains the string "true" when activities are successfully deleted.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteActivity, choreography.Choreography);
util.inherits(DeleteActivityInputSet, choreography.InputSet);
util.inherits(DeleteActivityResultSet, choreography.ResultSet);
exports.DeleteActivity = DeleteActivity;


/*
    RecordActivity
    Records a newly-completed background activity, or begins recording an activity still in progress.
*/


var RecordActivity = function(session) {
    /*
        Create a new instance of the RecordActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/BackgroundActivities/RecordActivity"
    RecordActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RecordActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RecordActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RecordActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RecordActivityInputSet = function() {
    RecordActivityInputSet.super_.call(this);
        /*
        Set the value of the Activity input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the activity to create. See documentation for formatting examples.)
        */
        this.set_Activity = function(value) {
            this.setInput("Activity", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RecordActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RecordActivityResultSet = function(resultStream) {
    RecordActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) Contains the string 'true" when a new activity is created successfully.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "URI" output from this Choreo execution. ((string) The activity uri that was created.)
        */
        this.get_URI = function() {
            return this.getResult("URI");
        }
}

util.inherits(RecordActivity, choreography.Choreography);
util.inherits(RecordActivityInputSet, choreography.InputSet);
util.inherits(RecordActivityResultSet, choreography.ResultSet);
exports.RecordActivity = RecordActivity;


/*
    RetrieveActivities
    Returns the feed for a user's background activities.
*/


var RetrieveActivities = function(session) {
    /*
        Create a new instance of the RetrieveActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/BackgroundActivities/RetrieveActivities"
    RetrieveActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveActivitiesInputSet = function() {
    RetrieveActivitiesInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the RetrieveActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveActivitiesResultSet = function(resultStream) {
    RetrieveActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Next" output from this Choreo execution. ((integer) The next page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Next = function() {
            return this.getResult("Next");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Previous" output from this Choreo execution. ((integer) The previous page of entries that is available. This value can be passed into the Page input while paging through entries.)
        */
        this.get_Previous = function() {
            return this.getResult("Previous");
        }
}

util.inherits(RetrieveActivities, choreography.Choreography);
util.inherits(RetrieveActivitiesInputSet, choreography.InputSet);
util.inherits(RetrieveActivitiesResultSet, choreography.ResultSet);
exports.RetrieveActivities = RetrieveActivities;


/*
    RetrieveActivity
    Retrieves a page from a user’s background activity feed.
*/


var RetrieveActivity = function(session) {
    /*
        Create a new instance of the RetrieveActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/BackgroundActivities/RetrieveActivity"
    RetrieveActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveActivityInputSet = function() {
    RetrieveActivityInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((required, string) This can be the individual id of the activity, or you can pass the full uri for the activity as returned from the RetrieveActivities Choreo (i.e. /backgroundActivities/-12985593-1347998400000).)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveActivityResultSet = function(resultStream) {
    RetrieveActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveActivity, choreography.Choreography);
util.inherits(RetrieveActivityInputSet, choreography.InputSet);
util.inherits(RetrieveActivityResultSet, choreography.ResultSet);
exports.RetrieveActivity = RetrieveActivity;


/*
    UpdateActivity
    Updates a background activity in a user's feed.
*/


var UpdateActivity = function(session) {
    /*
        Create a new instance of the UpdateActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/BackgroundActivities/UpdateActivity"
    UpdateActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateActivityInputSet = function() {
    UpdateActivityInputSet.super_.call(this);
        /*
        Set the value of the Activity input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the activity to update. See documentation for formatting examples.)
        */
        this.set_Activity = function(value) {
            this.setInput("Activity", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((required, string) This can be the individual id of the activity, or you can pass the full uri for the activity as returned from the RetrieveActivities Choreo (i.e. /backgroundActivities/-12985593-1351022400000).)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateActivityResultSet = function(resultStream) {
    UpdateActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateActivity, choreography.Choreography);
util.inherits(UpdateActivityInputSet, choreography.InputSet);
util.inherits(UpdateActivityResultSet, choreography.ResultSet);
exports.UpdateActivity = UpdateActivity;

