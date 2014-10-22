
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AllCategories
    Retrieves all the badge categories in Khan Academy.
*/


var AllCategories = function(session) {
    /*
        Create a new instance of the AllCategories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Badges/AllCategories"
    AllCategories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AllCategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AllCategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AllCategories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AllCategoriesInputSet = function() {
    AllCategoriesInputSet.super_.call(this);
}

/*
A ResultSet with methods tailored to the values returned by the AllCategories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AllCategoriesResultSet = function(resultStream) {
    AllCategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AllCategories, choreography.Choreography);
util.inherits(AllCategoriesInputSet, choreography.InputSet);
util.inherits(AllCategoriesResultSet, choreography.ResultSet);
exports.AllCategories = AllCategories;


/*
    BadgesByCategory
    Retrieves all badges for a specific category.
*/


var BadgesByCategory = function(session) {
    /*
        Create a new instance of the BadgesByCategory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Badges/BadgesByCategory"
    BadgesByCategory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BadgesByCategoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BadgesByCategoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BadgesByCategory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BadgesByCategoryInputSet = function() {
    BadgesByCategoryInputSet.super_.call(this);
        /*
        Set the value of the CategoryID input for this Choreo. ((required, string) The category of badges to retrieve. A full list of CategoryIds can be obtained by running the AllCategories Choreo.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BadgesByCategory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BadgesByCategoryResultSet = function(resultStream) {
    BadgesByCategoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BadgesByCategory, choreography.Choreography);
util.inherits(BadgesByCategoryInputSet, choreography.InputSet);
util.inherits(BadgesByCategoryResultSet, choreography.ResultSet);
exports.BadgesByCategory = BadgesByCategory;


/*
    GetBadges
    Retrieves a list of all badges, and if a user is logged in, retrieves additional information about the badges that user has earned.
*/


var GetBadges = function(session) {
    /*
        Create a new instance of the GetBadges Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/KhanAcademy/Badges/GetBadges"
    GetBadges.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBadgesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBadgesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBadges
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBadgesInputSet = function() {
    GetBadgesInputSet.super_.call(this);
        /*
        Set the value of the ConsumerKey input for this Choreo. ((optional, string) The Consumer Key provided by Khan Academy.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((optional, string) The OAuth Consumer Secret provided by Khan Academy.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((optional, string) The email address (coach or student ID) of user. If not provided, defaults to currently logged in user in the case when authentication credentials are provided.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the OAuthTokenSecret input for this Choreo. ((optional, string) The OAuth Token Secret retrieved during the OAuth process.)
        */
        this.set_OAuthTokenSecret = function(value) {
            this.setInput("OAuthTokenSecret", value);
        }

        /*
        Set the value of the OAuthToken input for this Choreo. ((optional, string) The OAuth Token retrieved during the OAuth process.)
        */
        this.set_OAuthToken = function(value) {
            this.setInput("OAuthToken", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBadges Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBadgesResultSet = function(resultStream) {
    GetBadgesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Khan Academy.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBadges, choreography.Choreography);
util.inherits(GetBadgesInputSet, choreography.InputSet);
util.inherits(GetBadgesResultSet, choreography.ResultSet);
exports.GetBadges = GetBadges;

