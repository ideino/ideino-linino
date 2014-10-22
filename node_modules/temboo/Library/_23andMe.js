
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Ancestry
    Retrieves the ancestral breakdown for the user's profiles.
*/


var Ancestry = function(session) {
    /*
        Create a new instance of the Ancestry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/Ancestry"
    Ancestry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AncestryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AncestryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Ancestry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AncestryInputSet = function() {
    AncestryInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

        /*
        Set the value of the Threshold input for this Choreo. ((optional, string) A decimal ranging from 0.5 to 1.0. A higher threshold would increase the unassigned proportions, a lower would speculate (i.e. 0.51 is speculative, 0.75 is standard, and 0.90 is conservative). )
        */
        this.set_Threshold = function(value) {
            this.setInput("Threshold", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Ancestry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AncestryResultSet = function(resultStream) {
    AncestryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Ancestry, choreography.Choreography);
util.inherits(AncestryInputSet, choreography.InputSet);
util.inherits(AncestryResultSet, choreography.ResultSet);
exports.Ancestry = Ancestry;


/*
    Genomes
    Retrieves the entire profile's genome as a string of base pairs.
*/


var Genomes = function(session) {
    /*
        Create a new instance of the Genomes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/Genomes"
    Genomes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GenomesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GenomesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Genomes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GenomesInputSet = function() {
    GenomesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ProfileID input for this Choreo. ((required, string) The unique identifier for a profile to retrieve information for. This ID can be retrieved by running the User Choreo.)
        */
        this.set_ProfileID = function(value) {
            this.setInput("ProfileID", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Genomes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GenomesResultSet = function(resultStream) {
    GenomesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Genomes, choreography.Choreography);
util.inherits(GenomesInputSet, choreography.InputSet);
util.inherits(GenomesResultSet, choreography.ResultSet);
exports.Genomes = Genomes;


/*
    Genotype
    For each of the user's profiles, retrieves the base-pairs for given locations.
*/


var Genotype = function(session) {
    /*
        Create a new instance of the Genotype Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/Genotype"
    Genotype.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GenotypeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GenotypeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Genotype
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GenotypeInputSet = function() {
    GenotypeInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the Locations input for this Choreo. ((required, string) A space delimited list of SNPs (i.e. rs3094315 rs3737728).)
        */
        this.set_Locations = function(value) {
            this.setInput("Locations", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Genotype Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GenotypeResultSet = function(resultStream) {
    GenotypeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Genotype, choreography.Choreography);
util.inherits(GenotypeInputSet, choreography.InputSet);
util.inherits(GenotypeResultSet, choreography.ResultSet);
exports.Genotype = Genotype;


/*
    Haplogroups
    Retrieves maternal and paternal haplogroups for a user's profiles.
*/


var Haplogroups = function(session) {
    /*
        Create a new instance of the Haplogroups Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/Haplogroups"
    Haplogroups.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new HaplogroupsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new HaplogroupsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Haplogroups
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var HaplogroupsInputSet = function() {
    HaplogroupsInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Haplogroups Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var HaplogroupsResultSet = function(resultStream) {
    HaplogroupsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Haplogroups, choreography.Choreography);
util.inherits(HaplogroupsInputSet, choreography.InputSet);
util.inherits(HaplogroupsResultSet, choreography.ResultSet);
exports.Haplogroups = Haplogroups;


/*
    Names
    Retrieves first and last names for the user and user's profiles.
*/


var Names = function(session) {
    /*
        Create a new instance of the Names Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/Names"
    Names.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new NamesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new NamesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Names
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var NamesInputSet = function() {
    NamesInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Names Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var NamesResultSet = function(resultStream) {
    NamesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Names, choreography.Choreography);
util.inherits(NamesInputSet, choreography.InputSet);
util.inherits(NamesResultSet, choreography.ResultSet);
exports.Names = Names;


/*
    User
    Retrieves the user id, and a list of profiles including their ids and whether or not they are genotyped.
*/


var User = function(session) {
    /*
        Create a new instance of the User Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/23andMe/User"
    User.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UserResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UserInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the User
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UserInputSet = function() {
    UserInputSet.super_.call(this);
        /*
        Set the value of the AccessToken input for this Choreo. ((required, string) The Access Token retrieved after completing the OAuth2 process.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the TestMode input for this Choreo. ((optional, boolean) A boolean flag indicating that the request should be made to the "demo" 23andMe endpoint for testing. Set to 1 for test mode. Defaults to 0.)
        */
        this.set_TestMode = function(value) {
            this.setInput("TestMode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the User Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UserResultSet = function(resultStream) {
    UserResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from 23AndMe.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(User, choreography.Choreography);
util.inherits(UserInputSet, choreography.InputSet);
util.inherits(UserResultSet, choreography.ResultSet);
exports.User = User;

