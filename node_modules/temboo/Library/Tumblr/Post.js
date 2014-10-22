
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateAudioPostWithURL
    Creates a new audio post using a specified external URL.
*/


var CreateAudioPostWithURL = function(session) {
    /*
        Create a new instance of the CreateAudioPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateAudioPostWithURL"
    CreateAudioPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateAudioPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateAudioPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateAudioPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateAudioPostWithURLInputSet = function() {
    CreateAudioPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the ExternalURL input for this Choreo. ((required, string) The URL of the site that hosts the audio file (not Tumblr).)
        */
        this.set_ExternalURL = function(value) {
            this.setInput("ExternalURL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateAudioPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateAudioPostWithURLResultSet = function(resultStream) {
    CreateAudioPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateAudioPostWithURL, choreography.Choreography);
util.inherits(CreateAudioPostWithURLInputSet, choreography.InputSet);
util.inherits(CreateAudioPostWithURLResultSet, choreography.ResultSet);
exports.CreateAudioPostWithURL = CreateAudioPostWithURL;


/*
    CreateChatPost
    Creates a new chat post for a specified Tumblr blog.
*/


var CreateChatPost = function(session) {
    /*
        Create a new instance of the CreateChatPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateChatPost"
    CreateChatPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateChatPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateChatPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateChatPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateChatPostInputSet = function() {
    CreateChatPostInputSet.super_.call(this);
        /*
        Set the value of the Conversation input for this Choreo. ((required, multiline) The text of the conversation/chat, with dialogue labels (ex: Speaker: Dialogue.)(no HTML). Use separate lines for new lines as well as for a new speaker (include dialogue labels).)
        */
        this.set_Conversation = function(value) {
            this.setInput("Conversation", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the chat.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateChatPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateChatPostResultSet = function(resultStream) {
    CreateChatPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateChatPost, choreography.Choreography);
util.inherits(CreateChatPostInputSet, choreography.InputSet);
util.inherits(CreateChatPostResultSet, choreography.ResultSet);
exports.CreateChatPost = CreateChatPost;


/*
    CreateLinkPost
    Creates a new link post for a specified Tumblr blog.
*/


var CreateLinkPost = function(session) {
    /*
        Create a new instance of the CreateLinkPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateLinkPost"
    CreateLinkPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateLinkPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateLinkPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateLinkPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateLinkPostInputSet = function() {
    CreateLinkPostInputSet.super_.call(this);
        /*
        Set the value of the URL input for this Choreo. ((required, string) The link you want to post.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A user-supplied description. HTML is allowed.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the page the link points to. HTML entities should be escaped.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateLinkPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateLinkPostResultSet = function(resultStream) {
    CreateLinkPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateLinkPost, choreography.Choreography);
util.inherits(CreateLinkPostInputSet, choreography.InputSet);
util.inherits(CreateLinkPostResultSet, choreography.ResultSet);
exports.CreateLinkPost = CreateLinkPost;


/*
    CreatePhotoPostWithImageFile
    Creates a new photo post using an image file that you specify.
*/


var CreatePhotoPostWithImageFile = function(session) {
    /*
        Create a new instance of the CreatePhotoPostWithImageFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreatePhotoPostWithImageFile"
    CreatePhotoPostWithImageFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreatePhotoPostWithImageFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreatePhotoPostWithImageFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreatePhotoPostWithImageFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreatePhotoPostWithImageFileInputSet = function() {
    CreatePhotoPostWithImageFileInputSet.super_.call(this);
        /*
        Set the value of the Data input for this Choreo. ((conditional, string) The Base64-encoded contents of the image you want to post. Required UNLESS uploading a file from a URL using the DataFromURL input variable.)
        */
        this.set_Data = function(value) {
            this.setInput("Data", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The "click-through URL" for the photo.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to an image in the vault that you want to post. Required unless specifying the image contents in the Data input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreatePhotoPostWithImageFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreatePhotoPostWithImageFileResultSet = function(resultStream) {
    CreatePhotoPostWithImageFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreatePhotoPostWithImageFile, choreography.Choreography);
util.inherits(CreatePhotoPostWithImageFileInputSet, choreography.InputSet);
util.inherits(CreatePhotoPostWithImageFileResultSet, choreography.ResultSet);
exports.CreatePhotoPostWithImageFile = CreatePhotoPostWithImageFile;


/*
    CreatePhotoPostWithURL
    Creates a new photo post using a specified source image URL.
*/


var CreatePhotoPostWithURL = function(session) {
    /*
        Create a new instance of the CreatePhotoPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreatePhotoPostWithURL"
    CreatePhotoPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreatePhotoPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreatePhotoPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreatePhotoPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreatePhotoPostWithURLInputSet = function() {
    CreatePhotoPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the Source input for this Choreo. ((required, string) The photo source URL.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The "click-through URL" for the photo.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreatePhotoPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreatePhotoPostWithURLResultSet = function(resultStream) {
    CreatePhotoPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreatePhotoPostWithURL, choreography.Choreography);
util.inherits(CreatePhotoPostWithURLInputSet, choreography.InputSet);
util.inherits(CreatePhotoPostWithURLResultSet, choreography.ResultSet);
exports.CreatePhotoPostWithURL = CreatePhotoPostWithURL;


/*
    CreateQuotePost
    Creates a new text post for a specified Tumblr blog.
*/


var CreateQuotePost = function(session) {
    /*
        Create a new instance of the CreateQuotePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateQuotePost"
    CreateQuotePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateQuotePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateQuotePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateQuotePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateQuotePostInputSet = function() {
    CreateQuotePostInputSet.super_.call(this);
        /*
        Set the value of the Quote input for this Choreo. ((required, string) The full text of the quote.)
        */
        this.set_Quote = function(value) {
            this.setInput("Quote", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((optional, string) The cited source of the quote. HTML is allowed.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateQuotePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateQuotePostResultSet = function(resultStream) {
    CreateQuotePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateQuotePost, choreography.Choreography);
util.inherits(CreateQuotePostInputSet, choreography.InputSet);
util.inherits(CreateQuotePostResultSet, choreography.ResultSet);
exports.CreateQuotePost = CreateQuotePost;


/*
    CreateTextPost
    Creates a new quote post for a specified Tumblr blog.
*/


var CreateTextPost = function(session) {
    /*
        Create a new instance of the CreateTextPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateTextPost"
    CreateTextPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTextPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTextPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTextPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTextPostInputSet = function() {
    CreateTextPostInputSet.super_.call(this);
        /*
        Set the value of the Body input for this Choreo. ((required, string) The full post body, HTML allowed.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The optional title of the post. HTML entities must be escaped.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTextPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTextPostResultSet = function(resultStream) {
    CreateTextPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateTextPost, choreography.Choreography);
util.inherits(CreateTextPostInputSet, choreography.InputSet);
util.inherits(CreateTextPostResultSet, choreography.ResultSet);
exports.CreateTextPost = CreateTextPost;


/*
    CreateVideoPostWithURL
    Creates a new video post using specified HTML embed code.
*/


var CreateVideoPostWithURL = function(session) {
    /*
        Create a new instance of the CreateVideoPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/CreateVideoPostWithURL"
    CreateVideoPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateVideoPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateVideoPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateVideoPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateVideoPostWithURLInputSet = function() {
    CreateVideoPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the Embed input for this Choreo. ((required, string) The HTML embed code for the video (not hosted by Tumblr).)
        */
        this.set_Embed = function(value) {
            this.setInput("Embed", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateVideoPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateVideoPostWithURLResultSet = function(resultStream) {
    CreateVideoPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateVideoPostWithURL, choreography.Choreography);
util.inherits(CreateVideoPostWithURLInputSet, choreography.InputSet);
util.inherits(CreateVideoPostWithURLResultSet, choreography.ResultSet);
exports.CreateVideoPostWithURL = CreateVideoPostWithURL;


/*
    DeletePost
    Deletes a specified post from a Tumblr blog.
*/


var DeletePost = function(session) {
    /*
        Create a new instance of the DeletePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/DeletePost"
    DeletePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePostInputSet = function() {
    DeletePostInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to delete.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePostResultSet = function(resultStream) {
    DeletePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePost, choreography.Choreography);
util.inherits(DeletePostInputSet, choreography.InputSet);
util.inherits(DeletePostResultSet, choreography.ResultSet);
exports.DeletePost = DeletePost;


/*
    EditAudioPostWithURL
    Updates a specified audio post on a Tumblr blog using a specified external URL.
*/


var EditAudioPostWithURL = function(session) {
    /*
        Create a new instance of the EditAudioPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditAudioPostWithURL"
    EditAudioPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditAudioPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditAudioPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditAudioPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditAudioPostWithURLInputSet = function() {
    EditAudioPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the ExternalURL input for this Choreo. ((required, string) The URL of the site that hosts the audio file (not Tumblr).)
        */
        this.set_ExternalURL = function(value) {
            this.setInput("ExternalURL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditAudioPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditAudioPostWithURLResultSet = function(resultStream) {
    EditAudioPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditAudioPostWithURL, choreography.Choreography);
util.inherits(EditAudioPostWithURLInputSet, choreography.InputSet);
util.inherits(EditAudioPostWithURLResultSet, choreography.ResultSet);
exports.EditAudioPostWithURL = EditAudioPostWithURL;


/*
    EditChatPost
    Updates a specified chat post on a Tumblr blog.
*/


var EditChatPost = function(session) {
    /*
        Create a new instance of the EditChatPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditChatPost"
    EditChatPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditChatPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditChatPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditChatPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditChatPostInputSet = function() {
    EditChatPostInputSet.super_.call(this);
        /*
        Set the value of the Conversation input for this Choreo. ((required, multiline) The text of the conversation/chat, with dialogue labels (ex: Speaker: Dialogue.)(no HTML). Use separate lines for new lines as well as for a new speaker (include dialogue labels).)
        */
        this.set_Conversation = function(value) {
            this.setInput("Conversation", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the chat.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditChatPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditChatPostResultSet = function(resultStream) {
    EditChatPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditChatPost, choreography.Choreography);
util.inherits(EditChatPostInputSet, choreography.InputSet);
util.inherits(EditChatPostResultSet, choreography.ResultSet);
exports.EditChatPost = EditChatPost;


/*
    EditLinkPost
    Updates a specified link post on a Tumblr blog.
*/


var EditLinkPost = function(session) {
    /*
        Create a new instance of the EditLinkPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditLinkPost"
    EditLinkPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditLinkPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditLinkPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditLinkPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditLinkPostInputSet = function() {
    EditLinkPostInputSet.super_.call(this);
        /*
        Set the value of the URL input for this Choreo. ((required, string) The link you want to post.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A user-supplied description. HTML is allowed.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, multiline) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title of the page the link points to. HTML entities should be escaped.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditLinkPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditLinkPostResultSet = function(resultStream) {
    EditLinkPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditLinkPost, choreography.Choreography);
util.inherits(EditLinkPostInputSet, choreography.InputSet);
util.inherits(EditLinkPostResultSet, choreography.ResultSet);
exports.EditLinkPost = EditLinkPost;


/*
    EditPhotoPostWithImageFile
    Updates a specified photo post on a Tumblr blog using a provided image file.
*/


var EditPhotoPostWithImageFile = function(session) {
    /*
        Create a new instance of the EditPhotoPostWithImageFile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditPhotoPostWithImageFile"
    EditPhotoPostWithImageFile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditPhotoPostWithImageFileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditPhotoPostWithImageFileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditPhotoPostWithImageFile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditPhotoPostWithImageFileInputSet = function() {
    EditPhotoPostWithImageFileInputSet.super_.call(this);
        /*
        Set the value of the Data input for this Choreo. ((conditional, string) The Base64-encoded contents of the image you want to post.)
        */
        this.set_Data = function(value) {
            this.setInput("Data", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The "click-through URL" for the photo.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to an image in the vault that you want to post. Required unless specifying the image contents in the Data input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the EditPhotoPostWithImageFile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditPhotoPostWithImageFileResultSet = function(resultStream) {
    EditPhotoPostWithImageFileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditPhotoPostWithImageFile, choreography.Choreography);
util.inherits(EditPhotoPostWithImageFileInputSet, choreography.InputSet);
util.inherits(EditPhotoPostWithImageFileResultSet, choreography.ResultSet);
exports.EditPhotoPostWithImageFile = EditPhotoPostWithImageFile;


/*
    EditPhotoPostWithURL
    Updates a specified audio post on a Tumblr blog using a specified source image URL.
*/


var EditPhotoPostWithURL = function(session) {
    /*
        Create a new instance of the EditPhotoPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditPhotoPostWithURL"
    EditPhotoPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditPhotoPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditPhotoPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditPhotoPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditPhotoPostWithURLInputSet = function() {
    EditPhotoPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the Source input for this Choreo. ((required, string) The photo source URL.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((optional, string) The "click-through URL" for the photo.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditPhotoPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditPhotoPostWithURLResultSet = function(resultStream) {
    EditPhotoPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditPhotoPostWithURL, choreography.Choreography);
util.inherits(EditPhotoPostWithURLInputSet, choreography.InputSet);
util.inherits(EditPhotoPostWithURLResultSet, choreography.ResultSet);
exports.EditPhotoPostWithURL = EditPhotoPostWithURL;


/*
    EditQuotePost
    Updates a specified quote post on a Tumblr blog.
*/


var EditQuotePost = function(session) {
    /*
        Create a new instance of the EditQuotePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditQuotePost"
    EditQuotePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditQuotePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditQuotePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditQuotePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditQuotePostInputSet = function() {
    EditQuotePostInputSet.super_.call(this);
        /*
        Set the value of the Quote input for this Choreo. ((required, string) The full text of the quote. HTML entities must be escpaed.)
        */
        this.set_Quote = function(value) {
            this.setInput("Quote", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, any) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((optional, string) The cited source of the quote. HTML is allowed.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditQuotePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditQuotePostResultSet = function(resultStream) {
    EditQuotePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditQuotePost, choreography.Choreography);
util.inherits(EditQuotePostInputSet, choreography.InputSet);
util.inherits(EditQuotePostResultSet, choreography.ResultSet);
exports.EditQuotePost = EditQuotePost;


/*
    EditTextPost
    Updates a specified text post on a Tumblr blog.
*/


var EditTextPost = function(session) {
    /*
        Create a new instance of the EditTextPost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditTextPost"
    EditTextPost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditTextPostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditTextPostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditTextPost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditTextPostInputSet = function() {
    EditTextPostInputSet.super_.call(this);
        /*
        Set the value of the Body input for this Choreo. ((required, string) The full post body, HTML allowed.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The optional title of the post. HTML entities must be escaped.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditTextPost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditTextPostResultSet = function(resultStream) {
    EditTextPostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditTextPost, choreography.Choreography);
util.inherits(EditTextPostInputSet, choreography.InputSet);
util.inherits(EditTextPostResultSet, choreography.ResultSet);
exports.EditTextPost = EditTextPost;


/*
    EditVideoPostWithURL
    Updates a specified video post on a Tumblr blog using specified HTML embed code.
*/


var EditVideoPostWithURL = function(session) {
    /*
        Create a new instance of the EditVideoPostWithURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/EditVideoPostWithURL"
    EditVideoPostWithURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditVideoPostWithURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditVideoPostWithURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditVideoPostWithURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditVideoPostWithURLInputSet = function() {
    EditVideoPostWithURLInputSet.super_.call(this);
        /*
        Set the value of the Embed input for this Choreo. ((required, string) The HTML embed code for the video (not hosted by Tumblr).)
        */
        this.set_Embed = function(value) {
            this.setInput("Embed", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Caption input for this Choreo. ((optional, string) The user-supplied caption. HTML is allowed.)
        */
        this.set_Caption = function(value) {
            this.setInput("Caption", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The GMT date and time of the post. Can be an epoch timestamp in milliseconds or formatted like: Dec 8th, 2011 4:03pm. Defaults to NOW().)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to edit.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Markdown input for this Choreo. ((optional, boolean) Indicates whether the post uses markdown syntax. Defaults to false. Set to 1 to indicate true.)
        */
        this.set_Markdown = function(value) {
            this.setInput("Markdown", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) Adds a short text summary to the end of the post URL.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The state of the post. Specify one of the following:  published, draft, queue. Defaults to published.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Comma-separated tags for this post.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Tweet input for this Choreo. ((optional, string) Manages the autotweet (if enabled) for this post. Defaults to off for no tweet. Enter text to override the default tweet.)
        */
        this.set_Tweet = function(value) {
            this.setInput("Tweet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditVideoPostWithURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditVideoPostWithURLResultSet = function(resultStream) {
    EditVideoPostWithURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditVideoPostWithURL, choreography.Choreography);
util.inherits(EditVideoPostWithURLInputSet, choreography.InputSet);
util.inherits(EditVideoPostWithURLResultSet, choreography.ResultSet);
exports.EditVideoPostWithURL = EditVideoPostWithURL;


/*
    LikePost
    Allows a user to like a specified post.
*/


var LikePost = function(session) {
    /*
        Create a new instance of the LikePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/LikePost"
    LikePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LikePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LikePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LikePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LikePostInputSet = function() {
    LikePostInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to like.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the ReblogKey input for this Choreo. ((required, string) The reblog key for the post id. This can be retrieved with the RetrievePublishedPosts Choreo.)
        */
        this.set_ReblogKey = function(value) {
            this.setInput("ReblogKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LikePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LikePostResultSet = function(resultStream) {
    LikePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LikePost, choreography.Choreography);
util.inherits(LikePostInputSet, choreography.InputSet);
util.inherits(LikePostResultSet, choreography.ResultSet);
exports.LikePost = LikePost;


/*
    RetrieveDraftPosts
    Retrieves a list of queued posts for a specified Tumblr blog.
*/


var RetrieveDraftPosts = function(session) {
    /*
        Create a new instance of the RetrieveDraftPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/RetrieveDraftPosts"
    RetrieveDraftPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveDraftPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveDraftPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveDraftPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveDraftPostsInputSet = function() {
    RetrieveDraftPostsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveDraftPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveDraftPostsResultSet = function(resultStream) {
    RetrieveDraftPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveDraftPosts, choreography.Choreography);
util.inherits(RetrieveDraftPostsInputSet, choreography.InputSet);
util.inherits(RetrieveDraftPostsResultSet, choreography.ResultSet);
exports.RetrieveDraftPosts = RetrieveDraftPosts;


/*
    RetrievePublishedPosts
    Retrieves published posts using various search and filter parameters.
*/


var RetrievePublishedPosts = function(session) {
    /*
        Create a new instance of the RetrievePublishedPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/RetrievePublishedPosts"
    RetrievePublishedPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrievePublishedPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrievePublishedPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrievePublishedPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrievePublishedPostsInputSet = function() {
    RetrievePublishedPostsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((optional, string) Specifies the post format to return. Valid values are: text (Plain text, no HTML), raw (As entered by user). HTML is returned when left null.)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((optional, integer) The specified post ID in order to return a single post.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of posts to return: 1- 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the NotesInfo input for this Choreo. ((optional, boolean) Indicates whether to return notes information (specify true or false). Defaults to 0 (false).)
        */
        this.set_NotesInfo = function(value) {
            this.setInput("NotesInfo", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The post number to start at. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ReblogInfo input for this Choreo. ((optional, boolean) Indicates whether to return reblog information (specify 1 or 0). Defaults to 0 (false).)
        */
        this.set_ReblogInfo = function(value) {
            this.setInput("ReblogInfo", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((optional, string) Limits the response to posts with the specified tag.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of post to return. Specify one of the following:  text, quote, link, answer, video, audio, photo. When null, all types are returned.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrievePublishedPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrievePublishedPostsResultSet = function(resultStream) {
    RetrievePublishedPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrievePublishedPosts, choreography.Choreography);
util.inherits(RetrievePublishedPostsInputSet, choreography.InputSet);
util.inherits(RetrievePublishedPostsResultSet, choreography.ResultSet);
exports.RetrievePublishedPosts = RetrievePublishedPosts;


/*
    RetrieveQueuedPosts
    Retrieves a list of queued posts for a specified Tumblr blog.
*/


var RetrieveQueuedPosts = function(session) {
    /*
        Create a new instance of the RetrieveQueuedPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/RetrieveQueuedPosts"
    RetrieveQueuedPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveQueuedPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveQueuedPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveQueuedPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveQueuedPostsInputSet = function() {
    RetrieveQueuedPostsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveQueuedPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveQueuedPostsResultSet = function(resultStream) {
    RetrieveQueuedPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveQueuedPosts, choreography.Choreography);
util.inherits(RetrieveQueuedPostsInputSet, choreography.InputSet);
util.inherits(RetrieveQueuedPostsResultSet, choreography.ResultSet);
exports.RetrieveQueuedPosts = RetrieveQueuedPosts;


/*
    RetrieveSubmissionPosts
    Retrieves a list of submission posts for a specified Tumblr blog.
*/


var RetrieveSubmissionPosts = function(session) {
    /*
        Create a new instance of the RetrieveSubmissionPosts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/RetrieveSubmissionPosts"
    RetrieveSubmissionPosts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveSubmissionPostsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveSubmissionPostsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveSubmissionPosts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveSubmissionPostsInputSet = function() {
    RetrieveSubmissionPostsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveSubmissionPosts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveSubmissionPostsResultSet = function(resultStream) {
    RetrieveSubmissionPostsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveSubmissionPosts, choreography.Choreography);
util.inherits(RetrieveSubmissionPostsInputSet, choreography.InputSet);
util.inherits(RetrieveSubmissionPostsResultSet, choreography.ResultSet);
exports.RetrieveSubmissionPosts = RetrieveSubmissionPosts;


/*
    UnlikePost
    Allows a user to like a specified post.
*/


var UnlikePost = function(session) {
    /*
        Create a new instance of the UnlikePost Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Post/UnlikePost"
    UnlikePost.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnlikePostResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnlikePostInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnlikePost
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnlikePostInputSet = function() {
    UnlikePostInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the post you want to unlike.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the ReblogKey input for this Choreo. ((required, string) The reblog key for the post id. This can be retrieved with the RetrievePublishedPosts Choreo.)
        */
        this.set_ReblogKey = function(value) {
            this.setInput("ReblogKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnlikePost Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnlikePostResultSet = function(resultStream) {
    UnlikePostResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnlikePost, choreography.Choreography);
util.inherits(UnlikePostInputSet, choreography.InputSet);
util.inherits(UnlikePostResultSet, choreography.ResultSet);
exports.UnlikePost = UnlikePost;

