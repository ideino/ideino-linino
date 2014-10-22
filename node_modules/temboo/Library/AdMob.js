
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AdGroupSearch
    Search for Ad Groups using IDs.
*/


var AdGroupSearch = function(session) {
    /*
        Create a new instance of the AdGroupSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/AdGroupSearch"
    AdGroupSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdGroupSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdGroupSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdGroupSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdGroupSearchInputSet = function() {
    AdGroupSearchInputSet.super_.call(this);
        /*
        Set the value of the AdGroupID input for this Choreo. ((optional, string) Search for ad groups using this ID.)
        */
        this.set_AdGroupID = function(value) {
            this.setInput("AdGroupID", value);
        }

        /*
        Set the value of the CampaignID input for this Choreo. ((optional, string) Search for ad groups in this specific campaign.)
        */
        this.set_CampaignID = function(value) {
            this.setInput("CampaignID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set to 1, ad groups that have been deleted will be included in the search result.)
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdGroupSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdGroupSearchResultSet = function(resultStream) {
    AdGroupSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(AdGroupSearch, choreography.Choreography);
util.inherits(AdGroupSearchInputSet, choreography.InputSet);
util.inherits(AdGroupSearchResultSet, choreography.ResultSet);
exports.AdGroupSearch = AdGroupSearch;


/*
    AdGroupStats
    Search for Ad Group statistics by entering their IDs.
*/


var AdGroupStats = function(session) {
    /*
        Create a new instance of the AdGroupStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/AdGroupStats"
    AdGroupStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdGroupStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdGroupStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdGroupStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdGroupStatsInputSet = function() {
    AdGroupStatsInputSet.super_.call(this);
        /*
        Set the value of the AdGroupID input for this Choreo. ((required, string) Search for ad groups using this ID.)
        */
        this.set_AdGroupID = function(value) {
            this.setInput("AdGroupID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) Enter search end date in following format: 2011-09-12)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ObjectDimension input for this Choreo. ((optional, string) Specify an Ad group to narrow your search.)
        */
        this.set_ObjectDimension = function(value) {
            this.setInput("ObjectDimension", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order by the number of impressions. Example: [impressions]=asc)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) Enter search start date in following format: 2011-09-12)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TimeDimension input for this Choreo. ((optional, string) Specify whether stats should be grouped by day, week, or month.)
        */
        this.set_TimeDimension = function(value) {
            this.setInput("TimeDimension", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdGroupStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdGroupStatsResultSet = function(resultStream) {
    AdGroupStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(AdGroupStats, choreography.Choreography);
util.inherits(AdGroupStatsInputSet, choreography.InputSet);
util.inherits(AdGroupStatsResultSet, choreography.ResultSet);
exports.AdGroupStats = AdGroupStats;


/*
    AdSearch
    Search for ads using IDs.
*/


var AdSearch = function(session) {
    /*
        Create a new instance of the AdSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/AdSearch"
    AdSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdSearchInputSet = function() {
    AdSearchInputSet.super_.call(this);
        /*
        Set the value of the AdGroupID input for this Choreo. ((optional, string) Search for ad groups using this ID.)
        */
        this.set_AdGroupID = function(value) {
            this.setInput("AdGroupID", value);
        }

        /*
        Set the value of the AdID input for this Choreo. ((optional, string) Search for ads using this ID.)
        */
        this.set_AdID = function(value) {
            this.setInput("AdID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set to 1, ad groups that have been deleted will be included in the search result.)
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdSearchResultSet = function(resultStream) {
    AdSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AdSearch, choreography.Choreography);
util.inherits(AdSearchInputSet, choreography.InputSet);
util.inherits(AdSearchResultSet, choreography.ResultSet);
exports.AdSearch = AdSearch;


/*
    AdStats
    Retrieve ad statistics by specifying IDs.
*/


var AdStats = function(session) {
    /*
        Create a new instance of the AdStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/AdStats"
    AdStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdStatsInputSet = function() {
    AdStatsInputSet.super_.call(this);
        /*
        Set the value of the AdID input for this Choreo. ((required, string) Search for ads using this ID.)
        */
        this.set_AdID = function(value) {
            this.setInput("AdID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) Enter search end date in following format: 2011-09-12)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ObjectDimension input for this Choreo. ((optional, string) Specify a specific Ad to narrow your search.)
        */
        this.set_ObjectDimension = function(value) {
            this.setInput("ObjectDimension", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order by the number of impressions. Example: [impressions]=asc)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) Enter search start date in following format: 2011-09-12)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TimeDimension input for this Choreo. ((optional, string) Specify whether stats should be grouped by day, week, or month.)
        */
        this.set_TimeDimension = function(value) {
            this.setInput("TimeDimension", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdStatsResultSet = function(resultStream) {
    AdStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AdStats, choreography.Choreography);
util.inherits(AdStatsInputSet, choreography.InputSet);
util.inherits(AdStatsResultSet, choreography.ResultSet);
exports.AdStats = AdStats;


/*
    CampaignSearch
    Search for ad campaigns using IDs.
*/


var CampaignSearch = function(session) {
    /*
        Create a new instance of the CampaignSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/CampaignSearch"
    CampaignSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CampaignSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CampaignSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CampaignSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CampaignSearchInputSet = function() {
    CampaignSearchInputSet.super_.call(this);
        /*
        Set the value of the CampaignID input for this Choreo. ((optional, string) Search for ad campaigns using this ID.)
        */
        this.set_CampaignID = function(value) {
            this.setInput("CampaignID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set to 1, ad groups that have been deleted will be included in the search result.)
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CampaignSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CampaignSearchResultSet = function(resultStream) {
    CampaignSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(CampaignSearch, choreography.Choreography);
util.inherits(CampaignSearchInputSet, choreography.InputSet);
util.inherits(CampaignSearchResultSet, choreography.ResultSet);
exports.CampaignSearch = CampaignSearch;


/*
    CampaignStats
    Retrieve campaign stats by ID.
*/


var CampaignStats = function(session) {
    /*
        Create a new instance of the CampaignStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/CampaignStats"
    CampaignStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CampaignStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CampaignStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CampaignStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CampaignStatsInputSet = function() {
    CampaignStatsInputSet.super_.call(this);
        /*
        Set the value of the CampaignID input for this Choreo. ((required, string) Search for ad campaigns using this ID.)
        */
        this.set_CampaignID = function(value) {
            this.setInput("CampaignID", value);
        }

        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) Enter search end date in following format: 2011-09-12)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ObjectDimension input for this Choreo. ((optional, string) Specify a campaign to group and narrow your search.)
        */
        this.set_ObjectDimension = function(value) {
            this.setInput("ObjectDimension", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order by the number of impressions. Example: [impressions]=asc)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) Enter search start date in following format: 2011-09-12)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TimeDimension input for this Choreo. ((optional, string) Specify whether stats should be grouped by day, week, or month.)
        */
        this.set_TimeDimension = function(value) {
            this.setInput("TimeDimension", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CampaignStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CampaignStatsResultSet = function(resultStream) {
    CampaignStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(CampaignStats, choreography.Choreography);
util.inherits(CampaignStatsInputSet, choreography.InputSet);
util.inherits(CampaignStatsResultSet, choreography.ResultSet);
exports.CampaignStats = CampaignStats;


/*
    Login
    Log into AdMob service and obtain an authorization token.
*/


var Login = function(session) {
    /*
        Create a new instance of the Login Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/Login"
    Login.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LoginResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LoginInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Login
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LoginInputSet = function() {
    LoginInputSet.super_.call(this);
        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) Your AdMob username.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Admob password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Login Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LoginResultSet = function(resultStream) {
    LoginResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((string) The token obtained by running this choreo.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from AdMob in XML format)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Login, choreography.Choreography);
util.inherits(LoginInputSet, choreography.InputSet);
util.inherits(LoginResultSet, choreography.ResultSet);
exports.Login = Login;


/*
    Logout
    Logout from AdMob service.
*/


var Logout = function(session) {
    /*
        Create a new instance of the Logout Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/Logout"
    Logout.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LogoutResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LogoutInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Logout
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LogoutInputSet = function() {
    LogoutInputSet.super_.call(this);
        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The security token returned by the Login Choreo.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Logout Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LogoutResultSet = function(resultStream) {
    LogoutResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from AdMob in XML format)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Logout, choreography.Choreography);
util.inherits(LogoutInputSet, choreography.InputSet);
util.inherits(LogoutResultSet, choreography.ResultSet);
exports.Logout = Logout;


/*
    SiteSearch
    Search for sites by specifying their ID.
*/


var SiteSearch = function(session) {
    /*
        Create a new instance of the SiteSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/SiteSearch"
    SiteSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SiteSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SiteSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SiteSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SiteSearchInputSet = function() {
    SiteSearchInputSet.super_.call(this);
        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the IncludeDeleted input for this Choreo. ((optional, boolean) If set to 1, ad groups that have been deleted will be included in the search result.)
        */
        this.set_IncludeDeleted = function(value) {
            this.setInput("IncludeDeleted", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) Search for a site matching this ID.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SiteSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SiteSearchResultSet = function(resultStream) {
    SiteSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SiteSearch, choreography.Choreography);
util.inherits(SiteSearchInputSet, choreography.InputSet);
util.inherits(SiteSearchResultSet, choreography.ResultSet);
exports.SiteSearch = SiteSearch;


/*
    SiteStats
    Retrieve site statistics.
*/


var SiteStats = function(session) {
    /*
        Create a new instance of the SiteStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AdMob/SiteStats"
    SiteStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SiteStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SiteStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SiteStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SiteStatsInputSet = function() {
    SiteStatsInputSet.super_.call(this);
        /*
        Set the value of the ClientKey input for this Choreo. ((required, string) The Client Key provided by AdMob.)
        */
        this.set_ClientKey = function(value) {
            this.setInput("ClientKey", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((conditional, string) Your AdMob username. Required unless providing a valid Token input.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) Enter search end date in following format: 2011-09-12)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ObjectDimension input for this Choreo. ((optional, string) Specify a site to group and narrow your search.)
        */
        this.set_ObjectDimension = function(value) {
            this.setInput("ObjectDimension", value);
        }

        /*
        Set the value of the OrderBy input for this Choreo. ((optional, string) Order by the number of impressions. Example: [impressions]=asc)
        */
        this.set_OrderBy = function(value) {
            this.setInput("OrderBy", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((conditional, password) Your Admob password. Required unless providing a valid Token input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that your want the response to be in. Accepted values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SiteID input for this Choreo. ((optional, string) Search for a site matching this ID.)
        */
        this.set_SiteID = function(value) {
            this.setInput("SiteID", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) Enter search start date in following format: 2011-09-12)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the TimeDimension input for this Choreo. ((optional, string) Specify whether stats should be grouped by day, week, or month.)
        */
        this.set_TimeDimension = function(value) {
            this.setInput("TimeDimension", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SiteStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SiteStatsResultSet = function(resultStream) {
    SiteStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from AdMob. Corresponds to the ResponseFormat input. Defaults to xml.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Token" output from this Choreo execution. ((conditional, string) If provided, the Choreo will use the token to authenticate. If the token is expired or not provided, the Choreo will relogin and retrieve a new token when Email and Password are supplied.)
        */
        this.get_Token = function() {
            return this.getResult("Token");
        }
}

util.inherits(SiteStats, choreography.Choreography);
util.inherits(SiteStatsInputSet, choreography.InputSet);
util.inherits(SiteStatsResultSet, choreography.ResultSet);
exports.SiteStats = SiteStats;

