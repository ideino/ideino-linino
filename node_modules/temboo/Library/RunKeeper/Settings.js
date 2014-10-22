
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveSettings
    Retrieves a user’s settings including a user's sharing and display preferences.
*/


var RetrieveSettings = function(session) {
    /*
        Create a new instance of the RetrieveSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Settings/RetrieveSettings"
    RetrieveSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveSettingsInputSet = function() {
    RetrieveSettingsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveSettingsResultSet = function(resultStream) {
    RetrieveSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveSettings, choreography.Choreography);
util.inherits(RetrieveSettingsInputSet, choreography.InputSet);
util.inherits(RetrieveSettingsResultSet, choreography.ResultSet);
exports.RetrieveSettings = RetrieveSettings;


/*
    UpdateSettings
    Updates a user’s settings.
*/


var UpdateSettings = function(session) {
    /*
        Create a new instance of the UpdateSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Settings/UpdateSettings"
    UpdateSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateSettingsInputSet = function() {
    UpdateSettingsInputSet.super_.call(this);
        /*
        Set the value of the Settings input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the settings to update. See documentation for formatting examples.)
        */
        this.set_Settings = function(value) {
            this.setInput("Settings", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateSettingsResultSet = function(resultStream) {
    UpdateSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateSettings, choreography.Choreography);
util.inherits(UpdateSettingsInputSet, choreography.InputSet);
util.inherits(UpdateSettingsResultSet, choreography.ResultSet);
exports.UpdateSettings = UpdateSettings;

