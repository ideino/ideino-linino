
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRequest
    Creates a new end-user request.
*/


var CreateRequest = function(session) {
    /*
        Create a new instance of the CreateRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/CreateRequest"
    CreateRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRequestInputSet = function() {
    CreateRequestInputSet.super_.call(this);
        /*
        Set the value of the RequestData input for this Choreo. ((optional, json) A JSON-formatted string containing the request properties you wish to set. This can be used as an alternative to setting individual inputs representing request properties.)
        */
        this.set_RequestData = function(value) {
            this.setInput("RequestData", value);
        }

        /*
        Set the value of the Comment input for this Choreo. ((conditional, string) A comment associated with the request.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Priority input for this Choreo. ((conditional, string) Priority (e.g. low, normal, high, urgent). Defaults to normal.)
        */
        this.set_Priority = function(value) {
            this.setInput("Priority", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((conditional, string) The subject of the request.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((conditional, string) Type of request (e.g.question, incident, problem, task). Defaults to incident.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRequestResultSet = function(resultStream) {
    CreateRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateRequest, choreography.Choreography);
util.inherits(CreateRequestInputSet, choreography.InputSet);
util.inherits(CreateRequestResultSet, choreography.ResultSet);
exports.CreateRequest = CreateRequest;


/*
    GetComment
    Retrieves the specified comment from a request.
*/


var GetComment = function(session) {
    /*
        Create a new instance of the GetComment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/GetComment"
    GetComment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommentInputSet = function() {
    GetCommentInputSet.super_.call(this);
        /*
        Set the value of the CommentID input for this Choreo. ((required, string) The ID of the comment to retrieve.)
        */
        this.set_CommentID = function(value) {
            this.setInput("CommentID", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RequestID input for this Choreo. ((required, string) The ID of the request that has been commented on.)
        */
        this.set_RequestID = function(value) {
            this.setInput("RequestID", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetComment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommentResultSet = function(resultStream) {
    GetCommentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComment, choreography.Choreography);
util.inherits(GetCommentInputSet, choreography.InputSet);
util.inherits(GetCommentResultSet, choreography.ResultSet);
exports.GetComment = GetComment;


/*
    GetRequest
    Retrieves the request for the specified ID.
*/


var GetRequest = function(session) {
    /*
        Create a new instance of the GetRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/GetRequest"
    GetRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRequestInputSet = function() {
    GetRequestInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the request to retrieve.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Comma-seperated list of request statuses to match (e.g. hold, open, solved, ccd))
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRequestResultSet = function(resultStream) {
    GetRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRequest, choreography.Choreography);
util.inherits(GetRequestInputSet, choreography.InputSet);
util.inherits(GetRequestResultSet, choreography.ResultSet);
exports.GetRequest = GetRequest;


/*
    ListAllRequests
    List all existing requests for your account.
*/


var ListAllRequests = function(session) {
    /*
        Create a new instance of the ListAllRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/ListAllRequests"
    ListAllRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllRequestsInputSet = function() {
    ListAllRequestsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Comma-seperated list of request statuses to match (e.g. hold, open, solved, ccd))
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllRequestsResultSet = function(resultStream) {
    ListAllRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllRequests, choreography.Choreography);
util.inherits(ListAllRequestsInputSet, choreography.InputSet);
util.inherits(ListAllRequestsResultSet, choreography.ResultSet);
exports.ListAllRequests = ListAllRequests;


/*
    ListComments
    Lists all comments for the specifed request.
*/


var ListComments = function(session) {
    /*
        Create a new instance of the ListComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/ListComments"
    ListComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListCommentsInputSet = function() {
    ListCommentsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the request to retrieve comments for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListCommentsResultSet = function(resultStream) {
    ListCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(ListComments, choreography.Choreography);
util.inherits(ListCommentsInputSet, choreography.InputSet);
util.inherits(ListCommentsResultSet, choreography.ResultSet);
exports.ListComments = ListComments;


/*
    ListOrganizationRequests
    List all requests for the specified organization.
*/


var ListOrganizationRequests = function(session) {
    /*
        Create a new instance of the ListOrganizationRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/ListOrganizationRequests"
    ListOrganizationRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListOrganizationRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListOrganizationRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListOrganizationRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListOrganizationRequestsInputSet = function() {
    ListOrganizationRequestsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the organization to list requests for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Comma-seperated list of request statuses to match (e.g. hold, open, solved, ccd))
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListOrganizationRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListOrganizationRequestsResultSet = function(resultStream) {
    ListOrganizationRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListOrganizationRequests, choreography.Choreography);
util.inherits(ListOrganizationRequestsInputSet, choreography.InputSet);
util.inherits(ListOrganizationRequestsResultSet, choreography.ResultSet);
exports.ListOrganizationRequests = ListOrganizationRequests;


/*
    ListUserRequests
    List all requests that are tied to a specified user.
*/


var ListUserRequests = function(session) {
    /*
        Create a new instance of the ListUserRequests Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/ListUserRequests"
    ListUserRequests.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUserRequestsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUserRequestsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUserRequests
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUserRequestsInputSet = function() {
    ListUserRequestsInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The ID of the user to list requests for.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page number of the results to be returned. Used together with the PerPage parameter to paginate a large set of results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of results to return per page. Maximum is 100 and default is 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Comma-seperated list of request statuses to match (e.g. hold, open, solved, ccd))
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUserRequests Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUserRequestsResultSet = function(resultStream) {
    ListUserRequestsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NextPage" output from this Choreo execution. ((integer) The index for the next page of results.)
        */
        this.get_NextPage = function() {
            return this.getResult("NextPage");
        }
        /*
        Retrieve the value for the "PreviousPage" output from this Choreo execution. ((integer) The index for the previous page of results.)
        */
        this.get_PreviousPage = function() {
            return this.getResult("PreviousPage");
        }
}

util.inherits(ListUserRequests, choreography.Choreography);
util.inherits(ListUserRequestsInputSet, choreography.InputSet);
util.inherits(ListUserRequestsResultSet, choreography.ResultSet);
exports.ListUserRequests = ListUserRequests;


/*
    UpdateRequest
    Updates an existing request.
*/


var UpdateRequest = function(session) {
    /*
        Create a new instance of the UpdateRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Zendesk/Requests/UpdateRequest"
    UpdateRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateRequestInputSet = function() {
    UpdateRequestInputSet.super_.call(this);
        /*
        Set the value of the RequestData input for this Choreo. ((optional, json) A JSON-formatted string containing the request properties you wish to set. This can be used as an alternative to setting individual inputs representing request properties.)
        */
        this.set_RequestData = function(value) {
            this.setInput("RequestData", value);
        }

        /*
        Set the value of the Comment input for this Choreo. ((conditional, string) A comment associated with the request.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address you use to login to your Zendesk account.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((conditional, string) The ID of the request to update.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Zendesk password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Priority input for this Choreo. ((conditional, string) Priority (e.g. low, normal, high, urgent). Defaults to normal.)
        */
        this.set_Priority = function(value) {
            this.setInput("Priority", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((required, string) Your Zendesk domain and subdomain (e.g., temboocare.zendesk.com).)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((conditional, string) The subject of the request.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((conditional, string) Type of request (e.g.question, incident, problem, task). Defaults to incident.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateRequestResultSet = function(resultStream) {
    UpdateRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Zendesk.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateRequest, choreography.Choreography);
util.inherits(UpdateRequestInputSet, choreography.InputSet);
util.inherits(UpdateRequestResultSet, choreography.ResultSet);
exports.UpdateRequest = UpdateRequest;

