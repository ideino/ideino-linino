
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetProject
    Retrieves the specified Project resource.
*/


var GetProject = function(session) {
    /*
        Create a new instance of the GetProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Projects/GetProject"
    GetProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetProjectInputSet = function() {
    GetProjectInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetProjectResultSet = function(resultStream) {
    GetProjectResultSet.super_.call(this, resultStream);    
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

util.inherits(GetProject, choreography.Choreography);
util.inherits(GetProjectInputSet, choreography.InputSet);
util.inherits(GetProjectResultSet, choreography.ResultSet);
exports.GetProject = GetProject;


/*
    SetCommonInstanceMetadata
    Sets metadata common to all instances within the specified Project.
*/


var SetCommonInstanceMetadata = function(session) {
    /*
        Create a new instance of the SetCommonInstanceMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Projects/SetCommonInstanceMetadata"
    SetCommonInstanceMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetCommonInstanceMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetCommonInstanceMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetCommonInstanceMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetCommonInstanceMetadataInputSet = function() {
    SetCommonInstanceMetadataInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
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
        Set the value of the Fingerprint input for this Choreo. ((required, string) The fingerprint of this resource, which is a hash of the metadata's contents. This field is used for optimistic locking. Providing an up-to-date metadata fingerprint is required to modify metadata.)
        */
        this.set_Fingerprint = function(value) {
            this.setInput("Fingerprint", value);
        }

        /*
        Set the value of the Items input for this Choreo. ((conditional, json) An array of key/value pairs. The max size of all keys and values is 512 KB.)
        */
        this.set_Items = function(value) {
            this.setInput("Items", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetCommonInstanceMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetCommonInstanceMetadataResultSet = function(resultStream) {
    SetCommonInstanceMetadataResultSet.super_.call(this, resultStream);    
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

util.inherits(SetCommonInstanceMetadata, choreography.Choreography);
util.inherits(SetCommonInstanceMetadataInputSet, choreography.InputSet);
util.inherits(SetCommonInstanceMetadataResultSet, choreography.ResultSet);
exports.SetCommonInstanceMetadata = SetCommonInstanceMetadata;

