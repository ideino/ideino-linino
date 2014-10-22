
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddPermission
    Adds a permission to a queue for a specific principal user.
*/


var AddPermission = function(session) {
    /*
        Create a new instance of the AddPermission Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/AddPermission"
    AddPermission.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddPermissionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddPermissionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddPermission
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddPermissionInputSet = function() {
    AddPermissionInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId1 input for this Choreo. ((required, integer) The AWS account number of the user that will be granted access to a specified action. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId1 = function(value) {
            this.setInput("AWSAccountId1", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account number of the queue owner. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ActionName input for this Choreo. ((required, string) The action to allow for a specified user. Valid values: SendMessage, ReceiveMessage, DeleteMessage,ChangeMessageVisibility, GetQueueAttributes.)
        */
        this.set_ActionName = function(value) {
            this.setInput("ActionName", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((required, string) The unique identifier for the new permission that is being set.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue that you're granting access to.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddPermission Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddPermissionResultSet = function(resultStream) {
    AddPermissionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddPermission, choreography.Choreography);
util.inherits(AddPermissionInputSet, choreography.InputSet);
util.inherits(AddPermissionResultSet, choreography.ResultSet);
exports.AddPermission = AddPermission;


/*
    ChangeMessageVisibility
    Updates the visibility timeout parameter of a message.
*/


var ChangeMessageVisibility = function(session) {
    /*
        Create a new instance of the ChangeMessageVisibility Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/ChangeMessageVisibility"
    ChangeMessageVisibility.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ChangeMessageVisibilityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ChangeMessageVisibilityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ChangeMessageVisibility
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ChangeMessageVisibilityInputSet = function() {
    ChangeMessageVisibilityInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account id associated with the queue. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue that contains the message.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the ReceiptHandle input for this Choreo. ((required, string) The receipt handle associated with the message you want to modify. This is returned in the RecieveMessage request.)
        */
        this.set_ReceiptHandle = function(value) {
            this.setInput("ReceiptHandle", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VisibilityTimeout input for this Choreo. ((required, integer) The new value for the visibility timeout of the message (in seconds).)
        */
        this.set_VisibilityTimeout = function(value) {
            this.setInput("VisibilityTimeout", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ChangeMessageVisibility Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ChangeMessageVisibilityResultSet = function(resultStream) {
    ChangeMessageVisibilityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ChangeMessageVisibility, choreography.Choreography);
util.inherits(ChangeMessageVisibilityInputSet, choreography.InputSet);
util.inherits(ChangeMessageVisibilityResultSet, choreography.ResultSet);
exports.ChangeMessageVisibility = ChangeMessageVisibility;


/*
    CreateQueue
    Creates a new queue with a specified queue name.
*/


var CreateQueue = function(session) {
    /*
        Create a new instance of the CreateQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/CreateQueue"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the DefaultVisibilityTimeout input for this Choreo. ((optional, integer) The visibility timeout (in seconds) to use for the newly created queue.)
        */
        this.set_DefaultVisibilityTimeout = function(value) {
            this.setInput("DefaultVisibilityTimeout", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue you want to create.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateQueueResultSet = function(resultStream) {
    CreateQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
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
    DeleteMessage
    Deletes a particular message from a specified queue.
*/


var DeleteMessage = function(session) {
    /*
        Create a new instance of the DeleteMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/DeleteMessage"
    DeleteMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteMessageInputSet = function() {
    DeleteMessageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account id associated with the queue. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue that contains the message you want to delete.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the ReceiptHandle input for this Choreo. ((required, string) The receipt handle associated with the message you want to delete. This is returned in the RecieveMessage request.)
        */
        this.set_ReceiptHandle = function(value) {
            this.setInput("ReceiptHandle", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteMessageResultSet = function(resultStream) {
    DeleteMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteMessage, choreography.Choreography);
util.inherits(DeleteMessageInputSet, choreography.InputSet);
util.inherits(DeleteMessageResultSet, choreography.ResultSet);
exports.DeleteMessage = DeleteMessage;


/*
    DeleteQueue
    Deletes a queue with a specified queue URL.
*/


var DeleteQueue = function(session) {
    /*
        Create a new instance of the DeleteQueue Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/DeleteQueue"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The id for the AWS account associated with the queue you're deleting a message from (remove all dashes in the account number).)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue you want to delete.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteQueue Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteQueueResultSet = function(resultStream) {
    DeleteQueueResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
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
    GetQueueAttributes
    Retrieves one or all attributes of a queue.
*/


var GetQueueAttributes = function(session) {
    /*
        Create a new instance of the GetQueueAttributes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/GetQueueAttributes"
    GetQueueAttributes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetQueueAttributesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetQueueAttributesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetQueueAttributes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetQueueAttributesInputSet = function() {
    GetQueueAttributesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account number of the queue owner. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AttributeName input for this Choreo. ((optional, string) The name of the attribute that you want to retrieve for the specified queue. Defaults to 'All'.)
        */
        this.set_AttributeName = function(value) {
            this.setInput("AttributeName", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue to retrieve attributes for.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetQueueAttributes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetQueueAttributesResultSet = function(resultStream) {
    GetQueueAttributesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetQueueAttributes, choreography.Choreography);
util.inherits(GetQueueAttributesInputSet, choreography.InputSet);
util.inherits(GetQueueAttributesResultSet, choreography.ResultSet);
exports.GetQueueAttributes = GetQueueAttributes;


/*
    ListQueues
    Returns a list of your queues.
*/


var ListQueues = function(session) {
    /*
        Create a new instance of the ListQueues Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/ListQueues"
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
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the QueueNamePrefix input for this Choreo. ((optional, string) A string used to filter the list of queues.)
        */
        this.set_QueueNamePrefix = function(value) {
            this.setInput("QueueNamePrefix", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListQueues Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListQueuesResultSet = function(resultStream) {
    ListQueuesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListQueues, choreography.Choreography);
util.inherits(ListQueuesInputSet, choreography.InputSet);
util.inherits(ListQueuesResultSet, choreography.ResultSet);
exports.ListQueues = ListQueues;


/*
    ReceiveMessage
    Returns one or more messages from the specified queue.
*/


var ReceiveMessage = function(session) {
    /*
        Create a new instance of the ReceiveMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/ReceiveMessage"
    ReceiveMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReceiveMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReceiveMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReceiveMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReceiveMessageInputSet = function() {
    ReceiveMessageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The id for the AWS account associated with the queue you're retrieving a message from (remove all dashes in the account number).)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AttributeName input for this Choreo. ((optional, string) The attribute you to return. Values are: All (default), SenderId, SentTimestamp, ApproximateReceiveCount, or ApproximateFirstReceiveTimestamp.)
        */
        this.set_AttributeName = function(value) {
            this.setInput("AttributeName", value);
        }

        /*
        Set the value of the MaxNumberOfMessages input for this Choreo. ((optional, integer) The maximum number of messages to return. Defaults to 1.)
        */
        this.set_MaxNumberOfMessages = function(value) {
            this.setInput("MaxNumberOfMessages", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue you want to retrieve a message from.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VisibilityTimeout input for this Choreo. ((optional, integer) The duration (in seconds) that the received messages are hidden from future retrieve requests after a ReceiveMessage request (max is 43200).)
        */
        this.set_VisibilityTimeout = function(value) {
            this.setInput("VisibilityTimeout", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReceiveMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReceiveMessageResultSet = function(resultStream) {
    ReceiveMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReceiveMessage, choreography.Choreography);
util.inherits(ReceiveMessageInputSet, choreography.InputSet);
util.inherits(ReceiveMessageResultSet, choreography.ResultSet);
exports.ReceiveMessage = ReceiveMessage;


/*
    RemovePermission
    Removes any permission in the queue policy by specifying the permission label.
*/


var RemovePermission = function(session) {
    /*
        Create a new instance of the RemovePermission Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/RemovePermission"
    RemovePermission.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemovePermissionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemovePermissionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemovePermission
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemovePermissionInputSet = function() {
    RemovePermissionInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account number of the queue owner. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((required, string) The unique identifier for the permission that is being removed.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue that that has the policy you want to adjust.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemovePermission Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemovePermissionResultSet = function(resultStream) {
    RemovePermissionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RemovePermission, choreography.Choreography);
util.inherits(RemovePermissionInputSet, choreography.InputSet);
util.inherits(RemovePermissionResultSet, choreography.ResultSet);
exports.RemovePermission = RemovePermission;


/*
    SendMessage
    Sends a message to a specified queue.
*/


var SendMessage = function(session) {
    /*
        Create a new instance of the SendMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/SendMessage"
    SendMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SendMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendMessageInputSet = function() {
    SendMessageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The id for the AWS account associated with the queue you're sending a message to (remove all dashes in the account number).)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the MessageBody input for this Choreo. ((required, string) The message to send. Maximum size is 64 KB.)
        */
        this.set_MessageBody = function(value) {
            this.setInput("MessageBody", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue you want to send a message to.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SendMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendMessageResultSet = function(resultStream) {
    SendMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SendMessage, choreography.Choreography);
util.inherits(SendMessageInputSet, choreography.InputSet);
util.inherits(SendMessageResultSet, choreography.ResultSet);
exports.SendMessage = SendMessage;


/*
    SetQueueAttributes
    Sets an attribute of a specified queue.
*/


var SetQueueAttributes = function(session) {
    /*
        Create a new instance of the SetQueueAttributes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SQS/SetQueueAttributes"
    SetQueueAttributes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetQueueAttributesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetQueueAttributesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetQueueAttributes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetQueueAttributesInputSet = function() {
    SetQueueAttributesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account number of the queue owner. Enter account number omitting any dashes.)
        */
        this.set_AWSAccountId = function(value) {
            this.setInput("AWSAccountId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AttributeName input for this Choreo. ((required, string) The name of the attribute that you want to set. Valid values are: VisibilityTimeout, Policy, MaximumMessageSize, or MessageRetentionPeriod.)
        */
        this.set_AttributeName = function(value) {
            this.setInput("AttributeName", value);
        }

        /*
        Set the value of the AttributeValue input for this Choreo. ((required, string) The value of the attribute you want to set. Corresponds to the AttributeName you specify.)
        */
        this.set_AttributeValue = function(value) {
            this.setInput("AttributeValue", value);
        }

        /*
        Set the value of the QueueName input for this Choreo. ((required, string) The name of the queue you want to set attributes for.)
        */
        this.set_QueueName = function(value) {
            this.setInput("QueueName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SQS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetQueueAttributes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetQueueAttributesResultSet = function(resultStream) {
    SetQueueAttributesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetQueueAttributes, choreography.Choreography);
util.inherits(SetQueueAttributesInputSet, choreography.InputSet);
util.inherits(SetQueueAttributesResultSet, choreography.ResultSet);
exports.SetQueueAttributes = SetQueueAttributes;

