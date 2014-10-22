
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
    var location = "/Library/Stripe/Subscriptions/CancelSubscription"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AtPeriodEnd input for this Choreo. ((optional, boolean) Delays the cancellation of the subscription until the end of the current period when set to 1. Defaults to 0.)
        */
        this.set_AtPeriodEnd = function(value) {
            this.setInput("AtPeriodEnd", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The id of the customer whose subscription you want to cancel)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CancelSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CancelSubscriptionResultSet = function(resultStream) {
    CancelSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
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
    UpdateSubscription
    Subscribes a customer to a specified plan.
*/


var UpdateSubscription = function(session) {
    /*
        Create a new instance of the UpdateSubscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Subscriptions/UpdateSubscription"
    UpdateSubscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateSubscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateSubscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateSubscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateSubscriptionInputSet = function() {
    UpdateSubscriptionInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Coupon input for this Choreo. ((optional, string) If you provide a coupon code, it can be specified here)
        */
        this.set_Coupon = function(value) {
            this.setInput("Coupon", value);
        }

        /*
        Set the value of the CustomerID input for this Choreo. ((required, string) The unique identifier of the customer you want to subscribe to a plan)
        */
        this.set_CustomerID = function(value) {
            this.setInput("CustomerID", value);
        }

        /*
        Set the value of the Plan input for this Choreo. ((required, string) The unique identifier of the plan to subscribe the customer to)
        */
        this.set_Plan = function(value) {
            this.setInput("Plan", value);
        }

        /*
        Set the value of the Prorate input for this Choreo. ((optional, boolean) When set to 1, Stripe will prorate switching plans during a billing cycle. When set to 0, this feature is disabled. Defaults to 1.)
        */
        this.set_Prorate = function(value) {
            this.setInput("Prorate", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((optional, string) The token associated with a set of credit card details.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the TrialEnd input for this Choreo. ((optional, date) A timestamp representing the end of the trial period in UTC. The customer will not be charged during the trial period.)
        */
        this.set_TrialEnd = function(value) {
            this.setInput("TrialEnd", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateSubscriptionResultSet = function(resultStream) {
    UpdateSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateSubscription, choreography.Choreography);
util.inherits(UpdateSubscriptionInputSet, choreography.InputSet);
util.inherits(UpdateSubscriptionResultSet, choreography.ResultSet);
exports.UpdateSubscription = UpdateSubscription;

