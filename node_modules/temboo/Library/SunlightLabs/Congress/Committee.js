
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetCommittee
    Returns details for a committee by id.
*/


var GetCommittee = function(session) {
    /*
        Create a new instance of the GetCommittee Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Committee/GetCommittee"
    GetCommittee.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommitteeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommitteeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCommittee
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommitteeInputSet = function() {
    GetCommitteeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) The id of a committee to return.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCommittee Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommitteeResultSet = function(resultStream) {
    GetCommitteeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCommittee, choreography.Choreography);
util.inherits(GetCommitteeInputSet, choreography.InputSet);
util.inherits(GetCommitteeResultSet, choreography.ResultSet);
exports.GetCommittee = GetCommittee;


/*
    GetCommitteesByLegislator
    Returns a list of all committees that a specified member serves on, including subcommittes.
*/


var GetCommitteesByLegislator = function(session) {
    /*
        Create a new instance of the GetCommitteesByLegislator Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Committee/GetCommitteesByLegislator"
    GetCommitteesByLegislator.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCommitteesByLegislatorResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCommitteesByLegislatorInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCommitteesByLegislator
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCommitteesByLegislatorInputSet = function() {
    GetCommitteesByLegislatorInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BioGuideID input for this Choreo. ((required, string) A legislator's bioguide_id. Note that this can be retrieved by running the Choreos within the Congress.Legislator bundle.)
        */
        this.set_BioGuideID = function(value) {
            this.setInput("BioGuideID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCommitteesByLegislator Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCommitteesByLegislatorResultSet = function(resultStream) {
    GetCommitteesByLegislatorResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCommitteesByLegislator, choreography.Choreography);
util.inherits(GetCommitteesByLegislatorInputSet, choreography.InputSet);
util.inherits(GetCommitteesByLegislatorResultSet, choreography.ResultSet);
exports.GetCommitteesByLegislator = GetCommitteesByLegislator;


/*
    GetList
    Returns a list of all committees for a given chamber along with their subcommittees.
*/


var GetList = function(session) {
    /*
        Create a new instance of the GetList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Committee/GetList"
    GetList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListInputSet = function() {
    GetListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Chamber input for this Choreo. ((required, string) A chamber to list committees for. Valid values are: House, Senate, or Joint.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListResultSet = function(resultStream) {
    GetListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetList, choreography.Choreography);
util.inherits(GetListInputSet, choreography.InputSet);
util.inherits(GetListResultSet, choreography.ResultSet);
exports.GetList = GetList;

