
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Delete
    Deletes a comment.
*/


var Delete = function(session) {
    /*
        Create a new instance of the Delete Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Comments/Delete"
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
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The ID of the comment.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Delete Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteResultSet = function(resultStream) {
    DeleteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
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
    Gets a comment by ID.
*/


var Get = function(session) {
    /*
        Create a new instance of the Get Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Comments/Get"
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
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The ID of the comment.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set, this will succeed when retrieving a deleted comment, and will include any deleted replies. (Default: false))
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Get Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetResultSet = function(resultStream) {
    GetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Get, choreography.Choreography);
util.inherits(GetInputSet, choreography.InputSet);
util.inherits(GetResultSet, choreography.ResultSet);
exports.Get = Get;


/*
    Insert
    Creates a new comment on the given file.
*/


var Insert = function(session) {
    /*
        Create a new instance of the Insert Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Comments/Insert"
    Insert.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Insert
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertInputSet = function() {
    InsertInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((required, json) A JSON representation of fields in a comment resource which shoud contain at least one key for content. See documentation for formatting examples.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Insert Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertResultSet = function(resultStream) {
    InsertResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(Insert, choreography.Choreography);
util.inherits(InsertInputSet, choreography.InputSet);
util.inherits(InsertResultSet, choreography.ResultSet);
exports.Insert = Insert;


/*
    List
    Lists a file's comments.
*/


var List = function(session) {
    /*
        Create a new instance of the List Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Comments/List"
    List.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the List
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInputSet = function() {
    ListInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set, this will succeed when retrieving a deleted comment, and will include any deleted replies. (Default: false))
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, string) The maximum number of discussions to include in the response, used for paging. Acceptable values are 0 to 100, inclusive. (Default: 20))
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the UpdatedMIn input for this Choreo. ((optional, string) Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.)
        */
        this.set_UpdatedMIn = function(value) {
            this.setInput("UpdatedMIn", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the List Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListResultSet = function(resultStream) {
    ListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(List, choreography.Choreography);
util.inherits(ListInputSet, choreography.InputSet);
util.inherits(ListResultSet, choreography.ResultSet);
exports.List = List;


/*
    Update
    Updates an existing comment.
*/


var Update = function(session) {
    /*
        Create a new instance of the Update Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Drive/Comments/Update"
    Update.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Update
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateInputSet = function() {
    UpdateInputSet.super_.call(this);
        /*
        Set the value of the RequestBody input for this Choreo. ((required, json) A JSON representation of fields in a comment resource which shoud contain at least one key for content. See documentation for formatting examples.)
        */
        this.set_RequestBody = function(value) {
            this.setInput("RequestBody", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth2 process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The ID of the comment.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Selector specifying a subset of fields to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the FileID input for this Choreo. ((required, string) The ID of the file.)
        */
        this.set_FileID = function(value) {
            this.setInput("FileID", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Update Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateResultSet = function(resultStream) {
    UpdateResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(Update, choreography.Choreography);
util.inherits(UpdateInputSet, choreography.InputSet);
util.inherits(UpdateResultSet, choreography.ResultSet);
exports.Update = Update;

