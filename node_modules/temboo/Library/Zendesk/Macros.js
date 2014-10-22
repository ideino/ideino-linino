
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ApplyMacroToAllTickets
    Applies a given macro to all applicable tickets.
*/


var ApplyMacroToAllTickets = function(session) {
    /*
        Create a new instance of the ApplyMacroToAllTickets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Macros/ApplyMacroToAllTickets"
    ApplyMacroToAllTickets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ApplyMacroToAllTicketsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ApplyMacroToAllTicketsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ApplyMacroToAllTickets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ApplyMacroToAllTicketsInputSet = function() {
    ApplyMacroToAllTicketsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the MacroID input for this Choreo. ((required, integer) The ID of the macro to apply.)
        */
        this.set_MacroID = function(value) {
            this.setInput("MacroID", value);
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
A ResultSet with methods tailored to the values returned by the ApplyMacroToAllTickets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ApplyMacroToAllTicketsResultSet = function(resultStream) {
    ApplyMacroToAllTicketsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ApplyMacroToAllTickets, choreography.Choreography);
util.inherits(ApplyMacroToAllTicketsInputSet, choreography.InputSet);
util.inherits(ApplyMacroToAllTicketsResultSet, choreography.ResultSet);
exports.ApplyMacroToAllTickets = ApplyMacroToAllTickets;


/*
    ApplyMacroToTicket
    Applies a macro to a given ticket.
*/


var ApplyMacroToTicket = function(session) {
    /*
        Create a new instance of the ApplyMacroToTicket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Macros/ApplyMacroToTicket"
    ApplyMacroToTicket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ApplyMacroToTicketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ApplyMacroToTicketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ApplyMacroToTicket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ApplyMacroToTicketInputSet = function() {
    ApplyMacroToTicketInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the MacroID input for this Choreo. ((required, integer) The ID of the macro to apply.)
        */
        this.set_MacroID = function(value) {
            this.setInput("MacroID", value);
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
        Set the value of the TicketID input for this Choreo. ((required, string) The ID of the ticket.)
        */
        this.set_TicketID = function(value) {
            this.setInput("TicketID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ApplyMacroToTicket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ApplyMacroToTicketResultSet = function(resultStream) {
    ApplyMacroToTicketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ApplyMacroToTicket, choreography.Choreography);
util.inherits(ApplyMacroToTicketInputSet, choreography.InputSet);
util.inherits(ApplyMacroToTicketResultSet, choreography.ResultSet);
exports.ApplyMacroToTicket = ApplyMacroToTicket;


/*
    ListMacros
    Retrieves a list of all active macros available to the current user.
*/


var ListMacros = function(session) {
    /*
        Create a new instance of the ListMacros Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Macros/ListMacros"
    ListMacros.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMacrosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMacrosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMacros
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMacrosInputSet = function() {
    ListMacrosInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the ListMacros Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMacrosResultSet = function(resultStream) {
    ListMacrosResultSet.super_.call(this, resultStream);    
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

util.inherits(ListMacros, choreography.Choreography);
util.inherits(ListMacrosInputSet, choreography.InputSet);
util.inherits(ListMacrosResultSet, choreography.ResultSet);
exports.ListMacros = ListMacros;

