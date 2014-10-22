
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteWordList
    Deletes a given word list.
*/


var DeleteWordList = function(session) {
    /*
        Create a new instance of the DeleteWordList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/WordList/DeleteWordList"
    DeleteWordList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteWordListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteWordListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteWordList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteWordListInputSet = function() {
    DeleteWordListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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

        /*
        Set the value of the WordList input for this Choreo. ((required, string) The perma-link of the WordLIst to delete.)
        */
        this.set_WordList = function(value) {
            this.setInput("WordList", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteWordList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteWordListResultSet = function(resultStream) {
    DeleteWordListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteWordList, choreography.Choreography);
util.inherits(DeleteWordListInputSet, choreography.InputSet);
util.inherits(DeleteWordListResultSet, choreography.ResultSet);
exports.DeleteWordList = DeleteWordList;


/*
    GetWordList
    Retrieves a word list by its ID.
*/


var GetWordList = function(session) {
    /*
        Create a new instance of the GetWordList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/WordList/GetWordList"
    GetWordList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWordListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWordListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWordList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWordListInputSet = function() {
    GetWordListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the Username input for this Choreo. ((required, string) The Username of the Wordnik account.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WordList input for this Choreo. ((required, string) The perma-link for the Word List to retrieve.)
        */
        this.set_WordList = function(value) {
            this.setInput("WordList", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWordList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWordListResultSet = function(resultStream) {
    GetWordListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWordList, choreography.Choreography);
util.inherits(GetWordListInputSet, choreography.InputSet);
util.inherits(GetWordListResultSet, choreography.ResultSet);
exports.GetWordList = GetWordList;


/*
    GetWordsInWordList
    Retrievs the words in a word list.
*/


var GetWordsInWordList = function(session) {
    /*
        Create a new instance of the GetWordsInWordList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Wordnik/WordList/GetWordsInWordList"
    GetWordsInWordList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetWordsInWordListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetWordsInWordListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetWordsInWordList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetWordsInWordListInputSet = function() {
    GetWordsInWordListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from Wordnik.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Limits teh number of results returned. Defaults to 100.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) The Password of the Wordnik user account.)
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
        Set the value of the SortBy input for this Choreo. ((optional, string) Sorts the results by either alpha (alphabetically) or createDate (the date created). Defaults to createDate.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) The direction to sort results by either asc (ascending) or desc (descending). Defaults to desc.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The Username of the Wordnik user.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the WordList input for this Choreo. ((required, string) The perma-link for the Word List to retrieve.)
        */
        this.set_WordList = function(value) {
            this.setInput("WordList", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetWordsInWordList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetWordsInWordListResultSet = function(resultStream) {
    GetWordsInWordListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Wordnik.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetWordsInWordList, choreography.Choreography);
util.inherits(GetWordsInWordListInputSet, choreography.InputSet);
util.inherits(GetWordsInWordListResultSet, choreography.ResultSet);
exports.GetWordsInWordList = GetWordsInWordList;

