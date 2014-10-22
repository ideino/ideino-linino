
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateQueue
    Creates a new queue within a Twilio account.
*/


var CreateQueue = function(session) {
    /*
        Create a new instance of the CreateQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Queues/CreateQueue"
    CreateQueue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateQueueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateQueueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateQueue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateQueueInputSet = function() {
    CreateQueueInputSet.super_.call(this);
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
        Set the value of the FriendlyName input for this Choreo. ((required, string) A unique identifier for this queue.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the MaxSize input for this Choreo. ((optional, integer) The maximum size of this queue. The default is 100. The maximum is 1000.)
        */
        this.set_MaxSize = function(value) {
            this.setInput("MaxSize", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount that the queue should be associated with. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateQueueResultSet = function(resultStream) {
    CreateQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateQueue, choreography.Choreography);
util.inherits(CreateQueueInputSet, choreography.InputSet);
util.inherits(CreateQueueResultSet, choreography.ResultSet);
exports.CreateQueue = CreateQueue;


/*
    DeleteQueue
    Deletes an individual queue.
*/


var DeleteQueue = function(session) {
    /*
        Create a new instance of the DeleteQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Queues/DeleteQueue"
    DeleteQueue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteQueueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteQueueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteQueue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteQueueInputSet = function() {
    DeleteQueueInputSet.super_.call(this);
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
        Set the value of the QueueSID input for this Choreo. ((required, string) The id of the queue to delete.)
        */
        this.set_QueueSID = function(value) {
            this.setInput("QueueSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the queue. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteQueueResultSet = function(resultStream) {
    DeleteQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteQueue, choreography.Choreography);
util.inherits(DeleteQueueInputSet, choreography.InputSet);
util.inherits(DeleteQueueResultSet, choreography.ResultSet);
exports.DeleteQueue = DeleteQueue;


/*
    GetQueue
    Retrieves details for an individual queue.
*/


var GetQueue = function(session) {
    /*
        Create a new instance of the GetQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Queues/GetQueue"
    GetQueue.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetQueueResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetQueueInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetQueue
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetQueueInputSet = function() {
    GetQueueInputSet.super_.call(this);
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
        Set the value of the QueueSID input for this Choreo. ((required, string) The id of the queue to retrieve.)
        */
        this.set_QueueSID = function(value) {
            this.setInput("QueueSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the queue to retrieve. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetQueueResultSet = function(resultStream) {
    GetQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetQueue, choreography.Choreography);
util.inherits(GetQueueInputSet, choreography.InputSet);
util.inherits(GetQueueResultSet, choreography.ResultSet);
exports.GetQueue = GetQueue;


/*
    ListQueueMembers
    Retrieves a list of members in a given queue.
*/


var ListQueueMembers = function(session) {
    /*
        Create a new instance of the ListQueueMembers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Queues/ListQueueMembers"
    ListQueueMembers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListQueueMembersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListQueueMembersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListQueueMembers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListQueueMembersInputSet = function() {
    ListQueueMembersInputSet.super_.call(this);
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
        Set the value of the QueueSID input for this Choreo. ((required, string) The id of the queue that the members belong to.)
        */
        this.set_QueueSID = function(value) {
            this.setInput("QueueSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the queue members to retrieve. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListQueueMembers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListQueueMembersResultSet = function(resultStream) {
    ListQueueMembersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListQueueMembers, choreography.Choreography);
util.inherits(ListQueueMembersInputSet, choreography.InputSet);
util.inherits(ListQueueMembersResultSet, choreography.ResultSet);
exports.ListQueueMembers = ListQueueMembers;


/*
    ListQueues
    Returns a list of queues within a Twilio account.
*/


var ListQueues = function(session) {
    /*
        Create a new instance of the ListQueues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/Queues/ListQueues"
    ListQueues.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListQueuesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListQueuesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListQueues
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListQueuesInputSet = function() {
    ListQueuesInputSet.super_.call(this);
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
        Set the value of the SubAccountSID input for this Choreo. ((optional, string) The SID of the subaccount associated with the list of queues to retrieve. If not specified, the main AccountSID used to authenticate is used in the request.)
        */
        this.set_SubAccountSID = function(value) {
            this.setInput("SubAccountSID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListQueues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListQueuesResultSet = function(resultStream) {
    ListQueuesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListQueues, choreography.Choreography);
util.inherits(ListQueuesInputSet, choreography.InputSet);
util.inherits(ListQueuesResultSet, choreography.ResultSet);
exports.ListQueues = ListQueues;

