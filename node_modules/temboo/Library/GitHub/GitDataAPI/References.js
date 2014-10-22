
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateReference
    Creates a reference on the system.
*/


var CreateReference = function(session) {
    /*
        Create a new instance of the CreateReference Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/References/CreateReference"
    CreateReference.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateReferenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateReferenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateReference
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateReferenceInputSet = function() {
    CreateReferenceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((required, string) The name of the fully qualified reference. Must be formatted as refs/heads/branch. Refs can be retrieved by running the GetAllReferences and parsing the value for "ref".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the reference being created.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the SHA input for this Choreo. ((required, string) The SHA1 value to set this reference to.)
        */
        this.set_SHA = function(value) {
            this.setInput("SHA", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateReference Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateReferenceResultSet = function(resultStream) {
    CreateReferenceResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateReference, choreography.Choreography);
util.inherits(CreateReferenceInputSet, choreography.InputSet);
util.inherits(CreateReferenceResultSet, choreography.ResultSet);
exports.CreateReference = CreateReference;


/*
    DeleteReference
    Deletes a specified reference.
*/


var DeleteReference = function(session) {
    /*
        Create a new instance of the DeleteReference Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/References/DeleteReference"
    DeleteReference.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteReferenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteReferenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteReference
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteReferenceInputSet = function() {
    DeleteReferenceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((required, string) The name of the fully qualified reference to delete. Must be formatted as refs/heads/branch. Refs can be retrieved by running the GetAllReferences and parsing the value for "ref".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the reference that's being deleted.)
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
A ResultSet with methods tailored to the values returned by the DeleteReference Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteReferenceResultSet = function(resultStream) {
    DeleteReferenceResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteReference, choreography.Choreography);
util.inherits(DeleteReferenceInputSet, choreography.InputSet);
util.inherits(DeleteReferenceResultSet, choreography.ResultSet);
exports.DeleteReference = DeleteReference;


/*
    GetAllReferences
    Retrieves an array of all the references on the system, including things like notes and stashes if they exist on the server.
*/


var GetAllReferences = function(session) {
    /*
        Create a new instance of the GetAllReferences Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/References/GetAllReferences"
    GetAllReferences.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllReferencesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllReferencesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllReferences
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllReferencesInputSet = function() {
    GetAllReferencesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the references to retrieve.)
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
A ResultSet with methods tailored to the values returned by the GetAllReferences Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllReferencesResultSet = function(resultStream) {
    GetAllReferencesResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(GetAllReferences, choreography.Choreography);
util.inherits(GetAllReferencesInputSet, choreography.InputSet);
util.inherits(GetAllReferencesResultSet, choreography.ResultSet);
exports.GetAllReferences = GetAllReferences;


/*
    GetReference
    Retrieves an individual reference on the system, including things like notes and statshes if they exist on the server.
*/


var GetReference = function(session) {
    /*
        Create a new instance of the GetReference Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GitDataAPI/References/GetReference"
    GetReference.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReferenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReferenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReference
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReferenceInputSet = function() {
    GetReferenceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Ref input for this Choreo. ((required, string) The reference to retrieve. Must be formatted as refs/heads/branch. Refs can be retrieved by running the GetAllReferences and parsing the value for "ref".)
        */
        this.set_Ref = function(value) {
            this.setInput("Ref", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo associated with the references to retrieve.)
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
A ResultSet with methods tailored to the values returned by the GetReference Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReferenceResultSet = function(resultStream) {
    GetReferenceResultSet.super_.call(this, resultStream);    
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

util.inherits(GetReference, choreography.Choreography);
util.inherits(GetReferenceInputSet, choreography.InputSet);
util.inherits(GetReferenceResultSet, choreography.ResultSet);
exports.GetReference = GetReference;

