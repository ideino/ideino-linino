
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetTopicExercises
    Retrieves a list of all exercises for a given topic.
*/


var GetTopicExercises = function(session) {
    /*
        Create a new instance of the GetTopicExercises Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Topics/GetTopicExercises"
    GetTopicExercises.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopicExercisesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopicExercisesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopicExercises
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopicExercisesInputSet = function() {
    GetTopicExercisesInputSet.super_.call(this);
        /*
        Set the value of the TopicID input for this Choreo. ((required, string) The ID of the topic.)
        */
        this.set_TopicID = function(value) {
            this.setInput("TopicID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopicExercises Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopicExercisesResultSet = function(resultStream) {
    GetTopicExercisesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopicExercises, choreography.Choreography);
util.inherits(GetTopicExercisesInputSet, choreography.InputSet);
util.inherits(GetTopicExercisesResultSet, choreography.ResultSet);
exports.GetTopicExercises = GetTopicExercises;


/*
    GetTopicVideos
    Retreievs a list of all videos for a given topic.
*/


var GetTopicVideos = function(session) {
    /*
        Create a new instance of the GetTopicVideos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Topics/GetTopicVideos"
    GetTopicVideos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTopicVideosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTopicVideosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTopicVideos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTopicVideosInputSet = function() {
    GetTopicVideosInputSet.super_.call(this);
        /*
        Set the value of the TopicID input for this Choreo. ((required, string) The ID of the topic.)
        */
        this.set_TopicID = function(value) {
            this.setInput("TopicID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTopicVideos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTopicVideosResultSet = function(resultStream) {
    GetTopicVideosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTopicVideos, choreography.Choreography);
util.inherits(GetTopicVideosInputSet, choreography.InputSet);
util.inherits(GetTopicVideosResultSet, choreography.ResultSet);
exports.GetTopicVideos = GetTopicVideos;


/*
    TopicData
    Retrieves topic data for a given topic, including an abbreviated list of all its sub-topics.
*/


var TopicData = function(session) {
    /*
        Create a new instance of the TopicData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Topics/TopicData"
    TopicData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopicDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopicDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopicData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopicDataInputSet = function() {
    TopicDataInputSet.super_.call(this);
        /*
        Set the value of the TopicID input for this Choreo. ((required, string) The ID of the topic.)
        */
        this.set_TopicID = function(value) {
            this.setInput("TopicID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopicData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopicDataResultSet = function(resultStream) {
    TopicDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopicData, choreography.Choreography);
util.inherits(TopicDataInputSet, choreography.InputSet);
util.inherits(TopicDataResultSet, choreography.ResultSet);
exports.TopicData = TopicData;


/*
    TopicTree
    Retrieves the hierarchical organization of all topics in the Khan Academy library.
*/


var TopicTree = function(session) {
    /*
        Create a new instance of the TopicTree Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Topics/TopicTree"
    TopicTree.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopicTreeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopicTreeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopicTree
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopicTreeInputSet = function() {
    TopicTreeInputSet.super_.call(this);
}

/*
A ResultSet with methods tailored to the values returned by the TopicTree Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopicTreeResultSet = function(resultStream) {
    TopicTreeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopicTree, choreography.Choreography);
util.inherits(TopicTreeInputSet, choreography.InputSet);
util.inherits(TopicTreeResultSet, choreography.ResultSet);
exports.TopicTree = TopicTree;

