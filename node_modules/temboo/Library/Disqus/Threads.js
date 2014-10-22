
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CloseThread
    Close a thread.
*/


var CloseThread = function(session) {
    /*
        Create a new instance of the CloseThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/CloseThread"
    CloseThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CloseThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CloseThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CloseThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CloseThreadInputSet = function() {
    CloseThreadInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) A forum ID. Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread that is to be closed. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadByIdentification cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((conditional, string) The identifier to retrieve associated thread details.  Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((conditional, string) The link pointing to the thread that is to be closed. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CloseThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CloseThreadResultSet = function(resultStream) {
    CloseThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CloseThread, choreography.Choreography);
util.inherits(CloseThreadInputSet, choreography.InputSet);
util.inherits(CloseThreadResultSet, choreography.ResultSet);
exports.CloseThread = CloseThread;


/*
    CreateThread
    Creates a new thread.
*/


var CreateThread = function(session) {
    /*
        Create a new instance of the CreateThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/CreateThread"
    CreateThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateThreadInputSet = function() {
    CreateThreadInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((optional, string) The id of a category associated with the thread being created.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date to be associated with this thread (as a unix timestamp or ISO datetime format).)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((required, string) The ID of an existing forum (AKA the forum short name).)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the Identifier input for this Choreo. ((optional, string) An optional string identifier for the thread. Maximum length is 300.)
        */
        this.set_Identifier = function(value) {
            this.setInput("Identifier", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((optional, string) A message for the new thread.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the thread.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) A URL to be associated with the thread. Maximum length is 500.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateThreadResultSet = function(resultStream) {
    CreateThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateThread, choreography.Choreography);
util.inherits(CreateThreadInputSet, choreography.InputSet);
util.inherits(CreateThreadResultSet, choreography.ResultSet);
exports.CreateThread = CreateThread;


/*
    ListPosts
    Retrieve a list of posts within a thread.
*/


var ListPosts = function(session) {
    /*
        Create a new instance of the ListPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/ListPosts"
    ListPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPostsInputSet = function() {
    ListPostsInputSet.super_.call(this);
        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Default is set to null.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) A Disqus forum ID (AKA a short name). If null, threads from all forums moderated by the authenticating user will be retrieved.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) Specify a post status parameter to filter results by. Valid parameters include: unapproved, approved, spam, deleted, flagged.  Default is set to: approved.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Maximum value is 100.  Defaults to 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) The sort order of the results. Valid values are: asc or desc. Default is set to: asc.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string to limit results.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Specify a related thread or forum that are to be included in the response.  Valid entries include: forum.)
        */
        this.set_Related = function(value) {
            this.setInput("Related", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Since input for this Choreo. ((optional, integer) A Unix timestamp (or ISO datetime standard) to obtain results from. Default is set to null.)
        */
        this.set_Since = function(value) {
            this.setInput("Since", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, string) A Thread ID to narrow post search results. Required unless specifying ThreadIdentifier or ThreadLink.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((conditional, string) An identifier to retrieve associated thread details. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((conditional, string) A link pointing to the thread that is to be retrieved. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPostsResultSet = function(resultStream) {
    ListPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPosts, choreography.Choreography);
util.inherits(ListPostsInputSet, choreography.InputSet);
util.inherits(ListPostsResultSet, choreography.ResultSet);
exports.ListPosts = ListPosts;


/*
    ListThreads
    Retrieve a list of threads ordered by date of creation.
*/


var ListThreads = function(session) {
    /*
        Create a new instance of the ListThreads Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/ListThreads"
    ListThreads.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListThreadsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListThreadsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListThreads
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListThreadsInputSet = function() {
    ListThreadsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the AuthorID input for this Choreo. ((optional, integer) A Disqus User ID, for which threads will be retrieved. If AuthorID is set, then AuthorUsername must be null.)
        */
        this.set_AuthorID = function(value) {
            this.setInput("AuthorID", value);
        }

        /*
        Set the value of the AuthorUsername input for this Choreo. ((optional, string) A Disqus username for which threads will be retrieved.  If AuthorUsername is being set, then AuthorID must be null.)
        */
        this.set_AuthorUsername = function(value) {
            this.setInput("AuthorUsername", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((optional, integer) Specify a category ID for which threads wil be retrieved.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Default is set to null.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, string) A Disqus forum name to display all threads contained in that specified forum.  If null, threads from all forums moderated by the authenticating user will be retrieved.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) Specify a post status parameter to filter results by. Valid parameters include: open, closed, killed.  Default is set to: open, closed.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Maximum value is 100.  Defaults to 25.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) The sort order for the results. Valid values are: asc or desc. Default is set to: asc.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Specify a related thread or forum that are to be included in the response.  Valid entries include: author, or category.)
        */
        this.set_Related = function(value) {
            this.setInput("Related", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default), jsonp, or rss.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SinceID input for this Choreo. ((optional, integer) A Unix timestamp (or ISO datetime standard) to obtain results from. Default is set to null.)
        */
        this.set_SinceID = function(value) {
            this.setInput("SinceID", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((optional, string) A Thread ID to narrow search results.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((optional, string) An identifier to retrieve associated threads. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((optional, string) A link pointing to the thread that is to be retrieved. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListThreads Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListThreadsResultSet = function(resultStream) {
    ListThreadsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListThreads, choreography.Choreography);
util.inherits(ListThreadsInputSet, choreography.InputSet);
util.inherits(ListThreadsResultSet, choreography.ResultSet);
exports.ListThreads = ListThreads;


/*
    OpenThread
    Open a thread.
*/


var OpenThread = function(session) {
    /*
        Create a new instance of the OpenThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/OpenThread"
    OpenThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new OpenThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new OpenThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the OpenThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var OpenThreadInputSet = function() {
    OpenThreadInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of the thread that is to be opened.  Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((conditional, string) The identifier of the thread that is to be opened. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((conditional, string) A link pointing to the thread that is to be opened. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the OpenThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var OpenThreadResultSet = function(resultStream) {
    OpenThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(OpenThread, choreography.Choreography);
util.inherits(OpenThreadInputSet, choreography.InputSet);
util.inherits(OpenThreadResultSet, choreography.ResultSet);
exports.OpenThread = OpenThread;


/*
    RemoveThread
    Remove a thread.
*/


var RemoveThread = function(session) {
    /*
        Create a new instance of the RemoveThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/RemoveThread"
    RemoveThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveThreadInputSet = function() {
    RemoveThreadInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of a thread that is to be removed.  Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread that is to be removed. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((optional, string) The identifier for the thread that is to be removed.  Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((optional, string) A link pointing to the thread that is to be removed. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RemoveThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveThreadResultSet = function(resultStream) {
    RemoveThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveThread, choreography.Choreography);
util.inherits(RemoveThreadInputSet, choreography.InputSet);
util.inherits(RemoveThreadResultSet, choreography.ResultSet);
exports.RemoveThread = RemoveThread;


/*
    RestoreThread
    Restore a thread.
*/


var RestoreThread = function(session) {
    /*
        Create a new instance of the RestoreThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/RestoreThread"
    RestoreThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RestoreThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RestoreThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RestoreThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RestoreThreadInputSet = function() {
    RestoreThreadInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of a thread that is to be restored.  Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread that is to be restored. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((optional, string) The identifier for the thread that is to be restored.  Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((optional, string) A link pointing to the thread that is to be restored. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RestoreThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RestoreThreadResultSet = function(resultStream) {
    RestoreThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RestoreThread, choreography.Choreography);
util.inherits(RestoreThreadInputSet, choreography.InputSet);
util.inherits(RestoreThreadResultSet, choreography.ResultSet);
exports.RestoreThread = RestoreThread;


/*
    SubscribeToThread
    Subscribe to a thread.
*/


var SubscribeToThread = function(session) {
    /*
        Create a new instance of the SubscribeToThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/SubscribeToThread"
    SubscribeToThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SubscribeToThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SubscribeToThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SubscribeToThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SubscribeToThreadInputSet = function() {
    SubscribeToThreadInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((optional, string) An email address to use when subscribing to the thread.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of a thread that is to be subscribed to. Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) Enter an ID of a thread that is to be subscribed to. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((conditional, string) The identifier for the thread that is to be subscribed to.  Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((conditional, string) A link pointing to the thread that is to be subscribed to. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the SubscribeToThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SubscribeToThreadResultSet = function(resultStream) {
    SubscribeToThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SubscribeToThread, choreography.Choreography);
util.inherits(SubscribeToThreadInputSet, choreography.InputSet);
util.inherits(SubscribeToThreadResultSet, choreography.ResultSet);
exports.SubscribeToThread = SubscribeToThread;


/*
    ThreadDetails
    Obtain thread details.
*/


var ThreadDetails = function(session) {
    /*
        Create a new instance of the ThreadDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/ThreadDetails"
    ThreadDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ThreadDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ThreadDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ThreadDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ThreadDetailsInputSet = function() {
    ThreadDetailsInputSet.super_.call(this);
        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) A forum ID.  Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Specify a related thread or forum that are to be included in the response.  Valid entries include: author, category, or forum.)
        */
        this.set_Related = function(value) {
            this.setInput("Related", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread that is to be retrieved. Required unless specifying ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((conditional, string) The identifier to retrieve associated thread details. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((conditional, string) A link pointing to the thread that is to be retrieved. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ThreadDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ThreadDetailsResultSet = function(resultStream) {
    ThreadDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ThreadDetails, choreography.Choreography);
util.inherits(ThreadDetailsInputSet, choreography.InputSet);
util.inherits(ThreadDetailsResultSet, choreography.ResultSet);
exports.ThreadDetails = ThreadDetails;


/*
    UnsubscribeFromThread
    Unsubscribe from a thread.
*/


var UnsubscribeFromThread = function(session) {
    /*
        Create a new instance of the UnsubscribeFromThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/UnsubscribeFromThread"
    UnsubscribeFromThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnsubscribeFromThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnsubscribeFromThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnsubscribeFromThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnsubscribeFromThreadInputSet = function() {
    UnsubscribeFromThreadInputSet.super_.call(this);
        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address that will be unsubsribed from the thread.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of a thread that is to be unsubscribed from. Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((conditional, integer) The ID of a thread that is to be unsubscribed from. Required unless specifying the ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((optional, string) The identifier for the thread that is to be unsubscribed from.  Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((optional, string) A link pointing to the thread that is to be unsubscribed from. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the UnsubscribeFromThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnsubscribeFromThreadResultSet = function(resultStream) {
    UnsubscribeFromThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnsubscribeFromThread, choreography.Choreography);
util.inherits(UnsubscribeFromThreadInputSet, choreography.InputSet);
util.inherits(UnsubscribeFromThreadResultSet, choreography.ResultSet);
exports.UnsubscribeFromThread = UnsubscribeFromThread;


/*
    VoteOnThread
    Vote on a thread.
*/


var VoteOnThread = function(session) {
    /*
        Create a new instance of the VoteOnThread Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Threads/VoteOnThread"
    VoteOnThread.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VoteOnThreadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VoteOnThreadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VoteOnThread
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VoteOnThreadInputSet = function() {
    VoteOnThreadInputSet.super_.call(this);
        /*
        Set the value of the Forum input for this Choreo. ((optional, integer) The forum ID of a thread that is being voted on. Required if setting either ThreadByIdentification, or ThreadByLink.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and jsonp.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ThreadID input for this Choreo. ((optional, integer) The ID of a thread that is being voted on. Required unless specifying the ThreadIdentifier or ThreadLink. If using this parameter, ThreadIdentifier cannot be set.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
        }

        /*
        Set the value of the ThreadIdentifier input for this Choreo. ((optional, string) The identifier for the thread that is being voted on. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadLink cannot be used.)
        */
        this.set_ThreadIdentifier = function(value) {
            this.setInput("ThreadIdentifier", value);
        }

        /*
        Set the value of the ThreadLink input for this Choreo. ((optional, string) A link pointing to the thread that is being voted on. Note that a Forum must also be provided when using this parameter. If set, ThreadID and ThreadIdentifier cannot be set.)
        */
        this.set_ThreadLink = function(value) {
            this.setInput("ThreadLink", value);
        }

        /*
        Set the value of the Vote input for this Choreo. ((required, integer) A numberic value for your vote. Valid choices are: -1, 0, or 1.)
        */
        this.set_Vote = function(value) {
            this.setInput("Vote", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the VoteOnThread Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VoteOnThreadResultSet = function(resultStream) {
    VoteOnThreadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VoteOnThread, choreography.Choreography);
util.inherits(VoteOnThreadInputSet, choreography.InputSet);
util.inherits(VoteOnThreadResultSet, choreography.ResultSet);
exports.VoteOnThread = VoteOnThread;

