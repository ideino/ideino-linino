
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetList
    Retrieves information about a List in LittleSis according to its ID.
*/


var GetList = function(session) {
    /*
        Create a new instance of the GetList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/List/GetList"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Entities input for this Choreo. ((optional, string) Indicate "entities" to retrieve records of the entities that belong to the list. Otherwise, only a basic record about the list will be returned.)
        */
        this.set_Entities = function(value) {
            this.setInput("Entities", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID of the list record to be returned.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Nnumber of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, integer) Specifies what page of results to show. Used in conjunction with Number parameter. A number of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Page = function(value) {
            this.setInput("Page", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TypeID input for this Choreo. ((optional, integer) When the Entities parameter is activated, you can specify type IDs limiting the entities returned to those having the specified types (as a comma-delimited list).)
        */
        this.set_TypeID = function(value) {
            this.setInput("TypeID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListResultSet = function(resultStream) {
    GetListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
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
    ListSearchByKeyword
    Retrieves the name and description fields of Lists available in LittleSis that match a keyword search.
*/


var ListSearchByKeyword = function(session) {
    /*
        Create a new instance of the ListSearchByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/List/ListSearchByKeyword"
    ListSearchByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSearchByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSearchByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSearchByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSearchByKeywordInputSet = function() {
    ListSearchByKeywordInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Keywords input for this Choreo. ((required, string) Enter search text.)
        */
        this.set_Keywords = function(value) {
            this.setInput("Keywords", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSearchByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSearchByKeywordResultSet = function(resultStream) {
    ListSearchByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSearchByKeyword, choreography.Choreography);
util.inherits(ListSearchByKeywordInputSet, choreography.InputSet);
util.inherits(ListSearchByKeywordResultSet, choreography.ResultSet);
exports.ListSearchByKeyword = ListSearchByKeyword;

