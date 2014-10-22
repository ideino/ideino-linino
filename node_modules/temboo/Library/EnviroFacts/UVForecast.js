
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DailyUVByCity
    Retrieves EPA daily Ultraviolet (UV) Index readings in a given city.
*/


var DailyUVByCity = function(session) {
    /*
        Create a new instance of the DailyUVByCity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/UVForecast/DailyUVByCity"
    DailyUVByCity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DailyUVByCityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DailyUVByCityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DailyUVByCity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DailyUVByCityInputSet = function() {
    DailyUVByCityInputSet.super_.call(this);
        /*
        Set the value of the City input for this Choreo. ((required, string) A valid City Name in the United States.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Results can be retrieved in either JSON or XML. Defaults to XML.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The abbreviation of the state that the city resides in.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DailyUVByCity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DailyUVByCityResultSet = function(resultStream) {
    DailyUVByCityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DailyUVByCity, choreography.Choreography);
util.inherits(DailyUVByCityInputSet, choreography.InputSet);
util.inherits(DailyUVByCityResultSet, choreography.ResultSet);
exports.DailyUVByCity = DailyUVByCity;


/*
    DailyUVByZipCode
    Retrieves EPA daily Ultraviolet (UV) Index readings in a given zip code. 
*/


var DailyUVByZipCode = function(session) {
    /*
        Create a new instance of the DailyUVByZipCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/UVForecast/DailyUVByZipCode"
    DailyUVByZipCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DailyUVByZipCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DailyUVByZipCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DailyUVByZipCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DailyUVByZipCodeInputSet = function() {
    DailyUVByZipCodeInputSet.super_.call(this);
        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Results can be retrieved in either JSON or XML. Defaults to XML.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) A valid United States Postal Service (USPS) ZIP Code or Postal Code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DailyUVByZipCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DailyUVByZipCodeResultSet = function(resultStream) {
    DailyUVByZipCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DailyUVByZipCode, choreography.Choreography);
util.inherits(DailyUVByZipCodeInputSet, choreography.InputSet);
util.inherits(DailyUVByZipCodeResultSet, choreography.ResultSet);
exports.DailyUVByZipCode = DailyUVByZipCode;


/*
    HourlyUVByCity
    Retrieves EPA hourly Ultraviolet (UV) Index readings in a given city. 
*/


var HourlyUVByCity = function(session) {
    /*
        Create a new instance of the HourlyUVByCity Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/UVForecast/HourlyUVByCity"
    HourlyUVByCity.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HourlyUVByCityResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HourlyUVByCityInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HourlyUVByCity
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HourlyUVByCityInputSet = function() {
    HourlyUVByCityInputSet.super_.call(this);
        /*
        Set the value of the City input for this Choreo. ((required, string) A valid City Name in the United States.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Results can be retrieved in either JSON or XML. Defaults to XML.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the State input for this Choreo. ((required, string) The abbreviation of the state that the city resides in.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HourlyUVByCity Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HourlyUVByCityResultSet = function(resultStream) {
    HourlyUVByCityResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HourlyUVByCity, choreography.Choreography);
util.inherits(HourlyUVByCityInputSet, choreography.InputSet);
util.inherits(HourlyUVByCityResultSet, choreography.ResultSet);
exports.HourlyUVByCity = HourlyUVByCity;


/*
    HourlyUVByZipCode
    Retrieves EPA hourly Ultraviolet (UV) Index readings in a given zip code.
*/


var HourlyUVByZipCode = function(session) {
    /*
        Create a new instance of the HourlyUVByZipCode Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/EnviroFacts/UVForecast/HourlyUVByZipCode"
    HourlyUVByZipCode.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HourlyUVByZipCodeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HourlyUVByZipCodeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the HourlyUVByZipCode
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HourlyUVByZipCodeInputSet = function() {
    HourlyUVByZipCodeInputSet.super_.call(this);
        /*
        Set the value of the ResponseType input for this Choreo. ((optional, string) Results can be retrieved in either JSON or XML. Defaults to XML.)
        */
        this.set_ResponseType = function(value) {
            this.setInput("ResponseType", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) A valid United States Postal Service (USPS) ZIP Code or Postal Code.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the HourlyUVByZipCode Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HourlyUVByZipCodeResultSet = function(resultStream) {
    HourlyUVByZipCodeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from EnviroFacts.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(HourlyUVByZipCode, choreography.Choreography);
util.inherits(HourlyUVByZipCodeInputSet, choreography.InputSet);
util.inherits(HourlyUVByZipCodeResultSet, choreography.ResultSet);
exports.HourlyUVByZipCode = HourlyUVByZipCode;

