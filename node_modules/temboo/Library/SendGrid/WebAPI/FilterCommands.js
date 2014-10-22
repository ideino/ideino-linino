
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ActivateApp
    Activate an app.
*/


var ActivateApp = function(session) {
    /*
        Create a new instance of the ActivateApp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/FilterCommands/ActivateApp"
    ActivateApp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ActivateAppResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ActivateAppInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ActivateApp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ActivateAppInputSet = function() {
    ActivateAppInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the AppName input for this Choreo. ((required, string) The name of the app to be activated.  A list of available apps can be obtained by running the ListAvailableApps Choreo.)
        */
        this.set_AppName = function(value) {
            this.setInput("AppName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ActivateApp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ActivateAppResultSet = function(resultStream) {
    ActivateAppResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ActivateApp, choreography.Choreography);
util.inherits(ActivateAppInputSet, choreography.InputSet);
util.inherits(ActivateAppResultSet, choreography.ResultSet);
exports.ActivateApp = ActivateApp;


/*
    DeactivateApp
    Deactivate an app.
*/


var DeactivateApp = function(session) {
    /*
        Create a new instance of the DeactivateApp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/FilterCommands/DeactivateApp"
    DeactivateApp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeactivateAppResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeactivateAppInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeactivateApp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeactivateAppInputSet = function() {
    DeactivateAppInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the AppName input for this Choreo. ((required, string) The name of the app to be activated.  A list of available apps can be obtained by running the ListAvailableApps Choreo.)
        */
        this.set_AppName = function(value) {
            this.setInput("AppName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeactivateApp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeactivateAppResultSet = function(resultStream) {
    DeactivateAppResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeactivateApp, choreography.Choreography);
util.inherits(DeactivateAppInputSet, choreography.InputSet);
util.inherits(DeactivateAppResultSet, choreography.ResultSet);
exports.DeactivateApp = DeactivateApp;


/*
    GetAppSettings
    Obtain settings for the specified app.
*/


var GetAppSettings = function(session) {
    /*
        Create a new instance of the GetAppSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/FilterCommands/GetAppSettings"
    GetAppSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAppSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAppSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAppSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAppSettingsInputSet = function() {
    GetAppSettingsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the AppName input for this Choreo. ((required, string) The name of the app to be activated.  A list of available apps can be obtained by running the ListAvailableApps Choreo.)
        */
        this.set_AppName = function(value) {
            this.setInput("AppName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetAppSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAppSettingsResultSet = function(resultStream) {
    GetAppSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAppSettings, choreography.Choreography);
util.inherits(GetAppSettingsInputSet, choreography.InputSet);
util.inherits(GetAppSettingsResultSet, choreography.ResultSet);
exports.GetAppSettings = GetAppSettings;


/*
    ListAvailableApps
    List all availalbe apps available through the SendGrid Web API.
*/


var ListAvailableApps = function(session) {
    /*
        Create a new instance of the ListAvailableApps Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/FilterCommands/ListAvailableApps"
    ListAvailableApps.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAvailableAppsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAvailableAppsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAvailableApps
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAvailableAppsInputSet = function() {
    ListAvailableAppsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The username registered with SendGrid.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListAvailableApps Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAvailableAppsResultSet = function(resultStream) {
    ListAvailableAppsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAvailableApps, choreography.Choreography);
util.inherits(ListAvailableAppsInputSet, choreography.InputSet);
util.inherits(ListAvailableAppsResultSet, choreography.ResultSet);
exports.ListAvailableApps = ListAvailableApps;


/*
    SetupApp
    Sets up a previously activated app.
*/


var SetupApp = function(session) {
    /*
        Create a new instance of the SetupApp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/WebAPI/FilterCommands/SetupApp"
    SetupApp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SetupAppResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SetupAppInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SetupApp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SetupAppInputSet = function() {
    SetupAppInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the AppName input for this Choreo. ((required, string) The name of the app to be activated.  A list of available apps can be obtained by running the ListAvailableApps Choreo.)
        */
        this.set_AppName = function(value) {
            this.setInput("AppName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, string) Enter the password for the app that is being setup.  For example, if setting up a Twitter app, enter a valid Twitter account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username for the app that is being setup. For example, if setting up a Twitter app, enter a valid Twitter account username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the SetupApp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SetupAppResultSet = function(resultStream) {
    SetupAppResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SetupApp, choreography.Choreography);
util.inherits(SetupAppInputSet, choreography.InputSet);
util.inherits(SetupAppResultSet, choreography.ResultSet);
exports.SetupApp = SetupApp;

