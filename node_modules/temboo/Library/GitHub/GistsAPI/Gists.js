
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CheckGist
    Checks whether or not a gist is starred.
*/


var CheckGist = function(session) {
    /*
        Create a new instance of the CheckGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/CheckGist"
    CheckGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CheckGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CheckGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CheckGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CheckGistInputSet = function() {
    CheckGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id for the gist you want to check.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CheckGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CheckGistResultSet = function(resultStream) {
    CheckGistResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) A boolean flag that indicates whether or not the gist is starred.)
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

util.inherits(CheckGist, choreography.Choreography);
util.inherits(CheckGistInputSet, choreography.InputSet);
util.inherits(CheckGistResultSet, choreography.ResultSet);
exports.CheckGist = CheckGist;


/*
    CreateGist
    Creates a gist.
*/


var CreateGist = function(session) {
    /*
        Create a new instance of the CreateGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/CreateGist"
    CreateGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateGistInputSet = function() {
    CreateGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description for this gist.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the FileContents input for this Choreo. ((required, string) The file contents of the gist.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The file name of the gist (i.e. myProject.py).)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the Public input for this Choreo. ((required, boolean) Indicates whether or not the gist is public or private.)
        */
        this.set_Public = function(value) {
            this.setInput("Public", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) Deprecated (retained for backward compatibility only).)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateGistResultSet = function(resultStream) {
    CreateGistResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateGist, choreography.Choreography);
util.inherits(CreateGistInputSet, choreography.InputSet);
util.inherits(CreateGistResultSet, choreography.ResultSet);
exports.CreateGist = CreateGist;


/*
    DeleteGist
    Deletes a specified gist.
*/


var DeleteGist = function(session) {
    /*
        Create a new instance of the DeleteGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/DeleteGist"
    DeleteGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteGistInputSet = function() {
    DeleteGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id for the gist you want to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteGistResultSet = function(resultStream) {
    DeleteGistResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteGist, choreography.Choreography);
util.inherits(DeleteGistInputSet, choreography.InputSet);
util.inherits(DeleteGistResultSet, choreography.ResultSet);
exports.DeleteGist = DeleteGist;


/*
    GetGist
    Returns an individual gist with a given id.
*/


var GetGist = function(session) {
    /*
        Create a new instance of the GetGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/GetGist"
    GetGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetGistInputSet = function() {
    GetGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id for the gist you want to retrieve.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetGistResultSet = function(resultStream) {
    GetGistResultSet.super_.call(this, resultStream);    
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
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(GetGist, choreography.Choreography);
util.inherits(GetGistInputSet, choreography.InputSet);
util.inherits(GetGistResultSet, choreography.ResultSet);
exports.GetGist = GetGist;


/*
    ListGistsByUser
    Returns a list of gists for a given user.
*/


var ListGistsByUser = function(session) {
    /*
        Create a new instance of the ListGistsByUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/ListGistsByUser"
    ListGistsByUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGistsByUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGistsByUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGistsByUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGistsByUserInputSet = function() {
    ListGistsByUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The username for which you want to retrieve a list of gists.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGistsByUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGistsByUserResultSet = function(resultStream) {
    ListGistsByUserResultSet.super_.call(this, resultStream);    
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
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListGistsByUser, choreography.Choreography);
util.inherits(ListGistsByUserInputSet, choreography.InputSet);
util.inherits(ListGistsByUserResultSet, choreography.ResultSet);
exports.ListGistsByUser = ListGistsByUser;


/*
    ListGistsForAuthenticatedUser
    Returns a list of gists for the authenticated user or if called anonymously, return all public gists.
*/


var ListGistsForAuthenticatedUser = function(session) {
    /*
        Create a new instance of the ListGistsForAuthenticatedUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/ListGistsForAuthenticatedUser"
    ListGistsForAuthenticatedUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListGistsForAuthenticatedUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListGistsForAuthenticatedUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListGistsForAuthenticatedUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListGistsForAuthenticatedUserInputSet = function() {
    ListGistsForAuthenticatedUserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. If not provided, all public gists are returned.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListGistsForAuthenticatedUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListGistsForAuthenticatedUserResultSet = function(resultStream) {
    ListGistsForAuthenticatedUserResultSet.super_.call(this, resultStream);    
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
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
        }
}

util.inherits(ListGistsForAuthenticatedUser, choreography.Choreography);
util.inherits(ListGistsForAuthenticatedUserInputSet, choreography.InputSet);
util.inherits(ListGistsForAuthenticatedUserResultSet, choreography.ResultSet);
exports.ListGistsForAuthenticatedUser = ListGistsForAuthenticatedUser;


/*
    ListPublicGists
    Returns a list of all public gists.
*/


var ListPublicGists = function(session) {
    /*
        Create a new instance of the ListPublicGists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/ListPublicGists"
    ListPublicGists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPublicGistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPublicGistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPublicGists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPublicGistsInputSet = function() {
    ListPublicGistsInputSet.super_.call(this);
        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPublicGists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPublicGistsResultSet = function(resultStream) {
    ListPublicGistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(ListPublicGists, choreography.Choreography);
util.inherits(ListPublicGistsInputSet, choreography.InputSet);
util.inherits(ListPublicGistsResultSet, choreography.ResultSet);
exports.ListPublicGists = ListPublicGists;


/*
    ListStarredGists
    Returns a list of starred gists for the authenticated user.
*/


var ListStarredGists = function(session) {
    /*
        Create a new instance of the ListStarredGists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/ListStarredGists"
    ListStarredGists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListStarredGistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListStarredGistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListStarredGists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListStarredGistsInputSet = function() {
    ListStarredGistsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListStarredGists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListStarredGistsResultSet = function(resultStream) {
    ListStarredGistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
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
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
}

util.inherits(ListStarredGists, choreography.Choreography);
util.inherits(ListStarredGistsInputSet, choreography.InputSet);
util.inherits(ListStarredGistsResultSet, choreography.ResultSet);
exports.ListStarredGists = ListStarredGists;


/*
    StarGist
    Stars a gist using a specified gist id.
*/


var StarGist = function(session) {
    /*
        Create a new instance of the StarGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/StarGist"
    StarGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StarGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StarGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StarGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StarGistInputSet = function() {
    StarGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id for the gist you want to star.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StarGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StarGistResultSet = function(resultStream) {
    StarGistResultSet.super_.call(this, resultStream);    
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

util.inherits(StarGist, choreography.Choreography);
util.inherits(StarGistInputSet, choreography.InputSet);
util.inherits(StarGistResultSet, choreography.ResultSet);
exports.StarGist = StarGist;


/*
    UnstarGist
    Unstars a gist using a specified gist id.
*/


var UnstarGist = function(session) {
    /*
        Create a new instance of the UnstarGist Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/GistsAPI/Gists/UnstarGist"
    UnstarGist.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnstarGistResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnstarGistInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnstarGist
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnstarGistInputSet = function() {
    UnstarGistInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id for the gist you want to unstar.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnstarGist Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnstarGistResultSet = function(resultStream) {
    UnstarGistResultSet.super_.call(this, resultStream);    
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

util.inherits(UnstarGist, choreography.Choreography);
util.inherits(UnstarGistInputSet, choreography.InputSet);
util.inherits(UnstarGistResultSet, choreography.ResultSet);
exports.UnstarGist = UnstarGist;

