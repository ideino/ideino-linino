
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetBestSellerHistory
    Retrieves information about New York Times best-sellers that match a specified search criteria.
*/


var GetBestSellerHistory = function(session) {
    /*
        Create a new instance of the GetBestSellerHistory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/BestSellers/GetBestSellerHistory"
    GetBestSellerHistory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBestSellerHistoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBestSellerHistoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBestSellerHistory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBestSellerHistoryInputSet = function() {
    GetBestSellerHistoryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AgeGroup input for this Choreo. ((optional, string) The target age group for the best seller.)
        */
        this.set_AgeGroup = function(value) {
            this.setInput("AgeGroup", value);
        }

        /*
        Set the value of the Author input for this Choreo. ((optional, string) The author of the best seller.)
        */
        this.set_Author = function(value) {
            this.setInput("Author", value);
        }

        /*
        Set the value of the Contributor input for this Choreo. ((optional, string) The author of the best seller, as well as other contributors such as the illustrator.)
        */
        this.set_Contributor = function(value) {
            this.setInput("Contributor", value);
        }

        /*
        Set the value of the ISBN input for this Choreo. ((optional, string) International Standard Book Number, 10 or 13 digits.)
        */
        this.set_ISBN = function(value) {
            this.setInput("ISBN", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The first 20 results are shown by default. To page through the results, set Offset to the appropriate value.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Price input for this Choreo. ((optional, decimal) The publisher's list price of the best seller, including decimal point.)
        */
        this.set_Price = function(value) {
            this.setInput("Price", value);
        }

        /*
        Set the value of the Publisher input for this Choreo. ((optional, string) The standardized name of the publisher.)
        */
        this.set_Publisher = function(value) {
            this.setInput("Publisher", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should bein. Valid values are: json (the default), and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) The column name to sort by. Valid values are: age-group, author, contributor, isbn, price, publisher, and title.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) The sort order. Valid values are: ASC and DESC.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the best seller to retrieve data for.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBestSellerHistory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBestSellerHistoryResultSet = function(resultStream) {
    GetBestSellerHistoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBestSellerHistory, choreography.Choreography);
util.inherits(GetBestSellerHistoryInputSet, choreography.InputSet);
util.inherits(GetBestSellerHistoryResultSet, choreography.ResultSet);
exports.GetBestSellerHistory = GetBestSellerHistory;


/*
    GetBestSellerList
    Retrieves data from a New York Times best-seller list for a specified date.
*/


var GetBestSellerList = function(session) {
    /*
        Create a new instance of the GetBestSellerList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NYTimes/BestSellers/GetBestSellerList"
    GetBestSellerList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBestSellerListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBestSellerListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBestSellerList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBestSellerListInputSet = function() {
    GetBestSellerListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NY Times.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((required, date) The best-seller list publication date in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the ListName input for this Choreo. ((required, string) The Times best-seller list to retrieve (i.e. e-book-fiction or hardcover-fiction).)
        */
        this.set_ListName = function(value) {
            this.setInput("ListName", value);
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
        Set the value of the SortBy input for this Choreo. ((optional, string) The column name to sort by. Valid values are: bestsellers-date, date, isbn, list, list-name, published-date, rank, rank-last-week, and weeks-on-list.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) The sort order. Valid values are: ASC and DESC.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBestSellerList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBestSellerListResultSet = function(resultStream) {
    GetBestSellerListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the NY Times API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBestSellerList, choreography.Choreography);
util.inherits(GetBestSellerListInputSet, choreography.InputSet);
util.inherits(GetBestSellerListResultSet, choreography.ResultSet);
exports.GetBestSellerList = GetBestSellerList;

