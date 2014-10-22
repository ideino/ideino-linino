
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetBatchStatistics
    Returns batch statistics by payment type for a specified batch ID.
*/


var GetBatchStatistics = function(session) {
    /*
        Create a new instance of the GetBatchStatistics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/TransactionDetailsAPI/GetBatchStatistics"
    GetBatchStatistics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBatchStatisticsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBatchStatisticsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBatchStatistics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBatchStatisticsInputSet = function() {
    GetBatchStatisticsInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the BatchId input for this Choreo. ((required, integer) The id of the batch that you want to retrieve a list of transactions for.)
        */
        this.set_BatchId = function(value) {
            this.setInput("BatchId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) Set to api.authorize.net when running in production. Defaults to apitest.authorize.net for sandbox testing.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBatchStatistics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBatchStatisticsResultSet = function(resultStream) {
    GetBatchStatisticsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBatchStatistics, choreography.Choreography);
util.inherits(GetBatchStatisticsInputSet, choreography.InputSet);
util.inherits(GetBatchStatisticsResultSet, choreography.ResultSet);
exports.GetBatchStatistics = GetBatchStatistics;


/*
    GetSettledBatchList
    Returns data about a settled batch including: Batch ID, Settlement Time, and Settlement State, and Batch Statistics by payment type.
*/


var GetSettledBatchList = function(session) {
    /*
        Create a new instance of the GetSettledBatchList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/TransactionDetailsAPI/GetSettledBatchList"
    GetSettledBatchList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSettledBatchListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSettledBatchListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSettledBatchList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSettledBatchListInputSet = function() {
    GetSettledBatchListInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) Set to api.authorize.net when running in production. Defaults to apitest.authorize.net for sandbox testing.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the FirstSettlementDate input for this Choreo. ((required, date) Can be an epoch timestamp in milliseconds or formatted like 2010-12-01T00:00:00Z.)
        */
        this.set_FirstSettlementDate = function(value) {
            this.setInput("FirstSettlementDate", value);
        }

        /*
        Set the value of the IncludeStatistics input for this Choreo. ((optional, boolean) When 1 is specified, batch statistics by payment type are returned. Defaults to 1.)
        */
        this.set_IncludeStatistics = function(value) {
            this.setInput("IncludeStatistics", value);
        }

        /*
        Set the value of the LastSettlementDate input for this Choreo. ((required, date) Can be an epoch timestamp in milliseconds or formatted like 2010-12-01T00:00:00Z.)
        */
        this.set_LastSettlementDate = function(value) {
            this.setInput("LastSettlementDate", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSettledBatchList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSettledBatchListResultSet = function(resultStream) {
    GetSettledBatchListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSettledBatchList, choreography.Choreography);
util.inherits(GetSettledBatchListInputSet, choreography.InputSet);
util.inherits(GetSettledBatchListResultSet, choreography.ResultSet);
exports.GetSettledBatchList = GetSettledBatchList;


/*
    GetTransactionDetails
    Returns transaction details for a specified transaction ID.
*/


var GetTransactionDetails = function(session) {
    /*
        Create a new instance of the GetTransactionDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/TransactionDetailsAPI/GetTransactionDetails"
    GetTransactionDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTransactionDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTransactionDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTransactionDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTransactionDetailsInputSet = function() {
    GetTransactionDetailsInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) Set to api.authorize.net when running in production. Defaults to apitest.authorize.net for sandbox testing.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TransactionId input for this Choreo. ((required, integer) The id of the transaction that you want to retrieve information for.)
        */
        this.set_TransactionId = function(value) {
            this.setInput("TransactionId", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTransactionDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTransactionDetailsResultSet = function(resultStream) {
    GetTransactionDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTransactionDetails, choreography.Choreography);
util.inherits(GetTransactionDetailsInputSet, choreography.InputSet);
util.inherits(GetTransactionDetailsResultSet, choreography.ResultSet);
exports.GetTransactionDetails = GetTransactionDetails;


/*
    GetTransactionList
    Returns a list of transactions and their details for a specified batch ID.
*/


var GetTransactionList = function(session) {
    /*
        Create a new instance of the GetTransactionList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/TransactionDetailsAPI/GetTransactionList"
    GetTransactionList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTransactionListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTransactionListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTransactionList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTransactionListInputSet = function() {
    GetTransactionListInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the BatchId input for this Choreo. ((required, integer) The id of the batch that you want to retrieve a list of transactions for.)
        */
        this.set_BatchId = function(value) {
            this.setInput("BatchId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) Set to api.authorize.net when running in production. Defaults to apitest.authorize.net for sandbox testing.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTransactionList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTransactionListResultSet = function(resultStream) {
    GetTransactionListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTransactionList, choreography.Choreography);
util.inherits(GetTransactionListInputSet, choreography.InputSet);
util.inherits(GetTransactionListResultSet, choreography.ResultSet);
exports.GetTransactionList = GetTransactionList;


/*
    GetUnsettledTransactionList
    Returns limited details for unsettled transactions.
*/


var GetUnsettledTransactionList = function(session) {
    /*
        Create a new instance of the GetUnsettledTransactionList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/TransactionDetailsAPI/GetUnsettledTransactionList"
    GetUnsettledTransactionList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUnsettledTransactionListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUnsettledTransactionListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUnsettledTransactionList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUnsettledTransactionListInputSet = function() {
    GetUnsettledTransactionListInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) Set to api.authorize.net when running in production. Defaults to apitest.authorize.net for sandbox testing.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUnsettledTransactionList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUnsettledTransactionListResultSet = function(resultStream) {
    GetUnsettledTransactionListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUnsettledTransactionList, choreography.Choreography);
util.inherits(GetUnsettledTransactionListInputSet, choreography.InputSet);
util.inherits(GetUnsettledTransactionListResultSet, choreography.ResultSet);
exports.GetUnsettledTransactionList = GetUnsettledTransactionList;

