
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateIdentity
    Create a new identity.
*/


var CreateIdentity = function(session) {
    /*
        Create a new instance of the CreateIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Identity/CreateIdentity"
    CreateIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateIdentityInputSet = function() {
    CreateIdentityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((required, string) The physical address to be used for this Identity.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) The city for this Identity.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) The country to be associated with this Identity.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address to be used for this identity.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The name for this identity.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) Enter the name to be associated with this identity.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ReplyTo input for this Choreo. ((required, string) An email address to be used in the Reply-To field.)
        */
        this.set_ReplyTo = function(value) {
            this.setInput("ReplyTo", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid.  Specify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The state to be associated with this Identity.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) The zip code associated with this Identity.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateIdentityResultSet = function(resultStream) {
    CreateIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateIdentity, choreography.Choreography);
util.inherits(CreateIdentityInputSet, choreography.InputSet);
util.inherits(CreateIdentityResultSet, choreography.ResultSet);
exports.CreateIdentity = CreateIdentity;


/*
    DeleteIdentity
    Delete an Identity.
*/


var DeleteIdentity = function(session) {
    /*
        Create a new instance of the DeleteIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Identity/DeleteIdentity"
    DeleteIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteIdentityInputSet = function() {
    DeleteIdentityInputSet.super_.call(this);
        /*
        Set the value of the Response input for this Choreo. ((required, any) The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.set_Response = function(value) {
            this.setInput("Response", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The identity to be removed from your account.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid. Specify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteIdentityResultSet = function(resultStream) {
    DeleteIdentityResultSet.super_.call(this, resultStream);    
}

util.inherits(DeleteIdentity, choreography.Choreography);
util.inherits(DeleteIdentityInputSet, choreography.InputSet);
util.inherits(DeleteIdentityResultSet, choreography.ResultSet);
exports.DeleteIdentity = DeleteIdentity;


/*
    EditIdentity
    Edit a newsletter identity.
*/


var EditIdentity = function(session) {
    /*
        Create a new instance of the EditIdentity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Identity/EditIdentity"
    EditIdentity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditIdentityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditIdentityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditIdentity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditIdentityInputSet = function() {
    EditIdentityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((required, string) The new physical address to be used for this Identity.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) The new city for this Identity.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((required, string) The new country to be associated with this Identity.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) An email address to be used for this identity.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The identity that is to be edited.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The new name to be associated with this identity.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NewIdentity input for this Choreo. ((optional, string) The new name for this identity.)
        */
        this.set_NewIdentity = function(value) {
            this.setInput("NewIdentity", value);
        }

        /*
        Set the value of the ReplyTo input for this Choreo. ((required, string) An email address to be used in the Reply-To field.)
        */
        this.set_ReplyTo = function(value) {
            this.setInput("ReplyTo", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid: Soecify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The state to be associated with this Identity.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) The new zip code associated with this Identity.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the EditIdentity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditIdentityResultSet = function(resultStream) {
    EditIdentityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditIdentity, choreography.Choreography);
util.inherits(EditIdentityInputSet, choreography.InputSet);
util.inherits(EditIdentityResultSet, choreography.ResultSet);
exports.EditIdentity = EditIdentity;


/*
    GetIdentityInfo
    Retrieve information about a specified Identity.
*/


var GetIdentityInfo = function(session) {
    /*
        Create a new instance of the GetIdentityInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Identity/GetIdentityInfo"
    GetIdentityInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetIdentityInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetIdentityInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetIdentityInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetIdentityInfoInputSet = function() {
    GetIdentityInfoInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The identity for which info will be retrieved.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid: Specify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetIdentityInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetIdentityInfoResultSet = function(resultStream) {
    GetIdentityInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetIdentityInfo, choreography.Choreography);
util.inherits(GetIdentityInfoInputSet, choreography.InputSet);
util.inherits(GetIdentityInfoResultSet, choreography.ResultSet);
exports.GetIdentityInfo = GetIdentityInfo;


/*
    ListAllIdentities
    Retrieve information about a specified Identity.
*/


var ListAllIdentities = function(session) {
    /*
        Create a new instance of the ListAllIdentities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Identity/ListAllIdentities"
    ListAllIdentities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllIdentitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllIdentitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllIdentities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllIdentitiesInputSet = function() {
    ListAllIdentitiesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((optional, string) The identity for which info will be retrieved. Leave it empty to list all Identities in this account.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid. Specify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListAllIdentities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllIdentitiesResultSet = function(resultStream) {
    ListAllIdentitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllIdentities, choreography.Choreography);
util.inherits(ListAllIdentitiesInputSet, choreography.InputSet);
util.inherits(ListAllIdentitiesResultSet, choreography.ResultSet);
exports.ListAllIdentities = ListAllIdentities;

