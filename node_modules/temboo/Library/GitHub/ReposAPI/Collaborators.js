
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddCollaborator
    Adds a collaborator to a specified repository.
*/


var AddCollaborator = function(session) {
    /*
        Create a new instance of the AddCollaborator Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Collaborators/AddCollaborator"
    AddCollaborator.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCollaboratorResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCollaboratorInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddCollaborator
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCollaboratorInputSet = function() {
    AddCollaboratorInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Collaborator input for this Choreo. ((required, string) The username of the collaborator to check.)
        */
        this.set_Collaborator = function(value) {
            this.setInput("Collaborator", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to add a collaborator to.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddCollaborator Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCollaboratorResultSet = function(resultStream) {
    AddCollaboratorResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(AddCollaborator, choreography.Choreography);
util.inherits(AddCollaboratorInputSet, choreography.InputSet);
util.inherits(AddCollaboratorResultSet, choreography.ResultSet);
exports.AddCollaborator = AddCollaborator;


/*
    GetCollaboratorStatus
    Checks to see if the provided user is a collaborator.
*/


var GetCollaboratorStatus = function(session) {
    /*
        Create a new instance of the GetCollaboratorStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Collaborators/GetCollaboratorStatus"
    GetCollaboratorStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCollaboratorStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCollaboratorStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCollaboratorStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCollaboratorStatusInputSet = function() {
    GetCollaboratorStatusInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Collaborator input for this Choreo. ((required, string) The username of the collaborator to check.)
        */
        this.set_Collaborator = function(value) {
            this.setInput("Collaborator", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that has the collaborators to retrieve.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCollaboratorStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCollaboratorStatusResultSet = function(resultStream) {
    GetCollaboratorStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCollaboratorStatus, choreography.Choreography);
util.inherits(GetCollaboratorStatusInputSet, choreography.InputSet);
util.inherits(GetCollaboratorStatusResultSet, choreography.ResultSet);
exports.GetCollaboratorStatus = GetCollaboratorStatus;


/*
    ListCollaborators
    Retrieves a list of collaborators for the specified repository.
*/


var ListCollaborators = function(session) {
    /*
        Create a new instance of the ListCollaborators Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Collaborators/ListCollaborators"
    ListCollaborators.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCollaboratorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCollaboratorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListCollaborators
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCollaboratorsInputSet = function() {
    ListCollaboratorsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that has the collaborators to retrieve.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListCollaborators Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCollaboratorsResultSet = function(resultStream) {
    ListCollaboratorsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListCollaborators, choreography.Choreography);
util.inherits(ListCollaboratorsInputSet, choreography.InputSet);
util.inherits(ListCollaboratorsResultSet, choreography.ResultSet);
exports.ListCollaborators = ListCollaborators;


/*
    RemoveCollaborator
    Removes a collaborator from a specified repository.
*/


var RemoveCollaborator = function(session) {
    /*
        Create a new instance of the RemoveCollaborator Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Collaborators/RemoveCollaborator"
    RemoveCollaborator.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveCollaboratorResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveCollaboratorInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveCollaborator
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveCollaboratorInputSet = function() {
    RemoveCollaboratorInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Collaborator input for this Choreo. ((required, string) The username of the collaborator to remove.)
        */
        this.set_Collaborator = function(value) {
            this.setInput("Collaborator", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that the collaborator will be removed from.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveCollaborator Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveCollaboratorResultSet = function(resultStream) {
    RemoveCollaboratorResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(RemoveCollaborator, choreography.Choreography);
util.inherits(RemoveCollaboratorInputSet, choreography.InputSet);
util.inherits(RemoveCollaboratorResultSet, choreography.ResultSet);
exports.RemoveCollaborator = RemoveCollaborator;

