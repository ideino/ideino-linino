
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompareArtists
    Retrieves a Tasteometer score from two artist inputs.
*/


var CompareArtists = function(session) {
    /*
        Create a new instance of the CompareArtists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Tasteometer/CompareArtists"
    CompareArtists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompareArtistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompareArtistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompareArtists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompareArtistsInputSet = function() {
    CompareArtistsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Artist1 input for this Choreo. ((string) The first artist to compare.)
        */
        this.set_Artist1 = function(value) {
            this.setInput("Artist1", value);
        }

        /*
        Set the value of the Artist2 input for this Choreo. ((string) The second artist to compare.)
        */
        this.set_Artist2 = function(value) {
            this.setInput("Artist2", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) How many shared artists to display. Defaults to 5.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompareArtists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompareArtistsResultSet = function(resultStream) {
    CompareArtistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompareArtists, choreography.Choreography);
util.inherits(CompareArtistsInputSet, choreography.InputSet);
util.inherits(CompareArtistsResultSet, choreography.ResultSet);
exports.CompareArtists = CompareArtists;


/*
    CompareUsers
    Retrieves a Tasteometer score from two user inputs, along with a list of shared artists.
*/


var CompareUsers = function(session) {
    /*
        Create a new instance of the CompareUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LastFm/Tasteometer/CompareUsers"
    CompareUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompareUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompareUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompareUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompareUsersInputSet = function() {
    CompareUsersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Your Last.fm API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) How many shared artists to display. Defaults to 5.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the User1 input for this Choreo. ((string) The first user to compare.)
        */
        this.set_User1 = function(value) {
            this.setInput("User1", value);
        }

        /*
        Set the value of the User2 input for this Choreo. ((string) The second user to compare.)
        */
        this.set_User2 = function(value) {
            this.setInput("User2", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompareUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompareUsersResultSet = function(resultStream) {
    CompareUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Last.fm.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompareUsers, choreography.Choreography);
util.inherits(CompareUsersInputSet, choreography.InputSet);
util.inherits(CompareUsersResultSet, choreography.ResultSet);
exports.CompareUsers = CompareUsers;

