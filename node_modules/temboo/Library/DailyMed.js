
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetComponents
    Returns imprint data associated with a given National Drug Code (NDC) in the DailyMed database.
*/


var GetComponents = function(session) {
    /*
        Create a new instance of the GetComponents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DailyMed/GetComponents"
    GetComponents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetComponentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetComponentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetComponents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetComponentsInputSet = function() {
    GetComponentsInputSet.super_.call(this);
        /*
        Set the value of the SetID input for this Choreo. ((required, string) The unique ID assigned by DailyMed to each drug. You can find the SetID of a drug by first running the SearchByName or SearchByNDC Choreos.)
        */
        this.set_SetID = function(value) {
            this.setInput("SetID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetComponents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetComponentsResultSet = function(resultStream) {
    GetComponentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from DailyMed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetComponents, choreography.Choreography);
util.inherits(GetComponentsInputSet, choreography.InputSet);
util.inherits(GetComponentsResultSet, choreography.ResultSet);
exports.GetComponents = GetComponents;


/*
    Query
    Returns the records available in the DailyMed database associated with a given drug.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DailyMed/Query"
    Query.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Query
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryInputSet = function() {
    QueryInputSet.super_.call(this);
        /*
        Set the value of the Components input for this Choreo. ((optional, string) Enter the DailyMed components you want returned as a comma delimited string. When left blank, the full DailyMed record is returned. See documentation for more information on components.)
        */
        this.set_Components = function(value) {
            this.setInput("Components", value);
        }

        /*
        Set the value of the SetID input for this Choreo. ((required, string) The unique ID assigned by DailyMed to each drug. You can find the SetID of a drug by first running the SearchByName or SearchByNDC Choreos.)
        */
        this.set_SetID = function(value) {
            this.setInput("SetID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from DailyMed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;


/*
    SearchByNDC
    Returns a list of drugs in the DailyMed database associated with a given National Drug Code (NDC).
*/


var SearchByNDC = function(session) {
    /*
        Create a new instance of the SearchByNDC Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DailyMed/SearchByNDC"
    SearchByNDC.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByNDCResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByNDCInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByNDC
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByNDCInputSet = function() {
    SearchByNDCInputSet.super_.call(this);
        /*
        Set the value of the NDC input for this Choreo. ((required, string) National Drug Code. This is a unique 10-digit numeric identifier assigned to each medication by the Food and Drug Administration (FDA).)
        */
        this.set_NDC = function(value) {
            this.setInput("NDC", value);
        }

        /*
        Set the value of the OutputFormat input for this Choreo. ((optional, string) Defaults to XML format when nothing is specified. Acceptable values: xml or json.)
        */
        this.set_OutputFormat = function(value) {
            this.setInput("OutputFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByNDC Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByNDCResultSet = function(resultStream) {
    SearchByNDCResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DailyMed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByNDC, choreography.Choreography);
util.inherits(SearchByNDCInputSet, choreography.InputSet);
util.inherits(SearchByNDCResultSet, choreography.ResultSet);
exports.SearchByNDC = SearchByNDC;


/*
    SearchByName
    Returns a list of drugs in the DailyMed database associated with a given drug name.
*/


var SearchByName = function(session) {
    /*
        Create a new instance of the SearchByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DailyMed/SearchByName"
    SearchByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByNameInputSet = function() {
    SearchByNameInputSet.super_.call(this);
        /*
        Set the value of the DrugName input for this Choreo. ((required, string) The name of the drug you want to find.)
        */
        this.set_DrugName = function(value) {
            this.setInput("DrugName", value);
        }

        /*
        Set the value of the LabelType input for this Choreo. ((optional, string) Filter results by a specified type. Acceptable values: rxonly, otc, human, human/rxonly, human/otc, animal. See documentation for more information.)
        */
        this.set_LabelType = function(value) {
            this.setInput("LabelType", value);
        }

        /*
        Set the value of the OutputFormat input for this Choreo. ((optional, string) Defaults to XML format when nothing is specified. Acceptable values: xml or json.)
        */
        this.set_OutputFormat = function(value) {
            this.setInput("OutputFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByNameResultSet = function(resultStream) {
    SearchByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DailyMed.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByName, choreography.Choreography);
util.inherits(SearchByNameInputSet, choreography.InputSet);
util.inherits(SearchByNameResultSet, choreography.ResultSet);
exports.SearchByName = SearchByName;

