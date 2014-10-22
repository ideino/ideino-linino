
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AccountInfo
    Retrieves information about the user's account.
*/


var AccountInfo = function(session) {
    /*
        Create a new instance of the AccountInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dropbox/Account/AccountInfo"
    AccountInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AccountInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AccountInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AccountInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AccountInfoInputSet = function() {
    AccountInfoInputSet.super_.call(this);
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
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Dropbox (AKA the OAuth Consumer Key).)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the AppSecret input for this Choreo. ((required, string) The App Secret provided by Dropbox (AKA the OAuth Consumer Secret).)
        */
        this.set_AppSecret = function(value) {
            this.setInput("AppSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AccountInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AccountInfoResultSet = function(resultStream) {
    AccountInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Dropbox. Corresponds to the ResponseFormat input. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AccountInfo, choreography.Choreography);
util.inherits(AccountInfoInputSet, choreography.InputSet);
util.inherits(AccountInfoResultSet, choreography.ResultSet);
exports.AccountInfo = AccountInfo;

