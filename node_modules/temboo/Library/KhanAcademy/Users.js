
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CurrentUser
    Retrieves user data about a specified user.
*/


var CurrentUser = function(session) {
    /*
        Create a new instance of the CurrentUser Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/CurrentUser"
    CurrentUser.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CurrentUserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CurrentUserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CurrentUser
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CurrentUserInputSet = function() {
    CurrentUserInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CurrentUser Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CurrentUserResultSet = function(resultStream) {
    CurrentUserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CurrentUser, choreography.Choreography);
util.inherits(CurrentUserInputSet, choreography.InputSet);
util.inherits(CurrentUserResultSet, choreography.ResultSet);
exports.CurrentUser = CurrentUser;


/*
    GetExercise
    Retrieves user data for a given excercise, such as number of problems attempted, current streak, longest streak, etc.
*/


var GetExercise = function(session) {
    /*
        Create a new instance of the GetExercise Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetExercise"
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
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The exercise for which you want to retrieve follwow up exercises (e.g. "simplifying_fractions").)
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
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
    Retrieves user data about all excercises which have the specified excercise as a prerequisite.
*/


var GetExerciseFollowUp = function(session) {
    /*
        Create a new instance of the GetExerciseFollowUp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetExerciseFollowUp"
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
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The exercise for which you want to retrieve follwow up exercises (e.g. "simplifying_fractions").)
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
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
    GetExerciseLog
    Retrieves user data about a specific excercise, such as when the problem was done, if the answer was correct, etc.
*/


var GetExerciseLog = function(session) {
    /*
        Create a new instance of the GetExerciseLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetExerciseLog"
    GetExerciseLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetExerciseLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetExerciseLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetExerciseLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetExerciseLogInputSet = function() {
    GetExerciseLogInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, string) The date/time to end searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the ExerciseName input for this Choreo. ((required, string) The name of the exercise for which you want to retrieve information (e.g. scientific_notation).)
        */
        this.set_ExerciseName = function(value) {
            this.setInput("ExerciseName", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, string) The date/time to start searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetExerciseLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetExerciseLogResultSet = function(resultStream) {
    GetExerciseLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetExerciseLog, choreography.Choreography);
util.inherits(GetExerciseLogInputSet, choreography.InputSet);
util.inherits(GetExerciseLogResultSet, choreography.ResultSet);
exports.GetExerciseLog = GetExerciseLog;


/*
    GetUserExercises
    Retrieves data about all excercises engaged by a specific user.
*/


var GetUserExercises = function(session) {
    /*
        Create a new instance of the GetUserExercises Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetUserExercises"
    GetUserExercises.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserExercisesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserExercisesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserExercises
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserExercisesInputSet = function() {
    GetUserExercisesInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserExercises Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserExercisesResultSet = function(resultStream) {
    GetUserExercisesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserExercises, choreography.Choreography);
util.inherits(GetUserExercisesInputSet, choreography.InputSet);
util.inherits(GetUserExercisesResultSet, choreography.ResultSet);
exports.GetUserExercises = GetUserExercises;


/*
    GetUserVideos
    Retrieves data about all videos watched by a specific user.
*/


var GetUserVideos = function(session) {
    /*
        Create a new instance of the GetUserVideos Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetUserVideos"
    GetUserVideos.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserVideosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserVideosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserVideos
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserVideosInputSet = function() {
    GetUserVideosInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, string) The date/time to end searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, string) The date/time to start searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserVideos Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserVideosResultSet = function(resultStream) {
    GetUserVideosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserVideos, choreography.Choreography);
util.inherits(GetUserVideosInputSet, choreography.InputSet);
util.inherits(GetUserVideosResultSet, choreography.ResultSet);
exports.GetUserVideos = GetUserVideos;


/*
    GetVideo
    Retrieves user data about a specific video, such as amount of video watched, points received, etc.
*/


var GetVideo = function(session) {
    /*
        Create a new instance of the GetVideo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetVideo"
    GetVideo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetVideoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetVideoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetVideo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetVideoInputSet = function() {
    GetVideoInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

        /*
        Set the value of the YouTubeID input for this Choreo. ((required, string) The YouTube ID of the video for which you want to retrieve information.)
        */
        this.set_YouTubeID = function(value) {
            this.setInput("YouTubeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetVideo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetVideoResultSet = function(resultStream) {
    GetVideoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetVideo, choreography.Choreography);
util.inherits(GetVideoInputSet, choreography.InputSet);
util.inherits(GetVideoResultSet, choreography.ResultSet);
exports.GetVideo = GetVideo;


/*
    GetVideoLog
    Retrieves user log data about a specific video, such as when the log of watching a video was started, how long the session lasted, etc.
*/


var GetVideoLog = function(session) {
    /*
        Create a new instance of the GetVideoLog Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Users/GetVideoLog"
    GetVideoLog.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetVideoLogResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetVideoLogInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetVideoLog
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetVideoLogInputSet = function() {
    GetVideoLogInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, string) The date/time to end searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((required, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((required, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, string) The date/time to start searching for logs in UTC format: YYYY-mm-ddTHH:MM:SS (e.g., 2011-10-18T02:41:53).)
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the YouTubeID input for this Choreo. ((required, string) The YouTube ID of the video for which you want to retrieve information.)
        */
        this.set_YouTubeID = function(value) {
            this.setInput("YouTubeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetVideoLog Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetVideoLogResultSet = function(resultStream) {
    GetVideoLogResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetVideoLog, choreography.Choreography);
util.inherits(GetVideoLogInputSet, choreography.InputSet);
util.inherits(GetVideoLogResultSet, choreography.ResultSet);
exports.GetVideoLog = GetVideoLog;

