
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateShare
    Allows you to share content on behalf of a LinkedIn member.
*/


var CreateShare = function(session) {
    /*
        Create a new instance of the CreateShare Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/ShareAndSocialStream/CreateShare"
    CreateShare.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateShareResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateShareInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateShare
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateShareInputSet = function() {
    CreateShareInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
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
        Set the value of the Comment input for this Choreo. ((conditional, string) The text of the member's comment. Required unless providing Title and URL for a shared post.)
        */
        this.set_Comment = function(value) {
            this.setInput("Comment", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description of the shared content.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ImageURL input for this Choreo. ((optional, string) The URL for the image of the shared content.)
        */
        this.set_ImageURL = function(value) {
            this.setInput("ImageURL", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((conditional, string) The title of the shared content. Required unless providing a Comment.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the URL input for this Choreo. ((conditional, string) The URL for the shared content. Required unless providing a Comment.)
        */
        this.set_URL = function(value) {
            this.setInput("URL", value);
        }

        /*
        Set the value of the Visibility input for this Choreo. ((optional, string) Determines if the post will be visible to everyone, or only those who are connected to you. Valid values are: "anyone" or "connections-only" (the default).)
        */
        this.set_Visibility = function(value) {
            this.setInput("Visibility", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateShare Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateShareResultSet = function(resultStream) {
    CreateShareResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateShare, choreography.Choreography);
util.inherits(CreateShareInputSet, choreography.InputSet);
util.inherits(CreateShareResultSet, choreography.ResultSet);
exports.CreateShare = CreateShare;


/*
    GetShare
    Retrieves a newly created shared item.
*/


var GetShare = function(session) {
    /*
        Create a new instance of the GetShare Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/ShareAndSocialStream/GetShare"
    GetShare.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetShareResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetShareInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetShare
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetShareInputSet = function() {
    GetShareInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by LinkedIn (AKA the OAuth Consumer Key).)
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
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecretKey input for this Choreo. ((required, string) The Secret Key provided by LinkedIn (AKA the OAuth Consumer Secret).)
        */
        this.set_SecretKey = function(value) {
            this.setInput("SecretKey", value);
        }

        /*
        Set the value of the UpdateKey input for this Choreo. ((required, string) The UpdateKey used to retrieve the share. This is returned by the CreateShare Choreo.)
        */
        this.set_UpdateKey = function(value) {
            this.setInput("UpdateKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetShare Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetShareResultSet = function(resultStream) {
    GetShareResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetShare, choreography.Choreography);
util.inherits(GetShareInputSet, choreography.InputSet);
util.inherits(GetShareResultSet, choreography.ResultSet);
exports.GetShare = GetShare;

