
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ExpandURL
    Returns the target (long) URL given a shortened bitly URL.
*/


var ExpandURL = function(session) {
    /*
        Create a new instance of the ExpandURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/Links/ExpandURL"
    ExpandURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ExpandURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ExpandURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ExpandURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ExpandURLInputSet = function() {
    ExpandURLInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Defaults to simple "txt" format which will just return the expanded URL. "json" and "xml" are also supported.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShortURL input for this Choreo. ((required, string) One or more bitly links.)
        */
        this.set_ShortURL = function(value) {
            this.setInput("ShortURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ExpandURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ExpandURLResultSet = function(resultStream) {
    ExpandURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ExpandURL, choreography.Choreography);
util.inherits(ExpandURLInputSet, choreography.InputSet);
util.inherits(ExpandURLResultSet, choreography.ResultSet);
exports.ExpandURL = ExpandURL;


/*
    GetLinkInfo
    Returns the page title for a given bitly link.
*/


var GetLinkInfo = function(session) {
    /*
        Create a new instance of the GetLinkInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/Links/GetLinkInfo"
    GetLinkInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLinkInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLinkInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLinkInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLinkInfoInputSet = function() {
    GetLinkInfoInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShortURL input for this Choreo. ((required, string) One or more bitly links.)
        */
        this.set_ShortURL = function(value) {
            this.setInput("ShortURL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLinkInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLinkInfoResultSet = function(resultStream) {
    GetLinkInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLinkInfo, choreography.Choreography);
util.inherits(GetLinkInfoInputSet, choreography.InputSet);
util.inherits(GetLinkInfoResultSet, choreography.ResultSet);
exports.GetLinkInfo = GetLinkInfo;


/*
    LinkLookup
    Used to lookup a bitly link with a given long URL.
*/


var LinkLookup = function(session) {
    /*
        Create a new instance of the LinkLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/Links/LinkLookup"
    LinkLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LinkLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LinkLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LinkLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LinkLookupInputSet = function() {
    LinkLookupInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Accepted values are "json" or "xml". Defaults to "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((required, string) One or more long URLs to lookup.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LinkLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LinkLookupResultSet = function(resultStream) {
    LinkLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LinkLookup, choreography.Choreography);
util.inherits(LinkLookupInputSet, choreography.InputSet);
util.inherits(LinkLookupResultSet, choreography.ResultSet);
exports.LinkLookup = LinkLookup;


/*
    ShortenURL
    Returns a shortened URL for a long URL that you provide.
*/


var ShortenURL = function(session) {
    /*
        Create a new instance of the ShortenURL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Bitly/Links/ShortenURL"
    ShortenURL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShortenURLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShortenURLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShortenURL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShortenURLInputSet = function() {
    ShortenURLInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The oAuth access token provided by Bitly.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the LongURL input for this Choreo. ((required, string) The long url that you want to shorten.)
        */
        this.set_LongURL = function(value) {
            this.setInput("LongURL", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Defaults to simple "txt" format which will just return the shortened URL. "json" and "xml" are also supported.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShortenURL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShortenURLResultSet = function(resultStream) {
    ShortenURLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Bitly.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShortenURL, choreography.Choreography);
util.inherits(ShortenURLInputSet, choreography.InputSet);
util.inherits(ShortenURLResultSet, choreography.ResultSet);
exports.ShortenURL = ShortenURL;

