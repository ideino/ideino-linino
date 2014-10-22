
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateList
    Creates a new list.
*/


var CreateList = function(session) {
    /*
        Create a new instance of the CreateList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/CreateList"
    CreateList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateListInputSet = function() {
    CreateListInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description of the list.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, string) Indicates if this list is "public" (the default) or "private".)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the new list.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateListResultSet = function(resultStream) {
    CreateListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateList, choreography.Choreography);
util.inherits(CreateListInputSet, choreography.InputSet);
util.inherits(CreateListResultSet, choreography.ResultSet);
exports.CreateList = CreateList;


/*
    CreateMember
    Adds one or more members to a list.
*/


var CreateMember = function(session) {
    /*
        Create a new instance of the CreateMember Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/CreateMember"
    CreateMember.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateMemberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateMemberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateMember
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateMemberInputSet = function() {
    CreateMemberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user to add to the list. Required unless providing the UserId. Multiple screen names can be provided in a comma-separated list.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user to add to the list. Required unless providing the ScreenName. Multiple user IDs can be provided in a comma-separated list.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateMember Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateMemberResultSet = function(resultStream) {
    CreateMemberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateMember, choreography.Choreography);
util.inherits(CreateMemberInputSet, choreography.InputSet);
util.inherits(CreateMemberResultSet, choreography.ResultSet);
exports.CreateMember = CreateMember;


/*
    CreateSubscriber
    Subscribes the authenticated user to the specified list.
*/


var CreateSubscriber = function(session) {
    /*
        Create a new instance of the CreateSubscriber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/CreateSubscriber"
    CreateSubscriber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSubscriberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSubscriberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSubscriber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSubscriberInputSet = function() {
    CreateSubscriberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSubscriber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSubscriberResultSet = function(resultStream) {
    CreateSubscriberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateSubscriber, choreography.Choreography);
util.inherits(CreateSubscriberInputSet, choreography.InputSet);
util.inherits(CreateSubscriberResultSet, choreography.ResultSet);
exports.CreateSubscriber = CreateSubscriber;


/*
    DestroyList
    Deletes the specified list.
*/


var DestroyList = function(session) {
    /*
        Create a new instance of the DestroyList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/DestroyList"
    DestroyList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DestroyListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DestroyListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DestroyList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DestroyListInputSet = function() {
    DestroyListInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DestroyList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DestroyListResultSet = function(resultStream) {
    DestroyListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DestroyList, choreography.Choreography);
util.inherits(DestroyListInputSet, choreography.InputSet);
util.inherits(DestroyListResultSet, choreography.ResultSet);
exports.DestroyList = DestroyList;


/*
    DestroyMember
    Removes one or more members from a list.
*/


var DestroyMember = function(session) {
    /*
        Create a new instance of the DestroyMember Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/DestroyMember"
    DestroyMember.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DestroyMemberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DestroyMemberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DestroyMember
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DestroyMemberInputSet = function() {
    DestroyMemberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user to remove from the list. Required unless providing the UserId. Multiple screen names can be provided in a comma-separated list.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user to remove from the list. Required unless providing the ScreenName. Multiple user IDs can be provided in a comma-separated list.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DestroyMember Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DestroyMemberResultSet = function(resultStream) {
    DestroyMemberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DestroyMember, choreography.Choreography);
util.inherits(DestroyMemberInputSet, choreography.InputSet);
util.inherits(DestroyMemberResultSet, choreography.ResultSet);
exports.DestroyMember = DestroyMember;


/*
    DestroySubscriber
    Unsubscribes the authenticated user from the specified list.
*/


var DestroySubscriber = function(session) {
    /*
        Create a new instance of the DestroySubscriber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/DestroySubscriber"
    DestroySubscriber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DestroySubscriberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DestroySubscriberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DestroySubscriber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DestroySubscriberInputSet = function() {
    DestroySubscriberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DestroySubscriber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DestroySubscriberResultSet = function(resultStream) {
    DestroySubscriberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DestroySubscriber, choreography.Choreography);
util.inherits(DestroySubscriberInputSet, choreography.InputSet);
util.inherits(DestroySubscriberResultSet, choreography.ResultSet);
exports.DestroySubscriber = DestroySubscriber;


/*
    GetLists
    Retrieves all lists the authenticating or specified user subscribes to, including lists that they own.
*/


var GetLists = function(session) {
    /*
        Create a new instance of the GetLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetLists"
    GetLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListsInputSet = function() {
    GetListsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Reverse input for this Choreo. ((optional, boolean) When set to true, owned lists will be returned first in the response.)
        */
        this.set_Reverse = function(value) {
            this.setInput("Reverse", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((optional, string) The screen name of the user for whom to return results for. If not provided, the subscriptions for the authenticating user are returned.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((optional, string) The ID of the user for whom to return results for. If not provided, the subscriptions for the authenticating user are returned.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListsResultSet = function(resultStream) {
    GetListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
}

util.inherits(GetLists, choreography.Choreography);
util.inherits(GetListsInputSet, choreography.InputSet);
util.inherits(GetListsResultSet, choreography.ResultSet);
exports.GetLists = GetLists;


/*
    GetMembers
    Retrieves the members of a specified list.
*/


var GetMembers = function(session) {
    /*
        Create a new instance of the GetMembers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetMembers"
    GetMembers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMembersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMembersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMembers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMembersInputSet = function() {
    GetMembersInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to either true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMembers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMembersResultSet = function(resultStream) {
    GetMembersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(GetMembers, choreography.Choreography);
util.inherits(GetMembersInputSet, choreography.InputSet);
util.inherits(GetMembersResultSet, choreography.ResultSet);
exports.GetMembers = GetMembers;


/*
    GetMemberships
    Retrieves the lists that the specified user has been added to.
*/


var GetMemberships = function(session) {
    /*
        Create a new instance of the GetMemberships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetMemberships"
    GetMemberships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMembershipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMembershipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMemberships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMembershipsInputSet = function() {
    GetMembershipsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the FilterToOwnedLists input for this Choreo. ((optional, boolean) When set to true, the response includes only lists that the authenticating user owns and lists that the specified user is a member of.)
        */
        this.set_FilterToOwnedLists = function(value) {
            this.setInput("FilterToOwnedLists", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. If not provided, the memberships for the authenticating user are returned.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user for whom to return results for. If not provided, the memberships for the authenticating user are returned.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMemberships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMembershipsResultSet = function(resultStream) {
    GetMembershipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(GetMemberships, choreography.Choreography);
util.inherits(GetMembershipsInputSet, choreography.InputSet);
util.inherits(GetMembershipsResultSet, choreography.ResultSet);
exports.GetMemberships = GetMemberships;


/*
    GetOwnedLists
    Retrieves lists owned by the specified user.
*/


var GetOwnedLists = function(session) {
    /*
        Create a new instance of the GetOwnedLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetOwnedLists"
    GetOwnedLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetOwnedListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetOwnedListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetOwnedLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetOwnedListsInputSet = function() {
    GetOwnedListsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return per page.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((optional, string) The screen name of the user for whom to return results for. If not provided, the authenticating user is assumed.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((optional, string) The ID of the user for whom to return results for. If not provided, the authenticating user is assumed.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetOwnedLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetOwnedListsResultSet = function(resultStream) {
    GetOwnedListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetOwnedLists, choreography.Choreography);
util.inherits(GetOwnedListsInputSet, choreography.InputSet);
util.inherits(GetOwnedListsResultSet, choreography.ResultSet);
exports.GetOwnedLists = GetOwnedLists;


/*
    GetStatuses
    Retrieves a timeline of tweets posted by members of the specified list.
*/


var GetStatuses = function(session) {
    /*
        Create a new instance of the GetStatuses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetStatuses"
    GetStatuses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetStatusesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetStatusesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetStatuses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetStatusesInputSet = function() {
    GetStatusesInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the IncludeEntitities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntitities = function(value) {
            this.setInput("IncludeEntitities", value);
        }

        /*
        Set the value of the IncludeRetweets input for this Choreo. ((optional, boolean) When set to true, the response will include retweets if they exist.)
        */
        this.set_IncludeRetweets = function(value) {
            this.setInput("IncludeRetweets", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the MaxId input for this Choreo. ((optional, string) Returns results with an ID less than (older than) or equal to the specified ID.)
        */
        this.set_MaxId = function(value) {
            this.setInput("MaxId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the SinceId input for this Choreo. ((optional, string) Returns results with an ID greater than (more recent than) the specified ID.)
        */
        this.set_SinceId = function(value) {
            this.setInput("SinceId", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetStatuses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetStatusesResultSet = function(resultStream) {
    GetStatusesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(GetStatuses, choreography.Choreography);
util.inherits(GetStatusesInputSet, choreography.InputSet);
util.inherits(GetStatusesResultSet, choreography.ResultSet);
exports.GetStatuses = GetStatuses;


/*
    GetSubscribers
    Retrieves the subscribers for a specified list.
*/


var GetSubscribers = function(session) {
    /*
        Create a new instance of the GetSubscribers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetSubscribers"
    GetSubscribers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSubscribersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSubscribersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSubscribers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSubscribersInputSet = function() {
    GetSubscribersInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to either true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSubscribers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSubscribersResultSet = function(resultStream) {
    GetSubscribersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(GetSubscribers, choreography.Choreography);
util.inherits(GetSubscribersInputSet, choreography.InputSet);
util.inherits(GetSubscribersResultSet, choreography.ResultSet);
exports.GetSubscribers = GetSubscribers;


/*
    GetSubscriptions
    Retrieves a collection of the lists the specified user is subscribed to.
*/


var GetSubscriptions = function(session) {
    /*
        Create a new instance of the GetSubscriptions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/GetSubscriptions"
    GetSubscriptions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSubscriptionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSubscriptionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSubscriptions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSubscriptionsInputSet = function() {
    GetSubscriptionsInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of results to return per page.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) Allows you to pass in the previous_cursor or next_cursor in order to page through results.)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user for whom to return results for. If not provided, the memberships for the authenticating user are returned.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user for whom to return results for. If not provided, the memberships for the authenticating user are returned.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSubscriptions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSubscriptionsResultSet = function(resultStream) {
    GetSubscriptionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
}

util.inherits(GetSubscriptions, choreography.Choreography);
util.inherits(GetSubscriptionsInputSet, choreography.InputSet);
util.inherits(GetSubscriptionsResultSet, choreography.ResultSet);
exports.GetSubscriptions = GetSubscriptions;


/*
    ShowList
    Retrieves the specified list.
*/


var ShowList = function(session) {
    /*
        Create a new instance of the ShowList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/ShowList"
    ShowList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowListInputSet = function() {
    ShowListInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowListResultSet = function(resultStream) {
    ShowListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(ShowList, choreography.Choreography);
util.inherits(ShowListInputSet, choreography.InputSet);
util.inherits(ShowListResultSet, choreography.ResultSet);
exports.ShowList = ShowList;


/*
    ShowMember
    Verifies that the specified user is a member of the specified list.
*/


var ShowMember = function(session) {
    /*
        Create a new instance of the ShowMember Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/ShowMember"
    ShowMember.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowMemberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowMemberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowMember
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowMemberInputSet = function() {
    ShowMemberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user to retrieve from the list. Required unless providing the UserId.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to either true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user to retrieve from the list. Required unless providing the ScreenName.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowMember Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowMemberResultSet = function(resultStream) {
    ShowMemberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowMember, choreography.Choreography);
util.inherits(ShowMemberInputSet, choreography.InputSet);
util.inherits(ShowMemberResultSet, choreography.ResultSet);
exports.ShowMember = ShowMember;


/*
    ShowSubscriber
    Verifies that the specified user is a subscriber of the specified list.
*/


var ShowSubscriber = function(session) {
    /*
        Create a new instance of the ShowSubscriber Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/ShowSubscriber"
    ShowSubscriber.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowSubscriberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowSubscriberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowSubscriber
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowSubscriberInputSet = function() {
    ShowSubscriberInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the IncludeEntities input for this Choreo. ((optional, boolean) The "entities" node containing extra metadata will not be included when set to false.)
        */
        this.set_IncludeEntities = function(value) {
            this.setInput("IncludeEntities", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((conditional, string) The screen name of the user to retrieve from the list. Required unless providing the UserId.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

        /*
        Set the value of the SkipStatus input for this Choreo. ((optional, boolean) When set to either true, statuses will not be included in the returned user objects.)
        */
        this.set_SkipStatus = function(value) {
            this.setInput("SkipStatus", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((conditional, string) The ID of the user to retrieve from the list. Required unless providing the ScreenName.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowSubscriber Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowSubscriberResultSet = function(resultStream) {
    ShowSubscriberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Limit" output from this Choreo execution. ((integer) The rate limit ceiling for this particular request.)
        */
        this.get_Limit = function() {
            return this.getResult("Limit");
        }
        /*
        Retrieve the value for the "Remaining" output from this Choreo execution. ((integer) The number of requests left for the 15 minute window.)
        */
        this.get_Remaining = function() {
            return this.getResult("Remaining");
        }
        /*
        Retrieve the value for the "Reset" output from this Choreo execution. ((date) The remaining window before the rate limit resets in UTC epoch seconds.)
        */
        this.get_Reset = function() {
            return this.getResult("Reset");
        }
}

util.inherits(ShowSubscriber, choreography.Choreography);
util.inherits(ShowSubscriberInputSet, choreography.InputSet);
util.inherits(ShowSubscriberResultSet, choreography.ResultSet);
exports.ShowSubscriber = ShowSubscriber;


/*
    UpdateList
    Updates an existing list.
*/


var UpdateList = function(session) {
    /*
        Create a new instance of the UpdateList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twitter/Lists/UpdateList"
    UpdateList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateListInputSet = function() {
    UpdateListInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token provided by Twitter or retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Twitter.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Twitter.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description of the list.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((conditional, string) The numerical ID of the list. Required unless Slug is provided.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, string) Indicates if this list is "public" (the default) or "private".)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The name of the new list.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The user ID of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

        /*
        Set the value of the OwnerScreenName input for this Choreo. ((optional, string) The screen name of the user who owns the list being requested by a slug.)
        */
        this.set_OwnerScreenName = function(value) {
            this.setInput("OwnerScreenName", value);
        }

        /*
        Set the value of the Slug input for this Choreo. ((optional, string) When identifying a list by a slug, either OwnerScreenName or OwnerId must be provided.)
        */
        this.set_Slug = function(value) {
            this.setInput("Slug", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateListResultSet = function(resultStream) {
    UpdateListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Twitter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateList, choreography.Choreography);
util.inherits(UpdateListInputSet, choreography.InputSet);
util.inherits(UpdateListResultSet, choreography.ResultSet);
exports.UpdateList = UpdateList;

