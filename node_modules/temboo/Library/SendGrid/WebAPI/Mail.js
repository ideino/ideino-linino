
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SendMail
    Allows you to send emails.
*/


var SendMail = function(session) {
    /*
        Create a new instance of the SendMail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Mail/SendMail"
    SendMail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendMailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendMailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendMail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendMailInputSet = function() {
    SendMailInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((optional, string) The Base64-encoded contents of the file you want to attach.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the BCC input for this Choreo. ((optional, string) Enter a BCC recipient.  Multiple recipients can also be passed in as an array of email addresses.)
        */
        this.set_BCC = function(value) {
            this.setInput("BCC", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) The timestamp of the Block records. Enter 1 to return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((optional, string) The name of the file you are attaching to your email.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the FromName input for this Choreo. ((optional, string) The name to be appended to the from email.  For example, your company name, or your name.)
        */
        this.set_FromName = function(value) {
            this.setInput("FromName", value);
        }

        /*
        Set the value of the From input for this Choreo. ((required, string) The originating email address.  Must be from your domain.)
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the HTML input for this Choreo. ((conditional, string) The HTML to be used in the body of your email message. Required unless specifying a plain text body in the Text input.)
        */
        this.set_HTML = function(value) {
            this.setInput("HTML", value);
        }

        /*
        Set the value of the Headers input for this Choreo. ((optional, json) The collection of key/value pairs in JSON format. Each key represents a header name and the value the header value. For example: {"X-Accept-Language": "en", "X-Mailer": "MyApp"})
        */
        this.set_Headers = function(value) {
            this.setInput("Headers", value);
        }

        /*
        Set the value of the ReplyTo input for this Choreo. ((optional, string) The email address to append to the reply-to field of your email.)
        */
        this.set_ReplyTo = function(value) {
            this.setInput("ReplyTo", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The subject of the email message.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) The text of the email message. Required unless providing the message body using the HTML input.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the ToName input for this Choreo. ((optional, string) The name of the email recipient.)
        */
        this.set_ToName = function(value) {
            this.setInput("ToName", value);
        }

        /*
        Set the value of the To input for this Choreo. ((required, string) The valid recipient email address.  Multiple addresses can be entered as elements of an array.)
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the XSMTPAPI input for this Choreo. ((optional, json) Must be valid JSON format.  See here for additional info: http://docs.sendgrid.com/documentation/api/smtp-api/)
        */
        this.set_XSMTPAPI = function(value) {
            this.setInput("XSMTPAPI", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a vault file to use for the attachment. Can be used as an alternative to the FileContents input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the SendMail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendMailResultSet = function(resultStream) {
    SendMailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendMail, choreography.Choreography);
util.inherits(SendMailInputSet, choreography.InputSet);
util.inherits(SendMailResultSet, choreography.ResultSet);
exports.SendMail = SendMail;

