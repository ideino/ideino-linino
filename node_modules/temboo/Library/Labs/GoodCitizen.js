
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Civic
    Retrieves a host of information about the district and representatives of a specified location.
*/


var Civic = function(session) {
    /*
        Create a new instance of the Civic Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GoodCitizen/Civic"
    Civic.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CivicResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CivicInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Civic
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CivicInputSet = function() {
    CivicInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((optional, json) The JSON dictionary for the Sulight Labs credentials required to operate this choreo. LittleSis credentials are optional. See docs for the format of this input.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate of your location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Set the number of records to return for the bills, votes, and relationships of each legislator. Defaults to 5.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate of your locaion.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Civic Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CivicResultSet = function(resultStream) {
    CivicResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from the Civic Choreo.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Civic, choreography.Choreography);
util.inherits(CivicInputSet, choreography.InputSet);
util.inherits(CivicResultSet, choreography.ResultSet);
exports.Civic = Civic;


/*
    EcoByCoordinates
    Returns a host of eco-conscious environmental information for a specified location based on Lattitude and Longitude inputs.
*/


var EcoByCoordinates = function(session) {
    /*
        Create a new instance of the EcoByCoordinates Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GoodCitizen/EcoByCoordinates"
    EcoByCoordinates.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EcoByCoordinatesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EcoByCoordinatesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EcoByCoordinates
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EcoByCoordinatesInputSet = function() {
    EcoByCoordinatesInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((optional, string) A JSON dictionary containing credentials for Genability. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Latitude input for this Choreo. ((required, decimal) The latitude coordinate for the user's current location.)
        */
        this.set_Latitude = function(value) {
            this.setInput("Latitude", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of facility records to search for in the Envirofacts database.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Longitude input for this Choreo. ((required, decimal) The longitude coordinate for the user's current location.)
        */
        this.set_Longitude = function(value) {
            this.setInput("Longitude", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EcoByCoordinates Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EcoByCoordinatesResultSet = function(resultStream) {
    EcoByCoordinatesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from the Eco Choreo.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EcoByCoordinates, choreography.Choreography);
util.inherits(EcoByCoordinatesInputSet, choreography.InputSet);
util.inherits(EcoByCoordinatesResultSet, choreography.ResultSet);
exports.EcoByCoordinates = EcoByCoordinates;


/*
    EcoByZip
    Returns a host of eco-conscious environmental information for a specified location based on zip code.
*/


var EcoByZip = function(session) {
    /*
        Create a new instance of the EcoByZip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Labs/GoodCitizen/EcoByZip"
    EcoByZip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EcoByZipResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EcoByZipInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EcoByZip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EcoByZipInputSet = function() {
    EcoByZipInputSet.super_.call(this);
        /*
        Set the value of the APICredentials input for this Choreo. ((optional, string) A JSON dictionary containing credentials for Genability. See Choreo documentation for formatting examples.)
        */
        this.set_APICredentials = function(value) {
            this.setInput("APICredentials", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) The number of facility records to search for in the Envirofacts database.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((required, integer) The zip code for the user's current location.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EcoByZip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EcoByZipResultSet = function(resultStream) {
    EcoByZipResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from the Eco Choreo.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EcoByZip, choreography.Choreography);
util.inherits(EcoByZipInputSet, choreography.InputSet);
util.inherits(EcoByZipResultSet, choreography.ResultSet);
exports.EcoByZip = EcoByZip;

