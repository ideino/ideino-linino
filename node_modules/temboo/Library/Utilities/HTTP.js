
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Delete
    Generates a HTTP DELETE request.
*/


var Delete = function(session) {
    /*
        Create a new instance of the Delete Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/HTTP/Delete"
    Delete.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Delete
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInputSet = function() {
    DeleteInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((optional, string) A valid password. This is used if the request required basic authentication.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequestHeaders input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the HTTP request headers.)
        */
        this.set_RequestHeaders = function(value) {
            this.setInput("RequestHeaders", value);
        }

        /*
        Set the value of the RequestParameters input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the url string as HTTP parameters.)
        */
        this.set_RequestParameters = function(value) {
            this.setInput("RequestParameters", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The base URL for the request (including http:// or https://).)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) A valid username. This is used if the request required basic authentication.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Delete Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteResultSet = function(resultStream) {
    DeleteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "HTTPLog" output from this Choreo execution. ((string) A log of the http request that has been generated.)
        */
        this.get_HTTPLog = function() {
            return this.getResult("HTTPLog");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the server.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Delete, choreography.Choreography);
util.inherits(DeleteInputSet, choreography.InputSet);
util.inherits(DeleteResultSet, choreography.ResultSet);
exports.Delete = Delete;


/*
    Get
    Generates a HTTP GET request.
*/


var Get = function(session) {
    /*
        Create a new instance of the Get Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/HTTP/Get"
    Get.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Get
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInputSet = function() {
    GetInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((optional, string) A valid password. This is used if the request required basic authentication.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequestHeaders input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the HTTP request headers.)
        */
        this.set_RequestHeaders = function(value) {
            this.setInput("RequestHeaders", value);
        }

        /*
        Set the value of the RequestParameters input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the url string as http parameters.)
        */
        this.set_RequestParameters = function(value) {
            this.setInput("RequestParameters", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The base URL for the request (including http:// or https://).)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) A valid username. This is used if the request required basic authentication.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Get Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetResultSet = function(resultStream) {
    GetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the server.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "HTTPLog" output from this Choreo execution. ((string) A log of the http request that has been generated.)
        */
        this.get_HTTPLog = function() {
            return this.getResult("HTTPLog");
        }
}

util.inherits(Get, choreography.Choreography);
util.inherits(GetInputSet, choreography.InputSet);
util.inherits(GetResultSet, choreography.ResultSet);
exports.Get = Get;


/*
    Post
    Generates a HTTP POST request.
*/


var Post = function(session) {
    /*
        Create a new instance of the Post Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/HTTP/Post"
    Post.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Post
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostInputSet = function() {
    PostInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((optional, multiline) The request body for the POST request.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, string) A valid password. This is used if the request required basic authentication.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequestHeaders input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the HTTP request headers.)
        */
        this.set_RequestHeaders = function(value) {
            this.setInput("RequestHeaders", value);
        }

        /*
        Set the value of the RequestParameters input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the url string as http parameters.)
        */
        this.set_RequestParameters = function(value) {
            this.setInput("RequestParameters", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The base URL for the request (including http:// or https://).)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) A valid username. This is used if the request required basic authentication.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Post Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostResultSet = function(resultStream) {
    PostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "HTTPLog" output from this Choreo execution. ((string) A log of the http request that has been generated.)
        */
        this.get_HTTPLog = function() {
            return this.getResult("HTTPLog");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the server.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(Post, choreography.Choreography);
util.inherits(PostInputSet, choreography.InputSet);
util.inherits(PostResultSet, choreography.ResultSet);
exports.Post = Post;


/*
    Put
    Generates a HTTP PUT request.
*/


var Put = function(session) {
    /*
        Create a new instance of the Put Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/HTTP/Put"
    Put.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Put
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutInputSet = function() {
    PutInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((optional, multiline) The request body for the PUT request.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, string) A valid password. This is used if the request required basic authentication.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequestHeaders input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the HTTP request headers.)
        */
        this.set_RequestHeaders = function(value) {
            this.setInput("RequestHeaders", value);
        }

        /*
        Set the value of the RequestParameters input for this Choreo. ((optional, json) A JSON object containing up to 10 key/value pairs that will be mapped to the url string as HTTP parameters.)
        */
        this.set_RequestParameters = function(value) {
            this.setInput("RequestParameters", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The base URL for the request (including http:// or https://).)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) A valid username. This is used if the request required basic authentication.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Put Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutResultSet = function(resultStream) {
    PutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "HTTPLog" output from this Choreo execution. ((string) A log of the http request that has been generated.)
        */
        this.get_HTTPLog = function() {
            return this.getResult("HTTPLog");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the server.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Put, choreography.Choreography);
util.inherits(PutInputSet, choreography.InputSet);
util.inherits(PutResultSet, choreography.ResultSet);
exports.Put = Put;

