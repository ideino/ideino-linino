
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    TranscriptSearch
    Retrieves transcripts of NPR stories based on their unique story IDs.
*/


var TranscriptSearch = function(session) {
    /*
        Create a new instance of the TranscriptSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/Transcripts/TranscriptSearch"
    TranscriptSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TranscriptSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TranscriptSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TranscriptSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TranscriptSearchInputSet = function() {
    TranscriptSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The story ID for which you want a transcript. You can find the story ID by first running an aprropriate StoryFinder Choreo.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TranscriptSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TranscriptSearchResultSet = function(resultStream) {
    TranscriptSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TranscriptSearch, choreography.Choreography);
util.inherits(TranscriptSearchInputSet, choreography.InputSet);
util.inherits(TranscriptSearchResultSet, choreography.ResultSet);
exports.TranscriptSearch = TranscriptSearch;

