
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListActivity
    Returns a list of activities for the authenticating user.
*/


var ListActivity = function(session) {
    /*
        Create a new instance of the ListActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/ActivityStream/ListActivity"
    ListActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListActivityInputSet = function() {
    ListActivityInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the ListActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListActivityResultSet = function(resultStream) {
    ListActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListActivity, choreography.Choreography);
util.inherits(ListActivityInputSet, choreography.InputSet);
util.inherits(ListActivityResultSet, choreography.ResultSet);
exports.ListActivity = ListActivity;


/*
    ShowActivity
    Returns detailed information about a particular activity.
*/


var ShowActivity = function(session) {
    /*
        Create a new instance of the ShowActivity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/ActivityStream/ShowActivity"
    ShowActivity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowActivityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowActivityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowActivity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowActivityInputSet = function() {
    ShowActivityInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the activity to retrieve.)
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
A ResultSet with methods tailored to the values returned by the ShowActivity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowActivityResultSet = function(resultStream) {
    ShowActivityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowActivity, choreography.Choreography);
util.inherits(ShowActivityInputSet, choreography.InputSet);
util.inherits(ShowActivityResultSet, choreography.ResultSet);
exports.ShowActivity = ShowActivity;

