
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    UploadAttachment
    Uploads a file to be used as an attachment to a ticket.
*/


var UploadAttachment = function(session) {
    /*
        Create a new instance of the UploadAttachment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Attachments/UploadAttachment"
    UploadAttachment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadAttachmentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadAttachmentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadAttachment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadAttachmentInputSet = function() {
    UploadAttachmentInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ExistingToken input for this Choreo. ((optional, string) Allows you to pass in an existing token when uploading multiple attachments to associate with a ticket.)
        */
        this.set_ExistingToken = function(value) {
            this.setInput("ExistingToken", value);
        }

        /*
        Set the value of the FileContents input for this Choreo. ((required, string) The Base64 encoded file contents of the attachment you want to upload.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The file name of the attachment.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (The path to a vault file to upload. Can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the UploadAttachment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadAttachmentResultSet = function(resultStream) {
    UploadAttachmentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((string) The token returned from Zendesk for the upload. This can be passed to the ExistingToken input when associating  multiple attachments to the same upload token.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(UploadAttachment, choreography.Choreography);
util.inherits(UploadAttachmentInputSet, choreography.InputSet);
util.inherits(UploadAttachmentResultSet, choreography.ResultSet);
exports.UploadAttachment = UploadAttachment;

