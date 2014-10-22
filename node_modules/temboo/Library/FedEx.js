
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddressValidationRequest
    Allows you to submit an address for validation to FedEx Web Services.
*/


var AddressValidationRequest = function(session) {
    /*
        Create a new instance of the AddressValidationRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedEx/AddressValidationRequest"
    AddressValidationRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddressValidationRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddressValidationRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddressValidationRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddressValidationRequestInputSet = function() {
    AddressValidationRequestInputSet.super_.call(this);
        /*
        Set the value of the AccountNumber input for this Choreo. ((required, string) Your FedEx Account Number)
        */
        this.set_AccountNumber = function(value) {
            this.setInput("AccountNumber", value);
        }

        /*
        Set the value of the AuthenticationKey input for this Choreo. ((required, string) The Production Authentication Key provided by FedEx Web Services)
        */
        this.set_AuthenticationKey = function(value) {
            this.setInput("AuthenticationKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) The city to use in the address validation request)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((required, string) The country code to use in the address validation request)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the MeterNumber input for this Choreo. ((required, string) The Production Meter Number provided by FedEx Web Services)
        */
        this.set_MeterNumber = function(value) {
            this.setInput("MeterNumber", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Production Password provided by FedEx Web Services)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((required, string) The postal code to use in the address validation request)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The state to use in the address validation request)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Street input for this Choreo. ((required, string) The street to use in the address validation request)
        */
        this.set_Street = function(value) {
            this.setInput("Street", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddressValidationRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddressValidationRequestResultSet = function(resultStream) {
    AddressValidationRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedEx)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "DeliveryPointValidation" output from this Choreo execution. ((string) The Delivery Point Validation parsed from the FedEx response)
        */
        this.get_DeliveryPointValidation = function() {
            return this.getResult("DeliveryPointValidation");
        }
}

util.inherits(AddressValidationRequest, choreography.Choreography);
util.inherits(AddressValidationRequestInputSet, choreography.InputSet);
util.inherits(AddressValidationRequestResultSet, choreography.ResultSet);
exports.AddressValidationRequest = AddressValidationRequest;


/*
    PostalCodeInquiryRequest
    Retrieves location information from FedEx Web Services for a specified postal code.
*/


var PostalCodeInquiryRequest = function(session) {
    /*
        Create a new instance of the PostalCodeInquiryRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedEx/PostalCodeInquiryRequest"
    PostalCodeInquiryRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostalCodeInquiryRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostalCodeInquiryRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PostalCodeInquiryRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostalCodeInquiryRequestInputSet = function() {
    PostalCodeInquiryRequestInputSet.super_.call(this);
        /*
        Set the value of the AccountNumber input for this Choreo. ((required, string) Your FedEx Account Number)
        */
        this.set_AccountNumber = function(value) {
            this.setInput("AccountNumber", value);
        }

        /*
        Set the value of the AuthenticationKey input for this Choreo. ((required, string) The Production Authentication Key provided by FedEx Web Services)
        */
        this.set_AuthenticationKey = function(value) {
            this.setInput("AuthenticationKey", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((required, string) The country code to use in the inquiry request)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the MeterNumber input for this Choreo. ((required, string) The Production Meter Number provided by FedEx Web Services)
        */
        this.set_MeterNumber = function(value) {
            this.setInput("MeterNumber", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Production Password provided by FedEx Web Services)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PostalCode input for this Choreo. ((required, string) The postal code to use in the inquiry request)
        */
        this.set_PostalCode = function(value) {
            this.setInput("PostalCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PostalCodeInquiryRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostalCodeInquiryRequestResultSet = function(resultStream) {
    PostalCodeInquiryRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedEx)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PostalCodeInquiryRequest, choreography.Choreography);
util.inherits(PostalCodeInquiryRequestInputSet, choreography.InputSet);
util.inherits(PostalCodeInquiryRequestResultSet, choreography.ResultSet);
exports.PostalCodeInquiryRequest = PostalCodeInquiryRequest;


/*
    ServiceAvailabilityRequest
    Retrieves available shipping options and delivery dates for a specified origin and destination.
*/


var ServiceAvailabilityRequest = function(session) {
    /*
        Create a new instance of the ServiceAvailabilityRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedEx/ServiceAvailabilityRequest"
    ServiceAvailabilityRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ServiceAvailabilityRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ServiceAvailabilityRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ServiceAvailabilityRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ServiceAvailabilityRequestInputSet = function() {
    ServiceAvailabilityRequestInputSet.super_.call(this);
        /*
        Set the value of the AccountNumber input for this Choreo. ((required, string) Your FedEx Account Number)
        */
        this.set_AccountNumber = function(value) {
            this.setInput("AccountNumber", value);
        }

        /*
        Set the value of the AuthenticationKey input for this Choreo. ((required, string) The Production Authentication Key provided by FedEx Web Services)
        */
        this.set_AuthenticationKey = function(value) {
            this.setInput("AuthenticationKey", value);
        }

        /*
        Set the value of the DestinationCountryCode input for this Choreo. ((required, string) The destination country code to use as an input to the service availability request)
        */
        this.set_DestinationCountryCode = function(value) {
            this.setInput("DestinationCountryCode", value);
        }

        /*
        Set the value of the DestinationPostalCode input for this Choreo. ((required, string) The destination postal code to use as an input to the service availability request)
        */
        this.set_DestinationPostalCode = function(value) {
            this.setInput("DestinationPostalCode", value);
        }

        /*
        Set the value of the MeterNumber input for this Choreo. ((required, string) The Production Meter Number provided by FedEx Web Services)
        */
        this.set_MeterNumber = function(value) {
            this.setInput("MeterNumber", value);
        }

        /*
        Set the value of the OriginCountryCode input for this Choreo. ((required, string) The origin country code to use as an input to the service availability request)
        */
        this.set_OriginCountryCode = function(value) {
            this.setInput("OriginCountryCode", value);
        }

        /*
        Set the value of the OriginPostalCode input for this Choreo. ((required, string) The origin country code to use as an input to the service availability request)
        */
        this.set_OriginPostalCode = function(value) {
            this.setInput("OriginPostalCode", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Production Password provided by FedEx Web Services)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ShipDate input for this Choreo. ((required, date) The date to use for the service availability request (epoch timestamp in milliseconds or formatted like yyyy-MM-dd))
        */
        this.set_ShipDate = function(value) {
            this.setInput("ShipDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ServiceAvailabilityRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ServiceAvailabilityRequestResultSet = function(resultStream) {
    ServiceAvailabilityRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedEx)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ServiceAvailabilityRequest, choreography.Choreography);
util.inherits(ServiceAvailabilityRequestInputSet, choreography.InputSet);
util.inherits(ServiceAvailabilityRequestResultSet, choreography.ResultSet);
exports.ServiceAvailabilityRequest = ServiceAvailabilityRequest;


/*
    TrackingRequest
    Retrieves package information for a specified tracking number.
*/


var TrackingRequest = function(session) {
    /*
        Create a new instance of the TrackingRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedEx/TrackingRequest"
    TrackingRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrackingRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrackingRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TrackingRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrackingRequestInputSet = function() {
    TrackingRequestInputSet.super_.call(this);
        /*
        Set the value of the AccountNumber input for this Choreo. ((required, string) Your FedEx Account Number)
        */
        this.set_AccountNumber = function(value) {
            this.setInput("AccountNumber", value);
        }

        /*
        Set the value of the AuthenticationKey input for this Choreo. ((required, string) The Production Authentication Key provided by FedEx Web Services)
        */
        this.set_AuthenticationKey = function(value) {
            this.setInput("AuthenticationKey", value);
        }

        /*
        Set the value of the MeterNumber input for this Choreo. ((required, string) The Production Meter Number provided by FedEx Web Services)
        */
        this.set_MeterNumber = function(value) {
            this.setInput("MeterNumber", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Production Password provided by FedEx Web Services)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the TrackingNumber input for this Choreo. ((required, string) The package tracking number to use in the request)
        */
        this.set_TrackingNumber = function(value) {
            this.setInput("TrackingNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TrackingRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrackingRequestResultSet = function(resultStream) {
    TrackingRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "StatusDescription" output from this Choreo execution. ((string) The status description for the package which is parsed from the FedEx response)
        */
        this.get_StatusDescription = function() {
            return this.getResult("StatusDescription");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedEx)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TrackingRequest, choreography.Choreography);
util.inherits(TrackingRequestInputSet, choreography.InputSet);
util.inherits(TrackingRequestResultSet, choreography.ResultSet);
exports.TrackingRequest = TrackingRequest;

