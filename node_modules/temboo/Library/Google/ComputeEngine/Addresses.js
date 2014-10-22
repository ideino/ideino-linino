
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AggregatedList
    Retrieves a list of Address resources across all available regions.
*/


var AggregatedList = function(session) {
    /*
        Create a new instance of the AggregatedList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Addresses/AggregatedList"
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
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq your-address-name). Comparison strings can be eq (equals) or ne (not equals).)
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

util.inherits(AggregatedList, choreography.Choreography);
util.inherits(AggregatedListInputSet, choreography.InputSet);
util.inherits(AggregatedListResultSet, choreography.ResultSet);
exports.AggregatedList = AggregatedList;


/*
    DeleteAddress
    Deletes a specified address resource.
*/


var DeleteAddress = function(session) {
    /*
        Create a new instance of the DeleteAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Addresses/DeleteAddress"
    DeleteAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteAddressInputSet = function() {
    DeleteAddressInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((required, string) The name of the address to delete.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
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
        Set the value of the Region input for this Choreo. ((required, string) The name of the region associated with this request.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteAddressResultSet = function(resultStream) {
    DeleteAddressResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteAddress, choreography.Choreography);
util.inherits(DeleteAddressInputSet, choreography.InputSet);
util.inherits(DeleteAddressResultSet, choreography.ResultSet);
exports.DeleteAddress = DeleteAddress;


/*
    GetAddress
    Retrieves information about the specified Address.
*/


var GetAddress = function(session) {
    /*
        Create a new instance of the GetAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Addresses/GetAddress"
    GetAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAddressInputSet = function() {
    GetAddressInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((required, string) The name of the address to retrieve.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
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
        Set the value of the Region input for this Choreo. ((required, string) The name of the region associated with this request.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAddressResultSet = function(resultStream) {
    GetAddressResultSet.super_.call(this, resultStream);    
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

util.inherits(GetAddress, choreography.Choreography);
util.inherits(GetAddressInputSet, choreography.InputSet);
util.inherits(GetAddressResultSet, choreography.ResultSet);
exports.GetAddress = GetAddress;


/*
    InsertAddress
    Creates an Address resource in the specified project.
*/


var InsertAddress = function(session) {
    /*
        Create a new instance of the InsertAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Addresses/InsertAddress"
    InsertAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertAddressInputSet = function() {
    InsertAddressInputSet.super_.call(this);
        /*
        Set the value of the AddressResource input for this Choreo. ((optional, json) A JSON string containing the address resource properties you wish to set. This can be used as an alternative to individual inputs that represent address resource properties.)
        */
        this.set_AddressResource = function(value) {
            this.setInput("AddressResource", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((optional, string) The IP address represented by this resource.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
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
        Set the value of the Description input for this Choreo. ((optional, string) A description of the address.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) The name of the address resource.)
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
        Set the value of the Region input for this Choreo. ((required, string) Name of the region associated with the request.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the InsertAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertAddressResultSet = function(resultStream) {
    InsertAddressResultSet.super_.call(this, resultStream);    
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

util.inherits(InsertAddress, choreography.Choreography);
util.inherits(InsertAddressInputSet, choreography.InputSet);
util.inherits(InsertAddressResultSet, choreography.ResultSet);
exports.InsertAddress = InsertAddress;


/*
    ListAddresses
    Retrieves a list of Address resources contained within the specified region
*/


var ListAddresses = function(session) {
    /*
        Create a new instance of the ListAddresses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Addresses/ListAddresses"
    ListAddresses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAddressesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAddressesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAddresses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAddressesInputSet = function() {
    ListAddressesInputSet.super_.call(this);
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
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq your-address-name). Comparison strings can be eq (equals) or ne (not equals).)
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
        Set the value of the Region input for this Choreo. ((required, string) The name of the region associated with this request.)
        */
        this.set_Region = function(value) {
            this.setInput("Region", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAddresses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAddressesResultSet = function(resultStream) {
    ListAddressesResultSet.super_.call(this, resultStream);    
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

util.inherits(ListAddresses, choreography.Choreography);
util.inherits(ListAddressesInputSet, choreography.InputSet);
util.inherits(ListAddressesResultSet, choreography.ResultSet);
exports.ListAddresses = ListAddresses;

