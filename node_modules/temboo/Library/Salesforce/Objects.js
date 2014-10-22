
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRecord
    Creates a new Salesforce Object such as an individual Account, Contact, or Lead record.
*/


var CreateRecord = function(session) {
    /*
        Create a new instance of the CreateRecord Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/CreateRecord"
    CreateRecord.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRecordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRecordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRecord
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRecordInputSet = function() {
    CreateRecordInputSet.super_.call(this);
        /*
        Set the value of the SObject input for this Choreo. ((required, json) A JSON string containing the SObject properties you wish to set.)
        */
        this.set_SObject = function(value) {
            this.setInput("SObject", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((required, string) The name of the Salesforce object type being created (e.g. Account, Contact, Lead, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateRecord Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRecordResultSet = function(resultStream) {
    CreateRecordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "ID" output from this Choreo execution. ((string) The id of the object that was created.)
        */
        this.get_ID = function() {
            return this.getResult("ID");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
}

util.inherits(CreateRecord, choreography.Choreography);
util.inherits(CreateRecordInputSet, choreography.InputSet);
util.inherits(CreateRecordResultSet, choreography.ResultSet);
exports.CreateRecord = CreateRecord;


/*
    DeleteRecord
    Deletes a Salesforce Object such as an individual Account, Contact, or Lead record.
*/


var DeleteRecord = function(session) {
    /*
        Create a new instance of the DeleteRecord Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/DeleteRecord"
    DeleteRecord.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRecordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRecordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRecord
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRecordInputSet = function() {
    DeleteRecordInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the object to be deleted.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((conditional, string) The name of the Salesforce object type being deleted (e.g. Account, Contact, Lead, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRecord Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRecordResultSet = function(resultStream) {
    DeleteRecordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Salesforce. A 204 is expected for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRecord, choreography.Choreography);
util.inherits(DeleteRecordInputSet, choreography.InputSet);
util.inherits(DeleteRecordResultSet, choreography.ResultSet);
exports.DeleteRecord = DeleteRecord;


/*
    DeleteRecordFields
    Deletes specific field values from a specified record.
*/


var DeleteRecordFields = function(session) {
    /*
        Create a new instance of the DeleteRecordFields Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/DeleteRecordFields"
    DeleteRecordFields.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRecordFieldsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRecordFieldsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRecordFields
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRecordFieldsInputSet = function() {
    DeleteRecordFieldsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((required, string) Comma-separated list of up to 10 field names.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the object that that is being modified.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((conditional, string) The name of the Salesforce object type being created (e.g. Account, Contact, Lead, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRecordFields Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRecordFieldsResultSet = function(resultStream) {
    DeleteRecordFieldsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Salesforce. A 204 is expected for a successful request.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
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

util.inherits(DeleteRecordFields, choreography.Choreography);
util.inherits(DeleteRecordFieldsInputSet, choreography.InputSet);
util.inherits(DeleteRecordFieldsResultSet, choreography.ResultSet);
exports.DeleteRecordFields = DeleteRecordFields;


/*
    DescribeObjectMetadata
    Describes the individual metadata at all levels for the specified object.
*/


var DescribeObjectMetadata = function(session) {
    /*
        Create a new instance of the DescribeObjectMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/DescribeObjectMetadata"
    DescribeObjectMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeObjectMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeObjectMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeObjectMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeObjectMetadataInputSet = function() {
    DescribeObjectMetadataInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((required, string) The name of the SObject to retrieve (e.g. Contact, Lead, Account, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeObjectMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeObjectMetadataResultSet = function(resultStream) {
    DescribeObjectMetadataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
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

util.inherits(DescribeObjectMetadata, choreography.Choreography);
util.inherits(DescribeObjectMetadataInputSet, choreography.InputSet);
util.inherits(DescribeObjectMetadataResultSet, choreography.ResultSet);
exports.DescribeObjectMetadata = DescribeObjectMetadata;


/*
    GetObjectMetadata
    Retrieves the individual metadata for the specified object type such as a Contact, Lead, or Account object.
*/


var GetObjectMetadata = function(session) {
    /*
        Create a new instance of the GetObjectMetadata Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/GetObjectMetadata"
    GetObjectMetadata.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetObjectMetadataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetObjectMetadataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetObjectMetadata
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetObjectMetadataInputSet = function() {
    GetObjectMetadataInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((required, string) The name of the SObject to retrieve (e.g. Contact, Lead, Account, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetObjectMetadata Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetObjectMetadataResultSet = function(resultStream) {
    GetObjectMetadataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetObjectMetadata, choreography.Choreography);
util.inherits(GetObjectMetadataInputSet, choreography.InputSet);
util.inherits(GetObjectMetadataResultSet, choreography.ResultSet);
exports.GetObjectMetadata = GetObjectMetadata;


/*
    GetRecord
    Retrieves a Salesforce Object such as an individual Account, Contact, or Lead record.
*/


var GetRecord = function(session) {
    /*
        Create a new instance of the GetRecord Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/GetRecord"
    GetRecord.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecord
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecordInputSet = function() {
    GetRecordInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-separated list of up to 10 field names.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of the object that you want to retrieve.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((conditional, string) The name of the Salesforce object type being retrieved (e.g. Account, Contact, Lead, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecord Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecordResultSet = function(resultStream) {
    GetRecordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecord, choreography.Choreography);
util.inherits(GetRecordInputSet, choreography.InputSet);
util.inherits(GetRecordResultSet, choreography.ResultSet);
exports.GetRecord = GetRecord;


/*
    GetRecordByExternalID
    Retrieve records with a specific external ID.
*/


var GetRecordByExternalID = function(session) {
    /*
        Create a new instance of the GetRecordByExternalID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/GetRecordByExternalID"
    GetRecordByExternalID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRecordByExternalIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRecordByExternalIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRecordByExternalID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRecordByExternalIDInputSet = function() {
    GetRecordByExternalIDInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the FieldName input for this Choreo. ((conditional, string) FieldName for external ID)
        */
        this.set_FieldName = function(value) {
            this.setInput("FieldName", value);
        }

        /*
        Set the value of the FieldValue input for this Choreo. ((conditional, string) Field value for external ID)
        */
        this.set_FieldValue = function(value) {
            this.setInput("FieldValue", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth Refresh Token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SObjectName input for this Choreo. ((conditional, string) The name of the Salesforce object type being created (e.g. Account, Contact, Lead, etc).)
        */
        this.set_SObjectName = function(value) {
            this.setInput("SObjectName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRecordByExternalID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRecordByExternalIDResultSet = function(resultStream) {
    GetRecordByExternalIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRecordByExternalID, choreography.Choreography);
util.inherits(GetRecordByExternalIDInputSet, choreography.InputSet);
util.inherits(GetRecordByExternalIDResultSet, choreography.ResultSet);
exports.GetRecordByExternalID = GetRecordByExternalID;


/*
    ListObjectTypes
    Lists the available objects and their metadata for your organization's data.
*/


var ListObjectTypes = function(session) {
    /*
        Create a new instance of the ListObjectTypes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Salesforce/Objects/ListObjectTypes"
    ListObjectTypes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListObjectTypesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListObjectTypesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListObjectTypes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListObjectTypesInputSet = function() {
    ListObjectTypesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((conditional, string) The Client ID provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((conditional, string) The Client Secret provided by Salesforce. Required unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the InstanceName input for this Choreo. ((required, string) The server url prefix that indicates which instance your Salesforce account is on (e.g. na1, na2, na3, etc).)
        */
        this.set_InstanceName = function(value) {
            this.setInput("InstanceName", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((conditional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListObjectTypes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListObjectTypesResultSet = function(resultStream) {
    ListObjectTypesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Salesforce.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListObjectTypes, choreography.Choreography);
util.inherits(ListObjectTypesInputSet, choreography.InputSet);
util.inherits(ListObjectTypesResultSet, choreography.ResultSet);
exports.ListObjectTypes = ListObjectTypes;

