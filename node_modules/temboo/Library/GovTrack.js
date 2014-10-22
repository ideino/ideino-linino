
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Bill
    Retrieves bills and resolutions in the U.S. Congress since 1973 (the 93rd Congress).
*/


var Bill = function(session) {
    /*
        Create a new instance of the Bill Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/Bill"
    Bill.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BillResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BillInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Bill
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BillInputSet = function() {
    BillInputSet.super_.call(this);
        /*
        Set the value of the BillID input for this Choreo. ((optional, integer) The ID number of the bill to retrieve. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_BillID = function(value) {
            this.setInput("BillID", value);
        }

        /*
        Set the value of the BillType input for this Choreo. ((optional, string) The bill's type (e.g. house_resolution, senate_bill, house_bill, etc). Filter operators allowed. Sortable.)
        */
        this.set_BillType = function(value) {
            this.setInput("BillType", value);
        }

        /*
        Set the value of the CoSponsors input for this Choreo. ((optional, string) The bill's cosponsors. When using this filter, provide the id of the cosponsor which is returned when requesting a single bill object. Filter operators allowed. Sortable.)
        */
        this.set_CoSponsors = function(value) {
            this.setInput("CoSponsors", value);
        }

        /*
        Set the value of the Committees input for this Choreo. ((optional, string) Committees to which the bill has been referred. When using this filter, provide the id of the committee which is returned when requesting a single bill object. Filter operators allowed. Sortable.)
        */
        this.set_Committees = function(value) {
            this.setInput("Committees", value);
        }

        /*
        Set the value of the Congress input for this Choreo. ((optional, string) The number of the congress in which the bill was introduced. The current congress is 113. Filter operators allowed. Sortable.)
        */
        this.set_Congress = function(value) {
            this.setInput("Congress", value);
        }

        /*
        Set the value of the CurrentStatusDate input for this Choreo. ((optional, string) The date of the last major action on the bill corresponding to the CurrentStatus (in YYYY-MM-DD format). Filter operators allowed. Sortable.)
        */
        this.set_CurrentStatusDate = function(value) {
            this.setInput("CurrentStatusDate", value);
        }

        /*
        Set the value of the CurrentStatus input for this Choreo. ((optional, string) The current status of the bill (e.g. passed_bill, prov_kill_veto, introduced, etc). Filter operators allowed. Sortable.)
        */
        this.set_CurrentStatus = function(value) {
            this.setInput("CurrentStatus", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the IntroducedDate input for this Choreo. ((optional, string) The date the bill was introduced (in YYYY-MM-DD format). Filter operators allowed. Sortable.)
        */
        this.set_IntroducedDate = function(value) {
            this.setInput("IntroducedDate", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, string) The bill's number. This is different from the BillID. Filter operators allowed. Sortable.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) Filters according to a full-text search on the object.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results using fieldname (ascending) or -fieldname (descending) where "fieldname" is one of the variables that is listed as 'Sortable' in the description. Ex: '-congress')
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the Sponsor input for this Choreo. ((optional, string) The ID of the sponsor of the bill. Filter operators allowed. Sortable.)
        */
        this.set_Sponsor = function(value) {
            this.setInput("Sponsor", value);
        }

        /*
        Set the value of the Terms input for this Choreo. ((optional, string) Subject areas associated with the bill. When using this filter, provide the id of the term which is returned when requesting a single bill object. Filter operators allowed. Sortable.)
        */
        this.set_Terms = function(value) {
            this.setInput("Terms", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Bill Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BillResultSet = function(resultStream) {
    BillResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The resopnse from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Bill, choreography.Choreography);
util.inherits(BillInputSet, choreography.InputSet);
util.inherits(BillResultSet, choreography.ResultSet);
exports.Bill = Bill;


/*
    Committee
    Returns committees and subcommittees in the United States Congress, including historical committees.
*/


var Committee = function(session) {
    /*
        Create a new instance of the Committee Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/Committee"
    Committee.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Committee
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeInputSet = function() {
    CommitteeInputSet.super_.call(this);
        /*
        Set the value of the CommitteeID input for this Choreo. ((optional, integer) The id of the committee resource. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_CommitteeID = function(value) {
            this.setInput("CommitteeID", value);
        }

        /*
        Set the value of the Committee input for this Choreo. ((optional, string) Indicates if the object is a committee or a subcommittee. To filter for committees, you can pass "null". For subcommittees, pass the ID of the parent. Filter operators allowed. Sortable.)
        */
        this.set_Committee = function(value) {
            this.setInput("Committee", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Obsolete input for this Choreo. ((optional, string) Whether or not the committee still exists. Set to "true" to return committees that are obsolete. Filter operators allowed. Sortable.)
        */
        this.set_Obsolete = function(value) {
            this.setInput("Obsolete", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results using fieldname (ascending) or -fieldname (descending) where "fieldname" is one of the variables that is listed as 'Sortable' in the description. Ex: '-lastname')
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Committee Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeResultSet = function(resultStream) {
    CommitteeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Committee, choreography.Choreography);
util.inherits(CommitteeInputSet, choreography.InputSet);
util.inherits(CommitteeResultSet, choreography.ResultSet);
exports.Committee = Committee;


/*
    CommitteeMember
    Returns records indicating the current membership of a Member of Congress on a committee or subcommittee.
*/


var CommitteeMember = function(session) {
    /*
        Create a new instance of the CommitteeMember Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/CommitteeMember"
    CommitteeMember.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CommitteeMemberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CommitteeMemberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CommitteeMember
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CommitteeMemberInputSet = function() {
    CommitteeMemberInputSet.super_.call(this);
        /*
        Set the value of the CommitteeMemberID input for this Choreo. ((optional, integer) The ID of the committee member resource. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_CommitteeMemberID = function(value) {
            this.setInput("CommitteeMemberID", value);
        }

        /*
        Set the value of the Committee input for this Choreo. ((optional, string) The committee or subcommittee being served on. To filter by this field, you can pass the ID of the committee. Filter operators allowed. Sortable.)
        */
        this.set_Committee = function(value) {
            this.setInput("Committee", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Person input for this Choreo. ((optional, string) The ID of the Member of Congress serving on a committee. Filter operators allowed. Sortable.)
        */
        this.set_Person = function(value) {
            this.setInput("Person", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results using fieldname (ascending) or -fieldname (descending) where "fieldname" is one of the variables that is listed as 'Sortable' in the description. Ex: '-lastname')
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CommitteeMember Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CommitteeMemberResultSet = function(resultStream) {
    CommitteeMemberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CommitteeMember, choreography.Choreography);
util.inherits(CommitteeMemberInputSet, choreography.InputSet);
util.inherits(CommitteeMemberResultSet, choreography.ResultSet);
exports.CommitteeMember = CommitteeMember;


/*
    Person
    Returns members of Congress and U.S. Presidents since the founding of the nation.
*/


var Person = function(session) {
    /*
        Create a new instance of the Person Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/Person"
    Person.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PersonResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PersonInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Person
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PersonInputSet = function() {
    PersonInputSet.super_.call(this);
        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) The person's gender (male or female). For historical data, gender is sometimes not specified. Filter operators allowed. Sortable.)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) The representative's last name. Filter operators allowed. Sortable.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the PersonID input for this Choreo. ((optional, integer) The ID number for a person to retrieve. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_PersonID = function(value) {
            this.setInput("PersonID", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) Filters according to a full-text search on the object.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results using fieldname (ascending) or -fieldname (descending) where "fieldname" is one of the variables that is listed as 'Sortable' in the description. Ex: '-lastname')
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Person Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PersonResultSet = function(resultStream) {
    PersonResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Person, choreography.Choreography);
util.inherits(PersonInputSet, choreography.InputSet);
util.inherits(PersonResultSet, choreography.ResultSet);
exports.Person = Person;


/*
    Role
    Returns terms held in office by Members of Congress and U.S. Presidents.
*/


var Role = function(session) {
    /*
        Create a new instance of the Role Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/Role"
    Role.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RoleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RoleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Role
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RoleInputSet = function() {
    RoleInputSet.super_.call(this);
        /*
        Set the value of the Current input for this Choreo. ((optional, string) Whether the role is currently held, or it is archival information. Filter operators allowed. Sortable.)
        */
        this.set_Current = function(value) {
            this.setInput("Current", value);
        }

        /*
        Set the value of the District input for this Choreo. ((optional, string) For representatives, the number of their congressional district. 0 for at-large districts, -1 in historical data if the district is not known. Filter operators allowed. Sortable.)
        */
        this.set_District = function(value) {
            this.setInput("District", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) The date the role ended - when the person resigned, died, etc. (in YYYY-MM-DD format). Filter operators allowed. Sortable.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) The political party of the person. If the person changes party, it is usually the most recent party during this role. Filter operators allowed. Sortable.)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the Person input for this Choreo. ((optional, string) The person associated with this role. When using this filter, provide the id of the person which is returned when requesting a single role object.)
        */
        this.set_Person = function(value) {
            this.setInput("Person", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RoleID input for this Choreo. ((optional, string) Specify the ID number of a role object to retrieve the record for only that role. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_RoleID = function(value) {
            this.setInput("RoleID", value);
        }

        /*
        Set the value of the RoleType input for this Choreo. ((optional, string) The type of role (e.g. senator, representative, or president). Filter operators allowed. Sortable.)
        */
        this.set_RoleType = function(value) {
            this.setInput("RoleType", value);
        }

        /*
        Set the value of the SenatorClass input for this Choreo. ((optional, integer) For senators, their election class, which determines which years they are up for election. Acceptable values: class1, class2, class3. Filter operators allowed. Sortable.)
        */
        this.set_SenatorClass = function(value) {
            this.setInput("SenatorClass", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results by date using fieldname (ascending) or -fieldname (descending), where "fieldname" is either startdate or enddate.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The date the role began  - when the person took office (in YYYY-MM-DD format). Filter operators allowed. Sortable.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) For senators and representatives, the two-letter USPS abbreviation for the state or territory they are serving. Filter operators allowed. Sortable.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Role Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RoleResultSet = function(resultStream) {
    RoleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Role, choreography.Choreography);
util.inherits(RoleInputSet, choreography.InputSet);
util.inherits(RoleResultSet, choreography.ResultSet);
exports.Role = Role;


/*
    Vote
    Returns roll call votes in the U.S. Congress since 1789.
*/


var Vote = function(session) {
    /*
        Create a new instance of the Vote Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/Vote"
    Vote.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VoteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VoteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Vote
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VoteInputSet = function() {
    VoteInputSet.super_.call(this);
        /*
        Set the value of the Chamber input for this Choreo. ((optional, string) The chamber in which the vote was held. Valid values are: house or senate. Filter operators allowed but only when filtering by Congress as well. Sortable.)
        */
        this.set_Chamber = function(value) {
            this.setInput("Chamber", value);
        }

        /*
        Set the value of the Congress input for this Choreo. ((optional, string) The number of the congress in which the vote took place. The current congress is 113. Filter operators allowed. Sortable.)
        */
        this.set_Congress = function(value) {
            this.setInput("Congress", value);
        }

        /*
        Set the value of the Created input for this Choreo. ((optional, string) The date (and in recent history also the time) on which the vote was held. Filter operators allowed. Sortable.)
        */
        this.set_Created = function(value) {
            this.setInput("Created", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, string) The number of the vote, unique to a Congress and session pair. Filter operators allowed. Sortable.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the RelatedAmendment input for this Choreo. ((optional, string) The ID of a related amendment. Filter operators allowed. Sortable.)
        */
        this.set_RelatedAmendment = function(value) {
            this.setInput("RelatedAmendment", value);
        }

        /*
        Set the value of the RelatedBill input for this Choreo. ((optional, string) A bill related to this vote. Filter operators allowed. Sortable.)
        */
        this.set_RelatedBill = function(value) {
            this.setInput("RelatedBill", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Session input for this Choreo. ((optional, string) The session of congress. Filter operators allowed. Sortable.)
        */
        this.set_Session = function(value) {
            this.setInput("Session", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results using created (ascending) or -created (descending) for the dates that each vote was held.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the VoteID input for this Choreo. ((optional, integer) The ID of a vote object to retrieve. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_VoteID = function(value) {
            this.setInput("VoteID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Vote Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VoteResultSet = function(resultStream) {
    VoteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Vote, choreography.Choreography);
util.inherits(VoteInputSet, choreography.InputSet);
util.inherits(VoteResultSet, choreography.ResultSet);
exports.Vote = Vote;


/*
    VoteAndVoter
    Retrieves how people voted on roll call votes in the U.S. Congress since 1789. 
*/


var VoteAndVoter = function(session) {
    /*
        Create a new instance of the VoteAndVoter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/GovTrack/VoteAndVoter"
    VoteAndVoter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new VoteAndVoterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new VoteAndVoterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the VoteAndVoter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var VoteAndVoterInputSet = function() {
    VoteAndVoterInputSet.super_.call(this);
        /*
        Set the value of the Created input for this Choreo. ((optional, string) The date (and in recent history also the time) on which the vote was held (in YYYY-MM-DD format). Filter operators allowed. Sortable.)
        */
        this.set_Created = function(value) {
            this.setInput("Created", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) A comma separated list of fields to return in the response. Use double-underscores to span relationships (e.g. person__firstname).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Results are paged 100 per call by default. Set the limit input to a high value to get all of the results at once.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ObjectID input for this Choreo. ((optional, integer) The ID of the resource to retrieve. When using this input, all other filter parameters are ignored, and a single record is returned.)
        */
        this.set_ObjectID = function(value) {
            this.setInput("ObjectID", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Offset the results by the number given, useful for paging through results.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

        /*
        Set the value of the Option input for this Choreo. ((optional, string) The way a particular person voted. The value corresponds to the key of an option returned on the Vote Choreo. Filter operators allowed. Sortable.)
        */
        this.set_Option = function(value) {
            this.setInput("Option", value);
        }

        /*
        Set the value of the Person input for this Choreo. ((optional, string) The person making this vote. This is an ID number. Filter operators allowed. Sortable.)
        */
        this.set_Person = function(value) {
            this.setInput("Person", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) You can order the results by date using fieldname (ascending) or -fieldname (descending), where "fieldname" is either startdate or enddate.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the Vote input for this Choreo. ((optional, string) The ID number of the vote that this was part of. This is in the form of an ID number. Filter operators allowed. Sortable.)
        */
        this.set_Vote = function(value) {
            this.setInput("Vote", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the VoteAndVoter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var VoteAndVoterResultSet = function(resultStream) {
    VoteAndVoterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The resopnse from GovTrack.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(VoteAndVoter, choreography.Choreography);
util.inherits(VoteAndVoterInputSet, choreography.InputSet);
util.inherits(VoteAndVoterResultSet, choreography.ResultSet);
exports.VoteAndVoter = VoteAndVoter;

