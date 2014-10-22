
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ApprovePosts
    Approves a post.
*/


var ApprovePosts = function(session) {
    /*
        Create a new instance of the ApprovePosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/ApprovePosts"
    ApprovePosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ApprovePostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ApprovePostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ApprovePosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ApprovePostsInputSet = function() {
    ApprovePostsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be approved. Note that you must be a forum moderator to approve posts.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ApprovePosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ApprovePostsResultSet = function(resultStream) {
    ApprovePostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ApprovePosts, choreography.Choreography);
util.inherits(ApprovePostsInputSet, choreography.InputSet);
util.inherits(ApprovePostsResultSet, choreography.ResultSet);
exports.ApprovePosts = ApprovePosts;


/*
    CreateAnonymousPost
    Creates an anonymous post.
*/


var CreateAnonymousPost = function(session) {
    /*
        Create a new instance of the CreateAnonymousPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/CreateAnonymousPost"
    CreateAnonymousPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAnonymousPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAnonymousPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAnonymousPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAnonymousPostInputSet = function() {
    CreateAnonymousPostInputSet.super_.call(this);
        /*
        Set the value of the AuthorEmail input for this Choreo. ((required, string) The email address of the post author.)
        */
        this.set_AuthorEmail = function(value) {
            this.setInput("AuthorEmail", value);
        }

        /*
        Set the value of the AuthorName input for this Choreo. ((optional, string) The name of the post author.)
        */
        this.set_AuthorName = function(value) {
            this.setInput("AuthorName", value);
        }

        /*
        Set the value of the AuthorURL input for this Choreo. ((optional, string) The URL of the author's Disqus profile.)
        */
        this.set_AuthorURL = function(value) {
            this.setInput("AuthorURL", value);
        }

        /*
        Set the value of the ParentPost input for this Choreo. ((conditional, string) The ID of a parent post to which the new post will be responding to. Either ParentPost, or Thread must be set, or both.)
        */
        this.set_ParentPost = function(value) {
            this.setInput("ParentPost", value);
        }

        /*
        Set the value of the PostContent input for this Choreo. ((required, string) The text of this post.)
        */
        this.set_PostContent = function(value) {
            this.setInput("PostContent", value);
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
        Set the value of the Thread input for this Choreo. ((conditional, string) The thread ID to attach the new post to. Either ParentPost, or Thread must be set, or both.)
        */
        this.set_Thread = function(value) {
            this.setInput("Thread", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateAnonymousPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAnonymousPostResultSet = function(resultStream) {
    CreateAnonymousPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAnonymousPost, choreography.Choreography);
util.inherits(CreateAnonymousPostInputSet, choreography.InputSet);
util.inherits(CreateAnonymousPostResultSet, choreography.ResultSet);
exports.CreateAnonymousPost = CreateAnonymousPost;


/*
    CreateAuthenticatedPost
    Create a new post for the authenticated user.
*/


var CreateAuthenticatedPost = function(session) {
    /*
        Create a new instance of the CreateAuthenticatedPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/CreateAuthenticatedPost"
    CreateAuthenticatedPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAuthenticatedPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAuthenticatedPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAuthenticatedPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAuthenticatedPostInputSet = function() {
    CreateAuthenticatedPostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) The date of the post, either in Unix timestamp format, or ISO datetime standard. You must be a moderator to do this.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the IPAddress input for this Choreo. ((optional, string) The author's IP address. You must be a moderator to do this.)
        */
        this.set_IPAddress = function(value) {
            this.setInput("IPAddress", value);
        }

        /*
        Set the value of the ParentPost input for this Choreo. ((conditional, string) The ID of a parent post to which the new post will be responding to. Either ParentPost, or Thread must be set, or both.)
        */
        this.set_ParentPost = function(value) {
            this.setInput("ParentPost", value);
        }

        /*
        Set the value of the PostContent input for this Choreo. ((required, string) The text of this post.)
        */
        this.set_PostContent = function(value) {
            this.setInput("PostContent", value);
        }

        /*
        Set the value of the PostState input for this Choreo. ((optional, string) Specify the state of the post (comment). Available options include: unapproved, approved, spam, killed. You must be a moderator to do this. If set, pre-approval validation will be skipped.)
        */
        this.set_PostState = function(value) {
            this.setInput("PostState", value);
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
        Set the value of the Thread input for this Choreo. ((conditional, string) The thread ID to attach the new post to. Either ParentPost, or Thread must be set, or both.)
        */
        this.set_Thread = function(value) {
            this.setInput("Thread", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateAuthenticatedPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAuthenticatedPostResultSet = function(resultStream) {
    CreateAuthenticatedPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAuthenticatedPost, choreography.Choreography);
util.inherits(CreateAuthenticatedPostInputSet, choreography.InputSet);
util.inherits(CreateAuthenticatedPostResultSet, choreography.ResultSet);
exports.CreateAuthenticatedPost = CreateAuthenticatedPost;


/*
    HighlightPost
    Highlight a post.
*/


var HighlightPost = function(session) {
    /*
        Create a new instance of the HighlightPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/HighlightPost"
    HighlightPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HighlightPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HighlightPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HighlightPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HighlightPostInputSet = function() {
    HighlightPostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be highlighted.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the HighlightPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HighlightPostResultSet = function(resultStream) {
    HighlightPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HighlightPost, choreography.Choreography);
util.inherits(HighlightPostInputSet, choreography.InputSet);
util.inherits(HighlightPostResultSet, choreography.ResultSet);
exports.HighlightPost = HighlightPost;


/*
    ListPosts
    Retrieve a list of posts ordered by date of creation.
*/


var ListPosts = function(session) {
    /*
        Create a new instance of the ListPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/ListPosts"
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
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((optional, integer) Specify a category ID for which posts wil be retrieved.)
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
        Set the value of the Forum input for this Choreo. ((optional, string) A Disqus forum name to display all posts contained in that specified forum.  If null, posts from all forums moderated by the authenticating user will be retrieved.)
        */
        this.set_Forum = function(value) {
            this.setInput("Forum", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) A post status parameter to filter results by. Valid parameters include: unapproved, approved, spam, deleted, flagged, highlighted.  Default is set to: approved.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of records to return. Defaults to 25.)
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
        Set the value of the Query input for this Choreo. ((optional, string) A search string to retrieve posts mathching the query.  Default is set to null.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Specify a related thread or forum that are to be included in the response.  Valid entries include: thread, or forum.)
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
        Set the value of the ThreadID input for this Choreo. ((optional, string) The Thread ID to narrow post search results.)
        */
        this.set_ThreadID = function(value) {
            this.setInput("ThreadID", value);
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
    MarkAsSpam
    Mark a post as spam.
*/


var MarkAsSpam = function(session) {
    /*
        Create a new instance of the MarkAsSpam Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/MarkAsSpam"
    MarkAsSpam.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MarkAsSpamResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MarkAsSpamInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MarkAsSpam
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MarkAsSpamInputSet = function() {
    MarkAsSpamInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be marked as spam.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the MarkAsSpam Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MarkAsSpamResultSet = function(resultStream) {
    MarkAsSpamResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MarkAsSpam, choreography.Choreography);
util.inherits(MarkAsSpamInputSet, choreography.InputSet);
util.inherits(MarkAsSpamResultSet, choreography.ResultSet);
exports.MarkAsSpam = MarkAsSpam;


/*
    PostDetails
    Obtain information about a post.
*/


var PostDetails = function(session) {
    /*
        Create a new instance of the PostDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/PostDetails"
    PostDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PostDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostDetailsInputSet = function() {
    PostDetailsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID for which information will be returned.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
        }

        /*
        Set the value of the PublicKey input for this Choreo. ((required, string) The Public Key provided by Disqus (AKA the API Key).)
        */
        this.set_PublicKey = function(value) {
            this.setInput("PublicKey", value);
        }

        /*
        Set the value of the Related input for this Choreo. ((optional, string) Specify a related thread or forum that are to be included in the response.  Valid entries include: thread, or forum.)
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the PostDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostDetailsResultSet = function(resultStream) {
    PostDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PostDetails, choreography.Choreography);
util.inherits(PostDetailsInputSet, choreography.InputSet);
util.inherits(PostDetailsResultSet, choreography.ResultSet);
exports.PostDetails = PostDetails;


/*
    RemovePost
    Remove a post.
*/


var RemovePost = function(session) {
    /*
        Create a new instance of the RemovePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/RemovePost"
    RemovePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemovePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemovePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemovePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemovePostInputSet = function() {
    RemovePostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be removed.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RemovePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemovePostResultSet = function(resultStream) {
    RemovePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemovePost, choreography.Choreography);
util.inherits(RemovePostInputSet, choreography.InputSet);
util.inherits(RemovePostResultSet, choreography.ResultSet);
exports.RemovePost = RemovePost;


/*
    ReportPost
    Report (flag) a post.
*/


var ReportPost = function(session) {
    /*
        Create a new instance of the ReportPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/ReportPost"
    ReportPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReportPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReportPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReportPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReportPostInputSet = function() {
    ReportPostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be reported (flagged).)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ReportPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReportPostResultSet = function(resultStream) {
    ReportPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReportPost, choreography.Choreography);
util.inherits(ReportPostInputSet, choreography.InputSet);
util.inherits(ReportPostResultSet, choreography.ResultSet);
exports.ReportPost = ReportPost;


/*
    RestorePost
    Restore a deleted post.
*/


var RestorePost = function(session) {
    /*
        Create a new instance of the RestorePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/RestorePost"
    RestorePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RestorePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RestorePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RestorePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RestorePostInputSet = function() {
    RestorePostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be restored (undeleted).)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RestorePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RestorePostResultSet = function(resultStream) {
    RestorePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RestorePost, choreography.Choreography);
util.inherits(RestorePostInputSet, choreography.InputSet);
util.inherits(RestorePostResultSet, choreography.ResultSet);
exports.RestorePost = RestorePost;


/*
    UnhighlightPost
    Unhighlight a previously highlighted post.
*/


var UnhighlightPost = function(session) {
    /*
        Create a new instance of the UnhighlightPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/UnhighlightPost"
    UnhighlightPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnhighlightPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnhighlightPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnhighlightPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnhighlightPostInputSet = function() {
    UnhighlightPostInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth 2.0 access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID which is to be unhighlighted.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the UnhighlightPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnhighlightPostResultSet = function(resultStream) {
    UnhighlightPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnhighlightPost, choreography.Choreography);
util.inherits(UnhighlightPostInputSet, choreography.InputSet);
util.inherits(UnhighlightPostResultSet, choreography.ResultSet);
exports.UnhighlightPost = UnhighlightPost;


/*
    VoteOnPost
    Register a vote on a post.
*/


var VoteOnPost = function(session) {
    /*
        Create a new instance of the VoteOnPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Disqus/Posts/VoteOnPost"
    VoteOnPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VoteOnPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VoteOnPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VoteOnPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VoteOnPostInputSet = function() {
    VoteOnPostInputSet.super_.call(this);
        /*
        Set the value of the PostID input for this Choreo. ((required, integer) The post ID for which a vote is being registered.)
        */
        this.set_PostID = function(value) {
            this.setInput("PostID", value);
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
        Set the value of the Vote input for this Choreo. ((required, integer) A numeric value for your vote. Valid choices are: -1, 0, or 1.)
        */
        this.set_Vote = function(value) {
            this.setInput("Vote", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the VoteOnPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VoteOnPostResultSet = function(resultStream) {
    VoteOnPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Disqus.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VoteOnPost, choreography.Choreography);
util.inherits(VoteOnPostInputSet, choreography.InputSet);
util.inherits(VoteOnPostResultSet, choreography.ResultSet);
exports.VoteOnPost = VoteOnPost;

