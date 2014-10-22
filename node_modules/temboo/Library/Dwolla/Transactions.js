
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ByID
    Retrieves the account information about the specified transaction by Transaction ID.
*/


var ByID = function(session) {
    /*
        Create a new instance of the ByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Transactions/ByID"
    ByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ByIDInputSet = function() {
    ByIDInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the TransactionID input for this Choreo. ((required, integer) Transaction identifier of the transaction being requested.)
        */
        this.set_TransactionID = function(value) {
            this.setInput("TransactionID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ByIDResultSet = function(resultStream) {
    ByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ByID, choreography.Choreography);
util.inherits(ByIDInputSet, choreography.InputSet);
util.inherits(ByIDResultSet, choreography.ResultSet);
exports.ByID = ByID;


/*
    Listing
    Retrieves a list of transactions for the user associated with the authorized access token.
*/


var Listing = function(session) {
    /*
        Create a new instance of the Listing Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Transactions/Listing"
    Listing.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Listing
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListingInputSet = function() {
    ListingInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Number of transactions to retrieve. Defaults to 10. Can be between 1 and 200 transactions.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the SinceDate input for this Choreo. ((optional, string) Earliest date and time for which to retrieve transactions. Defaults to 7 days prior to current date and time in UTC.)
        */
        this.set_SinceDate = function(value) {
            this.setInput("SinceDate", value);
        }

        /*
        Set the value of the Skip input for this Choreo. ((optional, integer) Number of transactions to skip. Defaults to 0.)
        */
        this.set_Skip = function(value) {
            this.setInput("Skip", value);
        }

        /*
        Set the value of the Types input for this Choreo. ((optional, string) Transaction types to retrieve. Must be delimited by a '|'. Options are money_sent, money_received, deposit, withdrawal, and fee. Defaults to include all transaction types.)
        */
        this.set_Types = function(value) {
            this.setInput("Types", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Listing Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListingResultSet = function(resultStream) {
    ListingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Listing, choreography.Choreography);
util.inherits(ListingInputSet, choreography.InputSet);
util.inherits(ListingResultSet, choreography.ResultSet);
exports.Listing = Listing;


/*
    Request
    Use this method to request funds from a source user, originating from the user associated with the authorized access token.
*/


var Request = function(session) {
    /*
        Create a new instance of the Request Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Transactions/Request"
    Request.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RequestResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RequestInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Request
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RequestInputSet = function() {
    RequestInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, decimal) Amount of funds to request from the source user.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the FacillitatorAmount input for this Choreo. ((optional, decimal) Amount of the facilitator fee to override. Only applicable if the facilitator fee feature is enabled. If set to 0, facilitator fee is disabled for transaction. Cannot exceed 25% of the 'amount'.)
        */
        this.set_FacillitatorAmount = function(value) {
            this.setInput("FacillitatorAmount", value);
        }

        /*
        Set the value of the Notes input for this Choreo. ((optional, multiline) Note to attach to the transaction. Limited to 250 characters.)
        */
        this.set_Notes = function(value) {
            this.setInput("Notes", value);
        }

        /*
        Set the value of the Pin input for this Choreo. ((required, integer) User's PIN associated with their account.)
        */
        this.set_Pin = function(value) {
            this.setInput("Pin", value);
        }

        /*
        Set the value of the SourceID input for this Choreo. ((required, string) Identification of the user to request funds from. Must be the Dwolla identifier, Facebook identifier, Twitter screename, phone number, or email address.)
        */
        this.set_SourceID = function(value) {
            this.setInput("SourceID", value);
        }

        /*
        Set the value of the SourceType input for this Choreo. ((optional, string) Type of destination user. Defaults to Dwolla. Can be Dwolla, Facebook, Twitter, Email, or Phone.)
        */
        this.set_SourceType = function(value) {
            this.setInput("SourceType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Request Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RequestResultSet = function(resultStream) {
    RequestResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Request, choreography.Choreography);
util.inherits(RequestInputSet, choreography.InputSet);
util.inherits(RequestResultSet, choreography.ResultSet);
exports.Request = Request;


/*
    Send
    Use this method to send funds to a destination user, from the user associated with the authorized access token.
*/


var Send = function(session) {
    /*
        Create a new instance of the Send Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Transactions/Send"
    Send.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SendResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SendInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Send
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SendInputSet = function() {
    SendInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, decimal) Amount of funds to transfer to the destination user.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the AssumeCosts input for this Choreo. ((required, boolean) Set to true if the user will assume the Dwolla fee. Set to false if the destination user will assume the Dwolla fee. Does not affect facilitator fees. Defaults to false.)
        */
        this.set_AssumeCosts = function(value) {
            this.setInput("AssumeCosts", value);
        }

        /*
        Set the value of the DestinationId input for this Choreo. ((required, string) Identification of the user to send funds to. Must be the Dwolla identifier, Facebook identifier, Twitter identifier, phone number, or email address.)
        */
        this.set_DestinationId = function(value) {
            this.setInput("DestinationId", value);
        }

        /*
        Set the value of the DestinationType input for this Choreo. ((optional, string) Type of destination user. Defaults to Dwolla. Can be Dwolla, Facebook, Twitter, Email, or Phone.)
        */
        this.set_DestinationType = function(value) {
            this.setInput("DestinationType", value);
        }

        /*
        Set the value of the FacillitatorAmount input for this Choreo. ((required, string) Amount of the facilitator fee to override. Only applicable if the facilitator fee feature is enabled. If set to 0, facilitator fee is disabled for transaction. Cannot exceed 25% of the 'amount'.)
        */
        this.set_FacillitatorAmount = function(value) {
            this.setInput("FacillitatorAmount", value);
        }

        /*
        Set the value of the FundsSource input for this Choreo. ((required, string) Id of funding source to send funds from. Defaults to Balance.  Balance sourced transfers process immediately. Non-balanced sourced transfers may process immediately or take up to five business days.)
        */
        this.set_FundsSource = function(value) {
            this.setInput("FundsSource", value);
        }

        /*
        Set the value of the Notes input for this Choreo. ((required, multiline) Note to attach to the transaction. Limited to 250 characters.)
        */
        this.set_Notes = function(value) {
            this.setInput("Notes", value);
        }

        /*
        Set the value of the Pin input for this Choreo. ((required, integer) User's PIN associated with their account)
        */
        this.set_Pin = function(value) {
            this.setInput("Pin", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Send Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SendResultSet = function(resultStream) {
    SendResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Send, choreography.Choreography);
util.inherits(SendInputSet, choreography.InputSet);
util.inherits(SendResultSet, choreography.ResultSet);
exports.Send = Send;


/*
    Stats
    Retrieves the account information for the user associated with the given authorized access token.
*/


var Stats = function(session) {
    /*
        Create a new instance of the Stats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Dwolla/Transactions/Stats"
    Stats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Stats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StatsInputSet = function() {
    StatsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) A valid OAuth token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) Ending date and time to for which to process transactions stats. Defaults to current date and time in UTC.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Starting date and time to for which to process transactions stats. Defaults to 0300 of the current day in UTC.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Types input for this Choreo. ((optional, string) Types of status to retrieve. Must be comma delimited. Options are TransactionsCount and TransactionsTotal. Defaults to include all stats.)
        */
        this.set_Types = function(value) {
            this.setInput("Types", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Stats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StatsResultSet = function(resultStream) {
    StatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Dwolla.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Stats, choreography.Choreography);
util.inherits(StatsInputSet, choreography.InputSet);
util.inherits(StatsResultSet, choreography.ResultSet);
exports.Stats = Stats;

