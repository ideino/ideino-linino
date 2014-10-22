
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddTips
    Allows you to add a new tip at a venue. 
*/


var AddTips = function(session) {
    /*
        Create a new instance of the AddTips Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Tips/AddTips"
    AddTips.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddTipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddTipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddTips
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddTipsInputSet = function() {
    AddTipsInputSet.super_.call(this);
        /*
        Set the value of the Broadcast input for this Choreo. ((optional, string) Whether to broadcast this tip. Set to "twitter" if you want to send to twitter, "facebook" if you want to send to facebook, or "twitter,facebook" if you want to send to both.)
        */
        this.set_Broadcast = function(value) {
            this.setInput("Broadcast", value);
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
        Set the value of the Text input for this Choreo. ((required, string) The text of the tip, up to 200 characters.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((optional, string) A URL related to this tip.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the VenueID input for this Choreo. ((required, string) The venue where you want to add this tip.)
        */
        this.set_VenueID = function(value) {
            this.setInput("VenueID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddTips Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddTipsResultSet = function(resultStream) {
    AddTipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddTips, choreography.Choreography);
util.inherits(AddTipsInputSet, choreography.InputSet);
util.inherits(AddTipsResultSet, choreography.ResultSet);
exports.AddTips = AddTips;


/*
    Done
    Returns an array of users have done this tip.
*/


var Done = function(session) {
    /*
        Create a new instance of the Done Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Tips/Done"
    Done.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DoneResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DoneInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Done
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DoneInputSet = function() {
    DoneInputSet.super_.call(this);
        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to return, up to 200.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
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
        Set the value of the TipID input for this Choreo. ((required, string) The id of a tip to get users who have marked the tip as done.)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Done Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DoneResultSet = function(resultStream) {
    DoneResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Done, choreography.Choreography);
util.inherits(DoneInputSet, choreography.InputSet);
util.inherits(DoneResultSet, choreography.ResultSet);
exports.Done = Done;


/*
    Listed
    Returns the lists that a tip appears on.
*/


var Listed = function(session) {
    /*
        Create a new instance of the Listed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Tips/Listed"
    Listed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Listed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListedInputSet = function() {
    ListedInputSet.super_.call(this);
        /*
        Set the value of the Group input for this Choreo. ((optional, string) Accepted values are: created, edited, followed, friends, other. If no acting user is present, only other is supported.)
        */
        this.set_Group = function(value) {
            this.setInput("Group", value);
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
        Set the value of the TipID input for this Choreo. ((required, string) The id of a tip to get lists for.)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Listed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListedResultSet = function(resultStream) {
    ListedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Listed, choreography.Choreography);
util.inherits(ListedInputSet, choreography.InputSet);
util.inherits(ListedResultSet, choreography.ResultSet);
exports.Listed = Listed;


/*
    SearchNearbyTips
    Get a list of tips near the specified area.
*/


var SearchNearbyTips = function(session) {
    /*
        Create a new instance of the SearchNearbyTips Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Tips/SearchNearbyTips"
    SearchNearbyTips.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchNearbyTipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchNearbyTipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchNearbyTips
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchNearbyTipsInputSet = function() {
    SearchNearbyTipsInputSet.super_.call(this);
        /*
        Set the value of the Filter input for this Choreo. ((optional, string) Filter results.  If set to 'friends', the choreo returns tips from friends.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude point of the user's location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of results to be returned by the search, up to 500.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude point of the user's location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the OauthToken input for this Choreo. ((required, string) The Foursquare API OAuth token string.)
        */
        this.set_OauthToken = function(value) {
            this.setInput("OauthToken", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Use to page through the list of results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) Only find tips matching the given term. Cannot be used in conjunction with 'friends' filter.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchNearbyTips Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchNearbyTipsResultSet = function(resultStream) {
    SearchNearbyTipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchNearbyTips, choreography.Choreography);
util.inherits(SearchNearbyTipsInputSet, choreography.InputSet);
util.inherits(SearchNearbyTipsResultSet, choreography.ResultSet);
exports.SearchNearbyTips = SearchNearbyTips;


/*
    TipDetails
    Gives details about a tip, including which users (especially friends) have marked the tip to-do or done. 
*/


var TipDetails = function(session) {
    /*
        Create a new instance of the TipDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Foursquare/Tips/TipDetails"
    TipDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TipDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TipDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TipDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TipDetailsInputSet = function() {
    TipDetailsInputSet.super_.call(this);
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
        Set the value of the TipID input for this Choreo. ((required, string) ID of tip to retrieve)
        */
        this.set_TipID = function(value) {
            this.setInput("TipID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TipDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TipDetailsResultSet = function(resultStream) {
    TipDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Foursquare. Corresponds to the ResponseFormat input. Defaults to JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TipDetails, choreography.Choreography);
util.inherits(TipDetailsInputSet, choreography.InputSet);
util.inherits(TipDetailsResultSet, choreography.ResultSet);
exports.TipDetails = TipDetails;

