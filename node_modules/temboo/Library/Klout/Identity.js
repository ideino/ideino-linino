
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ByGooglePlusID
    Performs a lookup for a user's identity using a Google+ ID.
*/


var ByGooglePlusID = function(session) {
    /*
        Create a new instance of the ByGooglePlusID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/Identity/ByGooglePlusID"
    ByGooglePlusID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByGooglePlusIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByGooglePlusIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByGooglePlusID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByGooglePlusIDInputSet = function() {
    ByGooglePlusIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the GooglePlusID input for this Choreo. ((required, integer) The numeric ID for a Google+ user.)
        */
        this.set_GooglePlusID = function(value) {
            this.setInput("GooglePlusID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByGooglePlusID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByGooglePlusIDResultSet = function(resultStream) {
    ByGooglePlusIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByGooglePlusID, choreography.Choreography);
util.inherits(ByGooglePlusIDInputSet, choreography.InputSet);
util.inherits(ByGooglePlusIDResultSet, choreography.ResultSet);
exports.ByGooglePlusID = ByGooglePlusID;


/*
    ByKloutID
    Performs a lookup for a user's identity using a Klout ID.
*/


var ByKloutID = function(session) {
    /*
        Create a new instance of the ByKloutID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/Identity/ByKloutID"
    ByKloutID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByKloutIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByKloutIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByKloutID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByKloutIDInputSet = function() {
    ByKloutIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the KloutID input for this Choreo. ((required, integer) The numeric ID for a Klout user.)
        */
        this.set_KloutID = function(value) {
            this.setInput("KloutID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByKloutID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByKloutIDResultSet = function(resultStream) {
    ByKloutIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByKloutID, choreography.Choreography);
util.inherits(ByKloutIDInputSet, choreography.InputSet);
util.inherits(ByKloutIDResultSet, choreography.ResultSet);
exports.ByKloutID = ByKloutID;


/*
    ByTwitterID
    Performs a lookup for a user's identity using a Twitter ID.
*/


var ByTwitterID = function(session) {
    /*
        Create a new instance of the ByTwitterID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/Identity/ByTwitterID"
    ByTwitterID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByTwitterIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByTwitterIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByTwitterID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByTwitterIDInputSet = function() {
    ByTwitterIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the TwitterID input for this Choreo. ((required, integer) The numeric ID for a Twitter user.)
        */
        this.set_TwitterID = function(value) {
            this.setInput("TwitterID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByTwitterID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByTwitterIDResultSet = function(resultStream) {
    ByTwitterIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByTwitterID, choreography.Choreography);
util.inherits(ByTwitterIDInputSet, choreography.InputSet);
util.inherits(ByTwitterIDResultSet, choreography.ResultSet);
exports.ByTwitterID = ByTwitterID;


/*
    ByTwitterScreenName
    Performs a lookup for a user's identity using a Twitter screen name.
*/


var ByTwitterScreenName = function(session) {
    /*
        Create a new instance of the ByTwitterScreenName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/Identity/ByTwitterScreenName"
    ByTwitterScreenName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByTwitterScreenNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByTwitterScreenNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByTwitterScreenName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByTwitterScreenNameInputSet = function() {
    ByTwitterScreenNameInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ScreenName input for this Choreo. ((required, string) The screen name for a Twitter user.)
        */
        this.set_ScreenName = function(value) {
            this.setInput("ScreenName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByTwitterScreenName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByTwitterScreenNameResultSet = function(resultStream) {
    ByTwitterScreenNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByTwitterScreenName, choreography.Choreography);
util.inherits(ByTwitterScreenNameInputSet, choreography.InputSet);
util.inherits(ByTwitterScreenNameResultSet, choreography.ResultSet);
exports.ByTwitterScreenName = ByTwitterScreenName;

