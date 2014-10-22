
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ActivateDevice
    Activates (or reactivates) a device given an authorization code. Returns the device API Key and Feed ID. 
*/


var ActivateDevice = function(session) {
    /*
        Create a new instance of the ActivateDevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/ActivateDevice"
    ActivateDevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ActivateDeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ActivateDeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ActivateDevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ActivateDeviceInputSet = function() {
    ActivateDeviceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) Not required for first activation. If re-activating a device, either the original device APIKey returned from the first activation or the master APIKey is required.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ActivationCode input for this Choreo. ((required, string) Activation code provided when pre-registering a device with a serial number.)
        */
        this.set_ActivationCode = function(value) {
            this.setInput("ActivationCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ActivateDevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ActivateDeviceResultSet = function(resultStream) {
    ActivateDeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Xively. Upon successful activation, it returns a JSON array containing the device APIKey, FeedID and Datastreams.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ActivateDevice, choreography.Choreography);
util.inherits(ActivateDeviceInputSet, choreography.InputSet);
util.inherits(ActivateDeviceResultSet, choreography.ResultSet);
exports.ActivateDevice = ActivateDevice;


/*
    CreateDevice
    Creates a new device in a product batch for each serial number provided. When created, each device will be in a pre-registered state awaiting activation. Creating a non-product-affiliated device is not available through the Xively API, and can only be done through the browser-only Xively Developer Workbench.
*/


var CreateDevice = function(session) {
    /*
        Create a new instance of the CreateDevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/CreateDevice"
    CreateDevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDeviceInputSet = function() {
    CreateDeviceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The product ID for the device you would like to add.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the SerialNumbers input for this Choreo. ((required, string) Comma-separated list of device serial numbers to add. Allowed characters: case-sensitive alphanumeric characters (Ab3) and the following characters: "+", "-", "_", and ":". Ex: abc:123,aBc-124.)
        */
        this.set_SerialNumbers = function(value) {
            this.setInput("SerialNumbers", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDeviceResultSet = function(resultStream) {
    CreateDeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful device creation, the code should be 201.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(CreateDevice, choreography.Choreography);
util.inherits(CreateDeviceInputSet, choreography.InputSet);
util.inherits(CreateDeviceResultSet, choreography.ResultSet);
exports.CreateDevice = CreateDevice;


/*
    DeleteDevice
    Deletes the device matching the provided serial number.
*/


var DeleteDevice = function(session) {
    /*
        Create a new instance of the DeleteDevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/DeleteDevice"
    DeleteDevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDeviceInputSet = function() {
    DeleteDeviceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The product ID for the device you would like to delete.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number for the device you would like to delete.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDeviceResultSet = function(resultStream) {
    DeleteDeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful deletion, the status code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteDevice, choreography.Choreography);
util.inherits(DeleteDeviceInputSet, choreography.InputSet);
util.inherits(DeleteDeviceResultSet, choreography.ResultSet);
exports.DeleteDevice = DeleteDevice;


/*
    ListAllDevices
    Returns a paged list of devices belonging to a specific product.
*/


var ListAllDevices = function(session) {
    /*
        Create a new instance of the ListAllDevices Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/ListAllDevices"
    ListAllDevices.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllDevicesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllDevicesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllDevices
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllDevicesInputSet = function() {
    ListAllDevicesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Activated input for this Choreo. ((optional, string) Filter for returning device serial numbers in the requested activation state. Valid values: "all" (default), "true" or "false".)
        */
        this.set_Activated = function(value) {
            this.setInput("Activated", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Indicates which page of results you are requesting. Starts from 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the PerPage input for this Choreo. ((optional, integer) Defines how many results to return per page (1 to 1000, default is 30).)
        */
        this.set_PerPage = function(value) {
            this.setInput("PerPage", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The ID for the product you would like to retrieve the list of devices for.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((optional, string) Filter by providing an exact or partial serial number string. Letters are case-insensitive. Ex: inputting 'abc' will return serials that contain 'Abc',  'aBc' and 'abc', but not 'ab-c'.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllDevices Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllDevicesResultSet = function(resultStream) {
    ListAllDevicesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllDevices, choreography.Choreography);
util.inherits(ListAllDevicesInputSet, choreography.InputSet);
util.inherits(ListAllDevicesResultSet, choreography.ResultSet);
exports.ListAllDevices = ListAllDevices;


/*
    ReadDevice
    Returns a JSON representation of the device with the provided serial number.
*/


var ReadDevice = function(session) {
    /*
        Create a new instance of the ReadDevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/ReadDevice"
    ReadDevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadDeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadDeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadDevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadDeviceInputSet = function() {
    ReadDeviceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The product ID of the device you would like to read.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The serial number for the device you would like to read.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadDevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadDeviceResultSet = function(resultStream) {
    ReadDeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadDevice, choreography.Choreography);
util.inherits(ReadDeviceInputSet, choreography.InputSet);
util.inherits(ReadDeviceResultSet, choreography.ResultSet);
exports.ReadDevice = ReadDevice;


/*
    UpdateDevice
    Updates a single device's serial number. 
*/


var UpdateDevice = function(session) {
    /*
        Create a new instance of the UpdateDevice Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Devices/UpdateDevice"
    UpdateDevice.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateDeviceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateDeviceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateDevice
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateDeviceInputSet = function() {
    UpdateDeviceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the NewSerialNumber input for this Choreo. ((required, string) The new serial number you want to update the existing device to. Allowed characters: case-sensitive alphanumeric characters (Ab3) and certain characters: "+", "-", "_", and ":". Ex: abc:123,aBc-124.)
        */
        this.set_NewSerialNumber = function(value) {
            this.setInput("NewSerialNumber", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The product ID for the device you would like to update.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the SerialNumber input for this Choreo. ((required, string) The existing serial number for the device you would like to update.)
        */
        this.set_SerialNumber = function(value) {
            this.setInput("SerialNumber", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateDevice Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateDeviceResultSet = function(resultStream) {
    UpdateDeviceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful device update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(UpdateDevice, choreography.Choreography);
util.inherits(UpdateDeviceInputSet, choreography.InputSet);
util.inherits(UpdateDeviceResultSet, choreography.ResultSet);
exports.UpdateDevice = UpdateDevice;

