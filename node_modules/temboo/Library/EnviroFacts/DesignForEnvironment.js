
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AdvancedSearch
    Performs a detailed search of the EPA Design for the Environment database.
*/


var AdvancedSearch = function(session) {
    /*
        Create a new instance of the AdvancedSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/DesignForEnvironment/AdvancedSearch"
    AdvancedSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AdvancedSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AdvancedSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AdvancedSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AdvancedSearchInputSet = function() {
    AdvancedSearchInputSet.super_.call(this);
        /*
        Set the value of the Operator input for this Choreo. ((optional, string) Default output is "=" when SearchType=sector_id or product_id, and "CONTAINING" when SearchType=partner, product, or sector. Other possible values are: "<", " >", "!=", and "BEGINNING".)
        */
        this.set_Operator = function(value) {
            this.setInput("Operator", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((conditional, string) Response can be returned in JSON or XML. Defaults to XML.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

        /*
        Set the value of the SearchType input for this Choreo. ((conditional, string) Indicate either "sector", "sector_id", "partner", "product", or "product_id." Used together with SearchValue and the optional Operator input to formulate a specific search of the DfE database.)
        */
        this.set_SearchType = function(value) {
            this.setInput("SearchType", value);
        }

        /*
        Set the value of the SearchValue input for this Choreo. ((conditional, integer) Indicate the product, code, or sector to search for. Used together with SearchType and the optional Operator input to create a customized search.)
        */
        this.set_SearchValue = function(value) {
            this.setInput("SearchValue", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AdvancedSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AdvancedSearchResultSet = function(resultStream) {
    AdvancedSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Count" output from this Choreo execution. (The total number of records returned for any given search.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AdvancedSearch, choreography.Choreography);
util.inherits(AdvancedSearchInputSet, choreography.InputSet);
util.inherits(AdvancedSearchResultSet, choreography.ResultSet);
exports.AdvancedSearch = AdvancedSearch;


/*
    SearchByProduct
    Searches for products in the EPA Design for the Environment database.
*/


var SearchByProduct = function(session) {
    /*
        Create a new instance of the SearchByProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/DesignForEnvironment/SearchByProduct"
    SearchByProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByProductInputSet = function() {
    SearchByProductInputSet.super_.call(this);
        /*
        Set the value of the CompanyKeyword input for this Choreo. ((conditional, string) A keyword in the name of the company to search for. If a specific ProductName or ProductID is specified, this input is ignored.)
        */
        this.set_CompanyKeyword = function(value) {
            this.setInput("CompanyKeyword", value);
        }

        /*
        Set the value of the Operator input for this Choreo. ((optional, string) Default output is "CONTAINING" and does not require an operator, but users can enter "<", " >", "!=", "BEGINNING", "=" for more customized searches.)
        */
        this.set_Operator = function(value) {
            this.setInput("Operator", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((conditional, integer) A number representing the unique identifier for a product in the EnviroFacts database.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

        /*
        Set the value of the ProductKeyword input for this Choreo. ((conditional, string) A keyword in the name of the product to search for. If a specific ProductID is specified, this input is ignored.)
        */
        this.set_ProductKeyword = function(value) {
            this.setInput("ProductKeyword", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((conditional, string) Response can be returned in JSON or XML. Defaults to XML.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByProductResultSet = function(resultStream) {
    SearchByProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Count" output from this Choreo execution. (The total number of records returned for any given search.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
}

util.inherits(SearchByProduct, choreography.Choreography);
util.inherits(SearchByProductInputSet, choreography.InputSet);
util.inherits(SearchByProductResultSet, choreography.ResultSet);
exports.SearchByProduct = SearchByProduct;


/*
    SearchBySector
    Looks up products by sector in the EPA Design for the Environment database
*/


var SearchBySector = function(session) {
    /*
        Create a new instance of the SearchBySector Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/DesignForEnvironment/SearchBySector"
    SearchBySector.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchBySectorResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchBySectorInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchBySector
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchBySectorInputSet = function() {
    SearchBySectorInputSet.super_.call(this);
        /*
        Set the value of the Category input for this Choreo. ((conditional, string) Specify either Industrial or Consumer to retrieve a list of products that fall into either category. If a specific SectorKeyword or SectorID is given, this input is ignored.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Operator input for this Choreo. ((optional, string) Default output is "CONTAINING" and does not require an operator, but users can enter "<", " >", "!=", "BEGINNING", "=" for more customized searches.)
        */
        this.set_Operator = function(value) {
            this.setInput("Operator", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((conditional, string) Response can be returned in JSON or XML. Defaults to XML.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RowEnd input for this Choreo. ((optional, integer) Number 1 or greater indicates the ending row number of the results displayed. Default is 4999 when RowStart is 0. Up to 5000 entries are returned in the output.)
        */
        this.set_RowEnd = function(value) {
            this.setInput("RowEnd", value);
        }

        /*
        Set the value of the RowStart input for this Choreo. ((optional, integer) Indicates the starting row number of the results displayed. Default is 0.)
        */
        this.set_RowStart = function(value) {
            this.setInput("RowStart", value);
        }

        /*
        Set the value of the SectorID input for this Choreo. ((conditional, integer) A number representing the unique identifier for the product's sector in the EnviroFacts database.)
        */
        this.set_SectorID = function(value) {
            this.setInput("SectorID", value);
        }

        /*
        Set the value of the SectorKeyword input for this Choreo. ((conditional, string) A keyword in the name of the sector to search for. If a specific SectorID is given, this input is ignored.)
        */
        this.set_SectorKeyword = function(value) {
            this.setInput("SectorKeyword", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchBySector Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchBySectorResultSet = function(resultStream) {
    SearchBySectorResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Count" output from this Choreo execution. (The total number of records returned for any given search.)
        */
        this.get_Count = function() {
            return this.getResult("Count");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchBySector, choreography.Choreography);
util.inherits(SearchBySectorInputSet, choreography.InputSet);
util.inherits(SearchBySectorResultSet, choreography.ResultSet);
exports.SearchBySector = SearchBySector;

