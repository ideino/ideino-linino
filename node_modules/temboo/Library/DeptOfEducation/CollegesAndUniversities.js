
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DegreesConferred
    Returns a list of all degrees conferred by a given institution, along with detailed demographic data for each degree awarded.
*/


var DegreesConferred = function(session) {
    /*
        Create a new instance of the DegreesConferred Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/DegreesConferred"
    DegreesConferred.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DegreesConferredResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DegreesConferredInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DegreesConferred
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DegreesConferredInputSet = function() {
    DegreesConferredInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DegreesConferred Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DegreesConferredResultSet = function(resultStream) {
    DegreesConferredResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DegreesConferred, choreography.Choreography);
util.inherits(DegreesConferredInputSet, choreography.InputSet);
util.inherits(DegreesConferredResultSet, choreography.ResultSet);
exports.DegreesConferred = DegreesConferred;


/*
    EducationalOfferings
    Returns educational offerings and admissions data for any college or university.
*/


var EducationalOfferings = function(session) {
    /*
        Create a new instance of the EducationalOfferings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/EducationalOfferings"
    EducationalOfferings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EducationalOfferingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EducationalOfferingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EducationalOfferings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EducationalOfferingsInputSet = function() {
    EducationalOfferingsInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EducationalOfferings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EducationalOfferingsResultSet = function(resultStream) {
    EducationalOfferingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EducationalOfferings, choreography.Choreography);
util.inherits(EducationalOfferingsInputSet, choreography.InputSet);
util.inherits(EducationalOfferingsResultSet, choreography.ResultSet);
exports.EducationalOfferings = EducationalOfferings;


/*
    EnrollmentDemographics
    Returns demographic data for colleges and universities.
*/


var EnrollmentDemographics = function(session) {
    /*
        Create a new instance of the EnrollmentDemographics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/EnrollmentDemographics"
    EnrollmentDemographics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EnrollmentDemographicsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EnrollmentDemographicsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EnrollmentDemographics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EnrollmentDemographicsInputSet = function() {
    EnrollmentDemographicsInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EnrollmentDemographics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EnrollmentDemographicsResultSet = function(resultStream) {
    EnrollmentDemographicsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EnrollmentDemographics, choreography.Choreography);
util.inherits(EnrollmentDemographicsInputSet, choreography.InputSet);
util.inherits(EnrollmentDemographicsResultSet, choreography.ResultSet);
exports.EnrollmentDemographics = EnrollmentDemographics;


/*
    FinancialAid
    Returns student financial aid and net price information for colleges and universities.
*/


var FinancialAid = function(session) {
    /*
        Create a new instance of the FinancialAid Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/FinancialAid"
    FinancialAid.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FinancialAidResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FinancialAidInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FinancialAid
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FinancialAidInputSet = function() {
    FinancialAidInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FinancialAid Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FinancialAidResultSet = function(resultStream) {
    FinancialAidResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FinancialAid, choreography.Choreography);
util.inherits(FinancialAidInputSet, choreography.InputSet);
util.inherits(FinancialAidResultSet, choreography.ResultSet);
exports.FinancialAid = FinancialAid;


/*
    GraduationRates
    Returns gradutation statistics about colleges and univeristies.
*/


var GraduationRates = function(session) {
    /*
        Create a new instance of the GraduationRates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/GraduationRates"
    GraduationRates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GraduationRatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GraduationRatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GraduationRates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GraduationRatesInputSet = function() {
    GraduationRatesInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GraduationRates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GraduationRatesResultSet = function(resultStream) {
    GraduationRatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GraduationRates, choreography.Choreography);
util.inherits(GraduationRatesInputSet, choreography.InputSet);
util.inherits(GraduationRatesResultSet, choreography.ResultSet);
exports.GraduationRates = GraduationRates;


/*
    LookupMajors
    Allows you to search for majors by id or keyword.
*/


var LookupMajors = function(session) {
    /*
        Create a new instance of the LookupMajors Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/LookupMajors"
    LookupMajors.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupMajorsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupMajorsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupMajors
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupMajorsInputSet = function() {
    LookupMajorsInputSet.super_.call(this);
        /*
        Set the value of the Keyword input for this Choreo. ((conditional, string) A keyword search term to lookup majors (i.e. Agriculture).)
        */
        this.set_Keyword = function(value) {
            this.setInput("Keyword", value);
        }

        /*
        Set the value of the MajorID input for this Choreo. ((conditional, decimal) The unique id associated with a major to return (i.e. 01.0000). Note that these ids are also returned in the output of the DegreesConferred Choreo.)
        */
        this.set_MajorID = function(value) {
            this.setInput("MajorID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LookupMajors Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupMajorsResultSet = function(resultStream) {
    LookupMajorsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The results from the search in XML or JSON format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LookupMajors, choreography.Choreography);
util.inherits(LookupMajorsInputSet, choreography.InputSet);
util.inherits(LookupMajorsResultSet, choreography.ResultSet);
exports.LookupMajors = LookupMajors;


/*
    LookupSchool
    Allows you to search the U.S. Department of Education college and univeristy listings.
*/


var LookupSchool = function(session) {
    /*
        Create a new instance of the LookupSchool Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/LookupSchool"
    LookupSchool.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LookupSchoolResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LookupSchoolInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LookupSchool
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LookupSchoolInputSet = function() {
    LookupSchoolInputSet.super_.call(this);
        /*
        Set the value of the Keyword input for this Choreo. ((required, string) Used to perform a full text search on the data set. For example, you can search for an institution's name or an institution's ID.)
        */
        this.set_Keyword = function(value) {
            this.setInput("Keyword", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LookupSchool Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LookupSchoolResultSet = function(resultStream) {
    LookupSchoolResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LookupSchool, choreography.Choreography);
util.inherits(LookupSchoolInputSet, choreography.InputSet);
util.inherits(LookupSchoolResultSet, choreography.ResultSet);
exports.LookupSchool = LookupSchool;


/*
    StudentCharges
    Returns tuition information for colleges and universities.
*/


var StudentCharges = function(session) {
    /*
        Create a new instance of the StudentCharges Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DeptOfEducation/CollegesAndUniversities/StudentCharges"
    StudentCharges.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StudentChargesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StudentChargesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StudentCharges
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StudentChargesInputSet = function() {
    StudentChargesInputSet.super_.call(this);
        /*
        Set the value of the InstitutionID input for this Choreo. ((optional, string) Specify an institutionID to return data on a specific institution. These ids can be retrieved from the LookupSchool Choreo.)
        */
        this.set_InstitutionID = function(value) {
            this.setInput("InstitutionID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) Limits the number of rows returned. Defaults to 20.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: xml (the default) and json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StudentCharges Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StudentChargesResultSet = function(resultStream) {
    StudentChargesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Data.ed.gov.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StudentCharges, choreography.Choreography);
util.inherits(StudentChargesInputSet, choreography.InputSet);
util.inherits(StudentChargesResultSet, choreography.ResultSet);
exports.StudentCharges = StudentCharges;

