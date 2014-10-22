
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ChangeCommentFromPublicToPrivate
    Changes a comment from public to private.
*/


var ChangeCommentFromPublicToPrivate = function(session) {
    /*
        Create a new instance of the ChangeCommentFromPublicToPrivate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/TicketAudits/ChangeCommentFromPublicToPrivate"
    ChangeCommentFromPublicToPrivate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChangeCommentFromPublicToPrivateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChangeCommentFromPublicToPrivateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ChangeCommentFromPublicToPrivate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChangeCommentFromPublicToPrivateInputSet = function() {
    ChangeCommentFromPublicToPrivateInputSet.super_.call(this);
        /*
        Set the value of the AuditID input for this Choreo. ((required, string) The ID of the audit to make private.)
        */
        this.set_AuditID = function(value) {
            this.setInput("AuditID", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the TicketID input for this Choreo. ((required, string) The ID of the ticket associated with the audit.)
        */
        this.set_TicketID = function(value) {
            this.setInput("TicketID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ChangeCommentFromPublicToPrivate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChangeCommentFromPublicToPrivateResultSet = function(resultStream) {
    ChangeCommentFromPublicToPrivateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Zendesk.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ChangeCommentFromPublicToPrivate, choreography.Choreography);
util.inherits(ChangeCommentFromPublicToPrivateInputSet, choreography.InputSet);
util.inherits(ChangeCommentFromPublicToPrivateResultSet, choreography.ResultSet);
exports.ChangeCommentFromPublicToPrivate = ChangeCommentFromPublicToPrivate;


/*
    ListAudits
    Lists all the audits made for the specifed ticket.
*/


var ListAudits = function(session) {
    /*
        Create a new instance of the ListAudits Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/TicketAudits/ListAudits"
    ListAudits.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAuditsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAuditsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAudits
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAuditsInputSet = function() {
    ListAuditsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the ticket you wish to show audits for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAudits Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAuditsResultSet = function(resultStream) {
    ListAuditsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAudits, choreography.Choreography);
util.inherits(ListAuditsInputSet, choreography.InputSet);
util.inherits(ListAuditsResultSet, choreography.ResultSet);
exports.ListAudits = ListAudits;


/*
    MarkAuditAsTrusted
    Marks the specified audit as trusted. 
*/


var MarkAuditAsTrusted = function(session) {
    /*
        Create a new instance of the MarkAuditAsTrusted Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/TicketAudits/MarkAuditAsTrusted"
    MarkAuditAsTrusted.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MarkAuditAsTrustedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MarkAuditAsTrustedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MarkAuditAsTrusted
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MarkAuditAsTrustedInputSet = function() {
    MarkAuditAsTrustedInputSet.super_.call(this);
        /*
        Set the value of the AuditID input for this Choreo. ((required, string) The ID of the audit that you want to mark as trusted.)
        */
        this.set_AuditID = function(value) {
            this.setInput("AuditID", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the TicketID input for this Choreo. ((required, string) The ID of the ticket associated with the audit.)
        */
        this.set_TicketID = function(value) {
            this.setInput("TicketID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MarkAuditAsTrusted Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MarkAuditAsTrustedResultSet = function(resultStream) {
    MarkAuditAsTrustedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Zendesk.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MarkAuditAsTrusted, choreography.Choreography);
util.inherits(MarkAuditAsTrustedInputSet, choreography.InputSet);
util.inherits(MarkAuditAsTrustedResultSet, choreography.ResultSet);
exports.MarkAuditAsTrusted = MarkAuditAsTrusted;


/*
    ShowAudit
    Returns detailed information on the specified audit.
*/


var ShowAudit = function(session) {
    /*
        Create a new instance of the ShowAudit Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/TicketAudits/ShowAudit"
    ShowAudit.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowAuditResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowAuditInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowAudit
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowAuditInputSet = function() {
    ShowAuditInputSet.super_.call(this);
        /*
        Set the value of the AuditID input for this Choreo. ((required, string) The ID of the audit to show.)
        */
        this.set_AuditID = function(value) {
            this.setInput("AuditID", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
        Set the value of the TicketID input for this Choreo. ((required, string) The ID of the ticket associated with the audit.)
        */
        this.set_TicketID = function(value) {
            this.setInput("TicketID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowAudit Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowAuditResultSet = function(resultStream) {
    ShowAuditResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowAudit, choreography.Choreography);
util.inherits(ShowAuditInputSet, choreography.InputSet);
util.inherits(ShowAuditResultSet, choreography.ResultSet);
exports.ShowAudit = ShowAudit;

