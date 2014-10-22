
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRepo
    Creates a new repository for the authenticated user.
*/


var CreateRepo = function(session) {
    /*
        Create a new instance of the CreateRepo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/CreateRepo"
    CreateRepo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRepoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRepoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRepo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRepoInputSet = function() {
    CreateRepoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A text description for the repo.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the HasDownloads input for this Choreo. ((optional, boolean) Se to "true" to enable downloads for this repository. Defaults to "true".)
        */
        this.set_HasDownloads = function(value) {
            this.setInput("HasDownloads", value);
        }

        /*
        Set the value of the HasIssues input for this Choreo. ((optional, boolean) Set to "true" to enable issues for this repository. Defaults to "true.")
        */
        this.set_HasIssues = function(value) {
            this.setInput("HasIssues", value);
        }

        /*
        Set the value of the HasWiki input for this Choreo. ((optional, boolean) Set to "true" to enable the wiki for this repository. Defaults to "true".)
        */
        this.set_HasWiki = function(value) {
            this.setInput("HasWiki", value);
        }

        /*
        Set the value of the Homepage input for this Choreo. ((optional, string) A homepage link.)
        */
        this.set_Homepage = function(value) {
            this.setInput("Homepage", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the repo being created.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Private input for this Choreo. ((optional, boolean) A flag indicating the the repo is private or public. Set to "true" to create a private repository. Defaults to "false".)
        */
        this.set_Private = function(value) {
            this.setInput("Private", value);
        }

        /*
        Set the value of the TeamID input for this Choreo. ((optional, integer) The id of the team that will be granted access to this repository. Only valid when creating a repo in an organization.)
        */
        this.set_TeamID = function(value) {
            this.setInput("TeamID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateRepo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRepoResultSet = function(resultStream) {
    CreateRepoResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateRepo, choreography.Choreography);
util.inherits(CreateRepoInputSet, choreography.InputSet);
util.inherits(CreateRepoResultSet, choreography.ResultSet);
exports.CreateRepo = CreateRepo;


/*
    DeleteRepo
    Deletes a specified repository.
*/


var DeleteRepo = function(session) {
    /*
        Create a new instance of the DeleteRepo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/DeleteRepo"
    DeleteRepo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRepoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRepoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRepo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRepoInputSet = function() {
    DeleteRepoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to delete.)
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
A ResultSet with methods tailored to the values returned by the DeleteRepo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRepoResultSet = function(resultStream) {
    DeleteRepoResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteRepo, choreography.Choreography);
util.inherits(DeleteRepoInputSet, choreography.InputSet);
util.inherits(DeleteRepoResultSet, choreography.ResultSet);
exports.DeleteRepo = DeleteRepo;


/*
    GetBranch
    Retrieves information for a specified branch.
*/


var GetBranch = function(session) {
    /*
        Create a new instance of the GetBranch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/GetBranch"
    GetBranch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBranchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBranchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBranch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBranchInputSet = function() {
    GetBranchInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Branch input for this Choreo. ((required, string) The name of the branch to retrieve.)
        */
        this.set_Branch = function(value) {
            this.setInput("Branch", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repository.)
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
A ResultSet with methods tailored to the values returned by the GetBranch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBranchResultSet = function(resultStream) {
    GetBranchResultSet.super_.call(this, resultStream);    
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

util.inherits(GetBranch, choreography.Choreography);
util.inherits(GetBranchInputSet, choreography.InputSet);
util.inherits(GetBranchResultSet, choreography.ResultSet);
exports.GetBranch = GetBranch;


/*
    GetRepo
    Retrieves information for a specified repository.
*/


var GetRepo = function(session) {
    /*
        Create a new instance of the GetRepo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/GetRepo"
    GetRepo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRepoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRepoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRepo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRepoInputSet = function() {
    GetRepoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to retrieve.)
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
A ResultSet with methods tailored to the values returned by the GetRepo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRepoResultSet = function(resultStream) {
    GetRepoResultSet.super_.call(this, resultStream);    
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

util.inherits(GetRepo, choreography.Choreography);
util.inherits(GetRepoInputSet, choreography.InputSet);
util.inherits(GetRepoResultSet, choreography.ResultSet);
exports.GetRepo = GetRepo;


/*
    ListBranches
    Retrieves a list of branches for the specified repository.
*/


var ListBranches = function(session) {
    /*
        Create a new instance of the ListBranches Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListBranches"
    ListBranches.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBranchesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBranchesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBranches
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBranchesInputSet = function() {
    ListBranchesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to list branches for.)
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
A ResultSet with methods tailored to the values returned by the ListBranches Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBranchesResultSet = function(resultStream) {
    ListBranchesResultSet.super_.call(this, resultStream);    
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

util.inherits(ListBranches, choreography.Choreography);
util.inherits(ListBranchesInputSet, choreography.InputSet);
util.inherits(ListBranchesResultSet, choreography.ResultSet);
exports.ListBranches = ListBranches;


/*
    ListContributors
    Retrieves a list of contributors for the specified repository.
*/


var ListContributors = function(session) {
    /*
        Create a new instance of the ListContributors Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListContributors"
    ListContributors.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListContributorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListContributorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListContributors
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListContributorsInputSet = function() {
    ListContributorsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Anonymous input for this Choreo. ((optional, boolean) Flag indicating that the response should include anonymous contributors. Set to 1 or true to include anonymous contributors.)
        */
        this.set_Anonymous = function(value) {
            this.setInput("Anonymous", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo that has the contributors to retrieve.)
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
A ResultSet with methods tailored to the values returned by the ListContributors Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListContributorsResultSet = function(resultStream) {
    ListContributorsResultSet.super_.call(this, resultStream);    
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

util.inherits(ListContributors, choreography.Choreography);
util.inherits(ListContributorsInputSet, choreography.InputSet);
util.inherits(ListContributorsResultSet, choreography.ResultSet);
exports.ListContributors = ListContributors;


/*
    ListLanguages
    Retrieves a list of languages for the specified repository.
*/


var ListLanguages = function(session) {
    /*
        Create a new instance of the ListLanguages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListLanguages"
    ListLanguages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListLanguagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListLanguagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListLanguages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListLanguagesInputSet = function() {
    ListLanguagesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to list languages for.)
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
A ResultSet with methods tailored to the values returned by the ListLanguages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListLanguagesResultSet = function(resultStream) {
    ListLanguagesResultSet.super_.call(this, resultStream);    
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

util.inherits(ListLanguages, choreography.Choreography);
util.inherits(ListLanguagesInputSet, choreography.InputSet);
util.inherits(ListLanguagesResultSet, choreography.ResultSet);
exports.ListLanguages = ListLanguages;


/*
    ListReposByOrg
    Retrieces a list of repositories for the specified organization.
*/


var ListReposByOrg = function(session) {
    /*
        Create a new instance of the ListReposByOrg Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListReposByOrg"
    ListReposByOrg.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListReposByOrgResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListReposByOrgInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListReposByOrg
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListReposByOrgInputSet = function() {
    ListReposByOrgInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((conditional, string) The Access Token retrieved during the OAuth process. Required when accessing a protected resource.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Org input for this Choreo. ((required, string) The name of the organization.)
        */
        this.set_Org = function(value) {
            this.setInput("Org", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of repos to return. Valid values are: all (the default), public, member, or private.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListReposByOrg Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListReposByOrgResultSet = function(resultStream) {
    ListReposByOrgResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "LastPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the last available page.)
        */
        this.get_LastPage = function() {
            return this.getResult("LastPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
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
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from GitHub.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListReposByOrg, choreography.Choreography);
util.inherits(ListReposByOrgInputSet, choreography.InputSet);
util.inherits(ListReposByOrgResultSet, choreography.ResultSet);
exports.ListReposByOrg = ListReposByOrg;


/*
    ListTags
    Retrieves a list of tags for the specified repository.
*/


var ListTags = function(session) {
    /*
        Create a new instance of the ListTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListTags"
    ListTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTagsInputSet = function() {
    ListTagsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to list tags for.)
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
A ResultSet with methods tailored to the values returned by the ListTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTagsResultSet = function(resultStream) {
    ListTagsResultSet.super_.call(this, resultStream);    
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

util.inherits(ListTags, choreography.Choreography);
util.inherits(ListTagsInputSet, choreography.InputSet);
util.inherits(ListTagsResultSet, choreography.ResultSet);
exports.ListTags = ListTags;


/*
    ListTeams
    Retrieves a list of teams for the specified repository.
*/


var ListTeams = function(session) {
    /*
        Create a new instance of the ListTeams Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListTeams"
    ListTeams.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTeamsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTeamsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTeams
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTeamsInputSet = function() {
    ListTeamsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo to list teams for.)
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
A ResultSet with methods tailored to the values returned by the ListTeams Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTeamsResultSet = function(resultStream) {
    ListTeamsResultSet.super_.call(this, resultStream);    
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

util.inherits(ListTeams, choreography.Choreography);
util.inherits(ListTeamsInputSet, choreography.InputSet);
util.inherits(ListTeamsResultSet, choreography.ResultSet);
exports.ListTeams = ListTeams;


/*
    ListUserRepos
    Retrieves a list of public repositories for the specified user.
*/


var ListUserRepos = function(session) {
    /*
        Create a new instance of the ListUserRepos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListUserRepos"
    ListUserRepos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUserReposResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUserReposInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUserRepos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUserReposInputSet = function() {
    ListUserReposInputSet.super_.call(this);
        /*
        Set the value of the Direction input for this Choreo. ((optional, string) Valid values are asc or desc. Default behavior is desc unless sorting by full_name in which case, the direction is asc.)
        */
        this.set_Direction = function(value) {
            this.setInput("Direction", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The sort order of the results. Valid values are: created, updated, pushed, or full_name (the default).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of repos to return. Valid values are: all (the default), owner, public, or member.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) The GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUserRepos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUserReposResultSet = function(resultStream) {
    ListUserReposResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) If multiple pages are available for the response, this contains the next page that you should retrieve.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The available rate limit for your account. This is returned in the GitHub response header.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
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
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The remaining number of API requests available to you. This is returned in the GitHub response header.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(ListUserRepos, choreography.Choreography);
util.inherits(ListUserReposInputSet, choreography.InputSet);
util.inherits(ListUserReposResultSet, choreography.ResultSet);
exports.ListUserRepos = ListUserRepos;


/*
    ListYourRepos
    Retrieves a list of repositories for the authenticated user.
*/


var ListYourRepos = function(session) {
    /*
        Create a new instance of the ListYourRepos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/ReposAPI/Repos/ListYourRepos"
    ListYourRepos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListYourReposResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListYourReposInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListYourRepos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListYourReposInputSet = function() {
    ListYourReposInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Direction input for this Choreo. ((optional, string) Valid values are asc or desc. Default behavior is desc unless sorting by full_name in which case, the direction is asc.)
        */
        this.set_Direction = function(value) {
            this.setInput("Direction", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) The sort order of the results. Valid values are: created, updated, pushed, or full_name (the default).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of repos to return. Valid values are: all (the default), owner, public, private, or member.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListYourRepos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListYourReposResultSet = function(resultStream) {
    ListYourReposResultSet.super_.call(this, resultStream);    
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
}

util.inherits(ListYourRepos, choreography.Choreography);
util.inherits(ListYourReposInputSet, choreography.InputSet);
util.inherits(ListYourReposResultSet, choreography.ResultSet);
exports.ListYourRepos = ListYourRepos;

