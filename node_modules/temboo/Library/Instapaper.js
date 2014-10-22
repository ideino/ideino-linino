
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddURL
    Add a document to an Instapaper account.
*/


var AddURL = function(session) {
    /*
        Create a new instance of the AddURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instapaper/AddURL"
    AddURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddURLInputSet = function() {
    AddURLInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, string) Your Instapaper password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Selection input for this Choreo. ((optional, string) Enter a description of the URL being added.)
        */
        this.set_Selection = function(value) {
            this.setInput("Selection", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) Enter a titile for the uploaded URL. If no title is provided, Instapaper will crawl the URL to detect a title.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) Enter the URL of the document that is being added to an Instapaper account.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Instapaper username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddURLResultSet = function(resultStream) {
    AddURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((integer) The response from Instapaper. Successful reqests will return a 201 status code.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddURL, choreography.Choreography);
util.inherits(AddURLInputSet, choreography.InputSet);
util.inherits(AddURLResultSet, choreography.ResultSet);
exports.AddURL = AddURL;


/*
    Authenticate
    Validate an Instapaper account.
*/


var Authenticate = function(session) {
    /*
        Create a new instance of the Authenticate Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Instapaper/Authenticate"
    Authenticate.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AuthenticateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AuthenticateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Authenticate
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AuthenticateInputSet = function() {
    AuthenticateInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, string) Your Instapaper password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Instapaper username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Authenticate Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AuthenticateResultSet = function(resultStream) {
    AuthenticateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Instapaper. Successful reqests will return a 200 status code.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Authenticate, choreography.Choreography);
util.inherits(AuthenticateInputSet, choreography.InputSet);
util.inherits(AuthenticateResultSet, choreography.ResultSet);
exports.Authenticate = Authenticate;

