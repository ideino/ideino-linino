
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    LookupSchool
    Allows you to search the U.S. Department of Education elementary and secondary school listings which includes general school information, demographic data, and location data.
*/


var LookupSchool = function(session) {
    /*
        Create a new instance of the LookupSchool Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/ElementaryAndSecondary/LookupSchool"
    LookupSchool.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupSchoolResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupSchoolInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupSchool
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupSchoolInputSet = function() {
    LookupSchoolInputSet.super_.call(this);
        /*
        Set the value of the Keyword input for this Choreo. ((required, string) Used to perform a full text search on the data set. For example, you can search for a school name or a school's unique ID.)
        */
        this.set_Keyword = function(value) {
            this.setInput("Keyword", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LookupSchool Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupSchoolResultSet = function(resultStream) {
    LookupSchoolResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LookupSchool, choreography.Choreography);
util.inherits(LookupSchoolInputSet, choreography.InputSet);
util.inherits(LookupSchoolResultSet, choreography.ResultSet);
exports.LookupSchool = LookupSchool;

