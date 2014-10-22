
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AggregatedList
    Retrieves an aggregated list of Disk resources across all zones.
*/


var AggregatedList = function(session) {
    /*
        Create a new instance of the AggregatedList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/AggregatedList"
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
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq your-disk-name). Comparison strings can be eq (equals) or ne (not equals).)
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
    CreateSnapshot
    Creates a snapshot of a specified disk.
*/


var CreateSnapshot = function(session) {
    /*
        Create a new instance of the CreateSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/CreateSnapshot"
    CreateSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSnapshotInputSet = function() {
    CreateSnapshotInputSet.super_.call(this);
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
        Set the value of the Description input for this Choreo. ((optional, string) A description for the snapshot resource.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Disk input for this Choreo. ((required, string) The name of the persistent disk resource to use to create this snapshot.)
        */
        this.set_Disk = function(value) {
            this.setInput("Disk", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the snapshot resource being created.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
        Set the value of the SourceDiskID input for this Choreo. ((required, string) The ID of the disk being used to create the snapshot.)
        */
        this.set_SourceDiskID = function(value) {
            this.setInput("SourceDiskID", value);
        }

        /*
        Set the value of the StorageBytesStatus input for this Choreo. ((optional, string) Indicates whether storageBytes is in a stable state, or it is being adjusted as a result of shared storage reallocation. Valid values: are "UPDATING" AND "UP_TO_DATE".)
        */
        this.set_StorageBytesStatus = function(value) {
            this.setInput("StorageBytesStatus", value);
        }

        /*
        Set the value of the StorageBytes input for this Choreo. ((optional, integer) The size of the storage used by the snapshot.)
        */
        this.set_StorageBytes = function(value) {
            this.setInput("StorageBytes", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSnapshotResultSet = function(resultStream) {
    CreateSnapshotResultSet.super_.call(this, resultStream);    
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

util.inherits(CreateSnapshot, choreography.Choreography);
util.inherits(CreateSnapshotInputSet, choreography.InputSet);
util.inherits(CreateSnapshotResultSet, choreography.ResultSet);
exports.CreateSnapshot = CreateSnapshot;


/*
    DeleteDisk
    Deletes the specified Persistent Disk resource.
*/


var DeleteDisk = function(session) {
    /*
        Create a new instance of the DeleteDisk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/DeleteDisk"
    DeleteDisk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDiskResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDiskInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDisk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDiskInputSet = function() {
    DeleteDiskInputSet.super_.call(this);
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
        Set the value of the Disk input for this Choreo. ((required, string) The name of the persistent disk resource to delete.)
        */
        this.set_Disk = function(value) {
            this.setInput("Disk", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
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
A ResultSet with methods tailored to the values returned by the DeleteDisk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDiskResultSet = function(resultStream) {
    DeleteDiskResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteDisk, choreography.Choreography);
util.inherits(DeleteDiskInputSet, choreography.InputSet);
util.inherits(DeleteDiskResultSet, choreography.ResultSet);
exports.DeleteDisk = DeleteDisk;


/*
    GetDisk
    Retrieves information about the specified Persistent Disk.
*/


var GetDisk = function(session) {
    /*
        Create a new instance of the GetDisk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/GetDisk"
    GetDisk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetDiskResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetDiskInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetDisk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetDiskInputSet = function() {
    GetDiskInputSet.super_.call(this);
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
        Set the value of the Disk input for this Choreo. ((required, string) The name of the persistent disk resource to retrieve.)
        */
        this.set_Disk = function(value) {
            this.setInput("Disk", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-seperated list of fields you want to include in the response.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
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
A ResultSet with methods tailored to the values returned by the GetDisk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetDiskResultSet = function(resultStream) {
    GetDiskResultSet.super_.call(this, resultStream);    
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

util.inherits(GetDisk, choreography.Choreography);
util.inherits(GetDiskInputSet, choreography.InputSet);
util.inherits(GetDiskResultSet, choreography.ResultSet);
exports.GetDisk = GetDisk;


/*
    InsertDisk
    Creates a Persistent Disk resource in the specified project.
*/


var InsertDisk = function(session) {
    /*
        Create a new instance of the InsertDisk Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/InsertDisk"
    InsertDisk.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertDiskResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertDiskInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertDisk
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertDiskInputSet = function() {
    InsertDiskInputSet.super_.call(this);
        /*
        Set the value of the DiskResource input for this Choreo. ((optional, json) A JSON string containing the disk resource properties you wish to set. This can be used as an alternative to individual inputs that represent disk properties.)
        */
        this.set_DiskResource = function(value) {
            this.setInput("DiskResource", value);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the persistent disk resource being created.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
        Set the value of the SizeGB input for this Choreo. ((conditional, string) Size of the persistent disk, specified in GB. This is optional when using a SourceSnapshot or SourceImage, otherwise it is required.)
        */
        this.set_SizeGB = function(value) {
            this.setInput("SizeGB", value);
        }

        /*
        Set the value of the SourceImage input for this Choreo. ((conditional, string) The URL for the source image to apply to the disk. This is required if SizeGB or SourceSnapshot is not provided.)
        */
        this.set_SourceImage = function(value) {
            this.setInput("SourceImage", value);
        }

        /*
        Set the value of the SourceSnapshot input for this Choreo. ((conditional, string) The source snapshot used to create this disk. This is required if SizeGB and SourceImage are not specified.)
        */
        this.set_SourceSnapshot = function(value) {
            this.setInput("SourceSnapshot", value);
        }

        /*
        Set the value of the Zone input for this Choreo. ((required, string) The name of the zone associated with this request.)
        */
        this.set_Zone = function(value) {
            this.setInput("Zone", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InsertDisk Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertDiskResultSet = function(resultStream) {
    InsertDiskResultSet.super_.call(this, resultStream);    
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

util.inherits(InsertDisk, choreography.Choreography);
util.inherits(InsertDiskInputSet, choreography.InputSet);
util.inherits(InsertDiskResultSet, choreography.ResultSet);
exports.InsertDisk = InsertDisk;


/*
    ListDisks
    Retrieves the list of Disk resources available to the specified project.
*/


var ListDisks = function(session) {
    /*
        Create a new instance of the ListDisks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Disks/ListDisks"
    ListDisks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListDisksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListDisksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListDisks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListDisksInputSet = function() {
    ListDisksInputSet.super_.call(this);
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
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq europe-west1). Comparison strings can be eq (equals) or ne (not equals).)
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
A ResultSet with methods tailored to the values returned by the ListDisks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListDisksResultSet = function(resultStream) {
    ListDisksResultSet.super_.call(this, resultStream);    
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

util.inherits(ListDisks, choreography.Choreography);
util.inherits(ListDisksInputSet, choreography.InputSet);
util.inherits(ListDisksResultSet, choreography.ResultSet);
exports.ListDisks = ListDisks;

