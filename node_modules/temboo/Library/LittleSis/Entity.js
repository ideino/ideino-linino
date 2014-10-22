
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Categories
    Retrieves a list of all the Relationships possible among people and organizations in LittleSis.
*/


var Categories = function(session) {
    /*
        Create a new instance of the Categories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/Categories"
    Categories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Categories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CategoriesInputSet = function() {
    CategoriesInputSet.super_.call(this);
        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from LittleSis.org. Acceptable inputs: xml or json. Defautls to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Categories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CategoriesResultSet = function(resultStream) {
    CategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Categories, choreography.Choreography);
util.inherits(CategoriesInputSet, choreography.InputSet);
util.inherits(CategoriesResultSet, choreography.ResultSet);
exports.Categories = Categories;


/*
    EntitySearchByKeyword
    Retrieves Entities (people or organizations) in LittleSis that match a given keyword search.
*/


var EntitySearchByKeyword = function(session) {
    /*
        Create a new instance of the EntitySearchByKeyword Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/EntitySearchByKeyword"
    EntitySearchByKeyword.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EntitySearchByKeywordResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EntitySearchByKeywordInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EntitySearchByKeyword
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EntitySearchByKeywordInputSet = function() {
    EntitySearchByKeywordInputSet.super_.call(this);
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
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Number of 20 and a Page of 6 will show results 100-120.)
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
        Set the value of the SearchAll input for this Choreo. ((optional, integer) Enter 1 to search a record's description and summary fields. When not specified, only the name and aliases fields of each record will be searched.)
        */
        this.set_SearchAll = function(value) {
            this.setInput("SearchAll", value);
        }

        /*
        Set the value of the TypeIDs input for this Choreo. ((optional, string) You can specify a TypeIDs value to limit the search results to only those of a given type. Obtain all possible types and type ID's by first running the GetTypes Choreo.)
        */
        this.set_TypeIDs = function(value) {
            this.setInput("TypeIDs", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EntitySearchByKeyword Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EntitySearchByKeywordResultSet = function(resultStream) {
    EntitySearchByKeywordResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EntitySearchByKeyword, choreography.Choreography);
util.inherits(EntitySearchByKeywordInputSet, choreography.InputSet);
util.inherits(EntitySearchByKeywordResultSet, choreography.ResultSet);
exports.EntitySearchByKeyword = EntitySearchByKeyword;


/*
    EntityTypes
    Retrieves a list of the types of Entities (people or organizations) in LittleSis, along with TypeIDs.
*/


var EntityTypes = function(session) {
    /*
        Create a new instance of the EntityTypes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/EntityTypes"
    EntityTypes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EntityTypesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EntityTypesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EntityTypes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EntityTypesInputSet = function() {
    EntityTypesInputSet.super_.call(this);
        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from LittleSis.org. Acceptable inputs: xml or json. Defautls to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EntityTypes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EntityTypesResultSet = function(resultStream) {
    EntityTypesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EntityTypes, choreography.Choreography);
util.inherits(EntityTypesInputSet, choreography.InputSet);
util.inherits(EntityTypesResultSet, choreography.ResultSet);
exports.EntityTypes = EntityTypes;


/*
    GetAliasesByEntity
    Retrieves the aliases associated with each LittleSis Entity (person or organization).
*/


var GetAliasesByEntity = function(session) {
    /*
        Create a new instance of the GetAliasesByEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetAliasesByEntity"
    GetAliasesByEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAliasesByEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAliasesByEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAliasesByEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAliasesByEntityInputSet = function() {
    GetAliasesByEntityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the Entity (person or organization) for which aliases are to be retrieved.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAliasesByEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAliasesByEntityResultSet = function(resultStream) {
    GetAliasesByEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAliasesByEntity, choreography.Choreography);
util.inherits(GetAliasesByEntityInputSet, choreography.InputSet);
util.inherits(GetAliasesByEntityResultSet, choreography.ResultSet);
exports.GetAliasesByEntity = GetAliasesByEntity;


/*
    GetBatchEntities
    Retrieves the LittleSis record for a given Entity (person or organization) by its ID.
*/


var GetBatchEntities = function(session) {
    /*
        Create a new instance of the GetBatchEntities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetBatchEntities"
    GetBatchEntities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBatchEntitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBatchEntitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBatchEntities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBatchEntitiesInputSet = function() {
    GetBatchEntitiesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Details input for this Choreo. ((optional, integer) Indicate 1 to retrieve detailed information associated with each record retrieved Otherwise, only a basic record will be returned.)
        */
        this.set_Details = function(value) {
            this.setInput("Details", value);
        }

        /*
        Set the value of the EntityIDs input for this Choreo. ((required, string) A comma delimited string of the IDs of the Entities to retrieve.)
        */
        this.set_EntityIDs = function(value) {
            this.setInput("EntityIDs", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBatchEntities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBatchEntitiesResultSet = function(resultStream) {
    GetBatchEntitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBatchEntities, choreography.Choreography);
util.inherits(GetBatchEntitiesInputSet, choreography.InputSet);
util.inherits(GetBatchEntitiesResultSet, choreography.ResultSet);
exports.GetBatchEntities = GetBatchEntities;


/*
    GetChainsByEntity
    Retrieves a chain of connections between two Entities (person or organization) in LittleSis.
*/


var GetChainsByEntity = function(session) {
    /*
        Create a new instance of the GetChainsByEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetChainsByEntity"
    GetChainsByEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetChainsByEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetChainsByEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetChainsByEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetChainsByEntityInputSet = function() {
    GetChainsByEntityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CategoryID input for this Choreo. ((optional, integer) Limit the relationships to specific categories by specifying the category number.)
        */
        this.set_CategoryID = function(value) {
            this.setInput("CategoryID", value);
        }

        /*
        Set the value of the EntityIDs input for this Choreo. ((required, integer) The EntityIDs of the two entities for which a relationship chain is to be returned, separated by a semicolon (e.g. 14629;2 ).)
        */
        this.set_EntityIDs = function(value) {
            this.setInput("EntityIDs", value);
        }

        /*
        Set the value of the Page input for this Choreo. ((optional, string) Specifies which of the found chain to expand in detail. Default is 1.)
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

}

/*
A ResultSet with methods tailored to the values returned by the GetChainsByEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetChainsByEntityResultSet = function(resultStream) {
    GetChainsByEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetChainsByEntity, choreography.Choreography);
util.inherits(GetChainsByEntityInputSet, choreography.InputSet);
util.inherits(GetChainsByEntityResultSet, choreography.ResultSet);
exports.GetChainsByEntity = GetChainsByEntity;


/*
    GetEntitiesWithRelationship
    Retrieves a list of Entities (person or organization) to which a known relationship exists in LittleSis for any Entity.
*/


var GetEntitiesWithRelationship = function(session) {
    /*
        Create a new instance of the GetEntitiesWithRelationship Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetEntitiesWithRelationship"
    GetEntitiesWithRelationship.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEntitiesWithRelationshipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEntitiesWithRelationshipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEntitiesWithRelationship
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEntitiesWithRelationshipInputSet = function() {
    GetEntitiesWithRelationshipInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CategoryIDs input for this Choreo. ((optional, string) Comma delimited list of category IDs of the categories to which the resulting Entities should belong.)
        */
        this.set_CategoryIDs = function(value) {
            this.setInput("CategoryIDs", value);
        }

        /*
        Set the value of the Current input for this Choreo. ((optional, integer) Set to 1 to limit the relationships returned to only past relationships. Set to 0 to limit relationships returned to only current relationships. Defaults to all.)
        */
        this.set_Current = function(value) {
            this.setInput("Current", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the person or organization fro which a record is to be returned.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Number of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, integer) Specifies what order the given entity must have in the relationship.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
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
        Set the value of the SortBy input for this Choreo. ((optional, string) Defaults to sorting by entity, which returns a list of relationships grouped by related entity. Specify another sort order for the results. Acceptable inputs: category or relationship.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEntitiesWithRelationship Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEntitiesWithRelationshipResultSet = function(resultStream) {
    GetEntitiesWithRelationshipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEntitiesWithRelationship, choreography.Choreography);
util.inherits(GetEntitiesWithRelationshipInputSet, choreography.InputSet);
util.inherits(GetEntitiesWithRelationshipResultSet, choreography.ResultSet);
exports.GetEntitiesWithRelationship = GetEntitiesWithRelationship;


/*
    GetEntity
    Retrieves the LittleSis record for a given Entity (person or organization) by its ID.
*/


var GetEntity = function(session) {
    /*
        Create a new instance of the GetEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetEntity"
    GetEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEntityInputSet = function() {
    GetEntityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Details input for this Choreo. ((optional, string) Indicate "details" to retrieve detailed information associated with this record, including aliases. Otherwise, only a basic record will be returned.)
        */
        this.set_Details = function(value) {
            this.setInput("Details", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The EntityID of the person or organization record to be returned.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEntityResultSet = function(resultStream) {
    GetEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEntity, choreography.Choreography);
util.inherits(GetEntityInputSet, choreography.InputSet);
util.inherits(GetEntityResultSet, choreography.ResultSet);
exports.GetEntity = GetEntity;


/*
    GetEntityByOutsideID
    Retrieves the record for an Entity in LittleSis using the ID of a number of third-party organizations such as the SEC or GovTrack.
*/


var GetEntityByOutsideID = function(session) {
    /*
        Create a new instance of the GetEntityByOutsideID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetEntityByOutsideID"
    GetEntityByOutsideID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEntityByOutsideIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEntityByOutsideIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEntityByOutsideID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEntityByOutsideIDInputSet = function() {
    GetEntityByOutsideIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the IDType input for this Choreo. ((required, string) You can search for a record by the IDs of other third-party services. Acceptable inputs: ticker, sec_cik, fec_id, bioguide_id, govtrack_id, crp_id, watchdog_id. See documentation for more information.)
        */
        this.set_IDType = function(value) {
            this.setInput("IDType", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the record to be returned.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEntityByOutsideID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEntityByOutsideIDResultSet = function(resultStream) {
    GetEntityByOutsideIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEntityByOutsideID, choreography.Choreography);
util.inherits(GetEntityByOutsideIDInputSet, choreography.InputSet);
util.inherits(GetEntityByOutsideIDResultSet, choreography.ResultSet);
exports.GetEntityByOutsideID = GetEntityByOutsideID;


/*
    GetLeadershipByOrganization
    Retrieves a list of board members and executives for a given organization.
*/


var GetLeadershipByOrganization = function(session) {
    /*
        Create a new instance of the GetLeadershipByOrganization Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetLeadershipByOrganization"
    GetLeadershipByOrganization.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLeadershipByOrganizationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLeadershipByOrganizationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLeadershipByOrganization
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLeadershipByOrganizationInputSet = function() {
    GetLeadershipByOrganizationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Current input for this Choreo. ((optional, integer) Set to 1 to limit the relationships returned to only past relationships. Set to 0 to limit relationships returned to only current relationships. Defaults to all.)
        */
        this.set_Current = function(value) {
            this.setInput("Current", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the organization.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLeadershipByOrganization Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLeadershipByOrganizationResultSet = function(resultStream) {
    GetLeadershipByOrganizationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLeadershipByOrganization, choreography.Choreography);
util.inherits(GetLeadershipByOrganizationInputSet, choreography.InputSet);
util.inherits(GetLeadershipByOrganizationResultSet, choreography.ResultSet);
exports.GetLeadershipByOrganization = GetLeadershipByOrganization;


/*
    GetLeadershipByPerson
    Retrieves a list of organizations of which a given person is an executive or board member.
*/


var GetLeadershipByPerson = function(session) {
    /*
        Create a new instance of the GetLeadershipByPerson Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetLeadershipByPerson"
    GetLeadershipByPerson.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLeadershipByPersonResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLeadershipByPersonInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLeadershipByPerson
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLeadershipByPersonInputSet = function() {
    GetLeadershipByPersonInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Current input for this Choreo. ((optional, integer) Set to 1 to limit the relationships returned to only past relationships. Set to 0 to limit relationships returned to only current relationships. Defaults to all.)
        */
        this.set_Current = function(value) {
            this.setInput("Current", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the person.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Limits results to organizations of the specified type, e.g. "PublicCompany.")
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLeadershipByPerson Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLeadershipByPersonResultSet = function(resultStream) {
    GetLeadershipByPersonResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLeadershipByPerson, choreography.Choreography);
util.inherits(GetLeadershipByPersonInputSet, choreography.InputSet);
util.inherits(GetLeadershipByPersonResultSet, choreography.ResultSet);
exports.GetLeadershipByPerson = GetLeadershipByPerson;


/*
    GetListsByEntity
    Retrieves a list of Lists in LittleSis the given Entity (person or organization) belongs to.
*/


var GetListsByEntity = function(session) {
    /*
        Create a new instance of the GetListsByEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetListsByEntity"
    GetListsByEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListsByEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListsByEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListsByEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListsByEntityInputSet = function() {
    GetListsByEntityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the record to be returned.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetListsByEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListsByEntityResultSet = function(resultStream) {
    GetListsByEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListsByEntity, choreography.Choreography);
util.inherits(GetListsByEntityInputSet, choreography.InputSet);
util.inherits(GetListsByEntityResultSet, choreography.ResultSet);
exports.GetListsByEntity = GetListsByEntity;


/*
    GetRelationshipsByEntity
    Retrieves a list of Relationships (to a person or to an organization) of a given Entity known in LittleSis.
*/


var GetRelationshipsByEntity = function(session) {
    /*
        Create a new instance of the GetRelationshipsByEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetRelationshipsByEntity"
    GetRelationshipsByEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetRelationshipsByEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetRelationshipsByEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetRelationshipsByEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetRelationshipsByEntityInputSet = function() {
    GetRelationshipsByEntityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CategoryIDs input for this Choreo. ((optional, string) Comma delimited list of category IDs the resulting Relationships must have.)
        */
        this.set_CategoryIDs = function(value) {
            this.setInput("CategoryIDs", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the person or organization fro which a record is to be returned.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Number of 20 and a Page of 6 will show results 100-120.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, integer) Specifies what order the given entity must have in the relationship.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetRelationshipsByEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetRelationshipsByEntityResultSet = function(resultStream) {
    GetRelationshipsByEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetRelationshipsByEntity, choreography.Choreography);
util.inherits(GetRelationshipsByEntityInputSet, choreography.InputSet);
util.inherits(GetRelationshipsByEntityResultSet, choreography.ResultSet);
exports.GetRelationshipsByEntity = GetRelationshipsByEntity;


/*
    GetSecondDegreeRelationships
    Retrieves a list of all the Entities (people or organizations) that are two-degrees removed by Relationships from the given Entity.
*/


var GetSecondDegreeRelationships = function(session) {
    /*
        Create a new instance of the GetSecondDegreeRelationships Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetSecondDegreeRelationships"
    GetSecondDegreeRelationships.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSecondDegreeRelationshipsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSecondDegreeRelationshipsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSecondDegreeRelationships
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSecondDegreeRelationshipsInputSet = function() {
    GetSecondDegreeRelationshipsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Category1 input for this Choreo. ((optional, string) Comma delimited list of Category IDs. Restricts the categories of Relationships that the given Entity and all first degree Entities returned should be connected through.)
        */
        this.set_Category1 = function(value) {
            this.setInput("Category1", value);
        }

        /*
        Set the value of the Category2 input for this Choreo. ((optional, string) Comma delimited list of Category IDs. Restricts the categories of Relationships that the given Entity and all second degree Entities returned should be connected through.)
        */
        this.set_Category2 = function(value) {
            this.setInput("Category2", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the person or organization for which records are to be returned.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the Number input for this Choreo. ((optional, integer) Specifies what number of results to show. Used in conjunction with Page parameter, a Number of 20 and a Page of 6 will show results 100-120. Defaults to 20.)
        */
        this.set_Number = function(value) {
            this.setInput("Number", value);
        }

        /*
        Set the value of the Order1 input for this Choreo. ((optional, integer) Specifies the order of the Entities returned in the first degree Relationship. Acceptable values: 1 or 2. See documentation for more on Relationship order.)
        */
        this.set_Order1 = function(value) {
            this.setInput("Order1", value);
        }

        /*
        Set the value of the Order2 input for this Choreo. ((optional, integer) Specifies the order of the first degree Entity in the second degree Relationship. Acceptable values: 1 or 2. See documentation for more on Relationship order.)
        */
        this.set_Order2 = function(value) {
            this.setInput("Order2", value);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetSecondDegreeRelationships Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSecondDegreeRelationshipsResultSet = function(resultStream) {
    GetSecondDegreeRelationshipsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSecondDegreeRelationships, choreography.Choreography);
util.inherits(GetSecondDegreeRelationshipsInputSet, choreography.InputSet);
util.inherits(GetSecondDegreeRelationshipsResultSet, choreography.ResultSet);
exports.GetSecondDegreeRelationships = GetSecondDegreeRelationships;


/*
    GetSubOrganizations
    Retrieves a list of suborganizations of a given organization.
*/


var GetSubOrganizations = function(session) {
    /*
        Create a new instance of the GetSubOrganizations Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/LittleSis/Entity/GetSubOrganizations"
    GetSubOrganizations.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSubOrganizationsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSubOrganizationsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSubOrganizations
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSubOrganizationsInputSet = function() {
    GetSubOrganizationsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from LittleSis.org.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((required, integer) The ID of the organization.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Format of the response returned by LittleSis.org. Acceptable inputs: xml or json. Defaults to xml)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSubOrganizations Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSubOrganizationsResultSet = function(resultStream) {
    GetSubOrganizationsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from LittleSis.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSubOrganizations, choreography.Choreography);
util.inherits(GetSubOrganizationsInputSet, choreography.InputSet);
util.inherits(GetSubOrganizationsResultSet, choreography.ResultSet);
exports.GetSubOrganizations = GetSubOrganizations;

