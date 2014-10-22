
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddItem
    Allows a user to add an item to a list.
*/


var AddItem = function(session) {
    /*
        Create a new instance of the AddItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/AddItem"
    AddItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddItemInputSet = function() {
    AddItemInputSet.super_.call(this);
        /*
        Set the value of the ItemID input for this Choreo. ((conditional, string) The id of an item on a list that you wish to copy to the target list. Used in conjuction with ListID. Note that one of the following must be specified: VenueID, TipID, ItemListID, or ItemID.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ItemListID input for this Choreo. ((conditional, string) The ID of a list that contains an item that you wish to copy to the new list. Used in conjuction with ItemID. Note that one of the following must be specified: VenueID, TipID, ItemListID, or ItemID.)
        */
        this.set_ItemListID = function(value) {
            this.setInput("ItemListID", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, string) The ID of the list that  you are adding an item to. This can be a user-created list id or one of tips, todos, or dones.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((optional, string) If the target is a user-created list, this will create a public tip on the venue. If the target is todos, the text will be a private note that is only visible to the author.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the TipID input for this Choreo. ((conditional, string) The id of a tip to add to the list. Cannot be used in conjunction with the Text and URL inputs. Note that one of the following must be specified: VenueID, TipID, ItemListID, or ItemID.)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) If adding a new tip using the Text input, this can associate a url with the tip.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((conditional, string) The id of a venue to add to the list. Note that one of the following must be specified: VenueID, TipID, ItemListID, or ItemID.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddItemResultSet = function(resultStream) {
    AddItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddItem, choreography.Choreography);
util.inherits(AddItemInputSet, choreography.InputSet);
util.inherits(AddItemResultSet, choreography.ResultSet);
exports.AddItem = AddItem;


/*
    AddList
    Creates a new list.
*/


var AddList = function(session) {
    /*
        Create a new instance of the AddList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/AddList"
    AddList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddListInputSet = function() {
    AddListInputSet.super_.call(this);
        /*
        Set the value of the Collaborative input for this Choreo. ((optional, boolean) A flag indicating that this list can be edited by friends. Set to 1 for true. Defaults to 0 (false).)
        */
        this.set_Collaborative = function(value) {
            this.setInput("Collaborative", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the list.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the list.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((optional, string) The id of a photo that should be set as the list photo.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddListResultSet = function(resultStream) {
    AddListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddList, choreography.Choreography);
util.inherits(AddListInputSet, choreography.InputSet);
util.inherits(AddListResultSet, choreography.ResultSet);
exports.AddList = AddList;


/*
    DeleteItem
    Allows a user to delete an item from a list.

*/


var DeleteItem = function(session) {
    /*
        Create a new instance of the DeleteItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/DeleteItem"
    DeleteItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteItemInputSet = function() {
    DeleteItemInputSet.super_.call(this);
        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The id of the item to delete.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, string) This can be a user-created list id or one of tips, todos, or dones.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteItemResultSet = function(resultStream) {
    DeleteItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteItem, choreography.Choreography);
util.inherits(DeleteItemInputSet, choreography.InputSet);
util.inherits(DeleteItemResultSet, choreography.ResultSet);
exports.DeleteItem = DeleteItem;


/*
    FollowList
    Allows a user to follow a list.
*/


var FollowList = function(session) {
    /*
        Create a new instance of the FollowList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/FollowList"
    FollowList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FollowListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FollowListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FollowList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FollowListInputSet = function() {
    FollowListInputSet.super_.call(this);
        /*
        Set the value of the ListID input for this Choreo. ((required, string) The id of a user-created list.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FollowList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FollowListResultSet = function(resultStream) {
    FollowListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FollowList, choreography.Choreography);
util.inherits(FollowListInputSet, choreography.InputSet);
util.inherits(FollowListResultSet, choreography.ResultSet);
exports.FollowList = FollowList;


/*
    ListDetails
    Returns details about a given list. 
*/


var ListDetails = function(session) {
    /*
        Create a new instance of the ListDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/ListDetails"
    ListDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListDetailsInputSet = function() {
    ListDetailsInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 500.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, string) The id of a user-created or followed list or an id for a tip or todo in the form of USER_ID/tips or USER_ID/todos. When getting tips or todos for the acting user, the user id is not required.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Used to page through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) Identity of the user to get lists for. Defaults to "self" to get lists of the acting user.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListDetailsResultSet = function(resultStream) {
    ListDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListDetails, choreography.Choreography);
util.inherits(ListDetailsInputSet, choreography.InputSet);
util.inherits(ListDetailsResultSet, choreography.ResultSet);
exports.ListDetails = ListDetails;


/*
    ListFollowers
    Returns a count and items of users following the specified list.
*/


var ListFollowers = function(session) {
    /*
        Create a new instance of the ListFollowers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/ListFollowers"
    ListFollowers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFollowersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFollowersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFollowers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFollowersInputSet = function() {
    ListFollowersInputSet.super_.call(this);
        /*
        Set the value of the ListID input for this Choreo. ((required, string) The id of a user-created list.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFollowers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFollowersResultSet = function(resultStream) {
    ListFollowersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListFollowers, choreography.Choreography);
util.inherits(ListFollowersInputSet, choreography.InputSet);
util.inherits(ListFollowersResultSet, choreography.ResultSet);
exports.ListFollowers = ListFollowers;


/*
    UnfollowList
    Allows a user to unfollow a list.
*/


var UnfollowList = function(session) {
    /*
        Create a new instance of the UnfollowList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/UnfollowList"
    UnfollowList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnfollowListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnfollowListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnfollowList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnfollowListInputSet = function() {
    UnfollowListInputSet.super_.call(this);
        /*
        Set the value of the ListID input for this Choreo. ((required, string) The id of a user-created list.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnfollowList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnfollowListResultSet = function(resultStream) {
    UnfollowListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnfollowList, choreography.Choreography);
util.inherits(UnfollowListInputSet, choreography.InputSet);
util.inherits(UnfollowListResultSet, choreography.ResultSet);
exports.UnfollowList = UnfollowList;


/*
    UpdateItem
    Allows you to add or remove photos and tips from items on user-created lists.
*/


var UpdateItem = function(session) {
    /*
        Create a new instance of the UpdateItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/UpdateItem"
    UpdateItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateItemInputSet = function() {
    UpdateItemInputSet.super_.call(this);
        /*
        Set the value of the ItemID input for this Choreo. ((required, string) The id of an item on a list that you wish to update.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, string) The ID of a user-created list to update)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((optional, string) If present and non-empty, adds a photo to this item. If present and empty, will remove the photo on this item. If the photo was a private checkin photo, it will be promoted to a public venue photo.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((optional, string) If present, this creates a public tip on the venue and replaces any existing tip on the item. Cannot be used in conjuction with TipID or PhotoID.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the TipID input for this Choreo. ((optional, string) The id of a tip to add to the list. Cannot be used in conjunction with the Text and URL inputs. Note that one of the following must be specified: VenueID, TipID, ItemListID, or ItemID.)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) If adding a new tip using the Text input, this can associate a url with the tip.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateItemResultSet = function(resultStream) {
    UpdateItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateItem, choreography.Choreography);
util.inherits(UpdateItemInputSet, choreography.InputSet);
util.inherits(UpdateItemResultSet, choreography.ResultSet);
exports.UpdateItem = UpdateItem;


/*
    UpdateList
    Updates a given list.
*/


var UpdateList = function(session) {
    /*
        Create a new instance of the UpdateList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Lists/UpdateList"
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
        Set the value of the Collaborative input for this Choreo. ((optional, boolean) A flag indicating that this list can be edited by friends. Set to 1 for true. Defaults to 0 (false).)
        */
        this.set_Collaborative = function(value) {
            this.setInput("Collaborative", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the list.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, string) The id of the list to update.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the list.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((optional, string) The id of a photo that should be set as the list photo.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateListResultSet = function(resultStream) {
    UpdateListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateList, choreography.Choreography);
util.inherits(UpdateListInputSet, choreography.InputSet);
util.inherits(UpdateListResultSet, choreography.ResultSet);
exports.UpdateList = UpdateList;

