
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FundingSourcesByID
    Retrieves the account information for the user associated with the given authorized access token.
*/


var FundingSourcesByID = function(session) {
    /*
        Create a new instance of the FundingSourcesByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/FundingSources/FundingSourcesByID"
    FundingSourcesByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FundingSourcesByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FundingSourcesByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FundingSourcesByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FundingSourcesByIDInputSet = function() {
    FundingSourcesByIDInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the FundingID input for this Choreo. ((required, string) Funding source identifier of the funding source being requested.)
        */
        this.set_FundingID = function(value) {
            this.setInput("FundingID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FundingSourcesByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FundingSourcesByIDResultSet = function(resultStream) {
    FundingSourcesByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FundingSourcesByID, choreography.Choreography);
util.inherits(FundingSourcesByIDInputSet, choreography.InputSet);
util.inherits(FundingSourcesByIDResultSet, choreography.ResultSet);
exports.FundingSourcesByID = FundingSourcesByID;


/*
    FundingSourcesListing
    Retrieves a list of verified funding sources for the user associated with the authorized access token.
*/


var FundingSourcesListing = function(session) {
    /*
        Create a new instance of the FundingSourcesListing Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/FundingSources/FundingSourcesListing"
    FundingSourcesListing.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FundingSourcesListingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FundingSourcesListingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FundingSourcesListing
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FundingSourcesListingInputSet = function() {
    FundingSourcesListingInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FundingSourcesListing Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FundingSourcesListingResultSet = function(resultStream) {
    FundingSourcesListingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FundingSourcesListing, choreography.Choreography);
util.inherits(FundingSourcesListingInputSet, choreography.InputSet);
util.inherits(FundingSourcesListingResultSet, choreography.ResultSet);
exports.FundingSourcesListing = FundingSourcesListing;

