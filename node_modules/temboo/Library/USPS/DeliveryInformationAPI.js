
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ExpressMailServiceRequest
    Request USPS Express Mail shipping information for a given origin and destination.
*/


var ExpressMailServiceRequest = function(session) {
    /*
        Create a new instance of the ExpressMailServiceRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/DeliveryInformationAPI/ExpressMailServiceRequest"
    ExpressMailServiceRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ExpressMailServiceRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ExpressMailServiceRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ExpressMailServiceRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ExpressMailServiceRequestInputSet = function() {
    ExpressMailServiceRequestInputSet.super_.call(this);
        /*
        Set the value of the Date input for this Choreo. ((required, date) Date the package is to be shipped. Must take the form 'MM/DD/YYYY'.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the DestinationZip input for this Choreo. ((required, integer) Five digit zip code.)
        */
        this.set_DestinationZip = function(value) {
            this.setInput("DestinationZip", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the OriginZip input for this Choreo. ((required, integer) Three or five digit zip code.)
        */
        this.set_OriginZip = function(value) {
            this.setInput("OriginZip", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ExpressMailServiceRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ExpressMailServiceRequestResultSet = function(resultStream) {
    ExpressMailServiceRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ExpressMailServiceRequest, choreography.Choreography);
util.inherits(ExpressMailServiceRequestInputSet, choreography.InputSet);
util.inherits(ExpressMailServiceRequestResultSet, choreography.ResultSet);
exports.ExpressMailServiceRequest = ExpressMailServiceRequest;


/*
    PackageServicesRequest
    Request USPS Parcel Post, Bound Printed Matter, Library Mail, or Media Mail shipping information for a given origin and destination.
*/


var PackageServicesRequest = function(session) {
    /*
        Create a new instance of the PackageServicesRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/DeliveryInformationAPI/PackageServicesRequest"
    PackageServicesRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PackageServicesRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PackageServicesRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PackageServicesRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PackageServicesRequestInputSet = function() {
    PackageServicesRequestInputSet.super_.call(this);
        /*
        Set the value of the DestinationZip input for this Choreo. ((required, integer) First 3 digits of a 5-digit zip code.)
        */
        this.set_DestinationZip = function(value) {
            this.setInput("DestinationZip", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the OriginZip input for this Choreo. ((required, integer) First 3 digits of a 5-digit zip code.  Required value.)
        */
        this.set_OriginZip = function(value) {
            this.setInput("OriginZip", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PackageServicesRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PackageServicesRequestResultSet = function(resultStream) {
    PackageServicesRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PackageServicesRequest, choreography.Choreography);
util.inherits(PackageServicesRequestInputSet, choreography.InputSet);
util.inherits(PackageServicesRequestResultSet, choreography.ResultSet);
exports.PackageServicesRequest = PackageServicesRequest;


/*
    PriorityMailServiceRequest
    Request USPS Priority Mail shipping information for a given origin and destination.
*/


var PriorityMailServiceRequest = function(session) {
    /*
        Create a new instance of the PriorityMailServiceRequest Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/DeliveryInformationAPI/PriorityMailServiceRequest"
    PriorityMailServiceRequest.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PriorityMailServiceRequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PriorityMailServiceRequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PriorityMailServiceRequest
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PriorityMailServiceRequestInputSet = function() {
    PriorityMailServiceRequestInputSet.super_.call(this);
        /*
        Set the value of the DestinationZip input for this Choreo. ((required, integer) First 3 digits of a 5-digit zip code)
        */
        this.set_DestinationZip = function(value) {
            this.setInput("DestinationZip", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the OriginZip input for this Choreo. ((required, integer) First 3 digits of a 5-digit zip code)
        */
        this.set_OriginZip = function(value) {
            this.setInput("OriginZip", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS.  Required value.)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PriorityMailServiceRequest Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PriorityMailServiceRequestResultSet = function(resultStream) {
    PriorityMailServiceRequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PriorityMailServiceRequest, choreography.Choreography);
util.inherits(PriorityMailServiceRequestInputSet, choreography.InputSet);
util.inherits(PriorityMailServiceRequestResultSet, choreography.ResultSet);
exports.PriorityMailServiceRequest = PriorityMailServiceRequest;


/*
    TrackConfirm
    Request tracking information for a package with a given tracking id.
*/


var TrackConfirm = function(session) {
    /*
        Create a new instance of the TrackConfirm Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/DeliveryInformationAPI/TrackConfirm"
    TrackConfirm.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrackConfirmResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrackConfirmInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TrackConfirm
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrackConfirmInputSet = function() {
    TrackConfirmInputSet.super_.call(this);
        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the TrackID input for this Choreo. ((required, string) The tracking number.  Can be alphanumeric characters.  Required value.)
        */
        this.set_TrackID = function(value) {
            this.setInput("TrackID", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TrackConfirm Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrackConfirmResultSet = function(resultStream) {
    TrackConfirmResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TrackConfirm, choreography.Choreography);
util.inherits(TrackConfirmInputSet, choreography.InputSet);
util.inherits(TrackConfirmResultSet, choreography.ResultSet);
exports.TrackConfirm = TrackConfirm;


/*
    TrackConfirmFields
    Track a package sent via USPS and return tracking information with details in separate XML tags.
*/


var TrackConfirmFields = function(session) {
    /*
        Create a new instance of the TrackConfirmFields Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/USPS/DeliveryInformationAPI/TrackConfirmFields"
    TrackConfirmFields.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TrackConfirmFieldsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TrackConfirmFieldsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TrackConfirmFields
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TrackConfirmFieldsInputSet = function() {
    TrackConfirmFieldsInputSet.super_.call(this);
        /*
        Set the value of the Endpoint input for this Choreo. ((optional, string) If you are accessing the production server, set to 'production'. Defaults to 'testing' which indicates that you are using the sandbox.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The password assigned by USPS)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the TrackID input for this Choreo. ((required, string) The tracking number.  Can be alphanumeric characters.)
        */
        this.set_TrackID = function(value) {
            this.setInput("TrackID", value);
        }

        /*
        Set the value of the UserId input for this Choreo. ((required, string) Alphanumeric ID assigned by USPS)
        */
        this.set_UserId = function(value) {
            this.setInput("UserId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TrackConfirmFields Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TrackConfirmFieldsResultSet = function(resultStream) {
    TrackConfirmFieldsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from USPS Web Service)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TrackConfirmFields, choreography.Choreography);
util.inherits(TrackConfirmFieldsInputSet, choreography.InputSet);
util.inherits(TrackConfirmFieldsResultSet, choreography.ResultSet);
exports.TrackConfirmFields = TrackConfirmFields;

