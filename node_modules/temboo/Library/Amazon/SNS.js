
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddPermission
    Creates a statement for a topic's access control policy which allows an AWS account to have access to the specified Amazon SNS actions.
*/


var AddPermission = function(session) {
    /*
        Create a new instance of the AddPermission Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/AddPermission"
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
        Set the value of the AWSAccountId input for this Choreo. ((required, integer) The AWS account number of the user that will be granted access to a specified action. Enter account number omitting any dashes.)
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
        Set the value of the ActionName input for this Choreo. ((required, string) The action you want to allow for a specified user (i.e. DeleteTopic, Publish, GetTopicAttributes, etc).)
        */
        this.set_ActionName = function(value) {
            this.setInput("ActionName", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((required, string) The unique identifier for the new policy statement.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic whos access control policy you want to adjust.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
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
    ConfirmSubscription
    Verifies that the endpoint owner wishes to receive messages by verifying the token sent during the Subscribe action.
*/


var ConfirmSubscription = function(session) {
    /*
        Create a new instance of the ConfirmSubscription Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/ConfirmSubscription"
    ConfirmSubscription.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ConfirmSubscriptionResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ConfirmSubscriptionInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ConfirmSubscription
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ConfirmSubscriptionInputSet = function() {
    ConfirmSubscriptionInputSet.super_.call(this);
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
        Set the value of the AuthenticateOnUnsubscribed input for this Choreo. ((optional, boolean) Indicates that you want to disable the ability to unsubscribe from the subscription without authenticating. Specify 1 to enable this flag.)
        */
        this.set_AuthenticateOnUnsubscribed = function(value) {
            this.setInput("AuthenticateOnUnsubscribed", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The short-lived token sent to an endpoint during the Subscribe action.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic you want to confirm a subscription for.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ConfirmSubscription Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ConfirmSubscriptionResultSet = function(resultStream) {
    ConfirmSubscriptionResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ConfirmSubscription, choreography.Choreography);
util.inherits(ConfirmSubscriptionInputSet, choreography.InputSet);
util.inherits(ConfirmSubscriptionResultSet, choreography.ResultSet);
exports.ConfirmSubscription = ConfirmSubscription;


/*
    CreateTopic
    Creates a new topic that notifications can be published to.
*/


var CreateTopic = function(session) {
    /*
        Create a new instance of the CreateTopic Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/CreateTopic"
    CreateTopic.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTopicResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTopicInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTopic
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTopicInputSet = function() {
    CreateTopicInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the topic you want to create.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTopic Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTopicResultSet = function(resultStream) {
    CreateTopicResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateTopic, choreography.Choreography);
util.inherits(CreateTopicInputSet, choreography.InputSet);
util.inherits(CreateTopicResultSet, choreography.ResultSet);
exports.CreateTopic = CreateTopic;


/*
    DeleteTopic
    Deletes a specified topic and all its subscriptions.
*/


var DeleteTopic = function(session) {
    /*
        Create a new instance of the DeleteTopic Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/DeleteTopic"
    DeleteTopic.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTopicResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTopicInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTopic
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTopicInputSet = function() {
    DeleteTopicInputSet.super_.call(this);
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
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic you want to delete.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTopic Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTopicResultSet = function(resultStream) {
    DeleteTopicResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteTopic, choreography.Choreography);
util.inherits(DeleteTopicInputSet, choreography.InputSet);
util.inherits(DeleteTopicResultSet, choreography.ResultSet);
exports.DeleteTopic = DeleteTopic;


/*
    GetTopicAttributes
    Returns properties for a specified topic.
*/


var GetTopicAttributes = function(session) {
    /*
        Create a new instance of the GetTopicAttributes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/GetTopicAttributes"
    GetTopicAttributes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopicAttributesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopicAttributesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopicAttributes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopicAttributesInputSet = function() {
    GetTopicAttributesInputSet.super_.call(this);
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
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic you want to retrieve attributes for.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopicAttributes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopicAttributesResultSet = function(resultStream) {
    GetTopicAttributesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopicAttributes, choreography.Choreography);
util.inherits(GetTopicAttributesInputSet, choreography.InputSet);
util.inherits(GetTopicAttributesResultSet, choreography.ResultSet);
exports.GetTopicAttributes = GetTopicAttributes;


/*
    ListSubscriptions
    Returns a list of the user's subscriptions. Each call returns a limited list of subscriptions, up to 100.
*/


var ListSubscriptions = function(session) {
    /*
        Create a new instance of the ListSubscriptions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/ListSubscriptions"
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
        Set the value of the NextToken input for this Choreo. ((optional, string) The token returned from a previous LIstSubscriptions request.)
        */
        this.set_NextToken = function(value) {
            this.setInput("NextToken", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSubscriptions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSubscriptionsResultSet = function(resultStream) {
    ListSubscriptionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
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
    ListSubscriptionsByTopic
    Returns a list of the subscriptions for a specified topic.
*/


var ListSubscriptionsByTopic = function(session) {
    /*
        Create a new instance of the ListSubscriptionsByTopic Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/ListSubscriptionsByTopic"
    ListSubscriptionsByTopic.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSubscriptionsByTopicResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSubscriptionsByTopicInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSubscriptionsByTopic
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSubscriptionsByTopicInputSet = function() {
    ListSubscriptionsByTopicInputSet.super_.call(this);
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
        Set the value of the NextToken input for this Choreo. ((optional, string) The token returned from a previous LIstSubscriptionsByTopic request.)
        */
        this.set_NextToken = function(value) {
            this.setInput("NextToken", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic that you want to find subscriptions for.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSubscriptionsByTopic Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSubscriptionsByTopicResultSet = function(resultStream) {
    ListSubscriptionsByTopicResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSubscriptionsByTopic, choreography.Choreography);
util.inherits(ListSubscriptionsByTopicInputSet, choreography.InputSet);
util.inherits(ListSubscriptionsByTopicResultSet, choreography.ResultSet);
exports.ListSubscriptionsByTopic = ListSubscriptionsByTopic;


/*
    ListTopics
    Returns a list of the user's topics.
*/


var ListTopics = function(session) {
    /*
        Create a new instance of the ListTopics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/ListTopics"
    ListTopics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListTopicsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListTopicsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListTopics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListTopicsInputSet = function() {
    ListTopicsInputSet.super_.call(this);
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
        Set the value of the NextToken input for this Choreo. ((optional, string) The token returned from a previous LIstTopics request.)
        */
        this.set_NextToken = function(value) {
            this.setInput("NextToken", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListTopics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListTopicsResultSet = function(resultStream) {
    ListTopicsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListTopics, choreography.Choreography);
util.inherits(ListTopicsInputSet, choreography.InputSet);
util.inherits(ListTopicsResultSet, choreography.ResultSet);
exports.ListTopics = ListTopics;


/*
    Publish
    Sends a message to a topic's subscribed endpoints.
*/


var Publish = function(session) {
    /*
        Create a new instance of the Publish Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/Publish"
    Publish.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PublishResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PublishInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Publish
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PublishInputSet = function() {
    PublishInputSet.super_.call(this);
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
        Set the value of the MessageStructure input for this Choreo. ((optional, string) Can be set to 'json' if you are providing a valid JSON object for the Message input variable.)
        */
        this.set_MessageStructure = function(value) {
            this.setInput("MessageStructure", value);
        }

        /*
        Set the value of the Message input for this Choreo. ((required, string) The text for the message you want to send to the topic.)
        */
        this.set_Message = function(value) {
            this.setInput("Message", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) The "Subject" line of the message when the message is delivered to e-mail endpoints or as a JSON message.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic you want to publish to.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Publish Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PublishResultSet = function(resultStream) {
    PublishResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Publish, choreography.Choreography);
util.inherits(PublishInputSet, choreography.InputSet);
util.inherits(PublishResultSet, choreography.ResultSet);
exports.Publish = Publish;


/*
    RemovePermission
    Removes the statement from a topic's access control policy that was created with the AddPermission action.
*/


var RemovePermission = function(session) {
    /*
        Create a new instance of the RemovePermission Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/RemovePermission"
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
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Label input for this Choreo. ((required, string) The unique identifier for the policy statement that you want to delete.)
        */
        this.set_Label = function(value) {
            this.setInput("Label", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic that has an access control policy you want to adjust.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
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
    SetTopicAttributes
    Allows a topic owner to update the attribute of a topic to a new value.
*/


var SetTopicAttributes = function(session) {
    /*
        Create a new instance of the SetTopicAttributes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/SetTopicAttributes"
    SetTopicAttributes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetTopicAttributesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetTopicAttributesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetTopicAttributes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetTopicAttributesInputSet = function() {
    SetTopicAttributesInputSet.super_.call(this);
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
        Set the value of the AttributeName input for this Choreo. ((required, string) The name of the attribute you want to modify. Valid values are: Policy and DisplayName.)
        */
        this.set_AttributeName = function(value) {
            this.setInput("AttributeName", value);
        }

        /*
        Set the value of the AttributeValue input for this Choreo. ((required, string) The new value for the attribute that you want to update.)
        */
        this.set_AttributeValue = function(value) {
            this.setInput("AttributeValue", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic that has an attribute that you want to set.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetTopicAttributes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetTopicAttributesResultSet = function(resultStream) {
    SetTopicAttributesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetTopicAttributes, choreography.Choreography);
util.inherits(SetTopicAttributesInputSet, choreography.InputSet);
util.inherits(SetTopicAttributesResultSet, choreography.ResultSet);
exports.SetTopicAttributes = SetTopicAttributes;


/*
    Subscribe
    Sends the endpoint a confirmation message in preparation for subscribing an endpoint.
*/


var Subscribe = function(session) {
    /*
        Create a new instance of the Subscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/Subscribe"
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
        Set the value of the Endpoint input for this Choreo. ((required, string) The endpoint that will receive the notifications. Can be an email address, URL, or the ARN of an Amazon SQS queue depending on the protocol specified.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Protocol input for this Choreo. ((required, string) The protocol you want to use. Accepted values are: http, https, email, email-json, or sqs.)
        */
        this.set_Protocol = function(value) {
            this.setInput("Protocol", value);
        }

        /*
        Set the value of the TopicArn input for this Choreo. ((required, string) The ARN of the topic you want to subscribe to.)
        */
        this.set_TopicArn = function(value) {
            this.setInput("TopicArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Subscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SubscribeResultSet = function(resultStream) {
    SubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Subscribe, choreography.Choreography);
util.inherits(SubscribeInputSet, choreography.InputSet);
util.inherits(SubscribeResultSet, choreography.ResultSet);
exports.Subscribe = Subscribe;


/*
    Unsubscribe
    Deletes a specified subscription.
*/


var Unsubscribe = function(session) {
    /*
        Create a new instance of the Unsubscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/SNS/Unsubscribe"
    Unsubscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnsubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnsubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Unsubscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnsubscribeInputSet = function() {
    UnsubscribeInputSet.super_.call(this);
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
        Set the value of the SubscriptionArn input for this Choreo. ((required, string) The ARN of the subscription you want to delete.)
        */
        this.set_SubscriptionArn = function(value) {
            this.setInput("SubscriptionArn", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the SNS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Unsubscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnsubscribeResultSet = function(resultStream) {
    UnsubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Unsubscribe, choreography.Choreography);
util.inherits(UnsubscribeInputSet, choreography.InputSet);
util.inherits(UnsubscribeResultSet, choreography.ResultSet);
exports.Unsubscribe = Unsubscribe;

