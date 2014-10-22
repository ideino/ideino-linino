
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompanyChildren
    Returns a list of the subsidiaries, or "children," of a company.
*/


var CompanyChildren = function(session) {
    /*
        Create a new instance of the CompanyChildren Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Relationships/CompanyChildren"
    CompanyChildren.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompanyChildrenResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompanyChildrenInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompanyChildren
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompanyChildrenInputSet = function() {
    CompanyChildrenInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((conditional, integer) If a year is specified, only subsidiaries for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to 2012 (most recent yr).)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompanyChildren Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompanyChildrenResultSet = function(resultStream) {
    CompanyChildrenResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompanyChildren, choreography.Choreography);
util.inherits(CompanyChildrenInputSet, choreography.InputSet);
util.inherits(CompanyChildrenResultSet, choreography.ResultSet);
exports.CompanyChildren = CompanyChildren;


/*
    CompanyParents
    Returns a list of principal owning companies, or "parents," of a company.
*/


var CompanyParents = function(session) {
    /*
        Create a new instance of the CompanyParents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Relationships/CompanyParents"
    CompanyParents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompanyParentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompanyParentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompanyParents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompanyParentsInputSet = function() {
    CompanyParentsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) CoprWatch ID for the company. Format looks like: cw_8484.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only parents for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompanyParents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompanyParentsResultSet = function(resultStream) {
    CompanyParentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompanyParents, choreography.Choreography);
util.inherits(CompanyParentsInputSet, choreography.InputSet);
util.inherits(CompanyParentsResultSet, choreography.ResultSet);
exports.CompanyParents = CompanyParents;


/*
    TopParent
    For a given ID of the highest-level owning parent of a family of corporations, retrieves all of the companies that are "below" it in the hierarchy.
*/


var TopParent = function(session) {
    /*
        Create a new instance of the TopParent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Relationships/TopParent"
    TopParent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopParentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopParentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TopParent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopParentInputSet = function() {
    TopParentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CWID input for this Choreo. ((required, string) The CWID of the highest-level owning parent of a family of corprorations (or Top Parent). Most company records contain a field for top_parent_id.)
        */
        this.set_CWID = function(value) {
            this.setInput("CWID", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only subsidiaries for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TopParent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopParentResultSet = function(resultStream) {
    TopParentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TopParent, choreography.Choreography);
util.inherits(TopParentInputSet, choreography.InputSet);
util.inherits(TopParentResultSet, choreography.ResultSet);
exports.TopParent = TopParent;

