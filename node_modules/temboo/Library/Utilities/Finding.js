
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RegexMatch
    Returns the first substring that matches the specified regular expression pattern in the specified string.
*/


var RegexMatch = function(session) {
    /*
        Create a new instance of the RegexMatch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Finding/RegexMatch"
    RegexMatch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RegexMatchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RegexMatchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RegexMatch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RegexMatchInputSet = function() {
    RegexMatchInputSet.super_.call(this);
        /*
        Set the value of the Pattern input for this Choreo. ((conditional, string) A regular experession.)
        */
        this.set_Pattern = function(value) {
            this.setInput("Pattern", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((conditional, string) The text on which to perform a regex match.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RegexMatch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RegexMatchResultSet = function(resultStream) {
    RegexMatchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Result" output from this Choreo execution. ((string) The result of the match.)
        */
        this.get_Result = function() {
            return this.getResult("Result");
        }
}

util.inherits(RegexMatch, choreography.Choreography);
util.inherits(RegexMatchInputSet, choreography.InputSet);
util.inherits(RegexMatchResultSet, choreography.ResultSet);
exports.RegexMatch = RegexMatch;

