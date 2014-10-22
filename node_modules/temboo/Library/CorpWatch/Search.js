
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompoundSearch
    Returns a list of companies according to several search parameters such as industry, location, date range, company name, etc.
*/


var CompoundSearch = function(session) {
    /*
        Create a new instance of the CompoundSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/CorpWatch/Search/CompoundSearch"
    CompoundSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompoundSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompoundSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompoundSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompoundSearchInputSet = function() {
    CompoundSearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The APIKey from CorpWatch if you have one.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Address input for this Choreo. ((conditional, string) Specific fragment of an address to be searched, such as "empire" or "Main Street.")
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the CountryCode input for this Choreo. ((optional, string) Two-letter country code (e.g. VI for Virgin Islands).)
        */
        this.set_CountryCode = function(value) {
            this.setInput("CountryCode", value);
        }

        /*
        Set the value of the Index input for this Choreo. ((optional, integer) Set the index number of the first result to be returned. The index of the first result is 0.)
        */
        this.set_Index = function(value) {
            this.setInput("Index", value);
        }

        /*
        Set the value of the IndustryCode input for this Choreo. ((conditional, integer) Standard Industrial Classification (SIC) code.)
        */
        this.set_IndustryCode = function(value) {
            this.setInput("IndustryCode", value);
        }

        /*
        Set the value of the IndustrySector input for this Choreo. ((conditional, integer) Standard Industrial Classification (SIC) sector code.)
        */
        this.set_IndustrySector = function(value) {
            this.setInput("IndustrySector", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of results to be returned. Defaults to 100. Maximum is 5000.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Match input for this Choreo. ((optional, integer) By default search terms match against complete words. Use 1 to return cases where the search string matches anywhere in the Name or Address field. Performance is significantly affected when enabled.)
        */
        this.set_Match = function(value) {
            this.setInput("Match", value);
        }

        /*
        Set the value of the MaxYear input for this Choreo. ((optional, integer) Indicate desired year of the most recent appearance in SEC filing data (e.g. indicating 2007 will search for companies that ceased filing in 2007).)
        */
        this.set_MaxYear = function(value) {
            this.setInput("MaxYear", value);
        }

        /*
        Set the value of the MinYear input for this Choreo. ((optional, integer) Indicate desired year of the most recent appearance in SEC filing data (e.g. indicating 2007 will search for companies that ceased filing in 2007).)
        */
        this.set_MinYear = function(value) {
            this.setInput("MinYear", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) Company name to search. Words in the search query must match to full words in the name. See documentation for more details.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NumChildren input for this Choreo. ((optional, integer) Limit results to those with a specified number of listed subsidiaries, or "children." (Only immediate relationships are counted.)
        */
        this.set_NumChildren = function(value) {
            this.setInput("NumChildren", value);
        }

        /*
        Set the value of the NumParents input for this Choreo. ((optional, integer) Limit results to those with a specified number of listed parent companies (only immediate relationships are counted).)
        */
        this.set_NumParents = function(value) {
            this.setInput("NumParents", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Specify json or xml for the type of response to be returned. Defaults to xml.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the SourceType input for this Choreo. ((optional, string) Indicate "filers" to restrict results to those of companies that appeared as a filer on SEC documents, or "relationships" for companies that only appear as subsidiaries on filings.)
        */
        this.set_SourceType = function(value) {
            this.setInput("SourceType", value);
        }

        /*
        Set the value of the SubdivisionCode input for this Choreo. ((optional, string) Two-letter abbreviation for the subdivision of the area to be searched (e.g. "OR" for Oregon when CountryCode is set to "US").)
        */
        this.set_SubdivisionCode = function(value) {
            this.setInput("SubdivisionCode", value);
        }

        /*
        Set the value of the TopParent input for this Choreo. ((optional, integer) Limit results by he CWID of the highest-level owning parent of a family of corprorations (or Top Parent). Most company records contain a field for top_parent_id.)
        */
        this.set_TopParent = function(value) {
            this.setInput("TopParent", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) If a year is specified, only records for that year will be returned and the data in the company objects returned will be set appropriately for the request year. Defaults to most recent.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompoundSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompoundSearchResultSet = function(resultStream) {
    CompoundSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from CorpWatch.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompoundSearch, choreography.Choreography);
util.inherits(CompoundSearchInputSet, choreography.InputSet);
util.inherits(CompoundSearchResultSet, choreography.ResultSet);
exports.CompoundSearch = CompoundSearch;

