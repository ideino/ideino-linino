
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    RetrieveBlogFollowers
    Retrieves the count of followers for a specified Tumblr blog.
*/


var RetrieveBlogFollowers = function(session) {
    /*
        Create a new instance of the RetrieveBlogFollowers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Blog/RetrieveBlogFollowers"
    RetrieveBlogFollowers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveBlogFollowersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveBlogFollowersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveBlogFollowers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveBlogFollowersInputSet = function() {
    RetrieveBlogFollowersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
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
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com))
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to return: 1 - 20. Defaults to 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) The result to start at. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by Tumblr (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveBlogFollowers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveBlogFollowersResultSet = function(resultStream) {
    RetrieveBlogFollowersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveBlogFollowers, choreography.Choreography);
util.inherits(RetrieveBlogFollowersInputSet, choreography.InputSet);
util.inherits(RetrieveBlogFollowersResultSet, choreography.ResultSet);
exports.RetrieveBlogFollowers = RetrieveBlogFollowers;


/*
    RetrieveBlogInfo
    Returns general information about the blog, such as the title, number of posts, and other high-level data.
*/


var RetrieveBlogInfo = function(session) {
    /*
        Create a new instance of the RetrieveBlogInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Tumblr/Blog/RetrieveBlogInfo"
    RetrieveBlogInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrieveBlogInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrieveBlogInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrieveBlogInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrieveBlogInfoInputSet = function() {
    RetrieveBlogInfoInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Tumblr (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BaseHostname input for this Choreo. ((required, string) The standard or custom blog hostname (i.e. temboo.tumblr.com).)
        */
        this.set_BaseHostname = function(value) {
            this.setInput("BaseHostname", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrieveBlogInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrieveBlogInfoResultSet = function(resultStream) {
    RetrieveBlogInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Tumblr. Default is JSON, can be set to XML by entering 'xml' in ResponseFormat.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrieveBlogInfo, choreography.Choreography);
util.inherits(RetrieveBlogInfoInputSet, choreography.InputSet);
util.inherits(RetrieveBlogInfoResultSet, choreography.ResultSet);
exports.RetrieveBlogInfo = RetrieveBlogInfo;

