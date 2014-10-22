
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddFavoriteActivity
    Adds a specified activity to a user's favorite activities list.
*/


var AddFavoriteActivity = function(session) {
    /*
        Create a new instance of the AddFavoriteActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/AddFavoriteActivity"
    AddFavoriteActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddFavoriteActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddFavoriteActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddFavoriteActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddFavoriteActivityInputSet = function() {
    AddFavoriteActivityInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((required, integer) The id of the activity you want to make a favorite.)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddFavoriteActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddFavoriteActivityResultSet = function(resultStream) {
    AddFavoriteActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddFavoriteActivity, choreography.Choreography);
util.inherits(AddFavoriteActivityInputSet, choreography.InputSet);
util.inherits(AddFavoriteActivityResultSet, choreography.ResultSet);
exports.AddFavoriteActivity = AddFavoriteActivity;


/*
    BrowseActivities
    Gets a tree of all valid Fitbit public activities from the activities catalog as well as private custom activities the user created.
*/


var BrowseActivities = function(session) {
    /*
        Create a new instance of the BrowseActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/BrowseActivities"
    BrowseActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BrowseActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BrowseActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BrowseActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BrowseActivitiesInputSet = function() {
    BrowseActivitiesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BrowseActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BrowseActivitiesResultSet = function(resultStream) {
    BrowseActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BrowseActivities, choreography.Choreography);
util.inherits(BrowseActivitiesInputSet, choreography.InputSet);
util.inherits(BrowseActivitiesResultSet, choreography.ResultSet);
exports.BrowseActivities = BrowseActivities;


/*
    DeleteActivityLog
    Deletes a specified activity log entry.
*/


var DeleteActivityLog = function(session) {
    /*
        Create a new instance of the DeleteActivityLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/DeleteActivityLog"
    DeleteActivityLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteActivityLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteActivityLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteActivityLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteActivityLogInputSet = function() {
    DeleteActivityLogInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityLogID input for this Choreo. ((required, integer) The id of the activity log you want to delete. The Id is returned in the LogActivity response.)
        */
        this.set_ActivityLogID = function(value) {
            this.setInput("ActivityLogID", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteActivityLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteActivityLogResultSet = function(resultStream) {
    DeleteActivityLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteActivityLog, choreography.Choreography);
util.inherits(DeleteActivityLogInputSet, choreography.InputSet);
util.inherits(DeleteActivityLogResultSet, choreography.ResultSet);
exports.DeleteActivityLog = DeleteActivityLog;


/*
    DeleteFavoriteActivity
    Deletes a specified activity from a user's favorite activities list.
*/


var DeleteFavoriteActivity = function(session) {
    /*
        Create a new instance of the DeleteFavoriteActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/DeleteFavoriteActivity"
    DeleteFavoriteActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteFavoriteActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteFavoriteActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteFavoriteActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteFavoriteActivityInputSet = function() {
    DeleteFavoriteActivityInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((required, integer) The id of the activity you want to delete from your favorites list.)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteFavoriteActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteFavoriteActivityResultSet = function(resultStream) {
    DeleteFavoriteActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteFavoriteActivity, choreography.Choreography);
util.inherits(DeleteFavoriteActivityInputSet, choreography.InputSet);
util.inherits(DeleteFavoriteActivityResultSet, choreography.ResultSet);
exports.DeleteFavoriteActivity = DeleteFavoriteActivity;


/*
    GetActivities
    Gets a summary and list of a user's activities and activity log entries for a specified date.
*/


var GetActivities = function(session) {
    /*
        Create a new instance of the GetActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/GetActivities"
    GetActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetActivitiesInputSet = function() {
    GetActivitiesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, date) The date that corresponds with the log entry you want to retrieve (in the format yyyy-MM-dd).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetActivitiesResultSet = function(resultStream) {
    GetActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetActivities, choreography.Choreography);
util.inherits(GetActivitiesInputSet, choreography.InputSet);
util.inherits(GetActivitiesResultSet, choreography.ResultSet);
exports.GetActivities = GetActivities;


/*
    GetFavoriteActivities
    Gets a list of a user's favorite activities.
*/


var GetFavoriteActivities = function(session) {
    /*
        Create a new instance of the GetFavoriteActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/GetFavoriteActivities"
    GetFavoriteActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFavoriteActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFavoriteActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFavoriteActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFavoriteActivitiesInputSet = function() {
    GetFavoriteActivitiesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFavoriteActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFavoriteActivitiesResultSet = function(resultStream) {
    GetFavoriteActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFavoriteActivities, choreography.Choreography);
util.inherits(GetFavoriteActivitiesInputSet, choreography.InputSet);
util.inherits(GetFavoriteActivitiesResultSet, choreography.ResultSet);
exports.GetFavoriteActivities = GetFavoriteActivities;


/*
    GetFrequentActivities
    Gets a list of a user's frequent activities.
*/


var GetFrequentActivities = function(session) {
    /*
        Create a new instance of the GetFrequentActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/GetFrequentActivities"
    GetFrequentActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFrequentActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFrequentActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFrequentActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFrequentActivitiesInputSet = function() {
    GetFrequentActivitiesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFrequentActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFrequentActivitiesResultSet = function(resultStream) {
    GetFrequentActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFrequentActivities, choreography.Choreography);
util.inherits(GetFrequentActivitiesInputSet, choreography.InputSet);
util.inherits(GetFrequentActivitiesResultSet, choreography.ResultSet);
exports.GetFrequentActivities = GetFrequentActivities;


/*
    GetRecentActivities
    Gets a list of a user's recent activities.
*/


var GetRecentActivities = function(session) {
    /*
        Create a new instance of the GetRecentActivities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/GetRecentActivities"
    GetRecentActivities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentActivitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentActivitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentActivities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentActivitiesInputSet = function() {
    GetRecentActivitiesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentActivities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentActivitiesResultSet = function(resultStream) {
    GetRecentActivitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentActivities, choreography.Choreography);
util.inherits(GetRecentActivitiesInputSet, choreography.InputSet);
util.inherits(GetRecentActivitiesResultSet, choreography.ResultSet);
exports.GetRecentActivities = GetRecentActivities;


/*
    LogActivity
    Log a new activity for a particular date.
*/


var LogActivity = function(session) {
    /*
        Create a new instance of the LogActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Activities/LogActivity"
    LogActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LogActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LogActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LogActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LogActivityInputSet = function() {
    LogActivityInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ActivityID input for this Choreo. ((conditional, integer) This can be the id of the activity, directory activity, or intensity level activity.)
        */
        this.set_ActivityID = function(value) {
            this.setInput("ActivityID", value);
        }

        /*
        Set the value of the ActivityName input for this Choreo. ((conditional, string) Custom activity name; either activityId or activityName should be provided.)
        */
        this.set_ActivityName = function(value) {
            this.setInput("ActivityName", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, date) The date that corresponds with the new log entry (in the format yyyy-MM-dd).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the DistanceUnit input for this Choreo. ((conditional, string) Corresponds with the Distance parameter (i.e. Mile). See Choreo documentation for links to unit charts.)
        */
        this.set_DistanceUnit = function(value) {
            this.setInput("DistanceUnit", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((conditional, decimal) The activity distance. Used when activityId corresponds to 'Running'  or 'Walking' for example.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((required, integer) The duration of the activity in milliseconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the ManualCalories input for this Choreo. ((conditional, integer) The amount of calories defined manually; required when using the ActivityName parameter, otherwise optional.)
        */
        this.set_ManualCalories = function(value) {
            this.setInput("ManualCalories", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((required, string) The hour and minutes for the start of the activity formatted like HH:mm.)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LogActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LogActivityResultSet = function(resultStream) {
    LogActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LogActivity, choreography.Choreography);
util.inherits(LogActivityInputSet, choreography.InputSet);
util.inherits(LogActivityResultSet, choreography.ResultSet);
exports.LogActivity = LogActivity;

