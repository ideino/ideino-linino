
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetConnectApp
    Retrieves the details for an individual Connect App associated with a Twilio account.
*/


var GetConnectApp = function(session) {
    /*
        Create a new instance of the GetConnectApp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ConnectApps/GetConnectApp"
    GetConnectApp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetConnectAppResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetConnectAppInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetConnectApp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetConnectAppInputSet = function() {
    GetConnectAppInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the ConnectAppSID input for this Choreo. ((required, string) The id of the Connect App to retrieve.)
        */
        this.set_ConnectAppSID = function(value) {
            this.setInput("ConnectAppSID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetConnectApp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetConnectAppResultSet = function(resultStream) {
    GetConnectAppResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetConnectApp, choreography.Choreography);
util.inherits(GetConnectAppInputSet, choreography.InputSet);
util.inherits(GetConnectAppResultSet, choreography.ResultSet);
exports.GetConnectApp = GetConnectApp;


/*
    ListConnectApps
    Returns a list of Connect Apps within your Twilio account.
*/


var ListConnectApps = function(session) {
    /*
        Create a new instance of the ListConnectApps Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ConnectApps/ListConnectApps"
    ListConnectApps.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListConnectAppsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListConnectAppsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListConnectApps
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListConnectAppsInputSet = function() {
    ListConnectAppsInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the PageSize input for this Choreo. ((optional, integer) The number of results per page.)
        */
        this.set_PageSize = function(value) {
            this.setInput("PageSize", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page of results to retrieve. Defaults to 0.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListConnectApps Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListConnectAppsResultSet = function(resultStream) {
    ListConnectAppsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListConnectApps, choreography.Choreography);
util.inherits(ListConnectAppsInputSet, choreography.InputSet);
util.inherits(ListConnectAppsResultSet, choreography.ResultSet);
exports.ListConnectApps = ListConnectApps;


/*
    UpdateConnectApp
    Updates the details for an individual Connect App associated with a Twilio account.
*/


var UpdateConnectApp = function(session) {
    /*
        Create a new instance of the UpdateConnectApp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Twilio/ConnectApps/UpdateConnectApp"
    UpdateConnectApp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateConnectAppResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateConnectAppInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateConnectApp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateConnectAppInputSet = function() {
    UpdateConnectAppInputSet.super_.call(this);
        /*
        Set the value of the AccountSID input for this Choreo. ((required, string) The AccountSID provided when you signed up for a Twilio account.)
        */
        this.set_AccountSID = function(value) {
            this.setInput("AccountSID", value);
        }

        /*
        Set the value of the AuthToken input for this Choreo. ((required, string) The authorization token provided when you signed up for a Twilio account.)
        */
        this.set_AuthToken = function(value) {
            this.setInput("AuthToken", value);
        }

        /*
        Set the value of the AuthorizeRedirectURL input for this Choreo. ((optional, string) The URL the user's browser will redirect to after Twilio authenticates the user and obtains authorization for this Connect App.)
        */
        this.set_AuthorizeRedirectURL = function(value) {
            this.setInput("AuthorizeRedirectURL", value);
        }

        /*
        Set the value of the CompanyName input for this Choreo. ((optional, string) The company name for this Connect App.)
        */
        this.set_CompanyName = function(value) {
            this.setInput("CompanyName", value);
        }

        /*
        Set the value of the ConnectAppSID input for this Choreo. ((required, string) The id of the Connect App to update.)
        */
        this.set_ConnectAppSID = function(value) {
            this.setInput("ConnectAppSID", value);
        }

        /*
        Set the value of the DeauthorizeCallbackMethod input for this Choreo. ((optional, string) The HTTP method to be used when making a request to the DeauthorizeCallbackUrl. Either GET or POST.)
        */
        this.set_DeauthorizeCallbackMethod = function(value) {
            this.setInput("DeauthorizeCallbackMethod", value);
        }

        /*
        Set the value of the DeauthorizeCallbackURL input for this Choreo. ((optional, string) The URL to which Twilio will send a request when a user de-authorizes this Connect App.)
        */
        this.set_DeauthorizeCallbackURL = function(value) {
            this.setInput("DeauthorizeCallbackURL", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A more detailed human readable description of the Connect App.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the FriendlyName input for this Choreo. ((optional, string) A human readable description of the Connect App, with maximum length 64 characters.)
        */
        this.set_FriendlyName = function(value) {
            this.setInput("FriendlyName", value);
        }

        /*
        Set the value of the HomepageURL input for this Choreo. ((optional, string) The public URL where users can obtain more information about this Connect App.)
        */
        this.set_HomepageURL = function(value) {
            this.setInput("HomepageURL", value);
        }

        /*
        Set the value of the Permissions input for this Choreo. ((optional, string) A comma-separated list of permssions you will request from users of this ConnectApp. Valid permssions are get-all or post-all.)
        */
        this.set_Permissions = function(value) {
            this.setInput("Permissions", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateConnectApp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateConnectAppResultSet = function(resultStream) {
    UpdateConnectAppResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Twilio.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateConnectApp, choreography.Choreography);
util.inherits(UpdateConnectAppInputSet, choreography.InputSet);
util.inherits(UpdateConnectAppResultSet, choreography.ResultSet);
exports.UpdateConnectApp = UpdateConnectApp;

