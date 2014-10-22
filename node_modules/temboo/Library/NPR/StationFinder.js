
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    SearchByCallLetters
    Retrieves local NPR member stations based on uniquely identifying call letters.
*/


var SearchByCallLetters = function(session) {
    /*
        Create a new instance of the SearchByCallLetters Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StationFinder/SearchByCallLetters"
    SearchByCallLetters.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByCallLettersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByCallLettersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByCallLetters
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByCallLettersInputSet = function() {
    SearchByCallLettersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Band input for this Choreo. ((optional, string) Enter AM or FM.)
        */
        this.set_Band = function(value) {
            this.setInput("Band", value);
        }

        /*
        Set the value of the CallLetters input for this Choreo. ((required, string) Enter the unique identifier associated with a station.)
        */
        this.set_CallLetters = function(value) {
            this.setInput("CallLetters", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCallLetters Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCallLettersResultSet = function(resultStream) {
    SearchByCallLettersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByCallLetters, choreography.Choreography);
util.inherits(SearchByCallLettersInputSet, choreography.InputSet);
util.inherits(SearchByCallLettersResultSet, choreography.ResultSet);
exports.SearchByCallLetters = SearchByCallLetters;


/*
    SearchByCity
    Retrieves local NPR member stations based on zip code.
*/


var SearchByCity = function(session) {
    /*
        Create a new instance of the SearchByCity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StationFinder/SearchByCity"
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
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((required, string) Enter the city name. When searching by city, the state parameter must also be specified.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) Enter the state. The city parameter must also be specified.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByCity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByCityResultSet = function(resultStream) {
    SearchByCityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
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
    SearchByID
    Retrieves local NPR member stations based on their unique ID.
*/


var SearchByID = function(session) {
    /*
        Create a new instance of the SearchByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StationFinder/SearchByID"
    SearchByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByIDInputSet = function() {
    SearchByIDInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The unique ID that NPR asociates with the organization.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByIDResultSet = function(resultStream) {
    SearchByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByID, choreography.Choreography);
util.inherits(SearchByIDInputSet, choreography.InputSet);
util.inherits(SearchByIDResultSet, choreography.ResultSet);
exports.SearchByID = SearchByID;


/*
    SearchByLocation
    Retrieves local NPR member stations near the specified lattitude and longitude location coordinates.
*/


var SearchByLocation = function(session) {
    /*
        Create a new instance of the SearchByLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StationFinder/SearchByLocation"
    SearchByLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByLocationInputSet = function() {
    SearchByLocationInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Lattitude input for this Choreo. ((required, decimal) The lattitude point of a station's location. Must be used together with the longitude parameter. This must be a positive value.)
        */
        this.set_Lattitude = function(value) {
            this.setInput("Lattitude", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude point of a station's location. Must be used together with the lattitude parameter. This must be a positive value.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByLocationResultSet = function(resultStream) {
    SearchByLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByLocation, choreography.Choreography);
util.inherits(SearchByLocationInputSet, choreography.InputSet);
util.inherits(SearchByLocationResultSet, choreography.ResultSet);
exports.SearchByLocation = SearchByLocation;


/*
    SearchByZipCode
    Retrieves local NPR member stations based on zip code.
*/


var SearchByZipCode = function(session) {
    /*
        Create a new instance of the SearchByZipCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StationFinder/SearchByZipCode"
    SearchByZipCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchByZipCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchByZipCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SearchByZipCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchByZipCodeInputSet = function() {
    SearchByZipCodeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, string) Enter a five-digit zip code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SearchByZipCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchByZipCodeResultSet = function(resultStream) {
    SearchByZipCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) )
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SearchByZipCode, choreography.Choreography);
util.inherits(SearchByZipCodeInputSet, choreography.InputSet);
util.inherits(SearchByZipCodeResultSet, choreography.ResultSet);
exports.SearchByZipCode = SearchByZipCode;

