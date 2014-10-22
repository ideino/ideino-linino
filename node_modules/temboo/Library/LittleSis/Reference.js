
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetReferences
    Retrieves references for the data included in any record obtained from LittleSis.
*/


var GetReferences = function(session) {
    /*
        Create a new instance of the GetReferences Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Reference/GetReferences"
    GetReferences.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReferencesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReferencesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReferences
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReferencesInputSet = function() {
    GetReferencesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, decimal) The ID of the record for which you want references. This can be either an entity or a relationship ID.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the RecordType input for this Choreo. ((required, string) Specify type of record for which you want to obtain references: entity (for a person or an institution record) or relationship (for a relationship record).)
        */
        this.set_RecordType = function(value) {
            this.setInput("RecordType", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReferences Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReferencesResultSet = function(resultStream) {
    GetReferencesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReferences, choreography.Choreography);
util.inherits(GetReferencesInputSet, choreography.InputSet);
util.inherits(GetReferencesResultSet, choreography.ResultSet);
exports.GetReferences = GetReferences;


/*
    GetRelationshipReferences
    Retrieves a list of relationships for any entity in LittleSis along with references for the relationship data obtained.
*/


var GetRelationshipReferences = function(session) {
    /*
        Create a new instance of the GetRelationshipReferences Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Reference/GetRelationshipReferences"
    GetRelationshipReferences.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRelationshipReferencesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRelationshipReferencesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRelationshipReferences
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRelationshipReferencesInputSet = function() {
    GetRelationshipReferencesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, string) Comma delimited list of category IDs.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the Current input for this Choreo. ((optional, integer) Set to 1 to limit the relationships returned to only past relationships. Set to 0 to limit relationships returned to only current relationships. Defaults to all.)
        */
        this.set_Current = function(value) {
            this.setInput("Current", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, decimal) The ID of the record for which you want relationship references.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Number of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, integer) Specifies what order the given entity must have in the relationship.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specifies what page of results to show. Used in conjunction with Number parameter. A number of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Defaults to sorting by entity, which returns a list of relationships grouped by related entity. Specify another sort order for the results. Acceptable inputs: category or relationship.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetRelationshipReferences Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRelationshipReferencesResultSet = function(resultStream) {
    GetRelationshipReferencesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRelationshipReferences, choreography.Choreography);
util.inherits(GetRelationshipReferencesInputSet, choreography.InputSet);
util.inherits(GetRelationshipReferencesResultSet, choreography.ResultSet);
exports.GetRelationshipReferences = GetRelationshipReferences;

