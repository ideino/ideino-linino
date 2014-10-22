
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FindByEmail
    Obtain a user's NSID by providing their email address.
*/


var FindByEmail = function(session) {
    /*
        Create a new instance of the FindByEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/People/FindByEmail"
    FindByEmail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindByEmailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindByEmailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindByEmail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindByEmailInputSet = function() {
    FindByEmailInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the FindEmail input for this Choreo. ((required, string) Enter the email of the user being sought.)
        */
        this.set_FindEmail = function(value) {
            this.setInput("FindEmail", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindByEmail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindByEmailResultSet = function(resultStream) {
    FindByEmailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindByEmail, choreography.Choreography);
util.inherits(FindByEmailInputSet, choreography.InputSet);
util.inherits(FindByEmailResultSet, choreography.ResultSet);
exports.FindByEmail = FindByEmail;

