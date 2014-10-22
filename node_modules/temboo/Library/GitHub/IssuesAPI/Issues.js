
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListIssuesForRepo
    List all issues for a specified repository.
*/


var ListIssuesForRepo = function(session) {
    /*
        Create a new instance of the ListIssuesForRepo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/IssuesAPI/Issues/ListIssuesForRepo"
    ListIssuesForRepo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListIssuesForRepoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListIssuesForRepoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListIssuesForRepo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListIssuesForRepoInputSet = function() {
    ListIssuesForRepoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Assignee input for this Choreo. ((required, string) Can be set to a username, "none" for issues with no assinged user, or * for issues with any assigned user.)
        */
        this.set_Assignee = function(value) {
            this.setInput("Assignee", value);
        }

        /*
        Set the value of the Direction input for this Choreo. ((optional, string) The direction of the sort order. Valid values are: asc or desc (the default).)
        */
        this.set_Direction = function(value) {
            this.setInput("Direction", value);
        }

        /*
        Set the value of the Labels input for this Choreo. ((optional, string) A comma separated list of label names (i.e. bug, ui, etc).)
        */
        this.set_Labels = function(value) {
            this.setInput("Labels", value);
        }

        /*
        Set the value of the Mentioned input for this Choreo. ((optional, string) A Github username that is mentioned.)
        */
        this.set_Mentioned = function(value) {
            this.setInput("Mentioned", value);
        }

        /*
        Set the value of the Milestone input for this Choreo. ((required, string) Can be set to a milestone number, "none" for issues with no milestone, or * for issues with any milestone.)
        */
        this.set_Milestone = function(value) {
            this.setInput("Milestone", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Repo input for this Choreo. ((required, string) The name of the repo.)
        */
        this.set_Repo = function(value) {
            this.setInput("Repo", value);
        }

        /*
        Set the value of the Since input for this Choreo. ((optional, date) A timestamp in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Returns issues since this date.)
        */
        this.set_Since = function(value) {
            this.setInput("Since", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Indicates how the issues will be sorted in the response. Valid sort options are: created (the default), updated, comments.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Returns issues with a particular state: open (the default) or closed.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the User input for this Choreo. ((required, string) A GitHub username.)
        */
        this.set_User = function(value) {
            this.setInput("User", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListIssuesForRepo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListIssuesForRepoResultSet = function(resultStream) {
    ListIssuesForRepoResultSet.super_.call(this, resultStream);    
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

util.inherits(ListIssuesForRepo, choreography.Choreography);
util.inherits(ListIssuesForRepoInputSet, choreography.InputSet);
util.inherits(ListIssuesForRepoResultSet, choreography.ResultSet);
exports.ListIssuesForRepo = ListIssuesForRepo;


/*
    ListYourIssues
    Lists all issues associated with the provided access token.
*/


var ListYourIssues = function(session) {
    /*
        Create a new instance of the ListYourIssues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GitHub/IssuesAPI/Issues/ListYourIssues"
    ListYourIssues.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListYourIssuesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListYourIssuesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListYourIssues
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListYourIssuesInputSet = function() {
    ListYourIssuesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Direction input for this Choreo. ((optional, string) The direction of the sort order. Valid values are: asc or desc (the default).)
        */
        this.set_Direction = function(value) {
            this.setInput("Direction", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) Filters issues using one of the following strings: assigned (the default), created, mentioned, subscribed.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Labels input for this Choreo. ((optional, string) A comma separated list of label names (i.e. bug, ui, etc).)
        */
        this.set_Labels = function(value) {
            this.setInput("Labels", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates the page index that you want to retrieve. This is used to page through many results. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Since input for this Choreo. ((optional, date) A timestamp in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Returns issues since this date.)
        */
        this.set_Since = function(value) {
            this.setInput("Since", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Indicates how the issues will be sorted in the response. Valid sort options are: created (the default), updated, comments.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Returns issues with a particular state: open (the default) or closed.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListYourIssues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListYourIssuesResultSet = function(resultStream) {
    ListYourIssuesResultSet.super_.call(this, resultStream);    
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

util.inherits(ListYourIssues, choreography.Choreography);
util.inherits(ListYourIssuesInputSet, choreography.InputSet);
util.inherits(ListYourIssuesResultSet, choreography.ResultSet);
exports.ListYourIssues = ListYourIssues;

