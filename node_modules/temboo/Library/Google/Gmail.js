
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetUnreadImportantEmail
    Allows you to access a read-only Gmail feed that contains a list of unread emails that are marked important.
*/


var GetUnreadImportantEmail = function(session) {
    /*
        Create a new instance of the GetUnreadImportantEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/GetUnreadImportantEmail"
    GetUnreadImportantEmail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUnreadImportantEmailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUnreadImportantEmailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUnreadImportantEmail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUnreadImportantEmailInputSet = function() {
    GetUnreadImportantEmailInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUnreadImportantEmail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUnreadImportantEmailResultSet = function(resultStream) {
    GetUnreadImportantEmailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUnreadImportantEmail, choreography.Choreography);
util.inherits(GetUnreadImportantEmailInputSet, choreography.InputSet);
util.inherits(GetUnreadImportantEmailResultSet, choreography.ResultSet);
exports.GetUnreadImportantEmail = GetUnreadImportantEmail;


/*
    GetUnreadMail
    Allows you to access a read-only Gmail feed that contains a list of unread emails.
*/


var GetUnreadMail = function(session) {
    /*
        Create a new instance of the GetUnreadMail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/GetUnreadMail"
    GetUnreadMail.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUnreadMailResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUnreadMailInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUnreadMail
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUnreadMailInputSet = function() {
    GetUnreadMailInputSet.super_.call(this);
        /*
        Set the value of the Label input for this Choreo. ((optional, string) The name of a Gmail Label to retrieve messages from (e.g., important, starred, sent, junk-e-mail, all).)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUnreadMail Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUnreadMailResultSet = function(resultStream) {
    GetUnreadMailResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "FullCount" output from this Choreo execution. ((integer) The number of unread messages. This is parsed from the Google XML response. Note that when using the Label input to retrieve messages from a particular Gmail label, the full count element may be 0.)
        */
        this.get_FullCount = function() {
            return this.getResult("FullCount");
        }
}

util.inherits(GetUnreadMail, choreography.Choreography);
util.inherits(GetUnreadMailInputSet, choreography.InputSet);
util.inherits(GetUnreadMailResultSet, choreography.ResultSet);
exports.GetUnreadMail = GetUnreadMail;


/*
    GetUnreadMailFromSender
    Allows you to access a read-only Gmail feed that contains a list of unread emails for the specified sender.
*/


var GetUnreadMailFromSender = function(session) {
    /*
        Create a new instance of the GetUnreadMailFromSender Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/GetUnreadMailFromSender"
    GetUnreadMailFromSender.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUnreadMailFromSenderResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUnreadMailFromSenderInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUnreadMailFromSender
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUnreadMailFromSenderInputSet = function() {
    GetUnreadMailFromSenderInputSet.super_.call(this);
        /*
        Set the value of the Label input for this Choreo. ((optional, string) The name of a Gmail Label to retrieve messages from (e.g., important, starred, sent, junk-e-mail, all).)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the SenderEmail input for this Choreo. ((required, string) Email address of the sender you wish to filter by.)
        */
        this.set_SenderEmail = function(value) {
            this.setInput("SenderEmail", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUnreadMailFromSender Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUnreadMailFromSenderResultSet = function(resultStream) {
    GetUnreadMailFromSenderResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FullCount" output from this Choreo execution. ((integer) The number of unread messages. This is parsed from the Google XML response. Note that when using the Label input to retrieve messages from a particular Gmail label, the full count element may be 0.)
        */
        this.get_FullCount = function() {
            return this.getResult("FullCount");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUnreadMailFromSender, choreography.Choreography);
util.inherits(GetUnreadMailFromSenderInputSet, choreography.InputSet);
util.inherits(GetUnreadMailFromSenderResultSet, choreography.ResultSet);
exports.GetUnreadMailFromSender = GetUnreadMailFromSender;


/*
    GetUnreadMailWithLabel
    Allows you to access a read-only Gmail feed that contains a list of unread emails with the specified label.
*/


var GetUnreadMailWithLabel = function(session) {
    /*
        Create a new instance of the GetUnreadMailWithLabel Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/GetUnreadMailWithLabel"
    GetUnreadMailWithLabel.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUnreadMailWithLabelResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUnreadMailWithLabelInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUnreadMailWithLabel
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUnreadMailWithLabelInputSet = function() {
    GetUnreadMailWithLabelInputSet.super_.call(this);
        /*
        Set the value of the Label input for this Choreo. ((required, string) The name of a Gmail Label to retrieve messages from (e.g., important, starred, sent, junk-e-mail, all).)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseMode input for this Choreo. ((optional, string) Used to simplify the response. Valid values are: simple and verbose. When set to simple, only the message string is returned. Verbose mode returns the full object. Defaults to "simple".)
        */
        this.set_ResponseMode = function(value) {
            this.setInput("ResponseMode", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUnreadMailWithLabel Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUnreadMailWithLabelResultSet = function(resultStream) {
    GetUnreadMailWithLabelResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FullCount" output from this Choreo execution. ((integer) The number of unread messages. This is parsed from the Google XML response. Note the full count element may be 0 because this Choreography retrieves Gmail messages by a particular Label.)
        */
        this.get_FullCount = function() {
            return this.getResult("FullCount");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUnreadMailWithLabel, choreography.Choreography);
util.inherits(GetUnreadMailWithLabelInputSet, choreography.InputSet);
util.inherits(GetUnreadMailWithLabelResultSet, choreography.ResultSet);
exports.GetUnreadMailWithLabel = GetUnreadMailWithLabel;


/*
    InboxFeed
    Allows you to access a read-only Gmail feed that contains a list of unread emails.
*/


var InboxFeed = function(session) {
    /*
        Create a new instance of the InboxFeed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/InboxFeed"
    InboxFeed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InboxFeedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InboxFeedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InboxFeed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InboxFeedInputSet = function() {
    InboxFeedInputSet.super_.call(this);
        /*
        Set the value of the Label input for this Choreo. ((optional, string) The name of a Gmail Label to retrieve messages from (e.g., important, starred, sent, junk-e-mail, all).)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, string) Used when an XPath query is provided. Valid values are "select" or "recursive". Select mode will return the first match of the query. In recursive mode, the XPath query will be applied within a loop.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format for the response. Valid values are JSON and XML. This will be ignored when providng an XPath query because results are returned as a string or JSON depending on the Mode specified.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the XPath input for this Choreo. ((optional, string) An XPATH query to run.)
        */
        this.set_XPath = function(value) {
            this.setInput("XPath", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InboxFeed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InboxFeedResultSet = function(resultStream) {
    InboxFeedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FullCount" output from this Choreo execution. ((integer) The number of unread messages. This is parsed from the Google XML response. Note that when using the Label input to retrieve messages from a particular Gmail label, the full count element may be 0.)
        */
        this.get_FullCount = function() {
            return this.getResult("FullCount");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google. This will contain the data from the Gmail feed, or if the XPath input is provided, it will contain the result of the XPath query.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(InboxFeed, choreography.Choreography);
util.inherits(InboxFeedInputSet, choreography.InputSet);
util.inherits(InboxFeedResultSet, choreography.ResultSet);
exports.InboxFeed = InboxFeed;


/*
    SendEmail
    Sends an email using a specified Gmail account.
*/


var SendEmail = function(session) {
    /*
        Create a new instance of the SendEmail Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Gmail/SendEmail"
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
        Set the value of the Password input for this Choreo. ((required, password) Your Gmail password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
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
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
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
        /*
        Retrieve the value for the "Success" output from this Choreo execution. ((boolean) Indicates the result of the SMTP operation. The value will be "true" for a successful request.)
        */
        this.get_Success = function() {
            return this.getResult("Success");
        }
}

util.inherits(SendEmail, choreography.Choreography);
util.inherits(SendEmailInputSet, choreography.InputSet);
util.inherits(SendEmailResultSet, choreography.ResultSet);
exports.SendEmail = SendEmail;

