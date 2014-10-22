
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetValuesFromXML
    Returns all element or attribute values with a specified name.
*/


var GetValuesFromXML = function(session) {
    /*
        Create a new instance of the GetValuesFromXML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/XML/GetValuesFromXML"
    GetValuesFromXML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetValuesFromXMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetValuesFromXMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetValuesFromXML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetValuesFromXMLInputSet = function() {
    GetValuesFromXMLInputSet.super_.call(this);
        /*
        Set the value of the Node input for this Choreo. ((required, string) The name of the element or attribute that contains the values you want to return. Note that attribute names should be preceded with an "@" sign (e.g. @name).)
        */
        this.set_Node = function(value) {
            this.setInput("Node", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json or csv.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML that contains the elements or attributes you want to retrieve.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetValuesFromXML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetValuesFromXMLResultSet = function(resultStream) {
    GetValuesFromXMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. (The element or attribute values.)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
}

util.inherits(GetValuesFromXML, choreography.Choreography);
util.inherits(GetValuesFromXMLInputSet, choreography.InputSet);
util.inherits(GetValuesFromXMLResultSet, choreography.ResultSet);
exports.GetValuesFromXML = GetValuesFromXML;


/*
    RunXPathQuery
    Executes an XPath query against a specified XML file and returns the result in CSV or JSON format.
*/


var RunXPathQuery = function(session) {
    /*
        Create a new instance of the RunXPathQuery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/XML/RunXPathQuery"
    RunXPathQuery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RunXPathQueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RunXPathQueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RunXPathQuery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RunXPathQueryInputSet = function() {
    RunXPathQueryInputSet.super_.call(this);
        /*
        Set the value of the Mode input for this Choreo. ((conditional, string) Valid values are "select" (the default) or "recursive". Recursive mode will iterate using the provided XPath. Select mode will return the first match if there are multiple rows in the XML provided.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json or csv.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML that contains the elements or attributes you want to retrieve.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

        /*
        Set the value of the XPath input for this Choreo. ((required, string) The XPath query to run.)
        */
        this.set_XPath = function(value) {
            this.setInput("XPath", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RunXPathQuery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RunXPathQueryResultSet = function(resultStream) {
    RunXPathQueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. (The XPath query result.)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
}

util.inherits(RunXPathQuery, choreography.Choreography);
util.inherits(RunXPathQueryInputSet, choreography.InputSet);
util.inherits(RunXPathQueryResultSet, choreography.ResultSet);
exports.RunXPathQuery = RunXPathQuery;

