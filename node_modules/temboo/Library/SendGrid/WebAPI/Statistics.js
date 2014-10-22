
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetAllTimeCategoryTotals
    Obtain statistics by specified categories.
*/


var GetAllTimeCategoryTotals = function(session) {
    /*
        Create a new instance of the GetAllTimeCategoryTotals Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Statistics/GetAllTimeCategoryTotals"
    GetAllTimeCategoryTotals.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllTimeCategoryTotalsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllTimeCategoryTotalsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllTimeCategoryTotals
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllTimeCategoryTotalsInputSet = function() {
    GetAllTimeCategoryTotalsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Aggregate input for this Choreo. ((required, integer) Retrieve category statistics.  Default is set to 1.)
        */
        this.set_Aggregate = function(value) {
            this.setInput("Aggregate", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((required, string) Enter a category for which statistics will be retrieved. It must be an existing category that has statistics. If the category entered does not exist, an empty result set will be returned.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Days input for this Choreo. ((optional, integer) The number of days (greater than 0) for which block data will be retrieved. Note that you can use either the days parameter or the start_date and end_date parameter.)
        */
        this.set_Days = function(value) {
            this.setInput("Days", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The start of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format, and must be earlier than the EndDate variable value. Use this ,or Days.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetAllTimeCategoryTotals Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllTimeCategoryTotalsResultSet = function(resultStream) {
    GetAllTimeCategoryTotalsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllTimeCategoryTotals, choreography.Choreography);
util.inherits(GetAllTimeCategoryTotalsInputSet, choreography.InputSet);
util.inherits(GetAllTimeCategoryTotalsResultSet, choreography.ResultSet);
exports.GetAllTimeCategoryTotals = GetAllTimeCategoryTotals;


/*
    GetCategoryStatistics
    Obtain statistics by specified categories.
*/


var GetCategoryStatistics = function(session) {
    /*
        Create a new instance of the GetCategoryStatistics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Statistics/GetCategoryStatistics"
    GetCategoryStatistics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCategoryStatisticsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCategoryStatisticsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCategoryStatistics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCategoryStatisticsInputSet = function() {
    GetCategoryStatisticsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((required, string) The category for which statistics will be retrieved. It must be an existing category that has statistics. If the category entered does not exist, an empty result set will be returned.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Days input for this Choreo. ((optional, integer) The number of days (greater than 0) for which block data will be retrieved. Note that you can use either the days parameter or the start_date and end_date parameter.)
        */
        this.set_Days = function(value) {
            this.setInput("Days", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) The end of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The start of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format, and must be earlier than the EndDate variable value. Use this ,or Days.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetCategoryStatistics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCategoryStatisticsResultSet = function(resultStream) {
    GetCategoryStatisticsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCategoryStatistics, choreography.Choreography);
util.inherits(GetCategoryStatisticsInputSet, choreography.InputSet);
util.inherits(GetCategoryStatisticsResultSet, choreography.ResultSet);
exports.GetCategoryStatistics = GetCategoryStatistics;


/*
    ListAllCategories
    Retrieve a list of all the categories used in a SendGrid account.
*/


var ListAllCategories = function(session) {
    /*
        Create a new instance of the ListAllCategories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Statistics/ListAllCategories"
    ListAllCategories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllCategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllCategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllCategories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllCategoriesInputSet = function() {
    ListAllCategoriesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListAllCategories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllCategoriesResultSet = function(resultStream) {
    ListAllCategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllCategories, choreography.Choreography);
util.inherits(ListAllCategoriesInputSet, choreography.InputSet);
util.inherits(ListAllCategoriesResultSet, choreography.ResultSet);
exports.ListAllCategories = ListAllCategories;


/*
    RetrieveAggregates
    Retrieve all-time total usage statistics for your subusers
*/


var RetrieveAggregates = function(session) {
    /*
        Create a new instance of the RetrieveAggregates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Statistics/RetrieveAggregates"
    RetrieveAggregates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveAggregatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveAggregatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveAggregates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveAggregatesInputSet = function() {
    RetrieveAggregatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Aggregate input for this Choreo. ((required, integer) Retrieve all time totals. Must be set to 1. )
        */
        this.set_Aggregate = function(value) {
            this.setInput("Aggregate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveAggregates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveAggregatesResultSet = function(resultStream) {
    RetrieveAggregatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveAggregates, choreography.Choreography);
util.inherits(RetrieveAggregatesInputSet, choreography.InputSet);
util.inherits(RetrieveAggregatesResultSet, choreography.ResultSet);
exports.RetrieveAggregates = RetrieveAggregates;


/*
    RetrieveStatistics
    Retrieve usage statistics.

*/


var RetrieveStatistics = function(session) {
    /*
        Create a new instance of the RetrieveStatistics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/Statistics/RetrieveStatistics"
    RetrieveStatistics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveStatisticsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveStatisticsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveStatistics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveStatisticsInputSet = function() {
    RetrieveStatisticsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Days input for this Choreo. ((optional, integer) The number of days (greater than 0) for which block data will be retrieved.)
        */
        this.set_Days = function(value) {
            this.setInput("Days", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Specify the end of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The start of the date range for which blocks are to be retireved. The specified date must be in YYYY-MM-DD format, and must be earlier than the EndDate variable value.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveStatistics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveStatisticsResultSet = function(resultStream) {
    RetrieveStatisticsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveStatistics, choreography.Choreography);
util.inherits(RetrieveStatisticsInputSet, choreography.InputSet);
util.inherits(RetrieveStatisticsResultSet, choreography.ResultSet);
exports.RetrieveStatistics = RetrieveStatistics;

