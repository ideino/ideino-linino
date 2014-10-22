
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Influence
    Retrieves a user's influencers and influencees.
*/


var Influence = function(session) {
    /*
        Create a new instance of the Influence Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/User/Influence"
    Influence.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new InfluenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new InfluenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Influence
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var InfluenceInputSet = function() {
    InfluenceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the KloutID input for this Choreo. ((required, string) The id for a Klout user to retrieve influencers and influencees for.)
        */
        this.set_KloutID = function(value) {
            this.setInput("KloutID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Influence Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var InfluenceResultSet = function(resultStream) {
    InfluenceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Influence, choreography.Choreography);
util.inherits(InfluenceInputSet, choreography.InputSet);
util.inherits(InfluenceResultSet, choreography.ResultSet);
exports.Influence = Influence;


/*
    Score
    Retrieves a user's Klout Score and deltas.
*/


var Score = function(session) {
    /*
        Create a new instance of the Score Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/User/Score"
    Score.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ScoreResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ScoreInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Score
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ScoreInputSet = function() {
    ScoreInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the KloutID input for this Choreo. ((required, string) The id for a Klout user to retrieve a score for.)
        */
        this.set_KloutID = function(value) {
            this.setInput("KloutID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Score Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ScoreResultSet = function(resultStream) {
    ScoreResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Score, choreography.Choreography);
util.inherits(ScoreInputSet, choreography.InputSet);
util.inherits(ScoreResultSet, choreography.ResultSet);
exports.Score = Score;


/*
    ShowUser
    Retrieves information for a specified Klout user.
*/


var ShowUser = function(session) {
    /*
        Create a new instance of the ShowUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/User/ShowUser"
    ShowUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowUserInputSet = function() {
    ShowUserInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the KloutID input for this Choreo. ((required, string) The id for a Klout user to retrieve.)
        */
        this.set_KloutID = function(value) {
            this.setInput("KloutID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowUserResultSet = function(resultStream) {
    ShowUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowUser, choreography.Choreography);
util.inherits(ShowUserInputSet, choreography.InputSet);
util.inherits(ShowUserResultSet, choreography.ResultSet);
exports.ShowUser = ShowUser;


/*
    Topics
    Retrieves a user's topics. 
*/


var Topics = function(session) {
    /*
        Create a new instance of the Topics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Klout/User/Topics"
    Topics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopicsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopicsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Topics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopicsInputSet = function() {
    TopicsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Klout.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the KloutID input for this Choreo. ((required, string) The id for a Klout user to retrieve topics for.)
        */
        this.set_KloutID = function(value) {
            this.setInput("KloutID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Topics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopicsResultSet = function(resultStream) {
    TopicsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Klout.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Topics, choreography.Choreography);
util.inherits(TopicsInputSet, choreography.InputSet);
util.inherits(TopicsResultSet, choreography.ResultSet);
exports.Topics = Topics;

