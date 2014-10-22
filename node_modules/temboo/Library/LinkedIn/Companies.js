
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompaniesFollowed
    Returns a list of companies followed by the current user.
*/


var CompaniesFollowed = function(session) {
    /*
        Create a new instance of the CompaniesFollowed Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/CompaniesFollowed"
    CompaniesFollowed.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompaniesFollowedResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompaniesFollowedInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompaniesFollowed
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompaniesFollowedInputSet = function() {
    CompaniesFollowedInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the CompaniesFollowed Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompaniesFollowedResultSet = function(resultStream) {
    CompaniesFollowedResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompaniesFollowed, choreography.Choreography);
util.inherits(CompaniesFollowedInputSet, choreography.InputSet);
util.inherits(CompaniesFollowedResultSet, choreography.ResultSet);
exports.CompaniesFollowed = CompaniesFollowed;


/*
    GetCompanyProfileByEmailDomain
    Retrieve a company profile by email domain.
*/


var GetCompanyProfileByEmailDomain = function(session) {
    /*
        Create a new instance of the GetCompanyProfileByEmailDomain Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/GetCompanyProfileByEmailDomain"
    GetCompanyProfileByEmailDomain.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyProfileByEmailDomainResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyProfileByEmailDomainInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyProfileByEmailDomain
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyProfileByEmailDomainInputSet = function() {
    GetCompanyProfileByEmailDomainInputSet.super_.call(this);
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
        Set the value of the EmailDomain input for this Choreo. ((required, string) An email domain used to search for a company (i.e. apple.com).)
        */
        this.set_EmailDomain = function(value) {
            this.setInput("EmailDomain", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyProfileByEmailDomain Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyProfileByEmailDomainResultSet = function(resultStream) {
    GetCompanyProfileByEmailDomainResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyProfileByEmailDomain, choreography.Choreography);
util.inherits(GetCompanyProfileByEmailDomainInputSet, choreography.InputSet);
util.inherits(GetCompanyProfileByEmailDomainResultSet, choreography.ResultSet);
exports.GetCompanyProfileByEmailDomain = GetCompanyProfileByEmailDomain;


/*
    GetCompanyProfileByID
    Retrieve a company profile by ID.
*/


var GetCompanyProfileByID = function(session) {
    /*
        Create a new instance of the GetCompanyProfileByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/GetCompanyProfileByID"
    GetCompanyProfileByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyProfileByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyProfileByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyProfileByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyProfileByIDInputSet = function() {
    GetCompanyProfileByIDInputSet.super_.call(this);
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
        Set the value of the CompanyID input for this Choreo. ((required, integer) A LinkedIn assigned ID associated with the company that you want to retrieve.)
        */
        this.set_CompanyID = function(value) {
            this.setInput("CompanyID", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyProfileByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyProfileByIDResultSet = function(resultStream) {
    GetCompanyProfileByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyProfileByID, choreography.Choreography);
util.inherits(GetCompanyProfileByIDInputSet, choreography.InputSet);
util.inherits(GetCompanyProfileByIDResultSet, choreography.ResultSet);
exports.GetCompanyProfileByID = GetCompanyProfileByID;


/*
    GetCompanyProfileByName
    Retrieve a company profile by entering a company's universal-name.
*/


var GetCompanyProfileByName = function(session) {
    /*
        Create a new instance of the GetCompanyProfileByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/GetCompanyProfileByName"
    GetCompanyProfileByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyProfileByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyProfileByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyProfileByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyProfileByNameInputSet = function() {
    GetCompanyProfileByNameInputSet.super_.call(this);
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
        Set the value of the CompanyName input for this Choreo. ((required, integer) The unique string identifier for a company.)
        */
        this.set_CompanyName = function(value) {
            this.setInput("CompanyName", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyProfileByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyProfileByNameResultSet = function(resultStream) {
    GetCompanyProfileByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyProfileByName, choreography.Choreography);
util.inherits(GetCompanyProfileByNameInputSet, choreography.InputSet);
util.inherits(GetCompanyProfileByNameResultSet, choreography.ResultSet);
exports.GetCompanyProfileByName = GetCompanyProfileByName;


/*
    GetCompanyProfiles
    Retrieve multiple company profiles using a given list of company IDs or names.
*/


var GetCompanyProfiles = function(session) {
    /*
        Create a new instance of the GetCompanyProfiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/GetCompanyProfiles"
    GetCompanyProfiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetCompanyProfilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetCompanyProfilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetCompanyProfiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetCompanyProfilesInputSet = function() {
    GetCompanyProfilesInputSet.super_.call(this);
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
        Set the value of the Companies input for this Choreo. ((required, string) A comma separated list of company IDs or universal-name key/value pairs. IDs and names can be mixed also. For example: 812686,universal-name=linkedin,universal-name=apple.)
        */
        this.set_Companies = function(value) {
            this.setInput("Companies", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetCompanyProfiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetCompanyProfilesResultSet = function(resultStream) {
    GetCompanyProfilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetCompanyProfiles, choreography.Choreography);
util.inherits(GetCompanyProfilesInputSet, choreography.InputSet);
util.inherits(GetCompanyProfilesResultSet, choreography.ResultSet);
exports.GetCompanyProfiles = GetCompanyProfiles;


/*
    SuggestedCompaniesToFollow
    Returns a list of suggested companies to be followed by this user.
*/


var SuggestedCompaniesToFollow = function(session) {
    /*
        Create a new instance of the SuggestedCompaniesToFollow Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LinkedIn/Companies/SuggestedCompaniesToFollow"
    SuggestedCompaniesToFollow.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SuggestedCompaniesToFollowResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SuggestedCompaniesToFollowInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SuggestedCompaniesToFollow
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SuggestedCompaniesToFollowInputSet = function() {
    SuggestedCompaniesToFollowInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the SuggestedCompaniesToFollow Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SuggestedCompaniesToFollowResultSet = function(resultStream) {
    SuggestedCompaniesToFollowResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LinkedIn.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SuggestedCompaniesToFollow, choreography.Choreography);
util.inherits(SuggestedCompaniesToFollowInputSet, choreography.InputSet);
util.inherits(SuggestedCompaniesToFollowResultSet, choreography.ResultSet);
exports.SuggestedCompaniesToFollow = SuggestedCompaniesToFollow;

