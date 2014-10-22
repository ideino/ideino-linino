
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteNotification
    Delete a notification from the account log.
*/


var DeleteNotification = function(session) {
    /*
        Create a new instance of the DeleteNotification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Notifications/DeleteNotification"
    DeleteNotification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteNotificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteNotificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteNotification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteNotificationInputSet = function() {
    DeleteNotificationInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the NotificationSID input for this Choreo. ((required, string) Enter the SID of the notification resource to be deleted.)
        */
        this.set_NotificationSID = function(value) {
            this.setInput("NotificationSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to delete the notification from. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteNotification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteNotificationResultSet = function(resultStream) {
    DeleteNotificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteNotification, choreography.Choreography);
util.inherits(DeleteNotificationInputSet, choreography.InputSet);
util.inherits(DeleteNotificationResultSet, choreography.ResultSet);
exports.DeleteNotification = DeleteNotification;


/*
    GetNotification
    Get comprehensive log information for a specified Notification SID. 
*/


var GetNotification = function(session) {
    /*
        Create a new instance of the GetNotification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Notifications/GetNotification"
    GetNotification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNotificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNotificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNotification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNotificationInputSet = function() {
    GetNotificationInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the NotificationSID input for this Choreo. ((required, string) Enter the SID of the notification resource to be retrieved.)
        */
        this.set_NotificationSID = function(value) {
            this.setInput("NotificationSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to get the notification for. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetNotification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNotificationResultSet = function(resultStream) {
    GetNotificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNotification, choreography.Choreography);
util.inherits(GetNotificationInputSet, choreography.InputSet);
util.inherits(GetNotificationResultSet, choreography.ResultSet);
exports.GetNotification = GetNotification;


/*
    ListNotifications
    Return a list of all notifications generated for a specified account.
*/


var ListNotifications = function(session) {
    /*
        Create a new instance of the ListNotifications Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Notifications/ListNotifications"
    ListNotifications.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListNotificationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListNotificationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListNotifications
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListNotificationsInputSet = function() {
    ListNotificationsInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the LogLevel input for this Choreo. ((optional, integer) Specify the log level by entering: 0 for ERROR, 1 for WARNING.)
        */
        this.set_LogLevel = function(value) {
            this.setInput("LogLevel", value);
        }

        /*
        Set the value of the MessageDate input for this Choreo. ((optional, string) Filter notifications by date.  Dates should be formatted as follows: YYYY-MM-DD.  Dates before, at, or after a specified date can be entered using inequality operators: >=YYYY-MM-DD)
        */
        this.set_MessageDate = function(value) {
            this.setInput("MessageDate", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results per page.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to retrieve. Defaults to 0.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount to list notifications for. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListNotifications Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListNotificationsResultSet = function(resultStream) {
    ListNotificationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListNotifications, choreography.Choreography);
util.inherits(ListNotificationsInputSet, choreography.InputSet);
util.inherits(ListNotificationsResultSet, choreography.ResultSet);
exports.ListNotifications = ListNotifications;

