
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ExportIncrementalTickets
    Returns a lightweight representation of what changed in the ticket "since you last asked".
*/


var ExportIncrementalTickets = function(session) {
    /*
        Create a new instance of the ExportIncrementalTickets Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/IncrementalTickets/ExportIncrementalTickets"
    ExportIncrementalTickets.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ExportIncrementalTicketsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ExportIncrementalTicketsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ExportIncrementalTickets
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ExportIncrementalTicketsInputSet = function() {
    ExportIncrementalTicketsInputSet.super_.call(this);
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
        Set the value of the StartTime input for this Choreo. ((required, string) Return a list of tickets created after this timestamp (in seconds since Epoch UTC).  Tickets less than 5 minutes old are not included in the response.)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ExportIncrementalTickets Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ExportIncrementalTicketsResultSet = function(resultStream) {
    ExportIncrementalTicketsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ExportIncrementalTickets, choreography.Choreography);
util.inherits(ExportIncrementalTicketsInputSet, choreography.InputSet);
util.inherits(ExportIncrementalTicketsResultSet, choreography.ResultSet);
exports.ExportIncrementalTickets = ExportIncrementalTickets;

