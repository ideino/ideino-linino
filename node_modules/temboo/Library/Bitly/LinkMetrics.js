
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetClicksForLink
    Returns the number of clicks on a single bitly link.
*/


var GetClicksForLink = function(session) {
    /*
        Create a new instance of the GetClicksForLink Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/LinkMetrics/GetClicksForLink"
    GetClicksForLink.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetClicksForLinkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetClicksForLinkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetClicksForLink
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetClicksForLinkInputSet = function() {
    GetClicksForLinkInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The result limit. Defaults to 100. Range is 1 to 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) A bitly link.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Rollup input for this Choreo. ((optional, boolean) Accepted values are true or false. When set to true, this returns data for multiple units rolled up to a single result instead of a separate value for each period of time.)
        */
        this.set_Rollup = function(value) {
            this.setInput("Rollup", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) An epoch timestamp, indicating the most recent time for which to pull metrics.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) An integer hour offset from UTC (-12..12), or a timezone string. Defaults to "America/New_York".)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the UnitName input for this Choreo. ((optional, string) The unit of time that corresponds to query you want to run. Accepted values are: minute, hour, day, week, month, and day. Defaults to "day".)
        */
        this.set_UnitName = function(value) {
            this.setInput("UnitName", value);
        }

        /*
        Set the value of the UnitValue input for this Choreo. ((optional, integer) An integer representing the amount of time to query for. Corresponds to the UnitName input. Defaults to -1 indicating to return all units of time.)
        */
        this.set_UnitValue = function(value) {
            this.setInput("UnitValue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetClicksForLink Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetClicksForLinkResultSet = function(resultStream) {
    GetClicksForLinkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetClicksForLink, choreography.Choreography);
util.inherits(GetClicksForLinkInputSet, choreography.InputSet);
util.inherits(GetClicksForLinkResultSet, choreography.ResultSet);
exports.GetClicksForLink = GetClicksForLink;


/*
    GetCountryMetricsForLink
    Returns metrics about the countries referring click traffic to a single bitly link.
*/


var GetCountryMetricsForLink = function(session) {
    /*
        Create a new instance of the GetCountryMetricsForLink Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/LinkMetrics/GetCountryMetricsForLink"
    GetCountryMetricsForLink.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCountryMetricsForLinkResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCountryMetricsForLinkInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCountryMetricsForLink
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCountryMetricsForLinkInputSet = function() {
    GetCountryMetricsForLinkInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The result limit. Defaults to 100. Range is 1 to 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) A bitly link.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Rollup input for this Choreo. ((optional, boolean) Accepted values are true or false. When set to true, this returns data for multiple units rolled up to a single result instead of a separate value for each period of time.)
        */
        this.set_Rollup = function(value) {
            this.setInput("Rollup", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) An epoch timestamp, indicating the most recent time for which to pull metrics.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) An integer hour offset from UTC (-12..12), or a timezone string. Defaults to "America/New_York".)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the UnitName input for this Choreo. ((optional, string) The unit of time that corresponds to query you want to run. Accepted values are: minute, hour, day, week, month, and day. Defaults to "day".)
        */
        this.set_UnitName = function(value) {
            this.setInput("UnitName", value);
        }

        /*
        Set the value of the UnitValue input for this Choreo. ((optional, integer) An integer representing the amount of time to query for. Corresponds to the UnitName input. Defaults to -1 indicating to return all units of time.)
        */
        this.set_UnitValue = function(value) {
            this.setInput("UnitValue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetCountryMetricsForLink Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCountryMetricsForLinkResultSet = function(resultStream) {
    GetCountryMetricsForLinkResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCountryMetricsForLink, choreography.Choreography);
util.inherits(GetCountryMetricsForLinkInputSet, choreography.InputSet);
util.inherits(GetCountryMetricsForLinkResultSet, choreography.ResultSet);
exports.GetCountryMetricsForLink = GetCountryMetricsForLink;


/*
    GetEncodersCount
    Returns the count of users who have shortened a specified bitly link.
*/


var GetEncodersCount = function(session) {
    /*
        Create a new instance of the GetEncodersCount Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/LinkMetrics/GetEncodersCount"
    GetEncodersCount.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEncodersCountResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEncodersCountInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEncodersCount
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEncodersCountInputSet = function() {
    GetEncodersCountInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) A bitly link.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEncodersCount Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEncodersCountResultSet = function(resultStream) {
    GetEncodersCountResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEncodersCount, choreography.Choreography);
util.inherits(GetEncodersCountInputSet, choreography.InputSet);
util.inherits(GetEncodersCountResultSet, choreography.ResultSet);
exports.GetEncodersCount = GetEncodersCount;


/*
    GetReferrers
    Returns metrics about the pages referring click traffic to a single bitly link.
*/


var GetReferrers = function(session) {
    /*
        Create a new instance of the GetReferrers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/LinkMetrics/GetReferrers"
    GetReferrers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReferrersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReferrersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReferrers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReferrersInputSet = function() {
    GetReferrersInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The result limit. Defaults to 100. Range is 1 to 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) A bitly link.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Rollup input for this Choreo. ((optional, boolean) Accepted values are true or false. When set to true, this returns data for multiple units rolled up to a single result instead of a separate value for each period of time.)
        */
        this.set_Rollup = function(value) {
            this.setInput("Rollup", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) An epoch timestamp, indicating the most recent time for which to pull metrics.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) An integer hour offset from UTC (-12..12), or a timezone string. Defaults to "America/New_York".)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the UnitName input for this Choreo. ((optional, string) The unit of time that corresponds to query you want to run. Accepted values are: minute, hour, day, week, month, and day. Defaults to "day".)
        */
        this.set_UnitName = function(value) {
            this.setInput("UnitName", value);
        }

        /*
        Set the value of the UnitValue input for this Choreo. ((optional, integer) An integer representing the amount of time to query for. Corresponds to the UnitName input. Defaults to -1 indicating to return all units of time.)
        */
        this.set_UnitValue = function(value) {
            this.setInput("UnitValue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReferrers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReferrersResultSet = function(resultStream) {
    GetReferrersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReferrers, choreography.Choreography);
util.inherits(GetReferrersInputSet, choreography.InputSet);
util.inherits(GetReferrersResultSet, choreography.ResultSet);
exports.GetReferrers = GetReferrers;


/*
    GetReferringDomains
    Returns metrics about the domains referring click traffic to a single bitly link.
*/


var GetReferringDomains = function(session) {
    /*
        Create a new instance of the GetReferringDomains Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/LinkMetrics/GetReferringDomains"
    GetReferringDomains.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReferringDomainsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReferringDomainsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReferringDomains
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReferringDomainsInputSet = function() {
    GetReferringDomainsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The result limit. Defaults to 100. Range is 1 to 1000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Link input for this Choreo. ((required, string) A bitly link.)
        */
        this.set_Link = function(value) {
            this.setInput("Link", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Rollup input for this Choreo. ((optional, boolean) Accepted values are true or false. When set to true, this returns data for multiple units rolled up to a single result instead of a separate value for each period of time.)
        */
        this.set_Rollup = function(value) {
            this.setInput("Rollup", value);
        }

        /*
        Set the value of the Timestamp input for this Choreo. ((optional, date) An epoch timestamp, indicating the most recent time for which to pull metrics.)
        */
        this.set_Timestamp = function(value) {
            this.setInput("Timestamp", value);
        }

        /*
        Set the value of the Timezone input for this Choreo. ((optional, string) An integer hour offset from UTC (-12..12), or a timezone string. Defaults to "America/New_York".)
        */
        this.set_Timezone = function(value) {
            this.setInput("Timezone", value);
        }

        /*
        Set the value of the UnitName input for this Choreo. ((optional, string) The unit of time that corresponds to query you want to run. Accepted values are: minute, hour, day, week, month, and day. Defaults to "day".)
        */
        this.set_UnitName = function(value) {
            this.setInput("UnitName", value);
        }

        /*
        Set the value of the UnitValue input for this Choreo. ((optional, integer) An integer representing the amount of time to query for. Corresponds to the UnitName input. Defaults to -1 indicating to return all units of time.)
        */
        this.set_UnitValue = function(value) {
            this.setInput("UnitValue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReferringDomains Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReferringDomainsResultSet = function(resultStream) {
    GetReferringDomainsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReferringDomains, choreography.Choreography);
util.inherits(GetReferringDomainsInputSet, choreography.InputSet);
util.inherits(GetReferringDomainsResultSet, choreography.ResultSet);
exports.GetReferringDomains = GetReferringDomains;

