
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CancelSubscription
    Cancels an existing subscription.
*/


var CancelSubscription = function(session) {
    /*
        Create a new instance of the CancelSubscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/AutomatedRecurringBilling/CancelSubscription"
    CancelSubscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CancelSubscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CancelSubscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CancelSubscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CancelSubscriptionInputSet = function() {
    CancelSubscriptionInputSet.super_.call(this);
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
        Set the value of the RefId input for this Choreo. ((optional, string) The merchant assigned reference id for the subscription.)
        */
        this.set_RefId = function(value) {
            this.setInput("RefId", value);
        }

        /*
        Set the value of the SubscriptionId input for this Choreo. ((required, integer) The id of the subscription that you want to cancel.)
        */
        this.set_SubscriptionId = function(value) {
            this.setInput("SubscriptionId", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CancelSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CancelSubscriptionResultSet = function(resultStream) {
    CancelSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CancelSubscription, choreography.Choreography);
util.inherits(CancelSubscriptionInputSet, choreography.InputSet);
util.inherits(CancelSubscriptionResultSet, choreography.ResultSet);
exports.CancelSubscription = CancelSubscription;


/*
    GetSubscriptionStatus
    Returns status information for a specified subscription.
*/


var GetSubscriptionStatus = function(session) {
    /*
        Create a new instance of the GetSubscriptionStatus Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/AutomatedRecurringBilling/GetSubscriptionStatus"
    GetSubscriptionStatus.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSubscriptionStatusResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSubscriptionStatusInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSubscriptionStatus
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSubscriptionStatusInputSet = function() {
    GetSubscriptionStatusInputSet.super_.call(this);
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
        Set the value of the RefId input for this Choreo. ((optional, string) The merchant assigned reference id for the subscription.)
        */
        this.set_RefId = function(value) {
            this.setInput("RefId", value);
        }

        /*
        Set the value of the SubscriptionId input for this Choreo. ((required, integer) The id of the subscription that you want to retrieve the status for.)
        */
        this.set_SubscriptionId = function(value) {
            this.setInput("SubscriptionId", value);
        }

        /*
        Set the value of the TransactionKey input for this Choreo. ((required, string) The TransactionKey provided by Authorize.net when signing up for a developer account.)
        */
        this.set_TransactionKey = function(value) {
            this.setInput("TransactionKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSubscriptionStatus Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSubscriptionStatusResultSet = function(resultStream) {
    GetSubscriptionStatusResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSubscriptionStatus, choreography.Choreography);
util.inherits(GetSubscriptionStatusInputSet, choreography.InputSet);
util.inherits(GetSubscriptionStatusResultSet, choreography.ResultSet);
exports.GetSubscriptionStatus = GetSubscriptionStatus;

