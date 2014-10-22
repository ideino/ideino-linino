
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetSubscription
    Allows your application to check whether the notification service was previously subscribed on a specific user and to retrieve the subscription expiration date.
*/


var GetSubscription = function(session) {
    /*
        Create a new instance of the GetSubscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Notification/GetSubscription"
    GetSubscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSubscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSubscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSubscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSubscriptionInputSet = function() {
    GetSubscriptionInputSet.super_.call(this);
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
        Set the value of the CallbackURL input for this Choreo. ((required, string) The URL used when subscribing to the notification service.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to verify a subscription for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSubscriptionResultSet = function(resultStream) {
    GetSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSubscription, choreography.Choreography);
util.inherits(GetSubscriptionInputSet, choreography.InputSet);
util.inherits(GetSubscriptionResultSet, choreography.ResultSet);
exports.GetSubscription = GetSubscription;


/*
    ListSubscriptions
    Allows your application to list all the currently provisioned notification callbacks for a specific user and to retrieve the subscription expiration dates.
*/


var ListSubscriptions = function(session) {
    /*
        Create a new instance of the ListSubscriptions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Notification/ListSubscriptions"
    ListSubscriptions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSubscriptionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSubscriptionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSubscriptions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSubscriptionsInputSet = function() {
    ListSubscriptionsInputSet.super_.call(this);
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
        Set the value of the Application input for this Choreo. ((optional, integer) Used to restrict the request to the given device type. Set to 1 for Bodyscale.)
        */
        this.set_Application = function(value) {
            this.setInput("Application", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to list subscriptions for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSubscriptions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSubscriptionsResultSet = function(resultStream) {
    ListSubscriptionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSubscriptions, choreography.Choreography);
util.inherits(ListSubscriptionsInputSet, choreography.InputSet);
util.inherits(ListSubscriptionsResultSet, choreography.ResultSet);
exports.ListSubscriptions = ListSubscriptions;


/*
    RevokeSubscription
    Allows your application to revoke a previously subscribed notification.
*/


var RevokeSubscription = function(session) {
    /*
        Create a new instance of the RevokeSubscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Notification/RevokeSubscription"
    RevokeSubscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RevokeSubscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RevokeSubscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RevokeSubscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RevokeSubscriptionInputSet = function() {
    RevokeSubscriptionInputSet.super_.call(this);
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
        Set the value of the Application input for this Choreo. ((optional, integer) Specifies the device type for which the notification is to be revoked. Set to 1 for Bodyscale.)
        */
        this.set_Application = function(value) {
            this.setInput("Application", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((required, string) The URL used when subscribing to the notification service.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to revoke a subscription for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RevokeSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RevokeSubscriptionResultSet = function(resultStream) {
    RevokeSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RevokeSubscription, choreography.Choreography);
util.inherits(RevokeSubscriptionInputSet, choreography.InputSet);
util.inherits(RevokeSubscriptionResultSet, choreography.ResultSet);
exports.RevokeSubscription = RevokeSubscription;


/*
    Subscribe
    Allows your application to subscribe users to notifications. 
*/


var Subscribe = function(session) {
    /*
        Create a new instance of the Subscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Withings/Notification/Subscribe"
    Subscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Subscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SubscribeInputSet = function() {
    SubscribeInputSet.super_.call(this);
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
        Set the value of the Application input for this Choreo. ((optional, integer) Specifies the device type for which the notification is to be activated. Set to 1 for Bodyscale.)
        */
        this.set_Application = function(value) {
            this.setInput("Application", value);
        }

        /*
        Set the value of the CallbackURL input for this Choreo. ((required, string) The URL the API notification will be pushed to.)
        */
        this.set_CallbackURL = function(value) {
            this.setInput("CallbackURL", value);
        }

        /*
        Set the value of the Comment input for this Choreo. ((optional, string) A comment string used for a description to display to the user when presenting them with your notification setup.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Withings.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Withings.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((required, string) The ID of the user to setup a subscription for.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Subscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SubscribeResultSet = function(resultStream) {
    SubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Withings.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Subscribe, choreography.Choreography);
util.inherits(SubscribeInputSet, choreography.InputSet);
util.inherits(SubscribeResultSet, choreography.ResultSet);
exports.Subscribe = Subscribe;

