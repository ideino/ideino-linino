
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListAll
    Retrieves a list of all roles.
*/


var ListAll = function(session) {
    /*
        Create a new instance of the ListAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Roles/ListAll"
    ListAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllInputSet = function() {
    ListAllInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllResultSet = function(resultStream) {
    ListAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAll, choreography.Choreography);
util.inherits(ListAllInputSet, choreography.InputSet);
util.inherits(ListAllResultSet, choreography.ResultSet);
exports.ListAll = ListAll;


/*
    ShowRole
    Retrieves information for a single role.
*/


var ShowRole = function(session) {
    /*
        Create a new instance of the ShowRole Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/OneLogin/Roles/ShowRole"
    ShowRole.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowRoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowRoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowRole
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowRoleInputSet = function() {
    ShowRoleInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by OneLogin.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The id the role you want to return.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowRole Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowRoleResultSet = function(resultStream) {
    ShowRoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from OneLogin.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowRole, choreography.Choreography);
util.inherits(ShowRoleInputSet, choreography.InputSet);
util.inherits(ShowRoleResultSet, choreography.ResultSet);
exports.ShowRole = ShowRole;

