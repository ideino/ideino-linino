
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateTicket
    Creates a new ticket.
*/


var CreateTicket = function(session) {
    /*
        Create a new instance of the CreateTicket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/CreateTicket"
    CreateTicket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTicketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTicketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTicket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTicketInputSet = function() {
    CreateTicketInputSet.super_.call(this);
        /*
        Set the value of the Comment input for this Choreo. ((conditional, string) The comment for the ticket that is being created.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
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
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (i.e. temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((conditional, string) The subject for the ticket that is being created.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the TicketData input for this Choreo. ((optional, json) A JSON-formatted string containing the ticket properties you wish to set. This can be used as an alternative to setting individual inputs representing ticket properties.)
        */
        this.set_TicketData = function(value) {
            this.setInput("TicketData", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((optional, string) The token associated with an upload to attach to this ticket. Note that tokens can be retrieved by running the UploadFile Choreo.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTicket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTicketResultSet = function(resultStream) {
    CreateTicketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateTicket, choreography.Choreography);
util.inherits(CreateTicketInputSet, choreography.InputSet);
util.inherits(CreateTicketResultSet, choreography.ResultSet);
exports.CreateTicket = CreateTicket;


/*
    CreateTicketNewRequester
    Creates a new ticket as well as a new requester account.
*/


var CreateTicketNewRequester = function(session) {
    /*
        Create a new instance of the CreateTicketNewRequester Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/CreateTicketNewRequester"
    CreateTicketNewRequester.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTicketNewRequesterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTicketNewRequesterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTicketNewRequester
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTicketNewRequesterInputSet = function() {
    CreateTicketNewRequesterInputSet.super_.call(this);
        /*
        Set the value of the Comment input for this Choreo. ((required, string) The comment for the ticket that is being created.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the LocaleID input for this Choreo. ((required, integer) LocaleID for the new requester. Indicate 1 for English, 8 for Deutsch, etc.)
        */
        this.set_LocaleID = function(value) {
            this.setInput("LocaleID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) Name of new requester.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequesterEmail input for this Choreo. ((required, string) Email of new requester.)
        */
        this.set_RequesterEmail = function(value) {
            this.setInput("RequesterEmail", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The subject for the ticket that is being created.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((optional, string) The token associated with an upload to attach to this ticket. Note that tokens can be retrieved by running the UploadFile Choreo.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTicketNewRequester Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTicketNewRequesterResultSet = function(resultStream) {
    CreateTicketNewRequesterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateTicketNewRequester, choreography.Choreography);
util.inherits(CreateTicketNewRequesterInputSet, choreography.InputSet);
util.inherits(CreateTicketNewRequesterResultSet, choreography.ResultSet);
exports.CreateTicketNewRequester = CreateTicketNewRequester;


/*
    DeleteTicket
    Deletes an existing ticket.
*/


var DeleteTicket = function(session) {
    /*
        Create a new instance of the DeleteTicket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/DeleteTicket"
    DeleteTicket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTicketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTicketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTicket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTicketInputSet = function() {
    DeleteTicketInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID number of a ticket.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTicket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTicketResultSet = function(resultStream) {
    DeleteTicketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Zendesk.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteTicket, choreography.Choreography);
util.inherits(DeleteTicketInputSet, choreography.InputSet);
util.inherits(DeleteTicketResultSet, choreography.ResultSet);
exports.DeleteTicket = DeleteTicket;


/*
    GetTicket
    Returns information about a ticket using its ID.
*/


var GetTicket = function(session) {
    /*
        Create a new instance of the GetTicket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/GetTicket"
    GetTicket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTicketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTicketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTicket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTicketInputSet = function() {
    GetTicketInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID number of a ticket.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetTicket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTicketResultSet = function(resultStream) {
    GetTicketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTicket, choreography.Choreography);
util.inherits(GetTicketInputSet, choreography.InputSet);
util.inherits(GetTicketResultSet, choreography.ResultSet);
exports.GetTicket = GetTicket;


/*
    ListAllTickets
    Retrieves a list of all existing tickets.
*/


var ListAllTickets = function(session) {
    /*
        Create a new instance of the ListAllTickets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListAllTickets"
    ListAllTickets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllTicketsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllTicketsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllTickets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllTicketsInputSet = function() {
    ListAllTicketsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
A ResultSet with methods tailored to the values returned by the ListAllTickets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllTicketsResultSet = function(resultStream) {
    ListAllTicketsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(ListAllTickets, choreography.Choreography);
util.inherits(ListAllTicketsInputSet, choreography.InputSet);
util.inherits(ListAllTicketsResultSet, choreography.ResultSet);
exports.ListAllTickets = ListAllTickets;


/*
    ListRecent
    Retrieves a list of all recent tickets.
*/


var ListRecent = function(session) {
    /*
        Create a new instance of the ListRecent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListRecent"
    ListRecent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListRecentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListRecentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListRecent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListRecentInputSet = function() {
    ListRecentInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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
A ResultSet with methods tailored to the values returned by the ListRecent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListRecentResultSet = function(resultStream) {
    ListRecentResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListRecent, choreography.Choreography);
util.inherits(ListRecentInputSet, choreography.InputSet);
util.inherits(ListRecentResultSet, choreography.ResultSet);
exports.ListRecent = ListRecent;


/*
    ListTicketCollaborators
    Retrieves all the collaborators associated with a given ticket.
*/


var ListTicketCollaborators = function(session) {
    /*
        Create a new instance of the ListTicketCollaborators Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListTicketCollaborators"
    ListTicketCollaborators.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTicketCollaboratorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTicketCollaboratorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTicketCollaborators
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTicketCollaboratorsInputSet = function() {
    ListTicketCollaboratorsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID number of a ticket.)
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
A ResultSet with methods tailored to the values returned by the ListTicketCollaborators Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTicketCollaboratorsResultSet = function(resultStream) {
    ListTicketCollaboratorsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListTicketCollaborators, choreography.Choreography);
util.inherits(ListTicketCollaboratorsInputSet, choreography.InputSet);
util.inherits(ListTicketCollaboratorsResultSet, choreography.ResultSet);
exports.ListTicketCollaborators = ListTicketCollaborators;


/*
    ListTicketIncidents
    Retrieves all the incidents associated with a given ticket.
*/


var ListTicketIncidents = function(session) {
    /*
        Create a new instance of the ListTicketIncidents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListTicketIncidents"
    ListTicketIncidents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTicketIncidentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTicketIncidentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTicketIncidents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTicketIncidentsInputSet = function() {
    ListTicketIncidentsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID number of a ticket.)
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
        Set the value of the PerPage input for this Choreo. ((conditional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
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
A ResultSet with methods tailored to the values returned by the ListTicketIncidents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTicketIncidentsResultSet = function(resultStream) {
    ListTicketIncidentsResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListTicketIncidents, choreography.Choreography);
util.inherits(ListTicketIncidentsInputSet, choreography.InputSet);
util.inherits(ListTicketIncidentsResultSet, choreography.ResultSet);
exports.ListTicketIncidents = ListTicketIncidents;


/*
    ListTicketsByOrganization
    Retrieves a list of all tickets involving a specified organization.
*/


var ListTicketsByOrganization = function(session) {
    /*
        Create a new instance of the ListTicketsByOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListTicketsByOrganization"
    ListTicketsByOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTicketsByOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTicketsByOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTicketsByOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTicketsByOrganizationInputSet = function() {
    ListTicketsByOrganizationInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OrganizationID input for this Choreo. ((required, integer) The ID number of the organization.)
        */
        this.set_OrganizationID = function(value) {
            this.setInput("OrganizationID", value);
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
A ResultSet with methods tailored to the values returned by the ListTicketsByOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTicketsByOrganizationResultSet = function(resultStream) {
    ListTicketsByOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
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
}

util.inherits(ListTicketsByOrganization, choreography.Choreography);
util.inherits(ListTicketsByOrganizationInputSet, choreography.InputSet);
util.inherits(ListTicketsByOrganizationResultSet, choreography.ResultSet);
exports.ListTicketsByOrganization = ListTicketsByOrganization;


/*
    ListTicketsByUser
    Retrieves a list of all tickets involving a specified user.
*/


var ListTicketsByUser = function(session) {
    /*
        Create a new instance of the ListTicketsByUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/ListTicketsByUser"
    ListTicketsByUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTicketsByUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTicketsByUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTicketsByUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTicketsByUserInputSet = function() {
    ListTicketsByUserInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
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

        /*
        Set the value of the UserID input for this Choreo. ((required, integer) The ID number of the user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the UserType input for this Choreo. ((optional, string) Specify "requested" to find tickets that the given user requested and "ccd" to find tickets on which a given user was CC'd. Defaults to searching for tickets that the user requested.)
        */
        this.set_UserType = function(value) {
            this.setInput("UserType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListTicketsByUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTicketsByUserResultSet = function(resultStream) {
    ListTicketsByUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListTicketsByUser, choreography.Choreography);
util.inherits(ListTicketsByUserInputSet, choreography.InputSet);
util.inherits(ListTicketsByUserResultSet, choreography.ResultSet);
exports.ListTicketsByUser = ListTicketsByUser;


/*
    UpdateTicket
    Updates an existing ticket.
*/


var UpdateTicket = function(session) {
    /*
        Create a new instance of the UpdateTicket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Tickets/UpdateTicket"
    UpdateTicket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateTicketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateTicketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateTicket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateTicketInputSet = function() {
    UpdateTicketInputSet.super_.call(this);
        /*
        Set the value of the Comment input for this Choreo. ((conditional, string) The text for a ticket comment.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Metadata input for this Choreo. ((optional, json) Ticket metadata formatted in JSON. See below for more information on the input format.)
        */
        this.set_Metadata = function(value) {
            this.setInput("Metadata", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Public input for this Choreo. ((optional, boolean) A flag indicating if this update is public or not. Defaults to "true")
        */
        this.set_Public = function(value) {
            this.setInput("Public", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((conditional, string) The status of the ticket (i.e. solved, pending, open).)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

        /*
        Set the value of the TicketData input for this Choreo. ((optional, json) A JSON-formatted string containing the ticket properties you wish to set. This can be used as an alternative to setting individual inputs representing ticket properties.)
        */
        this.set_TicketData = function(value) {
            this.setInput("TicketData", value);
        }

        /*
        Set the value of the TicketID input for this Choreo. ((required, integer) The id of the ticket being updated.)
        */
        this.set_TicketID = function(value) {
            this.setInput("TicketID", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((optional, string) The token associated with an upload to attach to this ticket. Note that tokens can be retrieved by running the UploadFile Choreo.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateTicket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateTicketResultSet = function(resultStream) {
    UpdateTicketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateTicket, choreography.Choreography);
util.inherits(UpdateTicketInputSet, choreography.InputSet);
util.inherits(UpdateTicketResultSet, choreography.ResultSet);
exports.UpdateTicket = UpdateTicket;

