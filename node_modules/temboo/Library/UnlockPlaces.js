
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ClosestMatchSearch
    Searches for the closest match for a place.
*/


var ClosestMatchSearch = function(session) {
    /*
        Create a new instance of the ClosestMatchSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/ClosestMatchSearch"
    ClosestMatchSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ClosestMatchSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ClosestMatchSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ClosestMatchSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ClosestMatchSearchInputSet = function() {
    ClosestMatchSearchInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) One or more names of places to search for (separated by commas).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ClosestMatchSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ClosestMatchSearchResultSet = function(resultStream) {
    ClosestMatchSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ClosestMatchSearch, choreography.Choreography);
util.inherits(ClosestMatchSearchInputSet, choreography.InputSet);
util.inherits(ClosestMatchSearchResultSet, choreography.ResultSet);
exports.ClosestMatchSearch = ClosestMatchSearch;


/*
    FeatureLookup
    Searches for features by ID.
*/


var FeatureLookup = function(session) {
    /*
        Create a new instance of the FeatureLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/FeatureLookup"
    FeatureLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FeatureLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FeatureLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FeatureLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FeatureLookupInputSet = function() {
    FeatureLookupInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, integer) The ID of the feature you want to search for. Note that this identifier is returned in the <id> response element of the NameAndFeatureSearch Choreo.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FeatureLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FeatureLookupResultSet = function(resultStream) {
    FeatureLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FeatureLookup, choreography.Choreography);
util.inherits(FeatureLookupInputSet, choreography.InputSet);
util.inherits(FeatureLookupResultSet, choreography.ResultSet);
exports.FeatureLookup = FeatureLookup;


/*
    FootprintLookup
    Retrieves the footprint for a specified place identifier.
*/


var FootprintLookup = function(session) {
    /*
        Create a new instance of the FootprintLookup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/FootprintLookup"
    FootprintLookup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new FootprintLookupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new FootprintLookupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the FootprintLookup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var FootprintLookupInputSet = function() {
    FootprintLookupInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the Identifier input for this Choreo. ((required, integer) The place identifier that you want to use for the search. Note that this identifier is returned in the <geometryRef> response element of other Unlock Places search Choreos.)
        */
        this.set_Identifier = function(value) {
            this.setInput("Identifier", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the FootprintLookup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var FootprintLookupResultSet = function(resultStream) {
    FootprintLookupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(FootprintLookup, choreography.Choreography);
util.inherits(FootprintLookupInputSet, choreography.InputSet);
util.inherits(FootprintLookupResultSet, choreography.ResultSet);
exports.FootprintLookup = FootprintLookup;


/*
    NameAndFeatureSearch
    Searches for names of places with a specified feature type.
*/


var NameAndFeatureSearch = function(session) {
    /*
        Create a new instance of the NameAndFeatureSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/NameAndFeatureSearch"
    NameAndFeatureSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NameAndFeatureSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NameAndFeatureSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NameAndFeatureSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NameAndFeatureSearchInputSet = function() {
    NameAndFeatureSearchInputSet.super_.call(this);
        /*
        Set the value of the FeatureType input for this Choreo. ((required, string) The feature type that the place is (i.e. "Cities"). See http://unlock.edina.ac.uk/ws/supportedFeatureTypes?format=txt for a complete list of supported Feature Types.)
        */
        this.set_FeatureType = function(value) {
            this.setInput("FeatureType", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) One or more names of places to search for (separated by commas).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the NameAndFeatureSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NameAndFeatureSearchResultSet = function(resultStream) {
    NameAndFeatureSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NameAndFeatureSearch, choreography.Choreography);
util.inherits(NameAndFeatureSearchInputSet, choreography.InputSet);
util.inherits(NameAndFeatureSearchResultSet, choreography.ResultSet);
exports.NameAndFeatureSearch = NameAndFeatureSearch;


/*
    NameSearch
    Basic query for a search by name, which will return a list of matching features for a specified place.
*/


var NameSearch = function(session) {
    /*
        Create a new instance of the NameSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/NameSearch"
    NameSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NameSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NameSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the NameSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NameSearchInputSet = function() {
    NameSearchInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) One or more names of places to search for (separated by commas).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the NameSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NameSearchResultSet = function(resultStream) {
    NameSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(NameSearch, choreography.Choreography);
util.inherits(NameSearchInputSet, choreography.InputSet);
util.inherits(NameSearchResultSet, choreography.ResultSet);
exports.NameSearch = NameSearch;


/*
    PostCodeSearch
    Searches for places by postal code.
*/


var PostCodeSearch = function(session) {
    /*
        Create a new instance of the PostCodeSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/PostCodeSearch"
    PostCodeSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PostCodeSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PostCodeSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PostCodeSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PostCodeSearchInputSet = function() {
    PostCodeSearchInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the PostCode input for this Choreo. ((required, string) A UK postal code to use for the search.)
        */
        this.set_PostCode = function(value) {
            this.setInput("PostCode", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PostCodeSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PostCodeSearchResultSet = function(resultStream) {
    PostCodeSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PostCodeSearch, choreography.Choreography);
util.inherits(PostCodeSearchInputSet, choreography.InputSet);
util.inherits(PostCodeSearchResultSet, choreography.ResultSet);
exports.PostCodeSearch = PostCodeSearch;


/*
    SpacialFeaturesSearch
    Searches for feature types within a specified bounding box.
*/


var SpacialFeaturesSearch = function(session) {
    /*
        Create a new instance of the SpacialFeaturesSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/SpacialFeaturesSearch"
    SpacialFeaturesSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SpacialFeaturesSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SpacialFeaturesSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SpacialFeaturesSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SpacialFeaturesSearchInputSet = function() {
    SpacialFeaturesSearchInputSet.super_.call(this);
        /*
        Set the value of the FeatureType input for this Choreo. ((string) The feature type that the place is (i.e. "Cities"). See http://unlock.edina.ac.uk/ws/supportedFeatureTypes?format=txt for a complete list of supported Feature Types.)
        */
        this.set_FeatureType = function(value) {
            this.setInput("FeatureType", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxLatitude input for this Choreo. ((decimal) The maximum latitude point of a bounding box.)
        */
        this.set_MaxLatitude = function(value) {
            this.setInput("MaxLatitude", value);
        }

        /*
        Set the value of the MaxLongitude input for this Choreo. ((decimal) The maximum longitude point of a bounding box.)
        */
        this.set_MaxLongitude = function(value) {
            this.setInput("MaxLongitude", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the MinLatitude input for this Choreo. ((decimal) The minimum latitude point of a bounding box.)
        */
        this.set_MinLatitude = function(value) {
            this.setInput("MinLatitude", value);
        }

        /*
        Set the value of the MinLongitude input for this Choreo. ((decimal) The minimum longitude point of a bounding box.)
        */
        this.set_MinLongitude = function(value) {
            this.setInput("MinLongitude", value);
        }

        /*
        Set the value of the Operator input for this Choreo. (Valid values are: "within" and "intersect". The results will therefore be entirely within, or overlapping with (intersecting), the bounding box. Defaults to "within".)
        */
        this.set_Operator = function(value) {
            this.setInput("Operator", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SpacialFeaturesSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SpacialFeaturesSearchResultSet = function(resultStream) {
    SpacialFeaturesSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SpacialFeaturesSearch, choreography.Choreography);
util.inherits(SpacialFeaturesSearchInputSet, choreography.InputSet);
util.inherits(SpacialFeaturesSearchResultSet, choreography.ResultSet);
exports.SpacialFeaturesSearch = SpacialFeaturesSearch;


/*
    SpacialNameSearch
    Searches for names of places within a specified bounding box.
*/


var SpacialNameSearch = function(session) {
    /*
        Create a new instance of the SpacialNameSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/SpacialNameSearch"
    SpacialNameSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SpacialNameSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SpacialNameSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SpacialNameSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SpacialNameSearchInputSet = function() {
    SpacialNameSearchInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxLatitude input for this Choreo. ((required, decimal) The maximum latitude point of a bounding box.)
        */
        this.set_MaxLatitude = function(value) {
            this.setInput("MaxLatitude", value);
        }

        /*
        Set the value of the MaxLongitude input for this Choreo. ((required, decimal) The maximum longitude point of a bounding box.)
        */
        this.set_MaxLongitude = function(value) {
            this.setInput("MaxLongitude", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the MinLatitude input for this Choreo. ((required, decimal) The minimum latitude point of a bounding box.)
        */
        this.set_MinLatitude = function(value) {
            this.setInput("MinLatitude", value);
        }

        /*
        Set the value of the MinLongitude input for this Choreo. ((required, decimal) The minimum longitude point of a bounding box.)
        */
        this.set_MinLongitude = function(value) {
            this.setInput("MinLongitude", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) One or more names of places to search for (separated by commas).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Operator input for this Choreo. ((optional, any) Valid values are: "within" and "intersect". The results will therefore be entirely within, or overlapping with (intersecting), the bounding box. Defaults to "within".)
        */
        this.set_Operator = function(value) {
            this.setInput("Operator", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SpacialNameSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SpacialNameSearchResultSet = function(resultStream) {
    SpacialNameSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SpacialNameSearch, choreography.Choreography);
util.inherits(SpacialNameSearchInputSet, choreography.InputSet);
util.inherits(SpacialNameSearchResultSet, choreography.ResultSet);
exports.SpacialNameSearch = SpacialNameSearch;


/*
    SupportedFeatureTypes
    Retrieves a list of supported feature types that can be used in searches.
*/


var SupportedFeatureTypes = function(session) {
    /*
        Create a new instance of the SupportedFeatureTypes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/SupportedFeatureTypes"
    SupportedFeatureTypes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SupportedFeatureTypesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SupportedFeatureTypesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the SupportedFeatureTypes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SupportedFeatureTypesInputSet = function() {
    SupportedFeatureTypesInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the SupportedFeatureTypes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SupportedFeatureTypesResultSet = function(resultStream) {
    SupportedFeatureTypesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(SupportedFeatureTypes, choreography.Choreography);
util.inherits(SupportedFeatureTypesInputSet, choreography.InputSet);
util.inherits(SupportedFeatureTypesResultSet, choreography.ResultSet);
exports.SupportedFeatureTypes = SupportedFeatureTypes;


/*
    UniqueNameSearch
    Search for the specified unique name, returning a single result per feature.
*/


var UniqueNameSearch = function(session) {
    /*
        Create a new instance of the UniqueNameSearch Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/UnlockPlaces/UniqueNameSearch"
    UniqueNameSearch.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UniqueNameSearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UniqueNameSearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UniqueNameSearch
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UniqueNameSearchInputSet = function() {
    UniqueNameSearchInputSet.super_.call(this);
        /*
        Set the value of the Format input for this Choreo. ((optional, string) The format of the place search results. One of xml, kml, json, georss or txt. Defaults to "xml".)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the Gazetteer input for this Choreo. ((optional, string) The place-name source to take locations from. The options are geonames, os, naturalearth or unlock which combines all the previous. Defaults to "unlock".)
        */
        this.set_Gazetteer = function(value) {
            this.setInput("Gazetteer", value);
        }

        /*
        Set the value of the MaxRows input for this Choreo. ((optional, integer) The maximum number of results to return. Defaults to 20. Cannot exceed 1000.)
        */
        this.set_MaxRows = function(value) {
            this.setInput("MaxRows", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) One or more names of places to search for (separated by commas).)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the StartRow input for this Choreo. ((optional, integer) The row to start results display from. Defaults to 1.)
        */
        this.set_StartRow = function(value) {
            this.setInput("StartRow", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UniqueNameSearch Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UniqueNameSearchResultSet = function(resultStream) {
    UniqueNameSearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Unlock. Defaults to XML based on the format input parameter.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UniqueNameSearch, choreography.Choreography);
util.inherits(UniqueNameSearchInputSet, choreography.InputSet);
util.inherits(UniqueNameSearchResultSet, choreography.ResultSet);
exports.UniqueNameSearch = UniqueNameSearch;

