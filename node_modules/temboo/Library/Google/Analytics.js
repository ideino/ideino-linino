
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ClientLoginAuthentication
    Request an authorization token for Google Analytics.
*/


var ClientLoginAuthentication = function(session) {
    /*
        Create a new instance of the ClientLoginAuthentication Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Analytics/ClientLoginAuthentication"
    ClientLoginAuthentication.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ClientLoginAuthenticationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ClientLoginAuthenticationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ClientLoginAuthentication
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ClientLoginAuthenticationInputSet = function() {
    ClientLoginAuthenticationInputSet.super_.call(this);
        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Google password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ClientLoginAuthentication Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ClientLoginAuthenticationResultSet = function(resultStream) {
    ClientLoginAuthenticationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "AuthorizationKey" output from this Choreo execution. ((string) The authorization key which is parsed from the Google response.)
        */
        this.get_AuthorizationKey = function() {
            return this.getResult("AuthorizationKey");
        }
}

util.inherits(ClientLoginAuthentication, choreography.Choreography);
util.inherits(ClientLoginAuthenticationInputSet, choreography.InputSet);
util.inherits(ClientLoginAuthenticationResultSet, choreography.ResultSet);
exports.ClientLoginAuthentication = ClientLoginAuthentication;


/*
    GetMetrics
    Retrieves metrics such as visits, page views, bounces within a specified time frame.
*/


var GetMetrics = function(session) {
    /*
        Create a new instance of the GetMetrics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/Analytics/GetMetrics"
    GetMetrics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMetricsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMetricsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMetrics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMetricsInputSet = function() {
    GetMetricsInputSet.super_.call(this);
        /*
        Set the value of the Dimensions input for this Choreo. ((optional, string) Defines the primary data keys for your Analytics report. Use dimensions to segment your web property metrics (e.g.  ga:browser or ga:city).)
        */
        this.set_Dimensions = function(value) {
            this.setInput("Dimensions", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) The end date for the range of data you want to retrieve. Epoch timestamp in milliseconds or formatted as yyyy-MM-dd.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Filters input for this Choreo. ((optional, string) Restricts the data returned by a dimension or metric you want to filter by using an expression (i.e. ga:timeOnPage==10).)
        */
        this.set_Filters = function(value) {
            this.setInput("Filters", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The max results to be returned in the feed. Defaults to 50.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the Metrics input for this Choreo. ((optional, string) This is a comma separated list of metrics you want to retrieve. Defaults to: ga:visits,ga:bounces,ga:pageviews.)
        */
        this.set_Metrics = function(value) {
            this.setInput("Metrics", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password for your Google analytics account.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProfileId input for this Choreo. ((required, integer) The Google Analytics profile ID to access (this can be found under Profile Settings).)
        */
        this.set_ProfileId = function(value) {
            this.setInput("ProfileId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: XML (the default) and JSON.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Segment input for this Choreo. ((optional, string) Used to segment your data by dimensions and/or metrics. You can use expressions for segments just as you would for the Filters parameter.)
        */
        this.set_Segment = function(value) {
            this.setInput("Segment", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Indicates the sorting order and direction for the returned data. Values can be separated by commas (i.e. ga:browser,ga:pageviews).)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) The start date for the range of data to retrieve. Use epoch timestamp in milliseconds or formatted as yyyy-MM-dd.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the StartIndex input for this Choreo. ((optional, integer) The starting entry for the feed. Defaults to 1.)
        */
        this.set_StartIndex = function(value) {
            this.setInput("StartIndex", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your full Google email address e.g., martha.temboo@gmail.com.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMetrics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMetricsResultSet = function(resultStream) {
    GetMetricsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "PageViews" output from this Choreo execution. ((integer) The page views parsed from the Google Analytics response)
        */
        this.get_PageViews = function() {
            return this.getResult("PageViews");
        }
        /*
        Retrieve the value for the "Bounces" output from this Choreo execution. ((integer) The bounces metrics parsed from the Google Analytics response)
        */
        this.get_Bounces = function() {
            return this.getResult("Bounces");
        }
        /*
        Retrieve the value for the "Visits" output from this Choreo execution. ((integer) The visits metrics parsed from the Google Analytics response.)
        */
        this.get_Visits = function() {
            return this.getResult("Visits");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMetrics, choreography.Choreography);
util.inherits(GetMetricsInputSet, choreography.InputSet);
util.inherits(GetMetricsResultSet, choreography.ResultSet);
exports.GetMetrics = GetMetrics;

