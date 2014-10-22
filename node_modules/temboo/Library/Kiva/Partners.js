
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetPartners
    Returns detailed listings of all Kiva field partners.
*/


var GetPartners = function(session) {
    /*
        Create a new instance of the GetPartners Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Kiva/Partners/GetPartners"
    GetPartners.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPartnersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPartnersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPartners
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPartnersInputSet = function() {
    GetPartnersInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((optional, string) Your unique application ID, usually in reverse DNS notation.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) The page position of results to return. Defaults to 1.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Output returned can be XML or JSON. Defaults to JSON.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPartners Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPartnersResultSet = function(resultStream) {
    GetPartnersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Kiva.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPartners, choreography.Choreography);
util.inherits(GetPartnersInputSet, choreography.InputSet);
util.inherits(GetPartnersResultSet, choreography.ResultSet);
exports.GetPartners = GetPartners;

