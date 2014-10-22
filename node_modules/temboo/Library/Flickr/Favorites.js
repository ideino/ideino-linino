
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddToFavorites
    Adds a photo to a user's favorites list.
*/


var AddToFavorites = function(session) {
    /*
        Create a new instance of the AddToFavorites Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Favorites/AddToFavorites"
    AddToFavorites.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddToFavoritesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddToFavoritesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddToFavorites
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddToFavoritesInputSet = function() {
    AddToFavoritesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to add a favorites list.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddToFavorites Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddToFavoritesResultSet = function(resultStream) {
    AddToFavoritesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddToFavorites, choreography.Choreography);
util.inherits(AddToFavoritesInputSet, choreography.InputSet);
util.inherits(AddToFavoritesResultSet, choreography.ResultSet);
exports.AddToFavorites = AddToFavorites;


/*
    GetContextForFavorite
    Returns next and previous favorites for a photo in a user's favorites.
*/


var GetContextForFavorite = function(session) {
    /*
        Create a new instance of the GetContextForFavorite Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Favorites/GetContextForFavorite"
    GetContextForFavorite.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetContextForFavoriteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetContextForFavoriteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetContextForFavorite
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetContextForFavoriteInputSet = function() {
    GetContextForFavoriteInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to fetch the context for.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The user who counts the photo as a favorite.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetContextForFavorite Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetContextForFavoriteResultSet = function(resultStream) {
    GetContextForFavoriteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetContextForFavorite, choreography.Choreography);
util.inherits(GetContextForFavoriteInputSet, choreography.InputSet);
util.inherits(GetContextForFavoriteResultSet, choreography.ResultSet);
exports.GetContextForFavorite = GetContextForFavorite;


/*
    ListFavorites
    Returns a list of the user's favorite photos.
*/


var ListFavorites = function(session) {
    /*
        Create a new instance of the ListFavorites Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Favorites/ListFavorites"
    ListFavorites.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListFavoritesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListFavoritesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListFavorites
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListFavoritesInputSet = function() {
    ListFavoritesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to fetch for each returned record. See Choreo documentation for accepted values.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the MaxFaveDate input for this Choreo. ((optional, date) Maximum date that a photo was favorited on. The date should be in the form of a unix timestamp.)
        */
        this.set_MaxFaveDate = function(value) {
            this.setInput("MaxFaveDate", value);
        }

        /*
        Set the value of the MinFaveDate input for this Choreo. ((optional, date) Minimum date that a photo was favorited on. The date should be in the form of a unix timestamp.)
        */
        this.set_MinFaveDate = function(value) {
            this.setInput("MinFaveDate", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to return. Used for paging through many results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of photos to return per page. Defaults to 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The NSID of the user to fetch the favorites list for. If this argument is omitted, the favorites list for the calling user is returned.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListFavorites Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListFavoritesResultSet = function(resultStream) {
    ListFavoritesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListFavorites, choreography.Choreography);
util.inherits(ListFavoritesInputSet, choreography.InputSet);
util.inherits(ListFavoritesResultSet, choreography.ResultSet);
exports.ListFavorites = ListFavorites;


/*
    ListPublicFavorites
    Returns a list of favorite public photos for the given user.
*/


var ListPublicFavorites = function(session) {
    /*
        Create a new instance of the ListPublicFavorites Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Favorites/ListPublicFavorites"
    ListPublicFavorites.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListPublicFavoritesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListPublicFavoritesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListPublicFavorites
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListPublicFavoritesInputSet = function() {
    ListPublicFavoritesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Extras input for this Choreo. ((optional, string) A comma-delimited list of extra information to fetch for each returned record. See Choreo documentation for accepted values.)
        */
        this.set_Extras = function(value) {
            this.setInput("Extras", value);
        }

        /*
        Set the value of the MaxFaveDate input for this Choreo. ((optional, date) Maximum date that a photo was favorited on. The date should be in the form of a unix timestamp.)
        */
        this.set_MaxFaveDate = function(value) {
            this.setInput("MaxFaveDate", value);
        }

        /*
        Set the value of the MinFaveDate input for this Choreo. ((optional, date) Minimum date that a photo was favorited on. The date should be in the form of a unix timestamp.)
        */
        this.set_MinFaveDate = function(value) {
            this.setInput("MinFaveDate", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to return. Used for paging through many results.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) The number of photos to return per page. Defaults to 100.)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The user to fetch the favorites list for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListPublicFavorites Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListPublicFavoritesResultSet = function(resultStream) {
    ListPublicFavoritesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListPublicFavorites, choreography.Choreography);
util.inherits(ListPublicFavoritesInputSet, choreography.InputSet);
util.inherits(ListPublicFavoritesResultSet, choreography.ResultSet);
exports.ListPublicFavorites = ListPublicFavorites;


/*
    RemoveFromFavorites
    Removes a photo from a user's favorites list.
*/


var RemoveFromFavorites = function(session) {
    /*
        Create a new instance of the RemoveFromFavorites Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Flickr/Favorites/RemoveFromFavorites"
    RemoveFromFavorites.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveFromFavoritesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveFromFavoritesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveFromFavorites
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveFromFavoritesInputSet = function() {
    RemoveFromFavoritesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Flickr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((required, string) The API Secret provided by Flickr (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
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
        Set the value of the PhotoID input for this Choreo. ((required, integer) The id of the photo to remove from the user's favorites.)
        */
        this.set_PhotoID = function(value) {
            this.setInput("PhotoID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml and json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveFromFavorites Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveFromFavoritesResultSet = function(resultStream) {
    RemoveFromFavoritesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Flickr.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemoveFromFavorites, choreography.Choreography);
util.inherits(RemoveFromFavoritesInputSet, choreography.InputSet);
util.inherits(RemoveFromFavoritesResultSet, choreography.ResultSet);
exports.RemoveFromFavorites = RemoveFromFavorites;

