
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteNetwork
    Deletes the specified Network resource.
*/


var DeleteNetwork = function(session) {
    /*
        Create a new instance of the DeleteNetwork Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Networks/DeleteNetwork"
    DeleteNetwork.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteNetworkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteNetworkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteNetwork
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteNetworkInputSet = function() {
    DeleteNetworkInputSet.super_.call(this);
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
        Set the value of the Network input for this Choreo. ((required, string) The name of the network to delete.)
        */
        this.set_Network = function(value) {
            this.setInput("Network", value);
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
A ResultSet with methods tailored to the values returned by the DeleteNetwork Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteNetworkResultSet = function(resultStream) {
    DeleteNetworkResultSet.super_.call(this, resultStream);    
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

util.inherits(DeleteNetwork, choreography.Choreography);
util.inherits(DeleteNetworkInputSet, choreography.InputSet);
util.inherits(DeleteNetworkResultSet, choreography.ResultSet);
exports.DeleteNetwork = DeleteNetwork;


/*
    GetNetwork
    Retrieves information about the specified Network.
*/


var GetNetwork = function(session) {
    /*
        Create a new instance of the GetNetwork Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Networks/GetNetwork"
    GetNetwork.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNetworkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNetworkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNetwork
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNetworkInputSet = function() {
    GetNetworkInputSet.super_.call(this);
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
        Set the value of the Network input for this Choreo. ((required, string) The name of the network to retrieve.)
        */
        this.set_Network = function(value) {
            this.setInput("Network", value);
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
A ResultSet with methods tailored to the values returned by the GetNetwork Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNetworkResultSet = function(resultStream) {
    GetNetworkResultSet.super_.call(this, resultStream);    
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

util.inherits(GetNetwork, choreography.Choreography);
util.inherits(GetNetworkInputSet, choreography.InputSet);
util.inherits(GetNetworkResultSet, choreography.ResultSet);
exports.GetNetwork = GetNetwork;


/*
    InsertNetwork
    Creates a new Network resource in the specified project.
*/


var InsertNetwork = function(session) {
    /*
        Create a new instance of the InsertNetwork Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Networks/InsertNetwork"
    InsertNetwork.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InsertNetworkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InsertNetworkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the InsertNetwork
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InsertNetworkInputSet = function() {
    InsertNetworkInputSet.super_.call(this);
        /*
        Set the value of the NetworkResource input for this Choreo. ((optional, json) A JSON string containing the network resource properties you wish to set. This can be used as an alternative to individual inputs that represent network resource properties.)
        */
        this.set_NetworkResource = function(value) {
            this.setInput("NetworkResource", value);
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
        Set the value of the Description input for this Choreo. ((optional, string) A description of the network.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the GatewayIP input for this Choreo. ((optional, string) An optional address used for default routing to other networks. Must be within the range specified by IPRange.)
        */
        this.set_GatewayIP = function(value) {
            this.setInput("GatewayIP", value);
        }

        /*
        Set the value of the IPRange input for this Choreo. ((conditional, string) The range of internal addresses that are allowed on the network.)
        */
        this.set_IPRange = function(value) {
            this.setInput("IPRange", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) The name of the network.)
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

}

/*
A ResultSet with methods tailored to the values returned by the InsertNetwork Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InsertNetworkResultSet = function(resultStream) {
    InsertNetworkResultSet.super_.call(this, resultStream);    
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

util.inherits(InsertNetwork, choreography.Choreography);
util.inherits(InsertNetworkInputSet, choreography.InputSet);
util.inherits(InsertNetworkResultSet, choreography.ResultSet);
exports.InsertNetwork = InsertNetwork;


/*
    ListNetworks
    Retrieves the list of Network resources for the specified project.
*/


var ListNetworks = function(session) {
    /*
        Create a new instance of the ListNetworks Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Google/ComputeEngine/Networks/ListNetworks"
    ListNetworks.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListNetworksResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListNetworksInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListNetworks
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListNetworksInputSet = function() {
    ListNetworksInputSet.super_.call(this);
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
        Set the value of the Filter input for this Choreo. ((optional, string) A filter expression for narrowing results in the form: {field_name} {comparison_string} {literal_string} (e.g. name eq default). Comparison strings can be eq (equals) or ne (not equals).)
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
A ResultSet with methods tailored to the values returned by the ListNetworks Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListNetworksResultSet = function(resultStream) {
    ListNetworksResultSet.super_.call(this, resultStream);    
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

util.inherits(ListNetworks, choreography.Choreography);
util.inherits(ListNetworksInputSet, choreography.InputSet);
util.inherits(ListNetworksResultSet, choreography.ResultSet);
exports.ListNetworks = ListNetworks;

