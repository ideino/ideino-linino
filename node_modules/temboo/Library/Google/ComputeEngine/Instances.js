
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddAccessConfig
    Adds an access config to an instance's network interface.
*/


var AddAccessConfig = function(session) {
    /*
        Create a new instance of the AddAccessConfig Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/AddAccessConfig"
    AddAccessConfig.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddAccessConfigResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddAccessConfigInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddAccessConfig
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddAccessConfigInputSet = function() {
    AddAccessConfigInputSet.super_.call(this);
        /*
        Set the value of the AccessConfiguration input for this Choreo. ((optional, json) A JSON string containing the access configuration properties you wish to set. This can be used as an alternative to individual inputs that represent access configuration properties.)
        */
        this.set_AccessConfiguration = function(value) {
            this.setInput("AccessConfiguration", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) Name of the instance for which to add an access configuration.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The name of this access configuration. Defaults to "External NAT" if not specified.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NatIP input for this Choreo. ((optional, string) An external IP address associated with this instance. Specify an unused static IP address available to the project. An external IP will be drawn from a shared ephemeral pool when not specified.)
        */
        this.set_NatIP = function(value) {
            this.setInput("NatIP", value);
        }

        /*
        Set the value of the NetworkInterface input for this Choreo. ((required, string) The name of the network interface to add the access config (e.g. nic0, nic1, etc).)
        */
        this.set_NetworkInterface = function(value) {
            this.setInput("NetworkInterface", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) Type of configuration. Must be set to ONE_TO_ONE_NAT.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddAccessConfig Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddAccessConfigResultSet = function(resultStream) {
    AddAccessConfigResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(AddAccessConfig, choreography.Choreography);
util.inherits(AddAccessConfigInputSet, choreography.InputSet);
util.inherits(AddAccessConfigResultSet, choreography.ResultSet);
exports.AddAccessConfig = AddAccessConfig;


/*
    AggregatedList
    Retrieves a list of Instance resources across all available zones.
*/


var AggregatedList = function(session) {
    /*
        Create a new instance of the AggregatedList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/AggregatedList"
    AggregatedList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AggregatedListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AggregatedListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AggregatedList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AggregatedListInputSet = function() {
    AggregatedListInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq my_instance). Comparison strings can be eq (equals) or ne (not equals).)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AggregatedList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AggregatedListResultSet = function(resultStream) {
    AggregatedListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AggregatedList, choreography.Choreography);
util.inherits(AggregatedListInputSet, choreography.InputSet);
util.inherits(AggregatedListResultSet, choreography.ResultSet);
exports.AggregatedList = AggregatedList;


/*
    AttachDisk
    Attaches a Disk resource to an instance.
*/


var AttachDisk = function(session) {
    /*
        Create a new instance of the AttachDisk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/AttachDisk"
    AttachDisk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AttachDiskResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AttachDiskInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AttachDisk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AttachDiskInputSet = function() {
    AttachDiskInputSet.super_.call(this);
        /*
        Set the value of the AttachedDisk input for this Choreo. ((optional, json) A JSON string containing the attached disk properties to set. This can be used as an alternative to the individual inputs representing the attached disk properties.)
        */
        this.set_AttachedDisk = function(value) {
            this.setInput("AttachedDisk", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Boot input for this Choreo. ((conditional, boolean) Whether or not this is a boot disk. Valid values are: true or false.)
        */
        this.set_Boot = function(value) {
            this.setInput("Boot", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the DeviceName input for this Choreo. ((conditional, string) The name of the disk to attach.)
        */
        this.set_DeviceName = function(value) {
            this.setInput("DeviceName", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance to attach a disk resource to.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((conditional, string) The mode in which to attach the disk. Valid values are: READ_WRITE or READ_ONLY.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Source input for this Choreo. ((conditional, string) The URL to the Disk resource.)
        */
        this.set_Source = function(value) {
            this.setInput("Source", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((conditional, string) The type of disk. Valid values are: SCRATCH or PERSISTENT. Persistent disks must already exist before you can attach them.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AttachDisk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AttachDiskResultSet = function(resultStream) {
    AttachDiskResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AttachDisk, choreography.Choreography);
util.inherits(AttachDiskInputSet, choreography.InputSet);
util.inherits(AttachDiskResultSet, choreography.ResultSet);
exports.AttachDisk = AttachDisk;


/*
    DeleteAccessConfig
    Deletes an access configuation from an instance's network interface.
*/


var DeleteAccessConfig = function(session) {
    /*
        Create a new instance of the DeleteAccessConfig Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/DeleteAccessConfig"
    DeleteAccessConfig.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAccessConfigResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAccessConfigInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAccessConfig
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAccessConfigInputSet = function() {
    DeleteAccessConfigInputSet.super_.call(this);
        /*
        Set the value of the AccessConfig input for this Choreo. ((required, string) The name of the access configuration to delete.)
        */
        this.set_AccessConfig = function(value) {
            this.setInput("AccessConfig", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance that this access configuration applies to.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the NetworkInterface input for this Choreo. ((required, string) The name of the network interface associated with the access config that is being deleted.)
        */
        this.set_NetworkInterface = function(value) {
            this.setInput("NetworkInterface", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAccessConfig Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAccessConfigResultSet = function(resultStream) {
    DeleteAccessConfigResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(DeleteAccessConfig, choreography.Choreography);
util.inherits(DeleteAccessConfigInputSet, choreography.InputSet);
util.inherits(DeleteAccessConfigResultSet, choreography.ResultSet);
exports.DeleteAccessConfig = DeleteAccessConfig;


/*
    DeleteInstance
    Deletes the specified Instance resource.
*/


var DeleteInstance = function(session) {
    /*
        Create a new instance of the DeleteInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/DeleteInstance"
    DeleteInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteInstanceInputSet = function() {
    DeleteInstanceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance to delete.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request. )
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteInstanceResultSet = function(resultStream) {
    DeleteInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteInstance, choreography.Choreography);
util.inherits(DeleteInstanceInputSet, choreography.InputSet);
util.inherits(DeleteInstanceResultSet, choreography.ResultSet);
exports.DeleteInstance = DeleteInstance;


/*
    DetachDisk
    Detaches a Disk resource from an instance.
*/


var DetachDisk = function(session) {
    /*
        Create a new instance of the DetachDisk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/DetachDisk"
    DetachDisk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DetachDiskResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DetachDiskInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DetachDisk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DetachDiskInputSet = function() {
    DetachDiskInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the DeviceName input for this Choreo. ((required, string) The name of the disk to detach.)
        */
        this.set_DeviceName = function(value) {
            this.setInput("DeviceName", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance that is associated with the disk to detach.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DetachDisk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DetachDiskResultSet = function(resultStream) {
    DetachDiskResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DetachDisk, choreography.Choreography);
util.inherits(DetachDiskInputSet, choreography.InputSet);
util.inherits(DetachDiskResultSet, choreography.ResultSet);
exports.DetachDisk = DetachDisk;


/*
    GetInstance
    Retrieves information about the specified Instance.
*/


var GetInstance = function(session) {
    /*
        Create a new instance of the GetInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/GetInstance"
    GetInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetInstanceInputSet = function() {
    GetInstanceInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance to retrieve.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetInstanceResultSet = function(resultStream) {
    GetInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetInstance, choreography.Choreography);
util.inherits(GetInstanceInputSet, choreography.InputSet);
util.inherits(GetInstanceResultSet, choreography.ResultSet);
exports.GetInstance = GetInstance;


/*
    GetSerialPortOutput
    Returns the specified instance's serial port output.
*/


var GetSerialPortOutput = function(session) {
    /*
        Create a new instance of the GetSerialPortOutput Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/GetSerialPortOutput"
    GetSerialPortOutput.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSerialPortOutputResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSerialPortOutputInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSerialPortOutput
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSerialPortOutputInputSet = function() {
    GetSerialPortOutputInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance associated with the serial port output to retrieve.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSerialPortOutput Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSerialPortOutputResultSet = function(resultStream) {
    GetSerialPortOutputResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSerialPortOutput, choreography.Choreography);
util.inherits(GetSerialPortOutputInputSet, choreography.InputSet);
util.inherits(GetSerialPortOutputResultSet, choreography.ResultSet);
exports.GetSerialPortOutput = GetSerialPortOutput;


/*
    InsertInstance
    Creates an Instance resource in the specified project.
*/


var InsertInstance = function(session) {
    /*
        Create a new instance of the InsertInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/InsertInstance"
    InsertInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertInstanceInputSet = function() {
    InsertInstanceInputSet.super_.call(this);
        /*
        Set the value of the InstanceResource input for this Choreo. ((optional, json) A JSON string containing the instance resource properties to set. This an be used as an alternative to individual inputs representing instance properties.)
        */
        this.set_InstanceResource = function(value) {
            this.setInput("InstanceResource", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the instance.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Disks input for this Choreo. ((conditional, json) An array of persistent disks. This array contains the following properties: source, type, and boot.)
        */
        this.set_Disks = function(value) {
            this.setInput("Disks", value);
        }

        /*
        Set the value of the MachineType input for this Choreo. ((conditional, string) The fully-qualified URL of the machine type resource to use for this instance.)
        */
        this.set_MachineType = function(value) {
            this.setInput("MachineType", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) The name of the instance being created.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NetworkInterfaces input for this Choreo. ((conditional, json) An array of network configurations for this instance. This array contains the following properties: network, accessConfigs[], accessConfigs[].name, and accessConfigs[].type.)
        */
        this.set_NetworkInterfaces = function(value) {
            this.setInput("NetworkInterfaces", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InsertInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertInstanceResultSet = function(resultStream) {
    InsertInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(InsertInstance, choreography.Choreography);
util.inherits(InsertInstanceInputSet, choreography.InputSet);
util.inherits(InsertInstanceResultSet, choreography.ResultSet);
exports.InsertInstance = InsertInstance;


/*
    ListInstances
    Retrieves the list of Instance resources contained within the specified Zone.
*/


var ListInstances = function(session) {
    /*
        Create a new instance of the ListInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/ListInstances"
    ListInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListInstancesInputSet = function() {
    ListInstancesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq testinstance). Comparison strings can be eq (equals) or ne (not equals).)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListInstancesResultSet = function(resultStream) {
    ListInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(ListInstances, choreography.Choreography);
util.inherits(ListInstancesInputSet, choreography.InputSet);
util.inherits(ListInstancesResultSet, choreography.ResultSet);
exports.ListInstances = ListInstances;


/*
    SetMetadata
    Sets the metadata for the specified instance.
*/


var SetMetadata = function(session) {
    /*
        Create a new instance of the SetMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/SetMetadata"
    SetMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetMetadataInputSet = function() {
    SetMetadataInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fingerprint input for this Choreo. ((required, string) The current fingerprint of this resource. You must provide the current version of the fingerprint to successfully update any metadata.)
        */
        this.set_Fingerprint = function(value) {
            this.setInput("Fingerprint", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance that you're setting metadata for.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Items input for this Choreo. ((required, json) An array of key/value pairs. The total size of the keys and values should not exceed 512 KB.)
        */
        this.set_Items = function(value) {
            this.setInput("Items", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetMetadataResultSet = function(resultStream) {
    SetMetadataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(SetMetadata, choreography.Choreography);
util.inherits(SetMetadataInputSet, choreography.InputSet);
util.inherits(SetMetadataResultSet, choreography.ResultSet);
exports.SetMetadata = SetMetadata;


/*
    SetTags
    Sets tags for the specified instance.
*/


var SetTags = function(session) {
    /*
        Create a new instance of the SetTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Instances/SetTags"
    SetTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetTagsInputSet = function() {
    SetTagsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Google. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fingerprint input for this Choreo. ((required, string) The current fingerprint of this resource. You must provide the current version of the fingerprint to successfully update tags.)
        */
        this.set_Fingerprint = function(value) {
            this.setInput("Fingerprint", value);
        }

        /*
        Set the value of the Instance input for this Choreo. ((required, string) The name of the instance that you're setting tags for.)
        */
        this.set_Instance = function(value) {
            this.setInput("Instance", value);
        }

        /*
        Set the value of the Items input for this Choreo. ((required, json) An array of tags. The max length of a tag is 63 characters.)
        */
        this.set_Items = function(value) {
            this.setInput("Items", value);
        }

        /*
        Set the value of the Project input for this Choreo. ((required, string) The ID of a Google Compute project.)
        */
        this.set_Project = function(value) {
            this.setInput("Project", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SetTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetTagsResultSet = function(resultStream) {
    SetTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Google.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetTags, choreography.Choreography);
util.inherits(SetTagsInputSet, choreography.InputSet);
util.inherits(SetTagsResultSet, choreography.ResultSet);
exports.SetTags = SetTags;

