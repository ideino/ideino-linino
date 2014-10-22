
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchByAddress
    Retrieve businesses within a specific range of a specified address.
*/


var SearchByAddress = function(session) {
    /*
        Create a new instance of the SearchByAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByAddress"
    SearchByAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByAddressInputSet = function() {
    SearchByAddressInputSet.super_.call(this);
        /*
        Set the value of the Address input for this Choreo. ((required, string) The street address of the business to search for.)
        */
        this.set_Address = function(value) {
            this.setInput("Address", value);
        }

        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "shoes" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Range input for this Choreo. ((required, integer) Narrow or expand a search by specifying a range in either feet, meters, miles, or kilometers, depending on the value of the Units input. The default is 200 feet, and the maximum is 2,500 square miles.)
        */
        this.set_Range = function(value) {
            this.setInput("Range", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

        /*
        Set the value of the Units input for this Choreo. ((required, string) Specify "feet" (the default), "meters", "miles", or "kilometers". Units apply to the Range input value.)
        */
        this.set_Units = function(value) {
            this.setInput("Units", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByAddressResultSet = function(resultStream) {
    SearchByAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByAddress, choreography.Choreography);
util.inherits(SearchByAddressInputSet, choreography.InputSet);
util.inherits(SearchByAddressResultSet, choreography.ResultSet);
exports.SearchByAddress = SearchByAddress;


/*
    SearchByBoundingBox
    Retrieve businesses in a geographic bounding box.
*/


var SearchByBoundingBox = function(session) {
    /*
        Create a new instance of the SearchByBoundingBox Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByBoundingBox"
    SearchByBoundingBox.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByBoundingBoxResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByBoundingBoxInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByBoundingBox
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByBoundingBoxInputSet = function() {
    SearchByBoundingBoxInputSet.super_.call(this);
        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "comic books" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the NortheastLatitude input for this Choreo. ((required, decimal) The northeastern latitude of the bounding box to search, such as "37.788022".)
        */
        this.set_NortheastLatitude = function(value) {
            this.setInput("NortheastLatitude", value);
        }

        /*
        Set the value of the NortheastLongitude input for this Choreo. ((required, decimal) The northeastern longitude of the bounding box to search, such as "-122.399797".)
        */
        this.set_NortheastLongitude = function(value) {
            this.setInput("NortheastLongitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SouthwestLatitude input for this Choreo. ((required, decimal) The southwestern latitude of the bounding box to search, such as "37.900000".)
        */
        this.set_SouthwestLatitude = function(value) {
            this.setInput("SouthwestLatitude", value);
        }

        /*
        Set the value of the SouthwestLongitude input for this Choreo. ((required, decimal) The southwestern longitude of the bounding box to search, such as "-122.500000".)
        */
        this.set_SouthwestLongitude = function(value) {
            this.setInput("SouthwestLongitude", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByBoundingBox Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByBoundingBoxResultSet = function(resultStream) {
    SearchByBoundingBoxResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByBoundingBox, choreography.Choreography);
util.inherits(SearchByBoundingBoxInputSet, choreography.InputSet);
util.inherits(SearchByBoundingBoxResultSet, choreography.ResultSet);
exports.SearchByBoundingBox = SearchByBoundingBox;


/*
    SearchByCategory
    Retrieve businesses in a specific location by business category.
*/


var SearchByCategory = function(session) {
    /*
        Create a new instance of the SearchByCategory Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByCategory"
    SearchByCategory.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByCategoryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByCategoryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByCategory
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByCategoryInputSet = function() {
    SearchByCategoryInputSet.super_.call(this);
        /*
        Set the value of the Category input for this Choreo. ((required, string) Yelp categories to search in, separated by commas but no spaces, such as "hiking,climbing". See the Yelp API docimentation for a list of categories.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of businesses to return. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Location input for this Choreo. ((required, string) An address, neighborhood, city, state, or ZIP code in which to search for the category.)
        */
        this.set_Location = function(value) {
            this.setInput("Location", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCategory Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCategoryResultSet = function(resultStream) {
    SearchByCategoryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByCategory, choreography.Choreography);
util.inherits(SearchByCategoryInputSet, choreography.InputSet);
util.inherits(SearchByCategoryResultSet, choreography.ResultSet);
exports.SearchByCategory = SearchByCategory;


/*
    SearchByCity
    Retrieve businesses by city.
*/


var SearchByCity = function(session) {
    /*
        Create a new instance of the SearchByCity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByCity"
    SearchByCity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByCityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByCityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByCity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByCityInputSet = function() {
    SearchByCityInputSet.super_.call(this);
        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "wine" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) The name of the city in which to search for businesses.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of businesses to return. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, multiline) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCityResultSet = function(resultStream) {
    SearchByCityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByCity, choreography.Choreography);
util.inherits(SearchByCityInputSet, choreography.InputSet);
util.inherits(SearchByCityResultSet, choreography.ResultSet);
exports.SearchByCity = SearchByCity;


/*
    SearchByCoordinates
    Retrieve businesses near a specified latitude and longitude.
*/


var SearchByCoordinates = function(session) {
    /*
        Create a new instance of the SearchByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByCoordinates"
    SearchByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByCoordinatesInputSet = function() {
    SearchByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the Accuracy input for this Choreo. ((optional, integer) Narrow or widen the search range in relation to the coordinates, such as "2" for state or "8" for street address.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "comic books" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude to search near, such as "37.788022".)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude to search near, such as "-122.399797".)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCoordinatesResultSet = function(resultStream) {
    SearchByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByCoordinates, choreography.Choreography);
util.inherits(SearchByCoordinatesInputSet, choreography.InputSet);
util.inherits(SearchByCoordinatesResultSet, choreography.ResultSet);
exports.SearchByCoordinates = SearchByCoordinates;


/*
    SearchByNeighborhood
    Retrieve businesses by neighborhood.
*/


var SearchByNeighborhood = function(session) {
    /*
        Create a new instance of the SearchByNeighborhood Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchByNeighborhood"
    SearchByNeighborhood.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByNeighborhoodResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByNeighborhoodInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByNeighborhood
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByNeighborhoodInputSet = function() {
    SearchByNeighborhoodInputSet.super_.call(this);
        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "wine" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The number of businesses to return. The default is 15.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Neighborhood input for this Choreo. ((required, string) The neighborhood in which to search for businesses. See the Yelp API documentation for a list of supported neighborhoods.)
        */
        this.set_Neighborhood = function(value) {
            this.setInput("Neighborhood", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByNeighborhood Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByNeighborhoodResultSet = function(resultStream) {
    SearchByNeighborhoodResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByNeighborhood, choreography.Choreography);
util.inherits(SearchByNeighborhoodInputSet, choreography.InputSet);
util.inherits(SearchByNeighborhoodResultSet, choreography.ResultSet);
exports.SearchByNeighborhood = SearchByNeighborhood;


/*
    SearchForBusiness
    Retrieves information for a given business id or name.
*/


var SearchForBusiness = function(session) {
    /*
        Create a new instance of the SearchForBusiness Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchForBusiness"
    SearchForBusiness.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchForBusinessResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchForBusinessInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchForBusiness
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchForBusinessInputSet = function() {
    SearchForBusinessInputSet.super_.call(this);
        /*
        Set the value of the BusinessId input for this Choreo. ((conditional, string) The business id to return results for. This can be found in the URL when you're on the business page on yelp.com (i.e. "yelp-san-francisco"). This is required unless using the BusinessName input.)
        */
        this.set_BusinessId = function(value) {
            this.setInput("BusinessId", value);
        }

        /*
        Set the value of the BusinessName input for this Choreo. ((conditional, string) A term to narrow the search, such as business name. This is required unless using the BusinessId input.)
        */
        this.set_BusinessName = function(value) {
            this.setInput("BusinessName", value);
        }

        /*
        Set the value of the City input for this Choreo. ((conditional, string) The name of the city in which to search for businesses. This is required unless providing the BusinessId.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, multiline) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchForBusiness Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchForBusinessResultSet = function(resultStream) {
    SearchForBusinessResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchForBusiness, choreography.Choreography);
util.inherits(SearchForBusinessInputSet, choreography.InputSet);
util.inherits(SearchForBusinessResultSet, choreography.ResultSet);
exports.SearchForBusiness = SearchForBusiness;


/*
    SearchForBusinessesWithDeals
    Only returns information for businesses with deals.
*/


var SearchForBusinessesWithDeals = function(session) {
    /*
        Create a new instance of the SearchForBusinessesWithDeals Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Yelp/SearchForBusinessesWithDeals"
    SearchForBusinessesWithDeals.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchForBusinessesWithDealsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchForBusinessesWithDealsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchForBusinessesWithDeals
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchForBusinessesWithDealsInputSet = function() {
    SearchForBusinessesWithDealsInputSet.super_.call(this);
        /*
        Set the value of the Accuracy input for this Choreo. ((optional, integer) Narrow or widen the search range in relation to the coordinates, such as "2" for state or "8" for street address.)
        */
        this.set_Accuracy = function(value) {
            this.setInput("Accuracy", value);
        }

        /*
        Set the value of the BusinessType input for this Choreo. ((optional, string) A term to narrow the search, such as "comic books" or "restaurants". Leave blank to search for all business types.)
        */
        this.set_BusinessType = function(value) {
            this.setInput("BusinessType", value);
        }

        /*
        Set the value of the Category input for this Choreo. ((optional, string) Yelp categories to search in, separated by commas but no spaces, such as "hiking,climbing". See the Yelp API docimentation for a list of categories.)
        */
        this.set_Category = function(value) {
            this.setInput("Category", value);
        }

        /*
        Set the value of the ConsumerKey input for this Choreo. ((required, string) The Consumer Key provided by Yelp.)
        */
        this.set_ConsumerKey = function(value) {
            this.setInput("ConsumerKey", value);
        }

        /*
        Set the value of the ConsumerSecret input for this Choreo. ((required, string) The Consumer Secret provided by Yelp.)
        */
        this.set_ConsumerSecret = function(value) {
            this.setInput("ConsumerSecret", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((conditional, decimal) The latitude to search near, such as "37.788022". Searching with either Location or Coordinates is required.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Location input for this Choreo. ((conditional, string) An address, neighborhood, city, state, or ZIP code in which to search for the category. Searching with either Location or Coordinates is required.)
        */
        this.set_Location = function(value) {
            this.setInput("Location", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((conditional, decimal) The longitude to search near, such as "-122.399797". Searching with either Location or Coordinates is required.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from Yelp, either XML or JSON (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TokenSecret input for this Choreo. ((required, string) The Token Secret provided by Yelp.)
        */
        this.set_TokenSecret = function(value) {
            this.setInput("TokenSecret", value);
        }

        /*
        Set the value of the Token input for this Choreo. ((required, string) The Token provided by Yelp.)
        */
        this.set_Token = function(value) {
            this.setInput("Token", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchForBusinessesWithDeals Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchForBusinessesWithDealsResultSet = function(resultStream) {
    SearchForBusinessesWithDealsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Yelp. Corresponds to the input value for ResponseFormat (defaults to JSON).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchForBusinessesWithDeals, choreography.Choreography);
util.inherits(SearchForBusinessesWithDealsInputSet, choreography.InputSet);
util.inherits(SearchForBusinessesWithDealsResultSet, choreography.ResultSet);
exports.SearchForBusinessesWithDeals = SearchForBusinessesWithDeals;

