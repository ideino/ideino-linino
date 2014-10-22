
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddBookmark
    Adds a link bookmark to a Delicious account.
*/


var AddBookmark = function(session) {
    /*
        Create a new instance of the AddBookmark Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/AddBookmark"
    AddBookmark.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddBookmarkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddBookmarkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddBookmark
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddBookmarkInputSet = function() {
    AddBookmarkInputSet.super_.call(this);
        /*
        Set the value of the Description input for this Choreo. ((required, string) A description for the link to post.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Notes input for this Choreo. ((optional, string) Descriptive notes for the posted link.)
        */
        this.set_Notes = function(value) {
            this.setInput("Notes", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Replace input for this Choreo. ((optional, integer) Specify "1" to replace the post if the URL has already been posted. Set to "0" (don't replace) by default.)
        */
        this.set_Replace = function(value) {
            this.setInput("Replace", value);
        }

        /*
        Set the value of the Shared input for this Choreo. ((optional, integer) Specify "1" to make the posted link private. Set to "0" (shared) by default.)
        */
        this.set_Shared = function(value) {
            this.setInput("Shared", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Add keyword tags to the posted link. Separate multiple tags with commas.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The URL for the link to post.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddBookmark Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddBookmarkResultSet = function(resultStream) {
    AddBookmarkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddBookmark, choreography.Choreography);
util.inherits(AddBookmarkInputSet, choreography.InputSet);
util.inherits(AddBookmarkResultSet, choreography.ResultSet);
exports.AddBookmark = AddBookmark;


/*
    DeleteBookmark
    Deletes a bookmarked link from a Delicious account.
*/


var DeleteBookmark = function(session) {
    /*
        Create a new instance of the DeleteBookmark Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/DeleteBookmark"
    DeleteBookmark.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBookmarkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBookmarkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBookmark
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBookmarkInputSet = function() {
    DeleteBookmarkInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The URL for the posted link to delete.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBookmark Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBookmarkResultSet = function(resultStream) {
    DeleteBookmarkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBookmark, choreography.Choreography);
util.inherits(DeleteBookmarkInputSet, choreography.InputSet);
util.inherits(DeleteBookmarkResultSet, choreography.ResultSet);
exports.DeleteBookmark = DeleteBookmark;


/*
    DeleteTag
    Deletes a specified tag.
*/


var DeleteTag = function(session) {
    /*
        Create a new instance of the DeleteTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/DeleteTag"
    DeleteTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTagInputSet = function() {
    DeleteTagInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) The tag to delete.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTagResultSet = function(resultStream) {
    DeleteTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteTag, choreography.Choreography);
util.inherits(DeleteTagInputSet, choreography.InputSet);
util.inherits(DeleteTagResultSet, choreography.ResultSet);
exports.DeleteTag = DeleteTag;


/*
    GetAllBookmarks
    Returns all links posted to a Delicious account.
*/


var GetAllBookmarks = function(session) {
    /*
        Create a new instance of the GetAllBookmarks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetAllBookmarks"
    GetAllBookmarks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllBookmarksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllBookmarksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllBookmarks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllBookmarksInputSet = function() {
    GetAllBookmarksInputSet.super_.call(this);
        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of bookmarks to return. Defaults to 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the FromDate input for this Choreo. ((optional, date) Return only bookmarks posted on this date and later. Enter in YYYY-MM-DDThh:mm:ssZ format.)
        */
        this.set_FromDate = function(value) {
            this.setInput("FromDate", value);
        }

        /*
        Set the value of the Meta input for this Choreo. ((optional, string) Specify "1" to include a change-detection signature for each item returned. Defaults to "0", or no meta attributes retained.)
        */
        this.set_Meta = function(value) {
            this.setInput("Meta", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((optional, string) Return only bookmrks tagged with this keyword.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the ToDate input for this Choreo. ((optional, date) Return only bookmarks posted on this date and earlier. Enter in YYYY-MM-DDThh:mm:ssZ format.)
        */
        this.set_ToDate = function(value) {
            this.setInput("ToDate", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllBookmarks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllBookmarksResultSet = function(resultStream) {
    GetAllBookmarksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllBookmarks, choreography.Choreography);
util.inherits(GetAllBookmarksInputSet, choreography.InputSet);
util.inherits(GetAllBookmarksResultSet, choreography.ResultSet);
exports.GetAllBookmarks = GetAllBookmarks;


/*
    GetBookmark
    Retrieves one or more bookmarked links posted on a single day.
*/


var GetBookmark = function(session) {
    /*
        Create a new instance of the GetBookmark Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetBookmark"
    GetBookmark.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBookmarkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBookmarkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBookmark
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBookmarkInputSet = function() {
    GetBookmarkInputSet.super_.call(this);
        /*
        Set the value of the ChangeSignature input for this Choreo. ((optional, string) Return only bookmarks with the URL MD5 signatures you enter, regardless of posting date. Separate multiple signatures with spaces.)
        */
        this.set_ChangeSignature = function(value) {
            this.setInput("ChangeSignature", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) Return only bookmarks posted on a date specified here. Enter in YYYY-MM-DDThh:mm:ssZ format. Defaults to the most recent date.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Meta input for this Choreo. ((optional, string) Specify "1" to include a change-detection signature for each item returned. Defaults to "0", or no meta attributes retained.)
        */
        this.set_Meta = function(value) {
            this.setInput("Meta", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((optional, string) Return only items tagged with the specified keyword. Separate multiple tags with spaces.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) Return only items with the specified URL, regardless of posting date.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBookmark Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBookmarkResultSet = function(resultStream) {
    GetBookmarkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBookmark, choreography.Choreography);
util.inherits(GetBookmarkInputSet, choreography.InputSet);
util.inherits(GetBookmarkResultSet, choreography.ResultSet);
exports.GetBookmark = GetBookmark;


/*
    GetBookmarkDates
    Retrieve a list of dates, with the number of bookmarks posted for each date.
*/


var GetBookmarkDates = function(session) {
    /*
        Create a new instance of the GetBookmarkDates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetBookmarkDates"
    GetBookmarkDates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBookmarkDatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBookmarkDatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBookmarkDates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBookmarkDatesInputSet = function() {
    GetBookmarkDatesInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Return only items tagged with the specified keyword.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBookmarkDates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBookmarkDatesResultSet = function(resultStream) {
    GetBookmarkDatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBookmarkDates, choreography.Choreography);
util.inherits(GetBookmarkDatesInputSet, choreography.InputSet);
util.inherits(GetBookmarkDatesResultSet, choreography.ResultSet);
exports.GetBookmarkDates = GetBookmarkDates;


/*
    GetChangeSignatures
    Retrieves a list of all bookmarks' change detection signatures.
*/


var GetChangeSignatures = function(session) {
    /*
        Create a new instance of the GetChangeSignatures Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetChangeSignatures"
    GetChangeSignatures.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetChangeSignaturesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetChangeSignaturesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetChangeSignatures
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetChangeSignaturesInputSet = function() {
    GetChangeSignaturesInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetChangeSignatures Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetChangeSignaturesResultSet = function(resultStream) {
    GetChangeSignaturesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetChangeSignatures, choreography.Choreography);
util.inherits(GetChangeSignaturesInputSet, choreography.InputSet);
util.inherits(GetChangeSignaturesResultSet, choreography.ResultSet);
exports.GetChangeSignatures = GetChangeSignatures;


/*
    GetRecentBookmarks
    Retrieve a list of the most recently posted bookmarks.
*/


var GetRecentBookmarks = function(session) {
    /*
        Create a new instance of the GetRecentBookmarks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetRecentBookmarks"
    GetRecentBookmarks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecentBookmarksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecentBookmarksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecentBookmarks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecentBookmarksInputSet = function() {
    GetRecentBookmarksInputSet.super_.call(this);
        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specify the number of bookmarks to retrieve, up the maximum of 100. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Tags input for this Choreo. ((optional, string) Return only items tagged with the specified keyword.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecentBookmarks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecentBookmarksResultSet = function(resultStream) {
    GetRecentBookmarksResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecentBookmarks, choreography.Choreography);
util.inherits(GetRecentBookmarksInputSet, choreography.InputSet);
util.inherits(GetRecentBookmarksResultSet, choreography.ResultSet);
exports.GetRecentBookmarks = GetRecentBookmarks;


/*
    GetTags
    Retrieves a list of all tags and the number of bookmarks that use them.
*/


var GetTags = function(session) {
    /*
        Create a new instance of the GetTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/GetTags"
    GetTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTagsInputSet = function() {
    GetTagsInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTagsResultSet = function(resultStream) {
    GetTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTags, choreography.Choreography);
util.inherits(GetTagsInputSet, choreography.InputSet);
util.inherits(GetTagsResultSet, choreography.ResultSet);
exports.GetTags = GetTags;


/*
    RenameTag
    Renames a specified tag.
*/


var RenameTag = function(session) {
    /*
        Create a new instance of the RenameTag Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/RenameTag"
    RenameTag.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RenameTagResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RenameTagInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RenameTag
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RenameTagInputSet = function() {
    RenameTagInputSet.super_.call(this);
        /*
        Set the value of the NewTag input for this Choreo. ((required, string) The new tag name.)
        */
        this.set_NewTag = function(value) {
            this.setInput("NewTag", value);
        }

        /*
        Set the value of the OldTag input for this Choreo. ((required, string) The existing tag to rename.)
        */
        this.set_OldTag = function(value) {
            this.setInput("OldTag", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RenameTag Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RenameTagResultSet = function(resultStream) {
    RenameTagResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RenameTag, choreography.Choreography);
util.inherits(RenameTagInputSet, choreography.InputSet);
util.inherits(RenameTagResultSet, choreography.ResultSet);
exports.RenameTag = RenameTag;


/*
    SuggestTags
    Retrieves a list of suggested tags for a specifed URL.
*/


var SuggestTags = function(session) {
    /*
        Create a new instance of the SuggestTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Delicious/SuggestTags"
    SuggestTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SuggestTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SuggestTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SuggestTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SuggestTagsInputSet = function() {
    SuggestTagsInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) The password that corresponds to the specified Delicious account username.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) The URL for which to provide tagging suggestions.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A valid Delicious account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SuggestTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SuggestTagsResultSet = function(resultStream) {
    SuggestTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Delicious.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SuggestTags, choreography.Choreography);
util.inherits(SuggestTagsInputSet, choreography.InputSet);
util.inherits(SuggestTagsResultSet, choreography.ResultSet);
exports.SuggestTags = SuggestTags;

