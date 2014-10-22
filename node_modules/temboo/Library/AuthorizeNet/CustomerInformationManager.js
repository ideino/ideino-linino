
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCustomerPaymentProfile
    Retrieves a payment profile associated with an existing customer profile.
*/


var GetCustomerPaymentProfile = function(session) {
    /*
        Create a new instance of the GetCustomerPaymentProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/CustomerInformationManager/GetCustomerPaymentProfile"
    GetCustomerPaymentProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCustomerPaymentProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCustomerPaymentProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCustomerPaymentProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCustomerPaymentProfileInputSet = function() {
    GetCustomerPaymentProfileInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the CustomerPaymentProfileId input for this Choreo. ((required, integer) The id for the payment profile you want to retrieve.)
        */
        this.set_CustomerPaymentProfileId = function(value) {
            this.setInput("CustomerPaymentProfileId", value);
        }

        /*
        Set the value of the CustomerProfileId input for this Choreo. ((required, integer) The id of the customer who's payment profile you want to return.)
        */
        this.set_CustomerProfileId = function(value) {
            this.setInput("CustomerProfileId", value);
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
A ResultSet with methods tailored to the values returned by the GetCustomerPaymentProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCustomerPaymentProfileResultSet = function(resultStream) {
    GetCustomerPaymentProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCustomerPaymentProfile, choreography.Choreography);
util.inherits(GetCustomerPaymentProfileInputSet, choreography.InputSet);
util.inherits(GetCustomerPaymentProfileResultSet, choreography.ResultSet);
exports.GetCustomerPaymentProfile = GetCustomerPaymentProfile;


/*
    GetCustomerProfile
    Retrieves an existing customer profile by id with relevant payment profiles and shipping addresses.
*/


var GetCustomerProfile = function(session) {
    /*
        Create a new instance of the GetCustomerProfile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/CustomerInformationManager/GetCustomerProfile"
    GetCustomerProfile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCustomerProfileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCustomerProfileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCustomerProfile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCustomerProfileInputSet = function() {
    GetCustomerProfileInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the CustomerProfileId input for this Choreo. ((required, integer) The id of the customer who's profile you want to return.)
        */
        this.set_CustomerProfileId = function(value) {
            this.setInput("CustomerProfileId", value);
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
A ResultSet with methods tailored to the values returned by the GetCustomerProfile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCustomerProfileResultSet = function(resultStream) {
    GetCustomerProfileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCustomerProfile, choreography.Choreography);
util.inherits(GetCustomerProfileInputSet, choreography.InputSet);
util.inherits(GetCustomerProfileResultSet, choreography.ResultSet);
exports.GetCustomerProfile = GetCustomerProfile;


/*
    GetCustomerProfileIds
    Retrieves all existing customer profile IDs.
*/


var GetCustomerProfileIds = function(session) {
    /*
        Create a new instance of the GetCustomerProfileIds Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/CustomerInformationManager/GetCustomerProfileIds"
    GetCustomerProfileIds.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCustomerProfileIdsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCustomerProfileIdsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCustomerProfileIds
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCustomerProfileIdsInputSet = function() {
    GetCustomerProfileIdsInputSet.super_.call(this);
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
A ResultSet with methods tailored to the values returned by the GetCustomerProfileIds Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCustomerProfileIdsResultSet = function(resultStream) {
    GetCustomerProfileIdsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCustomerProfileIds, choreography.Choreography);
util.inherits(GetCustomerProfileIdsInputSet, choreography.InputSet);
util.inherits(GetCustomerProfileIdsResultSet, choreography.ResultSet);
exports.GetCustomerProfileIds = GetCustomerProfileIds;


/*
    GetCustomerShippingAddress
    Retrieves a customer shipping address for an existing customer profile.
*/


var GetCustomerShippingAddress = function(session) {
    /*
        Create a new instance of the GetCustomerShippingAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/AuthorizeNet/CustomerInformationManager/GetCustomerShippingAddress"
    GetCustomerShippingAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCustomerShippingAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCustomerShippingAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCustomerShippingAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCustomerShippingAddressInputSet = function() {
    GetCustomerShippingAddressInputSet.super_.call(this);
        /*
        Set the value of the APILoginId input for this Choreo. ((required, string) The API Login Id provided by Authorize.net when signing up for a developer account.)
        */
        this.set_APILoginId = function(value) {
            this.setInput("APILoginId", value);
        }

        /*
        Set the value of the CustomerAddressId input for this Choreo. ((required, integer) The id for the shipping profile you want to retrieve.)
        */
        this.set_CustomerAddressId = function(value) {
            this.setInput("CustomerAddressId", value);
        }

        /*
        Set the value of the CustomerProfileId input for this Choreo. ((required, integer) The id of the customer who's shipping address you want to return.)
        */
        this.set_CustomerProfileId = function(value) {
            this.setInput("CustomerProfileId", value);
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
A ResultSet with methods tailored to the values returned by the GetCustomerShippingAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCustomerShippingAddressResultSet = function(resultStream) {
    GetCustomerShippingAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Authorize.net.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCustomerShippingAddress, choreography.Choreography);
util.inherits(GetCustomerShippingAddressInputSet, choreography.InputSet);
util.inherits(GetCustomerShippingAddressResultSet, choreography.ResultSet);
exports.GetCustomerShippingAddress = GetCustomerShippingAddress;

