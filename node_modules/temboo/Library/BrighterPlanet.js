
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Automobile
    Returns greenhouse gas modeling for passenger vehicles operated over periods of time.
*/


var Automobile = function(session) {
    /*
        Create a new instance of the Automobile Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Automobile"
    Automobile.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AutomobileResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AutomobileInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Automobile
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AutomobileInputSet = function() {
    AutomobileInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Acquisition input for this Choreo. ((optional, string) Date automobile was acquired in YYYY-MM-DD format.)
        */
        this.set_Acquisition = function(value) {
            this.setInput("Acquisition", value);
        }

        /*
        Set the value of the AnnualDistance input for this Choreo. ((optional, decimal) Annual distance traveled in kilometres.)
        */
        this.set_AnnualDistance = function(value) {
            this.setInput("AnnualDistance", value);
        }

        /*
        Set the value of the AnnualFuelUse input for this Choreo. ((optional, decimal) Total fuel used in one year in litres.)
        */
        this.set_AnnualFuelUse = function(value) {
            this.setInput("AnnualFuelUse", value);
        }

        /*
        Set the value of the AutomobileFuel input for this Choreo. ((optional, string) Fuel used by automobile (e.g. regular gasoline).)
        */
        this.set_AutomobileFuel = function(value) {
            this.setInput("AutomobileFuel", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) ISO code of the country. Defaults to 3166.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the DailyDistance input for this Choreo. ((optional, decimal) Daily distance traveled on average in kilometres.)
        */
        this.set_DailyDistance = function(value) {
            this.setInput("DailyDistance", value);
        }

        /*
        Set the value of the DailyDuration input for this Choreo. ((optional, integer) Average amount of time used daily in seconds.)
        */
        this.set_DailyDuration = function(value) {
            this.setInput("DailyDuration", value);
        }

        /*
        Set the value of the FuelEfficiency input for this Choreo. ((optional, decimal) The automobile's fuel efficiency in kilometres per litre.)
        */
        this.set_FuelEfficiency = function(value) {
            this.setInput("FuelEfficiency", value);
        }

        /*
        Set the value of the FuelUse input for this Choreo. ((optional, decimal) Amount of fuel used in litres.)
        */
        this.set_FuelUse = function(value) {
            this.setInput("FuelUse", value);
        }

        /*
        Set the value of the Hybridity input for this Choreo. ((optional, boolean) Enter whether the automobile is a hybrid.)
        */
        this.set_Hybridity = function(value) {
            this.setInput("Hybridity", value);
        }

        /*
        Set the value of the Make input for this Choreo. ((optional, string) Automobile make (e.g. Honda).)
        */
        this.set_Make = function(value) {
            this.setInput("Make", value);
        }

        /*
        Set the value of the Model input for this Choreo. ((optional, string) Model of automobile (e.g. Civic, Accord).)
        */
        this.set_Model = function(value) {
            this.setInput("Model", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Retirement input for this Choreo. ((optional, string) Date automobile is retired from use in YYYY-MM-DD format.)
        */
        this.set_Retirement = function(value) {
            this.setInput("Retirement", value);
        }

        /*
        Set the value of the SizeClass input for this Choreo. ((optional, string) Automobile size class (e.g. midsize car, large van).)
        */
        this.set_SizeClass = function(value) {
            this.setInput("SizeClass", value);
        }

        /*
        Set the value of the Speed input for this Choreo. ((optional, decimal) Enter average speed when in use in kilometres per hour.)
        */
        this.set_Speed = function(value) {
            this.setInput("Speed", value);
        }

        /*
        Set the value of the Urbanity input for this Choreo. ((optional, boolean) Enter whether the trip is in an urban area.)
        */
        this.set_Urbanity = function(value) {
            this.setInput("Urbanity", value);
        }

        /*
        Set the value of the WeeklyDistance input for this Choreo. ((optional, integer) Enter average weekly distance automobile travels in kilometres.)
        */
        this.set_WeeklyDistance = function(value) {
            this.setInput("WeeklyDistance", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) Year that automobile was manufactured.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Automobile Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AutomobileResultSet = function(resultStream) {
    AutomobileResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Automobile, choreography.Choreography);
util.inherits(AutomobileInputSet, choreography.InputSet);
util.inherits(AutomobileResultSet, choreography.ResultSet);
exports.Automobile = Automobile;


/*
    AutomobileTrip
    Returns information about the carbon footprint of driving an automobile.
*/


var AutomobileTrip = function(session) {
    /*
        Create a new instance of the AutomobileTrip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/AutomobileTrip"
    AutomobileTrip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AutomobileTripResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AutomobileTripInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AutomobileTrip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AutomobileTripInputSet = function() {
    AutomobileTripInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AutomobileFuel input for this Choreo. ((optional, string) Fuel used by automobile (e.g. regular gasoline).)
        */
        this.set_AutomobileFuel = function(value) {
            this.setInput("AutomobileFuel", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) ISO code of the country. Defaults to 3166.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Automobile trip date in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((optional, string) Enter the name of a destination.)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, decimal) Distance traveled in kilometres.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, decimal) Duration of trip in total seconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the FuelEfficiency input for this Choreo. ((optional, decimal) The automobile's fuel efficiency in kilometres per litre.)
        */
        this.set_FuelEfficiency = function(value) {
            this.setInput("FuelEfficiency", value);
        }

        /*
        Set the value of the FuelUse input for this Choreo. ((optional, decimal) Amount of fuel used in litres.)
        */
        this.set_FuelUse = function(value) {
            this.setInput("FuelUse", value);
        }

        /*
        Set the value of the Hybridity input for this Choreo. ((optional, boolean) Enter whether the automobile is a hybrid.)
        */
        this.set_Hybridity = function(value) {
            this.setInput("Hybridity", value);
        }

        /*
        Set the value of the Make input for this Choreo. ((optional, string) Automobile make (e.g. Honda).)
        */
        this.set_Make = function(value) {
            this.setInput("Make", value);
        }

        /*
        Set the value of the Model input for this Choreo. ((optional, string) Model of automobile (e.g. Civic, Accord).)
        */
        this.set_Model = function(value) {
            this.setInput("Model", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SizeClass input for this Choreo. ((optional, string) Automobile size class (e.g. midsize car, large van).)
        */
        this.set_SizeClass = function(value) {
            this.setInput("SizeClass", value);
        }

        /*
        Set the value of the Speed input for this Choreo. ((optional, decimal) Enter the speed during the trip in kilometres per hour.)
        */
        this.set_Speed = function(value) {
            this.setInput("Speed", value);
        }

        /*
        Set the value of the Urbanity input for this Choreo. ((optional, boolean) Enter whether the trip is in an urban area.)
        */
        this.set_Urbanity = function(value) {
            this.setInput("Urbanity", value);
        }

        /*
        Set the value of the Year input for this Choreo. ((optional, integer) Year that automobile was manufactured.)
        */
        this.set_Year = function(value) {
            this.setInput("Year", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AutomobileTrip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AutomobileTripResultSet = function(resultStream) {
    AutomobileTripResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AutomobileTrip, choreography.Choreography);
util.inherits(AutomobileTripInputSet, choreography.InputSet);
util.inherits(AutomobileTripResultSet, choreography.ResultSet);
exports.AutomobileTrip = AutomobileTrip;


/*
    BusTrip
    Returns information about the carbon footprint of passenger bus travel.
*/


var BusTrip = function(session) {
    /*
        Create a new instance of the BusTrip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/BusTrip"
    BusTrip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BusTripResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BusTripInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the BusTrip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BusTripInputSet = function() {
    BusTripInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the BusClass input for this Choreo. ((optional, string) The bus class for the trip (i.e. city transit, regional coach).)
        */
        this.set_BusClass = function(value) {
            this.setInput("BusClass", value);
        }

        /*
        Set the value of the Compliance input for this Choreo. ((optional, string) Comply with one or more protocols: Greenhouse Gas Protocol Scope 3 (ghg_protocol_scope_3), and ISO 14064-1 (iso), and The Climate Registry (tcr).)
        */
        this.set_Compliance = function(value) {
            this.setInput("Compliance", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the bus trip in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, decimal) The distance of the bus trip in kilometres.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, decimal) The duration of the bus trip in seconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the BusTrip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BusTripResultSet = function(resultStream) {
    BusTripResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(BusTrip, choreography.Choreography);
util.inherits(BusTripInputSet, choreography.InputSet);
util.inherits(BusTripResultSet, choreography.ResultSet);
exports.BusTrip = BusTrip;


/*
    Diet
    Returns information about the carbon footprint of an individual's yearly food consumption.
*/


var Diet = function(session) {
    /*
        Create a new instance of the Diet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Diet"
    Diet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DietResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DietInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Diet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DietInputSet = function() {
    DietInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DietClass input for this Choreo. ((optional, string) Enter the type of diet. Acceptable inputs: standard, vegetarian, vegan.)
        */
        this.set_DietClass = function(value) {
            this.setInput("DietClass", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) End date od diet in YYYY-MM-DD format. Defaults to 2013-01-01 when none specified.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Size input for this Choreo. ((required, integer) Enter the number of calories consumed per day. See documentation below for a set of national averages for reference.)
        */
        this.set_Size = function(value) {
            this.setInput("Size", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) Start date of diet in YYYY-MM-DD format. Defaults to 2012-01-01 when none specified.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Diet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DietResultSet = function(resultStream) {
    DietResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Diet, choreography.Choreography);
util.inherits(DietInputSet, choreography.InputSet);
util.inherits(DietResultSet, choreography.ResultSet);
exports.Diet = Diet;


/*
    ElectricityUse
    Returns information about the carbon footprint of using electricity from the US public grid.
*/


var ElectricityUse = function(session) {
    /*
        Create a new instance of the ElectricityUse Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/ElectricityUse"
    ElectricityUse.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ElectricityUseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ElectricityUseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ElectricityUse
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ElectricityUseInputSet = function() {
    ElectricityUseInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) An iso_3166 country code.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the electricity use in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Energy input for this Choreo. ((optional, decimal) The amount of engery in kilowatt hours.)
        */
        this.set_Energy = function(value) {
            this.setInput("Energy", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) A postal abbreviation for the state to return electricity information for.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) The postal code for the area to retrieve electricity information for.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ElectricityUse Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ElectricityUseResultSet = function(resultStream) {
    ElectricityUseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ElectricityUse, choreography.Choreography);
util.inherits(ElectricityUseInputSet, choreography.InputSet);
util.inherits(ElectricityUseResultSet, choreography.ResultSet);
exports.ElectricityUse = ElectricityUse;


/*
    Flight
    Returns information about the carbon footprint of a passenger's air travel.
*/


var Flight = function(session) {
    /*
        Create a new instance of the Flight Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Flight"
    Flight.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FlightResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FlightInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Flight
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FlightInputSet = function() {
    FlightInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Aircraft input for this Choreo. ((optional, string) The ICAO code associated with the aircraft.)
        */
        this.set_Aircraft = function(value) {
            this.setInput("Aircraft", value);
        }

        /*
        Set the value of the Airline input for this Choreo. ((optional, string) The name of the airline used (i.e. Continental, Delta, etc).)
        */
        this.set_Airline = function(value) {
            this.setInput("Airline", value);
        }

        /*
        Set the value of the Compliance input for this Choreo. ((optional, string) Comply with one or more protocols:  Greenhouse Gas Protocol Scope 3 (ghg_protocol_scope_3), ISO 14064-1 (iso), and The Climate Registry (tcr).)
        */
        this.set_Compliance = function(value) {
            this.setInput("Compliance", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the trip in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the DestinationAirport input for this Choreo. ((optional, string) The airport code for the destination (i.e. LGA, JFK, etc.).)
        */
        this.set_DestinationAirport = function(value) {
            this.setInput("DestinationAirport", value);
        }

        /*
        Set the value of the DistanceClass input for this Choreo. ((optional, string) The distance class associated it the air travel (i.e. long haul, short haul).)
        */
        this.set_DistanceClass = function(value) {
            this.setInput("DistanceClass", value);
        }

        /*
        Set the value of the DistanceEstimate input for this Choreo. ((optional, decimal) A estimate of the distance of the travel in kilometres.)
        */
        this.set_DistanceEstimate = function(value) {
            this.setInput("DistanceEstimate", value);
        }

        /*
        Set the value of the Fuel input for this Choreo. ((optional, string) The type of fuel used in the aircraft (i.e. Aviation Gasoline, Biodiesel).)
        */
        this.set_Fuel = function(value) {
            this.setInput("Fuel", value);
        }

        /*
        Set the value of the OriginAirport input for this Choreo. ((optional, string) The airport code for the origin (i.e. LGA, JFK, etc.).)
        */
        this.set_OriginAirport = function(value) {
            this.setInput("OriginAirport", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Seats input for this Choreo. ((optional, integer) The number of seats.)
        */
        this.set_Seats = function(value) {
            this.setInput("Seats", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

        /*
        Set the value of the Trips input for this Choreo. ((optional, string) The number of trips to calculate information for.)
        */
        this.set_Trips = function(value) {
            this.setInput("Trips", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Flight Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FlightResultSet = function(resultStream) {
    FlightResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Flight, choreography.Choreography);
util.inherits(FlightInputSet, choreography.InputSet);
util.inherits(FlightResultSet, choreography.ResultSet);
exports.Flight = Flight;


/*
    FuelPurchase
    Returns information about the carbon emissions from using a wide variety of fuel types.
*/


var FuelPurchase = function(session) {
    /*
        Create a new instance of the FuelPurchase Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/FuelPurchase"
    FuelPurchase.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FuelPurchaseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FuelPurchaseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FuelPurchase
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FuelPurchaseInputSet = function() {
    FuelPurchaseInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cost input for this Choreo. ((optional, decimal) The cost of the fuel purchase.)
        */
        this.set_Cost = function(value) {
            this.setInput("Cost", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the fuel purchase in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the FuelType input for this Choreo. ((optional, string) The fuel type purchases (i.e. Asphalt and Road Oil, Aviation Gasoline, Commercial Coal, Commercial Natural Gas, or Motor Gasoline))
        */
        this.set_FuelType = function(value) {
            this.setInput("FuelType", value);
        }

        /*
        Set the value of the PADD input for this Choreo. ((optional, string) A code for the Petroleum administration for defense districts (1A, 1B, 1C, 2, or 3).)
        */
        this.set_PADD = function(value) {
            this.setInput("PADD", value);
        }

        /*
        Set the value of the Price input for this Choreo. ((optional, string) The price of the fuel.)
        */
        this.set_Price = function(value) {
            this.setInput("Price", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) A postal abbreviation for the state where the fuel was purchased.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

        /*
        Set the value of the Volume input for this Choreo. ((optional, decimal) The amount of fuel purchased.)
        */
        this.set_Volume = function(value) {
            this.setInput("Volume", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) The postal code for the area where the fuel was purchased.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FuelPurchase Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FuelPurchaseResultSet = function(resultStream) {
    FuelPurchaseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FuelPurchase, choreography.Choreography);
util.inherits(FuelPurchaseInputSet, choreography.InputSet);
util.inherits(FuelPurchaseResultSet, choreography.ResultSet);
exports.FuelPurchase = FuelPurchase;


/*
    GetReferenceData
    Retrieves a wide variety of reference data sets provided by Brighter Planet.
*/


var GetReferenceData = function(session) {
    /*
        Create a new instance of the GetReferenceData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/GetReferenceData"
    GetReferenceData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetReferenceDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetReferenceDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetReferenceData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetReferenceDataInputSet = function() {
    GetReferenceDataInputSet.super_.call(this);
        /*
        Set the value of the Resource input for this Choreo. ((required, string) The name of the reference data resource you want to retrieve (i.e. airports, airlines, etc). Resource names are formatted using plural, lowercase, and underscores (i.e. automobile_makes).)
        */
        this.set_Resource = function(value) {
            this.setInput("Resource", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The desired response format. Accepted formats are: csv, xml, and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetReferenceData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetReferenceDataResultSet = function(resultStream) {
    GetReferenceDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetReferenceData, choreography.Choreography);
util.inherits(GetReferenceDataInputSet, choreography.InputSet);
util.inherits(GetReferenceDataResultSet, choreography.ResultSet);
exports.GetReferenceData = GetReferenceData;


/*
    Lodging
    Returns the the footprint of a guest's hotel stay.
*/


var Lodging = function(session) {
    /*
        Create a new instance of the Lodging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Lodging"
    Lodging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LodgingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LodgingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Lodging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LodgingInputSet = function() {
    LodgingInputSet.super_.call(this);
        /*
        Set the value of the ACCoverage input for this Choreo. ((optional, decimal) A numeric value representing the AC coverage of the lodging establishment.)
        */
        this.set_ACCoverage = function(value) {
            this.setInput("ACCoverage", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the City input for this Choreo. ((optional, string) The city of the establishment.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the Compliance input for this Choreo. ((optional, string) Comply with one or more protocols:  Greenhouse Gas Protocol Scope 3 (ghg_protocol_scope_3), ISO 14064-1 (iso), and The Climate Registry (tcr).)
        */
        this.set_Compliance = function(value) {
            this.setInput("Compliance", value);
        }

        /*
        Set the value of the ConstructionYear input for this Choreo. ((optional, integer) The year that the establishment was constructed.)
        */
        this.set_ConstructionYear = function(value) {
            this.setInput("ConstructionYear", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) The ISO 3166 country code associated with the establishment.)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the stay at the establishment in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, integer) The amount of time spent at the establishment in seconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the Floors input for this Choreo. ((optional, integer) The number of floors at the establishment.)
        */
        this.set_Floors = function(value) {
            this.setInput("Floors", value);
        }

        /*
        Set the value of the HotTubs input for this Choreo. ((optional, integer) The number of hot tubs that the establishment has.)
        */
        this.set_HotTubs = function(value) {
            this.setInput("HotTubs", value);
        }

        /*
        Set the value of the IndoorPools input for this Choreo. ((optional, integer) The number of indoor pools that the establishment has.)
        */
        this.set_IndoorPools = function(value) {
            this.setInput("IndoorPools", value);
        }

        /*
        Set the value of the LodgingClass input for this Choreo. ((optional, string) The lodging class (i.e. Hotel, Inn, or Motel).)
        */
        this.set_LodgingClass = function(value) {
            this.setInput("LodgingClass", value);
        }

        /*
        Set the value of the OutdoorPools input for this Choreo. ((optional, integer) The number of outdoor pools that the establishment has.)
        */
        this.set_OutdoorPools = function(value) {
            this.setInput("OutdoorPools", value);
        }

        /*
        Set the value of the PropertyRooms input for this Choreo. ((optional, integer) The number of rooms on the property.)
        */
        this.set_PropertyRooms = function(value) {
            this.setInput("PropertyRooms", value);
        }

        /*
        Set the value of the Property input for this Choreo. ((optional, integer) A property id (or northstart_id) associated with the establishment.)
        */
        this.set_Property = function(value) {
            this.setInput("Property", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Rooms input for this Choreo. ((optional, integer) The number of rooms.)
        */
        this.set_Rooms = function(value) {
            this.setInput("Rooms", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) The postal abbreviation for the state that the establishment is in.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) The postal code associated with the establishment.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Lodging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LodgingResultSet = function(resultStream) {
    LodgingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Lodging, choreography.Choreography);
util.inherits(LodgingInputSet, choreography.InputSet);
util.inherits(LodgingResultSet, choreography.ResultSet);
exports.Lodging = Lodging;


/*
    Meeting
    Returns facility operations emissions analysis for corporate and cultural events.
*/


var Meeting = function(session) {
    /*
        Create a new instance of the Meeting Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Meeting"
    Meeting.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MeetingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MeetingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Meeting
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MeetingInputSet = function() {
    MeetingInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Area input for this Choreo. ((optional, integer) Area of event venue in square meters.)
        */
        this.set_Area = function(value) {
            this.setInput("Area", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) Date of event in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, integer) Event duration in total seconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the State input for this Choreo. ((optional, string) Two-letter postal abbreviation for the state in which the meeting takes place (e.g. NY).)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the Zip input for this Choreo. ((optional, integer) Five digit zip code in which the meeting takes place.)
        */
        this.set_Zip = function(value) {
            this.setInput("Zip", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Meeting Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MeetingResultSet = function(resultStream) {
    MeetingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Meeting, choreography.Choreography);
util.inherits(MeetingInputSet, choreography.InputSet);
util.inherits(MeetingResultSet, choreography.ResultSet);
exports.Meeting = Meeting;


/*
    Pet
    Returns lifecycle food production and veterinary care emissions modeling for domestic animals.
*/


var Pet = function(session) {
    /*
        Create a new instance of the Pet Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Pet"
    Pet.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PetResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PetInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Pet
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PetInputSet = function() {
    PetInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Acquisition input for this Choreo. ((optional, string) Enter date the pet was acquired.)
        */
        this.set_Acquisition = function(value) {
            this.setInput("Acquisition", value);
        }

        /*
        Set the value of the Breed input for this Choreo. ((optional, string) Enter a cat, dog, or horse breed.)
        */
        this.set_Breed = function(value) {
            this.setInput("Breed", value);
        }

        /*
        Set the value of the Gender input for this Choreo. ((optional, string) Enter cat, dog, or horse gender.)
        */
        this.set_Gender = function(value) {
            this.setInput("Gender", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Retirement input for this Choreo. ((optional, string) Enter date you no longer have the pet.)
        */
        this.set_Retirement = function(value) {
            this.setInput("Retirement", value);
        }

        /*
        Set the value of the Species input for this Choreo. ((optional, string) Enter the species type (e.g. bird, cat, dog, ferret, fish).)
        */
        this.set_Species = function(value) {
            this.setInput("Species", value);
        }

        /*
        Set the value of the Weight input for this Choreo. ((optional, decimal) Enter pet weight in kilograms.)
        */
        this.set_Weight = function(value) {
            this.setInput("Weight", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Pet Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PetResultSet = function(resultStream) {
    PetResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Pet, choreography.Choreography);
util.inherits(PetInputSet, choreography.InputSet);
util.inherits(PetResultSet, choreography.ResultSet);
exports.Pet = Pet;


/*
    Purchase
    Returns lifecycle emissions for any good or service. 
*/


var Purchase = function(session) {
    /*
        Create a new instance of the Purchase Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Purchase"
    Purchase.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PurchaseResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PurchaseInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Purchase
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PurchaseInputSet = function() {
    PurchaseInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Cost input for this Choreo. ((optional, decimal) The cost associated with the purchase.)
        */
        this.set_Cost = function(value) {
            this.setInput("Cost", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the purchase in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Industry input for this Choreo. ((optional, integer) An industry code (NAICS CODE) corresponding to the industry to return results for. For example, the id for Audio and Video Equipment Manufacturing is 334310.)
        */
        this.set_Industry = function(value) {
            this.setInput("Industry", value);
        }

        /*
        Set the value of the MerchantCategory input for this Choreo. ((optional, string) The id for a merchant category.)
        */
        this.set_MerchantCategory = function(value) {
            this.setInput("MerchantCategory", value);
        }

        /*
        Set the value of the Merchant input for this Choreo. ((optional, integer) An id corresponding to a merchant that you want to return data for.)
        */
        this.set_Merchant = function(value) {
            this.setInput("Merchant", value);
        }

        /*
        Set the value of the PurchaseAmount input for this Choreo. ((optional, decimal) The purchase amount.)
        */
        this.set_PurchaseAmount = function(value) {
            this.setInput("PurchaseAmount", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SicIndustry input for this Choreo. ((optional, integer) A Sic Industry id (i.e. 0111 is the code for Wheat, 0112 is the code for Rice, etc).)
        */
        this.set_SicIndustry = function(value) {
            this.setInput("SicIndustry", value);
        }

        /*
        Set the value of the Tax input for this Choreo. ((optional, decimal) The tax amount for the purchase.)
        */
        this.set_Tax = function(value) {
            this.setInput("Tax", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Purchase Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PurchaseResultSet = function(resultStream) {
    PurchaseResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Purchase, choreography.Choreography);
util.inherits(PurchaseInputSet, choreography.InputSet);
util.inherits(PurchaseResultSet, choreography.ResultSet);
exports.Purchase = Purchase;


/*
    RailTrip
    Returns information about the carbon footprint of a passenger's train travel.
*/


var RailTrip = function(session) {
    /*
        Create a new instance of the RailTrip Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/RailTrip"
    RailTrip.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RailTripResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RailTripInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RailTrip
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RailTripInputSet = function() {
    RailTripInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Compliance input for this Choreo. ((optional, string) Comply with one or more protocols:  Greenhouse Gas Protocol Scope 3 (ghg_protocol_scope_3), ISO 14064-1 (iso), and The Climate Registry (tcr).)
        */
        this.set_Compliance = function(value) {
            this.setInput("Compliance", value);
        }

        /*
        Set the value of the Country input for this Choreo. ((optional, string) A country code associated with the rail trip (in ISO 3166 format).)
        */
        this.set_Country = function(value) {
            this.setInput("Country", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, date) The date of the rail trip in YYYY-MM-DD format.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((optional, string) The destination of the rail trip.)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, decimal) The distance of the rail trip in kilometres.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Duration input for this Choreo. ((optional, decimal) The duration of the rail trip in seconds.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the Origin input for this Choreo. ((optional, string) The origin of the rail trip.)
        */
        this.set_Origin = function(value) {
            this.setInput("Origin", value);
        }

        /*
        Set the value of the RailClass input for this Choreo. ((optional, string) The rail class associated with the rail trip (i.e. commuter, heavy, highspeed, intercity, light).)
        */
        this.set_RailClass = function(value) {
            this.setInput("RailClass", value);
        }

        /*
        Set the value of the RailCompany input for this Choreo. ((optional, string) The rail company associated with the rail trip (i.e. AMTRAK).)
        */
        this.set_RailCompany = function(value) {
            this.setInput("RailCompany", value);
        }

        /*
        Set the value of the RailTraction input for this Choreo. ((optional, string) The rail traction associated with the rail trip (i.e. diesel, electric).)
        */
        this.set_RailTraction = function(value) {
            this.setInput("RailTraction", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RailTrip Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RailTripResultSet = function(resultStream) {
    RailTripResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RailTrip, choreography.Choreography);
util.inherits(RailTripInputSet, choreography.InputSet);
util.inherits(RailTripResultSet, choreography.ResultSet);
exports.RailTrip = RailTrip;


/*
    Residence
    Returns information about the annual carbon footprint of a home.
*/


var Residence = function(session) {
    /*
        Create a new instance of the Residence Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Residence"
    Residence.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ResidenceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ResidenceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Residence
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ResidenceInputSet = function() {
    ResidenceInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Acquisition input for this Choreo. ((optional, date) Date of acquisition in YYYY-MM-DD format.)
        */
        this.set_Acquisition = function(value) {
            this.setInput("Acquisition", value);
        }

        /*
        Set the value of the AirConditionerUse input for this Choreo. ((optional, string) The frequency of air conditioner use. Accepted values are: "Not used at all", "Turned on just about all summer", "Turned on only a few days or nights when really needed", or "Turned on quite a bit")
        */
        this.set_AirConditionerUse = function(value) {
            this.setInput("AirConditionerUse", value);
        }

        /*
        Set the value of the AnnualCoalVolumeEstimate input for this Choreo. ((optional, decimal) An estimate for amount of coal used annually.)
        */
        this.set_AnnualCoalVolumeEstimate = function(value) {
            this.setInput("AnnualCoalVolumeEstimate", value);
        }

        /*
        Set the value of the AnnualFuelOilCost input for this Choreo. ((optional, decimal) Annual cost of oil fuel in dollars.)
        */
        this.set_AnnualFuelOilCost = function(value) {
            this.setInput("AnnualFuelOilCost", value);
        }

        /*
        Set the value of the AnnualFuelOilVolumeEstimate input for this Choreo. ((optional, decimal) An estimate for the volume oil used annually.)
        */
        this.set_AnnualFuelOilVolumeEstimate = function(value) {
            this.setInput("AnnualFuelOilVolumeEstimate", value);
        }

        /*
        Set the value of the AnnualPropaneCost input for this Choreo. ((optional, decimal) The annual cost of propane annually in dollars.)
        */
        this.set_AnnualPropaneCost = function(value) {
            this.setInput("AnnualPropaneCost", value);
        }

        /*
        Set the value of the AnnualPropaneVolumeEstimate input for this Choreo. ((optional, decimal) An estimate of the amount of propane used annually in litres.)
        */
        this.set_AnnualPropaneVolumeEstimate = function(value) {
            this.setInput("AnnualPropaneVolumeEstimate", value);
        }

        /*
        Set the value of the AnnualWoodVolumeEstimate input for this Choreo. ((optional, decimal) An estimate of the amount of wood used for heating annually (in Joulses).)
        */
        this.set_AnnualWoodVolumeEstimate = function(value) {
            this.setInput("AnnualWoodVolumeEstimate", value);
        }

        /*
        Set the value of the Bathrooms input for this Choreo. ((optional, decimal) The amount of bathrooms in the residence.)
        */
        this.set_Bathrooms = function(value) {
            this.setInput("Bathrooms", value);
        }

        /*
        Set the value of the Bedrooms input for this Choreo. ((optional, decimal) The number of bedrooms in the residence.)
        */
        this.set_Bedrooms = function(value) {
            this.setInput("Bedrooms", value);
        }

        /*
        Set the value of the ClothesMachineUse input for this Choreo. ((optional, string) The number laundry loads per week. Valid values are: "1 load or less each week", "10 to 15 loads", "2 to 4 loads", "5 to 9 loads", "More than 15 loads")
        */
        this.set_ClothesMachineUse = function(value) {
            this.setInput("ClothesMachineUse", value);
        }

        /*
        Set the value of the ConstructionYear input for this Choreo. ((optional, integer) The year the residence was constructed.)
        */
        this.set_ConstructionYear = function(value) {
            this.setInput("ConstructionYear", value);
        }

        /*
        Set the value of the DishwasherUse input for this Choreo. ((optional, string) Number of times the dishwasher is used per week. Valid values: "2 or 3 times a week", "4 to 6 times a week", "At least once each day", "Less than once each week", "Once each week".)
        */
        this.set_DishwasherUse = function(value) {
            this.setInput("DishwasherUse", value);
        }

        /*
        Set the value of the Floors input for this Choreo. ((optional, integer) The number of floors.)
        */
        this.set_Floors = function(value) {
            this.setInput("Floors", value);
        }

        /*
        Set the value of the FloorspaceEstimate input for this Choreo. ((optional, decimal) An estimate of the amount of floorspace that the residence has.)
        */
        this.set_FloorspaceEstimate = function(value) {
            this.setInput("FloorspaceEstimate", value);
        }

        /*
        Set the value of the FreezerCount input for this Choreo. ((optional, integer) The number of freezers in the residence.)
        */
        this.set_FreezerCount = function(value) {
            this.setInput("FreezerCount", value);
        }

        /*
        Set the value of the FullBathrooms input for this Choreo. ((optional, integer) The number of full bathrooms in the residence.)
        */
        this.set_FullBathrooms = function(value) {
            this.setInput("FullBathrooms", value);
        }

        /*
        Set the value of the GreenElectricty input for this Choreo. ((optional, decimal) The amount green electricity that the residence uses.)
        */
        this.set_GreenElectricty = function(value) {
            this.setInput("GreenElectricty", value);
        }

        /*
        Set the value of the HalfBathrooms input for this Choreo. ((optional, integer) The number of half bathrooms in the residence.)
        */
        this.set_HalfBathrooms = function(value) {
            this.setInput("HalfBathrooms", value);
        }

        /*
        Set the value of the LightingEfficiency input for this Choreo. ((optional, decimal) A numeric value representing the lighting efficiency of the residence.)
        */
        this.set_LightingEfficiency = function(value) {
            this.setInput("LightingEfficiency", value);
        }

        /*
        Set the value of the MonthlyElectricityCost input for this Choreo. ((optional, decimal) The montly cost of electricity for the residence.)
        */
        this.set_MonthlyElectricityCost = function(value) {
            this.setInput("MonthlyElectricityCost", value);
        }

        /*
        Set the value of the MonthlyElectricityUseEstimate input for this Choreo. ((optional, decimal) An estimate for the amount of electricity used monthly in kilowatt hours.)
        */
        this.set_MonthlyElectricityUseEstimate = function(value) {
            this.setInput("MonthlyElectricityUseEstimate", value);
        }

        /*
        Set the value of the MonthlyNaturalGasCost input for this Choreo. ((optional, decimal) The monthly cost of natural gas for the residence.)
        */
        this.set_MonthlyNaturalGasCost = function(value) {
            this.setInput("MonthlyNaturalGasCost", value);
        }

        /*
        Set the value of the MonthlyNaturalGasVolumeEstimate input for this Choreo. ((optional, decimal) An estimate of the amount of natural gas used monthly.)
        */
        this.set_MonthlyNaturalGasVolumeEstimate = function(value) {
            this.setInput("MonthlyNaturalGasVolumeEstimate", value);
        }

        /*
        Set the value of the Occupation input for this Choreo. ((optional, decimal) Refers to the percentage of time a residence is occupied during a year. Defaults to 0.937.)
        */
        this.set_Occupation = function(value) {
            this.setInput("Occupation", value);
        }

        /*
        Set the value of the Ownership input for this Choreo. ((optional, boolean) Indicates whether the residence is owned or rented. Set to "true" if you own the residence.)
        */
        this.set_Ownership = function(value) {
            this.setInput("Ownership", value);
        }

        /*
        Set the value of the RefrigeratorCount input for this Choreo. ((optional, integer) The number of refrigerators in the residence.)
        */
        this.set_RefrigeratorCount = function(value) {
            this.setInput("RefrigeratorCount", value);
        }

        /*
        Set the value of the ResidentialClass input for this Choreo. ((optional, string) Valid values: "Apartment in a building with 5 or more units", "Apartment in a house or a building with 2-4 units", "Mobile home", "Single-family attached house", or "Single-family detached house".)
        */
        this.set_ResidentialClass = function(value) {
            this.setInput("ResidentialClass", value);
        }

        /*
        Set the value of the Residents input for this Choreo. ((optional, integer) The number of people living in the residence.)
        */
        this.set_Residents = function(value) {
            this.setInput("Residents", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Retirement input for this Choreo. ((optional, date) A date of retirement.)
        */
        this.set_Retirement = function(value) {
            this.setInput("Retirement", value);
        }

        /*
        Set the value of the Timeframe input for this Choreo. ((optional, string) A date range specified in the following format: 2008-01-01/2008-07-09)
        */
        this.set_Timeframe = function(value) {
            this.setInput("Timeframe", value);
        }

        /*
        Set the value of the Urbanity input for this Choreo. ((optional, string) Can be set to: City, Rural, Suburbs, or Town.)
        */
        this.set_Urbanity = function(value) {
            this.setInput("Urbanity", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((optional, string) The postal code of the residence.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Residence Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ResidenceResultSet = function(resultStream) {
    ResidenceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Residence, choreography.Choreography);
util.inherits(ResidenceInputSet, choreography.InputSet);
util.inherits(ResidenceResultSet, choreography.ResultSet);
exports.Residence = Residence;


/*
    Shipment
    Returns information about the carbon footprint of shipping packages.
*/


var Shipment = function(session) {
    /*
        Create a new instance of the Shipment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/BrighterPlanet/Shipment"
    Shipment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShipmentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShipmentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Shipment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShipmentInputSet = function() {
    ShipmentInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Brighter Planet.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Carrier input for this Choreo. ((optional, string) The carrier used for the shipment. Valid values are: FedEx, UPS, or USPS.)
        */
        this.set_Carrier = function(value) {
            this.setInput("Carrier", value);
        }

        /*
        Set the value of the DestinationZipCode input for this Choreo. ((optional, string) The postal code of the destination address.)
        */
        this.set_DestinationZipCode = function(value) {
            this.setInput("DestinationZipCode", value);
        }

        /*
        Set the value of the Destination input for this Choreo. ((optional, string) The destination of the shipment.)
        */
        this.set_Destination = function(value) {
            this.setInput("Destination", value);
        }

        /*
        Set the value of the Distance input for this Choreo. ((optional, decimal) The distance from the shipment origin to the shipment destination.)
        */
        this.set_Distance = function(value) {
            this.setInput("Distance", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, string) The mode or method of shipment. Valid values are: air, courier, or ground.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the OriginZipCode input for this Choreo. ((optional, string) The postal code of the origin address.)
        */
        this.set_OriginZipCode = function(value) {
            this.setInput("OriginZipCode", value);
        }

        /*
        Set the value of the Origin input for this Choreo. ((optional, string) The origin of the shipment.)
        */
        this.set_Origin = function(value) {
            this.setInput("Origin", value);
        }

        /*
        Set the value of the PackageCount input for this Choreo. ((optional, integer) The number of packages in the shipment.)
        */
        this.set_PackageCount = function(value) {
            this.setInput("PackageCount", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Specify your desired response format. Accepted values are xml and json (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Weight input for this Choreo. ((optional, decimal) The weight of the shipment in kilograms.)
        */
        this.set_Weight = function(value) {
            this.setInput("Weight", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Shipment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShipmentResultSet = function(resultStream) {
    ShipmentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Brighter Planet.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Shipment, choreography.Choreography);
util.inherits(ShipmentInputSet, choreography.InputSet);
util.inherits(ShipmentResultSet, choreography.ResultSet);
exports.Shipment = Shipment;

