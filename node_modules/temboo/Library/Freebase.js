
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Image
    Generates a thumbnail for an image from the content database to the requested size. 
*/


var Image = function(session) {
    /*
        Create a new instance of the Image Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Freebase/Image"
    Image.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Image
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ImageInputSet = function() {
    ImageInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Freebase.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the FallbackID input for this Choreo. ((optional, string) Use this second (fallback) image ID, if the primary ID is not available.)
        */
        this.set_FallbackID = function(value) {
            this.setInput("FallbackID", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) Enter the ID of the entity for which description information will be retrieved. IDs and MIDs can be obtained by running the Search Choreo in this bundle. Example input: /en/bob_dylan)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the MaximumHeight input for this Choreo. ((optional, integer) Enter the desired maximum image height in pixels. Integers must be in the following range: (0 --> 4,096))
        */
        this.set_MaximumHeight = function(value) {
            this.setInput("MaximumHeight", value);
        }

        /*
        Set the value of the MaximumWidth input for this Choreo. ((optional, integer) Enter the desired maximum image width in pixels. Integers must be in the following range: (0 --> 4,096))
        */
        this.set_MaximumWidth = function(value) {
            this.setInput("MaximumWidth", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, string) Specify the method used to crop or scale images.  Available methods include: fill, fillcrop, fillcropmid, fit.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Pad input for this Choreo. ((optional, boolean) Enter 0, or 1 to specify whether the provided image should be padded to the requested dimensions.)
        */
        this.set_Pad = function(value) {
            this.setInput("Pad", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Image Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ImageResultSet = function(resultStream) {
    ImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from the Freebase Image API returns the thumbnail in base 64-encoded  format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Image, choreography.Choreography);
util.inherits(ImageInputSet, choreography.InputSet);
util.inherits(ImageResultSet, choreography.ResultSet);
exports.Image = Image;


/*
    MQLRead
    Search the Freebase dataset using the Metaweb query language (MQL).
*/


var MQLRead = function(session) {
    /*
        Create a new instance of the MQLRead Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Freebase/MQLRead"
    MQLRead.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MQLReadResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MQLReadInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MQLRead
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MQLReadInputSet = function() {
    MQLReadInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Freebase.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AsOfTime input for this Choreo. ((optional, string) Run a query as it would have run at a specific point in time. Timestamps must be entered in the following format: 2007-01-09T22, or 2007-02.)
        */
        this.set_AsOfTime = function(value) {
            this.setInput("AsOfTime", value);
        }

        /*
        Set the value of the Cost input for this Choreo. ((optional, boolean) If cost is set to true, a key is returned in the results, indicating the computational cost incurred by lower levels of the service. Default value: false)
        */
        this.set_Cost = function(value) {
            this.setInput("Cost", value);
        }

        /*
        Set the value of the Cursor input for this Choreo. ((optional, string) If set. results can be paged.  See examples at: http://wiki.freebase.com/wiki/MQL_Read_Service)
        */
        this.set_Cursor = function(value) {
            this.setInput("Cursor", value);
        }

        /*
        Set the value of the EscapeHTMLResults input for this Choreo. ((optional, boolean) Specify whether html results are to be escaped or not.  Default is set to: true.)
        */
        this.set_EscapeHTMLResults = function(value) {
            this.setInput("EscapeHTMLResults", value);
        }

        /*
        Set the value of the Indent input for this Choreo. ((optional, boolean) Specify whether the JSON results should be indented, or not. Enter true, or false. Default: false. Range of values: 0-10.)
        */
        this.set_Indent = function(value) {
            this.setInput("Indent", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Specify the language in which the searches will be performed.  Multiple languages can be specified. Default is: /lang/en)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Enter a search query  in a valid MQL JSON format.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the UniqenessFailure input for this Choreo. ((optional, string) Specify how MQL responds to uniqueness failures. Enter hard, or soft.  Default is set to: hard.)
        */
        this.set_UniqenessFailure = function(value) {
            this.setInput("UniqenessFailure", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MQLRead Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MQLReadResultSet = function(resultStream) {
    MQLReadResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Freebase MQL Read API in JSON format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MQLRead, choreography.Choreography);
util.inherits(MQLReadInputSet, choreography.InputSet);
util.inherits(MQLReadResultSet, choreography.ResultSet);
exports.MQLRead = MQLRead;


/*
    Search
    Search the Freebase dataset.
*/


var Search = function(session) {
    /*
        Create a new instance of the Search Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Freebase/Search"
    Search.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new SearchResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new SearchInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Search
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var SearchInputSet = function() {
    SearchInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Freebase.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Domain input for this Choreo. ((optional, string) Enter a comma separated list of domain IDs.)
        */
        this.set_Domain = function(value) {
            this.setInput("Domain", value);
        }

        /*
        Set the value of the EscapeHTMLResults input for this Choreo. ((optional, boolean) Specify whether html results are to be escaped or not.  Default is set to: true.)
        */
        this.set_EscapeHTMLResults = function(value) {
            this.setInput("EscapeHTMLResults", value);
        }

        /*
        Set the value of the Exact input for this Choreo. ((optional, boolean) If set to true, the search query will match only the name and keys exactly. No normalization of any kind will be performed at indexing and query time.Default is set to: false.)
        */
        this.set_Exact = function(value) {
            this.setInput("Exact", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) Specify an s-expression to filter search results. For more info, see: http://wiki.freebase.com/wiki/Search_Cookbook)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Indent input for this Choreo. ((optional, boolean) Specify whether the JSON results should be indented, or not. Enter true, or false. Default: false.)
        */
        this.set_Indent = function(value) {
            this.setInput("Indent", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Specify the language in which the searches will be performed.  Default is set to English: /lang/en)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Specify the number of results to be retrieved.  Default: 20.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the MQLOutput input for this Choreo. ((optional, string) Enter an MQL query to extract entity information.)
        */
        this.set_MQLOutput = function(value) {
            this.setInput("MQLOutput", value);
        }

        /*
        Set the value of the Prefixed input for this Choreo. ((optional, boolean) Specify whether or not search queries are to match results by name prefix. Default value: false.)
        */
        this.set_Prefixed = function(value) {
            this.setInput("Prefixed", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((required, string) Enter a search query.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the Start input for this Choreo. ((optional, integer) Enter a value to page through results.  Default is set to 0.)
        */
        this.set_Start = function(value) {
            this.setInput("Start", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Enter a comma-seperated list of type IDs.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Search Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var SearchResultSet = function(resultStream) {
    SearchResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Freebase Search API in JSON format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Search, choreography.Choreography);
util.inherits(SearchInputSet, choreography.InputSet);
util.inherits(SearchResultSet, choreography.ResultSet);
exports.Search = Search;


/*
    Text
    Access Freebase topic and schema descriptions.
*/


var Text = function(session) {
    /*
        Create a new instance of the Text Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Freebase/Text"
    Text.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TextResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TextInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Text
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TextInputSet = function() {
    TextInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Freebase.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Format input for this Choreo. ((optional, boolean) Specify the retrieved results format.  Enter, html, plan, or raw. Default is set to: raw)
        */
        this.set_Format = function(value) {
            this.setInput("Format", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((required, string) Enter the ID of the entity for which description information will be retrieved. IDs and MIDs can be obtained by running the Search Choreo in this bundle. Example input: /en/bob_dylan)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Language input for this Choreo. ((optional, string) Specify the language in which the searches will be performed. Default is set to English: /lang/en)
        */
        this.set_Language = function(value) {
            this.setInput("Language", value);
        }

        /*
        Set the value of the MaximumLength input for this Choreo. ((optional, integer) Enter the max number of characters to return with the rage of 0 - 4,294,967,295. Valid only for plan Format. Default is to: 200)
        */
        this.set_MaximumLength = function(value) {
            this.setInput("MaximumLength", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Text Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TextResultSet = function(resultStream) {
    TextResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from the Freebase Text API in JSON.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Text, choreography.Choreography);
util.inherits(TextInputSet, choreography.InputSet);
util.inherits(TextResultSet, choreography.ResultSet);
exports.Text = Text;

