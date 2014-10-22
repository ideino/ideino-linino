
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SendEmail
    Sends an email using a specified email server.
*/


var SendEmail = function(session) {
    /*
        Create a new instance of the SendEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Email/SendEmail"
    SendEmail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendEmailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendEmailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendEmail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendEmailInputSet = function() {
    SendEmailInputSet.super_.call(this);
        /*
        Set the value of the AttachmentName input for this Choreo. ((optional, string) The name of the file to attach to the email.)
        */
        this.set_AttachmentName = function(value) {
            this.setInput("AttachmentName", value);
        }

        /*
        Set the value of the AttachmentURL input for this Choreo. ((optional, string) URL of a hosted file that you wish to add as an attachment.  Use this instead of a normal Attachment.)
        */
        this.set_AttachmentURL = function(value) {
            this.setInput("AttachmentURL", value);
        }

        /*
        Set the value of the Attachment input for this Choreo. ((optional, string) The Base64 encoded contents of the file to attach to the email.  Use this instead of AttachmentURL.)
        */
        this.set_Attachment = function(value) {
            this.setInput("Attachment", value);
        }

        /*
        Set the value of the BCC input for this Choreo. ((optional, string) An email address to BCC on the email you're sending. Can be a comma separated list of email addresses.)
        */
        this.set_BCC = function(value) {
            this.setInput("BCC", value);
        }

        /*
        Set the value of the CC input for this Choreo. ((optional, string) An email address to CC on the email you're sending. Can be a comma separated list of email addresses.)
        */
        this.set_CC = function(value) {
            this.setInput("CC", value);
        }

        /*
        Set the value of the FromAddress input for this Choreo. ((conditional, string) The name and email address that the message is being sent from.)
        */
        this.set_FromAddress = function(value) {
            this.setInput("FromAddress", value);
        }

        /*
        Set the value of the MessageBody input for this Choreo. ((required, string) The message body for the email.)
        */
        this.set_MessageBody = function(value) {
            this.setInput("MessageBody", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for your email account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((required, integer) Specify the port number (i.e. 25 or 465).)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) The name or IP address of the email server.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The subject line of the email.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the ToAddress input for this Choreo. ((required, string) The email address that you want to send an email to. Can be a comma separated list of email addresses.)
        */
        this.set_ToAddress = function(value) {
            this.setInput("ToAddress", value);
        }

        /*
        Set the value of the UseSSL input for this Choreo. ((optional, boolean) Set to 1 to connect over SSL. Set to 0 for no SSL. Defaults to 1.)
        */
        this.set_UseSSL = function(value) {
            this.setInput("UseSSL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your username for your email account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendEmail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendEmailResultSet = function(resultStream) {
    SendEmailResultSet.super_.call(this, resultStream);    
}

util.inherits(SendEmail, choreography.Choreography);
util.inherits(SendEmailInputSet, choreography.InputSet);
util.inherits(SendEmailResultSet, choreography.ResultSet);
exports.SendEmail = SendEmail;

