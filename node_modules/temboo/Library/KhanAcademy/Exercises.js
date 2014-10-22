
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AllExercises
    Retrieves a list of all exercises in the Khan Academy library.
*/


var AllExercises = function(session) {
    /*
        Create a new instance of the AllExercises Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Exercises/AllExercises"
    AllExercises.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AllExercisesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AllExercisesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AllExercises
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AllExercisesInputSet = function() {
    AllExercisesInputSet.super_.call(this);
}

/*
A ResultSet with methods tailored to the values returned by the AllExercises Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AllExercisesResultSet = function(resultStream) {
    AllExercisesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AllExercises, choreography.Choreography);
util.inherits(AllExercisesInputSet, choreography.InputSet);
util.inherits(AllExercisesResultSet, choreography.ResultSet);
exports.AllExercises = AllExercises;


/*
    GetExercise
    Retrieves the specified exercise.
*/


var GetExercise = function(session) {
    /*
        Create a new instance of the GetExercise Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Exercises/GetExercise"
    GetExercise.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetExerciseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetExerciseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetExercise
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetExerciseInputSet = function() {
    GetExerciseInputSet.super_.call(this);
        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The name of the exercise to retrieve (e.g. logarithms_1))
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetExercise Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetExerciseResultSet = function(resultStream) {
    GetExerciseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetExercise, choreography.Choreography);
util.inherits(GetExerciseInputSet, choreography.InputSet);
util.inherits(GetExerciseResultSet, choreography.ResultSet);
exports.GetExercise = GetExercise;


/*
    GetExerciseFollowUp
    Retrieves all exercises which have the specified exercise as a prerequisite.
*/


var GetExerciseFollowUp = function(session) {
    /*
        Create a new instance of the GetExerciseFollowUp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Exercises/GetExerciseFollowUp"
    GetExerciseFollowUp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetExerciseFollowUpResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetExerciseFollowUpInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetExerciseFollowUp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetExerciseFollowUpInputSet = function() {
    GetExerciseFollowUpInputSet.super_.call(this);
        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The name of the exercise to retrieve (e.g. logarithms_1))
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetExerciseFollowUp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetExerciseFollowUpResultSet = function(resultStream) {
    GetExerciseFollowUpResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetExerciseFollowUp, choreography.Choreography);
util.inherits(GetExerciseFollowUpInputSet, choreography.InputSet);
util.inherits(GetExerciseFollowUpResultSet, choreography.ResultSet);
exports.GetExerciseFollowUp = GetExerciseFollowUp;


/*
    GetExerciseVideos
    Retrieves all videos associated with a given exercise.
*/


var GetExerciseVideos = function(session) {
    /*
        Create a new instance of the GetExerciseVideos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Exercises/GetExerciseVideos"
    GetExerciseVideos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetExerciseVideosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetExerciseVideosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetExerciseVideos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetExerciseVideosInputSet = function() {
    GetExerciseVideosInputSet.super_.call(this);
        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The name of the exercise to retrieve (e.g. logarithms_1))
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetExerciseVideos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetExerciseVideosResultSet = function(resultStream) {
    GetExerciseVideosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetExerciseVideos, choreography.Choreography);
util.inherits(GetExerciseVideosInputSet, choreography.InputSet);
util.inherits(GetExerciseVideosResultSet, choreography.ResultSet);
exports.GetExerciseVideos = GetExerciseVideos;

