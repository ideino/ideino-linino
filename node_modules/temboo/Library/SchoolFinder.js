
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DistrictSearch
    Returns a list of school profiles and related school information for a zip code, city, state, or other criteria in the search parameters.
*/


var DistrictSearch = function(session) {
    /*
        Create a new instance of the DistrictSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/DistrictSearch"
    DistrictSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DistrictSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DistrictSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DistrictSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DistrictSearchInputSet = function() {
    DistrictSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((conditional, string) The name of a city. City requests must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((conditional, string) The internal Education.com id of a school district.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the DistrictLEA input for this Choreo. ((conditional, string) The NCES Local Education Agency (LEA) id of a school district.)
        */
        this.set_DistrictLEA = function(value) {
            this.setInput("DistrictLEA", value);
        }

        /*
        Set the value of the DistrictName input for this Choreo. ((conditional, string) The name of the district.)
        */
        this.set_DistrictName = function(value) {
            this.setInput("DistrictName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((conditional, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DistrictSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DistrictSearchResultSet = function(resultStream) {
    DistrictSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DistrictSearch, choreography.Choreography);
util.inherits(DistrictSearchInputSet, choreography.InputSet);
util.inherits(DistrictSearchResultSet, choreography.ResultSet);
exports.DistrictSearch = DistrictSearch;


/*
    GBD
    Returns contextual and branding links to Education.com. 
*/


var GBD = function(session) {
    /*
        Create a new instance of the GBD Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GBD"
    GBD.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GBDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GBDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GBD
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GBDInputSet = function() {
    GBDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((conditional, string) The name of a city. Must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((conditional, string) The internal Education.com id of a school district.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The nces id of the school.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The id of the school.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

        /*
        Set the value of the State input for this Choreo. ((conditional, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GBD Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GBDResultSet = function(resultStream) {
    GBDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GBD, choreography.Choreography);
util.inherits(GBDInputSet, choreography.InputSet);
util.inherits(GBDResultSet, choreography.ResultSet);
exports.GBD = GBD;


/*
    GetReviews
    Returns a list of the most recent school reviews and parent rating for a single school.
*/


var GetReviews = function(session) {
    /*
        Create a new instance of the GetReviews Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GetReviews"
    GetReviews.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReviewsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReviewsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReviews
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReviewsInputSet = function() {
    GetReviewsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The National Center for Education Statistics (NCES) id of the school. NCES or SchoolID are required.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The Education.com id of the school you want to find. NCES or SchoolID are required.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReviews Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReviewsResultSet = function(resultStream) {
    GetReviewsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReviews, choreography.Choreography);
util.inherits(GetReviewsInputSet, choreography.InputSet);
util.inherits(GetReviewsResultSet, choreography.ResultSet);
exports.GetReviews = GetReviews;


/*
    GetStudentStats
    Returns student statistics for a single school, city, or state. 
*/


var GetStudentStats = function(session) {
    /*
        Create a new instance of the GetStudentStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GetStudentStats"
    GetStudentStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetStudentStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetStudentStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetStudentStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetStudentStatsInputSet = function() {
    GetStudentStatsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The name of a city. Please note cities composed of two words should be formatted with a plus sign e.g. “san+Francisco.” City requests must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((conditional, string) The education.com district id.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the DistrictLEA input for this Choreo. ((conditional, string) The LEA id of the district.)
        */
        this.set_DistrictLEA = function(value) {
            this.setInput("DistrictLEA", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The National Center for Education Statistics (NCES) id of the school.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((conditional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The Education.com id of the school you want to find.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, integer) A five digit US postal code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetStudentStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetStudentStatsResultSet = function(resultStream) {
    GetStudentStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetStudentStats, choreography.Choreography);
util.inherits(GetStudentStatsInputSet, choreography.InputSet);
util.inherits(GetStudentStatsResultSet, choreography.ResultSet);
exports.GetStudentStats = GetStudentStats;


/*
    GetTeacherStats
    Returns teacher statistics for a school, district, or state. 
*/


var GetTeacherStats = function(session) {
    /*
        Create a new instance of the GetTeacherStats Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GetTeacherStats"
    GetTeacherStats.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTeacherStatsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTeacherStatsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTeacherStats
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTeacherStatsInputSet = function() {
    GetTeacherStatsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((conditional, string) The education.com district id.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the DistrictLEA input for this Choreo. ((conditional, string) The LEA id of the district.)
        */
        this.set_DistrictLEA = function(value) {
            this.setInput("DistrictLEA", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The National Center for Education Statistics (NCES) id of the school.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The Education.com id of the school you want to find.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTeacherStats Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTeacherStatsResultSet = function(resultStream) {
    GetTeacherStatsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTeacherStats, choreography.Choreography);
util.inherits(GetTeacherStatsInputSet, choreography.InputSet);
util.inherits(GetTeacherStatsResultSet, choreography.ResultSet);
exports.GetTeacherStats = GetTeacherStats;


/*
    GetTestRating
    Returns the Education.com TestRating for a single school or schools within a city or zip code. 
*/


var GetTestRating = function(session) {
    /*
        Create a new instance of the GetTestRating Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GetTestRating"
    GetTestRating.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTestRatingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTestRatingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTestRating
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTestRatingInputSet = function() {
    GetTestRatingInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((conditional, string) The name of a city. Must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The National Center for Education Statistics (NCES) id of the school.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The Education.com id of the school you want to find.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

        /*
        Set the value of the State input for this Choreo. ((conditional, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((conditional, integer) A five digit US postal code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTestRating Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTestRatingResultSet = function(resultStream) {
    GetTestRatingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTestRating, choreography.Choreography);
util.inherits(GetTestRatingInputSet, choreography.InputSet);
util.inherits(GetTestRatingResultSet, choreography.ResultSet);
exports.GetTestRating = GetTestRating;


/*
    GetTestScores
    Returns test scores for a school, district, city or state. 


*/


var GetTestScores = function(session) {
    /*
        Create a new instance of the GetTestScores Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/GetTestScores"
    GetTestScores.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTestScoresResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTestScoresInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTestScores
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTestScoresInputSet = function() {
    GetTestScoresInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((conditional, string) The education.com district id.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the DistrictLEA input for this Choreo. ((conditional, string) The LEA id of the district.)
        */
        this.set_DistrictLEA = function(value) {
            this.setInput("DistrictLEA", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((conditional, string) The National Center for Education Statistics (NCES) id of the school.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((conditional, string) The Education.com id of the school you want to find.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTestScores Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTestScoresResultSet = function(resultStream) {
    GetTestScoresResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTestScores, choreography.Choreography);
util.inherits(GetTestScoresInputSet, choreography.InputSet);
util.inherits(GetTestScoresResultSet, choreography.ResultSet);
exports.GetTestScores = GetTestScores;


/*
    NumberOf
    Returns the total number of schools, the number of schools at each level (elementary, middle, high) and the number of each type of school (public, private, charter) in a given city. 
*/


var NumberOf = function(session) {
    /*
        Create a new instance of the NumberOf Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/NumberOf"
    NumberOf.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NumberOfResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NumberOfInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NumberOf
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NumberOfInputSet = function() {
    NumberOfInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) The name of a city. City requests must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the NumberOf Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NumberOfResultSet = function(resultStream) {
    NumberOfResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NumberOf, choreography.Choreography);
util.inherits(NumberOfInputSet, choreography.InputSet);
util.inherits(NumberOfResultSet, choreography.ResultSet);
exports.NumberOf = NumberOf;


/*
    SchoolSearch
    Returns a list of school district profiles and related school information for a zip code, city, state, or other criteria in the search parameters.
*/


var SchoolSearch = function(session) {
    /*
        Create a new instance of the SchoolSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SchoolFinder/SchoolSearch"
    SchoolSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SchoolSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SchoolSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SchoolSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SchoolSearchInputSet = function() {
    SchoolSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) Your School Finder API Key.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((conditional, string) The name of a city. Must also be accompanied by the corresponding state parameter.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the County input for this Choreo. ((conditional, string) The name of a county.)
        */
        this.set_County = function(value) {
            this.setInput("County", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((conditional, decimal) A distance in miles from a specific latitude/longitude. The suggested value is around 1.5 miles. Please note that distance is required when using latitude and longitude parameters.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the DistrictID input for this Choreo. ((optional, string) The internal Education.com id of a school district.)
        */
        this.set_DistrictID = function(value) {
            this.setInput("DistrictID", value);
        }

        /*
        Set the value of the DistrictLEA input for this Choreo. ((optional, string) The NCES Local Education Agency (LEA) id of a school district.)
        */
        this.set_DistrictLEA = function(value) {
            this.setInput("DistrictLEA", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) A latitude which serves as the center for distance searches. Please note that distance is required when using latitude and longitude parameters.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) A longitude which serves as the center for distance searches. Please note that distance is required when using latitude and longitude parameters.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the MinResult input for this Choreo. ((optional, decimal) Minimum number of search results to return. The search will be expanded in increments of 0.5 miles until the minresult is reached. minResult is only valid for zip code and latitude/longitude requests.)
        */
        this.set_MinResult = function(value) {
            this.setInput("MinResult", value);
        }

        /*
        Set the value of the NCES input for this Choreo. ((optional, string) The National Center for Education Statistics (NCES) id of the school you want to find.)
        */
        this.set_NCES = function(value) {
            this.setInput("NCES", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by Education.com. Defaluts to XML. JSON is also possible.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SchoolID input for this Choreo. ((optional, string) The Education.com id of the school you want to find.)
        */
        this.set_SchoolID = function(value) {
            this.setInput("SchoolID", value);
        }

        /*
        Set the value of the State input for this Choreo. ((conditional, string) The two letter abbreviation of a state e.g. South Caroline should be formatted “SC”.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((conditional, integer) A five digit US postal code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SchoolSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SchoolSearchResultSet = function(resultStream) {
    SchoolSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Education.com.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SchoolSearch, choreography.Choreography);
util.inherits(SchoolSearchInputSet, choreography.InputSet);
util.inherits(SchoolSearchResultSet, choreography.ResultSet);
exports.SchoolSearch = SchoolSearch;

