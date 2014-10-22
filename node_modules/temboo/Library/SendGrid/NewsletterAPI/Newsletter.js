
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateNewsletter
    Create a new newsletter.
*/


var CreateNewsletter = function(session) {
    /*
        Create a new instance of the CreateNewsletter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Newsletter/CreateNewsletter"
    CreateNewsletter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateNewsletterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateNewsletterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateNewsletter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateNewsletterInputSet = function() {
    CreateNewsletterInputSet.super_.call(this);
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
        Set the value of the HTML input for this Choreo. ((required, string) The html portion of the newsletter.)
        */
        this.set_HTML = function(value) {
            this.setInput("HTML", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The Identiy that will be used for the newsletter to be created.  This must be an existing Identity.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the new newsletter.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The subject for the new newsletter.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text portion of the newsletter.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CreateNewsletter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateNewsletterResultSet = function(resultStream) {
    CreateNewsletterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateNewsletter, choreography.Choreography);
util.inherits(CreateNewsletterInputSet, choreography.InputSet);
util.inherits(CreateNewsletterResultSet, choreography.ResultSet);
exports.CreateNewsletter = CreateNewsletter;


/*
    DeleteNewsletter
    Remove a newsletter from the account.
*/


var DeleteNewsletter = function(session) {
    /*
        Create a new instance of the DeleteNewsletter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Newsletter/DeleteNewsletter"
    DeleteNewsletter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteNewsletterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteNewsletterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteNewsletter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteNewsletterInputSet = function() {
    DeleteNewsletterInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter that is to be deleted.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the DeleteNewsletter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteNewsletterResultSet = function(resultStream) {
    DeleteNewsletterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteNewsletter, choreography.Choreography);
util.inherits(DeleteNewsletterInputSet, choreography.InputSet);
util.inherits(DeleteNewsletterResultSet, choreography.ResultSet);
exports.DeleteNewsletter = DeleteNewsletter;


/*
    EditNewsletter
    Edit an existing newsletter.
*/


var EditNewsletter = function(session) {
    /*
        Create a new instance of the EditNewsletter Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Newsletter/EditNewsletter"
    EditNewsletter.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditNewsletterResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditNewsletterInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditNewsletter
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditNewsletterInputSet = function() {
    EditNewsletterInputSet.super_.call(this);
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
        Set the value of the HTML input for this Choreo. ((required, string) The html portion of the newsletter.)
        */
        this.set_HTML = function(value) {
            this.setInput("HTML", value);
        }

        /*
        Set the value of the Identity input for this Choreo. ((required, string) The new identity Identiy for the newsletter that is being edited.)
        */
        this.set_Identity = function(value) {
            this.setInput("Identity", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter that is being edited.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NewName input for this Choreo. ((required, string) The new name of the newsletter that is being edited.)
        */
        this.set_NewName = function(value) {
            this.setInput("NewName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format of the response from SendGrid, in either json, or xml.  Default is set to json.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Subject input for this Choreo. ((required, string) The new subject for the edited newsletter.)
        */
        this.set_Subject = function(value) {
            this.setInput("Subject", value);
        }

        /*
        Set the value of the Text input for this Choreo. ((required, string) The text portion of the newsletter.)
        */
        this.set_Text = function(value) {
            this.setInput("Text", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the EditNewsletter Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditNewsletterResultSet = function(resultStream) {
    EditNewsletterResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditNewsletter, choreography.Choreography);
util.inherits(EditNewsletterInputSet, choreography.InputSet);
util.inherits(EditNewsletterResultSet, choreography.ResultSet);
exports.EditNewsletter = EditNewsletter;


/*
    GetNewsletterContent
    Retrieve contents of a specified newsletter.
*/


var GetNewsletterContent = function(session) {
    /*
        Create a new instance of the GetNewsletterContent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Newsletter/GetNewsletterContent"
    GetNewsletterContent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewsletterContentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewsletterContentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewsletterContent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewsletterContentInputSet = function() {
    GetNewsletterContentInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter to be retrieved. It must be an existing newsletter.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the GetNewsletterContent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewsletterContentResultSet = function(resultStream) {
    GetNewsletterContentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewsletterContent, choreography.Choreography);
util.inherits(GetNewsletterContentInputSet, choreography.InputSet);
util.inherits(GetNewsletterContentResultSet, choreography.ResultSet);
exports.GetNewsletterContent = GetNewsletterContent;


/*
    ListAllNewsletters
    Get a list of all newsletters in this account.
*/


var ListAllNewsletters = function(session) {
    /*
        Create a new instance of the ListAllNewsletters Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Newsletter/ListAllNewsletters"
    ListAllNewsletters.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllNewslettersResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllNewslettersInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllNewsletters
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllNewslettersInputSet = function() {
    ListAllNewslettersInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((optional, string) The name of a specific newsletter to be retrieved. It must be an existing newsletter.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
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
A ResultSet with methods tailored to the values returned by the ListAllNewsletters Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllNewslettersResultSet = function(resultStream) {
    ListAllNewslettersResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllNewsletters, choreography.Choreography);
util.inherits(ListAllNewslettersInputSet, choreography.InputSet);
util.inherits(ListAllNewslettersResultSet, choreography.ResultSet);
exports.ListAllNewsletters = ListAllNewsletters;

