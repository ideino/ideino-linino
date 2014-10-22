
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetAuthToken
    Obtains an authentication token for use in other Wordnik Choreos.
*/


var GetAuthToken = function(session) {
    /*
        Create a new instance of the GetAuthToken Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Account/GetAuthToken"
    GetAuthToken.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAuthTokenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAuthTokenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAuthToken
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAuthTokenInputSet = function() {
    GetAuthTokenInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) Password of the Wordnik account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Username of the Wordnik account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAuthToken Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAuthTokenResultSet = function(resultStream) {
    GetAuthTokenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. (The Token obtained from running this Choreo.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(GetAuthToken, choreography.Choreography);
util.inherits(GetAuthTokenInputSet, choreography.InputSet);
util.inherits(GetAuthTokenResultSet, choreography.ResultSet);
exports.GetAuthToken = GetAuthToken;


/*
    GetKeyStatus
    Obtains the status of the user's current API Key.
*/


var GetKeyStatus = function(session) {
    /*
        Create a new instance of the GetKeyStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Account/GetKeyStatus"
    GetKeyStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetKeyStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetKeyStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetKeyStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetKeyStatusInputSet = function() {
    GetKeyStatusInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetKeyStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetKeyStatusResultSet = function(resultStream) {
    GetKeyStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetKeyStatus, choreography.Choreography);
util.inherits(GetKeyStatusInputSet, choreography.InputSet);
util.inherits(GetKeyStatusResultSet, choreography.ResultSet);
exports.GetKeyStatus = GetKeyStatus;


/*
    GetUser
    Retrieves information on the specified user.
*/


var GetUser = function(session) {
    /*
        Create a new instance of the GetUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Account/GetUser"
    GetUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInputSet = function() {
    GetUserInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) Password of the Wordnik account. )
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Username of the Wordnik account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserResultSet = function(resultStream) {
    GetUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUser, choreography.Choreography);
util.inherits(GetUserInputSet, choreography.InputSet);
util.inherits(GetUserResultSet, choreography.ResultSet);
exports.GetUser = GetUser;


/*
    GetWordLists
    Retrieves the word lists for the specified user.
*/


var GetWordLists = function(session) {
    /*
        Create a new instance of the GetWordLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/Account/GetWordLists"
    GetWordLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWordListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWordListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWordLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWordListsInputSet = function() {
    GetWordListsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Maximum number of results to return. Defaults to 50.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The Password of the Wordnik account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Response can be either JSON or XML. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Number of results to skip. Defaults to 0.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The Username of the Wordnik account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWordLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWordListsResultSet = function(resultStream) {
    GetWordListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWordLists, choreography.Choreography);
util.inherits(GetWordListsInputSet, choreography.InputSet);
util.inherits(GetWordListsResultSet, choreography.ResultSet);
exports.GetWordLists = GetWordLists;

