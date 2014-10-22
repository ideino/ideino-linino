
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetBatchRelationships
    Retrieves information about a batch of relationships in LittleSis according to the relationship IDs provided.
*/


var GetBatchRelationships = function(session) {
    /*
        Create a new instance of the GetBatchRelationships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Relationship/GetBatchRelationships"
    GetBatchRelationships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBatchRelationshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBatchRelationshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBatchRelationships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBatchRelationshipsInputSet = function() {
    GetBatchRelationshipsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Details input for this Choreo. ((optional, integer) Indicate 1 to include details for each relationship record returned. Otherwise, only a basic record will be returned.)
        */
        this.set_Details = function(value) {
            this.setInput("Details", value);
        }

        /*
        Set the value of the RelationshipIDs input for this Choreo. ((required, string) The IDs of the relationship records to be returned as a comma delimited string.)
        */
        this.set_RelationshipIDs = function(value) {
            this.setInput("RelationshipIDs", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBatchRelationships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBatchRelationshipsResultSet = function(resultStream) {
    GetBatchRelationshipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBatchRelationships, choreography.Choreography);
util.inherits(GetBatchRelationshipsInputSet, choreography.InputSet);
util.inherits(GetBatchRelationshipsResultSet, choreography.ResultSet);
exports.GetBatchRelationships = GetBatchRelationships;


/*
    GetOneRelationship
    Retrieves information about any known relationship between two entities in LittleSis according their IDs.
*/


var GetOneRelationship = function(session) {
    /*
        Create a new instance of the GetOneRelationship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Relationship/GetOneRelationship"
    GetOneRelationship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetOneRelationshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetOneRelationshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetOneRelationship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetOneRelationshipInputSet = function() {
    GetOneRelationshipInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityIDs input for this Choreo. ((required, string) The IDs of the entities between which you want to find relationships. Format is a semicolon delimited string (e.g. 1026;1))
        */
        this.set_EntityIDs = function(value) {
            this.setInput("EntityIDs", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetOneRelationship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetOneRelationshipResultSet = function(resultStream) {
    GetOneRelationshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetOneRelationship, choreography.Choreography);
util.inherits(GetOneRelationshipInputSet, choreography.InputSet);
util.inherits(GetOneRelationshipResultSet, choreography.ResultSet);
exports.GetOneRelationship = GetOneRelationship;


/*
    GetRelationships
    Retrieves information about a specific relationship documented in LittleSis according to its Relationship ID.
*/


var GetRelationships = function(session) {
    /*
        Create a new instance of the GetRelationships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Relationship/GetRelationships"
    GetRelationships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRelationshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRelationshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRelationships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRelationshipsInputSet = function() {
    GetRelationshipsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Details input for this Choreo. ((optional, string) Indicate "details" to retrieve detailed information associated with this record, including fields associated with the specific relationship type. Otherwise, only a basic record will be returned.)
        */
        this.set_Details = function(value) {
            this.setInput("Details", value);
        }

        /*
        Set the value of the RelationshipID input for this Choreo. ((required, integer) The ID of the relationship record to be returned.)
        */
        this.set_RelationshipID = function(value) {
            this.setInput("RelationshipID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRelationships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRelationshipsResultSet = function(resultStream) {
    GetRelationshipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRelationships, choreography.Choreography);
util.inherits(GetRelationshipsInputSet, choreography.InputSet);
util.inherits(GetRelationshipsResultSet, choreography.ResultSet);
exports.GetRelationships = GetRelationships;

