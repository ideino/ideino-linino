
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetMostEmailed
    Retrieves information for the blog posts and articles that are most frequently emailed.
*/


var GetMostEmailed = function(session) {
    /*
        Create a new instance of the GetMostEmailed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MostPopular/GetMostEmailed"
    GetMostEmailed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMostEmailedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMostEmailedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMostEmailed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMostEmailedInputSet = function() {
    GetMostEmailedInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, string) The first 20 results are shown by default. To page through the results, set Offset to the appropriate value.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Section input for this Choreo. ((required, string) Limits the results by one or more sections (i.e. arts).  To get all sections, specify all-sections.)
        */
        this.set_Section = function(value) {
            this.setInput("Section", value);
        }

        /*
        Set the value of the TimePeriod input for this Choreo. ((required, integer) Allowed integer values: 1, 7, or 30, which corresponds to a day (1) , a week (7), or a month (30) of content.)
        */
        this.set_TimePeriod = function(value) {
            this.setInput("TimePeriod", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMostEmailed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMostEmailedResultSet = function(resultStream) {
    GetMostEmailedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMostEmailed, choreography.Choreography);
util.inherits(GetMostEmailedInputSet, choreography.InputSet);
util.inherits(GetMostEmailedResultSet, choreography.ResultSet);
exports.GetMostEmailed = GetMostEmailed;


/*
    GetMostShared
    Retrieves information for the blog posts and articles that are most frequently shared.
*/


var GetMostShared = function(session) {
    /*
        Create a new instance of the GetMostShared Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MostPopular/GetMostShared"
    GetMostShared.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMostSharedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMostSharedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMostShared
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMostSharedInputSet = function() {
    GetMostSharedInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, string) The first 20 results are shown by default. To page through the results, set Offset to the appropriate value.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Section input for this Choreo. ((required, string) Limits the results by one or more sections (i.e. arts).  To get all sections, specify all-sections.)
        */
        this.set_Section = function(value) {
            this.setInput("Section", value);
        }

        /*
        Set the value of the ShareTypes input for this Choreo. ((required, string) Limits the results by the method used to share the items.  Separate multiple share types by semicolons (i.e. facebook; twitter).)
        */
        this.set_ShareTypes = function(value) {
            this.setInput("ShareTypes", value);
        }

        /*
        Set the value of the TimePeriod input for this Choreo. ((required, integer) Allowed integer values: 1, 7, or 30, which corresponds to a day (1) , a week (7), or a month (30) of content.)
        */
        this.set_TimePeriod = function(value) {
            this.setInput("TimePeriod", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMostShared Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMostSharedResultSet = function(resultStream) {
    GetMostSharedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMostShared, choreography.Choreography);
util.inherits(GetMostSharedInputSet, choreography.InputSet);
util.inherits(GetMostSharedResultSet, choreography.ResultSet);
exports.GetMostShared = GetMostShared;


/*
    GetMostViewed
    Retrieves information for the blog posts and articles that are most frequently viewed.
*/


var GetMostViewed = function(session) {
    /*
        Create a new instance of the GetMostViewed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/MostPopular/GetMostViewed"
    GetMostViewed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMostViewedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMostViewedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMostViewed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMostViewedInputSet = function() {
    GetMostViewedInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The first 20 results are shown by default. To page through the results, set Offset to the appropriate value.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Section input for this Choreo. ((required, string) Limits the results by one or more sections (i.e. arts).  To get all sections, specify all-sections.)
        */
        this.set_Section = function(value) {
            this.setInput("Section", value);
        }

        /*
        Set the value of the TimePeriod input for this Choreo. ((required, integer) Allowed integer values: 1, 7, or 30, which corresponds to a day (1) , a week (7), or a month (30) of content.)
        */
        this.set_TimePeriod = function(value) {
            this.setInput("TimePeriod", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMostViewed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMostViewedResultSet = function(resultStream) {
    GetMostViewedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMostViewed, choreography.Choreography);
util.inherits(GetMostViewedInputSet, choreography.InputSet);
util.inherits(GetMostViewedResultSet, choreography.ResultSet);
exports.GetMostViewed = GetMostViewed;

