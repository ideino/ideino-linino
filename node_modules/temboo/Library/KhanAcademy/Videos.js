
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetVideoByReadableID
    Retrieves video data for a given video according to its readable ID.
*/


var GetVideoByReadableID = function(session) {
    /*
        Create a new instance of the GetVideoByReadableID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Videos/GetVideoByReadableID"
    GetVideoByReadableID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetVideoByReadableIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetVideoByReadableIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetVideoByReadableID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetVideoByReadableIDInputSet = function() {
    GetVideoByReadableIDInputSet.super_.call(this);
        /*
        Set the value of the ReadableID input for this Choreo. ((required, string) The ReadableID of the video for which you want to retrieve information (e.g. adding-subtracting-negative-numbers).)
        */
        this.set_ReadableID = function(value) {
            this.setInput("ReadableID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetVideoByReadableID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetVideoByReadableIDResultSet = function(resultStream) {
    GetVideoByReadableIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetVideoByReadableID, choreography.Choreography);
util.inherits(GetVideoByReadableIDInputSet, choreography.InputSet);
util.inherits(GetVideoByReadableIDResultSet, choreography.ResultSet);
exports.GetVideoByReadableID = GetVideoByReadableID;


/*
    GetVideoExercises
    Retrieves all the exercises associated with a given video.
*/


var GetVideoExercises = function(session) {
    /*
        Create a new instance of the GetVideoExercises Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Videos/GetVideoExercises"
    GetVideoExercises.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetVideoExercisesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetVideoExercisesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetVideoExercises
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetVideoExercisesInputSet = function() {
    GetVideoExercisesInputSet.super_.call(this);
        /*
        Set the value of the YouTubeID input for this Choreo. ((required, string) The Youtube ID of the video for which you want data.)
        */
        this.set_YouTubeID = function(value) {
            this.setInput("YouTubeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetVideoExercises Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetVideoExercisesResultSet = function(resultStream) {
    GetVideoExercisesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetVideoExercises, choreography.Choreography);
util.inherits(GetVideoExercisesInputSet, choreography.InputSet);
util.inherits(GetVideoExercisesResultSet, choreography.ResultSet);
exports.GetVideoExercises = GetVideoExercises;

