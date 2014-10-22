
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CSVToJSON
    Converts a CSV formatted file to JSON.
*/


var CSVToJSON = function(session) {
    /*
        Create a new instance of the CSVToJSON Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/CSVToJSON"
    CSVToJSON.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CSVToJSONResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CSVToJSONInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CSVToJSON
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CSVToJSONInputSet = function() {
    CSVToJSONInputSet.super_.call(this);
        /*
        Set the value of the CSV input for this Choreo. ((required, multiline) The CSV file to convert to JSON. Your CSV data must contain column names.)
        */
        this.set_CSV = function(value) {
            this.setInput("CSV", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CSVToJSON Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CSVToJSONResultSet = function(resultStream) {
    CSVToJSONResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "JSON" output from this Choreo execution. ((json) The JSON formatted data.)
        */
        this.get_JSON = function() {
            return this.getResult("JSON");
        }
}

util.inherits(CSVToJSON, choreography.Choreography);
util.inherits(CSVToJSONInputSet, choreography.InputSet);
util.inherits(CSVToJSONResultSet, choreography.ResultSet);
exports.CSVToJSON = CSVToJSON;


/*
    CSVToXLS
    Converts a CSV formatted file to Base64 encoded Excel data.
*/


var CSVToXLS = function(session) {
    /*
        Create a new instance of the CSVToXLS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/CSVToXLS"
    CSVToXLS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CSVToXLSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CSVToXLSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CSVToXLS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CSVToXLSInputSet = function() {
    CSVToXLSInputSet.super_.call(this);
        /*
        Set the value of the CSV input for this Choreo. ((conditional, multiline) The CSV data you want to convert to XLS format. Required unless using the VaultFile input alias (an advanced option used when running Choreos in the Temboo Designer).)
        */
        this.set_CSV = function(value) {
            this.setInput("CSV", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to a CSV file you've stored in the Vault. This can be used as an alternative to the CSVFile input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the CSVToXLS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CSVToXLSResultSet = function(resultStream) {
    CSVToXLSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XLS" output from this Choreo execution. ((string) The Base64 encoded Excel data.)
        */
        this.get_XLS = function() {
            return this.getResult("XLS");
        }
}

util.inherits(CSVToXLS, choreography.Choreography);
util.inherits(CSVToXLSInputSet, choreography.InputSet);
util.inherits(CSVToXLSResultSet, choreography.ResultSet);
exports.CSVToXLS = CSVToXLS;


/*
    CSVToXML
    Converts a CSV formatted file to XML.
*/


var CSVToXML = function(session) {
    /*
        Create a new instance of the CSVToXML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/CSVToXML"
    CSVToXML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CSVToXMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CSVToXMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CSVToXML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CSVToXMLInputSet = function() {
    CSVToXMLInputSet.super_.call(this);
        /*
        Set the value of the CSV input for this Choreo. ((required, multiline) The CSV file to convert to XML. Your CSV data must contain column names.)
        */
        this.set_CSV = function(value) {
            this.setInput("CSV", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CSVToXML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CSVToXMLResultSet = function(resultStream) {
    CSVToXMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XML" output from this Choreo execution. ((xml) The XML formatted data.)
        */
        this.get_XML = function() {
            return this.getResult("XML");
        }
}

util.inherits(CSVToXML, choreography.Choreography);
util.inherits(CSVToXMLInputSet, choreography.InputSet);
util.inherits(CSVToXMLResultSet, choreography.ResultSet);
exports.CSVToXML = CSVToXML;


/*
    JSONToXML
    Converts data from JSON format to XML format.
*/


var JSONToXML = function(session) {
    /*
        Create a new instance of the JSONToXML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/JSONToXML"
    JSONToXML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new JSONToXMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new JSONToXMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the JSONToXML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var JSONToXMLInputSet = function() {
    JSONToXMLInputSet.super_.call(this);
        /*
        Set the value of the JSON input for this Choreo. ((required, json) The JSON data that you want to convert to XML.)
        */
        this.set_JSON = function(value) {
            this.setInput("JSON", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the JSONToXML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var JSONToXMLResultSet = function(resultStream) {
    JSONToXMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XML" output from this Choreo execution. ((xml) The converted data in XML format.)
        */
        this.get_XML = function() {
            return this.getResult("XML");
        }
}

util.inherits(JSONToXML, choreography.Choreography);
util.inherits(JSONToXMLInputSet, choreography.InputSet);
util.inherits(JSONToXMLResultSet, choreography.ResultSet);
exports.JSONToXML = JSONToXML;


/*
    RSSToJSON
    Retrieves a specified RSS Feed, and converts it to JSON format.
*/


var RSSToJSON = function(session) {
    /*
        Create a new instance of the RSSToJSON Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/RSSToJSON"
    RSSToJSON.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RSSToJSONResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RSSToJSONInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RSSToJSON
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RSSToJSONInputSet = function() {
    RSSToJSONInputSet.super_.call(this);
        /*
        Set the value of the RSSFeed input for this Choreo. ((required, string) The URL for an RSS feed that you wish to convert to JSON.)
        */
        this.set_RSSFeed = function(value) {
            this.setInput("RSSFeed", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RSSToJSON Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RSSToJSONResultSet = function(resultStream) {
    RSSToJSONResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The feed data in JSON format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RSSToJSON, choreography.Choreography);
util.inherits(RSSToJSONInputSet, choreography.InputSet);
util.inherits(RSSToJSONResultSet, choreography.ResultSet);
exports.RSSToJSON = RSSToJSON;


/*
    TSVToJSON
    Converts a TSV formatted file to JSON.
*/


var TSVToJSON = function(session) {
    /*
        Create a new instance of the TSVToJSON Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/TSVToJSON"
    TSVToJSON.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TSVToJSONResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TSVToJSONInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TSVToJSON
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TSVToJSONInputSet = function() {
    TSVToJSONInputSet.super_.call(this);
        /*
        Set the value of the TSV input for this Choreo. ((required, multiline) The TSV file to convert to XML. Your TSV data must contain column names.)
        */
        this.set_TSV = function(value) {
            this.setInput("TSV", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TSVToJSON Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TSVToJSONResultSet = function(resultStream) {
    TSVToJSONResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "JSON" output from this Choreo execution. ((json) The JSON formatted data.)
        */
        this.get_JSON = function() {
            return this.getResult("JSON");
        }
}

util.inherits(TSVToJSON, choreography.Choreography);
util.inherits(TSVToJSONInputSet, choreography.InputSet);
util.inherits(TSVToJSONResultSet, choreography.ResultSet);
exports.TSVToJSON = TSVToJSON;


/*
    TSVToXML
    Converts a TSV formatted file to XML.
*/


var TSVToXML = function(session) {
    /*
        Create a new instance of the TSVToXML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/TSVToXML"
    TSVToXML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TSVToXMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TSVToXMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TSVToXML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TSVToXMLInputSet = function() {
    TSVToXMLInputSet.super_.call(this);
        /*
        Set the value of the TSV input for this Choreo. ((required, multiline) The TSV file to convert to XML. Your TSV data must contain column names.)
        */
        this.set_TSV = function(value) {
            this.setInput("TSV", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TSVToXML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TSVToXMLResultSet = function(resultStream) {
    TSVToXMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XML" output from this Choreo execution. ((xml) The XML formatted data.)
        */
        this.get_XML = function() {
            return this.getResult("XML");
        }
}

util.inherits(TSVToXML, choreography.Choreography);
util.inherits(TSVToXMLInputSet, choreography.InputSet);
util.inherits(TSVToXMLResultSet, choreography.ResultSet);
exports.TSVToXML = TSVToXML;


/*
    XLSToCSV
    Converts Excel (.xls) formatted data to CSV.
*/


var XLSToCSV = function(session) {
    /*
        Create a new instance of the XLSToCSV Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XLSToCSV"
    XLSToCSV.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XLSToCSVResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XLSToCSVInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XLSToCSV
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XLSToCSVInputSet = function() {
    XLSToCSVInputSet.super_.call(this);
        /*
        Set the value of the XLS input for this Choreo. ((conditional, string) The base64-encoded contents of the Excel file that you want to convert to CSV format. Compatible with Excel 97-2003.)
        */
        this.set_XLS = function(value) {
            this.setInput("XLS", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to an Excel file you've stored in the Vault. This can be used as an alternative to the ExcelFile input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the XLSToCSV Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XLSToCSVResultSet = function(resultStream) {
    XLSToCSVResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CSV" output from this Choreo execution. ((string) The CSV formatted data.)
        */
        this.get_CSV = function() {
            return this.getResult("CSV");
        }
}

util.inherits(XLSToCSV, choreography.Choreography);
util.inherits(XLSToCSVInputSet, choreography.InputSet);
util.inherits(XLSToCSVResultSet, choreography.ResultSet);
exports.XLSToCSV = XLSToCSV;


/*
    XLSToXML
    Converts Excel (.xls) formatted data to XML.
*/


var XLSToXML = function(session) {
    /*
        Create a new instance of the XLSToXML Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XLSToXML"
    XLSToXML.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XLSToXMLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XLSToXMLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XLSToXML
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XLSToXMLInputSet = function() {
    XLSToXMLInputSet.super_.call(this);
        /*
        Set the value of the XLS input for this Choreo. ((conditional, string) The base64-encoded contents of the Excel file that you want to convert to XML. Compatible with Excel 97-2003.)
        */
        this.set_XLS = function(value) {
            this.setInput("XLS", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) A path to an Excel file that has been uploaded to the vault. You can use this input alias as an alternative to the ExcelFile input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the XLSToXML Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XLSToXMLResultSet = function(resultStream) {
    XLSToXMLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XML" output from this Choreo execution. ((xml) The data in XML format.)
        */
        this.get_XML = function() {
            return this.getResult("XML");
        }
}

util.inherits(XLSToXML, choreography.Choreography);
util.inherits(XLSToXMLInputSet, choreography.InputSet);
util.inherits(XLSToXMLResultSet, choreography.ResultSet);
exports.XLSToXML = XLSToXML;


/*
    XMLToCSV
    Converts an XML file to CSV format.
*/


var XMLToCSV = function(session) {
    /*
        Create a new instance of the XMLToCSV Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XMLToCSV"
    XMLToCSV.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLToCSVResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLToCSVInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XMLToCSV
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLToCSVInputSet = function() {
    XMLToCSVInputSet.super_.call(this);
        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML file to convert to CSV data.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) If your XML is not in "/rowset/row/column_name" format, specify a path to the rows. See documentation for examples.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XMLToCSV Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLToCSVResultSet = function(resultStream) {
    XMLToCSVResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "CSV" output from this Choreo execution. ((multiline) The CSV data generated from the XML input.)
        */
        this.get_CSV = function() {
            return this.getResult("CSV");
        }
}

util.inherits(XMLToCSV, choreography.Choreography);
util.inherits(XMLToCSVInputSet, choreography.InputSet);
util.inherits(XMLToCSVResultSet, choreography.ResultSet);
exports.XMLToCSV = XMLToCSV;


/*
    XMLToJSON
    Converts data from XML format to JSON format.
*/


var XMLToJSON = function(session) {
    /*
        Create a new instance of the XMLToJSON Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XMLToJSON"
    XMLToJSON.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLToJSONResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLToJSONInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XMLToJSON
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLToJSONInputSet = function() {
    XMLToJSONInputSet.super_.call(this);
        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML file that you want to convert to JSON format.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XMLToJSON Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLToJSONResultSet = function(resultStream) {
    XMLToJSONResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "JSON" output from this Choreo execution. ((json) The converted data in JSON format.)
        */
        this.get_JSON = function() {
            return this.getResult("JSON");
        }
}

util.inherits(XMLToJSON, choreography.Choreography);
util.inherits(XMLToJSONInputSet, choreography.InputSet);
util.inherits(XMLToJSONResultSet, choreography.ResultSet);
exports.XMLToJSON = XMLToJSON;


/*
    XMLToTSV
    Converts an XML file to TSV format (TAB-separated values).
*/


var XMLToTSV = function(session) {
    /*
        Create a new instance of the XMLToTSV Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XMLToTSV"
    XMLToTSV.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLToTSVResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLToTSVInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XMLToTSV
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLToTSVInputSet = function() {
    XMLToTSVInputSet.super_.call(this);
        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML file to convert to TSV data.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

        /*
        Set the value of the Path input for this Choreo. ((optional, string) If your XML is not in "/rowset/row/column_name" format, specify a path to the rows. See documentation for examples.)
        */
        this.set_Path = function(value) {
            this.setInput("Path", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XMLToTSV Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLToTSVResultSet = function(resultStream) {
    XMLToTSVResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TSV" output from this Choreo execution. ((multiline) The tab-separated data generated from the XML input.)
        */
        this.get_TSV = function() {
            return this.getResult("TSV");
        }
}

util.inherits(XMLToTSV, choreography.Choreography);
util.inherits(XMLToTSVInputSet, choreography.InputSet);
util.inherits(XMLToTSVResultSet, choreography.ResultSet);
exports.XMLToTSV = XMLToTSV;


/*
    XMLToXLS
    Converts an XML file to a Base64 encoded Excel file.
*/


var XMLToXLS = function(session) {
    /*
        Create a new instance of the XMLToXLS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Utilities/DataConversions/XMLToXLS"
    XMLToXLS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new XMLToXLSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new XMLToXLSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the XMLToXLS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var XMLToXLSInputSet = function() {
    XMLToXLSInputSet.super_.call(this);
        /*
        Set the value of the XML input for this Choreo. ((required, xml) The XML file you want to convert to XLS format. See documentation for information on the required XML schema.)
        */
        this.set_XML = function(value) {
            this.setInput("XML", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the XMLToXLS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var XMLToXLSResultSet = function(resultStream) {
    XMLToXLSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "XLS" output from this Choreo execution. (The Base64 encoded Excel data .)
        */
        this.get_XLS = function() {
            return this.getResult("XLS");
        }
}

util.inherits(XMLToXLS, choreography.Choreography);
util.inherits(XMLToXLSInputSet, choreography.InputSet);
util.inherits(XMLToXLSResultSet, choreography.ResultSet);
exports.XMLToXLS = XMLToXLS;

