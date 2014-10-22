
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListBatchSubscribe
    Adds or updates multiple Mailchimp list subscribers.
*/


var ListBatchSubscribe = function(session) {
    /*
        Create a new instance of the ListBatchSubscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListBatchSubscribe"
    ListBatchSubscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBatchSubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBatchSubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBatchSubscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBatchSubscribeInputSet = function() {
    ListBatchSubscribeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DoubleOptIn input for this Choreo. ((optional, boolean) Flag to control whether a double opt-in confirmation message is sent. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DoubleOptIn = function(value) {
            this.setInput("DoubleOptIn", value);
        }

        /*
        Set the value of the EmailType input for this Choreo. ((optional, string) Must be one of 'text', 'html', or 'mobile'. Defaults to html.)
        */
        this.set_EmailType = function(value) {
            this.setInput("EmailType", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list the subscribers will be added to.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the ReplaceInterests input for this Choreo. ((optional, boolean) A flag to determine whether to replace the interest groups with the groups provided or add the provided groups to the member's interest groups. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_ReplaceInterests = function(value) {
            this.setInput("ReplaceInterests", value);
        }

        /*
        Set the value of the SendWelcome input for this Choreo. ((optional, boolean) If double_optin is false and this flag is true, a welcome email will be sent. Note that this does not apply when updating records. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendWelcome = function(value) {
            this.setInput("SendWelcome", value);
        }

        /*
        Set the value of the Subscribers input for this Choreo. ((required, json) An array of JSON objects containing the subscribers to insert. See Choreo documentation for the specific format for this JSON input.)
        */
        this.set_Subscribers = function(value) {
            this.setInput("Subscribers", value);
        }

        /*
        Set the value of the SupressErrors input for this Choreo. ((optional, boolean) Whether or not to suppress errors that arise from attempting to add/update a subscriber. Defaults to 0 (false). Set to 1 (true) to supress errors.)
        */
        this.set_SupressErrors = function(value) {
            this.setInput("SupressErrors", value);
        }

        /*
        Set the value of the UpdateExisting input for this Choreo. ((optional, boolean) Indicates that if the email already exists, this request will perform an update instead of an insert. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_UpdateExisting = function(value) {
            this.setInput("UpdateExisting", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListBatchSubscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBatchSubscribeResultSet = function(resultStream) {
    ListBatchSubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SuccessList" output from this Choreo execution. ((json) A list of email successfully subscribed.)
        */
        this.get_SuccessList = function() {
            return this.getResult("SuccessList");
        }
        /*
        Retrieve the value for the "ErrorList" output from this Choreo execution. ((json) A list of emails that were not successfully subscribed.)
        */
        this.get_ErrorList = function() {
            return this.getResult("ErrorList");
        }
}

util.inherits(ListBatchSubscribe, choreography.Choreography);
util.inherits(ListBatchSubscribeInputSet, choreography.InputSet);
util.inherits(ListBatchSubscribeResultSet, choreography.ResultSet);
exports.ListBatchSubscribe = ListBatchSubscribe;


/*
    ListBatchSubscribeCSV
    Adds or updates multiple subscribers in a given CSV file.
*/


var ListBatchSubscribeCSV = function(session) {
    /*
        Create a new instance of the ListBatchSubscribeCSV Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListBatchSubscribeCSV"
    ListBatchSubscribeCSV.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBatchSubscribeCSVResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBatchSubscribeCSVInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBatchSubscribeCSV
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBatchSubscribeCSVInputSet = function() {
    ListBatchSubscribeCSVInputSet.super_.call(this);
        /*
        Set the value of the CSVFile input for this Choreo. ((conditional, multiline) The list of subscriber email addresses to unsubscribe in CSV format.)
        */
        this.set_CSVFile = function(value) {
            this.setInput("CSVFile", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DoubleOptIn input for this Choreo. ((conditional, boolean) Flag to control whether a double opt-in confirmation message is sent. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DoubleOptIn = function(value) {
            this.setInput("DoubleOptIn", value);
        }

        /*
        Set the value of the EmailType input for this Choreo. ((optional, string) Must be one of 'text', 'html', or 'mobile'. Defaults to html.)
        */
        this.set_EmailType = function(value) {
            this.setInput("EmailType", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list associated with the email addresses to subscribe.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the ReplaceInterests input for this Choreo. ((optional, boolean) A flag to determine whether to replace the interest groups with the groups provided or add the provided groups to the member's interest groups. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_ReplaceInterests = function(value) {
            this.setInput("ReplaceInterests", value);
        }

        /*
        Set the value of the SupressErrors input for this Choreo. ((optional, boolean) Whether or not to suppress errors that arise from attempting to add/update a subscriber. Defaults to 0 (false). Set to 1 (true) to supress errors.)
        */
        this.set_SupressErrors = function(value) {
            this.setInput("SupressErrors", value);
        }

        /*
        Set the value of the UpdateExisting input for this Choreo. ((conditional, boolean) Indicates that if the email already exists, this request will perform an update instead of an insert. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_UpdateExisting = function(value) {
            this.setInput("UpdateExisting", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a csv file in the vault containing the email addresses to unsubscribe. Can be used as an alternative to the CSVFile input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListBatchSubscribeCSV Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBatchSubscribeCSVResultSet = function(resultStream) {
    ListBatchSubscribeCSVResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ErrorList" output from this Choreo execution. ((multiline) A list of emails that were not successfully subscribed.)
        */
        this.get_ErrorList = function() {
            return this.getResult("ErrorList");
        }
        /*
        Retrieve the value for the "SuccessList" output from this Choreo execution. ((multiline) A list of email successfully subscribed.)
        */
        this.get_SuccessList = function() {
            return this.getResult("SuccessList");
        }
}

util.inherits(ListBatchSubscribeCSV, choreography.Choreography);
util.inherits(ListBatchSubscribeCSVInputSet, choreography.InputSet);
util.inherits(ListBatchSubscribeCSVResultSet, choreography.ResultSet);
exports.ListBatchSubscribeCSV = ListBatchSubscribeCSV;


/*
    ListBatchUnsubscribe
    Unsubscribes one or more members from a MailChimp list.
*/


var ListBatchUnsubscribe = function(session) {
    /*
        Create a new instance of the ListBatchUnsubscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListBatchUnsubscribe"
    ListBatchUnsubscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBatchUnsubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBatchUnsubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBatchUnsubscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBatchUnsubscribeInputSet = function() {
    ListBatchUnsubscribeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DeleteMember input for this Choreo. ((optional, boolean) A flag used to completely delete the member from your list instead of just unsubscribing. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DeleteMember = function(value) {
            this.setInput("DeleteMember", value);
        }

        /*
        Set the value of the Email input for this Choreo. ((required, string) The email address to unsubscribe from a Mailchimp list . Multiple emails can be supplied separated by commas.)
        */
        this.set_Email = function(value) {
            this.setInput("Email", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The Mailchimp List ID)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the SendGoodbye input for this Choreo. ((optional, boolean) A flag used to send the goodbye email to the email address. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendGoodbye = function(value) {
            this.setInput("SendGoodbye", value);
        }

        /*
        Set the value of the SendNotify input for this Choreo. ((optional, boolean) A flag used to send the unsubscribe notification email to the address defined in the list email notification settings. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendNotify = function(value) {
            this.setInput("SendNotify", value);
        }

        /*
        Set the value of the SupressErrors input for this Choreo. ((optional, boolean) Whether or not to suppress errors that arise from attempting to unsubscribe an email address. Defaults to 0 (false). Set to 1 (true) to supress errors.)
        */
        this.set_SupressErrors = function(value) {
            this.setInput("SupressErrors", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListBatchUnsubscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBatchUnsubscribeResultSet = function(resultStream) {
    ListBatchUnsubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ErrorList" output from this Choreo execution. ((json) A list of emails that were not successfully unsubscribed.)
        */
        this.get_ErrorList = function() {
            return this.getResult("ErrorList");
        }
        /*
        Retrieve the value for the "SuccessList" output from this Choreo execution. ((json) A list of email successfully unsubscribed.)
        */
        this.get_SuccessList = function() {
            return this.getResult("SuccessList");
        }
}

util.inherits(ListBatchUnsubscribe, choreography.Choreography);
util.inherits(ListBatchUnsubscribeInputSet, choreography.InputSet);
util.inherits(ListBatchUnsubscribeResultSet, choreography.ResultSet);
exports.ListBatchUnsubscribe = ListBatchUnsubscribe;


/*
    ListBatchUnsubscribeCSV
    Unsubscribes one or more members listed in a CSV file from a MailChimp list.
*/


var ListBatchUnsubscribeCSV = function(session) {
    /*
        Create a new instance of the ListBatchUnsubscribeCSV Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListBatchUnsubscribeCSV"
    ListBatchUnsubscribeCSV.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListBatchUnsubscribeCSVResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListBatchUnsubscribeCSVInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListBatchUnsubscribeCSV
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListBatchUnsubscribeCSVInputSet = function() {
    ListBatchUnsubscribeCSVInputSet.super_.call(this);
        /*
        Set the value of the CSVFile input for this Choreo. ((conditional, multiline) The list of subscriber email addresses to unsubscribe in CSV format.)
        */
        this.set_CSVFile = function(value) {
            this.setInput("CSVFile", value);
        }

        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DeleteMember input for this Choreo. ((optional, boolean) A flag used to completely delete the member from your list instead of just unsubscribing. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DeleteMember = function(value) {
            this.setInput("DeleteMember", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list associated with the email addresses to unsubscribe.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the SendGoodbye input for this Choreo. ((optional, boolean) A flag used to send the goodbye email to the email address. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendGoodbye = function(value) {
            this.setInput("SendGoodbye", value);
        }

        /*
        Set the value of the SendNotify input for this Choreo. ((optional, boolean) A flag used to send the unsubscribe notification email to the address defined in the list email notification settings. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendNotify = function(value) {
            this.setInput("SendNotify", value);
        }

        /*
        Set the value of the SupressErrors input for this Choreo. ((optional, boolean) Whether or not to suppress errors that arise from attempting to unsubscribe an email address. Defaults to 0 (false). Set to 1 (true) to supress errors.)
        */
        this.set_SupressErrors = function(value) {
            this.setInput("SupressErrors", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. (A path to a csv file in the vault containing the email addresses to unsubscribe. Can be used as an alternative to the CSVFile input.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the ListBatchUnsubscribeCSV Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListBatchUnsubscribeCSVResultSet = function(resultStream) {
    ListBatchUnsubscribeCSVResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "SuccessList" output from this Choreo execution. ((multiline) A list of email successfully unsubscribed.)
        */
        this.get_SuccessList = function() {
            return this.getResult("SuccessList");
        }
        /*
        Retrieve the value for the "ErrorList" output from this Choreo execution. ((multiline) A list of emails that were not successfully unsubscribed.)
        */
        this.get_ErrorList = function() {
            return this.getResult("ErrorList");
        }
}

util.inherits(ListBatchUnsubscribeCSV, choreography.Choreography);
util.inherits(ListBatchUnsubscribeCSVInputSet, choreography.InputSet);
util.inherits(ListBatchUnsubscribeCSVResultSet, choreography.ResultSet);
exports.ListBatchUnsubscribeCSV = ListBatchUnsubscribeCSV;


/*
    ListMemberInfo
    Get information for a member of a MailChimp list.
*/


var ListMemberInfo = function(session) {
    /*
        Create a new instance of the ListMemberInfo Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListMemberInfo"
    ListMemberInfo.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMemberInfoResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMemberInfoInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMemberInfo
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMemberInfoInputSet = function() {
    ListMemberInfoInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address to use when searching for a Mailchimp member.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list associated with the member you want to retrieve.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are "json" or "xml" (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMemberInfo Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMemberInfoResultSet = function(resultStream) {
    ListMemberInfoResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Corresponds to the format specified in the ResponseFormat parameter. Defaults to "xml".)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMemberInfo, choreography.Choreography);
util.inherits(ListMemberInfoInputSet, choreography.InputSet);
util.inherits(ListMemberInfoResultSet, choreography.ResultSet);
exports.ListMemberInfo = ListMemberInfo;


/*
    ListMembers
    Retrieves the email addresses of members of a MailChimp list. 
*/


var ListMembers = function(session) {
    /*
        Create a new instance of the ListMembers Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListMembers"
    ListMembers.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMembersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMembersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMembers
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMembersInputSet = function() {
    ListMembersInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Limit input for this Choreo. ((optional, integer) Specifies the number of records in a page to be returned. Must be greater than zero and less than or equal to 15000. Defaults to 100.)
        */
        this.set_Limit = function(value) {
            this.setInput("Limit", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list to retrieve members from.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are "json" or "xml" (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Since input for this Choreo. ((optional, date) Retrieves records that have changed since this date/time. Formatted like 'YYYY-MM-DD HH:MM:SS.)
        */
        this.set_Since = function(value) {
            this.setInput("Since", value);
        }

        /*
        Set the value of the Start input for this Choreo. ((optional, integer) Specifies the page at which to begin returning records. Page size is defined by the limit argument. Must be zero or greater. Defaults to 0.)
        */
        this.set_Start = function(value) {
            this.setInput("Start", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) Must be one of 'subscribed', 'unsubscribed', 'cleaned', or 'updated'. Defaults to 'subscribed'.)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMembers Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMembersResultSet = function(resultStream) {
    ListMembersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Corresponds to the format specified in the ResponseFormat parameter. Defaults to "xml".)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMembers, choreography.Choreography);
util.inherits(ListMembersInputSet, choreography.InputSet);
util.inherits(ListMembersResultSet, choreography.ResultSet);
exports.ListMembers = ListMembers;


/*
    ListMergeVarAdd
    Add a new field to a MailChimp list.
*/


var ListMergeVarAdd = function(session) {
    /*
        Create a new instance of the ListMergeVarAdd Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListMergeVarAdd"
    ListMergeVarAdd.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMergeVarAddResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMergeVarAddInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMergeVarAdd
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMergeVarAddInputSet = function() {
    ListMergeVarAddInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Choices input for this Choreo. ((optional, string) A list of up to 10 choices for radio and dropdown type fields )separated by commas).)
        */
        this.set_Choices = function(value) {
            this.setInput("Choices", value);
        }

        /*
        Set the value of the DateFormat input for this Choreo. ((optional, string) Valid for birthday and date fields. For birthday, must be "MM/DD" (default) or "DD/MM". For date type, must be "MM/DD/YYYY" (default) or "DD/MM/YYYY".)
        */
        this.set_DateFormat = function(value) {
            this.setInput("DateFormat", value);
        }

        /*
        Set the value of the DefaultCountry input for this Choreo. ((optional, string) The ISO 3166 2 digit character code for the default country. Defaults to "US".)
        */
        this.set_DefaultCountry = function(value) {
            this.setInput("DefaultCountry", value);
        }

        /*
        Set the value of the DefaultValue input for this Choreo. ((optional, string) The default value for the new field.)
        */
        this.set_DefaultValue = function(value) {
            this.setInput("DefaultValue", value);
        }

        /*
        Set the value of the FieldType input for this Choreo. ((optional, string) Must be either left unset or one of 'text', 'number', 'radio', 'dropdown', 'date', 'address', 'phone', 'url', or 'imageurl. Defaults to text.)
        */
        this.set_FieldType = function(value) {
            this.setInput("FieldType", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The ID of the list on which to add the new merge var.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) Provide a long merge var name for user display (i.e. First Name))
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the PhoneFormat input for this Choreo. ((optional, string) Defaults to "US"  - any other value will cause them to be unformatted (international).)
        */
        this.set_PhoneFormat = function(value) {
            this.setInput("PhoneFormat", value);
        }

        /*
        Set the value of the Public input for this Choreo. ((optional, boolean) Indicates whether the field is displayed in public. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_Public = function(value) {
            this.setInput("Public", value);
        }

        /*
        Set the value of the Req input for this Choreo. ((optional, boolean) Indicates that the field will be required.  Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_Req = function(value) {
            this.setInput("Req", value);
        }

        /*
        Set the value of the Show input for this Choreo. ((optional, boolean) Indicates whether the field is displayed in the app's list member view.  Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_Show = function(value) {
            this.setInput("Show", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) Provide a short merge var tag name. MUST be 10 UTF-8 chars, including 'A-Z', '0-9', or '_' only (i.e. DESC123456).)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMergeVarAdd Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMergeVarAddResultSet = function(resultStream) {
    ListMergeVarAddResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((boolean) The response from Mailchimp. Returns the string "true" for success and an error description for failures.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMergeVarAdd, choreography.Choreography);
util.inherits(ListMergeVarAddInputSet, choreography.InputSet);
util.inherits(ListMergeVarAddResultSet, choreography.ResultSet);
exports.ListMergeVarAdd = ListMergeVarAdd;


/*
    ListMergeVarDel
    Remove a field name from a MailChimp list.
*/


var ListMergeVarDel = function(session) {
    /*
        Create a new instance of the ListMergeVarDel Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListMergeVarDel"
    ListMergeVarDel.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMergeVarDelResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMergeVarDelInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMergeVarDel
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMergeVarDelInputSet = function() {
    ListMergeVarDelInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list associated with the merge var you want to delete.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Tag input for this Choreo. ((required, string) Provide a valid merge var tag. A merge var tag can be retrieved by calling listMergeVars() or by logging in to your account.)
        */
        this.set_Tag = function(value) {
            this.setInput("Tag", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMergeVarDel Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMergeVarDelResultSet = function(resultStream) {
    ListMergeVarDelResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Returns the string "true" for success and an error description for failures.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMergeVarDel, choreography.Choreography);
util.inherits(ListMergeVarDelInputSet, choreography.InputSet);
util.inherits(ListMergeVarDelResultSet, choreography.ResultSet);
exports.ListMergeVarDel = ListMergeVarDel;


/*
    ListMergeVars
    Get field names from a MailChimp list.
*/


var ListMergeVars = function(session) {
    /*
        Create a new instance of the ListMergeVars Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListMergeVars"
    ListMergeVars.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListMergeVarsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListMergeVarsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListMergeVars
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListMergeVarsInputSet = function() {
    ListMergeVarsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the Mailchimp list associated with the merge vars to retrieve.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are "json" or "xml" (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListMergeVars Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListMergeVarsResultSet = function(resultStream) {
    ListMergeVarsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Corresponds to the format specified in the ResponseFormat parameter. Defaults to "xml".)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListMergeVars, choreography.Choreography);
util.inherits(ListMergeVarsInputSet, choreography.InputSet);
util.inherits(ListMergeVarsResultSet, choreography.ResultSet);
exports.ListMergeVars = ListMergeVars;


/*
    ListSubscribe
    Adds a subscriber to a MailChimp list.
*/


var ListSubscribe = function(session) {
    /*
        Create a new instance of the ListSubscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListSubscribe"
    ListSubscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSubscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSubscribeInputSet = function() {
    ListSubscribeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DoubleOptIn input for this Choreo. ((optional, boolean) Flag to control whether a double opt-in confirmation message is sent. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DoubleOptIn = function(value) {
            this.setInput("DoubleOptIn", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((conditional, string) The email address for the subscriber you want to create. Required unless the email address is included in the MergeVars input as part of your JSON object.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the EmailType input for this Choreo. ((optional, string) Must be one of 'text', 'html', or 'mobile'. Defaults to html.)
        */
        this.set_EmailType = function(value) {
            this.setInput("EmailType", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the list that the subsbriber will be added to.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the MergeVars input for this Choreo. ((conditional, json) A JSON object of the merge fields for this subscriber. If the subscriber email address is not provided for the EmailAddress input, it must be specified here.)
        */
        this.set_MergeVars = function(value) {
            this.setInput("MergeVars", value);
        }

        /*
        Set the value of the ReplaceInterests input for this Choreo. ((optional, boolean) A flag to determine whether to replace the interest groups with the groups provided or add the provided groups to the member's interest groups. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_ReplaceInterests = function(value) {
            this.setInput("ReplaceInterests", value);
        }

        /*
        Set the value of the SendWelcome input for this Choreo. ((optional, boolean) If double_optin is false and this flag is true, a welcome email will be sent. Note that this does not apply when updating records. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendWelcome = function(value) {
            this.setInput("SendWelcome", value);
        }

        /*
        Set the value of the UpdateExisting input for this Choreo. ((optional, boolean) Indicates that if the email already exists, this request will perform an update instead of an insert. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_UpdateExisting = function(value) {
            this.setInput("UpdateExisting", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSubscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSubscribeResultSet = function(resultStream) {
    ListSubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Returns the string "true" for success and an error description for failures.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSubscribe, choreography.Choreography);
util.inherits(ListSubscribeInputSet, choreography.InputSet);
util.inherits(ListSubscribeResultSet, choreography.ResultSet);
exports.ListSubscribe = ListSubscribe;


/*
    ListUnsubscribe
    Remove a subscriber from a MailChimp list.
*/


var ListUnsubscribe = function(session) {
    /*
        Create a new instance of the ListUnsubscribe Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListUnsubscribe"
    ListUnsubscribe.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUnsubscribeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUnsubscribeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUnsubscribe
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUnsubscribeInputSet = function() {
    ListUnsubscribeInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the DeleteMember input for this Choreo. ((optional, boolean) A flag used to completely delete the member from your list instead of just unsubscribing. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_DeleteMember = function(value) {
            this.setInput("DeleteMember", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The email address to unsubscribe.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the list that contains the email address you want to unsubscribe.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the SendGoodbye input for this Choreo. ((optional, boolean) A flag used to send the goodbye email to the email address. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendGoodbye = function(value) {
            this.setInput("SendGoodbye", value);
        }

        /*
        Set the value of the SendNotify input for this Choreo. ((optional, boolean) A flag used to send the unsubscribe notification email to the address defined in the list email notification settings. Specify '1' (true) or '0' (false). Defaults to 0.)
        */
        this.set_SendNotify = function(value) {
            this.setInput("SendNotify", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUnsubscribe Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUnsubscribeResultSet = function(resultStream) {
    ListUnsubscribeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Returns the string "true" for success and an error description for failures.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListUnsubscribe, choreography.Choreography);
util.inherits(ListUnsubscribeInputSet, choreography.InputSet);
util.inherits(ListUnsubscribeResultSet, choreography.ResultSet);
exports.ListUnsubscribe = ListUnsubscribe;


/*
    ListUpdateMember
    Update information for a member of a MailChimp list.
*/


var ListUpdateMember = function(session) {
    /*
        Create a new instance of the ListUpdateMember Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/ListUpdateMember"
    ListUpdateMember.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListUpdateMemberResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListUpdateMemberInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListUpdateMember
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListUpdateMemberInputSet = function() {
    ListUpdateMemberInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((required, string) The current email address for the subscriber you want to update.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the EmailType input for this Choreo. ((optional, string) Must be one of 'text', 'html', or 'mobile'. Defaults to html.)
        */
        this.set_EmailType = function(value) {
            this.setInput("EmailType", value);
        }

        /*
        Set the value of the ListId input for this Choreo. ((required, string) The id of the list that the existing subsbriber belongs to.)
        */
        this.set_ListId = function(value) {
            this.setInput("ListId", value);
        }

        /*
        Set the value of the Merge1 input for this Choreo. ((optional, string) Corresponds to the first merge var field defined in your account.)
        */
        this.set_Merge1 = function(value) {
            this.setInput("Merge1", value);
        }

        /*
        Set the value of the Merge2 input for this Choreo. ((optional, string) Corresponds to the second merge var field defined in your account.)
        */
        this.set_Merge2 = function(value) {
            this.setInput("Merge2", value);
        }

        /*
        Set the value of the Merge3 input for this Choreo. ((optional, string) Corresponds to the third merge var field defined in your account.)
        */
        this.set_Merge3 = function(value) {
            this.setInput("Merge3", value);
        }

        /*
        Set the value of the Merge4 input for this Choreo. ((optional, string) Corresponds to the fourth merge var field defined in your account.)
        */
        this.set_Merge4 = function(value) {
            this.setInput("Merge4", value);
        }

        /*
        Set the value of the NewEmail input for this Choreo. ((optional, multiline) Set this to update the email address of a subscriber.)
        */
        this.set_NewEmail = function(value) {
            this.setInput("NewEmail", value);
        }

        /*
        Set the value of the ReplaceInterests input for this Choreo. ((optional, boolean) A flag to determine whether to replace the interest groups with the groups provided or add the provided groups to the member's interest groups. Specify '1' (true) or '0' (false). Defaults to 1.)
        */
        this.set_ReplaceInterests = function(value) {
            this.setInput("ReplaceInterests", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListUpdateMember Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListUpdateMemberResultSet = function(resultStream) {
    ListUpdateMemberResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Returns the string "true" for success and an error description for failures.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListUpdateMember, choreography.Choreography);
util.inherits(ListUpdateMemberInputSet, choreography.InputSet);
util.inherits(ListUpdateMemberResultSet, choreography.ResultSet);
exports.ListUpdateMember = ListUpdateMember;


/*
    Lists
    Get all lists from a MailChimp account.
*/


var Lists = function(session) {
    /*
        Create a new instance of the Lists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/Lists"
    Lists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Lists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListsInputSet = function() {
    ListsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) Indicates the desired format for the response. Accepted values are "json" or "xml" (the default).)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Lists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListsResultSet = function(resultStream) {
    ListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Mailchimp. Corresponds to the format specified in the ResponseFormat parameter. Defaults to "xml".)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Lists, choreography.Choreography);
util.inherits(ListsInputSet, choreography.InputSet);
util.inherits(ListsResultSet, choreography.ResultSet);
exports.Lists = Lists;


/*
    Ping
    Test connection to MailChimp services.
*/


var Ping = function(session) {
    /*
        Create a new instance of the Ping Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/MailChimp/Ping"
    Ping.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Ping
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PingInputSet = function() {
    PingInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Mailchimp)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Ping Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PingResultSet = function(resultStream) {
    PingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from Mailchimp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Ping, choreography.Choreography);
util.inherits(PingInputSet, choreography.InputSet);
util.inherits(PingResultSet, choreography.ResultSet);
exports.Ping = Ping;

