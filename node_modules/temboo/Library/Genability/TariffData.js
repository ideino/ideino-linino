
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    GetLoadServingEntities
    Returns a list of LoadServingEntity objects based a specified search criteria.
*/


var GetLoadServingEntities = function(session) {
    /*
        Create a new instance of the GetLoadServingEntities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetLoadServingEntities"
    GetLoadServingEntities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLoadServingEntitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLoadServingEntitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLoadServingEntities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLoadServingEntitiesInputSet = function() {
    GetLoadServingEntitiesInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((optional, string) The unique ID of the Account to find LSEs for. When passed in, the search will look for a territoryId on the Account and use that to find all LSEs that provide service within that territory.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the EndsWith input for this Choreo. ((optional, string) When true, the search will only return results that end with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_EndsWith = function(value) {
            this.setInput("EndsWith", value);
        }

        /*
        Set the value of the IsRegex input for this Choreo. ((optional, boolean) When true, the provided search string will be regarded as a regular expression and the search will return results matching the regular expression.)
        */
        this.set_IsRegex = function(value) {
            this.setInput("IsRegex", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the SearchOn input for this Choreo. ((optional, string) Comma separated list of fields to query on. When searchOn is specified, the text provided in the search string field will be searched within these fields.)
        */
        this.set_SearchOn = function(value) {
            this.setInput("SearchOn", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) The string of text to search on. This can also be a regular expression, in which case you should set the 'isRegex' flag to true.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the SortOn input for this Choreo. ((optional, string) Comma separated list of fields to sort on.)
        */
        this.set_SortOn = function(value) {
            this.setInput("SortOn", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Comma separated list of ordering. Possible values are 'ASC' and 'DESC'. Default is 'ASC'. This list corresponds to the field list used in the SortOn input.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartsWith input for this Choreo. ((optional, boolean) When true, the search will only return results that begin with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_StartsWith = function(value) {
            this.setInput("StartsWith", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLoadServingEntities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLoadServingEntitiesResultSet = function(resultStream) {
    GetLoadServingEntitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLoadServingEntities, choreography.Choreography);
util.inherits(GetLoadServingEntitiesInputSet, choreography.InputSet);
util.inherits(GetLoadServingEntitiesResultSet, choreography.ResultSet);
exports.GetLoadServingEntities = GetLoadServingEntities;


/*
    GetLoadServingEntity
    Returns a Load Serving Entity with a given ID.
*/


var GetLoadServingEntity = function(session) {
    /*
        Create a new instance of the GetLoadServingEntity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetLoadServingEntity"
    GetLoadServingEntity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetLoadServingEntityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetLoadServingEntityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetLoadServingEntity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetLoadServingEntityInputSet = function() {
    GetLoadServingEntityInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((required, integer) The id of a particular Load Serving Entity to return.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetLoadServingEntity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetLoadServingEntityResultSet = function(resultStream) {
    GetLoadServingEntityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetLoadServingEntity, choreography.Choreography);
util.inherits(GetLoadServingEntityInputSet, choreography.InputSet);
util.inherits(GetLoadServingEntityResultSet, choreography.ResultSet);
exports.GetLoadServingEntity = GetLoadServingEntity;


/*
    GetMetricsForZipCode
    Returns a place object and associated facts and metrics with a given zip code.
*/


var GetMetricsForZipCode = function(session) {
    /*
        Create a new instance of the GetMetricsForZipCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetMetricsForZipCode"
    GetMetricsForZipCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMetricsForZipCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMetricsForZipCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMetricsForZipCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMetricsForZipCodeInputSet = function() {
    GetMetricsForZipCodeInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) The zip code for the place object you want to return.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMetricsForZipCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMetricsForZipCodeResultSet = function(resultStream) {
    GetMetricsForZipCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMetricsForZipCode, choreography.Choreography);
util.inherits(GetMetricsForZipCodeInputSet, choreography.InputSet);
util.inherits(GetMetricsForZipCodeResultSet, choreography.ResultSet);
exports.GetMetricsForZipCode = GetMetricsForZipCode;


/*
    GetPropertyKey
    Returns an individual Property Key using a given key name.
*/


var GetPropertyKey = function(session) {
    /*
        Create a new instance of the GetPropertyKey Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetPropertyKey"
    GetPropertyKey.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPropertyKeyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPropertyKeyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPropertyKey
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPropertyKeyInputSet = function() {
    GetPropertyKeyInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((required, string) The key name for the property key you want to return.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPropertyKey Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPropertyKeyResultSet = function(resultStream) {
    GetPropertyKeyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPropertyKey, choreography.Choreography);
util.inherits(GetPropertyKeyInputSet, choreography.InputSet);
util.inherits(GetPropertyKeyResultSet, choreography.ResultSet);
exports.GetPropertyKey = GetPropertyKey;


/*
    GetPropertyKeys
    Returns a list of Property Keys based on a specified search criteria.
*/


var GetPropertyKeys = function(session) {
    /*
        Create a new instance of the GetPropertyKeys Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetPropertyKeys"
    GetPropertyKeys.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPropertyKeysResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPropertyKeysInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPropertyKeys
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPropertyKeysInputSet = function() {
    GetPropertyKeysInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the EntityID input for this Choreo. ((optional, string) Filters the result so that only Properties that belong to this EntityID are returned. When specified, EntityType must also be specified.)
        */
        this.set_EntityID = function(value) {
            this.setInput("EntityID", value);
        }

        /*
        Set the value of the EntityType input for this Choreo. ((optional, string) Filters the result so that only Properties that belong to this EntityType are returned. When specified, EntityID must also be specified.)
        */
        this.set_EntityType = function(value) {
            this.setInput("EntityType", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPropertyKeys Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPropertyKeysResultSet = function(resultStream) {
    GetPropertyKeysResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPropertyKeys, choreography.Choreography);
util.inherits(GetPropertyKeysInputSet, choreography.InputSet);
util.inherits(GetPropertyKeysResultSet, choreography.ResultSet);
exports.GetPropertyKeys = GetPropertyKeys;


/*
    GetSeasonGroups
    Returns a list of Season Groups for a given Load Serving Entity.
*/


var GetSeasonGroups = function(session) {
    /*
        Create a new instance of the GetSeasonGroups Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetSeasonGroups"
    GetSeasonGroups.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetSeasonGroupsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetSeasonGroupsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetSeasonGroups
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetSeasonGroupsInputSet = function() {
    GetSeasonGroupsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the EndsWith input for this Choreo. ((optional, string) When true, the search will only return results that end with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_EndsWith = function(value) {
            this.setInput("EndsWith", value);
        }

        /*
        Set the value of the IsRegex input for this Choreo. ((optional, boolean) When true, the provided search string will be regarded as a regular expression and the search will return results matching the regular expression.)
        */
        this.set_IsRegex = function(value) {
            this.setInput("IsRegex", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((required, integer) The LSE Id whose Seasons to return.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the SearchOn input for this Choreo. ((optional, string) Comma separated list of fields to query on. When searchOn is specified, the text provided in the search string field will be searched within these fields.)
        */
        this.set_SearchOn = function(value) {
            this.setInput("SearchOn", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) The string of text to search on. This can also be a regular expression, in which case you should set the 'isRegex' flag to true.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the SortOn input for this Choreo. ((optional, string) Comma separated list of fields to sort on.)
        */
        this.set_SortOn = function(value) {
            this.setInput("SortOn", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Comma separated list of ordering. Possible values are 'ASC' and 'DESC'. Default is 'ASC'. This list corresponds to the field list used in the SortOn input.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartsWith input for this Choreo. ((optional, boolean) When true, the search will only return results that begin with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_StartsWith = function(value) {
            this.setInput("StartsWith", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetSeasonGroups Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetSeasonGroupsResultSet = function(resultStream) {
    GetSeasonGroupsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetSeasonGroups, choreography.Choreography);
util.inherits(GetSeasonGroupsInputSet, choreography.InputSet);
util.inherits(GetSeasonGroupsResultSet, choreography.ResultSet);
exports.GetSeasonGroups = GetSeasonGroups;


/*
    GetTariff
    Returns an individual Tariff object with a given id.
*/


var GetTariff = function(session) {
    /*
        Create a new instance of the GetTariff Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTariff"
    GetTariff.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTariffResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTariffInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTariff
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTariffInputSet = function() {
    GetTariffInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((required, integer) The master tariff id. This can be retrieved in the output of the GetTariffs Choreo.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the PopulateProperties input for this Choreo. ((optional, boolean) Set to "true" to populate the properties for the returned Tariffs.)
        */
        this.set_PopulateProperties = function(value) {
            this.setInput("PopulateProperties", value);
        }

        /*
        Set the value of the PopulateRates input for this Choreo. ((optional, boolean) Set to "true" to populate the rate details for the returned Tariffs.)
        */
        this.set_PopulateRates = function(value) {
            this.setInput("PopulateRates", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTariff Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTariffResultSet = function(resultStream) {
    GetTariffResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTariff, choreography.Choreography);
util.inherits(GetTariffInputSet, choreography.InputSet);
util.inherits(GetTariffResultSet, choreography.ResultSet);
exports.GetTariff = GetTariff;


/*
    GetTariffs
    Returns a list of Tariff objects based a specified search criteria.
*/


var GetTariffs = function(session) {
    /*
        Create a new instance of the GetTariffs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTariffs"
    GetTariffs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTariffsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTariffsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTariffs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTariffsInputSet = function() {
    GetTariffsInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((optional, string) The unique ID of the Account to find tariffs for. Values passed in will override those from the Account.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the CustomerClasses input for this Choreo. ((optional, string) Returns only these customer classes. Valid values are: RESIDENTIAL, GENERAL.)
        */
        this.set_CustomerClasses = function(value) {
            this.setInput("CustomerClasses", value);
        }

        /*
        Set the value of the EffectiveOn input for this Choreo. ((optional, date) Returns only tariffs that are effective on this date.)
        */
        this.set_EffectiveOn = function(value) {
            this.setInput("EffectiveOn", value);
        }

        /*
        Set the value of the EndsWith input for this Choreo. ((optional, string) When true, the search will only return results that end with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_EndsWith = function(value) {
            this.setInput("EndsWith", value);
        }

        /*
        Set the value of the FromDateTime input for this Choreo. ((optional, date) Returns only tariffs that are effective on or after this date.)
        */
        this.set_FromDateTime = function(value) {
            this.setInput("FromDateTime", value);
        }

        /*
        Set the value of the IsRegex input for this Choreo. ((optional, boolean) When true, the provided search string will be regarded as a regular expression and the search will return results matching the regular expression.)
        */
        this.set_IsRegex = function(value) {
            this.setInput("IsRegex", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((optional, integer) Filter tariffs for a specific LSE.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the PopulateProperties input for this Choreo. ((optional, boolean) Set to "true" to populate the properties for the returned Tariffs.)
        */
        this.set_PopulateProperties = function(value) {
            this.setInput("PopulateProperties", value);
        }

        /*
        Set the value of the PopulateRates input for this Choreo. ((optional, boolean) Set to "true" to populate the rate details for the returned Tariffs.)
        */
        this.set_PopulateRates = function(value) {
            this.setInput("PopulateRates", value);
        }

        /*
        Set the value of the SearchOn input for this Choreo. ((optional, string) Comma separated list of fields to query on. When searchOn is specified, the text provided in the search string field will be searched within these fields.)
        */
        this.set_SearchOn = function(value) {
            this.setInput("SearchOn", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) The string of text to search on. This can also be a regular expression, in which case you should set the 'isRegex' flag to true.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the SortOn input for this Choreo. ((optional, string) Comma separated list of fields to sort on.)
        */
        this.set_SortOn = function(value) {
            this.setInput("SortOn", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Comma separated list of ordering. Possible values are 'ASC' and 'DESC'. Default is 'ASC'. This list corresponds to the field list used in the SortOn input.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartsWith input for this Choreo. ((optional, boolean) When true, the search will only return results that begin with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_StartsWith = function(value) {
            this.setInput("StartsWith", value);
        }

        /*
        Set the value of the TariffTypes input for this Choreo. ((optional, string) Returns only these tariff types. Valid values are: DEFAULT, ALTERNATIVE, OPTIONAL_EXTRA, RIDER.)
        */
        this.set_TariffTypes = function(value) {
            this.setInput("TariffTypes", value);
        }

        /*
        Set the value of the ToDateTime input for this Choreo. ((optional, date) Returns only tariffs that are effective on or before this date.)
        */
        this.set_ToDateTime = function(value) {
            this.setInput("ToDateTime", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) Return tariffs for a given zip or post code.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTariffs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTariffsResultSet = function(resultStream) {
    GetTariffsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTariffs, choreography.Choreography);
util.inherits(GetTariffsInputSet, choreography.InputSet);
util.inherits(GetTariffsResultSet, choreography.ResultSet);
exports.GetTariffs = GetTariffs;


/*
    GetTerritories
    Returns a list of Territory objects based a specified search criteria.
*/


var GetTerritories = function(session) {
    /*
        Create a new instance of the GetTerritories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTerritories"
    GetTerritories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTerritoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTerritoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTerritories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTerritoriesInputSet = function() {
    GetTerritoriesInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the ContainsItemType input for this Choreo. ((optional, string) Filters the result set to include a particular type of territory. Valid values are: CITY, ZIPCODE, STATE, COUNTY.)
        */
        this.set_ContainsItemType = function(value) {
            this.setInput("ContainsItemType", value);
        }

        /*
        Set the value of the ContainsItemValue input for this Choreo. ((optional, string) Used in combination with the ContainsItemType value. Filters the Types by this value.)
        */
        this.set_ContainsItemValue = function(value) {
            this.setInput("ContainsItemValue", value);
        }

        /*
        Set the value of the EndsWith input for this Choreo. ((optional, string) When true, the search will only return results that end with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_EndsWith = function(value) {
            this.setInput("EndsWith", value);
        }

        /*
        Set the value of the IsRegex input for this Choreo. ((optional, boolean) When true, the provided search string will be regarded as a regular expression and the search will return results matching the regular expression.)
        */
        this.set_IsRegex = function(value) {
            this.setInput("IsRegex", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((optional, integer) Filters the result set to only include territories within this LSE ID.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the MasterTariffID input for this Choreo. ((optional, integer) For tariffs with prices varying by geographic location, this will return the list of those territories covered by this tariff.)
        */
        this.set_MasterTariffID = function(value) {
            this.setInput("MasterTariffID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the PopulateItems input for this Choreo. ((optional, boolean) If set to "true", returns a list of territory items for each territory in the result set.)
        */
        this.set_PopulateItems = function(value) {
            this.setInput("PopulateItems", value);
        }

        /*
        Set the value of the PopulateLSES input for this Choreo. ((optional, string) If set to "true", the response includes a list of TerritoryLses which are all the LSEs providing service in this territory.)
        */
        this.set_PopulateLSES = function(value) {
            this.setInput("PopulateLSES", value);
        }

        /*
        Set the value of the SearchOn input for this Choreo. ((optional, string) Comma separated list of fields to query on. When searchOn is specified, the text provided in the search string field will be searched within these fields.)
        */
        this.set_SearchOn = function(value) {
            this.setInput("SearchOn", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) The string of text to search on. This can also be a regular expression, in which case you should set the 'isRegex' flag to true.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the SortOn input for this Choreo. ((optional, string) Comma separated list of fields to sort on.)
        */
        this.set_SortOn = function(value) {
            this.setInput("SortOn", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Comma separated list of ordering. Possible values are 'ASC' and 'DESC'. Default is 'ASC'. This list corresponds to the field list used in the SortOn input.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartsWith input for this Choreo. ((optional, boolean) When true, the search will only return results that begin with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_StartsWith = function(value) {
            this.setInput("StartsWith", value);
        }

        /*
        Set the value of the UsageTypes input for this Choreo. ((optional, string) Filters the result set to only include territories of the specified usageType. valid values are: SERVICE, TARIFF.)
        */
        this.set_UsageTypes = function(value) {
            this.setInput("UsageTypes", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTerritories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTerritoriesResultSet = function(resultStream) {
    GetTerritoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTerritories, choreography.Choreography);
util.inherits(GetTerritoriesInputSet, choreography.InputSet);
util.inherits(GetTerritoriesResultSet, choreography.ResultSet);
exports.GetTerritories = GetTerritories;


/*
    GetTerritory
    Returns a an individual Territory objects with a given id.
*/


var GetTerritory = function(session) {
    /*
        Create a new instance of the GetTerritory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTerritory"
    GetTerritory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTerritoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTerritoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTerritory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTerritoryInputSet = function() {
    GetTerritoryInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the PopulateItems input for this Choreo. ((optional, boolean) If set to "true", returns a list of territory items for each territory in the result set.)
        */
        this.set_PopulateItems = function(value) {
            this.setInput("PopulateItems", value);
        }

        /*
        Set the value of the TerritoryID input for this Choreo. ((required, integer) The id for the territory to retrieve. This can be retrieved in the output of the GetTerritories Choreo.)
        */
        this.set_TerritoryID = function(value) {
            this.setInput("TerritoryID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTerritory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTerritoryResultSet = function(resultStream) {
    GetTerritoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTerritory, choreography.Choreography);
util.inherits(GetTerritoryInputSet, choreography.InputSet);
util.inherits(GetTerritoryResultSet, choreography.ResultSet);
exports.GetTerritory = GetTerritory;


/*
    GetTimeOfUseGroup
    Returns a particular Time of Use Group with a given touGroupId and lseId.
*/


var GetTimeOfUseGroup = function(session) {
    /*
        Create a new instance of the GetTimeOfUseGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTimeOfUseGroup"
    GetTimeOfUseGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTimeOfUseGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTimeOfUseGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTimeOfUseGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTimeOfUseGroupInputSet = function() {
    GetTimeOfUseGroupInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the EndsWith input for this Choreo. ((optional, string) When true, the search will only return results that end with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_EndsWith = function(value) {
            this.setInput("EndsWith", value);
        }

        /*
        Set the value of the IsRegex input for this Choreo. ((optional, boolean) When true, the provided search string will be regarded as a regular expression and the search will return results matching the regular expression.)
        */
        this.set_IsRegex = function(value) {
            this.setInput("IsRegex", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((conditional, integer) Used to retrieve a TOU Group for a specific LSE.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the SearchOn input for this Choreo. ((optional, string) Comma separated list of fields to query on. When searchOn is specified, the text provided in the search string field will be searched within these fields.)
        */
        this.set_SearchOn = function(value) {
            this.setInput("SearchOn", value);
        }

        /*
        Set the value of the Search input for this Choreo. ((optional, string) The string of text to search on. This can also be a regular expression, in which case you should set the 'isRegex' flag to true.)
        */
        this.set_Search = function(value) {
            this.setInput("Search", value);
        }

        /*
        Set the value of the SortOn input for this Choreo. ((optional, string) Comma separated list of fields to sort on.)
        */
        this.set_SortOn = function(value) {
            this.setInput("SortOn", value);
        }

        /*
        Set the value of the SortOrder input for this Choreo. ((optional, string) Comma separated list of ordering. Possible values are 'ASC' and 'DESC'. Default is 'ASC'. This list corresponds to the field list used in the SortOn input.)
        */
        this.set_SortOrder = function(value) {
            this.setInput("SortOrder", value);
        }

        /*
        Set the value of the StartsWith input for this Choreo. ((optional, boolean) When true, the search will only return results that begin with the specified search string. Otherwise, any match of the search string will be returned as a result.)
        */
        this.set_StartsWith = function(value) {
            this.setInput("StartsWith", value);
        }

        /*
        Set the value of the TOUGroupID input for this Choreo. ((conditional, integer) Used to retrieve a TOU Group by its ID (required when LSE ID is provided).)
        */
        this.set_TOUGroupID = function(value) {
            this.setInput("TOUGroupID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTimeOfUseGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTimeOfUseGroupResultSet = function(resultStream) {
    GetTimeOfUseGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTimeOfUseGroup, choreography.Choreography);
util.inherits(GetTimeOfUseGroupInputSet, choreography.InputSet);
util.inherits(GetTimeOfUseGroupResultSet, choreography.ResultSet);
exports.GetTimeOfUseGroup = GetTimeOfUseGroup;


/*
    GetTimeOfUseGroupIntervals
    Returns all the Intervals for a Time of Use Group within a given date range.
*/


var GetTimeOfUseGroupIntervals = function(session) {
    /*
        Create a new instance of the GetTimeOfUseGroupIntervals Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetTimeOfUseGroupIntervals"
    GetTimeOfUseGroupIntervals.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetTimeOfUseGroupIntervalsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetTimeOfUseGroupIntervalsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetTimeOfUseGroupIntervals
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetTimeOfUseGroupIntervalsInputSet = function() {
    GetTimeOfUseGroupIntervalsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((required, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the FromDateTime input for this Choreo. ((optional, date) The starting date and time of the requested Intervals (in ISO 8601 format). Defaults to current date if not specified.)
        */
        this.set_FromDateTime = function(value) {
            this.setInput("FromDateTime", value);
        }

        /*
        Set the value of the LSEID input for this Choreo. ((required, integer) Used to retrieve a TOU Group for a specific LSE.)
        */
        this.set_LSEID = function(value) {
            this.setInput("LSEID", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the TOUGroupID input for this Choreo. ((required, integer) Used to retrieve a TOU Group by its ID.)
        */
        this.set_TOUGroupID = function(value) {
            this.setInput("TOUGroupID", value);
        }

        /*
        Set the value of the ToDateTime input for this Choreo. ((optional, date) The ending date and time of the requested Intervals (in ISO 8601 format). If not specified, defaults to one week ahead of the current date.)
        */
        this.set_ToDateTime = function(value) {
            this.setInput("ToDateTime", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetTimeOfUseGroupIntervals Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetTimeOfUseGroupIntervalsResultSet = function(resultStream) {
    GetTimeOfUseGroupIntervalsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetTimeOfUseGroupIntervals, choreography.Choreography);
util.inherits(GetTimeOfUseGroupIntervalsInputSet, choreography.InputSet);
util.inherits(GetTimeOfUseGroupIntervalsResultSet, choreography.ResultSet);
exports.GetTimeOfUseGroupIntervals = GetTimeOfUseGroupIntervals;


/*
    GetZipCodeDetails
    Returns the details for a given zip code.
*/


var GetZipCodeDetails = function(session) {
    /*
        Create a new instance of the GetZipCodeDetails Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Genability/TariffData/GetZipCodeDetails"
    GetZipCodeDetails.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetZipCodeDetailsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetZipCodeDetailsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetZipCodeDetails
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetZipCodeDetailsInputSet = function() {
    GetZipCodeDetailsInputSet.super_.call(this);
        /*
        Set the value of the AppID input for this Choreo. ((conditional, string) The App ID provided by Genability.)
        */
        this.set_AppID = function(value) {
            this.setInput("AppID", value);
        }

        /*
        Set the value of the AppKey input for this Choreo. ((required, string) The App Key provided by Genability.)
        */
        this.set_AppKey = function(value) {
            this.setInput("AppKey", value);
        }

        /*
        Set the value of the PageCount input for this Choreo. ((optional, integer) The number of results to return. Defaults to 25.)
        */
        this.set_PageCount = function(value) {
            this.setInput("PageCount", value);
        }

        /*
        Set the value of the PageStart input for this Choreo. ((optional, integer) The page number to begin the result set from. Defaults to 1.)
        */
        this.set_PageStart = function(value) {
            this.setInput("PageStart", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) A zip code to search with.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetZipCodeDetails Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetZipCodeDetailsResultSet = function(resultStream) {
    GetZipCodeDetailsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Genability.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetZipCodeDetails, choreography.Choreography);
util.inherits(GetZipCodeDetailsInputSet, choreography.InputSet);
util.inherits(GetZipCodeDetailsResultSet, choreography.ResultSet);
exports.GetZipCodeDetails = GetZipCodeDetails;

