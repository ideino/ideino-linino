
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Insert
    Adds a new media item to an album. 
*/


var Insert = function(session) {
    /*
        Create a new instance of the Insert Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Plus/Domains/Media/Insert"
    Insert.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Insert
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertInputSet = function() {
    InsertInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Collection input for this Choreo. ((optional, string) Currently the acceptable values are "cloud".  (Upload the media to share on Google+).)
        */
        this.set_Collection = function(value) {
            this.setInput("Collection", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((conditional, string) The Content-Type of the file that is being uploaded (i.e. image/jpg). Required when specifying the FileContent input.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the DisplayName input for this Choreo. ((optional, string) The display name for the media. If this parameter is not provided, Google assigns a GUID to the media resource.)
        */
        this.set_DisplayName = function(value) {
            this.setInput("DisplayName", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileContent input for this Choreo. ((conditional, string) The Base64 encoded contents of the file to upload.)
        */
        this.set_FileContent = function(value) {
            this.setInput("FileContent", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The ID of the user to create the activity on behalf of.  The value "me" is set as the default to indicate the authenticated user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a vault file to upload. This can be used as an alternative to the FileContent input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the Insert Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertResultSet = function(resultStream) {
    InsertResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(Insert, choreography.Choreography);
util.inherits(InsertInputSet, choreography.InputSet);
util.inherits(InsertResultSet, choreography.ResultSet);
exports.Insert = Insert;

