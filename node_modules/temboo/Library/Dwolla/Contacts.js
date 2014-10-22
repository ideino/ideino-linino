
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    NearbyContacts
    Retrieves nearby Dwolla spots within the range of the provided latitude and longitude.
*/


var NearbyContacts = function(session) {
    /*
        Create a new instance of the NearbyContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Contacts/NearbyContacts"
    NearbyContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NearbyContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NearbyContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NearbyContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NearbyContactsInputSet = function() {
    NearbyContactsInputSet.super_.call(this);
        /*
        Set the value of the ClientID input for this Choreo. ((required, string) The Client ID provided by Dwolla (AKA the Consumer Key).)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((required, string) The Client Secret provided by Dwolla (AKA the Consumer Secret).)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Current latitude.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of spots to retrieve. Defaults to 10.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Current longitude.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Range input for this Choreo. ((optional, integer) Range to retrieve spots for in miles.)
        */
        this.set_Range = function(value) {
            this.setInput("Range", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the NearbyContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NearbyContactsResultSet = function(resultStream) {
    NearbyContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NearbyContacts, choreography.Choreography);
util.inherits(NearbyContactsInputSet, choreography.InputSet);
util.inherits(NearbyContactsResultSet, choreography.ResultSet);
exports.NearbyContacts = NearbyContacts;


/*
    UserContacts
    Retrieves the information for contacts for the user assoicated with the authorized access token.
*/


var UserContacts = function(session) {
    /*
        Create a new instance of the UserContacts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Contacts/UserContacts"
    UserContacts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserContactsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserContactsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UserContacts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserContactsInputSet = function() {
    UserContactsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of contacts to retrieve. Defaults to 10. Can be between 1 and 200 contacts.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) Search term used to search the contacts.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the Types input for this Choreo. ((optional, string) Type of accounts to retrieve, in the form of a comma-separated list (e.g. "Facebook,Dwolla"))
        */
        this.set_Types = function(value) {
            this.setInput("Types", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UserContacts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserContactsResultSet = function(resultStream) {
    UserContactsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UserContacts, choreography.Choreography);
util.inherits(UserContactsInputSet, choreography.InputSet);
util.inherits(UserContactsResultSet, choreography.ResultSet);
exports.UserContacts = UserContacts;

