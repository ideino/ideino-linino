
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AppliedLearning
    Returns results for projects within the Applied Learning category.
*/


var AppliedLearning = function(session) {
    /*
        Create a new instance of the AppliedLearning Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/AppliedLearning"
    AppliedLearning.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AppliedLearningResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AppliedLearningInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AppliedLearning
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AppliedLearningInputSet = function() {
    AppliedLearningInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowCounts input for this Choreo. ((optional, boolean) Set to 1 to return facet counts in the response)
        */
        this.set_ShowCounts = function(value) {
            this.setInput("ShowCounts", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of Applied Learning. When left empty, all Applied Learning projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AppliedLearning Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AppliedLearningResultSet = function(resultStream) {
    AppliedLearningResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AppliedLearning, choreography.Choreography);
util.inherits(AppliedLearningInputSet, choreography.InputSet);
util.inherits(AppliedLearningResultSet, choreography.ResultSet);
exports.AppliedLearning = AppliedLearning;


/*
    DonateToProject
    Makes a donation to a specified DonorsChoose.org project.
*/


var DonateToProject = function(session) {
    /*
        Create a new instance of the DonateToProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/DonateToProject"
    DonateToProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DonateToProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DonateToProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DonateToProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DonateToProjectInputSet = function() {
    DonateToProjectInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The APIKey provided by DonorsChoose.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIPassword input for this Choreo. ((required, string) Your DonorsChoose.org API password. This is only required when performing transactions.)
        */
        this.set_APIPassword = function(value) {
            this.setInput("APIPassword", value);
        }

        /*
        Set the value of the Address1 input for this Choreo. ((optional, string) Line one of the donor's address.)
        */
        this.set_Address1 = function(value) {
            this.setInput("Address1", value);
        }

        /*
        Set the value of the Address2 input for this Choreo. ((optional, string) Line two of the donor's address.)
        */
        this.set_Address2 = function(value) {
            this.setInput("Address2", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The donation amount. Must be a whole number.)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the Callback input for this Choreo. ((optional, string) To wrap the response in a callback function, include the name in this input.)
        */
        this.set_Callback = function(value) {
            this.setInput("Callback", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The donor's city.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address of the person who is making the donation.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) The first name of the donor.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) The last name of the donor.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the ProposalId input for this Choreo. ((required, integer) The ID of the project that will receive the donation.)
        */
        this.set_ProposalId = function(value) {
            this.setInput("ProposalId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Salutation input for this Choreo. ((optional, string) Hwo the donor wants to be acknowledged on donorschoose.org.)
        */
        this.set_Salutation = function(value) {
            this.setInput("Salutation", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The donor's state.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, string) The donor's five-digit zip code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DonateToProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DonateToProjectResultSet = function(resultStream) {
    DonateToProjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DonateToProject, choreography.Choreography);
util.inherits(DonateToProjectInputSet, choreography.InputSet);
util.inherits(DonateToProjectResultSet, choreography.ResultSet);
exports.DonateToProject = DonateToProject;


/*
    HealthAndSports
    Returns results for projects within the Health and Sports category.
*/


var HealthAndSports = function(session) {
    /*
        Create a new instance of the HealthAndSports Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/HealthAndSports"
    HealthAndSports.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HealthAndSportsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HealthAndSportsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HealthAndSports
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HealthAndSportsInputSet = function() {
    HealthAndSportsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowCounts input for this Choreo. ((optional, boolean) Set to 1 to return facet counts in the response)
        */
        this.set_ShowCounts = function(value) {
            this.setInput("ShowCounts", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of Health & Sports. When left empty, all Health & Sports projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HealthAndSports Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HealthAndSportsResultSet = function(resultStream) {
    HealthAndSportsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HealthAndSports, choreography.Choreography);
util.inherits(HealthAndSportsInputSet, choreography.InputSet);
util.inherits(HealthAndSportsResultSet, choreography.ResultSet);
exports.HealthAndSports = HealthAndSports;


/*
    HistoryAndCivics
    Returns results for projects within the History and Civics category.
*/


var HistoryAndCivics = function(session) {
    /*
        Create a new instance of the HistoryAndCivics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/HistoryAndCivics"
    HistoryAndCivics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HistoryAndCivicsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HistoryAndCivicsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HistoryAndCivics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HistoryAndCivicsInputSet = function() {
    HistoryAndCivicsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowCounts input for this Choreo. ((optional, boolean) Set to 1 to return facet counts in the response)
        */
        this.set_ShowCounts = function(value) {
            this.setInput("ShowCounts", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of History & Civics. When left empty, all History & Civics projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HistoryAndCivics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HistoryAndCivicsResultSet = function(resultStream) {
    HistoryAndCivicsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HistoryAndCivics, choreography.Choreography);
util.inherits(HistoryAndCivicsInputSet, choreography.InputSet);
util.inherits(HistoryAndCivicsResultSet, choreography.ResultSet);
exports.HistoryAndCivics = HistoryAndCivics;


/*
    LiteracyAndLanguage
    Returns results for projects within the Literacy and Language category.
*/


var LiteracyAndLanguage = function(session) {
    /*
        Create a new instance of the LiteracyAndLanguage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/LiteracyAndLanguage"
    LiteracyAndLanguage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LiteracyAndLanguageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LiteracyAndLanguageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LiteracyAndLanguage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LiteracyAndLanguageInputSet = function() {
    LiteracyAndLanguageInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowCounts input for this Choreo. ((optional, boolean) Set to 1 to return facet counts in the response)
        */
        this.set_ShowCounts = function(value) {
            this.setInput("ShowCounts", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of Literacy & Language. When left empty, all Literacy & Language projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LiteracyAndLanguage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LiteracyAndLanguageResultSet = function(resultStream) {
    LiteracyAndLanguageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LiteracyAndLanguage, choreography.Choreography);
util.inherits(LiteracyAndLanguageInputSet, choreography.InputSet);
util.inherits(LiteracyAndLanguageResultSet, choreography.ResultSet);
exports.LiteracyAndLanguage = LiteracyAndLanguage;


/*
    MathAndScience
    Returns results for projects within the Math and Science category.
*/


var MathAndScience = function(session) {
    /*
        Create a new instance of the MathAndScience Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/MathAndScience"
    MathAndScience.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MathAndScienceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MathAndScienceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MathAndScience
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MathAndScienceInputSet = function() {
    MathAndScienceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of Math & Science. When left empty, all Math & Science projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MathAndScience Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MathAndScienceResultSet = function(resultStream) {
    MathAndScienceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MathAndScience, choreography.Choreography);
util.inherits(MathAndScienceInputSet, choreography.InputSet);
util.inherits(MathAndScienceResultSet, choreography.ResultSet);
exports.MathAndScience = MathAndScience;


/*
    MusicAndTheArts
    Returns results for projects within the Music and The Arts category.
*/


var MusicAndTheArts = function(session) {
    /*
        Create a new instance of the MusicAndTheArts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/MusicAndTheArts"
    MusicAndTheArts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MusicAndTheArtsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MusicAndTheArtsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MusicAndTheArts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MusicAndTheArtsInputSet = function() {
    MusicAndTheArtsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowCounts input for this Choreo. ((optional, boolean) Set to 1 to return facet counts in the response)
        */
        this.set_ShowCounts = function(value) {
            this.setInput("ShowCounts", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((optional, string) Enter a sub-category of Music & The Arts. When left empty, all Art & Music projects are returned.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MusicAndTheArts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MusicAndTheArtsResultSet = function(resultStream) {
    MusicAndTheArtsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MusicAndTheArts, choreography.Choreography);
util.inherits(MusicAndTheArtsInputSet, choreography.InputSet);
util.inherits(MusicAndTheArtsResultSet, choreography.ResultSet);
exports.MusicAndTheArts = MusicAndTheArts;


/*
    SearchProjectsByKeyword
    Allows you to projects subjects by keyword.
*/


var SearchProjectsByKeyword = function(session) {
    /*
        Create a new instance of the SearchProjectsByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/SearchProjectsByKeyword"
    SearchProjectsByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchProjectsByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchProjectsByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchProjectsByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchProjectsByKeywordInputSet = function() {
    SearchProjectsByKeywordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Keyword input for this Choreo. ((required, string) Allows you to search for subjects using keyword search)
        */
        this.set_Keyword = function(value) {
            this.setInput("Keyword", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchProjectsByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchProjectsByKeywordResultSet = function(resultStream) {
    SearchProjectsByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchProjectsByKeyword, choreography.Choreography);
util.inherits(SearchProjectsByKeywordInputSet, choreography.InputSet);
util.inherits(SearchProjectsByKeywordResultSet, choreography.ResultSet);
exports.SearchProjectsByKeyword = SearchProjectsByKeyword;


/*
    SpecialNeeds
    Returns results for projects within the Special Needs category.
*/


var SpecialNeeds = function(session) {
    /*
        Create a new instance of the SpecialNeeds Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/DonorsChoose/SpecialNeeds"
    SpecialNeeds.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SpecialNeedsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SpecialNeedsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SpecialNeeds
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SpecialNeedsInputSet = function() {
    SpecialNeedsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey provided by DonorsChoose.org. Defaults to the test  APIKey 'DONORSCHOOSE'.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) The number of the first row to return in the result. For example, if index=10, the results could show rows 10-59.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Max input for this Choreo. ((optional, integer) The max number of projects to return. Can return up to 50 rows at a time. Defaults to 10 when left empty.)
        */
        this.set_Max = function(value) {
            this.setInput("Max", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ShowSynopsis input for this Choreo. ((optional, boolean) Set to 1 to show the synopsis for each project listing)
        */
        this.set_ShowSynopsis = function(value) {
            this.setInput("ShowSynopsis", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SpecialNeeds Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SpecialNeedsResultSet = function(resultStream) {
    SpecialNeedsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from DonorsChoose.org)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SpecialNeeds, choreography.Choreography);
util.inherits(SpecialNeedsInputSet, choreography.InputSet);
util.inherits(SpecialNeedsResultSet, choreography.ResultSet);
exports.SpecialNeeds = SpecialNeeds;

