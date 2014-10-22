
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Bios
    Retrieves a list of NPR personalities and corresponding IDs. Also used to look up the IDs of specific NPR personalities by specifying them as an optional parameter.
*/


var Bios = function(session) {
    /*
        Create a new instance of the Bios Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Bios"
    Bios.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BiosResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BiosInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Bios
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BiosInputSet = function() {
    BiosInputSet.super_.call(this);
        /*
        Set the value of the Personality input for this Choreo. ((optional, string) The specific name or an NPR personality to return. Multiple names can be specified separated by commas (i.e. Andrei Codrescu,Allison Keyes). Personality IDs are returned when this input is used.)
        */
        this.set_Personality = function(value) {
            this.setInput("Personality", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Personality, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Bios Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BiosResultSet = function(resultStream) {
    BiosResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the personality specified. This is only returned when the Personality input is specified. When personalities are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Bios, choreography.Choreography);
util.inherits(BiosInputSet, choreography.InputSet);
util.inherits(BiosResultSet, choreography.ResultSet);
exports.Bios = Bios;


/*
    Blogs
    Retrieves a list of NPR blogs and corresponding IDs. Also used to look up the IDs of specific NPR blog by specifying those as an optional parameter.
*/


var Blogs = function(session) {
    /*
        Create a new instance of the Blogs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Blogs"
    Blogs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new BlogsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new BlogsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Blogs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var BlogsInputSet = function() {
    BlogsInputSet.super_.call(this);
        /*
        Set the value of the Blog input for this Choreo. ((optional, string) The specific blog title to return. Multiple blog titles can be specified separated by commas (i.e. Soapbox,Planet Money). Blog IDs are returned when this input is used.)
        */
        this.set_Blog = function(value) {
            this.setInput("Blog", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Blog, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Blogs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var BlogsResultSet = function(resultStream) {
    BlogsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the blog. This is only returned when the Blog input is specified. When multiple blogs are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
}

util.inherits(Blogs, choreography.Choreography);
util.inherits(BlogsInputSet, choreography.InputSet);
util.inherits(BlogsResultSet, choreography.ResultSet);
exports.Blogs = Blogs;


/*
    Columns
    Retrieves a list of NPR column titles and corresponding IDs. Also used to look up the IDs of specific NPR columns by specifying the title as an optional parameter.
*/


var Columns = function(session) {
    /*
        Create a new instance of the Columns Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Columns"
    Columns.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ColumnsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ColumnsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Columns
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ColumnsInputSet = function() {
    ColumnsInputSet.super_.call(this);
        /*
        Set the value of the Column input for this Choreo. ((optional, string) The specific column title to return. Multiple column titles can be specified separated by commas (i.e. Book Reviews,My Guilty Pleasure). Column IDs are returned when this input is used.)
        */
        this.set_Column = function(value) {
            this.setInput("Column", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Column, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Columns Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ColumnsResultSet = function(resultStream) {
    ColumnsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the column. This is only returned when the Column input is specified. When columns are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
}

util.inherits(Columns, choreography.Choreography);
util.inherits(ColumnsInputSet, choreography.InputSet);
util.inherits(ColumnsResultSet, choreography.ResultSet);
exports.Columns = Columns;


/*
    GetListByID
    Retrieves a list of NPR categories from a specified list type ID.
*/


var GetListByID = function(session) {
    /*
        Create a new instance of the GetListByID Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/GetListByID"
    GetListByID.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListByIDResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListByIDInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListByID
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListByIDInputSet = function() {
    GetListByIDInputSet.super_.call(this);
        /*
        Set the value of the ChildrenOf input for this Choreo. ((optional, integer) Returns only items which are assigned to the given topic ID. For example, if Id=3006 and ChildrenOf=1008 only recent series which are assigned to "Arts & Life" are returned.)
        */
        this.set_ChildrenOf = function(value) {
            this.setInput("ChildrenOf", value);
        }

        /*
        Set the value of the HideChildren input for this Choreo. ((optional, boolean) If set to "1", returns only topics which are not subtopics of another topic.)
        */
        this.set_HideChildren = function(value) {
            this.setInput("HideChildren", value);
        }

        /*
        Set the value of the Id input for this Choreo. ((required, integer) The id of the list type you want to retrieve. For example, the list type id for Music Genres is 3218).)
        */
        this.set_Id = function(value) {
            this.setInput("Id", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetListByID Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListByIDResultSet = function(resultStream) {
    GetListByIDResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListByID, choreography.Choreography);
util.inherits(GetListByIDInputSet, choreography.InputSet);
util.inherits(GetListByIDResultSet, choreography.ResultSet);
exports.GetListByID = GetListByID;


/*
    MusicArtists
    Retrieves a list of NPR music artists and corresponding IDs. Also used to look up the IDs of specific NPR music artists by specifying them as an optional parameter.
*/


var MusicArtists = function(session) {
    /*
        Create a new instance of the MusicArtists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/MusicArtists"
    MusicArtists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MusicArtistsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MusicArtistsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MusicArtists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MusicArtistsInputSet = function() {
    MusicArtistsInputSet.super_.call(this);
        /*
        Set the value of the MusicArtist input for this Choreo. ((optional, string) The specific name or an NPR music artist to return. Multiple names can be specified separated by commas (i.e. Thom Yorke,Yo La Tengo). Music artist IDs are returned when this input is used.)
        */
        this.set_MusicArtist = function(value) {
            this.setInput("MusicArtist", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying MusicArtist, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MusicArtists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MusicArtistsResultSet = function(resultStream) {
    MusicArtistsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the music artist. This is only returned when the MusicArtist input is specified. When multiple artist names are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
}

util.inherits(MusicArtists, choreography.Choreography);
util.inherits(MusicArtistsInputSet, choreography.InputSet);
util.inherits(MusicArtistsResultSet, choreography.ResultSet);
exports.MusicArtists = MusicArtists;


/*
    MusicGenres
    Retrieves a list of NPR music genres and corresponding IDs. Also used to look up the IDs of specific NPR music genres by specifying those as an optional parameter.
*/


var MusicGenres = function(session) {
    /*
        Create a new instance of the MusicGenres Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/MusicGenres"
    MusicGenres.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MusicGenresResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MusicGenresInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MusicGenres
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MusicGenresInputSet = function() {
    MusicGenresInputSet.super_.call(this);
        /*
        Set the value of the MusicGenre input for this Choreo. ((optional, string) The specific music genre title to return. Multiple genre titles can be specified separated by commas (i.e. Blues,Classical). Genre IDs are returned when this input is used.)
        */
        this.set_MusicGenre = function(value) {
            this.setInput("MusicGenre", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying MusicGenre, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MusicGenres Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MusicGenresResultSet = function(resultStream) {
    MusicGenresResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the music genre. This is only returned when the MusicGenre input is specified. When multiple genres are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
}

util.inherits(MusicGenres, choreography.Choreography);
util.inherits(MusicGenresInputSet, choreography.InputSet);
util.inherits(MusicGenresResultSet, choreography.ResultSet);
exports.MusicGenres = MusicGenres;


/*
    Programs
    Retrieves a list of NPR programs and corresponding IDs. Also used to look up the IDs of specific NPR programs by specifying them as an optional parameter.
*/


var Programs = function(session) {
    /*
        Create a new instance of the Programs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Programs"
    Programs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ProgramsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ProgramsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Programs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ProgramsInputSet = function() {
    ProgramsInputSet.super_.call(this);
        /*
        Set the value of the Program input for this Choreo. ((optional, string) The specific program title to return. Multiple prorgam titles can be specified separated by commas (i.e. All Things Considered,Tell Me More). Program IDs are returned when this input is used.)
        */
        this.set_Program = function(value) {
            this.setInput("Program", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Program, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Programs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ProgramsResultSet = function(resultStream) {
    ProgramsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the program. This is only returned when the Program input is specified. When multiple programs are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Programs, choreography.Choreography);
util.inherits(ProgramsInputSet, choreography.InputSet);
util.inherits(ProgramsResultSet, choreography.ResultSet);
exports.Programs = Programs;


/*
    Query
    Queries the Story API for stories across all NPR media, including audio, text, images, and web-only content.
*/


var Query = function(session) {
    /*
        Create a new instance of the Query Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Query"
    Query.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new QueryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new QueryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Query
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var QueryInputSet = function() {
    QueryInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, multiline) The API Key provided by NPR.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DateType input for this Choreo. ((optional, string) Controls the meaning of StartDate and EndDate. Values can be story or correction.)
        */
        this.set_DateType = function(value) {
            this.setInput("DateType", value);
        }

        /*
        Set the value of the Date input for this Choreo. ((optional, string) The exact date for which stories will be returned. Format: YYYY-MM-DD The special value current is also allowed. Cannot be used with StartDate or EndDate.)
        */
        this.set_Date = function(value) {
            this.setInput("Date", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((optional, string) The end date for which stories will be returned. Format: YYYY-MM-DD Can be used with StartDate to search a range. Cannot be used with Date. The meaning of this parameter can be modified with DateType.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Comma-delimited list of fields to be returned in the output for the results. List of fields can be made up of selectable fields or compilation fields. Defaults to all available fields.)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the IDBoolean input for this Choreo. ((optional, string) Describes how IDs are searched. Allowed values: and, or, union.)
        */
        this.set_IDBoolean = function(value) {
            this.setInput("IDBoolean", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((optional, string) Comma-delimited list of ID numbers corresponding to topics, music genres, programs, blogs, bios, music artists, and series.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the NumResults input for this Choreo. ((optional, integer) The number of stories to be returned up to 20 maximum.)
        */
        this.set_NumResults = function(value) {
            this.setInput("NumResults", value);
        }

        /*
        Set the value of the OrgID input for this Choreo. ((optional, string) Comma-delimited list of ID numbers of local stations.)
        */
        this.set_OrgID = function(value) {
            this.setInput("OrgID", value);
        }

        /*
        Set the value of the RequiredAssets input for this Choreo. ((optional, string) Comma-delimited list that limits the resulting set to contain only stories with a particular type of asset. Allowed values: audio, image, text, and correction.)
        */
        this.set_RequiredAssets = function(value) {
            this.setInput("RequiredAssets", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Enter output format. Values accepted: NPRML, RSS, MediaRSS, Podcast, ATOM, JSON, HTML WIdget, Javascript Widget. Default is JSON.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SearchTerm input for this Choreo. ((optional, string) Term to search in NPR's search engine. Can be used with SearchType to specify which fields should be searched.)
        */
        this.set_SearchTerm = function(value) {
            this.setInput("SearchTerm", value);
        }

        /*
        Set the value of the SearchType input for this Choreo. ((optional, string) Used with SearchTerm to specify which fields should be searched. Default searches all fields. Allowed values: main and full.)
        */
        this.set_SearchType = function(value) {
            this.setInput("SearchType", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Determines the order in which the stories will be returned. Default is date descending. Other allowed values: date ascending, editor assigned, and featured.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, string) The start date for which stories will be returned. Format: YYYY-MM-DD Can be used with EndDate to search a range. Cannot be used with Date. The meaning of this parameter can be modified with DateType.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the StartNum input for this Choreo. ((optional, integer) Determines where in the result set to start returning stories.)
        */
        this.set_StartNum = function(value) {
            this.setInput("StartNum", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Query Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var QueryResultSet = function(resultStream) {
    QueryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Query, choreography.Choreography);
util.inherits(QueryInputSet, choreography.InputSet);
util.inherits(QueryResultSet, choreography.ResultSet);
exports.Query = Query;


/*
    Series
    Retrieves a list of NPR series titles and corresponding IDs. Also used to look up the IDs of specific NPR series by specifying those as an optional parameter.
*/


var Series = function(session) {
    /*
        Create a new instance of the Series Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Series"
    Series.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SeriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SeriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Series
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SeriesInputSet = function() {
    SeriesInputSet.super_.call(this);
        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Series, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Series input for this Choreo. ((optional, string) The specific series title to return. Multiple titles can be specified separated by commas (i.e. Life in Berlin,Climate Connections). Series IDs are returned when this input is used.)
        */
        this.set_Series = function(value) {
            this.setInput("Series", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Series Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SeriesResultSet = function(resultStream) {
    SeriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the series. This is only returned when the Series input is specified. When multiple series are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Series, choreography.Choreography);
util.inherits(SeriesInputSet, choreography.InputSet);
util.inherits(SeriesResultSet, choreography.ResultSet);
exports.Series = Series;


/*
    Topics
    Retrieves a list of NPR topics and corresponding IDs. Also used to look up the IDs of specific NPR topics by specifying them as an optional parameter.
*/


var Topics = function(session) {
    /*
        Create a new instance of the Topics Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/NPR/StoryFinder/Topics"
    Topics.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TopicsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TopicsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Topics
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TopicsInputSet = function() {
    TopicsInputSet.super_.call(this);
        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that you want the response to be in. Set to json or xml (the default). Note that when specifying Topic, only xml is returned.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the StoryCountAll input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories.)
        */
        this.set_StoryCountAll = function(value) {
            this.setInput("StoryCountAll", value);
        }

        /*
        Set the value of the StoryCountMonth input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published in the last month.)
        */
        this.set_StoryCountMonth = function(value) {
            this.setInput("StoryCountMonth", value);
        }

        /*
        Set the value of the StoryCountToday input for this Choreo. ((optional, integer) Returns only items with at least this number of associated stories published today.)
        */
        this.set_StoryCountToday = function(value) {
            this.setInput("StoryCountToday", value);
        }

        /*
        Set the value of the Topic input for this Choreo. ((optional, string) The specific topic title to return. Multiple topics can be specified separated by commas (i.e. Energy,Europe). Topic IDs are returned when this input is used.)
        */
        this.set_Topic = function(value) {
            this.setInput("Topic", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Topics Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TopicsResultSet = function(resultStream) {
    TopicsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from NPR.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "Id" output from this Choreo execution. ((integer) The ID of the topic. This is only returned when the Topic input is specified. When topics are specified, this will be a list of IDs separated by commas.)
        */
        this.get_Id = function() {
            return this.getResult("Id");
        }
}

util.inherits(Topics, choreography.Choreography);
util.inherits(TopicsInputSet, choreography.InputSet);
util.inherits(TopicsResultSet, choreography.ResultSet);
exports.Topics = Topics;

