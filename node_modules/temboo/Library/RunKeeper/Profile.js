
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveProfile
    Returns a user's profile information including the user’s identity, geographical location, and fitness goals.
*/


var RetrieveProfile = function(session) {
    /*
        Create a new instance of the RetrieveProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Profile/RetrieveProfile"
    RetrieveProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveProfileInputSet = function() {
    RetrieveProfileInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveProfileResultSet = function(resultStream) {
    RetrieveProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveProfile, choreography.Choreography);
util.inherits(RetrieveProfileInputSet, choreography.InputSet);
util.inherits(RetrieveProfileResultSet, choreography.ResultSet);
exports.RetrieveProfile = RetrieveProfile;


/*
    UpdateProfile
    Update's a user's profile.
*/


var UpdateProfile = function(session) {
    /*
        Create a new instance of the UpdateProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RunKeeper/Profile/UpdateProfile"
    UpdateProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateProfileInputSet = function() {
    UpdateProfileInputSet.super_.call(this);
        /*
        Set the value of the Profile input for this Choreo. ((required, json) A JSON string containing the key/value pairs for the profile fields to update. See documentation for formatting examples.)
        */
        this.set_Profile = function(value) {
            this.setInput("Profile", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after the final step in the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateProfileResultSet = function(resultStream) {
    UpdateProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from RunKeeper.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateProfile, choreography.Choreography);
util.inherits(UpdateProfileInputSet, choreography.InputSet);
util.inherits(UpdateProfileResultSet, choreography.ResultSet);
exports.UpdateProfile = UpdateProfile;

