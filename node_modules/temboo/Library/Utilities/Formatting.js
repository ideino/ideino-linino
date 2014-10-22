
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FormatDateParameters
    Returns the specified date parameters as the number of milliseconds since January 1, 1970 (epoch time).
*/


var FormatDateParameters = function(session) {
    /*
        Create a new instance of the FormatDateParameters Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Formatting/FormatDateParameters"
    FormatDateParameters.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FormatDateParametersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FormatDateParametersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FormatDateParameters
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FormatDateParametersInputSet = function() {
    FormatDateParametersInputSet.super_.call(this);
        /*
        Set the value of the Day input for this Choreo. ((required, integer) Sets the day (1–31) of the timestamp.)
        */
        this.set_Day = function(value) {
            this.setInput("Day", value);
        }

        /*
        Set the value of the Hour input for this Choreo. ((optional, integer) Sets the hours (0–23) of the timestamp.)
        */
        this.set_Hour = function(value) {
            this.setInput("Hour", value);
        }

        /*
        Set the value of the Minute input for this Choreo. ((optional, integer) Sets the minutes (0–59) of the timestamp.)
        */
        this.set_Minute = function(value) {
            this.setInput("Minute", value);
        }

        /*
        Set the value of the Month input for this Choreo. ((required, integer) Sets the month (1–12) of the timestamp.)
        */
        this.set_Month = function(value) {
            this.setInput("Month", value);
        }

        /*
        Set the value of the Second input for this Choreo. ((optional, integer) Sets the seconds (0–59) of the timestamp.)
        */
        this.set_Second = function(value) {
            this.setInput("Second", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((required, integer) Sets the year of the timestamp.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FormatDateParameters Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FormatDateParametersResultSet = function(resultStream) {
    FormatDateParametersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Timestamp" output from this Choreo execution. ((date) A number representing the specified date and time, expressed as the number of milliseconds since January 1, 1970 (epoch time). )
        */
        this.get_Timestamp = function() {
            return this.getResult("Timestamp");
        }
}

util.inherits(FormatDateParameters, choreography.Choreography);
util.inherits(FormatDateParametersInputSet, choreography.InputSet);
util.inherits(FormatDateParametersResultSet, choreography.ResultSet);
exports.FormatDateParameters = FormatDateParameters;


/*
    FormatTimestamp
    Returns the specified date serial number in the desired format.
*/


var FormatTimestamp = function(session) {
    /*
        Create a new instance of the FormatTimestamp Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Formatting/FormatTimestamp"
    FormatTimestamp.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FormatTimestampResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FormatTimestampInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FormatTimestamp
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FormatTimestampInputSet = function() {
    FormatTimestampInputSet.super_.call(this);
        /*
        Set the value of the AddDays input for this Choreo. ((optional, integer) Adds the specified number of days to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddDays = function(value) {
            this.setInput("AddDays", value);
        }

        /*
        Set the value of the AddHours input for this Choreo. ((optional, integer) Adds the specified number of hours to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddHours = function(value) {
            this.setInput("AddHours", value);
        }

        /*
        Set the value of the AddMinutes input for this Choreo. ((optional, integer) Adds the specified number of minutes to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddMinutes = function(value) {
            this.setInput("AddMinutes", value);
        }

        /*
        Set the value of the AddMonths input for this Choreo. ((optional, integer) Adds the specified number of months to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddMonths = function(value) {
            this.setInput("AddMonths", value);
        }

        /*
        Set the value of the AddSeconds input for this Choreo. ((optional, integer) Adds the specified number of seconds to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddSeconds = function(value) {
            this.setInput("AddSeconds", value);
        }

        /*
        Set the value of the AddYears input for this Choreo. ((optional, integer) Adds the specified number of years to the specified date serial number. A negative number will subtract.)
        */
        this.set_AddYears = function(value) {
            this.setInput("AddYears", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((conditional, string) The format that the timestamp should be in. Java SimpleDateFormat conventions are supported. Defaults to "yyyy-MM-dd'T'HH:mm:ss.SSSZ".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the LocaleCountry input for this Choreo. ((optional, string) An ISO country code to specify locale.)
        */
        this.set_LocaleCountry = function(value) {
            this.setInput("LocaleCountry", value);
        }

        /*
        Set the value of the LocaleLanguage input for this Choreo. ((optional, string) An ISO language code to specify locale.)
        */
        this.set_LocaleLanguage = function(value) {
            this.setInput("LocaleLanguage", value);
        }

        /*
        Set the value of the LocaleVariant input for this Choreo. ((optional, string) A local variant code such as "NY" to add additional context for a locale.)
        */
        this.set_LocaleVariant = function(value) {
            this.setInput("LocaleVariant", value);
        }

        /*
        Set the value of the SetDay input for this Choreo. ((optional, integer) Sets the day of month (1–31) of the specified date serial number.)
        */
        this.set_SetDay = function(value) {
            this.setInput("SetDay", value);
        }

        /*
        Set the value of the SetHour input for this Choreo. ((optional, integer) Sets the hours (0–23) of the specified date serial number.)
        */
        this.set_SetHour = function(value) {
            this.setInput("SetHour", value);
        }

        /*
        Set the value of the SetMinute input for this Choreo. ((optional, integer) Sets the minutes (0–59) of the specified date serial number.)
        */
        this.set_SetMinute = function(value) {
            this.setInput("SetMinute", value);
        }

        /*
        Set the value of the SetMonth input for this Choreo. ((optional, integer) Sets the month (1–12) of the specified date serial number.)
        */
        this.set_SetMonth = function(value) {
            this.setInput("SetMonth", value);
        }

        /*
        Set the value of the SetSecond input for this Choreo. ((optional, integer) Sets the seconds (0–59) of the specified date serial number.)
        */
        this.set_SetSecond = function(value) {
            this.setInput("SetSecond", value);
        }

        /*
        Set the value of the SetYear input for this Choreo. ((optional, integer) Sets the year (such as 1989) of the specified date serial number.)
        */
        this.set_SetYear = function(value) {
            this.setInput("SetYear", value);
        }

        /*
        Set the value of the TimeZone input for this Choreo. ((optional, string) The timezone to use for the date formatting function. Defaults to UTC.)
        */
        this.set_TimeZone = function(value) {
            this.setInput("TimeZone", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((conditional, date) A number representing the current date and time, expressed as the number of milliseconds since January 1, 1970 (epoch time).)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FormatTimestamp Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FormatTimestampResultSet = function(resultStream) {
    FormatTimestampResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "FormattedDate" output from this Choreo execution. ((date) The formatted version of the timestamp.)
        */
        this.get_FormattedDate = function() {
            return this.getResult("FormattedDate");
        }
}

util.inherits(FormatTimestamp, choreography.Choreography);
util.inherits(FormatTimestampInputSet, choreography.InputSet);
util.inherits(FormatTimestampResultSet, choreography.ResultSet);
exports.FormatTimestamp = FormatTimestamp;


/*
    RemoveWhiteSpace
    Returns the specified formatted text as a compact string with no new lines, tabs, or preceding/trailing white space.
*/


var RemoveWhiteSpace = function(session) {
    /*
        Create a new instance of the RemoveWhiteSpace Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/Formatting/RemoveWhiteSpace"
    RemoveWhiteSpace.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RemoveWhiteSpaceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RemoveWhiteSpaceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RemoveWhiteSpace
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RemoveWhiteSpaceInputSet = function() {
    RemoveWhiteSpaceInputSet.super_.call(this);
        /*
        Set the value of the FormattedText input for this Choreo. ((required, multiline) The formatted text that should have line breaks and tabs removed.)
        */
        this.set_FormattedText = function(value) {
            this.setInput("FormattedText", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RemoveWhiteSpace Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RemoveWhiteSpaceResultSet = function(resultStream) {
    RemoveWhiteSpaceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CompactText" output from this Choreo execution. ((string) )
        */
        this.get_CompactText = function() {
            return this.getResult("CompactText");
        }
}

util.inherits(RemoveWhiteSpace, choreography.Choreography);
util.inherits(RemoveWhiteSpaceInputSet, choreography.InputSet);
util.inherits(RemoveWhiteSpaceResultSet, choreography.ResultSet);
exports.RemoveWhiteSpace = RemoveWhiteSpace;

