
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetDiscQueue
    Retrieves the contents of a subscriber's disc queue.
*/


var GetDiscQueue = function(session) {
    /*
        Create a new instance of the GetDiscQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Netflix/GetDiscQueue"
    GetDiscQueue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDiscQueueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDiscQueueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDiscQueue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDiscQueueInputSet = function() {
    GetDiscQueueInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Netflix (AKA the OAuth Consumer Key).)
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) Set this to the maximum number of results to return. This number cannot be greater than 500. If you do not specify max_results, the default value is 25)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the SharedSecret input for this Choreo. ((required, string) The Shared Secret provided by Netflix (AKA the OAuth Consumer Secret).)
        */
        this.set_SharedSecret = function(value) {
            this.setInput("SharedSecret", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Use this to specify the sort order for the queue entries. Sort order may be by queue_sequence, date_added, or alphabetical. The default sort order, if you do not specify one, is queue_sequence.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The offset number of the results from the query.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the UpdatedMin input for this Choreo. ((optional, date) If set, the response will include only those items with updated timestamps greater than or equal to the timestamp provided. Specify this value either in Unix time format (seconds since epoch).)
        */
        this.set_UpdatedMin = function(value) {
            this.setInput("UpdatedMin", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID associated with the user whose queue information you want to retrieve.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetDiscQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDiscQueueResultSet = function(resultStream) {
    GetDiscQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Netflix.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetDiscQueue, choreography.Choreography);
util.inherits(GetDiscQueueInputSet, choreography.InputSet);
util.inherits(GetDiscQueueResultSet, choreography.ResultSet);
exports.GetDiscQueue = GetDiscQueue;


/*
    GetInstantQueue
    Retrieves the contents of a subscriber's instant-watch queue.
*/


var GetInstantQueue = function(session) {
    /*
        Create a new instance of the GetInstantQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Netflix/GetInstantQueue"
    GetInstantQueue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetInstantQueueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInstantQueueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetInstantQueue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInstantQueueInputSet = function() {
    GetInstantQueueInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Netflix (AKA the OAuth Consumer Key).)
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) Set this to the maximum number of results to return. This number cannot be greater than 500. If you do not specify max_results, the default value is 25)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the SharedSecret input for this Choreo. ((required, string) The Shared Secret provided by Netflix (AKA the OAuth Consumer Secret).)
        */
        this.set_SharedSecret = function(value) {
            this.setInput("SharedSecret", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Use this to specify the sort order for the queue entries. Sort order may be by queue_sequence, date_added, or alphabetical. The default sort order, if you do not specify one, is queue_sequence.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The offset number of the results from the query.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the UpdatedMin input for this Choreo. ((optional, date) If set, the response will include only those items with updated timestamps greater than or equal to the timestamp provided. Specify this value either in Unix time format (seconds since epoch).)
        */
        this.set_UpdatedMin = function(value) {
            this.setInput("UpdatedMin", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID associated with the user whose queue information you want to retrieve.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetInstantQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetInstantQueueResultSet = function(resultStream) {
    GetInstantQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Netflix.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetInstantQueue, choreography.Choreography);
util.inherits(GetInstantQueueInputSet, choreography.InputSet);
util.inherits(GetInstantQueueResultSet, choreography.ResultSet);
exports.GetInstantQueue = GetInstantQueue;


/*
    GetQueues
    Retrieves a list of a subscriber's queues.
*/


var GetQueues = function(session) {
    /*
        Create a new instance of the GetQueues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Netflix/GetQueues"
    GetQueues.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetQueuesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetQueuesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetQueues
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetQueuesInputSet = function() {
    GetQueuesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Netflix (AKA the OAuth Consumer Key).)
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) Set this to the maximum number of results to return. This number cannot be greater than 500. If you do not specify max_results, the default value is 25)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the SharedSecret input for this Choreo. ((required, string) The Shared Secret provided by Netflix (AKA the OAuth Consumer Secret).)
        */
        this.set_SharedSecret = function(value) {
            this.setInput("SharedSecret", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Use this to specify the sort order for the queue entries. Sort order may be by queue_sequence, date_added, or alphabetical. The default sort order, if you do not specify one, is queue_sequence.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The offset number of the results from the query.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the UpdatedMin input for this Choreo. ((optional, date) If set, the response will include only those items with updated timestamps greater than or equal to the timestamp provided. Specify this value either in Unix time format (seconds since epoch).)
        */
        this.set_UpdatedMin = function(value) {
            this.setInput("UpdatedMin", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID associated with the user whose queue information you want to retrieve.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetQueues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetQueuesResultSet = function(resultStream) {
    GetQueuesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Netflix.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetQueues, choreography.Choreography);
util.inherits(GetQueuesInputSet, choreography.InputSet);
util.inherits(GetQueuesResultSet, choreography.ResultSet);
exports.GetQueues = GetQueues;


/*
    GetRecommendations
    Retrieves a list of catalog title recommendations for a subscriber.
*/


var GetRecommendations = function(session) {
    /*
        Create a new instance of the GetRecommendations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Netflix/GetRecommendations"
    GetRecommendations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecommendationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecommendationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecommendations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecommendationsInputSet = function() {
    GetRecommendationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Netflix (AKA the OAuth Consumer Key).)
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) Set this to the maximum number of results to return. This number cannot be greater than 500. If you do not specify max_results, the default value is 25)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the SharedSecret input for this Choreo. ((required, string) The Shared Secret provided by Netflix (AKA the OAuth Consumer Secret).)
        */
        this.set_SharedSecret = function(value) {
            this.setInput("SharedSecret", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The offset number of the results from the query.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID associated with the user whose recommendations you want to retrieve.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecommendations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecommendationsResultSet = function(resultStream) {
    GetRecommendationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Netflix.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecommendations, choreography.Choreography);
util.inherits(GetRecommendationsInputSet, choreography.InputSet);
util.inherits(GetRecommendationsResultSet, choreography.ResultSet);
exports.GetRecommendations = GetRecommendations;


/*
    SearchTitleCatalog
    Searches for a title in the instant-watch title catalog.
*/


var SearchTitleCatalog = function(session) {
    /*
        Create a new instance of the SearchTitleCatalog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Netflix/SearchTitleCatalog"
    SearchTitleCatalog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchTitleCatalogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchTitleCatalogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchTitleCatalog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchTitleCatalogInputSet = function() {
    SearchTitleCatalogInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Netflix (AKA the OAuth Consumer Key).)
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
        Set the value of the MaxResults input for this Choreo. ((optional, integer) Set this to the maximum number of results to return. This number cannot be greater than 500. If you do not specify max_results, the default value is 25)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the SharedSecret input for this Choreo. ((required, string) The Shared Secret provided by Netflix (AKA the OAuth Consumer Secret).)
        */
        this.set_SharedSecret = function(value) {
            this.setInput("SharedSecret", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The offset number of the results from the query.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the Term input for this Choreo. ((required, string) Enter a word or phrase to search for in the instant-watch catalog. The Netflix API searches for matching titles and synopses in the catalog.)
        */
        this.set_Term = function(value) {
            this.setInput("Term", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchTitleCatalog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchTitleCatalogResultSet = function(resultStream) {
    SearchTitleCatalogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Netflix.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchTitleCatalog, choreography.Choreography);
util.inherits(SearchTitleCatalogInputSet, choreography.InputSet);
util.inherits(SearchTitleCatalogResultSet, choreography.ResultSet);
exports.SearchTitleCatalog = SearchTitleCatalog;

