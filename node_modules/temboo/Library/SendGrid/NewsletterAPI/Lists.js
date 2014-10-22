
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateRecipientList
    Create a new recipient list.
*/


var CreateRecipientList = function(session) {
    /*
        Create a new instance of the CreateRecipientList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Lists/CreateRecipientList"
    CreateRecipientList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateRecipientListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateRecipientListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateRecipientList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateRecipientListInputSet = function() {
    CreateRecipientListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid. )
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the ColumnName input for this Choreo. ((optional, string) An additional column name.)
        */
        this.set_ColumnName = function(value) {
            this.setInput("ColumnName", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The name of the recipient list that is being created.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The column name to be associated with email addresses.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid. Specify json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateRecipientList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateRecipientListResultSet = function(resultStream) {
    CreateRecipientListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateRecipientList, choreography.Choreography);
util.inherits(CreateRecipientListInputSet, choreography.InputSet);
util.inherits(CreateRecipientListResultSet, choreography.ResultSet);
exports.CreateRecipientList = CreateRecipientList;


/*
    DeleteRecipientList
    Delete a Recipient List.
*/


var DeleteRecipientList = function(session) {
    /*
        Create a new instance of the DeleteRecipientList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Lists/DeleteRecipientList"
    DeleteRecipientList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteRecipientListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteRecipientListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteRecipientList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteRecipientListInputSet = function() {
    DeleteRecipientListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The name of a Recipient List to be deleted from this account.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the DeleteRecipientList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteRecipientListResultSet = function(resultStream) {
    DeleteRecipientListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteRecipientList, choreography.Choreography);
util.inherits(DeleteRecipientListInputSet, choreography.InputSet);
util.inherits(DeleteRecipientListResultSet, choreography.ResultSet);
exports.DeleteRecipientList = DeleteRecipientList;


/*
    GetAllRecipientLists
    Retrieve all Recipient Lists.
*/


var GetAllRecipientLists = function(session) {
    /*
        Create a new instance of the GetAllRecipientLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Lists/GetAllRecipientLists"
    GetAllRecipientLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllRecipientListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllRecipientListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllRecipientLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllRecipientListsInputSet = function() {
    GetAllRecipientListsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the List input for this Choreo. ((optional, string) The name of a Recipient List to be retrieved.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the GetAllRecipientLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllRecipientListsResultSet = function(resultStream) {
    GetAllRecipientListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllRecipientLists, choreography.Choreography);
util.inherits(GetAllRecipientListsInputSet, choreography.InputSet);
util.inherits(GetAllRecipientListsResultSet, choreography.ResultSet);
exports.GetAllRecipientLists = GetAllRecipientLists;


/*
    RenameRecipientList
    Rename a recipient list.
*/


var RenameRecipientList = function(session) {
    /*
        Create a new instance of the RenameRecipientList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Lists/RenameRecipientList"
    RenameRecipientList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RenameRecipientListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RenameRecipientListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RenameRecipientList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RenameRecipientListInputSet = function() {
    RenameRecipientListInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key obtained from SendGrid.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the APIUser input for this Choreo. ((required, string) The username registered with SendGrid.)
        */
        this.set_APIUser = function(value) {
            this.setInput("APIUser", value);
        }

        /*
        Set the value of the List input for this Choreo. ((required, string) The name of Recipient List that is to be renamed.)
        */
        this.set_List = function(value) {
            this.setInput("List", value);
        }

        /*
        Set the value of the NewList input for this Choreo. ((required, string) The new name of Recipient List that is to be renamed.)
        */
        this.set_NewList = function(value) {
            this.setInput("NewList", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the RenameRecipientList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RenameRecipientListResultSet = function(resultStream) {
    RenameRecipientListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RenameRecipientList, choreography.Choreography);
util.inherits(RenameRecipientListInputSet, choreography.InputSet);
util.inherits(RenameRecipientListResultSet, choreography.ResultSet);
exports.RenameRecipientList = RenameRecipientList;

