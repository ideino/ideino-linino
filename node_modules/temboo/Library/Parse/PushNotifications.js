
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteInstallation
    Deletes an installation object.
*/


var DeleteInstallation = function(session) {
    /*
        Create a new instance of the DeleteInstallation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/DeleteInstallation"
    DeleteInstallation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInstallationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInstallationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInstallation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInstallationInputSet = function() {
    DeleteInstallationInputSet.super_.call(this);
        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the installation to retrieve.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the MasterKey input for this Choreo. ((required, string) The Master Key provided by Parse.)
        */
        this.set_MasterKey = function(value) {
            this.setInput("MasterKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInstallation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInstallationResultSet = function(resultStream) {
    DeleteInstallationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInstallation, choreography.Choreography);
util.inherits(DeleteInstallationInputSet, choreography.InputSet);
util.inherits(DeleteInstallationResultSet, choreography.ResultSet);
exports.DeleteInstallation = DeleteInstallation;


/*
    Query
    Retrieves multiple installations at once and allows you to narrow results by specifying query constraints.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/Query"
    Query.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Query
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryInputSet = function() {
    QueryInputSet.super_.call(this);
        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, boolean) A flag indicating to include a count of objects in the response. Set to 1 to include a count. Defaults to 0.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Include input for this Choreo. ((optional, string) Specify a field to return multiple types of related objects in this query.  For example, enter: post.author, to retrieve posts and their authors related to this class.)
        */
        this.set_Include = function(value) {
            this.setInput("Include", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of objects to return.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MasterKey input for this Choreo. ((required, string) The Master Key provided by Parse.)
        */
        this.set_MasterKey = function(value) {
            this.setInput("MasterKey", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Returns only records after this number. Used in combination with the Limit input to page through many results.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the Where input for this Choreo. ((optional, json) A valid query constraint formatted as a JSON-encoded string. See documentation for syntax rules.)
        */
        this.set_Where = function(value) {
            this.setInput("Where", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;


/*
    RetrieveInstallation
    Retrieves the contents of an installation object.
*/


var RetrieveInstallation = function(session) {
    /*
        Create a new instance of the RetrieveInstallation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/RetrieveInstallation"
    RetrieveInstallation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveInstallationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveInstallationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveInstallation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveInstallationInputSet = function() {
    RetrieveInstallationInputSet.super_.call(this);
        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the installation to retrieve.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveInstallation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveInstallationResultSet = function(resultStream) {
    RetrieveInstallationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveInstallation, choreography.Choreography);
util.inherits(RetrieveInstallationInputSet, choreography.InputSet);
util.inherits(RetrieveInstallationResultSet, choreography.ResultSet);
exports.RetrieveInstallation = RetrieveInstallation;


/*
    SendNotification
    Sends a push notification.
*/


var SendNotification = function(session) {
    /*
        Create a new instance of the SendNotification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/SendNotification"
    SendNotification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendNotificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendNotificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendNotification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendNotificationInputSet = function() {
    SendNotificationInputSet.super_.call(this);
        /*
        Set the value of the Notifcation input for this Choreo. ((required, json) A JSON string containing the push notification data. See documentation for syntax examples.)
        */
        this.set_Notifcation = function(value) {
            this.setInput("Notifcation", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendNotification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendNotificationResultSet = function(resultStream) {
    SendNotificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendNotification, choreography.Choreography);
util.inherits(SendNotificationInputSet, choreography.InputSet);
util.inherits(SendNotificationResultSet, choreography.ResultSet);
exports.SendNotification = SendNotification;


/*
    UpdateInstallation
    Updates an existing installation object on Parse.
*/


var UpdateInstallation = function(session) {
    /*
        Create a new instance of the UpdateInstallation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/UpdateInstallation"
    UpdateInstallation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateInstallationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateInstallationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateInstallation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateInstallationInputSet = function() {
    UpdateInstallationInputSet.super_.call(this);
        /*
        Set the value of the Installation input for this Choreo. ((required, json) A JSON string containing the installation data. See documentation for syntax examples.)
        */
        this.set_Installation = function(value) {
            this.setInput("Installation", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((required, string) The ID of the installation to update.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateInstallation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateInstallationResultSet = function(resultStream) {
    UpdateInstallationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateInstallation, choreography.Choreography);
util.inherits(UpdateInstallationInputSet, choreography.InputSet);
util.inherits(UpdateInstallationResultSet, choreography.ResultSet);
exports.UpdateInstallation = UpdateInstallation;


/*
    UploadInstallationData
    Creates an installation object on Parse.
*/


var UploadInstallationData = function(session) {
    /*
        Create a new instance of the UploadInstallationData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Parse/PushNotifications/UploadInstallationData"
    UploadInstallationData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UploadInstallationDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UploadInstallationDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UploadInstallationData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UploadInstallationDataInputSet = function() {
    UploadInstallationDataInputSet.super_.call(this);
        /*
        Set the value of the Installation input for this Choreo. ((required, json) A JSON string containing the installation data. See documentation for syntax examples.)
        */
        this.set_Installation = function(value) {
            this.setInput("Installation", value);
        }

        /*
        Set the value of the ApplicationID input for this Choreo. ((required, string) The Application ID provided by Parse.)
        */
        this.set_ApplicationID = function(value) {
            this.setInput("ApplicationID", value);
        }

        /*
        Set the value of the RESTAPIKey input for this Choreo. ((required, string) The REST API Key provided by Parse.)
        */
        this.set_RESTAPIKey = function(value) {
            this.setInput("RESTAPIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UploadInstallationData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UploadInstallationDataResultSet = function(resultStream) {
    UploadInstallationDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Parse.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UploadInstallationData, choreography.Choreography);
util.inherits(UploadInstallationDataInputSet, choreography.InputSet);
util.inherits(UploadInstallationDataResultSet, choreography.ResultSet);
exports.UploadInstallationData = UploadInstallationData;

