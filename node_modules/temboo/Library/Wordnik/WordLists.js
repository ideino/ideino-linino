
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateWordList
    Creates a new word list for the specified user.
*/


var CreateWordList = function(session) {
    /*
        Create a new instance of the CreateWordList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/WordLists/CreateWordList"
    CreateWordList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateWordListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateWordListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateWordList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateWordListInputSet = function() {
    CreateWordListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ListDescription input for this Choreo. ((required, string) A description of the list to create.)
        */
        this.set_ListDescription = function(value) {
            this.setInput("ListDescription", value);
        }

        /*
        Set the value of the ListName input for this Choreo. ((required, string) Name of list to create.)
        */
        this.set_ListName = function(value) {
            this.setInput("ListName", value);
        }

        /*
        Set the value of the ListStatus input for this Choreo. ((optional, string) Determines whether the list to cretae is public or private. Acceptable values: PUBLIC or PRIVATE.)
        */
        this.set_ListStatus = function(value) {
            this.setInput("ListStatus", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The Password of the Wordnik account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The Username of the Wordnik account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateWordList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateWordListResultSet = function(resultStream) {
    CreateWordListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateWordList, choreography.Choreography);
util.inherits(CreateWordListInputSet, choreography.InputSet);
util.inherits(CreateWordListResultSet, choreography.ResultSet);
exports.CreateWordList = CreateWordList;

