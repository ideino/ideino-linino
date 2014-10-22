
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    FilterPlacesByCategories
    Filter queries by category.
*/


var FilterPlacesByCategories = function(session) {
    /*
        Create a new instance of the FilterPlacesByCategories Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FilterPlacesByCategories"
    FilterPlacesByCategories.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterPlacesByCategoriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterPlacesByCategoriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterPlacesByCategories
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterPlacesByCategoriesInputSet = function() {
    FilterPlacesByCategoriesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((required, string) Enter a Factual category to narrow the search results.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) Enter a city to narrow results to.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterPlacesByCategories Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterPlacesByCategoriesResultSet = function(resultStream) {
    FilterPlacesByCategoriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterPlacesByCategories, choreography.Choreography);
util.inherits(FilterPlacesByCategoriesInputSet, choreography.InputSet);
util.inherits(FilterPlacesByCategoriesResultSet, choreography.ResultSet);
exports.FilterPlacesByCategories = FilterPlacesByCategories;


/*
    FilterPlacesByCity
    Restrict a query to a specified city.
*/


var FilterPlacesByCity = function(session) {
    /*
        Create a new instance of the FilterPlacesByCity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FilterPlacesByCity"
    FilterPlacesByCity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterPlacesByCityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterPlacesByCityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterPlacesByCity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterPlacesByCityInputSet = function() {
    FilterPlacesByCityInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) Enter a city to narrow results to.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterPlacesByCity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterPlacesByCityResultSet = function(resultStream) {
    FilterPlacesByCityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterPlacesByCity, choreography.Choreography);
util.inherits(FilterPlacesByCityInputSet, choreography.InputSet);
util.inherits(FilterPlacesByCityResultSet, choreography.ResultSet);
exports.FilterPlacesByCity = FilterPlacesByCity;


/*
    FilterPlacesByMultipleCities
    Restrict a query to a specified city.
*/


var FilterPlacesByMultipleCities = function(session) {
    /*
        Create a new instance of the FilterPlacesByMultipleCities Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FilterPlacesByMultipleCities"
    FilterPlacesByMultipleCities.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterPlacesByMultipleCitiesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterPlacesByMultipleCitiesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterPlacesByMultipleCities
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterPlacesByMultipleCitiesInputSet = function() {
    FilterPlacesByMultipleCitiesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Cities input for this Choreo. ((required, string) Enter a list of cities to filter results. Use the following comma-separated format: "New York", "Ithaca", "Albany")
        */
        this.set_Cities = function(value) {
            this.setInput("Cities", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string (i.e. Starbucks).)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterPlacesByMultipleCities Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterPlacesByMultipleCitiesResultSet = function(resultStream) {
    FilterPlacesByMultipleCitiesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterPlacesByMultipleCities, choreography.Choreography);
util.inherits(FilterPlacesByMultipleCitiesInputSet, choreography.InputSet);
util.inherits(FilterPlacesByMultipleCitiesResultSet, choreography.ResultSet);
exports.FilterPlacesByMultipleCities = FilterPlacesByMultipleCities;


/*
    FilterPlacesByTopLevelCategory
    Find places by top-level category and near specified latitude, longitude coordinates.
*/


var FilterPlacesByTopLevelCategory = function(session) {
    /*
        Create a new instance of the FilterPlacesByTopLevelCategory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FilterPlacesByTopLevelCategory"
    FilterPlacesByTopLevelCategory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterPlacesByTopLevelCategoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterPlacesByTopLevelCategoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterPlacesByTopLevelCategory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterPlacesByTopLevelCategoryInputSet = function() {
    FilterPlacesByTopLevelCategoryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((required, string) Enter a Factual top-level category to narrow the search results. See Choreo doc for a list of Factual top-level categories.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Enter latitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Enter longitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((required, integer) Provide the radius (in meters, and centered on the latitude-longitude coordinates specified) for which search results will be returned.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterPlacesByTopLevelCategory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterPlacesByTopLevelCategoryResultSet = function(resultStream) {
    FilterPlacesByTopLevelCategoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterPlacesByTopLevelCategory, choreography.Choreography);
util.inherits(FilterPlacesByTopLevelCategoryInputSet, choreography.InputSet);
util.inherits(FilterPlacesByTopLevelCategoryResultSet, choreography.ResultSet);
exports.FilterPlacesByTopLevelCategory = FilterPlacesByTopLevelCategory;


/*
    FilterRestaurantsByCuisineAndCoordinates
    Find restaurants by cuisine and near specified latitude, longitude coordinates.
*/


var FilterRestaurantsByCuisineAndCoordinates = function(session) {
    /*
        Create a new instance of the FilterRestaurantsByCuisineAndCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FilterRestaurantsByCuisineAndCoordinates"
    FilterRestaurantsByCuisineAndCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FilterRestaurantsByCuisineAndCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FilterRestaurantsByCuisineAndCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FilterRestaurantsByCuisineAndCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FilterRestaurantsByCuisineAndCoordinatesInputSet = function() {
    FilterRestaurantsByCuisineAndCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Cuisine input for this Choreo. ((required, string) Enter a desired cuisine to narrow the search results. See Choreo doc for a list of available cuisine parameters.)
        */
        this.set_Cuisine = function(value) {
            this.setInput("Cuisine", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Enter latitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Enter longitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((required, integer) Provide the radius (in meters, and centered on the latitude-longitude coordinates specified) for which search results will be returned.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FilterRestaurantsByCuisineAndCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FilterRestaurantsByCuisineAndCoordinatesResultSet = function(resultStream) {
    FilterRestaurantsByCuisineAndCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FilterRestaurantsByCuisineAndCoordinates, choreography.Choreography);
util.inherits(FilterRestaurantsByCuisineAndCoordinatesInputSet, choreography.InputSet);
util.inherits(FilterRestaurantsByCuisineAndCoordinatesResultSet, choreography.ResultSet);
exports.FilterRestaurantsByCuisineAndCoordinates = FilterRestaurantsByCuisineAndCoordinates;


/*
    FindPlacesByName
    Search for places by name.
*/


var FindPlacesByName = function(session) {
    /*
        Create a new instance of the FindPlacesByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FindPlacesByName"
    FindPlacesByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindPlacesByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindPlacesByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindPlacesByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindPlacesByNameInputSet = function() {
    FindPlacesByNameInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindPlacesByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindPlacesByNameResultSet = function(resultStream) {
    FindPlacesByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindPlacesByName, choreography.Choreography);
util.inherits(FindPlacesByNameInputSet, choreography.InputSet);
util.inherits(FindPlacesByNameResultSet, choreography.ResultSet);
exports.FindPlacesByName = FindPlacesByName;


/*
    FindPlacesNearCoordinates
    Find places near specified latitude, longitude coordinates.
*/


var FindPlacesNearCoordinates = function(session) {
    /*
        Create a new instance of the FindPlacesNearCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FindPlacesNearCoordinates"
    FindPlacesNearCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindPlacesNearCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindPlacesNearCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindPlacesNearCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindPlacesNearCoordinatesInputSet = function() {
    FindPlacesNearCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) Enter latitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) Enter longitude coordinates of the location defining the center of the search radius.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((optional, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Radius input for this Choreo. ((required, integer) Provide the radius (in meters, and centered on the latitude-longitude coordinates specified) for which search results will be returned.)
        */
        this.set_Radius = function(value) {
            this.setInput("Radius", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindPlacesNearCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindPlacesNearCoordinatesResultSet = function(resultStream) {
    FindPlacesNearCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindPlacesNearCoordinates, choreography.Choreography);
util.inherits(FindPlacesNearCoordinatesInputSet, choreography.InputSet);
util.inherits(FindPlacesNearCoordinatesResultSet, choreography.ResultSet);
exports.FindPlacesNearCoordinates = FindPlacesNearCoordinates;


/*
    FindRestaurantsByName
    Search for restaurants by name. 
*/


var FindRestaurantsByName = function(session) {
    /*
        Create a new instance of the FindRestaurantsByName Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Factual/FindRestaurantsByName"
    FindRestaurantsByName.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FindRestaurantsByNameResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FindRestaurantsByNameInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FindRestaurantsByName
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FindRestaurantsByNameInputSet = function() {
    FindRestaurantsByNameInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Factual (AKA the OAuth Consumer Key).)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APISecret input for this Choreo. ((optional, string) The API Secret provided by Factual (AKA the OAuth Consumer Secret).)
        */
        this.set_APISecret = function(value) {
            this.setInput("APISecret", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) A search string (i.e. Starbucks))
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FindRestaurantsByName Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FindRestaurantsByNameResultSet = function(resultStream) {
    FindRestaurantsByNameResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Factual.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FindRestaurantsByName, choreography.Choreography);
util.inherits(FindRestaurantsByNameInputSet, choreography.InputSet);
util.inherits(FindRestaurantsByNameResultSet, choreography.ResultSet);
exports.FindRestaurantsByName = FindRestaurantsByName;

