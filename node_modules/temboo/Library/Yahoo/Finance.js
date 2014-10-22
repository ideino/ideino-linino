
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetNews
    Retrieves the most recent Yahoo! Finance Company or Industry news items as an RSS feed.
*/


var GetNews = function(session) {
    /*
        Create a new instance of the GetNews Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yahoo/Finance/GetNews"
    GetNews.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNews
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewsInputSet = function() {
    GetNewsInputSet.super_.call(this);
        /*
        Set the value of the Company input for this Choreo. ((required, string) Ticker symbol for one or more companies to search, separated by commas (e.g. YHOO,DIS to include news about Yahoo! and Disney).)
        */
        this.set_Company = function(value) {
            this.setInput("Company", value);
        }

        /*
        Set the value of the NewsType input for this Choreo. ((required, string) Enter the type of news items you want to see in the RSS feed: headline or industry. )
        */
        this.set_NewsType = function(value) {
            this.setInput("NewsType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNews Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewsResultSet = function(resultStream) {
    GetNewsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Yahoo! Finance.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNews, choreography.Choreography);
util.inherits(GetNewsInputSet, choreography.InputSet);
util.inherits(GetNewsResultSet, choreography.ResultSet);
exports.GetNews = GetNews;

