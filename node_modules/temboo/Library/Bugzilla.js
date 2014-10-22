
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListAttachmentsForBug
    List attachments associated with a specifig Bug ID.
*/


var ListAttachmentsForBug = function(session) {
    /*
        Create a new instance of the ListAttachmentsForBug Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/ListAttachmentsForBug"
    ListAttachmentsForBug.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAttachmentsForBugResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAttachmentsForBugInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAttachmentsForBug
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAttachmentsForBugInputSet = function() {
    ListAttachmentsForBugInputSet.super_.call(this);
        /*
        Set the value of the AttachmentsWithData input for this Choreo. ((optional, integer) Enter 1 to obtain full bug attachments data.  If null, only attachments fields will be returned with no associated data.)
        */
        this.set_AttachmentsWithData = function(value) {
            this.setInput("AttachmentsWithData", value);
        }

        /*
        Set the value of the BugID input for this Choreo. ((required, integer) Enter a Bug ID, for which information will be retrieved.)
        */
        this.set_BugID = function(value) {
            this.setInput("BugID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAttachmentsForBug Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAttachmentsForBugResultSet = function(resultStream) {
    ListAttachmentsForBugResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAttachmentsForBug, choreography.Choreography);
util.inherits(ListAttachmentsForBugInputSet, choreography.InputSet);
util.inherits(ListAttachmentsForBugResultSet, choreography.ResultSet);
exports.ListAttachmentsForBug = ListAttachmentsForBug;


/*
    ListBugComments
    Retrieve comments for a specifed Bug ID.
*/


var ListBugComments = function(session) {
    /*
        Create a new instance of the ListBugComments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/ListBugComments"
    ListBugComments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBugCommentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBugCommentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBugComments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBugCommentsInputSet = function() {
    ListBugCommentsInputSet.super_.call(this);
        /*
        Set the value of the BugID input for this Choreo. ((required, integer) Enter a Bug ID, for which information will be retrieved.)
        */
        this.set_BugID = function(value) {
            this.setInput("BugID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListBugComments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBugCommentsResultSet = function(resultStream) {
    ListBugCommentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListBugComments, choreography.Choreography);
util.inherits(ListBugCommentsInputSet, choreography.InputSet);
util.inherits(ListBugCommentsResultSet, choreography.ResultSet);
exports.ListBugComments = ListBugComments;


/*
    ListBugHistory
    Retrieve detailed bug history.
*/


var ListBugHistory = function(session) {
    /*
        Create a new instance of the ListBugHistory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/ListBugHistory"
    ListBugHistory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBugHistoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBugHistoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBugHistory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBugHistoryInputSet = function() {
    ListBugHistoryInputSet.super_.call(this);
        /*
        Set the value of the BugID input for this Choreo. ((required, integer) Enter a Bug ID, for which information will be retrieved.)
        */
        this.set_BugID = function(value) {
            this.setInput("BugID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListBugHistory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBugHistoryResultSet = function(resultStream) {
    ListBugHistoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListBugHistory, choreography.Choreography);
util.inherits(ListBugHistoryInputSet, choreography.InputSet);
util.inherits(ListBugHistoryResultSet, choreography.ResultSet);
exports.ListBugHistory = ListBugHistory;


/*
    RetrieveAttachment
    Retrieve attachments associated with a specifig Bug ID.
*/


var RetrieveAttachment = function(session) {
    /*
        Create a new instance of the RetrieveAttachment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/RetrieveAttachment"
    RetrieveAttachment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveAttachmentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveAttachmentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveAttachment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveAttachmentInputSet = function() {
    RetrieveAttachmentInputSet.super_.call(this);
        /*
        Set the value of the AttachmentID input for this Choreo. ((required, integer) Enter an attachment ID, for which information will be retrieved.)
        */
        this.set_AttachmentID = function(value) {
            this.setInput("AttachmentID", value);
        }

        /*
        Set the value of the AttachmentsWithData input for this Choreo. ((optional, integer) Enter 1 to obtain full bug attachments data.  If null, only attachments fields will be returned with no associated data.)
        */
        this.set_AttachmentsWithData = function(value) {
            this.setInput("AttachmentsWithData", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveAttachment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveAttachmentResultSet = function(resultStream) {
    RetrieveAttachmentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveAttachment, choreography.Choreography);
util.inherits(RetrieveAttachmentInputSet, choreography.InputSet);
util.inherits(RetrieveAttachmentResultSet, choreography.ResultSet);
exports.RetrieveAttachment = RetrieveAttachment;


/*
    RetrieveBug
    Retrieve detailed information for a specifed Bug ID.
*/


var RetrieveBug = function(session) {
    /*
        Create a new instance of the RetrieveBug Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/RetrieveBug"
    RetrieveBug.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveBugResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveBugInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveBug
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveBugInputSet = function() {
    RetrieveBugInputSet.super_.call(this);
        /*
        Set the value of the BugID input for this Choreo. ((required, integer) Enter a Bug ID, for which information will be retrieved.)
        */
        this.set_BugID = function(value) {
            this.setInput("BugID", value);
        }

        /*
        Set the value of the IncludeFields input for this Choreo. ((optional, string) Enter additional parameters to expand the scope of information returned.  For full bug fetch: _all; Or, a comma-separated list: _default, comments, history, attachments.data)
        */
        this.set_IncludeFields = function(value) {
            this.setInput("IncludeFields", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveBug Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveBugResultSet = function(resultStream) {
    RetrieveBugResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveBug, choreography.Choreography);
util.inherits(RetrieveBugInputSet, choreography.InputSet);
util.inherits(RetrieveBugResultSet, choreography.ResultSet);
exports.RetrieveBug = RetrieveBug;


/*
    RetrieveUser
    Retrieve user info.
*/


var RetrieveUser = function(session) {
    /*
        Create a new instance of the RetrieveUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/RetrieveUser"
    RetrieveUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveUserInputSet = function() {
    RetrieveUserInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the QueryUserID input for this Choreo. ((required, string) Enter the user ID for which information is to be returned. Valid input formats include: email address, or numeric user ID.  If searching by numeric ID, authentication is requred.)
        */
        this.set_QueryUserID = function(value) {
            this.setInput("QueryUserID", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((optional, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveUserResultSet = function(resultStream) {
    RetrieveUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveUser, choreography.Choreography);
util.inherits(RetrieveUserInputSet, choreography.InputSet);
util.inherits(RetrieveUserResultSet, choreography.ResultSet);
exports.RetrieveUser = RetrieveUser;


/*
    SearchForBugs
    Search for bugs listed by Mozilla product name.
*/


var SearchForBugs = function(session) {
    /*
        Create a new instance of the SearchForBugs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/SearchForBugs"
    SearchForBugs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchForBugsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchForBugsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchForBugs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchForBugsInputSet = function() {
    SearchForBugsInputSet.super_.call(this);
        /*
        Set the value of the BugChangeDate input for this Choreo. ((optional, string) Retrieve bugs that were changed within a certain date range. For example: 25d will return all bugs changed from 25 days ago untill today.  Or: 3h, to return all bugs entered with 3 hours.)
        */
        this.set_BugChangeDate = function(value) {
            this.setInput("BugChangeDate", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((optional, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Priority input for this Choreo. ((optional, integer) Filter results by priority: For example: enter P1, to get Priority 1 bugs assoicated with a Product.)
        */
        this.set_Priority = function(value) {
            this.setInput("Priority", value);
        }

        /*
        Set the value of the Product input for this Choreo. ((required, string) Enter the Mozilla product for which bugs will be retrieved. For example: Bugzilla)
        */
        this.set_Product = function(value) {
            this.setInput("Product", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Severity input for this Choreo. ((optional, string) Filter results by severity. For example: blocker)
        */
        this.set_Severity = function(value) {
            this.setInput("Severity", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchForBugs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchForBugsResultSet = function(resultStream) {
    SearchForBugsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchForBugs, choreography.Choreography);
util.inherits(SearchForBugsInputSet, choreography.InputSet);
util.inherits(SearchForBugsResultSet, choreography.ResultSet);
exports.SearchForBugs = SearchForBugs;


/*
    SearchForUsers
    Search for a specified Bugzilla user.
*/


var SearchForUsers = function(session) {
    /*
        Create a new instance of the SearchForUsers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bugzilla/SearchForUsers"
    SearchForUsers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchForUsersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchForUsersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchForUsers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchForUsersInputSet = function() {
    SearchForUsersInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Bugzilla password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SearchForUser input for this Choreo. ((required, string) Enter the usename to be querried.)
        */
        this.set_SearchForUser = function(value) {
            this.setInput("SearchForUser", value);
        }

        /*
        Set the value of the Server input for this Choreo. ((optional, string) The base URL for the Bugzilla server to access. Defaults to https://api-dev.bugzilla.mozilla.org/latest. To access the test server, set to https://api-dev.bugzilla.mozilla.org/test/latest.)
        */
        this.set_Server = function(value) {
            this.setInput("Server", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Bugzilla username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchForUsers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchForUsersResultSet = function(resultStream) {
    SearchForUsersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Bugzilla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchForUsers, choreography.Choreography);
util.inherits(SearchForUsersInputSet, choreography.InputSet);
util.inherits(SearchForUsersResultSet, choreography.ResultSet);
exports.SearchForUsers = SearchForUsers;

