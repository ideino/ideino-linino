
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetByCoordinates
    Returns all legislators that currently represent an area (district or state) that contains a given Geo point. 
*/


var GetByCoordinates = function(session) {
    /*
        Create a new instance of the GetByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Legislator/GetByCoordinates"
    GetByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetByCoordinatesInputSet = function() {
    GetByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate of the area that a legislator represents.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate of the area that a legislator represents.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetByCoordinatesResultSet = function(resultStream) {
    GetByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetByCoordinates, choreography.Choreography);
util.inherits(GetByCoordinatesInputSet, choreography.InputSet);
util.inherits(GetByCoordinatesResultSet, choreography.ResultSet);
exports.GetByCoordinates = GetByCoordinates;


/*
    GetByZip
    Returns all legislators that currently represent some portion of a given zipcode.
*/


var GetByZip = function(session) {
    /*
        Create a new instance of the GetByZip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Legislator/GetByZip"
    GetByZip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetByZipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetByZipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetByZip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetByZipInputSet = function() {
    GetByZipInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, string) A valid zip code used to return all legislators that currently represent some portion of a zip code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetByZip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetByZipResultSet = function(resultStream) {
    GetByZipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetByZip, choreography.Choreography);
util.inherits(GetByZipInputSet, choreography.InputSet);
util.inherits(GetByZipResultSet, choreography.ResultSet);
exports.GetByZip = GetByZip;


/*
    GetLegislator
    Allows you to search for information on an individual legislator.
*/


var GetLegislator = function(session) {
    /*
        Create a new instance of the GetLegislator Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Legislator/GetLegislator"
    GetLegislator.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLegislatorResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLegislatorInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLegislator
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLegislatorInputSet = function() {
    GetLegislatorInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AllLegislators input for this Choreo. ((optional, boolean) A boolean flag indicating to search for all legislators even when they are no longer in office.)
        */
        this.set_AllLegislators = function(value) {
            this.setInput("AllLegislators", value);
        }

        /*
        Set the value of the BioguideID input for this Choreo. ((optional, string) The bioguide_id of the legislator to return.)
        */
        this.set_BioguideID = function(value) {
            this.setInput("BioguideID", value);
        }

        /*
        Set the value of the CRPID input for this Choreo. ((optional, string) The crp_id associated with a legislator to return.)
        */
        this.set_CRPID = function(value) {
            this.setInput("CRPID", value);
        }

        /*
        Set the value of the District input for this Choreo. ((optional, integer) Narrows the search result by district number.)
        */
        this.set_District = function(value) {
            this.setInput("District", value);
        }

        /*
        Set the value of the FECID input for this Choreo. ((optional, string) The fec_id associated with the legislator to return.)
        */
        this.set_FECID = function(value) {
            this.setInput("FECID", value);
        }

        /*
        Set the value of the FacebookID input for this Choreo. ((optional, string) The facebook id of a legislator to return.)
        */
        this.set_FacebookID = function(value) {
            this.setInput("FacebookID", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) The first name of a legislator to return.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) Narrows the search result by gender.)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the GovTrackID input for this Choreo. ((optional, string) The govetrack_id associated with a legistlator to return.)
        */
        this.set_GovTrackID = function(value) {
            this.setInput("GovTrackID", value);
        }

        /*
        Set the value of the InOffice input for this Choreo. ((optional, boolean) Whether or not the individual is in office currently. Valid values are true or false.)
        */
        this.set_InOffice = function(value) {
            this.setInput("InOffice", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((conditional, string) The last name of the legislator to return.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Narrows the search result by party (i.e. "D" or "R").)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) A state abbreviation to narrow the search results.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title associated with the individual to return.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the TwitterID input for this Choreo. ((optional, string) The twitter id of the legislator to return (note, this can be a twitter screen name).)
        */
        this.set_TwitterID = function(value) {
            this.setInput("TwitterID", value);
        }

        /*
        Set the value of the VoteSmartID input for this Choreo. ((optional, integer) The votesmart_id of a legislator to return.)
        */
        this.set_VoteSmartID = function(value) {
            this.setInput("VoteSmartID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLegislator Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLegislatorResultSet = function(resultStream) {
    GetLegislatorResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLegislator, choreography.Choreography);
util.inherits(GetLegislatorInputSet, choreography.InputSet);
util.inherits(GetLegislatorResultSet, choreography.ResultSet);
exports.GetLegislator = GetLegislator;


/*
    GetList
    Returns a list of legislators that meet a specified search criteria.
*/


var GetList = function(session) {
    /*
        Create a new instance of the GetList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Legislator/GetList"
    GetList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListInputSet = function() {
    GetListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AllLegislators input for this Choreo. ((optional, boolean) A boolean flag indicating to search for all legislators even when they are no longer in office.)
        */
        this.set_AllLegislators = function(value) {
            this.setInput("AllLegislators", value);
        }

        /*
        Set the value of the BioguideID input for this Choreo. ((optional, string) The bioguide_id of the legislator to return.)
        */
        this.set_BioguideID = function(value) {
            this.setInput("BioguideID", value);
        }

        /*
        Set the value of the CRPID input for this Choreo. ((optional, string) The crp_id associated with a legislator to return.)
        */
        this.set_CRPID = function(value) {
            this.setInput("CRPID", value);
        }

        /*
        Set the value of the District input for this Choreo. ((optional, integer) Narrows the search result by district number.)
        */
        this.set_District = function(value) {
            this.setInput("District", value);
        }

        /*
        Set the value of the FECID input for this Choreo. ((optional, string) The fec_id associated with the legislator to return.)
        */
        this.set_FECID = function(value) {
            this.setInput("FECID", value);
        }

        /*
        Set the value of the FacebookID input for this Choreo. ((optional, string) The facebook id of a legislator to return.)
        */
        this.set_FacebookID = function(value) {
            this.setInput("FacebookID", value);
        }

        /*
        Set the value of the FirstName input for this Choreo. ((optional, string) The first name of a legislator to return.)
        */
        this.set_FirstName = function(value) {
            this.setInput("FirstName", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) Narrows the search result by gender.)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the GovTrackID input for this Choreo. ((optional, string) The govetrack_id associated with a legistlator to return.)
        */
        this.set_GovTrackID = function(value) {
            this.setInput("GovTrackID", value);
        }

        /*
        Set the value of the InOffice input for this Choreo. ((optional, boolean) Whether or not the individual is in office currently. Valid values are true or false.)
        */
        this.set_InOffice = function(value) {
            this.setInput("InOffice", value);
        }

        /*
        Set the value of the LastName input for this Choreo. ((optional, string) The last name of the legislator to return.)
        */
        this.set_LastName = function(value) {
            this.setInput("LastName", value);
        }

        /*
        Set the value of the Party input for this Choreo. ((optional, string) Narrows the search result by party (i.e. "D" or "R").)
        */
        this.set_Party = function(value) {
            this.setInput("Party", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) A state abbreviation to narrow the search results.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The title associated with the individual to return.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the TwitterID input for this Choreo. ((optional, string) The twitter id of the legislator to return (note, this can be a twitter screen name).)
        */
        this.set_TwitterID = function(value) {
            this.setInput("TwitterID", value);
        }

        /*
        Set the value of the VoteSmartID input for this Choreo. ((optional, integer) The votesmart_id of a legislator to return.)
        */
        this.set_VoteSmartID = function(value) {
            this.setInput("VoteSmartID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListResultSet = function(resultStream) {
    GetListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetList, choreography.Choreography);
util.inherits(GetListInputSet, choreography.InputSet);
util.inherits(GetListResultSet, choreography.ResultSet);
exports.GetList = GetList;


/*
    Search
    Provides a fuzzy-matching text search of the legislators.
*/


var Search = function(session) {
    /*
        Create a new instance of the Search Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SunlightLabs/Congress/Legislator/Search"
    Search.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Search
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchInputSet = function() {
    SearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Sunlight Labs.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AllLegislators input for this Choreo. ((optional, boolean) A boolean flag indicating to search for all legislators even when they are no longer in office.)
        */
        this.set_AllLegislators = function(value) {
            this.setInput("AllLegislators", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) A name to search for.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are: json (the default) and xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Search Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchResultSet = function(resultStream) {
    SearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Sunlight Congress API.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Search, choreography.Choreography);
util.inherits(SearchInputSet, choreography.InputSet);
util.inherits(SearchResultSet, choreography.ResultSet);
exports.Search = Search;

