
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetUserInfo
    Gets a user's profile data.
*/


var GetUserInfo = function(session) {
    /*
        Create a new instance of the GetUserInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Profile/GetUserInfo"
    GetUserInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetUserInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetUserInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetUserInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetUserInfoInputSet = function() {
    GetUserInfoInputSet.super_.call(this);
        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetUserInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetUserInfoResultSet = function(resultStream) {
    GetUserInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetUserInfo, choreography.Choreography);
util.inherits(GetUserInfoInputSet, choreography.InputSet);
util.inherits(GetUserInfoResultSet, choreography.ResultSet);
exports.GetUserInfo = GetUserInfo;


/*
    UpdateUserInfo
    Updates a user's profile data.
*/


var UpdateUserInfo = function(session) {
    /*
        Create a new instance of the UpdateUserInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Fitbit/Profile/UpdateUserInfo"
    UpdateUserInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateUserInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateUserInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateUserInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateUserInfoInputSet = function() {
    UpdateUserInfoInputSet.super_.call(this);
        /*
        Set the value of the AboutMe input for this Choreo. ((optional, string) The user's About Me string.)
        */
        this.set_AboutMe = function(value) {
            this.setInput("AboutMe", value);
        }

        /*
        Set the value of the AccessTokenSecret input for this Choreo. ((required, string) The Access Token Secret retrieved during the OAuth process.)
        */
        this.set_AccessTokenSecret = function(value) {
            this.setInput("AccessTokenSecret", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved during the OAuth process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Birthday input for this Choreo. ((optional, date) Date of Birth; in the format yyyy-MM-dd.)
        */
        this.set_Birthday = function(value) {
            this.setInput("Birthday", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The user's city information.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Fitbit.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Fitbit.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) The two-character code for the user's country.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the FoodLocale input for this Choreo. ((optional, string) Food Database Locale; in the format "xx_XX".)
        */
        this.set_FoodLocale = function(value) {
            this.setInput("FoodLocale", value);
        }

        /*
        Set the value of the FullName input for this Choreo. ((optional, string) The user's full name.)
        */
        this.set_FullName = function(value) {
            this.setInput("FullName", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) The user's gender (MALE/FEMALE/NA).)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the GlucoseUnit input for this Choreo. ((optional, decimal) The blood glucose unit of measurement being used. Valid values are: en_US, any,  METRIC.)
        */
        this.set_GlucoseUnit = function(value) {
            this.setInput("GlucoseUnit", value);
        }

        /*
        Set the value of the HeightUnit input for this Choreo. ((optional, decimal) The height unit being used. Valid values are: en_US, any,  METRIC.)
        */
        this.set_HeightUnit = function(value) {
            this.setInput("HeightUnit", value);
        }

        /*
        Set the value of the Height input for this Choreo. ((optional, decimal) The user's height; in the format X.XX (inches).)
        */
        this.set_Height = function(value) {
            this.setInput("Height", value);
        }

        /*
        Set the value of the Locale input for this Choreo. ((optional, string) Locale of website (country/language); one of the locales, currently – (en_US, fr_FR, de_DE, es_ES, en_GB, en_AU, en_NZ, ja_JP).)
        */
        this.set_Locale = function(value) {
            this.setInput("Locale", value);
        }

        /*
        Set the value of the Nickname input for this Choreo. ((optional, string) The user's nickname.)
        */
        this.set_Nickname = function(value) {
            this.setInput("Nickname", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in: xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The two-character state abbreviation for the user.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the StrideLengthRunning input for this Choreo. ((optional, decimal) Running stride length; in the format X.XX.)
        */
        this.set_StrideLengthRunning = function(value) {
            this.setInput("StrideLengthRunning", value);
        }

        /*
        Set the value of the StrideLengthWalking input for this Choreo. ((optional, decimal) Walking stride length; in the format X.XX.)
        */
        this.set_StrideLengthWalking = function(value) {
            this.setInput("StrideLengthWalking", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) The user's timezone; in the format "America/Los_Angeles")
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the UserID input for this Choreo. ((optional, string) The user's encoded id. Defaults to "-" (dash) which will return data for the user associated with the token credentials provided.)
        */
        this.set_UserID = function(value) {
            this.setInput("UserID", value);
        }

        /*
        Set the value of the WaterUnit input for this Choreo. ((optional, decimal) The water unit being used. Valid values are: en_US, any,  METRIC.)
        */
        this.set_WaterUnit = function(value) {
            this.setInput("WaterUnit", value);
        }

        /*
        Set the value of the WeightUnit input for this Choreo. ((optional, string) The weight unit being used. Valid values are: en_US, any,  METRIC.)
        */
        this.set_WeightUnit = function(value) {
            this.setInput("WeightUnit", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateUserInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateUserInfoResultSet = function(resultStream) {
    UpdateUserInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Fitbit.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateUserInfo, choreography.Choreography);
util.inherits(UpdateUserInfoInputSet, choreography.InputSet);
util.inherits(UpdateUserInfoResultSet, choreography.ResultSet);
exports.UpdateUserInfo = UpdateUserInfo;

